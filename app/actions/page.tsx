"use client"

import { useState } from "react"
import MainLayout from "@/components/permit/main-layout"
import Sidebar from "@/components/permit/sidebar"
import DesktopHeader from "@/components/permit/desktop-header"
import { Button } from "@/components/ui/button"
import { Plus, Search, X } from "lucide-react"
import { Input } from "@/components/ui/input"
import Link from "next/link"
import { getAllActions } from "@/services/data-service"
import ActionCard from "@/components/action/action-card"
import FilterDialog from "@/components/permit/filter-dialog"

export default function ActionsPage() {
  const allActions = getAllActions()
  const [searchQuery, setSearchQuery] = useState("")
  const [activeFilters, setActiveFilters] = useState({})

  const filteredActions = allActions.filter((action) => {
    // Search filter
    if (searchQuery) {
      const query = searchQuery.toLowerCase()
      const matchesSearch =
        action.title.toLowerCase().includes(query) ||
        action.assignedTo.toLowerCase().includes(query) ||
        action.category.toLowerCase().includes(query) ||
        action.description.toLowerCase().includes(query)

      if (!matchesSearch) return false
    }

    // Status filter
    if (activeFilters.status && activeFilters.status !== "All") {
      if (action.status !== activeFilters.status) return false
    }

    // Priority filter
    if (activeFilters.priority && activeFilters.priority !== "All") {
      if (action.priority !== activeFilters.priority) return false
    }

    // Overdue only filter
    if (activeFilters.showOverdueOnly) {
      const now = new Date()
      const dueDate = new Date(action.dueDate)
      if (!(dueDate < now && action.status !== "Completed")) return false
    }

    // Date range filter
    if (activeFilters.fromDate) {
      const fromDate = new Date(activeFilters.fromDate)
      const actionDate = new Date(action.date)
      if (actionDate < fromDate) return false
    }

    if (activeFilters.toDate) {
      const toDate = new Date(activeFilters.toDate)
      const actionDate = new Date(action.date)
      if (actionDate > toDate) return false
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
        <DesktopHeader title="Actions" />
        <div className="py-6 px-4 sm:px-6 md:px-8">
          <div className="flex justify-between items-center mb-6">
            <h1 className="text-2xl font-bold text-gray-900">Action Items</h1>
            <div className="flex space-x-3">
              <FilterDialog type="actions" onApplyFilters={handleApplyFilters} />

              <Button asChild className="flex items-center">
                <Link href="/actions/new">
                  <Plus className="h-4 w-4 mr-2" />
                  New Action
                </Link>
              </Button>
            </div>
          </div>

          <div className="relative mb-4">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
            <Input
              placeholder="Search actions by title, assignee, or category..."
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
                {
                  Object.keys(activeFilters).filter(
                    (k) => activeFilters[k] !== "All" && activeFilters[k] !== "" && activeFilters[k] !== false,
                  ).length
                }
              </span>
              <Button variant="ghost" size="sm" onClick={() => setActiveFilters({})}>
                Clear All Filters
              </Button>
            </div>
          )}

          <div className="grid grid-cols-1 gap-4 mb-8">
            {filteredActions.length > 0 ? (
              filteredActions.map((action) => <ActionCard key={action.id} action={action} />)
            ) : (
              <div className="text-center py-10 bg-gray-50 rounded-lg">
                <p className="text-gray-500">No actions found matching your criteria.</p>
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
