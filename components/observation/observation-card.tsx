"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Eye, MoreHorizontal, CheckCircle, Clock, AlertTriangle } from "lucide-react"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"
import Link from "next/link"
import type { Observation } from "@/types"

interface ObservationCardProps {
  observation: Observation
}

export default function ObservationCard({ observation }: ObservationCardProps) {
  const getStatusIcon = () => {
    switch (observation.status) {
      case "Closed":
        return <CheckCircle className="h-4 w-4 text-green-500" />
      case "Open":
        return <AlertTriangle className="h-4 w-4 text-orange-500" />
      case "In Progress":
        return <Clock className="h-4 w-4 text-blue-500" />
      default:
        return <Clock className="h-4 w-4 text-gray-500" />
    }
  }

  const getStatusColor = () => {
    switch (observation.status) {
      case "Closed":
        return "bg-green-100 text-green-800"
      case "Open":
        return "bg-orange-100 text-orange-800"
      case "In Progress":
        return "bg-blue-100 text-blue-800"
      default:
        return "bg-gray-100 text-gray-800"
    }
  }

  const getObservationTypeColor = () => {
    switch (observation.observationType) {
      case "Safe":
        return "bg-green-100 text-green-800"
      case "Unsafe":
        return "bg-red-100 text-red-800"
      case "Near Miss":
        return "bg-yellow-100 text-yellow-800"
      default:
        return "bg-gray-100 text-gray-800"
    }
  }

  const getSeverityColor = () => {
    switch (observation.severity) {
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
            <Eye className="h-5 w-5 mr-2 text-blue-500" />
            <span className="truncate">{observation.title}</span>
          </CardTitle>
          <div className="flex items-center space-x-2 flex-shrink-0">
            <Badge className={getObservationTypeColor()}>{observation.observationType}</Badge>
            <Badge className={`flex items-center ${getStatusColor()}`}>
              {getStatusIcon()}
              <span className="ml-1">{observation.status}</span>
            </Badge>
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="ghost" size="sm" className="h-8 w-8 p-0">
                  <MoreHorizontal className="h-4 w-4" />
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end">
                <DropdownMenuItem asChild>
                  <Link href={`/observations/${observation.id}`}>View Details</Link>
                </DropdownMenuItem>
                <DropdownMenuItem>Update Status</DropdownMenuItem>
                <DropdownMenuItem>Assign Action</DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </div>
        </div>
      </CardHeader>
      <CardContent>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div>
            <p className="text-sm text-gray-500">Location</p>
            <p className="text-sm font-medium truncate">{observation.location}</p>
          </div>
          <div>
            <p className="text-sm text-gray-500">Reported By</p>
            <p className="text-sm font-medium truncate">{observation.reportedBy}</p>
          </div>
          <div>
            <p className="text-sm text-gray-500">Category</p>
            <p className="text-sm font-medium truncate">{observation.category}</p>
          </div>
        </div>
        <div className="mt-4">
          <p className="text-sm text-gray-500">Description</p>
          <p className="text-sm line-clamp-2">{observation.description}</p>
        </div>
        <div className="mt-4 flex justify-between items-center">
          <Badge className={getSeverityColor()}>Severity: {observation.severity}</Badge>
          <Button variant="ghost" size="sm" className="text-blue-600" asChild>
            <Link href={`/observations/${observation.id}`}>
              <Eye className="h-4 w-4 mr-1" />
              View Details
            </Link>
          </Button>
        </div>
      </CardContent>
    </Card>
  )
}
