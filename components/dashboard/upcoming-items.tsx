"use client"

import { Calendar, Clock } from "lucide-react"
import { format } from "date-fns"
import type { Action } from "@/types"

interface UpcomingItemsProps {
  items: Action[]
}

export default function UpcomingItems({ items }: UpcomingItemsProps) {
  const getPriorityColor = (priority: string) => {
    switch (priority) {
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
    <div className="space-y-3">
      {items.map((item) => (
        <div key={item.id} className="p-3 border rounded-md hover:bg-gray-50">
          <div className="flex justify-between items-start">
            <h4 className="font-medium text-sm">{item.title}</h4>
            <span className={`text-xs px-2 py-0.5 rounded-full ${getPriorityColor(item.priority)}`}>
              {item.priority}
            </span>
          </div>
          <div className="flex items-center mt-2 text-xs text-gray-500">
            <Calendar className="h-3 w-3 mr-1" />
            <span>Due: {format(new Date(item.dueDate), "MMM d, yyyy")}</span>
          </div>
          <div className="flex items-center mt-1 text-xs text-gray-500">
            <Clock className="h-3 w-3 mr-1" />
            <span>Assigned to: {item.assignedTo}</span>
          </div>
        </div>
      ))}

      {items.length === 0 && <div className="text-center py-4 text-gray-500">No upcoming items</div>}
    </div>
  )
}
