"use client"

import { useState, useEffect } from "react"
import { Bell, X, Check, CheckCheck } from "lucide-react"
import { Button } from "@/components/ui/button"
import { ScrollArea } from "@/components/ui/scroll-area"
import { markNotificationAsRead, markAllNotificationsAsRead } from "@/services/data-service"
import Link from "next/link"
import type { Notification } from "@/types"

interface NotificationPanelProps {
  isOpen: boolean
  onClose: () => void
}

export default function NotificationPanel({ isOpen, onClose }: NotificationPanelProps) {
  const [notifications, setNotifications] = useState<Notification[]>([])

  useEffect(() => {
    // In a real app, this would fetch notifications from an API
    setNotifications([
      {
        id: 1,
        title: "New Permit Request",
        message: "Robert Johnson has submitted a new Hot Work Permit for approval",
        timestamp: "2025-05-18 09:30",
        type: "info",
        isRead: false,
        link: "/permits/1",
        icon: undefined,
      },
      {
        id: 2,
        title: "Incident Reported",
        message: "A new incident has been reported in Production Line A",
        timestamp: "2025-05-16 14:45",
        type: "warning",
        isRead: false,
        link: "/incidents/1",
        icon: undefined,
      },
    ])
  }, [isOpen])

  const handleMarkAsRead = (id: number) => {
    markNotificationAsRead(id)
    setNotifications(notifications.map((n) => (n.id === id ? { ...n, isRead: true } : n)))
  }

  const handleMarkAllAsRead = () => {
    markAllNotificationsAsRead()
    setNotifications(notifications.map((n) => ({ ...n, isRead: true })))
  }

  if (!isOpen) return null

  return (
    <div className="absolute top-16 right-0 w-80 md:w-96 bg-white rounded-md shadow-lg border border-gray-200 z-50">
      <div className="p-4 flex items-center justify-between border-b">
        <div className="flex items-center">
          <Bell className="h-5 w-5 text-blue-500 mr-2" />
          <h3 className="font-medium">Notifications</h3>
        </div>
        <div className="flex items-center space-x-2">
          <Button variant="ghost" size="sm" onClick={handleMarkAllAsRead} className="h-8 px-2">
            <CheckCheck className="h-4 w-4 mr-1" />
            <span className="text-xs">Mark all as read</span>
          </Button>
          <Button variant="ghost" size="sm" onClick={onClose} className="h-8 w-8 p-0">
            <X className="h-4 w-4" />
          </Button>
        </div>
      </div>
      <ScrollArea className="h-[400px]">
        {notifications.length === 0 ? (
          <div className="p-4 text-center text-gray-500">No notifications</div>
        ) : (
          <div>
            {notifications.map((notification) => {
              const Icon = notification.icon || Bell
              return (
                <div key={notification.id} className={`p-4 border-b ${notification.isRead ? "" : "bg-blue-50"}`}>
                  <div className="flex">
                    <div
                      className={`p-2 rounded-full mr-3 ${
                        notification.type === "warning"
                          ? "bg-orange-100 text-orange-500"
                          : notification.type === "success"
                            ? "bg-green-100 text-green-500"
                            : notification.type === "error"
                              ? "bg-red-100 text-red-500"
                              : "bg-blue-100 text-blue-500"
                      }`}
                    >
                      <Icon className="h-4 w-4" />
                    </div>
                    <div className="flex-1">
                      <div className="flex justify-between items-start">
                        <Link
                          href={notification.link || "#"}
                          className="font-medium text-sm hover:text-blue-600"
                          onClick={() => handleMarkAsRead(notification.id)}
                        >
                          {notification.title}
                        </Link>
                        {!notification.isRead && (
                          <Button
                            variant="ghost"
                            size="sm"
                            onClick={() => handleMarkAsRead(notification.id)}
                            className="h-6 w-6 p-0 ml-2"
                          >
                            <Check className="h-3 w-3" />
                          </Button>
                        )}
                      </div>
                      <p className="text-xs text-gray-600 mt-1">{notification.message}</p>
                      <p className="text-xs text-gray-400 mt-2">{notification.timestamp}</p>
                    </div>
                  </div>
                </div>
              )
            })}
          </div>
        )}
      </ScrollArea>
    </div>
  )
}
