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
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"

export default function NewIncidentPage() {
  return (
    <MainLayout>
      <Sidebar />
      <div className="flex-1 md:ml-64">
        <DesktopHeader title="Report Incident" />
        <div className="py-6 px-4 sm:px-6 md:px-8">
          <div className="mb-6">
            <Link href="/incidents" className="flex items-center text-blue-600 hover:text-blue-800">
              <ArrowLeft className="h-4 w-4 mr-1" />
              Back to Incidents
            </Link>
          </div>

          <Card>
            <CardHeader>
              <CardTitle>Incident Report Form</CardTitle>
              <CardDescription>
                Report an incident, accident, or near miss that occurred in the workplace
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="title">Incident Title</Label>
                    <Input id="title" placeholder="Enter a descriptive title" />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="location">Location</Label>
                    <Input id="location" placeholder="Where did the incident occur?" />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="incident-type">Incident Type</Label>
                    <Select>
                      <SelectTrigger id="incident-type">
                        <SelectValue placeholder="Select type" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="near-miss">Near Miss</SelectItem>
                        <SelectItem value="first-aid">First Aid</SelectItem>
                        <SelectItem value="medical-treatment">Medical Treatment</SelectItem>
                        <SelectItem value="lost-time">Lost Time Injury</SelectItem>
                        <SelectItem value="property-damage">Property Damage</SelectItem>
                        <SelectItem value="environmental">Environmental</SelectItem>
                        <SelectItem value="other">Other</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="date">Date & Time</Label>
                    <Input id="date" type="datetime-local" />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="severity">Severity</Label>
                    <Select>
                      <SelectTrigger id="severity">
                        <SelectValue placeholder="Select severity" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="low">Low</SelectItem>
                        <SelectItem value="medium">Medium</SelectItem>
                        <SelectItem value="high">High</SelectItem>
                        <SelectItem value="critical">Critical</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="description">Description of Incident</Label>
                  <Textarea
                    id="description"
                    placeholder="Describe what happened in detail..."
                    className="min-h-[120px]"
                  />
                </div>

                <div className="space-y-2">
                  <Label>Persons Involved</Label>
                  <div className="border rounded-md p-4 space-y-4">
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                      <div className="space-y-2">
                        <Label htmlFor="person-name">Name</Label>
                        <Input id="person-name" placeholder="Full name" />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="person-role">Role</Label>
                        <Select>
                          <SelectTrigger id="person-role">
                            <SelectValue placeholder="Select role" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="employee">Employee</SelectItem>
                            <SelectItem value="contractor">Contractor</SelectItem>
                            <SelectItem value="visitor">Visitor</SelectItem>
                            <SelectItem value="public">Member of Public</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="person-injury">Injury/Involvement</Label>
                        <Input id="person-injury" placeholder="Describe injury or involvement" />
                      </div>
                    </div>
                    <Button variant="outline" size="sm" type="button">
                      + Add Another Person
                    </Button>
                  </div>
                </div>

                <div className="space-y-2">
                  <Label>Immediate Causes</Label>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
                    <div className="flex items-center space-x-2">
                      <Checkbox id="cause-1" />
                      <Label htmlFor="cause-1" className="font-normal">
                        Inadequate guards or protection
                      </Label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Checkbox id="cause-2" />
                      <Label htmlFor="cause-2" className="font-normal">
                        Defective tools/equipment
                      </Label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Checkbox id="cause-3" />
                      <Label htmlFor="cause-3" className="font-normal">
                        Improper work technique
                      </Label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Checkbox id="cause-4" />
                      <Label htmlFor="cause-4" className="font-normal">
                        Poor housekeeping
                      </Label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Checkbox id="cause-5" />
                      <Label htmlFor="cause-5" className="font-normal">
                        Lack of training/knowledge
                      </Label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Checkbox id="cause-6" />
                      <Label htmlFor="cause-6" className="font-normal">
                        Failure to follow procedure
                      </Label>
                    </div>
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="immediate-actions">Immediate Actions Taken</Label>
                  <Textarea
                    id="immediate-actions"
                    placeholder="Describe any immediate actions taken after the incident..."
                    className="min-h-[80px]"
                  />
                </div>

                <div className="space-y-2">
                  <Label>Was First Aid Administered?</Label>
                  <RadioGroup defaultValue="no" className="flex space-x-4">
                    <div className="flex items-center space-x-2">
                      <RadioGroupItem value="yes" id="first-aid-yes" />
                      <Label htmlFor="first-aid-yes" className="font-normal">
                        Yes
                      </Label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <RadioGroupItem value="no" id="first-aid-no" />
                      <Label htmlFor="first-aid-no" className="font-normal">
                        No
                      </Label>
                    </div>
                  </RadioGroup>
                </div>

                <div className="space-y-2">
                  <Label>Attach Photos/Documents (Optional)</Label>
                  <div className="border-2 border-dashed border-gray-300 rounded-md p-6 text-center">
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
                          htmlFor="file-upload"
                          className="relative cursor-pointer bg-white rounded-md font-medium text-blue-600 hover:text-blue-500 focus-within:outline-none focus-within:ring-2 focus-within:ring-offset-2 focus-within:ring-blue-500"
                        >
                          <span>Upload files</span>
                          <input id="file-upload" name="file-upload" type="file" className="sr-only" multiple />
                        </label>
                        <p className="pl-1">or drag and drop</p>
                      </div>
                      <p className="text-xs text-gray-500">PNG, JPG, PDF up to 10MB</p>
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
            <CardFooter className="flex justify-between">
              <Button variant="outline" asChild>
                <Link href="/incidents">Cancel</Link>
              </Button>
              <Button>Submit Incident Report</Button>
            </CardFooter>
          </Card>
        </div>
      </div>
    </MainLayout>
  )
}
