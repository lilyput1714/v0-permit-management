"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { LayoutDashboard, Eye, Play, FileText, ClipboardCheck, Shield, BookOpen, Settings } from "lucide-react"

export default function Sidebar() {
  const pathname = usePathname()

  const menuItems = [
    { name: "Dashboard", icon: LayoutDashboard, path: "/dashboard" },
    { name: "Observations", icon: Eye, path: "/observations" },
    { name: "Actions", icon: Play, path: "/actions" },
    { name: "Permits", icon: FileText, path: "/permits" },
    { name: "Audits", icon: ClipboardCheck, path: "/audits" },
    { name: "HIRA", icon: Shield, path: "/hira" },
    { name: "Library", icon: BookOpen, path: "/library" },
    { name: "Settings", icon: Settings, path: "/settings" },
  ]

  return (
    <div className="hidden md:flex md:w-64 md:flex-col md:fixed md:inset-y-0 bg-blue-900">
      <div className="flex flex-col flex-grow pt-5 overflow-y-auto">
        <div className="flex items-center flex-shrink-0 px-4 mb-5">
          <div className="h-8 w-8 rounded-full bg-green-500 flex items-center justify-center mr-2">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M20 6L9 17L4 12" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </div>
          <span className="text-xl font-semibold text-white">Safetymint</span>
        </div>
        <nav className="flex-1 px-2 pb-4 space-y-1">
          {menuItems.map((item) => {
            const isActive = pathname === item.path
            const Icon = item.icon

            return (
              <Link
                key={item.name}
                href={item.path}
                className={`group flex items-center px-2 py-2 text-sm font-medium rounded-md ${
                  isActive ? "bg-blue-800 text-white" : "text-blue-100 hover:bg-blue-800 hover:text-white"
                }`}
              >
                <div className="mr-3 flex-shrink-0 h-6 w-6 flex items-center justify-center">
                  <Icon className="h-5 w-5" />
                </div>
                {item.name}
              </Link>
            )
          })}
        </nav>
      </div>
    </div>
  )
}
