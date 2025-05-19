"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Play, MoreHorizontal, CheckCircle, Clock, AlertTriangle, Calendar } from "lucide-react"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"
import Link from "next/link"
import type { Action } from "@/types"
import { format, isPast } from "date-fns"

interface ActionCardProps {
  action: Action
}

export default function ActionCard({ action }: ActionCardProps) {
  const getStatusIcon = () => {
    switch (action.status) {
      case "Completed":
        return <CheckCircle className="h-4 w-4 text-green-500" />
      case "In Progress":
        return <Play className="h-4 w-4 text-blue-500" />
      case "Overdue":
        return <AlertTriangle className="h-4 w-4 text-red-500" />
      default:
        return <Clock className="h-4 w-4 text-gray-500" />
    }
  }

  const getStatusColor = () => {
    switch (action.status) {
      case "Completed":
        return "bg-green-100 text-green-800"
      case "In Progress":
        return "bg-blue-100 text-blue-800"
      case "Overdue":
        return "bg-red-100 text-red-800"
      default:
        return "bg-gray-100 text-gray-800"
    }
  }

  const getPriorityColor = () => {
    switch (action.priority) {
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

  const isDueToday = () => {
    const today = new Date()
    const dueDate = new Date(action.dueDate)
    return (
      today.getDate() === dueDate.getDate() &&
      today.getMonth() === dueDate.getMonth() &&
      today.getFullYear() === dueDate.getFullYear()
    )
  }

  const isOverdue = () => {
    return isPast(new Date(action.dueDate)) && action.status !== "Completed"
  }

  return (
    <Card className={`hover:shadow-md transition-shadow ${isOverdue() ? "border-red-300" : ""}`}>
      <CardHeader className="pb-2">
        <div className="flex justify-between">
          <CardTitle className="text-lg font-medium flex items-center">
            <Play className="h-5 w-5 mr-2 text-blue-500 flex-shrink-0" />
            <span className="truncate">{action.title}</span>
          </CardTitle>
          <div className="flex items-center space-x-2 flex-shrink-0">
            <Badge className={getPriorityColor()}>Priority: {action.priority}</Badge>
            <Badge className={`flex items-center ${getStatusColor()}`}>
              {getStatusIcon()}
              <span className="ml-1">{action.status}</span>
            </Badge>
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="ghost" size="sm" className="h-8 w-8 p-0">
                  <MoreHorizontal className="h-4 w-4" />
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end">
                <DropdownMenuItem asChild>
                  <Link href={`/actions/${action.id}`}>View Details</Link>
                </DropdownMenuItem>
                {action.status !== "Completed" && <DropdownMenuItem>Mark as Complete</DropdownMenuItem>}
                <DropdownMenuItem>Reassign</DropdownMenuItem>
                <DropdownMenuItem>Update Due Date</DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </div>
        </div>
      </CardHeader>
      <CardContent>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div>
            <p className="text-sm text-gray-500">Assigned To</p>
            <p className="text-sm font-medium truncate">{action.assignedTo}</p>
          </div>
          <div>
            <p className="text-sm text-gray-500">Due Date</p>
            <p
              className={`text-sm font-medium ${isOverdue() ? "text-red-600" : isDueToday() ? "text-orange-600" : ""}`}
            >
              {format(new Date(action.dueDate), "MMM d, yyyy")}
              {isDueToday() && (
                <span className="ml-2 text-xs bg-orange-100 text-orange-800 px-2 py-0.5 rounded-full">Today</span>
              )}
              {isOverdue() && (
                <span className="ml-2 text-xs bg-red-100 text-red-800 px-2 py-0.5 rounded-full">Overdue</span>
              )}
            </p>
          </div>
          <div>
            <p className="text-sm text-gray-500">Category</p>
            <p className="text-sm font-medium truncate">{action.category}</p>
          </div>
        </div>
        <div className="mt-4">
          <p className="text-sm text-gray-500">Description</p>
          <p className="text-sm line-clamp-2">{action.description}</p>
        </div>
        <div className="mt-4 flex justify-between items-center">
          <div className="flex items-center text-xs text-gray-500">
            <Calendar className="h-3 w-3 mr-1 flex-shrink-0" />
            <span className="truncate">Created: {format(new Date(action.date), "MMM d, yyyy")}</span>
          </div>
          <Button variant="ghost" size="sm" className="text-blue-600 flex-shrink-0" asChild>
            <Link href={`/actions/${action.id}`}>View Details</Link>
          </Button>
        </div>
      </CardContent>
    </Card>
  )
}
