import MainLayout from "@/components/permit/main-layout"
import Sidebar from "@/components/permit/sidebar"
import DesktopHeader from "@/components/permit/desktop-header"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Badge } from "@/components/ui/badge"
import { Separator } from "@/components/ui/separator"
import { getHIRAById } from "@/services/data-service"
import { notFound } from "next/navigation"
import {
  ArrowLeft,
  Calendar,
  CheckCircle,
  Clock,
  Shield,
  MapPin,
  User,
  FileText,
  Play,
  AlertTriangle,
} from "lucide-react"
import Link from "next/link"
import { format } from "date-fns"

export default function HIRADetailsPage({ params }: { params: { id: string } }) {
  const hira = getHIRAById(params.id)

  if (!hira) {
    notFound()
  }

  const getStatusIcon = () => {
    switch (hira.status) {
      case "Approved":
        return <CheckCircle className="h-5 w-5 text-green-500" />
      case "In Review":
        return <Clock className="h-5 w-5 text-blue-500" />
      case "Draft":
        return <Clock className="h-5 w-5 text-orange-500" />
      default:
        return <Clock className="h-5 w-5 text-gray-500" />
    }
  }

  const getStatusColor = () => {
    switch (hira.status) {
      case "Approved":
        return "bg-green-100 text-green-800"
      case "In Review":
        return "bg-blue-100 text-blue-800"
      case "Draft":
        return "bg-orange-100 text-orange-800"
      default:
        return "bg-gray-100 text-gray-800"
    }
  }

  const getRiskLevelColor = () => {
    switch (hira.riskLevel) {
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

  // Mock data for hazards
  const hazards = [
    {
      id: "haz-1",
      description: "Working at height without proper fall protection",
      initialRisk: { likelihood: "Likely", severity: "Major", level: "High" },
      residualRisk: { likelihood: "Unlikely", severity: "Major", level: "Medium" },
      controlMeasures: ["Fall arrest systems", "Safety harnesses", "Training", "Supervision"],
    },
    {
      id: "haz-2",
      description: "Exposure to hazardous chemicals",
      initialRisk: { likelihood: "Possible", severity: "Moderate", level: "Medium" },
      residualRisk: { likelihood: "Unlikely", severity: "Moderate", level: "Low" },
      controlMeasures: ["PPE", "Ventilation", "Safe storage", "MSDS available"],
    },
  ]

  // Mock data for related actions
  const relatedActions = [
    {
      id: "act-1",
      title: "Implement fall protection training",
      status: "In Progress",
      assignedTo: "John Smith",
      dueDate: "2023-06-15",
    },
    {
      id: "act-2",
      title: "Purchase additional safety harnesses",
      status: "Completed",
      assignedTo: "Sarah Johnson",
      dueDate: "2023-05-30",
    },
  ]

  return (
    <MainLayout>
      <Sidebar />
      <div className="flex-1 md:ml-64">
        <DesktopHeader title="HIRA Details" />
        <div className="py-6 px-4 sm:px-6 md:px-8">
          <div className="mb-6">
            <Button variant="outline" asChild className="mb-4">
              <Link href="/hira">
                <ArrowLeft className="h-4 w-4 mr-2" />
                Back to HIRA
              </Link>
            </Button>

            <div className="flex flex-col md:flex-row md:items-center md:justify-between">
              <div className="flex items-center">
                <Shield className="h-6 w-6 mr-2 text-blue-500" />
                <h1 className="text-2xl font-bold text-gray-900">{hira.title}</h1>
              </div>
              <div className="flex items-center mt-2 md:mt-0 space-x-2">
                <Badge className={getRiskLevelColor()}>Risk Level: {hira.riskLevel}</Badge>
                <Badge className={`flex items-center ${getStatusColor()}`}>
                  {getStatusIcon()}
                  <span className="ml-1">{hira.status}</span>
                </Badge>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            <div className="lg:col-span-2">
              <Tabs defaultValue="details">
                <TabsList className="mb-4">
                  <TabsTrigger value="details">Details</TabsTrigger>
                  <TabsTrigger value="hazards">Hazards</TabsTrigger>
                  <TabsTrigger value="actions">Actions</TabsTrigger>
                </TabsList>

                <TabsContent value="details">
                  <Card>
                    <CardHeader>
                      <CardTitle>Assessment Information</CardTitle>
                      <CardDescription>Detailed information about this risk assessment</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-6">
                        <div>
                          <h3 className="text-lg font-medium">Description</h3>
                          <p className="mt-2 text-gray-700">{hira.description}</p>
                        </div>

                        <Separator />

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                          <div>
                            <h3 className="text-sm font-medium text-gray-500">Hazard Type</h3>
                            <p className="mt-1">{hira.hazardType}</p>
                          </div>
                          <div>
                            <h3 className="text-sm font-medium text-gray-500">Location</h3>
                            <div className="flex items-center mt-1">
                              <MapPin className="h-4 w-4 mr-1 text-gray-400" />
                              <span>{hira.location}</span>
                            </div>
                          </div>
                          <div>
                            <h3 className="text-sm font-medium text-gray-500">Assessment Date</h3>
                            <div className="flex items-center mt-1">
                              <Calendar className="h-4 w-4 mr-1 text-gray-400" />
                              <span>{format(new Date(hira.date), "MMM d, yyyy")}</span>
                            </div>
                          </div>
                          <div>
                            <h3 className="text-sm font-medium text-gray-500">Assessed By</h3>
                            <div className="flex items-center mt-1">
                              <User className="h-4 w-4 mr-1 text-gray-400" />
                              <span>{hira.assessedBy}</span>
                            </div>
                          </div>
                          <div>
                            <h3 className="text-sm font-medium text-gray-500">Review Date</h3>
                            <div className="flex items-center mt-1">
                              <Calendar className="h-4 w-4 mr-1 text-gray-400" />
                              <span>{format(new Date(hira.reviewDate), "MMM d, yyyy")}</span>
                            </div>
                          </div>
                        </div>

                        <Separator />

                        <div>
                          <h3 className="text-lg font-medium">Control Measures</h3>
                          <div className="flex flex-wrap gap-2 mt-2">
                            {hira.controlMeasures?.map((measure, index) => (
                              <Badge key={index} variant="outline" className="bg-gray-50">
                                {measure}
                              </Badge>
                            ))}
                          </div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </TabsContent>

                <TabsContent value="hazards">
                  <Card>
                    <CardHeader className="flex flex-row items-center justify-between">
                      <div>
                        <CardTitle>Identified Hazards</CardTitle>
                        <CardDescription>Hazards identified in this assessment</CardDescription>
                      </div>
                      <Button size="sm">
                        <AlertTriangle className="h-4 w-4 mr-2" />
                        Add Hazard
                      </Button>
                    </CardHeader>
                    <CardContent>
                      {hazards.length > 0 ? (
                        <div className="space-y-6">
                          {hazards.map((hazard) => (
                            <div key={hazard.id} className="border rounded-md p-4">
                              <h3 className="font-medium">{hazard.description}</h3>

                              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
                                <div>
                                  <h4 className="text-sm font-medium text-gray-500">Initial Risk</h4>
                                  <div className="mt-1 space-y-1">
                                    <div className="flex justify-between">
                                      <span className="text-sm">Likelihood:</span>
                                      <span className="text-sm">{hazard.initialRisk.likelihood}</span>
                                    </div>
                                    <div className="flex justify-between">
                                      <span className="text-sm">Severity:</span>
                                      <span className="text-sm">{hazard.initialRisk.severity}</span>
                                    </div>
                                    <div className="flex justify-between">
                                      <span className="text-sm">Risk Level:</span>
                                      <Badge
                                        className={
                                          hazard.initialRisk.level === "High"
                                            ? "bg-red-100 text-red-800"
                                            : hazard.initialRisk.level === "Medium"
                                              ? "bg-orange-100 text-orange-800"
                                              : "bg-green-100 text-green-800"
                                        }
                                      >
                                        {hazard.initialRisk.level}
                                      </Badge>
                                    </div>
                                  </div>
                                </div>

                                <div>
                                  <h4 className="text-sm font-medium text-gray-500">Residual Risk</h4>
                                  <div className="mt-1 space-y-1">
                                    <div className="flex justify-between">
                                      <span className="text-sm">Likelihood:</span>
                                      <span className="text-sm">{hazard.residualRisk.likelihood}</span>
                                    </div>
                                    <div className="flex justify-between">
                                      <span className="text-sm">Severity:</span>
                                      <span className="text-sm">{hazard.residualRisk.severity}</span>
                                    </div>
                                    <div className="flex justify-between">
                                      <span className="text-sm">Risk Level:</span>
                                      <Badge
                                        className={
                                          hazard.residualRisk.level === "High"
                                            ? "bg-red-100 text-red-800"
                                            : hazard.residualRisk.level === "Medium"
                                              ? "bg-orange-100 text-orange-800"
                                              : "bg-green-100 text-green-800"
                                        }
                                      >
                                        {hazard.residualRisk.level}
                                      </Badge>
                                    </div>
                                  </div>
                                </div>
                              </div>

                              <div className="mt-4">
                                <h4 className="text-sm font-medium text-gray-500">Control Measures</h4>
                                <div className="flex flex-wrap gap-2 mt-1">
                                  {hazard.controlMeasures.map((measure, index) => (
                                    <Badge key={index} variant="outline" className="bg-gray-50">
                                      {measure}
                                    </Badge>
                                  ))}
                                </div>
                              </div>
                            </div>
                          ))}
                        </div>
                      ) : (
                        <div className="text-center py-6 text-gray-500">
                          <p>No hazards have been identified yet.</p>
                        </div>
                      )}
                    </CardContent>
                  </Card>
                </TabsContent>

                <TabsContent value="actions">
                  <Card>
                    <CardHeader className="flex flex-row items-center justify-between">
                      <div>
                        <CardTitle>Related Actions</CardTitle>
                        <CardDescription>Actions created from this assessment</CardDescription>
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
                          <p>No actions have been created for this assessment yet.</p>
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
                    <Button className="w-full justify-start" variant="outline">
                      <Calendar className="h-4 w-4 mr-2" />
                      Schedule Review
                    </Button>
                  </div>
                </CardContent>
              </Card>

              <Card className="mt-6">
                <CardHeader>
                  <CardTitle>Risk Matrix</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="overflow-x-auto">
                    <table className="min-w-full border-collapse">
                      <thead>
                        <tr>
                          <th className="border p-2 text-sm"></th>
                          <th className="border p-2 text-sm">Minor</th>
                          <th className="border p-2 text-sm">Moderate</th>
                          <th className="border p-2 text-sm">Major</th>
                          <th className="border p-2 text-sm">Severe</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <td className="border p-2 text-sm font-medium">Very Likely</td>
                          <td className="border p-2 bg-yellow-100">Medium</td>
                          <td className="border p-2 bg-orange-100">High</td>
                          <td className="border p-2 bg-red-100">Critical</td>
                          <td className="border p-2 bg-red-100">Critical</td>
                        </tr>
                        <tr>
                          <td className="border p-2 text-sm font-medium">Likely</td>
                          <td className="border p-2 bg-green-100">Low</td>
                          <td className="border p-2 bg-yellow-100">Medium</td>
                          <td className="border p-2 bg-orange-100">High</td>
                          <td className="border p-2 bg-red-100">Critical</td>
                        </tr>
                        <tr>
                          <td className="border p-2 text-sm font-medium">Possible</td>
                          <td className="border p-2 bg-green-100">Low</td>
                          <td className="border p-2 bg-yellow-100">Medium</td>
                          <td className="border p-2 bg-orange-100">High</td>
                          <td className="border p-2 bg-orange-100">High</td>
                        </tr>
                        <tr>
                          <td className="border p-2 text-sm font-medium">Unlikely</td>
                          <td className="border p-2 bg-green-100">Low</td>
                          <td className="border p-2 bg-green-100">Low</td>
                          <td className="border p-2 bg-yellow-100">Medium</td>
                          <td className="border p-2 bg-orange-100">High</td>
                        </tr>
                        <tr>
                          <td className="border p-2 text-sm font-medium">Rare</td>
                          <td className="border p-2 bg-green-100">Low</td>
                          <td className="border p-2 bg-green-100">Low</td>
                          <td className="border p-2 bg-green-100">Low</td>
                          <td className="border p-2 bg-yellow-100">Medium</td>
                        </tr>
                      </tbody>
                    </table>
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
                        <p className="font-medium">Assessment Created</p>
                        <p className="text-sm text-gray-500">{format(new Date(hira.date), "MMM d, yyyy")}</p>
                        <p className="text-sm text-gray-500">By {hira.assessedBy}</p>
                      </div>
                    </div>

                    {hira.status !== "Draft" && (
                      <div className="flex">
                        <div className="mr-4 flex flex-col items-center">
                          <div className="h-2.5 w-2.5 rounded-full bg-blue-500"></div>
                          <div className="h-full w-px bg-gray-200"></div>
                        </div>
                        <div>
                          <p className="font-medium">Submitted for Review</p>
                          <p className="text-sm text-gray-500">{format(new Date(hira.date), "MMM d, yyyy")}</p>
                          <p className="text-sm text-gray-500">By {hira.assessedBy}</p>
                        </div>
                      </div>
                    )}

                    {hira.status === "Approved" && (
                      <div className="flex">
                        <div className="mr-4 flex flex-col items-center">
                          <div className="h-2.5 w-2.5 rounded-full bg-green-500"></div>
                        </div>
                        <div>
                          <p className="font-medium">Assessment Approved</p>
                          <p className="text-sm text-gray-500">{format(new Date(hira.date), "MMM d, yyyy")}</p>
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
