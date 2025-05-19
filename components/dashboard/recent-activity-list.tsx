"use client"

import { getAllPermits, getAllIncidents, getAllObservations } from "@/services/data-service"
import { FileText, AlertTriangle, Eye, Clock } from "lucide-react"
import { format } from "date-fns"

export default function RecentActivityList() {
  // Get recent items from different modules
  const recentPermits = getAllPermits().slice(0, 2)
  const recentIncidents = getAllIncidents().slice(0, 2)
  const recentObservations = getAllObservations().slice(0, 2)

  // Combine and sort by date (most recent first)
  const allItems = [
    ...recentPermits.map((item) => ({ ...item, type: "permit" })),
    ...recentIncidents.map((item) => ({ ...item, type: "incident" })),
    ...recentObservations.map((item) => ({ ...item, type: "observation" })),
  ].sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())

  const getIcon = (type: string) => {
    switch (type) {
      case "permit":
        return <FileText className="h-5 w-5 text-blue-500" />
      case "incident":
        return <AlertTriangle className="h-5 w-5 text-orange-500" />
      case "observation":
        return <Eye className="h-5 w-5 text-green-500" />
      default:
        return <Clock className="h-5 w-5 text-gray-500" />
    }
  }

  const getTypeLabel = (type: string) => {
    switch (type) {
      case "permit":
        return "Permit"
      case "incident":
        return "Incident"
      case "observation":
        return "Observation"
      default:
        return "Item"
    }
  }

  return (
    <div className="space-y-4">
      {allItems.map((item, index) => (
        <div key={`${item.type}-${item.id}`} className="flex items-start p-3 rounded-md hover:bg-gray-50">
          <div className="p-2 rounded-full bg-gray-100 mr-3">{getIcon(item.type)}</div>
          <div className="flex-1">
            <div className="flex justify-between">
              <h4 className="font-medium text-sm">{item.title}</h4>
              <span className="text-xs text-gray-500">{format(new Date(item.date), "MMM d, yyyy")}</span>
            </div>
            <p className="text-xs text-gray-600 mt-1 line-clamp-2">{item.description}</p>
            <div className="flex mt-2">
              <span className="text-xs bg-gray-100 px-2 py-0.5 rounded-full">{getTypeLabel(item.type)}</span>
              <span className="text-xs bg-gray-100 px-2 py-0.5 rounded-full ml-2">{item.status}</span>
            </div>
          </div>
        </div>
      ))}
    </div>
  )
}
