"use client"

import type React from "react"

import { useState } from "react"
import Link from "next/link"
import { Bell, Plus, Search } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Avatar, AvatarFallback } from "@/components/ui/avatar"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import NotificationPanel from "./notification-panel"
import { getUnreadNotificationsCount, getCurrentUser } from "@/services/data-service"
import NewItemModal from "./new-item-modal"
import { useRouter } from "next/navigation"

interface DesktopHeaderProps {
  title?: string
}

export default function DesktopHeader({ title = "New Work Permit Request" }: DesktopHeaderProps) {
  const [notificationPanelOpen, setNotificationPanelOpen] = useState(false)
  const [newItemModalOpen, setNewItemModalOpen] = useState(false)
  const [searchQuery, setSearchQuery] = useState("")
  const unreadCount = getUnreadNotificationsCount()
  const currentUser = getCurrentUser()
  const router = useRouter()

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault()
    if (searchQuery.trim()) {
      console.log("Searching for:", searchQuery)
      // Here you would typically call a search function from your data service
    }
  }

  const handleProfileAction = (action: string) => {
    switch (action) {
      case "profile":
        router.push("/profile")
        break
      case "settings":
        router.push("/settings")
        break
      case "logout":
        console.log("Logging out...")
        // Here you would typically call a logout function
        router.push("/login")
        break
      default:
        break
    }
  }

  return (
    <div className="hidden md:flex md:sticky md:top-0 md:z-10 md:h-16 md:bg-white md:border-b md:border-gray-200 md:px-6 md:items-center md:justify-between">
      <h1 className="text-xl font-semibold text-gray-800">{title}</h1>
      <div className="flex items-center space-x-4">
        <form onSubmit={handleSearch} className="relative">
          <input
            type="text"
            placeholder="Search..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-64 h-9 px-3 py-2 text-sm rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
          />
          <button
            type="submit"
            className="absolute right-3 top-1/2 transform -translate-y-1/2 bg-transparent border-none cursor-pointer"
            aria-label="Search"
          >
            <Search className="h-4 w-4 text-gray-400" />
          </button>
        </form>

        <Button asChild variant="outline" className="flex items-center">
          <Link href="/permits/new">
            <Plus className="h-4 w-4 mr-2" />
            New
          </Link>
        </Button>

        <div className="relative">
          <Button
            variant="ghost"
            size="icon"
            className="h-9 w-9 rounded-full bg-orange-100 flex items-center justify-center text-orange-500"
            onClick={() => setNotificationPanelOpen(!notificationPanelOpen)}
            aria-label={`Notifications ${unreadCount > 0 ? `(${unreadCount} unread)` : ""}`}
          >
            <Bell className="h-4 w-4" />
          </Button>
          {unreadCount > 0 && (
            <div className="absolute -top-1 -right-1 h-4 w-4 rounded-full bg-red-500 flex items-center justify-center text-white text-xs">
              {unreadCount}
            </div>
          )}
          <NotificationPanel isOpen={notificationPanelOpen} onClose={() => setNotificationPanelOpen(false)} />
        </div>

        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="ghost" size="icon" className="h-9 w-9 rounded-full p-0" aria-label="User menu">
              <Avatar className="h-9 w-9">
                <AvatarFallback>{currentUser.initials}</AvatarFallback>
              </Avatar>
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end">
            <DropdownMenuLabel>My Account</DropdownMenuLabel>
            <DropdownMenuSeparator />
            <DropdownMenuItem onClick={() => handleProfileAction("profile")}>Profile</DropdownMenuItem>
            <DropdownMenuItem onClick={() => handleProfileAction("settings")}>Settings</DropdownMenuItem>
            <DropdownMenuSeparator />
            <DropdownMenuItem onClick={() => handleProfileAction("logout")}>Log out</DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>

      <NewItemModal isOpen={newItemModalOpen} onClose={() => setNewItemModalOpen(false)} />
    </div>
  )
}
