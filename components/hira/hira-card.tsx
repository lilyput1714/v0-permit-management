"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Shield, MoreHorizontal, CheckCircle, Clock, Calendar } from "lucide-react"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"
import Link from "next/link"
import type { HIRA } from "@/types"
import { format } from "date-fns"

interface HIRACardProps {
  hira: HIRA
}

export default function HIRACard({ hira }: HIRACardProps) {
  const getStatusIcon = () => {
    switch (hira.status) {
      case "Approved":
        return <CheckCircle className="h-4 w-4 text-green-500" />
      case "In Review":
        return <Clock className="h-4 w-4 text-blue-500" />
      case "Draft":
        return <Clock className="h-4 w-4 text-orange-500" />
      default:
        return <Clock className="h-4 w-4 text-gray-500" />
    }
  }

  const getStatusColor = () => {
    switch (hira.status) {
      case "Approved":
        return "bg-green-100 text-green-800"
      case "In Review":
        return "bg-blue-100 text-blue-800"
      case "Draft":
        return "bg-orange-100 text-orange-800"
      default:
        return "bg-gray-100 text-gray-800"
    }
  }

  const getRiskLevelColor = () => {
    switch (hira.riskLevel) {
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
            <Shield className="h-5 w-5 mr-2 text-blue-500 flex-shrink-0" />
            <span className="truncate">{hira.title}</span>
          </CardTitle>
          <div className="flex items-center space-x-2 flex-shrink-0">
            <Badge className={getRiskLevelColor()}>Risk Level: {hira.riskLevel}</Badge>
            <Badge className={`flex items-center ${getStatusColor()}`}>
              {getStatusIcon()}
              <span className="ml-1">{hira.status}</span>
            </Badge>
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="ghost" size="sm" className="h-8 w-8 p-0">
                  <MoreHorizontal className="h-4 w-4" />
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end">
                <DropdownMenuItem asChild>
                  <Link href={`/hira/${hira.id}`}>View Details</Link>
                </DropdownMenuItem>
                {hira.status !== "Approved" && <DropdownMenuItem>Update Status</DropdownMenuItem>}
                <DropdownMenuItem>Create Actions</DropdownMenuItem>
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
            <p className="text-sm font-medium truncate">{hira.location}</p>
          </div>
          <div>
            <p className="text-sm text-gray-500">Hazard Type</p>
            <p className="text-sm font-medium truncate">{hira.hazardType}</p>
          </div>
          <div>
            <p className="text-sm text-gray-500">Assessed By</p>
            <p className="text-sm font-medium truncate">{hira.assessedBy}</p>
          </div>
        </div>
        <div className="mt-4">
          <p className="text-sm text-gray-500">Description</p>
          <p className="text-sm line-clamp-2">{hira.description}</p>
        </div>
        <div className="mt-4">
          <p className="text-sm text-gray-500">Control Measures</p>
          <div className="flex flex-wrap gap-1 mt-1 max-w-full overflow-hidden">
            {hira.controlMeasures?.slice(0, 3).map((measure, index) => (
              <Badge key={index} variant="outline" className="bg-gray-50 truncate max-w-[150px]">
                {measure}
              </Badge>
            ))}
            {hira.controlMeasures && hira.controlMeasures.length > 3 && (
              <Badge variant="outline" className="bg-gray-50">
                +{hira.controlMeasures.length - 3} more
              </Badge>
            )}
          </div>
        </div>
        <div className="mt-4 flex justify-between items-center">
          <div className="flex items-center">
            <Calendar className="h-4 w-4 mr-1 text-gray-500 flex-shrink-0" />
            <span className="text-sm text-gray-500 truncate">
              Assessment: {format(new Date(hira.date), "MMM d, yyyy")}
            </span>
            <span className="text-sm text-gray-500 ml-2 truncate hidden sm:inline">
              Review: {format(new Date(hira.reviewDate), "MMM d, yyyy")}
            </span>
          </div>
          <Button variant="ghost" size="sm" className="text-blue-600 flex-shrink-0" asChild>
            <Link href={`/hira/${hira.id}`}>
              <Shield className="h-4 w-4 mr-1" />
              View Assessment
            </Link>
          </Button>
        </div>
      </CardContent>
    </Card>
  )
}
