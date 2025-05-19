import MainLayout from "@/components/permit/main-layout"
import Sidebar from "@/components/permit/sidebar"
import DesktopHeader from "@/components/permit/desktop-header"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Badge } from "@/components/ui/badge"
import { Separator } from "@/components/ui/separator"
import { getAuditById } from "@/services/data-service"
import { notFound } from "next/navigation"
import {
  ArrowLeft,
  Calendar,
  CheckCircle,
  Clock,
  ClipboardCheck,
  MapPin,
  User,
  FileText,
  Play,
  BarChart,
} from "lucide-react"
import Link from "next/link"
import { format } from "date-fns"
import { Progress } from "@/components/ui/progress"

export default function AuditDetailsPage({ params }: { params: { id: string } }) {
  const audit = getAuditById(params.id)

  if (!audit) {
    notFound()
  }

  const getStatusIcon = () => {
    switch (audit.status) {
      case "Completed":
        return <CheckCircle className="h-5 w-5 text-green-500" />
      case "In Progress":
        return <Clock className="h-5 w-5 text-blue-500" />
      case "Scheduled":
        return <Calendar className="h-5 w-5 text-orange-500" />
      default:
        return <Clock className="h-5 w-5 text-gray-500" />
    }
  }

  const getStatusColor = () => {
    switch (audit.status) {
      case "Completed":
        return "bg-green-100 text-green-800"
      case "In Progress":
        return "bg-blue-100 text-blue-800"
      case "Scheduled":
        return "bg-orange-100 text-orange-800"
      default:
        return "bg-gray-100 text-gray-800"
    }
  }

  const getScoreColor = () => {
    if (!audit.score) return "bg-gray-100 text-gray-800"

    if (audit.score >= 90) return "bg-green-100 text-green-800"
    if (audit.score >= 70) return "bg-yellow-100 text-yellow-800"
    return "bg-red-100 text-red-800"
  }

  // Mock data for audit findings
  const auditFindings = [
    {
      id: "find-1",
      category: "Safety Equipment",
      description: "Fire extinguishers not properly maintained",
      severity: "High",
      status: "Open",
    },
    {
      id: "find-2",
      category: "Documentation",
      description: "Safety procedures not up to date",
      severity: "Medium",
      status: "In Progress",
    },
    {
      id: "find-3",
      category: "Training",
      description: "Staff training records incomplete",
      severity: "Low",
      status: "Closed",
    },
  ]

  // Mock data for related actions
  const relatedActions = [
    {
      id: "act-1",
      title: "Update fire extinguisher maintenance schedule",
      status: "In Progress",
      assignedTo: "John Smith",
      dueDate: "2023-06-15",
    },
    {
      id: "act-2",
      title: "Revise safety procedures documentation",
      status: "Completed",
      assignedTo: "Sarah Johnson",
      dueDate: "2023-05-30",
    },
  ]

  // Mock data for audit checklist
  const auditChecklist = [
    {
      category: "Documentation",
      items: [
        { description: "Safety policy available and up to date", status: "Compliant" },
        { description: "Risk assessments completed for all activities", status: "Non-Compliant" },
        { description: "Emergency procedures documented", status: "Compliant" },
      ],
    },
    {
      category: "Training",
      items: [
        { description: "Staff trained in emergency procedures", status: "Compliant" },
        { description: "Training records maintained", status: "Partial" },
        { description: "Refresher training scheduled", status: "Compliant" },
      ],
    },
    {
      category: "Equipment",
      items: [
        { description: "PPE available and in good condition", status: "Compliant" },
        { description: "Fire equipment inspected regularly", status: "Non-Compliant" },
        { description: "First aid kits fully stocked", status: "Compliant" },
      ],
    },
  ]

  return (
    <MainLayout>
      <Sidebar />
      <div className="flex-1 md:ml-64">
        <DesktopHeader title="Audit Details" />
        <div className="py-6 px-4 sm:px-6 md:px-8">
          <div className="mb-6">
            <Button variant="outline" asChild className="mb-4">
              <Link href="/audits">
                <ArrowLeft className="h-4 w-4 mr-2" />
                Back to Audits
              </Link>
            </Button>

            <div className="flex flex-col md:flex-row md:items-center md:justify-between">
              <div className="flex items-center">
                <ClipboardCheck className="h-6 w-6 mr-2 text-blue-500" />
                <h1 className="text-2xl font-bold text-gray-900">{audit.title}</h1>
              </div>
              <div className="flex items-center mt-2 md:mt-0 space-x-2">
                {audit.score && <Badge className={getScoreColor()}>Score: {audit.score}%</Badge>}
                <Badge className={`flex items-center ${getStatusColor()}`}>
                  {getStatusIcon()}
                  <span className="ml-1">{audit.status}</span>
                </Badge>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            <div className="lg:col-span-2">
              <Tabs defaultValue="details">
                <TabsList className="mb-4">
                  <TabsTrigger value="details">Details</TabsTrigger>
                  <TabsTrigger value="checklist">Checklist</TabsTrigger>
                  <TabsTrigger value="findings">Findings</TabsTrigger>
                  <TabsTrigger value="actions">Actions</TabsTrigger>
                </TabsList>

                <TabsContent value="details">
                  <Card>
                    <CardHeader>
                      <CardTitle>Audit Information</CardTitle>
                      <CardDescription>Detailed information about this audit</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-6">
                        <div>
                          <h3 className="text-lg font-medium">Description</h3>
                          <p className="mt-2 text-gray-700">{audit.description}</p>
                        </div>

                        <Separator />

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                          <div>
                            <h3 className="text-sm font-medium text-gray-500">Audit Type</h3>
                            <p className="mt-1">{audit.auditType}</p>
                          </div>
                          <div>
                            <h3 className="text-sm font-medium text-gray-500">Location</h3>
                            <div className="flex items-center mt-1">
                              <MapPin className="h-4 w-4 mr-1 text-gray-400" />
                              <span>{audit.location}</span>
                            </div>
                          </div>
                          <div>
                            <h3 className="text-sm font-medium text-gray-500">Audit Date</h3>
                            <div className="flex items-center mt-1">
                              <Calendar className="h-4 w-4 mr-1 text-gray-400" />
                              <span>{format(new Date(audit.date), "MMM d, yyyy")}</span>
                            </div>
                          </div>
                          <div>
                            <h3 className="text-sm font-medium text-gray-500">Auditor</h3>
                            <div className="flex items-center mt-1">
                              <User className="h-4 w-4 mr-1 text-gray-400" />
                              <span>{audit.auditor}</span>
                            </div>
                          </div>
                          {audit.nextAuditDate && (
                            <div>
                              <h3 className="text-sm font-medium text-gray-500">Next Audit Date</h3>
                              <div className="flex items-center mt-1">
                                <Calendar className="h-4 w-4 mr-1 text-gray-400" />
                                <span>{format(new Date(audit.nextAuditDate), "MMM d, yyyy")}</span>
                              </div>
                            </div>
                          )}
                        </div>

                        {audit.score && (
                          <>
                            <Separator />
                            <div>
                              <h3 className="text-lg font-medium">Audit Score</h3>
                              <div className="mt-2">
                                <div className="flex justify-between mb-1">
                                  <span className="text-sm font-medium">Overall Compliance: {audit.score}%</span>
                                  <span
                                    className={`text-sm font-medium ${
                                      audit.score >= 90
                                        ? "text-green-600"
                                        : audit.score >= 70
                                          ? "text-yellow-600"
                                          : "text-red-600"
                                    }`}
                                  >
                                    {audit.score >= 90 ? "Good" : audit.score >= 70 ? "Needs Improvement" : "Critical"}
                                  </span>
                                </div>
                                <Progress value={audit.score} className="h-2" />
                              </div>
                            </div>
                          </>
                        )}
                      </div>
                    </CardContent>
                  </Card>
                </TabsContent>

                <TabsContent value="checklist">
                  <Card>
                    <CardHeader>
                      <CardTitle>Audit Checklist</CardTitle>
                      <CardDescription>Items checked during this audit</CardDescription>
                    </CardHeader>
                    <CardContent>
                      {auditChecklist.length > 0 ? (
                        <div className="space-y-6">
                          {auditChecklist.map((category, index) => (
                            <div key={index}>
                              <h3 className="text-lg font-medium mb-2">{category.category}</h3>
                              <div className="space-y-2">
                                {category.items.map((item, itemIndex) => (
                                  <div key={itemIndex} className="border rounded-md p-3">
                                    <div className="flex justify-between items-center">
                                      <p className="text-sm">{item.description}</p>
                                      <Badge
                                        className={
                                          item.status === "Compliant"
                                            ? "bg-green-100 text-green-800"
                                            : item.status === "Non-Compliant"
                                              ? "bg-red-100 text-red-800"
                                              : "bg-yellow-100 text-yellow-800"
                                        }
                                      >
                                        {item.status}
                                      </Badge>
                                    </div>
                                  </div>
                                ))}
                              </div>
                            </div>
                          ))}
                        </div>
                      ) : (
                        <div className="text-center py-6 text-gray-500">
                          <p>No checklist items available for this audit.</p>
                        </div>
                      )}
                    </CardContent>
                  </Card>
                </TabsContent>

                <TabsContent value="findings">
                  <Card>
                    <CardHeader className="flex flex-row items-center justify-between">
                      <div>
                        <CardTitle>Audit Findings</CardTitle>
                        <CardDescription>Issues identified during this audit</CardDescription>
                      </div>
                      <Button size="sm">
                        <Play className="h-4 w-4 mr-2" />
                        Add Finding
                      </Button>
                    </CardHeader>
                    <CardContent>
                      {auditFindings.length > 0 ? (
                        <div className="space-y-4">
                          {auditFindings.map((finding) => (
                            <div key={finding.id} className="border rounded-md p-4">
                              <div className="flex justify-between items-start">
                                <div>
                                  <div className="flex items-center">
                                    <Badge variant="outline" className="mr-2">
                                      {finding.category}
                                    </Badge>
                                    <Badge
                                      className={
                                        finding.severity === "High"
                                          ? "bg-red-100 text-red-800"
                                          : finding.severity === "Medium"
                                            ? "bg-orange-100 text-orange-800"
                                            : "bg-green-100 text-green-800"
                                      }
                                    >
                                      {finding.severity}
                                    </Badge>
                                  </div>
                                  <p className="mt-2">{finding.description}</p>
                                </div>
                                <Badge
                                  className={
                                    finding.status === "Closed"
                                      ? "bg-green-100 text-green-800"
                                      : finding.status === "In Progress"
                                        ? "bg-blue-100 text-blue-800"
                                        : "bg-orange-100 text-orange-800"
                                  }
                                >
                                  {finding.status}
                                </Badge>
                              </div>
                              <div className="mt-2">
                                <Button variant="ghost" size="sm">
                                  Create Action
                                </Button>
                              </div>
                            </div>
                          ))}
                        </div>
                      ) : (
                        <div className="text-center py-6 text-gray-500">
                          <p>No findings recorded for this audit.</p>
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
                        <CardDescription>Actions created from this audit</CardDescription>
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
                          <p>No actions have been created for this audit yet.</p>
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
                      Schedule Next Audit
                    </Button>
                  </div>
                </CardContent>
              </Card>

              {audit.score && (
                <Card className="mt-6">
                  <CardHeader>
                    <CardTitle>Compliance Summary</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      <div>
                        <div className="flex justify-between mb-1">
                          <span className="text-sm">Documentation</span>
                          <span className="text-sm font-medium">75%</span>
                        </div>
                        <Progress value={75} className="h-2" />
                      </div>
                      <div>
                        <div className="flex justify-between mb-1">
                          <span className="text-sm">Training</span>
                          <span className="text-sm font-medium">83%</span>
                        </div>
                        <Progress value={83} className="h-2" />
                      </div>
                      <div>
                        <div className="flex justify-between mb-1">
                          <span className="text-sm">Equipment</span>
                          <span className="text-sm font-medium">67%</span>
                        </div>
                        <Progress value={67} className="h-2" />
                      </div>
                      <div>
                        <div className="flex justify-between mb-1">
                          <span className="text-sm">Procedures</span>
                          <span className="text-sm font-medium">92%</span>
                        </div>
                        <Progress value={92} className="h-2" />
                      </div>
                    </div>
                    <div className="mt-4 pt-4 border-t">
                      <Button variant="outline" className="w-full" size="sm">
                        <BarChart className="h-4 w-4 mr-2" />
                        View Full Analytics
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              )}

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
                        <p className="font-medium">Audit Scheduled</p>
                        <p className="text-sm text-gray-500">{format(new Date(audit.date), "MMM d, yyyy")}</p>
                        <p className="text-sm text-gray-500">By System Admin</p>
                      </div>
                    </div>

                    {audit.status !== "Scheduled" && (
                      <div className="flex">
                        <div className="mr-4 flex flex-col items-center">
                          <div className="h-2.5 w-2.5 rounded-full bg-blue-500"></div>
                          <div className="h-full w-px bg-gray-200"></div>
                        </div>
                        <div>
                          <p className="font-medium">Audit Started</p>
                          <p className="text-sm text-gray-500">{format(new Date(audit.date), "MMM d, yyyy")}</p>
                          <p className="text-sm text-gray-500">By {audit.auditor}</p>
                        </div>
                      </div>
                    )}

                    {audit.status === "Completed" && (
                      <div className="flex">
                        <div className="mr-4 flex flex-col items-center">
                          <div className="h-2.5 w-2.5 rounded-full bg-green-500"></div>
                        </div>
                        <div>
                          <p className="font-medium">Audit Completed</p>
                          <p className="text-sm text-gray-500">{format(new Date(audit.date), "MMM d, yyyy")}</p>
                          <p className="text-sm text-gray-500">By {audit.auditor}</p>
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
