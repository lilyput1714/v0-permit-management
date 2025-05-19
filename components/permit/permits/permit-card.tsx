"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { FileText, MoreHorizontal, CheckCircle, XCircle, Clock, AlertTriangle } from "lucide-react"
import Link from "next/link"
import type { Permit } from "@/types"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"
import { updatePermitStatus } from "@/services/data-service"
import { useState } from "react"
import { useRouter } from "next/navigation"
import { Badge } from "@/components/ui/badge"
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip"

interface PermitCardProps {
  permit: Permit
}

export default function PermitCard({ permit }: PermitCardProps) {
  const PermitIcon = permit.icon
  const [isUpdating, setIsUpdating] = useState(false)
  const router = useRouter()

  const handleStatusChange = async (newStatus: string) => {
    setIsUpdating(true)
    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 1000))
    updatePermitStatus(permit.id, newStatus)
    setIsUpdating(false)
    router.refresh()
  }

  const getStatusIcon = () => {
    switch (permit.status) {
      case "Approved":
        return <CheckCircle className="h-4 w-4 text-green-500" />
      case "Rejected":
        return <XCircle className="h-4 w-4 text-red-500" />
      case "Pending Approval":
        return <Clock className="h-4 w-4 text-orange-500" />
      case "In Progress":
        return <AlertTriangle className="h-4 w-4 text-blue-500" />
      default:
        return <Clock className="h-4 w-4 text-gray-500" />
    }
  }

  const getStatusColor = () => {
    switch (permit.status) {
      case "Approved":
        return "bg-green-100 text-green-800"
      case "Rejected":
        return "bg-red-100 text-red-800"
      case "Pending Approval":
        return "bg-orange-100 text-orange-800"
      case "In Progress":
        return "bg-blue-100 text-blue-800"
      default:
        return "bg-gray-100 text-gray-800"
    }
  }

  const getPriorityColor = () => {
    switch (permit.priority) {
      case "High":
        return "bg-red-100 text-red-800"
      case "Medium":
        return "bg-orange-100 text-orange-800"
      case "Low":
        return "bg-green-100 text-green-800"
      default:
        return "bg-gray-100 text-gray-800"
    }
  }

  return (
    <Card className="hover:shadow-md transition-shadow">
      <CardHeader className="pb-2">
        <div className="flex justify-between">
          <CardTitle className="text-lg font-medium flex items-center">
            <PermitIcon className="h-5 w-5 mr-2 text-blue-500" />
            {permit.title}
            <span className="ml-2 text-sm bg-gray-100 px-2 py-0.5 rounded-full">{permit.type}</span>
          </CardTitle>
          <div className="flex items-center space-x-2">
            {permit.priority && (
              <TooltipProvider>
                <Tooltip>
                  <TooltipTrigger asChild>
                    <Badge className={`${getPriorityColor()}`}>{permit.priority}</Badge>
                  </TooltipTrigger>
                  <TooltipContent>
                    <p>Priority Level</p>
                  </TooltipContent>
                </Tooltip>
              </TooltipProvider>
            )}
            <TooltipProvider>
              <Tooltip>
                <TooltipTrigger asChild>
                  <Badge className={`flex items-center ${getStatusColor()}`}>
                    {getStatusIcon()}
                    <span className="ml-1">{permit.status}</span>
                  </Badge>
                </TooltipTrigger>
                <TooltipContent>
                  <p>Current Status</p>
                </TooltipContent>
              </Tooltip>
            </TooltipProvider>
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="ghost" size="sm" className="h-8 w-8 p-0">
                  <MoreHorizontal className="h-4 w-4" />
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end">
                <DropdownMenuItem asChild>
                  <Link href={`/permits/${permit.id}`}>View Details</Link>
                </DropdownMenuItem>
                {permit.status === "Pending Approval" && (
                  <>
                    <DropdownMenuItem onClick={() => handleStatusChange("Approved")} disabled={isUpdating}>
                      Approve
                    </DropdownMenuItem>
                    <DropdownMenuItem onClick={() => handleStatusChange("Rejected")} disabled={isUpdating}>
                      Reject
                    </DropdownMenuItem>
                  </>
                )}
                {permit.status === "Approved" && (
                  <DropdownMenuItem onClick={() => handleStatusChange("In Progress")} disabled={isUpdating}>
                    Mark as In Progress
                  </DropdownMenuItem>
                )}
                {permit.status === "In Progress" && (
                  <DropdownMenuItem onClick={() => handleStatusChange("Completed")} disabled={isUpdating}>
                    Mark as Completed
                  </DropdownMenuItem>
                )}
                <DropdownMenuItem>Print Permit</DropdownMenuItem>
                <DropdownMenuItem>Download PDF</DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </div>
        </div>
      </CardHeader>
      <CardContent>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
          <div>
            <p className="text-sm text-gray-500">Location</p>
            <p className="text-sm font-medium">{permit.location}</p>
          </div>
          <div>
            <p className="text-sm text-gray-500">Requested By</p>
            <p className="text-sm font-medium">{permit.requestedBy}</p>
          </div>
          <div>
            <p className="text-sm text-gray-500">Valid Period</p>
            <p className="text-sm font-medium">
              {permit.startDate} to {permit.endDate}
            </p>
          </div>
        </div>
        <div className="mt-4 flex justify-between items-center">
          <div>{permit.permitNumber && <p className="text-xs text-gray-500">Permit #: {permit.permitNumber}</p>}</div>
          <Button variant="ghost" size="sm" className="text-blue-600" asChild>
            <Link href={`/permits/${permit.id}`}>
              <FileText className="h-4 w-4 mr-1" />
              View Permit
            </Link>
          </Button>
        </div>
      </CardContent>
    </Card>
  )
}
