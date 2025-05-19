"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { BookOpen, MoreHorizontal, FileText, Download, Calendar, FileCheck } from "lucide-react"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"
import Link from "next/link"
import type { LibraryItem } from "@/types"
import { format } from "date-fns"

interface LibraryCardProps {
  item: LibraryItem
}

export default function LibraryCard({ item }: LibraryCardProps) {
  const getTypeIcon = () => {
    switch (item.type) {
      case "Document":
        return <FileText className="h-5 w-5 text-blue-500" />
      case "Procedure":
        return <FileCheck className="h-5 w-5 text-green-500" />
      case "Form":
        return <FileText className="h-5 w-5 text-orange-500" />
      case "Training":
        return <BookOpen className="h-5 w-5 text-purple-500" />
      default:
        return <FileText className="h-5 w-5 text-gray-500" />
    }
  }

  const getTypeColor = () => {
    switch (item.type) {
      case "Document":
        return "bg-blue-100 text-blue-800"
      case "Procedure":
        return "bg-green-100 text-green-800"
      case "Form":
        return "bg-orange-100 text-orange-800"
      case "Training":
        return "bg-purple-100 text-purple-800"
      default:
        return "bg-gray-100 text-gray-800"
    }
  }

  return (
    <Card className="hover:shadow-md transition-shadow h-full flex flex-col">
      <CardHeader className="pb-2">
        <div className="flex justify-between">
          <CardTitle className="text-base font-medium flex items-center">
            {getTypeIcon()}
            <span className="ml-2 truncate">{item.title}</span>
          </CardTitle>
          <div className="flex items-center space-x-2 flex-shrink-0">
            <Badge className={getTypeColor()}>{item.type}</Badge>
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="ghost" size="sm" className="h-8 w-8 p-0">
                  <MoreHorizontal className="h-4 w-4" />
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end">
                <DropdownMenuItem asChild>
                  <Link href={`/library/${item.id}`}>View Details</Link>
                </DropdownMenuItem>
                <DropdownMenuItem asChild>
                  <a href={item.fileUrl} download>
                    Download
                  </a>
                </DropdownMenuItem>
                <DropdownMenuItem>Share</DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </div>
        </div>
      </CardHeader>
      <CardContent className="flex-1 flex flex-col">
        <div className="grid grid-cols-2 gap-2">
          <div>
            <p className="text-xs text-gray-500">Category</p>
            <p className="text-sm font-medium truncate">{item.category}</p>
          </div>
          <div>
            <p className="text-xs text-gray-500">Version</p>
            <p className="text-sm font-medium truncate">{item.version}</p>
          </div>
        </div>
        <div className="mt-2">
          <p className="text-xs text-gray-500">Author</p>
          <p className="text-sm truncate">{item.author}</p>
        </div>
        <div className="mt-auto pt-4 flex justify-between items-center">
          <div className="flex items-center">
            <Calendar className="h-3 w-3 mr-1 text-gray-500 flex-shrink-0" />
            <span className="text-xs text-gray-500 truncate">{format(new Date(item.date), "MMM d, yyyy")}</span>
          </div>
          <Button variant="ghost" size="sm" className="h-8 text-blue-600 flex-shrink-0" asChild>
            <a href={item.fileUrl} download>
              <Download className="h-4 w-4 mr-1" />
              Download
            </a>
          </Button>
        </div>
      </CardContent>
    </Card>
  )
}
