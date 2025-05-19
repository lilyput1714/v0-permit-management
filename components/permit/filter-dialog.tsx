"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import { Filter } from "lucide-react"
import { Checkbox } from "@/components/ui/checkbox"

interface FilterDialogProps {
  type: "observations" | "actions" | "permits" | "audits" | "hira"
  onApplyFilters: (filters: any) => void
}

export default function FilterDialog({ type, onApplyFilters }: FilterDialogProps) {
  const [open, setOpen] = useState(false)
  const [filters, setFilters] = useState({})

  const getFilterOptions = () => {
    switch (type) {
      case "observations":
        return {
          status: ["All", "Open", "In Progress", "Closed"],
          observationType: ["All", "Safe", "Unsafe", "Near Miss"],
          severity: ["All", "Low", "Medium", "High", "Critical"],
          dateRange: true,
        }
      case "actions":
        return {
          status: ["All", "In Progress", "Completed", "Overdue"],
          priority: ["All", "Low", "Medium", "High"],
          dateRange: true,
          showOverdueOnly: true,
        }
      case "permits":
        return {
          status: ["All", "Draft", "Pending Approval", "Approved", "Expired", "Closed"],
          permitType: ["All", "Hot Work", "Confined Space", "Working at Height", "Excavation", "Electrical"],
          dateRange: true,
        }
      case "audits":
        return {
          status: ["All", "Scheduled", "In Progress", "Completed"],
          auditType: ["All", "Safety Inspection", "Compliance Audit", "Management Review", "Contractor Audit"],
          dateRange: true,
        }
      case "hira":
        return {
          status: ["All", "Draft", "In Review", "Approved"],
          riskLevel: ["All", "Low", "Medium", "High"],
          hazardType: ["All", "Physical", "Chemical", "Biological", "Ergonomic", "Psychological"],
          dateRange: true,
        }
      default:
        return {}
    }
  }

  const options = getFilterOptions()

  const handleFilterChange = (key: string, value: any) => {
    setFilters((prev) => ({
      ...prev,
      [key]: value,
    }))
  }

  const handleApplyFilters = () => {
    onApplyFilters(filters)
    setOpen(false)
  }

  const handleResetFilters = () => {
    setFilters({})
  }

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <Button variant="outline" className="flex items-center">
          <Filter className="h-4 w-4 mr-2" />
          Filter
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>Filter {type.charAt(0).toUpperCase() + type.slice(1)}</DialogTitle>
          <DialogDescription>
            Apply filters to narrow down your {type} list. Click apply when you're done.
          </DialogDescription>
        </DialogHeader>
        <div className="grid gap-4 py-4">
          {options.status && (
            <div className="grid grid-cols-4 items-center gap-4">
              <Label htmlFor="status" className="text-right">
                Status
              </Label>
              <div className="col-span-3">
                <Select value={filters.status || "All"} onValueChange={(value) => handleFilterChange("status", value)}>
                  <SelectTrigger>
                    <SelectValue placeholder="Select status" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectGroup>
                      <SelectLabel>Status</SelectLabel>
                      {options.status.map((status) => (
                        <SelectItem key={status} value={status}>
                          {status}
                        </SelectItem>
                      ))}
                    </SelectGroup>
                  </SelectContent>
                </Select>
              </div>
            </div>
          )}

          {options.observationType && (
            <div className="grid grid-cols-4 items-center gap-4">
              <Label htmlFor="observationType" className="text-right">
                Type
              </Label>
              <div className="col-span-3">
                <Select
                  value={filters.observationType || "All"}
                  onValueChange={(value) => handleFilterChange("observationType", value)}
                >
                  <SelectTrigger>
                    <SelectValue placeholder="Select type" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectGroup>
                      <SelectLabel>Observation Type</SelectLabel>
                      {options.observationType.map((type) => (
                        <SelectItem key={type} value={type}>
                          {type}
                        </SelectItem>
                      ))}
                    </SelectGroup>
                  </SelectContent>
                </Select>
              </div>
            </div>
          )}

          {options.severity && (
            <div className="grid grid-cols-4 items-center gap-4">
              <Label htmlFor="severity" className="text-right">
                Severity
              </Label>
              <div className="col-span-3">
                <Select
                  value={filters.severity || "All"}
                  onValueChange={(value) => handleFilterChange("severity", value)}
                >
                  <SelectTrigger>
                    <SelectValue placeholder="Select severity" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectGroup>
                      <SelectLabel>Severity</SelectLabel>
                      {options.severity.map((severity) => (
                        <SelectItem key={severity} value={severity}>
                          {severity}
                        </SelectItem>
                      ))}
                    </SelectGroup>
                  </SelectContent>
                </Select>
              </div>
            </div>
          )}

          {options.priority && (
            <div className="grid grid-cols-4 items-center gap-4">
              <Label htmlFor="priority" className="text-right">
                Priority
              </Label>
              <div className="col-span-3">
                <Select
                  value={filters.priority || "All"}
                  onValueChange={(value) => handleFilterChange("priority", value)}
                >
                  <SelectTrigger>
                    <SelectValue placeholder="Select priority" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectGroup>
                      <SelectLabel>Priority</SelectLabel>
                      {options.priority.map((priority) => (
                        <SelectItem key={priority} value={priority}>
                          {priority}
                        </SelectItem>
                      ))}
                    </SelectGroup>
                  </SelectContent>
                </Select>
              </div>
            </div>
          )}

          {options.permitType && (
            <div className="grid grid-cols-4 items-center gap-4">
              <Label htmlFor="permitType" className="text-right">
                Permit Type
              </Label>
              <div className="col-span-3">
                <Select
                  value={filters.permitType || "All"}
                  onValueChange={(value) => handleFilterChange("permitType", value)}
                >
                  <SelectTrigger>
                    <SelectValue placeholder="Select permit type" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectGroup>
                      <SelectLabel>Permit Type</SelectLabel>
                      {options.permitType.map((type) => (
                        <SelectItem key={type} value={type}>
                          {type}
                        </SelectItem>
                      ))}
                    </SelectGroup>
                  </SelectContent>
                </Select>
              </div>
            </div>
          )}

          {options.auditType && (
            <div className="grid grid-cols-4 items-center gap-4">
              <Label htmlFor="auditType" className="text-right">
                Audit Type
              </Label>
              <div className="col-span-3">
                <Select
                  value={filters.auditType || "All"}
                  onValueChange={(value) => handleFilterChange("auditType", value)}
                >
                  <SelectTrigger>
                    <SelectValue placeholder="Select audit type" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectGroup>
                      <SelectLabel>Audit Type</SelectLabel>
                      {options.auditType.map((type) => (
                        <SelectItem key={type} value={type}>
                          {type}
                        </SelectItem>
                      ))}
                    </SelectGroup>
                  </SelectContent>
                </Select>
              </div>
            </div>
          )}

          {options.riskLevel && (
            <div className="grid grid-cols-4 items-center gap-4">
              <Label htmlFor="riskLevel" className="text-right">
                Risk Level
              </Label>
              <div className="col-span-3">
                <Select
                  value={filters.riskLevel || "All"}
                  onValueChange={(value) => handleFilterChange("riskLevel", value)}
                >
                  <SelectTrigger>
                    <SelectValue placeholder="Select risk level" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectGroup>
                      <SelectLabel>Risk Level</SelectLabel>
                      {options.riskLevel.map((level) => (
                        <SelectItem key={level} value={level}>
                          {level}
                        </SelectItem>
                      ))}
                    </SelectGroup>
                  </SelectContent>
                </Select>
              </div>
            </div>
          )}

          {options.hazardType && (
            <div className="grid grid-cols-4 items-center gap-4">
              <Label htmlFor="hazardType" className="text-right">
                Hazard Type
              </Label>
              <div className="col-span-3">
                <Select
                  value={filters.hazardType || "All"}
                  onValueChange={(value) => handleFilterChange("hazardType", value)}
                >
                  <SelectTrigger>
                    <SelectValue placeholder="Select hazard type" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectGroup>
                      <SelectLabel>Hazard Type</SelectLabel>
                      {options.hazardType.map((type) => (
                        <SelectItem key={type} value={type}>
                          {type}
                        </SelectItem>
                      ))}
                    </SelectGroup>
                  </SelectContent>
                </Select>
              </div>
            </div>
          )}

          {options.dateRange && (
            <>
              <div className="grid grid-cols-4 items-center gap-4">
                <Label htmlFor="fromDate" className="text-right">
                  From Date
                </Label>
                <div className="col-span-3">
                  <Input
                    id="fromDate"
                    type="date"
                    value={filters.fromDate || ""}
                    onChange={(e) => handleFilterChange("fromDate", e.target.value)}
                  />
                </div>
              </div>
              <div className="grid grid-cols-4 items-center gap-4">
                <Label htmlFor="toDate" className="text-right">
                  To Date
                </Label>
                <div className="col-span-3">
                  <Input
                    id="toDate"
                    type="date"
                    value={filters.toDate || ""}
                    onChange={(e) => handleFilterChange("toDate", e.target.value)}
                  />
                </div>
              </div>
            </>
          )}

          {options.showOverdueOnly && (
            <div className="grid grid-cols-4 items-center gap-4">
              <Label htmlFor="showOverdueOnly" className="text-right">
                Overdue Only
              </Label>
              <div className="col-span-3 flex items-center space-x-2">
                <Checkbox
                  id="showOverdueOnly"
                  checked={filters.showOverdueOnly || false}
                  onCheckedChange={(checked) => handleFilterChange("showOverdueOnly", checked)}
                />
                <Label htmlFor="showOverdueOnly">Show only overdue items</Label>
              </div>
            </div>
          )}
        </div>
        <DialogFooter className="flex justify-between">
          <Button variant="outline" onClick={handleResetFilters}>
            Reset Filters
          </Button>
          <Button type="submit" onClick={handleApplyFilters}>
            Apply Filters
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  )
}
