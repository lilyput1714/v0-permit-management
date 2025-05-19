import MainLayout from "@/components/permit/main-layout"
import Sidebar from "@/components/permit/sidebar"
import DesktopHeader from "@/components/permit/desktop-header"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { ArrowLeft } from "lucide-react"
import Link from "next/link"
import { Checkbox } from "@/components/ui/checkbox"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

export default function NewAuditPage() {
  return (
    <MainLayout>
      <Sidebar />
      <div className="flex-1 md:ml-64">
        <DesktopHeader title="New Audit" />
        <div className="py-6 px-4 sm:px-6 md:px-8">
          <div className="mb-6">
            <Link href="/audits" className="flex items-center text-blue-600 hover:text-blue-800">
              <ArrowLeft className="h-4 w-4 mr-1" />
              Back to Audits
            </Link>
          </div>

          <Tabs defaultValue="details">
            <TabsList className="mb-6">
              <TabsTrigger value="details">Audit Details</TabsTrigger>
              <TabsTrigger value="checklist">Audit Checklist</TabsTrigger>
              <TabsTrigger value="findings">Findings & Actions</TabsTrigger>
            </TabsList>

            <TabsContent value="details">
              <Card>
                <CardHeader>
                  <CardTitle>Audit Information</CardTitle>
                  <CardDescription>Provide general information about the audit</CardDescription>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div className="space-y-4">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <Label htmlFor="title">Audit Title</Label>
                        <Input id="title" placeholder="Enter a descriptive title" />
                      </div>

                      <div className="space-y-2">
                        <Label htmlFor="audit-type">Audit Type</Label>
                        <Select>
                          <SelectTrigger id="audit-type">
                            <SelectValue placeholder="Select audit type" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="safety-inspection">Safety Inspection</SelectItem>
                            <SelectItem value="compliance">Compliance Audit</SelectItem>
                            <SelectItem value="management-system">Management System Audit</SelectItem>
                            <SelectItem value="process-safety">Process Safety Audit</SelectItem>
                            <SelectItem value="contractor">Contractor Audit</SelectItem>
                            <SelectItem value="environmental">Environmental Audit</SelectItem>
                            <SelectItem value="other">Other</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <Label htmlFor="location">Audit Location</Label>
                        <Input id="location" placeholder="Location to be audited" />
                      </div>

                      <div className="space-y-2">
                        <Label htmlFor="department">Department/Area</Label>
                        <Select>
                          <SelectTrigger id="department">
                            <SelectValue placeholder="Select department" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="production">Production</SelectItem>
                            <SelectItem value="maintenance">Maintenance</SelectItem>
                            <SelectItem value="warehouse">Warehouse</SelectItem>
                            <SelectItem value="utilities">Utilities</SelectItem>
                            <SelectItem value="office">Office</SelectItem>
                            <SelectItem value="entire-facility">Entire Facility</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                      <div className="space-y-2">
                        <Label htmlFor="audit-date">Audit Date</Label>
                        <Input id="audit-date" type="date" />
                      </div>

                      <div className="space-y-2">
                        <Label htmlFor="auditor">Lead Auditor</Label>
                        <Select>
                          <SelectTrigger id="auditor">
                            <SelectValue placeholder="Select auditor" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="john-smith">John Smith</SelectItem>
                            <SelectItem value="sarah-johnson">Sarah Johnson</SelectItem>
                            <SelectItem value="michael-brown">Michael Brown</SelectItem>
                            <SelectItem value="jennifer-wilson">Jennifer Wilson</SelectItem>
                            <SelectItem value="david-lee">David Lee</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>

                      <div className="space-y-2">
                        <Label htmlFor="next-audit-date">Next Audit Date</Label>
                        <Input id="next-audit-date" type="date" />
                      </div>
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="description">Audit Scope & Objectives</Label>
                      <Textarea
                        id="description"
                        placeholder="Describe the scope and objectives of this audit..."
                        className="min-h-[120px]"
                      />
                    </div>

                    <div className="space-y-2">
                      <Label>Audit Team Members</Label>
                      <div className="border rounded-md p-4 space-y-4">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                          <div className="space-y-2">
                            <Label htmlFor="team-member">Team Member</Label>
                            <Select>
                              <SelectTrigger id="team-member">
                                <SelectValue placeholder="Select team member" />
                              </SelectTrigger>
                              <SelectContent>
                                <SelectItem value="john-smith">John Smith</SelectItem>
                                <SelectItem value="sarah-johnson">Sarah Johnson</SelectItem>
                                <SelectItem value="michael-brown">Michael Brown</SelectItem>
                                <SelectItem value="jennifer-wilson">Jennifer Wilson</SelectItem>
                                <SelectItem value="david-lee">David Lee</SelectItem>
                              </SelectContent>
                            </Select>
                          </div>
                          <div className="space-y-2">
                            <Label htmlFor="member-role">Role</Label>
                            <Input id="member-role" placeholder="e.g., Safety Specialist" />
                          </div>
                        </div>
                        <Button variant="outline" size="sm" type="button">
                          + Add Team Member
                        </Button>
                      </div>
                    </div>

                    <div className="space-y-2">
                      <Label>Auditee Information</Label>
                      <div className="border rounded-md p-4 space-y-4">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                          <div className="space-y-2">
                            <Label htmlFor="auditee-name">Primary Contact</Label>
                            <Input id="auditee-name" placeholder="Name of primary contact" />
                          </div>
                          <div className="space-y-2">
                            <Label htmlFor="auditee-position">Position</Label>
                            <Input id="auditee-position" placeholder="Position or title" />
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="space-y-2">
                      <Label>Reference Documents</Label>
                      <div className="space-y-2">
                        <div className="flex items-center space-x-2">
                          <Checkbox id="ref-1" />
                          <Label htmlFor="ref-1" className="font-normal">
                            Safety Management System Manual
                          </Label>
                        </div>
                        <div className="flex items-center space-x-2">
                          <Checkbox id="ref-2" />
                          <Label htmlFor="ref-2" className="font-normal">
                            Standard Operating Procedures
                          </Label>
                        </div>
                        <div className="flex items-center space-x-2">
                          <Checkbox id="ref-3" />
                          <Label htmlFor="ref-3" className="font-normal">
                            Regulatory Requirements
                          </Label>
                        </div>
                        <div className="flex items-center space-x-2">
                          <Checkbox id="ref-4" />
                          <Label htmlFor="ref-4" className="font-normal">
                            Previous Audit Reports
                          </Label>
                        </div>
                      </div>
                    </div>
                  </div>
                </CardContent>
                <CardFooter className="flex justify-end">
                  <Button>Continue to Audit Checklist</Button>
                </CardFooter>
              </Card>
            </TabsContent>

            <TabsContent value="checklist">
              <Card>
                <CardHeader>
                  <CardTitle>Audit Checklist</CardTitle>
                  <CardDescription>Create or select a checklist for this audit</CardDescription>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div className="space-y-4">
                    <div className="space-y-2">
                      <Label htmlFor="checklist-template">Checklist Template</Label>
                      <Select>
                        <SelectTrigger id="checklist-template">
                          <SelectValue placeholder="Select a template or create new" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="general-safety">General Safety Inspection</SelectItem>
                          <SelectItem value="fire-safety">Fire Safety Audit</SelectItem>
                          <SelectItem value="ppe-compliance">PPE Compliance</SelectItem>
                          <SelectItem value="chemical-safety">Chemical Safety</SelectItem>
                          <SelectItem value="custom">Create Custom Checklist</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>

                    <div className="border rounded-md divide-y">
                      {/* Section 1 */}
                      <div className="p-4">
                        <div className="flex justify-between items-center mb-4">
                          <h3 className="font-medium">1. General Safety</h3>
                          <Button variant="outline" size="sm">
                            Add Question
                          </Button>
                        </div>

                        <div className="space-y-4">
                          <div className="border rounded-md p-3">
                            <div className="flex justify-between items-start">
                              <div className="space-y-1">
                                <p className="font-medium">1.1 Are emergency exits clearly marked and unobstructed?</p>
                                <div className="flex space-x-4">
                                  <div className="flex items-center space-x-2">
                                    <Checkbox id="q1-yes" />
                                    <Label htmlFor="q1-yes" className="font-normal">
                                      Yes
                                    </Label>
                                  </div>
                                  <div className="flex items-center space-x-2">
                                    <Checkbox id="q1-no" />
                                    <Label htmlFor="q1-no" className="font-normal">
                                      No
                                    </Label>
                                  </div>
                                  <div className="flex items-center space-x-2">
                                    <Checkbox id="q1-na" />
                                    <Label htmlFor="q1-na" className="font-normal">
                                      N/A
                                    </Label>
                                  </div>
                                </div>
                              </div>
                              <div className="flex items-center space-x-2">
                                <Button variant="ghost" size="sm">
                                  Edit
                                </Button>
                                <Button variant="ghost" size="sm">
                                  Delete
                                </Button>
                              </div>
                            </div>
                            <div className="mt-2">
                              <Label htmlFor="q1-comments" className="text-sm">
                                Comments
                              </Label>
                              <Textarea id="q1-comments" className="h-20 mt-1" placeholder="Add comments..." />
                            </div>
                          </div>

                          <div className="border rounded-md p-3">
                            <div className="flex justify-between items-start">
                              <div className="space-y-1">
                                <p className="font-medium">
                                  1.2 Are fire extinguishers accessible and in good condition?
                                </p>
                                <div className="flex space-x-4">
                                  <div className="flex items-center space-x-2">
                                    <Checkbox id="q2-yes" />
                                    <Label htmlFor="q2-yes" className="font-normal">
                                      Yes
                                    </Label>
                                  </div>
                                  <div className="flex items-center space-x-2">
                                    <Checkbox id="q2-no" />
                                    <Label htmlFor="q2-no" className="font-normal">
                                      No
                                    </Label>
                                  </div>
                                  <div className="flex items-center space-x-2">
                                    <Checkbox id="q2-na" />
                                    <Label htmlFor="q2-na" className="font-normal">
                                      N/A
                                    </Label>
                                  </div>
                                </div>
                              </div>
                              <div className="flex items-center space-x-2">
                                <Button variant="ghost" size="sm">
                                  Edit
                                </Button>
                                <Button variant="ghost" size="sm">
                                  Delete
                                </Button>
                              </div>
                            </div>
                            <div className="mt-2">
                              <Label htmlFor="q2-comments" className="text-sm">
                                Comments
                              </Label>
                              <Textarea id="q2-comments" className="h-20 mt-1" placeholder="Add comments..." />
                            </div>
                          </div>
                        </div>
                      </div>

                      {/* Section 2 */}
                      <div className="p-4">
                        <div className="flex justify-between items-center mb-4">
                          <h3 className="font-medium">2. Personal Protective Equipment</h3>
                          <Button variant="outline" size="sm">
                            Add Question
                          </Button>
                        </div>

                        <div className="space-y-4">
                          <div className="border rounded-md p-3">
                            <div className="flex justify-between items-start">
                              <div className="space-y-1">
                                <p className="font-medium">
                                  2.1 Are employees wearing appropriate PPE for their tasks?
                                </p>
                                <div className="flex space-x-4">
                                  <div className="flex items-center space-x-2">
                                    <Checkbox id="q3-yes" />
                                    <Label htmlFor="q3-yes" className="font-normal">
                                      Yes
                                    </Label>
                                  </div>
                                  <div className="flex items-center space-x-2">
                                    <Checkbox id="q3-no" />
                                    <Label htmlFor="q3-no" className="font-normal">
                                      No
                                    </Label>
                                  </div>
                                  <div className="flex items-center space-x-2">
                                    <Checkbox id="q3-na" />
                                    <Label htmlFor="q3-na" className="font-normal">
                                      N/A
                                    </Label>
                                  </div>
                                </div>
                              </div>
                              <div className="flex items-center space-x-2">
                                <Button variant="ghost" size="sm">
                                  Edit
                                </Button>
                                <Button variant="ghost" size="sm">
                                  Delete
                                </Button>
                              </div>
                            </div>
                            <div className="mt-2">
                              <Label htmlFor="q3-comments" className="text-sm">
                                Comments
                              </Label>
                              <Textarea id="q3-comments" className="h-20 mt-1" placeholder="Add comments..." />
                            </div>
                          </div>
                        </div>
                      </div>

                      {/* Add Section Button */}
                      <div className="p-4 flex justify-center">
                        <Button variant="outline">+ Add New Section</Button>
                      </div>
                    </div>
                  </div>
                </CardContent>
                <CardFooter className="flex justify-between">
                  <Button variant="outline">Back to Audit Details</Button>
                  <Button>Continue to Findings & Actions</Button>
                </CardFooter>
              </Card>
            </TabsContent>

            <TabsContent value="findings">
              <Card>
                <CardHeader>
                  <CardTitle>Findings & Actions</CardTitle>
                  <CardDescription>Document findings and recommended actions</CardDescription>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div className="space-y-4">
                    <div className="space-y-2">
                      <Label>Audit Findings</Label>
                      <div className="border rounded-md p-4 space-y-4">
                        <div className="space-y-4">
                          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                            <div className="space-y-2 md:col-span-2">
                              <Label htmlFor="finding-title">Finding</Label>
                              <Input id="finding-title" placeholder="Brief description of finding" />
                            </div>
                            <div className="space-y-2">
                              <Label htmlFor="finding-type">Type</Label>
                              <Select>
                                <SelectTrigger id="finding-type">
                                  <SelectValue placeholder="Select type" />
                                </SelectTrigger>
                                <SelectContent>
                                  <SelectItem value="non-conformity">Non-conformity</SelectItem>
                                  <SelectItem value="observation">Observation</SelectItem>
                                  <SelectItem value="opportunity">Improvement Opportunity</SelectItem>
                                  <SelectItem value="positive">Positive Finding</SelectItem>
                                </SelectContent>
                              </Select>
                            </div>
                          </div>
                          <div className="space-y-2">
                            <Label htmlFor="finding-details">Details</Label>
                            <Textarea
                              id="finding-details"
                              placeholder="Detailed description of the finding..."
                              className="min-h-[80px]"
                            />
                          </div>
                          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            <div className="space-y-2">
                              <Label htmlFor="finding-location">Location</Label>
                              <Input id="finding-location" placeholder="Specific location of finding" />
                            </div>
                            <div className="space-y-2">
                              <Label htmlFor="finding-severity">Severity</Label>
                              <Select>
                                <SelectTrigger id="finding-severity">
                                  <SelectValue placeholder="Select severity" />
                                </SelectTrigger>
                                <SelectContent>
                                  <SelectItem value="critical">Critical</SelectItem>
                                  <SelectItem value="major">Major</SelectItem>
                                  <SelectItem value="minor">Minor</SelectItem>
                                </SelectContent>
                              </Select>
                            </div>
                          </div>
                        </div>
                        <Button variant="outline" size="sm" type="button">
                          + Add Another Finding
                        </Button>
                      </div>
                    </div>

                    <div className="space-y-2">
                      <Label>Recommended Actions</Label>
                      <div className="border rounded-md p-4 space-y-4">
                        <div className="space-y-4">
                          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            <div className="space-y-2">
                              <Label htmlFor="action-title">Action</Label>
                              <Input id="action-title" placeholder="Brief description of action" />
                            </div>
                            <div className="space-y-2">
                              <Label htmlFor="action-assigned">Assigned To</Label>
                              <Select>
                                <SelectTrigger id="action-assigned">
                                  <SelectValue placeholder="Select person" />
                                </SelectTrigger>
                                <SelectContent>
                                  <SelectItem value="john-smith">John Smith</SelectItem>
                                  <SelectItem value="sarah-johnson">Sarah Johnson</SelectItem>
                                  <SelectItem value="michael-brown">Michael Brown</SelectItem>
                                </SelectContent>
                              </Select>
                            </div>
                          </div>
                          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            <div className="space-y-2">
                              <Label htmlFor="action-due-date">Due Date</Label>
                              <Input id="action-due-date" type="date" />
                            </div>
                            <div className="space-y-2">
                              <Label htmlFor="action-priority">Priority</Label>
                              <Select>
                                <SelectTrigger id="action-priority">
                                  <SelectValue placeholder="Select priority" />
                                </SelectTrigger>
                                <SelectContent>
                                  <SelectItem value="high">High</SelectItem>
                                  <SelectItem value="medium">Medium</SelectItem>
                                  <SelectItem value="low">Low</SelectItem>
                                </SelectContent>
                              </Select>
                            </div>
                          </div>
                          <div className="space-y-2">
                            <Label htmlFor="action-details">Details</Label>
                            <Textarea
                              id="action-details"
                              placeholder="Detailed description of the action..."
                              className="min-h-[80px]"
                            />
                          </div>
                        </div>
                        <Button variant="outline" size="sm" type="button">
                          + Add Another Action
                        </Button>
                      </div>
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="audit-summary">Audit Summary</Label>
                      <Textarea
                        id="audit-summary"
                        placeholder="Provide a summary of the audit findings and conclusions..."
                        className="min-h-[120px]"
                      />
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <Label htmlFor="audit-score">Overall Audit Score (%)</Label>
                        <Input id="audit-score" type="number" min="0" max="100" placeholder="e.g., 85" />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="audit-status">Audit Status</Label>
                        <Select>
                          <SelectTrigger id="audit-status">
                            <SelectValue placeholder="Select status" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="draft">Draft</SelectItem>
                            <SelectItem value="in-progress">In Progress</SelectItem>
                            <SelectItem value="completed">Completed</SelectItem>
                            <SelectItem value="closed">Closed</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                    </div>
                  </div>
                </CardContent>
                <CardFooter className="flex justify-between">
                  <Button variant="outline">Back to Audit Checklist</Button>
                  <Button>Submit Audit</Button>
                </CardFooter>
              </Card>
            </TabsContent>
          </Tabs>
        </div>
      </div>
    </MainLayout>
  )
}
