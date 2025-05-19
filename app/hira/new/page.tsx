import MainLayout from "@/components/permit/main-layout"
import Sidebar from "@/components/permit/sidebar"
import DesktopHeader from "@/components/permit/desktop-header"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { ArrowLeft, AlertTriangle } from "lucide-react"
import Link from "next/link"
import { Checkbox } from "@/components/ui/checkbox"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert"
import { Badge } from "@/components/ui/badge"

export default function NewHIRAPage() {
  return (
    <MainLayout>
      <Sidebar />
      <div className="flex-1 md:ml-64">
        <DesktopHeader title="New Risk Assessment" />
        <div className="py-6 px-4 sm:px-6 md:px-8">
          <div className="mb-6">
            <Link href="/hira" className="flex items-center text-blue-600 hover:text-blue-800">
              <ArrowLeft className="h-4 w-4 mr-1" />
              Back to Risk Assessments
            </Link>
          </div>

          <Tabs defaultValue="identification">
            <TabsList className="mb-6">
              <TabsTrigger value="identification">Hazard Identification</TabsTrigger>
              <TabsTrigger value="assessment">Risk Assessment</TabsTrigger>
              <TabsTrigger value="controls">Control Measures</TabsTrigger>
            </TabsList>

            <TabsContent value="identification">
              <Card>
                <CardHeader>
                  <CardTitle>Hazard Identification</CardTitle>
                  <CardDescription>Identify the activity and associated hazards</CardDescription>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div className="space-y-4">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <Label htmlFor="title">Assessment Title</Label>
                        <Input id="title" placeholder="Enter a descriptive title" />
                      </div>

                      <div className="space-y-2">
                        <Label htmlFor="location">Location</Label>
                        <Input id="location" placeholder="Where is this activity performed?" />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                      <div className="space-y-2">
                        <Label htmlFor="department">Department</Label>
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
                            <SelectItem value="external">External/Grounds</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>

                      <div className="space-y-2">
                        <Label htmlFor="assessment-date">Assessment Date</Label>
                        <Input id="assessment-date" type="date" />
                      </div>

                      <div className="space-y-2">
                        <Label htmlFor="review-date">Review Date</Label>
                        <Input id="review-date" type="date" />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <Label htmlFor="assessed-by">Assessed By</Label>
                        <Input id="assessed-by" placeholder="Name of assessor" />
                      </div>

                      <div className="space-y-2">
                        <Label htmlFor="approved-by">Approved By</Label>
                        <Input id="approved-by" placeholder="Name of approver" />
                      </div>
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="activity-description">Activity Description</Label>
                      <Textarea
                        id="activity-description"
                        placeholder="Describe the activity or process being assessed..."
                        className="min-h-[120px]"
                      />
                    </div>

                    <div className="space-y-2">
                      <Label>People Involved/Affected</Label>
                      <div className="grid grid-cols-1 md:grid-cols-3 gap-2">
                        <div className="flex items-center space-x-2">
                          <Checkbox id="people-1" />
                          <Label htmlFor="people-1" className="font-normal">
                            Employees
                          </Label>
                        </div>
                        <div className="flex items-center space-x-2">
                          <Checkbox id="people-2" />
                          <Label htmlFor="people-2" className="font-normal">
                            Contractors
                          </Label>
                        </div>
                        <div className="flex items-center space-x-2">
                          <Checkbox id="people-3" />
                          <Label htmlFor="people-3" className="font-normal">
                            Visitors
                          </Label>
                        </div>
                        <div className="flex items-center space-x-2">
                          <Checkbox id="people-4" />
                          <Label htmlFor="people-4" className="font-normal">
                            Public
                          </Label>
                        </div>
                        <div className="flex items-center space-x-2">
                          <Checkbox id="people-5" />
                          <Label htmlFor="people-5" className="font-normal">
                            Vulnerable Persons
                          </Label>
                        </div>
                      </div>
                    </div>

                    <div className="space-y-2">
                      <Label>Hazard Types</Label>
                      <div className="border rounded-md p-4 space-y-4">
                        <div className="space-y-4">
                          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            <div className="space-y-2">
                              <Label htmlFor="hazard-type">Hazard Type</Label>
                              <Select>
                                <SelectTrigger id="hazard-type">
                                  <SelectValue placeholder="Select hazard type" />
                                </SelectTrigger>
                                <SelectContent>
                                  <SelectItem value="mechanical">Mechanical</SelectItem>
                                  <SelectItem value="electrical">Electrical</SelectItem>
                                  <SelectItem value="chemical">Chemical</SelectItem>
                                  <SelectItem value="biological">Biological</SelectItem>
                                  <SelectItem value="physical">Physical</SelectItem>
                                  <SelectItem value="ergonomic">Ergonomic</SelectItem>
                                  <SelectItem value="psychological">Psychological</SelectItem>
                                  <SelectItem value="environmental">Environmental</SelectItem>
                                </SelectContent>
                              </Select>
                            </div>
                            <div className="space-y-2">
                              <Label htmlFor="hazard-description">Hazard Description</Label>
                              <Input id="hazard-description" placeholder="Describe the specific hazard" />
                            </div>
                          </div>
                          <div className="space-y-2">
                            <Label htmlFor="potential-harm">Potential Harm/Consequences</Label>
                            <Textarea
                              id="potential-harm"
                              placeholder="Describe the potential harm or consequences..."
                              className="min-h-[80px]"
                            />
                          </div>
                          <div className="space-y-2">
                            <Label htmlFor="existing-controls">Existing Controls</Label>
                            <Textarea
                              id="existing-controls"
                              placeholder="Describe any existing control measures..."
                              className="min-h-[80px]"
                            />
                          </div>
                        </div>
                        <Button variant="outline" size="sm" type="button">
                          + Add Another Hazard
                        </Button>
                      </div>
                    </div>
                  </div>
                </CardContent>
                <CardFooter className="flex justify-end">
                  <Button>Continue to Risk Assessment</Button>
                </CardFooter>
              </Card>
            </TabsContent>

            <TabsContent value="assessment">
              <Card>
                <CardHeader>
                  <CardTitle>Risk Assessment</CardTitle>
                  <CardDescription>Evaluate the risk level for each identified hazard</CardDescription>
                </CardHeader>
                <CardContent className="space-y-6">
                  <Alert>
                    <AlertTriangle className="h-4 w-4" />
                    <AlertTitle>Risk Assessment Matrix</AlertTitle>
                    <AlertDescription>
                      Use the risk matrix to determine the risk level based on likelihood and severity.
                    </AlertDescription>
                  </Alert>

                  <div className="overflow-x-auto">
                    <table className="min-w-full border-collapse border border-gray-300">
                      <thead>
                        <tr>
                          <th className="border border-gray-300 p-2"></th>
                          <th className="border border-gray-300 p-2 bg-gray-100" colSpan={5}>
                            Severity
                          </th>
                        </tr>
                        <tr>
                          <th className="border border-gray-300 p-2 bg-gray-100">Likelihood</th>
                          <th className="border border-gray-300 p-2">1 - Negligible</th>
                          <th className="border border-gray-300 p-2">2 - Minor</th>
                          <th className="border border-gray-300 p-2">3 - Moderate</th>
                          <th className="border border-gray-300 p-2">4 - Major</th>
                          <th className="border border-gray-300 p-2">5 - Catastrophic</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <td className="border border-gray-300 p-2 font-medium">5 - Almost Certain</td>
                          <td className="border border-gray-300 p-2 bg-yellow-100 text-center">5</td>
                          <td className="border border-gray-300 p-2 bg-orange-100 text-center">10</td>
                          <td className="border border-gray-300 p-2 bg-red-100 text-center">15</td>
                          <td className="border border-gray-300 p-2 bg-red-200 text-center">20</td>
                          <td className="border border-gray-300 p-2 bg-red-300 text-center">25</td>
                        </tr>
                        <tr>
                          <td className="border border-gray-300 p-2 font-medium">4 - Likely</td>
                          <td className="border border-gray-300 p-2 bg-yellow-100 text-center">4</td>
                          <td className="border border-gray-300 p-2 bg-orange-100 text-center">8</td>
                          <td className="border border-gray-300 p-2 bg-orange-100 text-center">12</td>
                          <td className="border border-gray-300 p-2 bg-red-100 text-center">16</td>
                          <td className="border border-gray-300 p-2 bg-red-200 text-center">20</td>
                        </tr>
                        <tr>
                          <td className="border border-gray-300 p-2 font-medium">3 - Possible</td>
                          <td className="border border-gray-300 p-2 bg-green-100 text-center">3</td>
                          <td className="border border-gray-300 p-2 bg-yellow-100 text-center">6</td>
                          <td className="border border-gray-300 p-2 bg-orange-100 text-center">9</td>
                          <td className="border border-gray-300 p-2 bg-orange-100 text-center">12</td>
                          <td className="border border-gray-300 p-2 bg-red-100 text-center">15</td>
                        </tr>
                        <tr>
                          <td className="border border-gray-300 p-2 font-medium">2 - Unlikely</td>
                          <td className="border border-gray-300 p-2 bg-green-100 text-center">2</td>
                          <td className="border border-gray-300 p-2 bg-green-100 text-center">4</td>
                          <td className="border border-gray-300 p-2 bg-yellow-100 text-center">6</td>
                          <td className="border border-gray-300 p-2 bg-orange-100 text-center">8</td>
                          <td className="border border-gray-300 p-2 bg-orange-100 text-center">10</td>
                        </tr>
                        <tr>
                          <td className="border border-gray-300 p-2 font-medium">1 - Rare</td>
                          <td className="border border-gray-300 p-2 bg-green-100 text-center">1</td>
                          <td className="border border-gray-300 p-2 bg-green-100 text-center">2</td>
                          <td className="border border-gray-300 p-2 bg-green-100 text-center">3</td>
                          <td className="border border-gray-300 p-2 bg-yellow-100 text-center">4</td>
                          <td className="border border-gray-300 p-2 bg-yellow-100 text-center">5</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>

                  <div className="flex flex-wrap gap-2 mt-2">
                    <Badge className="bg-green-100 text-green-800">Low Risk (1-4)</Badge>
                    <Badge className="bg-yellow-100 text-yellow-800">Medium Risk (5-9)</Badge>
                    <Badge className="bg-orange-100 text-orange-800">High Risk (10-16)</Badge>
                    <Badge className="bg-red-100 text-red-800">Extreme Risk (17-25)</Badge>
                  </div>

                  <div className="space-y-4">
                    <div className="border rounded-md p-4">
                      <h3 className="font-medium mb-4">Hazard: Mechanical - Moving Parts of Machinery</h3>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div className="space-y-2">
                          <Label htmlFor="likelihood">Likelihood</Label>
                          <Select>
                            <SelectTrigger id="likelihood">
                              <SelectValue placeholder="Select likelihood" />
                            </SelectTrigger>
                            <SelectContent>
                              <SelectItem value="1">1 - Rare</SelectItem>
                              <SelectItem value="2">2 - Unlikely</SelectItem>
                              <SelectItem value="3">3 - Possible</SelectItem>
                              <SelectItem value="4">4 - Likely</SelectItem>
                              <SelectItem value="5">5 - Almost Certain</SelectItem>
                            </SelectContent>
                          </Select>
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="severity">Severity</Label>
                          <Select>
                            <SelectTrigger id="severity">
                              <SelectValue placeholder="Select severity" />
                            </SelectTrigger>
                            <SelectContent>
                              <SelectItem value="1">1 - Negligible</SelectItem>
                              <SelectItem value="2">2 - Minor</SelectItem>
                              <SelectItem value="3">3 - Moderate</SelectItem>
                              <SelectItem value="4">4 - Major</SelectItem>
                              <SelectItem value="5">5 - Catastrophic</SelectItem>
                            </SelectContent>
                          </Select>
                        </div>
                      </div>
                      <div className="mt-4 flex items-center justify-between">
                        <div>
                          <Label>Risk Rating: </Label>
                          <Badge className="bg-orange-100 text-orange-800 ml-2">High (12)</Badge>
                        </div>
                        <div>
                          <Label>Is the risk acceptable? </Label>
                          <Select>
                            <SelectTrigger className="w-[120px] ml-2">
                              <SelectValue placeholder="Select" />
                            </SelectTrigger>
                            <SelectContent>
                              <SelectItem value="yes">Yes</SelectItem>
                              <SelectItem value="no">No</SelectItem>
                            </SelectContent>
                          </Select>
                        </div>
                      </div>
                    </div>

                    <div className="border rounded-md p-4">
                      <h3 className="font-medium mb-4">Hazard: Chemical - Corrosive Substances</h3>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div className="space-y-2">
                          <Label htmlFor="likelihood-2">Likelihood</Label>
                          <Select>
                            <SelectTrigger id="likelihood-2">
                              <SelectValue placeholder="Select likelihood" />
                            </SelectTrigger>
                            <SelectContent>
                              <SelectItem value="1">1 - Rare</SelectItem>
                              <SelectItem value="2">2 - Unlikely</SelectItem>
                              <SelectItem value="3">3 - Possible</SelectItem>
                              <SelectItem value="4">4 - Likely</SelectItem>
                              <SelectItem value="5">5 - Almost Certain</SelectItem>
                            </SelectContent>
                          </Select>
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="severity-2">Severity</Label>
                          <Select>
                            <SelectTrigger id="severity-2">
                              <SelectValue placeholder="Select severity" />
                            </SelectTrigger>
                            <SelectContent>
                              <SelectItem value="1">1 - Negligible</SelectItem>
                              <SelectItem value="2">2 - Minor</SelectItem>
                              <SelectItem value="3">3 - Moderate</SelectItem>
                              <SelectItem value="4">4 - Major</SelectItem>
                              <SelectItem value="5">5 - Catastrophic</SelectItem>
                            </SelectContent>
                          </Select>
                        </div>
                      </div>
                      <div className="mt-4 flex items-center justify-between">
                        <div>
                          <Label>Risk Rating: </Label>
                          <Badge className="bg-yellow-100 text-yellow-800 ml-2">Medium (6)</Badge>
                        </div>
                        <div>
                          <Label>Is the risk acceptable? </Label>
                          <Select>
                            <SelectTrigger className="w-[120px] ml-2">
                              <SelectValue placeholder="Select" />
                            </SelectTrigger>
                            <SelectContent>
                              <SelectItem value="yes">Yes</SelectItem>
                              <SelectItem value="no">No</SelectItem>
                            </SelectContent>
                          </Select>
                        </div>
                      </div>
                    </div>
                  </div>
                </CardContent>
                <CardFooter className="flex justify-between">
                  <Button variant="outline">Back to Hazard Identification</Button>
                  <Button>Continue to Control Measures</Button>
                </CardFooter>
              </Card>
            </TabsContent>

            <TabsContent value="controls">
              <Card>
                <CardHeader>
                  <CardTitle>Control Measures</CardTitle>
                  <CardDescription>Define control measures to mitigate identified risks</CardDescription>
                </CardHeader>
                <CardContent className="space-y-6">
                  <Alert>
                    <AlertTriangle className="h-4 w-4" />
                    <AlertTitle>Hierarchy of Controls</AlertTitle>
                    <AlertDescription>
                      Apply the hierarchy of controls: Elimination, Substitution, Engineering Controls, Administrative
                      Controls, and PPE.
                    </AlertDescription>
                  </Alert>

                  <div className="space-y-4">
                    <div className="border rounded-md p-4">
                      <h3 className="font-medium mb-4">Hazard: Mechanical - Moving Parts of Machinery</h3>
                      <div className="space-y-4">
                        <div className="space-y-2">
                          <Label>Control Measures</Label>
                          <div className="space-y-2">
                            <div className="flex items-center space-x-2">
                              <Checkbox id="control-1-1" />
                              <Label htmlFor="control-1-1" className="font-normal">
                                Install machine guarding
                              </Label>
                            </div>
                            <div className="flex items-center space-x-2">
                              <Checkbox id="control-1-2" />
                              <Label htmlFor="control-1-2" className="font-normal">
                                Implement lockout/tagout procedures
                              </Label>
                            </div>
                            <div className="flex items-center space-x-2">
                              <Checkbox id="control-1-3" />
                              <Label htmlFor="control-1-3" className="font-normal">
                                Provide operator training
                              </Label>
                            </div>
                            <div className="flex items-center space-x-2">
                              <Checkbox id="control-1-4" />
                              <Label htmlFor="control-1-4" className="font-normal">
                                Install emergency stop buttons
                              </Label>
                            </div>
                          </div>
                        </div>

                        <div className="space-y-2">
                          <Label htmlFor="additional-controls-1">Additional Control Measures</Label>
                          <Textarea
                            id="additional-controls-1"
                            placeholder="Describe any additional control measures..."
                            className="min-h-[80px]"
                          />
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                          <div className="space-y-2">
                            <Label htmlFor="responsible-person-1">Responsible Person</Label>
                            <Input id="responsible-person-1" placeholder="Who will implement these controls?" />
                          </div>
                          <div className="space-y-2">
                            <Label htmlFor="implementation-date-1">Implementation Date</Label>
                            <Input id="implementation-date-1" type="date" />
                          </div>
                        </div>

                        <div className="space-y-2">
                          <Label>Residual Risk After Controls</Label>
                          <div className="flex items-center">
                            <Select>
                              <SelectTrigger className="w-[120px]">
                                <SelectValue placeholder="Select" />
                              </SelectTrigger>
                              <SelectContent>
                                <SelectItem value="low">Low</SelectItem>
                                <SelectItem value="medium">Medium</SelectItem>
                                <SelectItem value="high">High</SelectItem>
                              </SelectContent>
                            </Select>
                            <span className="mx-2">Is this acceptable?</span>
                            <Select>
                              <SelectTrigger className="w-[120px]">
                                <SelectValue placeholder="Select" />
                              </SelectTrigger>
                              <SelectContent>
                                <SelectItem value="yes">Yes</SelectItem>
                                <SelectItem value="no">No</SelectItem>
                              </SelectContent>
                            </Select>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="border rounded-md p-4">
                      <h3 className="font-medium mb-4">Hazard: Chemical - Corrosive Substances</h3>
                      <div className="space-y-4">
                        <div className="space-y-2">
                          <Label>Control Measures</Label>
                          <div className="space-y-2">
                            <div className="flex items-center space-x-2">
                              <Checkbox id="control-2-1" />
                              <Label htmlFor="control-2-1" className="font-normal">
                                Substitute with less hazardous chemicals
                              </Label>
                            </div>
                            <div className="flex items-center space-x-2">
                              <Checkbox id="control-2-2" />
                              <Label htmlFor="control-2-2" className="font-normal">
                                Install local exhaust ventilation
                              </Label>
                            </div>
                            <div className="flex items-center space-x-2">
                              <Checkbox id="control-2-3" />
                              <Label htmlFor="control-2-3" className="font-normal">
                                Provide chemical handling training
                              </Label>
                            </div>
                            <div className="flex items-center space-x-2">
                              <Checkbox id="control-2-4" />
                              <Label htmlFor="control-2-4" className="font-normal">
                                Provide appropriate PPE
                              </Label>
                            </div>
                          </div>
                        </div>

                        <div className="space-y-2">
                          <Label htmlFor="additional-controls-2">Additional Control Measures</Label>
                          <Textarea
                            id="additional-controls-2"
                            placeholder="Describe any additional control measures..."
                            className="min-h-[80px]"
                          />
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                          <div className="space-y-2">
                            <Label htmlFor="responsible-person-2">Responsible Person</Label>
                            <Input id="responsible-person-2" placeholder="Who will implement these controls?" />
                          </div>
                          <div className="space-y-2">
                            <Label htmlFor="implementation-date-2">Implementation Date</Label>
                            <Input id="implementation-date-2" type="date" />
                          </div>
                        </div>

                        <div className="space-y-2">
                          <Label>Residual Risk After Controls</Label>
                          <div className="flex items-center">
                            <Select>
                              <SelectTrigger className="w-[120px]">
                                <SelectValue placeholder="Select" />
                              </SelectTrigger>
                              <SelectContent>
                                <SelectItem value="low">Low</SelectItem>
                                <SelectItem value="medium">Medium</SelectItem>
                                <SelectItem value="high">High</SelectItem>
                              </SelectContent>
                            </Select>
                            <span className="mx-2">Is this acceptable?</span>
                            <Select>
                              <SelectTrigger className="w-[120px]">
                                <SelectValue placeholder="Select" />
                              </SelectTrigger>
                              <SelectContent>
                                <SelectItem value="yes">Yes</SelectItem>
                                <SelectItem value="no">No</SelectItem>
                              </SelectContent>
                            </Select>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="monitoring">Monitoring & Review</Label>
                    <Textarea
                      id="monitoring"
                      placeholder="Describe how the effectiveness of control measures will be monitored and reviewed..."
                      className="min-h-[80px]"
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="communication">Communication & Training</Label>
                    <Textarea
                      id="communication"
                      placeholder="Describe how this risk assessment will be communicated to affected personnel and what training will be provided..."
                      className="min-h-[80px]"
                    />
                  </div>

                  <div className="flex items-center space-x-2 pt-4">
                    <Checkbox id="confirmation" />
                    <Label htmlFor="confirmation" className="font-normal">
                      I confirm that all hazards have been identified, risks assessed, and appropriate control measures
                      defined. This risk assessment will be reviewed periodically and when there are significant
                      changes.
                    </Label>
                  </div>
                </CardContent>
                <CardFooter className="flex justify-between">
                  <Button variant="outline">Back to Risk Assessment</Button>
                  <Button>Submit Risk Assessment</Button>
                </CardFooter>
              </Card>
            </TabsContent>
          </Tabs>
        </div>
      </div>
    </MainLayout>
  )
}
