"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Users, MoreHorizontal, Phone, Mail } from "lucide-react"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"
import Link from "next/link"
import type { Contractor } from "@/types"

interface ContractorCardProps {
  contractor: Contractor
}

export default function ContractorCard({ contractor }: ContractorCardProps) {
  const getStatusColor = () => {
    switch (contractor.status) {
      case "Active":
        return "bg-green-100 text-green-800"
      case "Inactive":
        return "bg-gray-100 text-gray-800"
      case "Pending Approval":
        return "bg-orange-100 text-orange-800"
      default:
        return "bg-gray-100 text-gray-800"
    }
  }

  return (
    <Card className="hover:shadow-md transition-shadow h-full flex flex-col">
      <CardHeader className="pb-2">
        <div className="flex justify-between">
          <CardTitle className="text-lg font-medium flex items-center">
            <Users className="h-5 w-5 mr-2 text-blue-500 flex-shrink-0" />
            <span className="truncate">{contractor.companyName}</span>
          </CardTitle>
          <div className="flex items-center space-x-2 flex-shrink-0">
            <Badge className={getStatusColor()}>{contractor.status}</Badge>
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="ghost" size="sm" className="h-8 w-8 p-0">
                  <MoreHorizontal className="h-4 w-4" />
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end">
                <DropdownMenuItem asChild>
                  <Link href={`/contractors/${contractor.id}`}>View Details</Link>
                </DropdownMenuItem>
                <DropdownMenuItem>Edit Contractor</DropdownMenuItem>
                <DropdownMenuItem>View Documents</DropdownMenuItem>
                <DropdownMenuItem>Create Permit</DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </div>
        </div>
      </CardHeader>
      <CardContent className="flex-1 flex flex-col">
        <div className="space-y-3">
          <div>
            <p className="text-sm text-gray-500">Primary Contact</p>
            <p className="text-sm font-medium truncate">{contractor.contactName}</p>
          </div>

          <div className="grid grid-cols-2 gap-2">
            <div className="flex items-center">
              <Phone className="h-3 w-3 mr-1 text-gray-500 flex-shrink-0" />
              <p className="text-sm truncate">{contractor.phone}</p>
            </div>
            <div className="flex items-center">
              <Mail className="h-3 w-3 mr-1 text-gray-500 flex-shrink-0" />
              <p className="text-sm truncate">{contractor.email}</p>
            </div>
          </div>

          <div>
            <p className="text-sm text-gray-500">Trade/Service</p>
            <div className="flex flex-wrap gap-1 mt-1 max-w-full overflow-hidden">
              {contractor.trades.slice(0, 3).map((trade, index) => (
                <Badge key={index} variant="outline" className="bg-gray-50 truncate max-w-[120px]">
                  {trade}
                </Badge>
              ))}
              {contractor.trades.length > 3 && (
                <Badge variant="outline" className="bg-gray-50 truncate max-w-[120px]">
                  +{contractor.trades.length - 3} more
                </Badge>
              )}
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}
