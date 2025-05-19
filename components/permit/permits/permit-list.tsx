"use client"

import { Button } from "@/components/ui/button"
import { Filter, Plus, Search, SortAsc, SortDesc, X } from "lucide-react"
import PermitCard from "./permit-card"
import Link from "next/link"
import { getAllPermits } from "@/services/data-service"
import { useState, useEffect } from "react"
import type { Permit } from "@/types"
import { Input } from "@/components/ui/input"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
  DropdownMenuCheckboxItem,
} from "@/components/ui/dropdown-menu"

export default function PermitList() {
  const allPermits = getAllPermits()
  const [permits, setPermits] = useState<Permit[]>(allPermits)
  const [searchTerm, setSearchTerm] = useState("")
  const [statusFilter, setStatusFilter] = useState<string[]>([])
  const [typeFilter, setTypeFilter] = useState<string[]>([])
  const [sortField, setSortField] = useState<string>("date")
  const [sortDirection, setSortDirection] = useState<"asc" | "desc">("desc")

  // Get unique permit types
  const permitTypes = Array.from(new Set(allPermits.map((permit) => permit.type)))

  // Get unique permit statuses
  const permitStatuses = Array.from(new Set(allPermits.map((permit) => permit.status)))

  useEffect(() => {
    let filteredPermits = [...allPermits]

    // Apply search filter
    if (searchTerm) {
      filteredPermits = filteredPermits.filter(
        (permit) =>
          permit.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
          permit.location.toLowerCase().includes(searchTerm.toLowerCase()) ||
          permit.requestedBy.toLowerCase().includes(searchTerm.toLowerCase()),
      )
    }

    // Apply status filter
    if (statusFilter.length > 0) {
      filteredPermits = filteredPermits.filter((permit) => statusFilter.includes(permit.status))
    }

    // Apply type filter
    if (typeFilter.length > 0) {
      filteredPermits = filteredPermits.filter((permit) => typeFilter.includes(permit.type))
    }

    // Apply sorting
    filteredPermits.sort((a, b) => {
      let comparison = 0

      switch (sortField) {
        case "date":
          comparison = new Date(a.date).getTime() - new Date(b.date).getTime()
          break
        case "title":
          comparison = a.title.localeCompare(b.title)
          break
        case "status":
          comparison = a.status.localeCompare(b.status)
          break
        case "type":
          comparison = a.type.localeCompare(b.type)
          break
        default:
          comparison = new Date(a.date).getTime() - new Date(b.date).getTime()
      }

      return sortDirection === "asc" ? comparison : -comparison
    })

    setPermits(filteredPermits)
  }, [allPermits, searchTerm, statusFilter, typeFilter, sortField, sortDirection])

  const toggleStatusFilter = (status: string) => {
    setStatusFilter((prev) => (prev.includes(status) ? prev.filter((s) => s !== status) : [...prev, status]))
  }

  const toggleTypeFilter = (type: string) => {
    setTypeFilter((prev) => (prev.includes(type) ? prev.filter((t) => t !== type) : [...prev, type]))
  }

  const toggleSortDirection = () => {
    setSortDirection((prev) => (prev === "asc" ? "desc" : "asc"))
  }

  const clearFilters = () => {
    setSearchTerm("")
    setStatusFilter([])
    setTypeFilter([])
    setSortField("date")
    setSortDirection("desc")
  }

  return (
    <>
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-bold text-gray-900">Work Permits</h1>
        <div className="flex space-x-3">
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="outline" className="flex items-center">
                <Filter className="h-4 w-4 mr-2" />
                Filter
                {(statusFilter.length > 0 || typeFilter.length > 0) && (
                  <span className="ml-1 bg-blue-100 text-blue-800 text-xs font-medium rounded-full px-2 py-0.5">
                    {statusFilter.length + typeFilter.length}
                  </span>
                )}
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent className="w-56">
              <DropdownMenuLabel>Filter Permits</DropdownMenuLabel>
              <DropdownMenuSeparator />

              <DropdownMenuGroup>
                <DropdownMenuLabel className="text-xs">Status</DropdownMenuLabel>
                {permitStatuses.map((status) => (
                  <DropdownMenuCheckboxItem
                    key={status}
                    checked={statusFilter.includes(status)}
                    onCheckedChange={() => toggleStatusFilter(status)}
                  >
                    {status}
                  </DropdownMenuCheckboxItem>
                ))}
              </DropdownMenuGroup>

              <DropdownMenuSeparator />

              <DropdownMenuGroup>
                <DropdownMenuLabel className="text-xs">Type</DropdownMenuLabel>
                {permitTypes.map((type) => (
                  <DropdownMenuCheckboxItem
                    key={type}
                    checked={typeFilter.includes(type)}
                    onCheckedChange={() => toggleTypeFilter(type)}
                  >
                    {type}
                  </DropdownMenuCheckboxItem>
                ))}
              </DropdownMenuGroup>

              <DropdownMenuSeparator />

              <DropdownMenuGroup>
                <DropdownMenuLabel className="text-xs">Sort By</DropdownMenuLabel>
                <DropdownMenuItem
                  onClick={() => {
                    setSortField("date")
                    if (sortField === "date") toggleSortDirection()
                  }}
                >
                  Date {sortField === "date" && (sortDirection === "asc" ? "↑" : "↓")}
                </DropdownMenuItem>
                <DropdownMenuItem
                  onClick={() => {
                    setSortField("title")
                    if (sortField === "title") toggleSortDirection()
                  }}
                >
                  Title {sortField === "title" && (sortDirection === "asc" ? "↑" : "↓")}
                </DropdownMenuItem>
                <DropdownMenuItem
                  onClick={() => {
                    setSortField("status")
                    if (sortField === "status") toggleSortDirection()
                  }}
                >
                  Status {sortField === "status" && (sortDirection === "asc" ? "↑" : "↓")}
                </DropdownMenuItem>
                <DropdownMenuItem
                  onClick={() => {
                    setSortField("type")
                    if (sortField === "type") toggleSortDirection()
                  }}
                >
                  Type {sortField === "type" && (sortDirection === "asc" ? "↑" : "↓")}
                </DropdownMenuItem>
              </DropdownMenuGroup>

              <DropdownMenuSeparator />

              <DropdownMenuItem onClick={clearFilters}>Clear Filters</DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>

          <Button
            variant="outline"
            onClick={toggleSortDirection}
            className="flex items-center"
            aria-label={`Sort ${sortDirection === "asc" ? "descending" : "ascending"}`}
          >
            {sortDirection === "asc" ? (
              <>
                <SortAsc className="h-4 w-4 mr-1" />
                <span className="sr-only md:not-sr-only md:inline-block">Sort Ascending</span>
              </>
            ) : (
              <>
                <SortDesc className="h-4 w-4 mr-1" />
                <span className="sr-only md:not-sr-only md:inline-block">Sort Descending</span>
              </>
            )}
          </Button>

          <Button asChild className="flex items-center">
            <Link href="/permits/new">
              <Plus className="h-4 w-4 mr-2" />
              New Permit
            </Link>
          </Button>
        </div>
      </div>

      <div className="relative mb-4">
        <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
        <Input
          placeholder="Search permits by title, location, or requestor..."
          className="pl-10 pr-20"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          onKeyDown={(e) => {
            if (e.key === "Enter") {
              // Trigger search on Enter key
              e.preventDefault()
            }
          }}
        />
        {searchTerm && (
          <Button
            variant="ghost"
            size="sm"
            className="absolute right-2 top-1/2 transform -translate-y-1/2 h-8"
            onClick={() => setSearchTerm("")}
            aria-label="Clear search"
          >
            <X className="h-4 w-4" />
          </Button>
        )}
      </div>

      <div className="grid grid-cols-1 gap-4 mb-8">
        {permits.length > 0 ? (
          permits.map((permit) => <PermitCard key={permit.id} permit={permit} />)
        ) : (
          <div className="text-center py-8 bg-gray-50 rounded-lg">
            <p className="text-gray-500">No permits found matching your criteria.</p>
            <Button variant="link" onClick={clearFilters}>
              Clear filters
            </Button>
          </div>
        )}
      </div>
    </>
  )
}
