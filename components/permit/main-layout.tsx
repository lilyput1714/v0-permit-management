import type React from "react"

interface MainLayoutProps {
  children: React.ReactNode
}

export default function MainLayout({ children }: MainLayoutProps) {
  return <div className="flex min-h-screen bg-white">{children}</div>
}
