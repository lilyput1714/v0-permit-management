"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { AlertTriangle, MoreHorizontal, CheckCircle, Clock } from "lucide-react"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"
import Link from "next/link"
import type { Incident } from "@/types"

interface IncidentCardProps {
  incident: Incident
}

export default function IncidentCard({ incident }: IncidentCardProps) {
  const getStatusIcon = () => {
    switch (incident.status) {
      case "Closed":
        return <CheckCircle className="h-4 w-4 text-green-500" />
      case "Under Investigation":
        return <AlertTriangle className="h-4 w-4 text-orange-500" />
      case "Action Required":
        return <Clock className="h-4 w-4 text-blue-500" />
      default:
        return <Clock className="h-4 w-4 text-gray-500" />
    }
  }

  const getStatusColor = () => {
    switch (incident.status) {
      case "Closed":
        return "bg-green-100 text-green-800"
      case "Under Investigation":
        return "bg-orange-100 text-orange-800"
      case "Action Required":
        return "bg-blue-100 text-blue-800"
      default:
        return "bg-gray-100 text-gray-800"
    }
  }

  const getSeverityColor = () => {
    switch (incident.severity) {
      case "Critical":
        return "bg-red-100 text-red-800"
      case "High":
        return "bg-orange-100 text-orange-800"
      case "Medium":
        return "bg-yellow-100 text-yellow-800"
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
            <AlertTriangle className="h-5 w-5 mr-2 text-orange-500 flex-shrink-0" />
            <span className="truncate">{incident.title}</span>
          </CardTitle>
          <div className="flex items-center space-x-2 flex-shrink-0">
            <Badge className={getSeverityColor()}>Severity: {incident.severity}</Badge>
            <Badge className={`flex items-center ${getStatusColor()}`}>
              {getStatusIcon()}
              <span className="ml-1">{incident.status}</span>
            </Badge>
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="ghost" size="sm" className="h-8 w-8 p-0">
                  <MoreHorizontal className="h-4 w-4" />
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end">
                <DropdownMenuItem asChild>
                  <Link href={`/incidents/${incident.id}`}>View Details</Link>
                </DropdownMenuItem>
                <DropdownMenuItem>Update Status</DropdownMenuItem>
                <DropdownMenuItem>Create Action</DropdownMenuItem>
                <DropdownMenuItem>Generate Report</DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </div>
        </div>
      </CardHeader>
      <CardContent>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div>
            <p className="text-sm text-gray-500">Location</p>
            <p className="text-sm font-medium truncate">{incident.location}</p>
          </div>
          <div>
            <p className="text-sm text-gray-500">Reported By</p>
            <p className="text-sm font-medium truncate">{incident.reportedBy}</p>
          </div>
          <div>
            <p className="text-sm text-gray-500">Incident Type</p>
            <p className="text-sm font-medium truncate">{incident.incidentType}</p>
          </div>
        </div>
        <div className="mt-4">
          <p className="text-sm text-gray-500">Description</p>
          <p className="text-sm line-clamp-2">{incident.description}</p>
        </div>
        <div className="mt-4 flex justify-between items-center">
          <div>
            {incident.rootCause && <p className="text-xs text-gray-500 truncate">Root Cause: {incident.rootCause}</p>}
          </div>
          <Button variant="ghost" size="sm" className="text-blue-600 flex-shrink-0" asChild>
            <Link href={`/incidents/${incident.id}`}>
              <AlertTriangle className="h-4 w-4 mr-1" />
              View Incident
            </Link>
          </Button>
        </div>
      </CardContent>
    </Card>
  )
}
