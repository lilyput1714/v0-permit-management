import MainLayout from "@/components/permit/main-layout"
import Sidebar from "@/components/permit/sidebar"
import DesktopHeader from "@/components/permit/desktop-header"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Badge } from "@/components/ui/badge"
import { Separator } from "@/components/ui/separator"
import { getActionById } from "@/services/data-service"
import { notFound } from "next/navigation"
import {
  ArrowLeft,
  Calendar,
  CheckCircle,
  Clock,
  Play,
  User,
  AlertTriangle,
  FileText,
  MessageSquare,
  Link2,
} from "lucide-react"
import Link from "next/link"
import { format, isPast } from "date-fns"

export default function ActionDetailsPage({ params }: { params: { id: string } }) {
  const action = getActionById(params.id)

  if (!action) {
    notFound()
  }

  const getStatusIcon = () => {
    switch (action.status) {
      case "Completed":
        return <CheckCircle className="h-5 w-5 text-green-500" />
      case "In Progress":
        return <Play className="h-5 w-5 text-blue-500" />
      case "Overdue":
        return <AlertTriangle className="h-5 w-5 text-red-500" />
      default:
        return <Clock className="h-5 w-5 text-gray-500" />
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

  // Mock data for related items
  const relatedItems = [
    {
      id: "obs-1",
      type: "Observation",
      title: "Unsafe scaffolding on east building",
      date: "2023-05-15",
    },
    {
      id: "audit-2",
      type: "Audit",
      title: "Monthly safety inspection",
      date: "2023-05-10",
    },
  ]

  // Mock data for comments
  const comments = [
    {
      id: "com-1",
      user: "Jane Doe",
      date: "2023-05-20T10:30:00",
      content: "I've started working on this. Will update when complete.",
    },
    {
      id: "com-2",
      user: "Mike Wilson",
      date: "2023-05-21T14:15:00",
      content: "Materials have been ordered and will arrive next week.",
    },
  ]

  return (
    <MainLayout>
      <Sidebar />
      <div className="flex-1 md:ml-64">
        <DesktopHeader title="Action Details" />
        <div className="py-6 px-4 sm:px-6 md:px-8">
          <div className="mb-6">
            <Button variant="outline" asChild className="mb-4">
              <Link href="/actions">
                <ArrowLeft className="h-4 w-4 mr-2" />
                Back to Actions
              </Link>
            </Button>

            <div className="flex flex-col md:flex-row md:items-center md:justify-between">
              <div className="flex items-center">
                <Play className="h-6 w-6 mr-2 text-blue-500" />
                <h1 className="text-2xl font-bold text-gray-900">{action.title}</h1>
              </div>
              <div className="flex items-center mt-2 md:mt-0 space-x-2">
                <Badge className={getPriorityColor()}>Priority: {action.priority}</Badge>
                <Badge className={`flex items-center ${getStatusColor()}`}>
                  {getStatusIcon()}
                  <span className="ml-1">{action.status}</span>
                </Badge>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            <div className="lg:col-span-2">
              <Tabs defaultValue="details">
                <TabsList className="mb-4">
                  <TabsTrigger value="details">Details</TabsTrigger>
                  <TabsTrigger value="related">Related Items</TabsTrigger>
                  <TabsTrigger value="comments">Comments</TabsTrigger>
                </TabsList>

                <TabsContent value="details">
                  <Card>
                    <CardHeader>
                      <CardTitle>Action Information</CardTitle>
                      <CardDescription>Detailed information about this action item</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-6">
                        <div>
                          <h3 className="text-lg font-medium">Description</h3>
                          <p className="mt-2 text-gray-700">{action.description}</p>
                        </div>

                        <Separator />

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                          <div>
                            <h3 className="text-sm font-medium text-gray-500">Category</h3>
                            <p className="mt-1">{action.category}</p>
                          </div>
                          <div>
                            <h3 className="text-sm font-medium text-gray-500">Due Date</h3>
                            <div className="flex items-center mt-1">
                              <Calendar className="h-4 w-4 mr-1 text-gray-400" />
                              <span className={isOverdue() ? "text-red-600" : isDueToday() ? "text-orange-600" : ""}>
                                {format(new Date(action.dueDate), "MMM d, yyyy")}
                                {isDueToday() && (
                                  <span className="ml-2 text-xs bg-orange-100 text-orange-800 px-2 py-0.5 rounded-full">
                                    Today
                                  </span>
                                )}
                                {isOverdue() && (
                                  <span className="ml-2 text-xs bg-red-100 text-red-800 px-2 py-0.5 rounded-full">
                                    Overdue
                                  </span>
                                )}
                              </span>
                            </div>
                          </div>
                          <div>
                            <h3 className="text-sm font-medium text-gray-500">Assigned To</h3>
                            <div className="flex items-center mt-1">
                              <User className="h-4 w-4 mr-1 text-gray-400" />
                              <span>{action.assignedTo}</span>
                            </div>
                          </div>
                          <div>
                            <h3 className="text-sm font-medium text-gray-500">Created Date</h3>
                            <div className="flex items-center mt-1">
                              <Calendar className="h-4 w-4 mr-1 text-gray-400" />
                              <span>{format(new Date(action.date), "MMM d, yyyy")}</span>
                            </div>
                          </div>
                        </div>

                        {action.completionNotes && (
                          <>
                            <Separator />
                            <div>
                              <h3 className="text-lg font-medium">Completion Notes</h3>
                              <p className="mt-2 text-gray-700">{action.completionNotes}</p>
                            </div>
                          </>
                        )}
                      </div>
                    </CardContent>
                  </Card>
                </TabsContent>

                <TabsContent value="related">
                  <Card>
                    <CardHeader className="flex flex-row items-center justify-between">
                      <div>
                        <CardTitle>Related Items</CardTitle>
                        <CardDescription>Items related to this action</CardDescription>
                      </div>
                      <Button size="sm">
                        <Link2 className="h-4 w-4 mr-2" />
                        Link Item
                      </Button>
                    </CardHeader>
                    <CardContent>
                      {relatedItems.length > 0 ? (
                        <div className="space-y-4">
                          {relatedItems.map((item) => (
                            <div key={item.id} className="border rounded-md p-4">
                              <div className="flex justify-between items-start">
                                <div>
                                  <div className="flex items-center">
                                    <Badge variant="outline" className="mr-2">
                                      {item.type}
                                    </Badge>
                                    <h3 className="font-medium">{item.title}</h3>
                                  </div>
                                  <div className="flex items-center mt-1 text-sm text-gray-500">
                                    <Calendar className="h-3 w-3 mr-1" />
                                    <span>{format(new Date(item.date), "MMM d, yyyy")}</span>
                                  </div>
                                </div>
                              </div>
                              <div className="mt-2">
                                <Button variant="ghost" size="sm" asChild>
                                  <Link href={`/${item.type.toLowerCase()}s/${item.id}`}>View {item.type}</Link>
                                </Button>
                              </div>
                            </div>
                          ))}
                        </div>
                      ) : (
                        <div className="text-center py-6 text-gray-500">
                          <p>No related items found.</p>
                        </div>
                      )}
                    </CardContent>
                  </Card>
                </TabsContent>

                <TabsContent value="comments">
                  <Card>
                    <CardHeader className="flex flex-row items-center justify-between">
                      <div>
                        <CardTitle>Comments</CardTitle>
                        <CardDescription>Discussion about this action</CardDescription>
                      </div>
                      <Button size="sm">
                        <MessageSquare className="h-4 w-4 mr-2" />
                        Add Comment
                      </Button>
                    </CardHeader>
                    <CardContent>
                      {comments.length > 0 ? (
                        <div className="space-y-4">
                          {comments.map((comment) => (
                            <div key={comment.id} className="border rounded-md p-4">
                              <div className="flex justify-between items-center">
                                <div className="font-medium">{comment.user}</div>
                                <div className="text-sm text-gray-500">
                                  {format(new Date(comment.date), "MMM d, yyyy 'at' h:mm a")}
                                </div>
                              </div>
                              <p className="mt-2 text-gray-700">{comment.content}</p>
                            </div>
                          ))}
                        </div>
                      ) : (
                        <div className="text-center py-6 text-gray-500">
                          <p>No comments yet.</p>
                        </div>
                      )}
                    </CardContent>
                  </Card>
                </TabsContent>
              </Tabs>
            </div>

            <div>
              <Card>
                <CardHeader>
                  <CardTitle>Actions</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-2">
                    {action.status !== "Completed" && (
                      <Button className="w-full justify-start" variant="outline">
                        <CheckCircle className="h-4 w-4 mr-2" />
                        Mark as Complete
                      </Button>
                    )}
                    <Button className="w-full justify-start" variant="outline">
                      <FileText className="h-4 w-4 mr-2" />
                      Generate Report
                    </Button>
                    <Button className="w-full justify-start" variant="outline">
                      <User className="h-4 w-4 mr-2" />
                      Reassign
                    </Button>
                    <Button className="w-full justify-start" variant="outline">
                      <Calendar className="h-4 w-4 mr-2" />
                      Update Due Date
                    </Button>
                  </div>
                </CardContent>
              </Card>

              <Card className="mt-6">
                <CardHeader>
                  <CardTitle>Activity Timeline</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="flex">
                      <div className="mr-4 flex flex-col items-center">
                        <div className="h-2.5 w-2.5 rounded-full bg-blue-500"></div>
                        <div className="h-full w-px bg-gray-200"></div>
                      </div>
                      <div>
                        <p className="font-medium">Action Created</p>
                        <p className="text-sm text-gray-500">{format(new Date(action.date), "MMM d, yyyy")}</p>
                        <p className="text-sm text-gray-500">By System Admin</p>
                      </div>
                    </div>

                    {action.status === "In Progress" && (
                      <div className="flex">
                        <div className="mr-4 flex flex-col items-center">
                          <div className="h-2.5 w-2.5 rounded-full bg-blue-500"></div>
                          <div className="h-full w-px bg-gray-200"></div>
                        </div>
                        <div>
                          <p className="font-medium">Status Updated to In Progress</p>
                          <p className="text-sm text-gray-500">{format(new Date(action.date), "MMM d, yyyy")}</p>
                          <p className="text-sm text-gray-500">By {action.assignedTo}</p>
                        </div>
                      </div>
                    )}

                    {action.status === "Completed" && (
                      <div className="flex">
                        <div className="mr-4 flex flex-col items-center">
                          <div className="h-2.5 w-2.5 rounded-full bg-green-500"></div>
                        </div>
                        <div>
                          <p className="font-medium">Action Completed</p>
                          <p className="text-sm text-gray-500">{format(new Date(action.date), "MMM d, yyyy")}</p>
                          <p className="text-sm text-gray-500">By {action.assignedTo}</p>
                        </div>
                      </div>
                    )}
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
