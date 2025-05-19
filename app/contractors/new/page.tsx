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

export default function NewContractorPage() {
  return (
    <MainLayout>
      <Sidebar />
      <div className="flex-1 md:ml-64">
        <DesktopHeader title="Add Contractor" />
        <div className="py-6 px-4 sm:px-6 md:px-8">
          <div className="mb-6">
            <Link href="/contractors" className="flex items-center text-blue-600 hover:text-blue-800">
              <ArrowLeft className="h-4 w-4 mr-1" />
              Back to Contractors
            </Link>
          </div>

          <Tabs defaultValue="details">
            <TabsList className="mb-6">
              <TabsTrigger value="details">Company Details</TabsTrigger>
              <TabsTrigger value="contacts">Contacts</TabsTrigger>
              <TabsTrigger value="compliance">Compliance</TabsTrigger>
            </TabsList>

            <TabsContent value="details">
              <Card>
                <CardHeader>
                  <CardTitle>Contractor Company Details</CardTitle>
                  <CardDescription>Enter the contractor company information</CardDescription>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div className="space-y-4">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <Label htmlFor="company-name">Company Name</Label>
                        <Input id="company-name" placeholder="Enter company name" />
                      </div>

                      <div className="space-y-2">
                        <Label htmlFor="business-type">Business Type</Label>
                        <Select>
                          <SelectTrigger id="business-type">
                            <SelectValue placeholder="Select business type" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="sole-proprietor">Sole Proprietor</SelectItem>
                            <SelectItem value="partnership">Partnership</SelectItem>
                            <SelectItem value="corporation">Corporation</SelectItem>
                            <SelectItem value="llc">Limited Liability Company</SelectItem>
                            <SelectItem value="other">Other</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                    </div>

                    <div className="space-y-2">
                      <Label>Trades/Services</Label>
                      <div className="grid grid-cols-1 md:grid-cols-3 gap-2">
                        <div className="flex items-center space-x-2">
                          <Checkbox id="trade-1" />
                          <Label htmlFor="trade-1" className="font-normal">
                            Electrical
                          </Label>
                        </div>
                        <div className="flex items-center space-x-2">
                          <Checkbox id="trade-2" />
                          <Label htmlFor="trade-2" className="font-normal">
                            Mechanical
                          </Label>
                        </div>
                        <div className="flex items-center space-x-2">
                          <Checkbox id="trade-3" />
                          <Label htmlFor="trade-3" className="font-normal">
                            Plumbing
                          </Label>
                        </div>
                        <div className="flex items-center space-x-2">
                          <Checkbox id="trade-4" />
                          <Label htmlFor="trade-4" className="font-normal">
                            HVAC
                          </Label>
                        </div>
                        <div className="flex items-center space-x-2">
                          <Checkbox id="trade-5" />
                          <Label htmlFor="trade-5" className="font-normal">
                            Construction
                          </Label>
                        </div>
                        <div className="flex items-center space-x-2">
                          <Checkbox id="trade-6" />
                          <Label htmlFor="trade-6" className="font-normal">
                            Welding
                          </Label>
                        </div>
                        <div className="flex items-center space-x-2">
                          <Checkbox id="trade-7" />
                          <Label htmlFor="trade-7" className="font-normal">
                            Painting
                          </Label>
                        </div>
                        <div className="flex items-center space-x-2">
                          <Checkbox id="trade-8" />
                          <Label htmlFor="trade-8" className="font-normal">
                            Cleaning
                          </Label>
                        </div>
                        <div className="flex items-center space-x-2">
                          <Checkbox id="trade-9" />
                          <Label htmlFor="trade-9" className="font-normal">
                            Safety Consulting
                          </Label>
                        </div>
                      </div>
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="other-trades">Other Trades/Services</Label>
                      <Input id="other-trades" placeholder="Enter any other trades or services" />
                    </div>

                    <div className="space-y-2">
                      <Label>Address</Label>
                      <div className="space-y-4">
                        <Input placeholder="Street Address" />
                        <Input placeholder="Street Address Line 2" />
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                          <Input placeholder="City" />
                          <Input placeholder="State/Province" />
                          <Input placeholder="Postal/Zip Code" />
                        </div>
                        <Select>
                          <SelectTrigger>
                            <SelectValue placeholder="Country" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="us">United States</SelectItem>
                            <SelectItem value="ca">Canada</SelectItem>
                            <SelectItem value="uk">United Kingdom</SelectItem>
                            <SelectItem value="au">Australia</SelectItem>
                            <SelectItem value="other">Other</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <Label htmlFor="company-phone">Phone Number</Label>
                        <Input id="company-phone" placeholder="Company phone number" />
                      </div>

                      <div className="space-y-2">
                        <Label htmlFor="company-email">Email</Label>
                        <Input id="company-email" type="email" placeholder="Company email address" />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <Label htmlFor="website">Website</Label>
                        <Input id="website" placeholder="Company website" />
                      </div>

                      <div className="space-y-2">
                        <Label htmlFor="tax-id">Tax ID/EIN</Label>
                        <Input id="tax-id" placeholder="Tax identification number" />
                      </div>
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="company-description">Company Description</Label>
                      <Textarea
                        id="company-description"
                        placeholder="Brief description of the company and its services..."
                        className="min-h-[120px]"
                      />
                    </div>
                  </div>
                </CardContent>
                <CardFooter className="flex justify-end">
                  <Button>Continue to Contacts</Button>
                </CardFooter>
              </Card>
            </TabsContent>

            <TabsContent value="contacts">
              <Card>
                <CardHeader>
                  <CardTitle>Contact Information</CardTitle>
                  <CardDescription>Add primary and secondary contacts for this contractor</CardDescription>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div className="space-y-4">
                    <h3 className="text-lg font-medium">Primary Contact</h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <Label htmlFor="primary-name">Full Name</Label>
                        <Input id="primary-name" placeholder="Contact's full name" />
                      </div>

                      <div className="space-y-2">
                        <Label htmlFor="primary-position">Position/Title</Label>
                        <Input id="primary-position" placeholder="Contact's position" />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <Label htmlFor="primary-phone">Phone Number</Label>
                        <Input id="primary-phone" placeholder="Contact's phone number" />
                      </div>

                      <div className="space-y-2">
                        <Label htmlFor="primary-email">Email</Label>
                        <Input id="primary-email" type="email" placeholder="Contact's email address" />
                      </div>
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="primary-notes">Notes</Label>
                      <Textarea
                        id="primary-notes"
                        placeholder="Any additional notes about this contact..."
                        className="min-h-[80px]"
                      />
                    </div>

                    <div className="border-t pt-4 mt-6">
                      <h3 className="text-lg font-medium mb-4">Secondary Contact</h3>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div className="space-y-2">
                          <Label htmlFor="secondary-name">Full Name</Label>
                          <Input id="secondary-name" placeholder="Contact's full name" />
                        </div>

                        <div className="space-y-2">
                          <Label htmlFor="secondary-position">Position/Title</Label>
                          <Input id="secondary-position" placeholder="Contact's position" />
                        </div>
                      </div>

                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
                        <div className="space-y-2">
                          <Label htmlFor="secondary-phone">Phone Number</Label>
                          <Input id="secondary-phone" placeholder="Contact's phone number" />
                        </div>

                        <div className="space-y-2">
                          <Label htmlFor="secondary-email">Email</Label>
                          <Input id="secondary-email" type="email" placeholder="Contact's email address" />
                        </div>
                      </div>
                    </div>

                    <div className="border-t pt-4 mt-6">
                      <h3 className="text-lg font-medium mb-4">Emergency Contact</h3>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div className="space-y-2">
                          <Label htmlFor="emergency-name">Full Name</Label>
                          <Input id="emergency-name" placeholder="Emergency contact's full name" />
                        </div>

                        <div className="space-y-2">
                          <Label htmlFor="emergency-phone">Phone Number</Label>
                          <Input id="emergency-phone" placeholder="Emergency contact's phone number" />
                        </div>
                      </div>
                    </div>
                  </div>
                </CardContent>
                <CardFooter className="flex justify-between">
                  <Button variant="outline">Back to Company Details</Button>
                  <Button>Continue to Compliance</Button>
                </CardFooter>
              </Card>
            </TabsContent>

            <TabsContent value="compliance">
              <Card>
                <CardHeader>
                  <CardTitle>Compliance & Documentation</CardTitle>
                  <CardDescription>Manage contractor compliance requirements and documentation</CardDescription>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div className="space-y-4">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <Label htmlFor="status">Contractor Status</Label>
                        <Select>
                          <SelectTrigger id="status">
                            <SelectValue placeholder="Select status" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="active">Active</SelectItem>
                            <SelectItem value="pending">Pending Approval</SelectItem>
                            <SelectItem value="inactive">Inactive</SelectItem>
                            <SelectItem value="suspended">Suspended</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>

                      <div className="space-y-2">
                        <Label htmlFor="expiry-date">Expiry Date</Label>
                        <Input id="expiry-date" type="date" />
                      </div>
                    </div>

                    <div className="space-y-2">
                      <Label>Insurance Information</Label>
                      <div className="border rounded-md p-4 space-y-4">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                          <div className="space-y-2">
                            <Label htmlFor="liability-insurance">Liability Insurance</Label>
                            <Input id="liability-insurance" placeholder="Policy number" />
                          </div>
                          <div className="space-y-2">
                            <Label htmlFor="liability-expiry">Expiry Date</Label>
                            <Input id="liability-expiry" type="date" />
                          </div>
                        </div>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                          <div className="space-y-2">
                            <Label htmlFor="workers-comp">Workers' Compensation</Label>
                            <Input id="workers-comp" placeholder="Policy number" />
                          </div>
                          <div className="space-y-2">
                            <Label htmlFor="workers-comp-expiry">Expiry Date</Label>
                            <Input id="workers-comp-expiry" type="date" />
                          </div>
                        </div>
                        <div className="space-y-2">
                          <Label>Upload Insurance Certificate</Label>
                          <div className="border-2 border-dashed border-gray-300 rounded-md p-4 text-center">
                            <div className="flex flex-col items-center">
                              <svg
                                className="mx-auto h-12 w-12 text-gray-400"
                                stroke="currentColor"
                                fill="none"
                                viewBox="0 0 48 48"
                                aria-hidden="true"
                              >
                                <path
                                  d="M28 8H12a4 4 0 00-4 4v20m32-12v8m0 0v8a4 4 0 01-4 4H12a4 4 0 01-4-4v-4m32-4l-3.172-3.172a4 4 0 00-5.656 0L28 28M8 32l9.172-9.172a4 4 0 015.656 0L28 28m0 0l4 4m4-24h8m-4-4v8m-12 4h.02"
                                  strokeWidth={2}
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                />
                              </svg>
                              <div className="flex text-sm text-gray-600">
                                <label
                                  htmlFor="insurance-upload"
                                  className="relative cursor-pointer bg-white rounded-md font-medium text-blue-600 hover:text-blue-500 focus-within:outline-none focus-within:ring-2 focus-within:ring-offset-2 focus-within:ring-blue-500"
                                >
                                  <span>Upload file</span>
                                  <input
                                    id="insurance-upload"
                                    name="insurance-upload"
                                    type="file"
                                    className="sr-only"
                                  />
                                </label>
                                <p className="pl-1">or drag and drop</p>
                              </div>
                              <p className="text-xs text-gray-500">PDF, JPG, PNG up to 10MB</p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="space-y-2">
                      <Label>Required Documentation</Label>
                      <div className="space-y-2">
                        <div className="flex items-center space-x-2">
                          <Checkbox id="doc-1" />
                          <Label htmlFor="doc-1" className="font-normal">
                            Safety Policy
                          </Label>
                        </div>
                        <div className="flex items-center space-x-2">
                          <Checkbox id="doc-2" />
                          <Label htmlFor="doc-2" className="font-normal">
                            Risk Assessments
                          </Label>
                        </div>
                        <div className="flex items-center space-x-2">
                          <Checkbox id="doc-3" />
                          <Label htmlFor="doc-3" className="font-normal">
                            Training Records
                          </Label>
                        </div>
                        <div className="flex items-center space-x-2">
                          <Checkbox id="doc-4" />
                          <Label htmlFor="doc-4" className="font-normal">
                            Equipment Certifications
                          </Label>
                        </div>
                        <div className="flex items-center space-x-2">
                          <Checkbox id="doc-5" />
                          <Label htmlFor="doc-5" className="font-normal">
                            Licenses & Permits
                          </Label>
                        </div>
                      </div>
                    </div>

                    <div className="space-y-2">
                      <Label>Upload Documentation</Label>
                      <div className="border-2 border-dashed border-gray-300 rounded-md p-4 text-center">
                        <div className="flex flex-col items-center">
                          <svg
                            className="mx-auto h-12 w-12 text-gray-400"
                            stroke="currentColor"
                            fill="none"
                            viewBox="0 0 48 48"
                            aria-hidden="true"
                          >
                            <path
                              d="M28 8H12a4 4 0 00-4 4v20m32-12v8m0 0v8a4 4 0 01-4 4H12a4 4 0 01-4-4v-4m32-4l-3.172-3.172a4 4 0 00-5.656 0L28 28M8 32l9.172-9.172a4 4 0 015.656 0L28 28m0 0l4 4m4-24h8m-4-4v8m-12 4h.02"
                              strokeWidth={2}
                              strokeLinecap="round"
                              strokeLinejoin="round"
                            />
                          </svg>
                          <div className="flex text-sm text-gray-600">
                            <label
                              htmlFor="doc-upload"
                              className="relative cursor-pointer bg-white rounded-md font-medium text-blue-600 hover:text-blue-500 focus-within:outline-none focus-within:ring-2 focus-within:ring-offset-2 focus-within:ring-blue-500"
                            >
                              <span>Upload files</span>
                              <input id="doc-upload" name="doc-upload" type="file" className="sr-only" multiple />
                            </label>
                            <p className="pl-1">or drag and drop</p>
                          </div>
                          <p className="text-xs text-gray-500">PDF, DOCX, JPG, PNG up to 10MB</p>
                        </div>
                      </div>
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="safety-performance">Safety Performance</Label>
                      <Textarea
                        id="safety-performance"
                        placeholder="Notes on contractor's safety performance history..."
                        className="min-h-[80px]"
                      />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="compliance-notes">Compliance Notes</Label>
                      <Textarea
                        id="compliance-notes"
                        placeholder="Any additional notes regarding compliance..."
                        className="min-h-[80px]"
                      />
                    </div>

                    <div className="space-y-2">
                      <Label>Induction Status</Label>
                      <div className="flex items-center space-x-2">
                        <Checkbox id="induction-completed" />
                        <Label htmlFor="induction-completed" className="font-normal">
                          Site induction completed
                        </Label>
                      </div>
                    </div>

                    <div className="space-y-2">
                      <Label>Approval</Label>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div className="space-y-2">
                          <Label htmlFor="approved-by">Approved By</Label>
                          <Input id="approved-by" placeholder="Name of approver" />
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="approval-date">Approval Date</Label>
                          <Input id="approval-date" type="date" />
                        </div>
                      </div>
                    </div>
                  </div>
                </CardContent>
                <CardFooter className="flex justify-between">
                  <Button variant="outline">Back to Contacts</Button>
                  <Button>Save Contractor</Button>
                </CardFooter>
              </Card>
            </TabsContent>
          </Tabs>
        </div>
      </div>
    </MainLayout>
  )
}
