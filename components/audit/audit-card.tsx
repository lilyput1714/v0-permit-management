"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { ClipboardCheck, MoreHorizontal, CheckCircle, Clock, Calendar } from "lucide-react"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"
import Link from "next/link"
import type { Audit } from "@/types"
import { format } from "date-fns"

interface AuditCardProps {
  audit: Audit
}

export default function AuditCard({ audit }: AuditCardProps) {
  const getStatusIcon = () => {
    switch (audit.status) {
      case "Completed":
        return <CheckCircle className="h-4 w-4 text-green-500" />
      case "In Progress":
        return <Clock className="h-4 w-4 text-blue-500" />
      case "Scheduled":
        return <Calendar className="h-4 w-4 text-orange-500" />
      default:
        return <Clock className="h-4 w-4 text-gray-500" />
    }
  }

  const getStatusColor = () => {
    switch (audit.status) {
      case "Completed":
        return "bg-green-100 text-green-800"
      case "In Progress":
        return "bg-blue-100 text-blue-800"
      case "Scheduled":
        return "bg-orange-100 text-orange-800"
      default:
        return "bg-gray-100 text-gray-800"
    }
  }

  const getScoreColor = () => {
    if (!audit.score) return "bg-gray-100 text-gray-800"

    if (audit.score >= 90) return "bg-green-100 text-green-800"
    if (audit.score >= 70) return "bg-yellow-100 text-yellow-800"
    return "bg-red-100 text-red-800"
  }

  return (
    <Card className="hover:shadow-md transition-shadow">
      <CardHeader className="pb-2">
        <div className="flex justify-between">
          <CardTitle className="text-lg font-medium flex items-center">
            <ClipboardCheck className="h-5 w-5 mr-2 text-blue-500 flex-shrink-0" />
            <span className="truncate">{audit.title}</span>
          </CardTitle>
          <div className="flex items-center space-x-2 flex-shrink-0">
            {audit.score && <Badge className={getScoreColor()}>Score: {audit.score}%</Badge>}
            <Badge className={`flex items-center ${getStatusColor()}`}>
              {getStatusIcon()}
              <span className="ml-1">{audit.status}</span>
            </Badge>
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="ghost" size="sm" className="h-8 w-8 p-0">
                  <MoreHorizontal className="h-4 w-4" />
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end">
                <DropdownMenuItem asChild>
                  <Link href={`/audits/${audit.id}`}>View Details</Link>
                </DropdownMenuItem>
                {audit.status !== "Completed" && <DropdownMenuItem>Update Status</DropdownMenuItem>}
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
            <p className="text-sm text-gray-500">Audit Type</p>
            <p className="text-sm font-medium truncate">{audit.auditType}</p>
          </div>
          <div>
            <p className="text-sm text-gray-500">Location</p>
            <p className="text-sm font-medium truncate">{audit.location}</p>
          </div>
          <div>
            <p className="text-sm text-gray-500">Auditor</p>
            <p className="text-sm font-medium truncate">{audit.auditor}</p>
          </div>
        </div>
        <div className="mt-4">
          <p className="text-sm text-gray-500">Description</p>
          <p className="text-sm line-clamp-2">{audit.description}</p>
        </div>
        <div className="mt-4 flex justify-between items-center">
          <div className="flex items-center">
            <Calendar className="h-4 w-4 mr-1 text-gray-500 flex-shrink-0" />
            <span className="text-sm text-gray-500 truncate">{format(new Date(audit.date), "MMM d, yyyy")}</span>
            {audit.nextAuditDate && (
              <span className="text-sm text-gray-500 ml-2 truncate">
                Next: {format(new Date(audit.nextAuditDate), "MMM d, yyyy")}
              </span>
            )}
          </div>
          <Button variant="ghost" size="sm" className="text-blue-600 flex-shrink-0" asChild>
            <Link href={`/audits/${audit.id}`}>
              <ClipboardCheck className="h-4 w-4 mr-1" />
              View Audit
            </Link>
          </Button>
        </div>
      </CardContent>
    </Card>
  )
}
