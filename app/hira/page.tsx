"use client"

import { useState } from "react"
import MainLayout from "@/components/permit/main-layout"
import Sidebar from "@/components/permit/sidebar"
import DesktopHeader from "@/components/permit/desktop-header"
import { Button } from "@/components/ui/button"
import { Plus, Search, X } from "lucide-react"
import { Input } from "@/components/ui/input"
import Link from "next/link"
import { getAllHIRAs } from "@/services/data-service"
import HIRACard from "@/components/hira/hira-card"
import FilterDialog from "@/components/permit/filter-dialog"

export default function HIRAPage() {
  const allHiras = getAllHIRAs()
  const [searchQuery, setSearchQuery] = useState("")
  const [activeFilters, setActiveFilters] = useState({})

  const filteredHiras = allHiras.filter((hira) => {
    // Search filter
    if (searchQuery) {
      const query = searchQuery.toLowerCase()
      const matchesSearch =
        hira.title.toLowerCase().includes(query) ||
        hira.location.toLowerCase().includes(query) ||
        hira.hazardType.toLowerCase().includes(query) ||
        hira.description.toLowerCase().includes(query)

      if (!matchesSearch) return false
    }

    // Status filter
    if (activeFilters.status && activeFilters.status !== "All") {
      if (hira.status !== activeFilters.status) return false
    }

    // Risk Level filter
    if (activeFilters.riskLevel && activeFilters.riskLevel !== "All") {
      if (hira.riskLevel !== activeFilters.riskLevel) return false
    }

    // Hazard Type filter
    if (activeFilters.hazardType && activeFilters.hazardType !== "All") {
      if (hira.hazardType !== activeFilters.hazardType) return false
    }

    // Date range filter
    if (activeFilters.fromDate) {
      const fromDate = new Date(activeFilters.fromDate)
      const hiraDate = new Date(hira.date)
      if (hiraDate < fromDate) return false
    }

    if (activeFilters.toDate) {
      const toDate = new Date(activeFilters.toDate)
      const hiraDate = new Date(hira.date)
      if (hiraDate > toDate) return false
    }

    return true
  })

  const handleApplyFilters = (filters) => {
    setActiveFilters(filters)
  }

  return (
    <MainLayout>
      <Sidebar />
      <div className="flex-1 md:ml-64">
        <DesktopHeader title="HIRA" />
        <div className="py-6 px-4 sm:px-6 md:px-8">
          <div className="flex justify-between items-center mb-6">
            <h1 className="text-2xl font-bold text-gray-900">Hazard Identification & Risk Assessment</h1>
            <div className="flex space-x-3">
              <FilterDialog type="hira" onApplyFilters={handleApplyFilters} />

              <Button asChild className="flex items-center">
                <Link href="/hira/new">
                  <Plus className="h-4 w-4 mr-2" />
                  New Assessment
                </Link>
              </Button>
            </div>
          </div>

          <div className="relative mb-4">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
            <Input
              placeholder="Search assessments by title, location, or hazard type..."
              className="pl-10 pr-20"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
            {searchQuery && (
              <Button
                variant="ghost"
                size="sm"
                className="absolute right-2 top-1/2 transform -translate-y-1/2 h-8"
                aria-label="Clear search"
                onClick={() => setSearchQuery("")}
              >
                <X className="h-4 w-4" />
              </Button>
            )}
          </div>

          {Object.keys(activeFilters).length > 0 && (
            <div className="mb-4 p-2 bg-blue-50 rounded-md flex items-center justify-between">
              <span className="text-sm text-blue-700">
                Filters applied:{" "}
                {Object.keys(activeFilters).filter((k) => activeFilters[k] !== "All" && activeFilters[k] !== "").length}
              </span>
              <Button variant="ghost" size="sm" onClick={() => setActiveFilters({})}>
                Clear All Filters
              </Button>
            </div>
          )}

          <div className="grid grid-cols-1 gap-4 mb-8">
            {filteredHiras.length > 0 ? (
              filteredHiras.map((hira) => <HIRACard key={hira.id} hira={hira} />)
            ) : (
              <div className="text-center py-10 bg-gray-50 rounded-lg">
                <p className="text-gray-500">No assessments found matching your criteria.</p>
                <Button
                  variant="link"
                  onClick={() => {
                    setSearchQuery("")
                    setActiveFilters({})
                  }}
                >
                  Clear all filters
                </Button>
              </div>
            )}
          </div>
        </div>
      </div>
    </MainLayout>
  )
}
