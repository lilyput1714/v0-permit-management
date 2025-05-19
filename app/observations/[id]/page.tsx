import MainLayout from "@/components/permit/main-layout"
import Sidebar from "@/components/permit/sidebar"
import DesktopHeader from "@/components/permit/desktop-header"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Badge } from "@/components/ui/badge"
import { Separator } from "@/components/ui/separator"
import { getObservationById } from "@/services/data-service"
import { notFound } from "next/navigation"
import {
  ArrowLeft,
  Calendar,
  CheckCircle,
  Clock,
  Eye,
  MapPin,
  User,
  AlertTriangle,
  FileText,
  MessageSquare,
  Play,
} from "lucide-react"
import Link from "next/link"
import { format } from "date-fns"

export default function ObservationDetailsPage({ params }: { params: { id: string } }) {
  const observation = getObservationById(params.id)

  if (!observation) {
    notFound()
  }

  const getStatusIcon = () => {
    switch (observation.status) {
      case "Closed":
        return <CheckCircle className="h-5 w-5 text-green-500" />
      case "Open":
        return <AlertTriangle className="h-5 w-5 text-orange-500" />
      case "In Progress":
        return <Clock className="h-5 w-5 text-blue-500" />
      default:
        return <Clock className="h-5 w-5 text-gray-500" />
    }
  }

  const getStatusColor = () => {
    switch (observation.status) {
      case "Closed":
        return "bg-green-100 text-green-800"
      case "Open":
        return "bg-orange-100 text-orange-800"
      case "In Progress":
        return "bg-blue-100 text-blue-800"
      default:
        return "bg-gray-100 text-gray-800"
    }
  }

  const getObservationTypeColor = () => {
    switch (observation.observationType) {
      case "Safe":
        return "bg-green-100 text-green-800"
      case "Unsafe":
        return "bg-red-100 text-red-800"
      case "Near Miss":
        return "bg-yellow-100 text-yellow-800"
      default:
        return "bg-gray-100 text-gray-800"
    }
  }

  const getSeverityColor = () => {
    switch (observation.severity) {
      case "Critical":
        return "bg-red-100 text-red-800"
      case "High":
        return "bg-orange-100 text-orange-800"
      case "Medium":
        return "bg-yellow-100 text-yellow-800"
      case "Low":
        return "bg-green-100 text-green-800"
      default:
        return "bg-gray-100 text-gray-800"
    }
  }

  // Mock data for related actions
  const relatedActions = [
    {
      id: "act-1",
      title: "Implement safety barriers",
      status: "In Progress",
      assignedTo: "John Smith",
      dueDate: "2023-06-15",
    },
    {
      id: "act-2",
      title: "Update safety procedures",
      status: "Completed",
      assignedTo: "Sarah Johnson",
      dueDate: "2023-05-30",
    },
  ]

  // Mock data for comments
  const comments = [
    {
      id: "com-1",
      user: "Jane Doe",
      date: "2023-05-20T10:30:00",
      content: "I've assigned this to the maintenance team for immediate action.",
    },
    {
      id: "com-2",
      user: "Mike Wilson",
      date: "2023-05-21T14:15:00",
      content: "Safety barriers have been ordered and will be installed by next week.",
    },
  ]

  return (
    <MainLayout>
      <Sidebar />
      <div className="flex-1 md:ml-64">
        <DesktopHeader title="Observation Details" />
        <div className="py-6 px-4 sm:px-6 md:px-8">
          <div className="mb-6">
            <Button variant="outline" asChild className="mb-4">
              <Link href="/observations">
                <ArrowLeft className="h-4 w-4 mr-2" />
                Back to Observations
              </Link>
            </Button>

            <div className="flex flex-col md:flex-row md:items-center md:justify-between">
              <div className="flex items-center">
                <Eye className="h-6 w-6 mr-2 text-blue-500" />
                <h1 className="text-2xl font-bold text-gray-900">{observation.title}</h1>
              </div>
              <div className="flex items-center mt-2 md:mt-0 space-x-2">
                <Badge className={getObservationTypeColor()}>{observation.observationType}</Badge>
                <Badge className={`flex items-center ${getStatusColor()}`}>
                  {getStatusIcon()}
                  <span className="ml-1">{observation.status}</span>
                </Badge>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            <div className="lg:col-span-2">
              <Tabs defaultValue="details">
                <TabsList className="mb-4">
                  <TabsTrigger value="details">Details</TabsTrigger>
                  <TabsTrigger value="actions">Related Actions</TabsTrigger>
                  <TabsTrigger value="comments">Comments</TabsTrigger>
                </TabsList>

                <TabsContent value="details">
                  <Card>
                    <CardHeader>
                      <CardTitle>Observation Information</CardTitle>
                      <CardDescription>Detailed information about this safety observation</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-6">
                        <div>
                          <h3 className="text-lg font-medium">Description</h3>
                          <p className="mt-2 text-gray-700">{observation.description}</p>
                        </div>

                        <Separator />

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                          <div>
                            <h3 className="text-sm font-medium text-gray-500">Category</h3>
                            <p className="mt-1">{observation.category}</p>
                          </div>
                          <div>
                            <h3 className="text-sm font-medium text-gray-500">Severity</h3>
                            <Badge className={`mt-1 ${getSeverityColor()}`}>{observation.severity}</Badge>
                          </div>
                          <div>
                            <h3 className="text-sm font-medium text-gray-500">Location</h3>
                            <div className="flex items-center mt-1">
                              <MapPin className="h-4 w-4 mr-1 text-gray-400" />
                              <span>{observation.location}</span>
                            </div>
                          </div>
                          <div>
                            <h3 className="text-sm font-medium text-gray-500">Date Reported</h3>
                            <div className="flex items-center mt-1">
                              <Calendar className="h-4 w-4 mr-1 text-gray-400" />
                              <span>{format(new Date(observation.date), "MMM d, yyyy")}</span>
                            </div>
                          </div>
                          <div>
                            <h3 className="text-sm font-medium text-gray-500">Reported By</h3>
                            <div className="flex items-center mt-1">
                              <User className="h-4 w-4 mr-1 text-gray-400" />
                              <span>{observation.reportedBy}</span>
                            </div>
                          </div>
                        </div>

                        {observation.correctiveActions && (
                          <>
                            <Separator />
                            <div>
                              <h3 className="text-lg font-medium">Corrective Actions Taken</h3>
                              <p className="mt-2 text-gray-700">{observation.correctiveActions}</p>
                            </div>
                          </>
                        )}
                      </div>
                    </CardContent>
                  </Card>
                </TabsContent>

                <TabsContent value="actions">
                  <Card>
                    <CardHeader className="flex flex-row items-center justify-between">
                      <div>
                        <CardTitle>Related Actions</CardTitle>
                        <CardDescription>Actions created from this observation</CardDescription>
                      </div>
                      <Button size="sm">
                        <Play className="h-4 w-4 mr-2" />
                        Create Action
                      </Button>
                    </CardHeader>
                    <CardContent>
                      {relatedActions.length > 0 ? (
                        <div className="space-y-4">
                          {relatedActions.map((action) => (
                            <div key={action.id} className="border rounded-md p-4">
                              <div className="flex justify-between items-start">
                                <div>
                                  <h3 className="font-medium">{action.title}</h3>
                                  <div className="flex items-center mt-1 text-sm text-gray-500">
                                    <User className="h-3 w-3 mr-1" />
                                    <span>{action.assignedTo}</span>
                                    <span className="mx-2">•</span>
                                    <Calendar className="h-3 w-3 mr-1" />
                                    <span>Due: {format(new Date(action.dueDate), "MMM d, yyyy")}</span>
                                  </div>
                                </div>
                                <Badge
                                  className={
                                    action.status === "Completed"
                                      ? "bg-green-100 text-green-800"
                                      : "bg-blue-100 text-blue-800"
                                  }
                                >
                                  {action.status}
                                </Badge>
                              </div>
                              <div className="mt-2">
                                <Button variant="ghost" size="sm" asChild>
                                  <Link href={`/actions/${action.id}`}>View Action</Link>
                                </Button>
                              </div>
                            </div>
                          ))}
                        </div>
                      ) : (
                        <div className="text-center py-6 text-gray-500">
                          <p>No actions have been created for this observation yet.</p>
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
                        <CardDescription>Discussion about this observation</CardDescription>
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
                    <Button className="w-full justify-start" variant="outline">
                      <FileText className="h-4 w-4 mr-2" />
                      Generate Report
                    </Button>
                    <Button className="w-full justify-start" variant="outline">
                      <Play className="h-4 w-4 mr-2" />
                      Create Action
                    </Button>
                    <Button className="w-full justify-start" variant="outline">
                      <CheckCircle className="h-4 w-4 mr-2" />
                      Update Status
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
                        <p className="font-medium">Observation Created</p>
                        <p className="text-sm text-gray-500">{format(new Date(observation.date), "MMM d, yyyy")}</p>
                        <p className="text-sm text-gray-500">By {observation.reportedBy}</p>
                      </div>
                    </div>

                    {observation.status !== "Open" && (
                      <div className="flex">
                        <div className="mr-4 flex flex-col items-center">
                          <div className="h-2.5 w-2.5 rounded-full bg-blue-500"></div>
                          <div className="h-full w-px bg-gray-200"></div>
                        </div>
                        <div>
                          <p className="font-medium">Status Updated to In Progress</p>
                          <p className="text-sm text-gray-500">{format(new Date(observation.date), "MMM d, yyyy")}</p>
                          <p className="text-sm text-gray-500">By System Admin</p>
                        </div>
                      </div>
                    )}

                    {observation.status === "Closed" && (
                      <div className="flex">
                        <div className="mr-4 flex flex-col items-center">
                          <div className="h-2.5 w-2.5 rounded-full bg-green-500"></div>
                        </div>
                        <div>
                          <p className="font-medium">Observation Closed</p>
                          <p className="text-sm text-gray-500">{format(new Date(observation.date), "MMM d, yyyy")}</p>
                          <p className="text-sm text-gray-500">By System Admin</p>
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
