import MainLayout from "@/components/permit/main-layout"
import Sidebar from "@/components/permit/sidebar"
import DesktopHeader from "@/components/permit/desktop-header"
import { Button } from "@/components/ui/button"
import { ArrowLeft, Printer, Download } from "lucide-react"
import Link from "next/link"
import { getPermitById } from "@/services/data-service"
import { notFound } from "next/navigation"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Separator } from "@/components/ui/separator"
import { Avatar, AvatarFallback } from "@/components/ui/avatar"

export default function PermitDetailPage({ params }: { params: { id: string } }) {
  const permit = getPermitById(Number.parseInt(params.id))

  if (!permit) {
    notFound()
  }

  // Get the appropriate icon for the permit type
  const PermitIcon = permit.icon

  return (
    <MainLayout>
      <Sidebar />
      <div className="flex-1 md:ml-64">
        <DesktopHeader title={`${permit.type} - Work Permit`} />
        <div className="py-6 px-4 sm:px-6 md:px-8">
          <div className="mb-6 flex justify-between">
            <Link href="/permits" className="flex items-center text-blue-600 hover:text-blue-800">
              <ArrowLeft className="h-4 w-4 mr-1" />
              Back to Permits
            </Link>
            <div className="flex space-x-2">
              <Button variant="outline" size="sm" className="flex items-center">
                <Printer className="h-4 w-4 mr-1" />
                Print
              </Button>
              <Button variant="outline" size="sm" className="flex items-center">
                <Download className="h-4 w-4 mr-1" />
                Download
              </Button>
            </div>
          </div>

          <div className="flex flex-col md:flex-row gap-6">
            <div className="w-full md:w-2/3">
              <Card>
                <CardHeader className="pb-2">
                  <div className="flex justify-between items-start">
                    <div>
                      <div className="flex items-center mb-2">
                        <Badge variant="outline" className="flex items-center">
                          <PermitIcon className="h-3 w-3 mr-1" />
                          {permit.type}
                        </Badge>
                        <Badge
                          variant={
                            permit.status === "Approved"
                              ? "success"
                              : permit.status === "In Progress"
                                ? "secondary"
                                : "warning"
                          }
                          className="ml-2"
                        >
                          {permit.status}
                        </Badge>
                      </div>
                      <CardTitle className="text-xl font-bold">{permit.title}</CardTitle>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-2 gap-4 mb-6">
                    <div>
                      <h3 className="text-sm font-medium mb-1">Permit Number</h3>
                      <p className="text-gray-700">
                        {permit.permitNumber || `${permit.type}-${new Date().getFullYear()}-${1000 + permit.id}`}
                      </p>
                    </div>
                    <div>
                      <h3 className="text-sm font-medium mb-1">Valid Period</h3>
                      <p className="text-gray-700">
                        {permit.startDate} to {permit.endDate}
                      </p>
                    </div>
                    <div>
                      <h3 className="text-sm font-medium mb-1">Requested By</h3>
                      <p className="text-gray-700">{permit.requestedBy}</p>
                    </div>
                    <div>
                      <h3 className="text-sm font-medium mb-1">Approved By</h3>
                      <p className="text-gray-700">
                        {permit.status === "Approved" ? permit.approvedBy || "John Davis" : "Pending Approval"}
                      </p>
                    </div>
                  </div>

                  <div className="mb-6">
                    <h3 className="text-sm font-medium mb-2">Work Description</h3>
                    <p className="text-gray-700">{permit.description}</p>
                  </div>

                  <Separator className="my-6" />

                  <div className="flex justify-between">
                    <Button variant="outline" className="flex items-center">
                      <Download className="h-4 w-4 mr-1" />
                      Download Permit
                    </Button>
                    {permit.status === "Pending Approval" && (
                      <div className="space-x-2">
                        <Button variant="outline" className="bg-red-50 text-red-600 border-red-200 hover:bg-red-100">
                          Reject
                        </Button>
                        <Button className="bg-green-600 hover:bg-green-700">Approve</Button>
                      </div>
                    )}
                  </div>
                </CardContent>
              </Card>
            </div>

            <div className="w-full md:w-1/3">
              <Card>
                <CardHeader>
                  <CardTitle className="text-lg">Permit Requestor</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="flex items-center mb-4">
                    <Avatar className="h-10 w-10 mr-3">
                      <AvatarFallback>
                        {permit.requestedBy
                          .split(" ")
                          .map((n) => n[0])
                          .join("")}
                      </AvatarFallback>
                    </Avatar>
                    <div>
                      <p className="font-medium">{permit.requestedBy}</p>
                      <p className="text-sm text-gray-500">Maintenance Supervisor</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </MainLayout>
  )
}
