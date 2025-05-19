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

export default function NewPermitPage() {
  return (
    <MainLayout>
      <Sidebar />
      <div className="flex-1 md:ml-64">
        <DesktopHeader title="New Work Permit" />
        <div className="py-6 px-4 sm:px-6 md:px-8">
          <div className="mb-6">
            <Link href="/permits" className="flex items-center text-blue-600 hover:text-blue-800">
              <ArrowLeft className="h-4 w-4 mr-1" />
              Back to Permits
            </Link>
          </div>

          <Tabs defaultValue="general">
            <TabsList className="mb-6">
              <TabsTrigger value="general">General Information</TabsTrigger>
              <TabsTrigger value="hazards">Hazards & Controls</TabsTrigger>
              <TabsTrigger value="authorization">Authorization</TabsTrigger>
            </TabsList>

            <TabsContent value="general">
              <Card>
                <CardHeader>
                  <CardTitle>Work Permit Request</CardTitle>
                  <CardDescription>Provide general information about the work to be performed</CardDescription>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div className="space-y-4">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <Label htmlFor="title">Permit Title</Label>
                        <Input id="title" placeholder="Enter a descriptive title for this work" />
                      </div>

                      <div className="space-y-2">
                        <Label htmlFor="permit-type">Permit Type</Label>
                        <Select>
                          <SelectTrigger id="permit-type">
                            <SelectValue placeholder="Select permit type" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="hot-work">Hot Work Permit (HWP)</SelectItem>
                            <SelectItem value="cold-work">Cold Work Permit (CWP)</SelectItem>
                            <SelectItem value="electrical">Electrical Work Permit (EWP)</SelectItem>
                            <SelectItem value="height">Working at Height Permit (WHP)</SelectItem>
                            <SelectItem value="confined-space">Confined Space Entry Permit (CSP)</SelectItem>
                            <SelectItem value="excavation">Excavation Permit (EXP)</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <Label htmlFor="location">Work Location</Label>
                        <Input id="location" placeholder="Specific location where work will be performed" />
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
                            <SelectItem value="external">External/Grounds</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                      <div className="space-y-2">
                        <Label htmlFor="start-date">Start Date & Time</Label>
                        <Input id="start-date" type="datetime-local" />
                      </div>

                      <div className="space-y-2">
                        <Label htmlFor="end-date">End Date & Time</Label>
                        <Input id="end-date" type="datetime-local" />
                      </div>

                      <div className="space-y-2">
                        <Label htmlFor="priority">Priority</Label>
                        <Select>
                          <SelectTrigger id="priority">
                            <SelectValue placeholder="Select priority" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="low">Low</SelectItem>
                            <SelectItem value="medium">Medium</SelectItem>
                            <SelectItem value="high">High</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="description">Work Description</Label>
                      <Textarea
                        id="description"
                        placeholder="Describe the work to be performed in detail..."
                        className="min-h-[120px]"
                      />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="equipment">Equipment/Tools to be Used</Label>
                      <Textarea
                        id="equipment"
                        placeholder="List all equipment and tools that will be used..."
                        className="min-h-[80px]"
                      />
                    </div>

                    <div className="space-y-2">
                      <Label>Contractor Information (if applicable)</Label>
                      <div className="border rounded-md p-4 space-y-4">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                          <div className="space-y-2">
                            <Label htmlFor="contractor-company">Contractor Company</Label>
                            <Input id="contractor-company" placeholder="Company name" />
                          </div>
                          <div className="space-y-2">
                            <Label htmlFor="contractor-supervisor">Supervisor Name</Label>
                            <Input id="contractor-supervisor" placeholder="Supervisor name" />
                          </div>
                        </div>
                        <div className="flex items-center space-x-2">
                          <Checkbox id="contractor-verified" />
                          <Label htmlFor="contractor-verified" className="font-normal">
                            Contractor safety documentation verified
                          </Label>
                        </div>
                      </div>
                    </div>
                  </div>
                </CardContent>
                <CardFooter className="flex justify-end">
                  <Button>Continue to Hazards & Controls</Button>
                </CardFooter>
              </Card>
            </TabsContent>

            <TabsContent value="hazards">
              <Card>
                <CardHeader>
                  <CardTitle>Hazards & Control Measures</CardTitle>
                  <CardDescription>Identify hazards and specify control measures for the work</CardDescription>
                </CardHeader>
                <CardContent className="space-y-6">
                  <Alert>
                    <AlertTriangle className="h-4 w-4" />
                    <AlertTitle>Important</AlertTitle>
                    <AlertDescription>
                      All hazards must be identified and appropriate control measures must be in place before work can
                      begin.
                    </AlertDescription>
                  </Alert>

                  <div className="space-y-4">
                    <div className="space-y-2">
                      <Label>Potential Hazards</Label>
                      <div className="grid grid-cols-1 md:grid-cols-3 gap-2">
                        <div className="flex items-center space-x-2">
                          <Checkbox id="hazard-1" />
                          <Label htmlFor="hazard-1" className="font-normal">
                            Fire/Explosion
                          </Label>
                        </div>
                        <div className="flex items-center space-x-2">
                          <Checkbox id="hazard-2" />
                          <Label htmlFor="hazard-2" className="font-normal">
                            Electrical
                          </Label>
                        </div>
                        <div className="flex items-center space-x-2">
                          <Checkbox id="hazard-3" />
                          <Label htmlFor="hazard-3" className="font-normal">
                            Fall from Height
                          </Label>
                        </div>
                        <div className="flex items-center space-x-2">
                          <Checkbox id="hazard-4" />
                          <Label htmlFor="hazard-4" className="font-normal">
                            Confined Space
                          </Label>
                        </div>
                        <div className="flex items-center space-x-2">
                          <Checkbox id="hazard-5" />
                          <Label htmlFor="hazard-5" className="font-normal">
                            Chemical Exposure
                          </Label>
                        </div>
                        <div className="flex items-center space-x-2">
                          <Checkbox id="hazard-6" />
                          <Label htmlFor="hazard-6" className="font-normal">
                            Noise
                          </Label>
                        </div>
                        <div className="flex items-center space-x-2">
                          <Checkbox id="hazard-7" />
                          <Label htmlFor="hazard-7" className="font-normal">
                            Manual Handling
                          </Label>
                        </div>
                        <div className="flex items-center space-x-2">
                          <Checkbox id="hazard-8" />
                          <Label htmlFor="hazard-8" className="font-normal">
                            Pressurized Systems
                          </Label>
                        </div>
                        <div className="flex items-center space-x-2">
                          <Checkbox id="hazard-9" />
                          <Label htmlFor="hazard-9" className="font-normal">
                            Moving Machinery
                          </Label>
                        </div>
                      </div>
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="other-hazards">Other Hazards</Label>
                      <Textarea
                        id="other-hazards"
                        placeholder="List any other hazards not mentioned above..."
                        className="min-h-[80px]"
                      />
                    </div>

                    <div className="space-y-2">
                      <Label>Required PPE</Label>
                      <div className="grid grid-cols-1 md:grid-cols-4 gap-2">
                        <div className="flex items-center space-x-2">
                          <Checkbox id="ppe-1" />
                          <Label htmlFor="ppe-1" className="font-normal">
                            Safety Helmet
                          </Label>
                        </div>
                        <div className="flex items-center space-x-2">
                          <Checkbox id="ppe-2" />
                          <Label htmlFor="ppe-2" className="font-normal">
                            Safety Glasses
                          </Label>
                        </div>
                        <div className="flex items-center space-x-2">
                          <Checkbox id="ppe-3" />
                          <Label htmlFor="ppe-3" className="font-normal">
                            Face Shield
                          </Label>
                        </div>
                        <div className="flex items-center space-x-2">
                          <Checkbox id="ppe-4" />
                          <Label htmlFor="ppe-4" className="font-normal">
                            Hearing Protection
                          </Label>
                        </div>
                        <div className="flex items-center space-x-2">
                          <Checkbox id="ppe-5" />
                          <Label htmlFor="ppe-5" className="font-normal">
                            Safety Gloves
                          </Label>
                        </div>
                        <div className="flex items-center space-x-2">
                          <Checkbox id="ppe-6" />
                          <Label htmlFor="ppe-6" className="font-normal">
                            Safety Footwear
                          </Label>
                        </div>
                        <div className="flex items-center space-x-2">
                          <Checkbox id="ppe-7" />
                          <Label htmlFor="ppe-7" className="font-normal">
                            Respiratory Protection
                          </Label>
                        </div>
                        <div className="flex items-center space-x-2">
                          <Checkbox id="ppe-8" />
                          <Label htmlFor="ppe-8" className="font-normal">
                            Fall Protection
                          </Label>
                        </div>
                      </div>
                    </div>

                    <div className="space-y-2">
                      <Label>Isolation Requirements</Label>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
                        <div className="flex items-center space-x-2">
                          <Checkbox id="isolation-1" />
                          <Label htmlFor="isolation-1" className="font-normal">
                            Electrical Isolation
                          </Label>
                        </div>
                        <div className="flex items-center space-x-2">
                          <Checkbox id="isolation-2" />
                          <Label htmlFor="isolation-2" className="font-normal">
                            Mechanical Isolation
                          </Label>
                        </div>
                        <div className="flex items-center space-x-2">
                          <Checkbox id="isolation-3" />
                          <Label htmlFor="isolation-3" className="font-normal">
                            Process Isolation
                          </Label>
                        </div>
                        <div className="flex items-center space-x-2">
                          <Checkbox id="isolation-4" />
                          <Label htmlFor="isolation-4" className="font-normal">
                            Pressure Isolation
                          </Label>
                        </div>
                      </div>
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="control-measures">Control Measures</Label>
                      <Textarea
                        id="control-measures"
                        placeholder="Describe the control measures that will be implemented to mitigate the identified hazards..."
                        className="min-h-[120px]"
                      />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="emergency-procedures">Emergency Procedures</Label>
                      <Textarea
                        id="emergency-procedures"
                        placeholder="Describe emergency procedures specific to this work..."
                        className="min-h-[80px]"
                      />
                    </div>
                  </div>
                </CardContent>
                <CardFooter className="flex justify-between">
                  <Button variant="outline">Back to General Information</Button>
                  <Button>Continue to Authorization</Button>
                </CardFooter>
              </Card>
            </TabsContent>

            <TabsContent value="authorization">
              <Card>
                <CardHeader>
                  <CardTitle>Authorization & Approval</CardTitle>
                  <CardDescription>Final review and authorization of the work permit</CardDescription>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div className="space-y-4">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <Label htmlFor="requestor-name">Requestor Name</Label>
                        <Input id="requestor-name" placeholder="Your full name" />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="requestor-position">Position/Title</Label>
                        <Input id="requestor-position" placeholder="Your position or title" />
                      </div>
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="work-team">Work Team Members</Label>
                      <Textarea
                        id="work-team"
                        placeholder="List all personnel who will be performing the work..."
                        className="min-h-[80px]"
                      />
                    </div>

                    <div className="space-y-2">
                      <Label>Required Approvals</Label>
                      <div className="border rounded-md divide-y">
                        <div className="p-4">
                          <div className="flex justify-between items-center">
                            <div>
                              <h4 className="font-medium">Area Supervisor</h4>
                              <p className="text-sm text-gray-500">Approval of work in their area</p>
                            </div>
                            <Select>
                              <SelectTrigger className="w-[180px]">
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
                        <div className="p-4">
                          <div className="flex justify-between items-center">
                            <div>
                              <h4 className="font-medium">Safety Officer</h4>
                              <p className="text-sm text-gray-500">Safety review and approval</p>
                            </div>
                            <Select>
                              <SelectTrigger className="w-[180px]">
                                <SelectValue placeholder="Select person" />
                              </SelectTrigger>
                              <SelectContent>
                                <SelectItem value="jennifer-wilson">Jennifer Wilson</SelectItem>
                                <SelectItem value="david-lee">David Lee</SelectItem>
                              </SelectContent>
                            </Select>
                          </div>
                        </div>
                        <div className="p-4">
                          <div className="flex justify-between items-center">
                            <div>
                              <h4 className="font-medium">Operations Manager</h4>
                              <p className="text-sm text-gray-500">Final approval (if required)</p>
                            </div>
                            <Select>
                              <SelectTrigger className="w-[180px]">
                                <SelectValue placeholder="Select person" />
                              </SelectTrigger>
                              <SelectContent>
                                <SelectItem value="robert-davis">Robert Davis</SelectItem>
                                <SelectItem value="emily-chen">Emily Chen</SelectItem>
                              </SelectContent>
                            </Select>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="additional-comments">Additional Comments</Label>
                      <Textarea
                        id="additional-comments"
                        placeholder="Any additional information or special instructions..."
                        className="min-h-[80px]"
                      />
                    </div>

                    <div className="flex items-center space-x-2 pt-4">
                      <Checkbox id="confirmation" />
                      <Label htmlFor="confirmation" className="font-normal">
                        I confirm that all information provided is accurate and complete. I understand that work cannot
                        begin until all required approvals have been obtained.
                      </Label>
                    </div>
                  </div>
                </CardContent>
                <CardFooter className="flex justify-between">
                  <Button variant="outline">Back to Hazards & Controls</Button>
                  <Button>Submit Permit Request</Button>
                </CardFooter>
              </Card>
            </TabsContent>
          </Tabs>
        </div>
      </div>
    </MainLayout>
  )
}
