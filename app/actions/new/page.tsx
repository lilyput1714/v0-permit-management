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

export default function NewActionPage() {
  return (
    <MainLayout>
      <Sidebar />
      <div className="flex-1 md:ml-64">
        <DesktopHeader title="New Action Item" />
        <div className="py-6 px-4 sm:px-6 md:px-8">
          <div className="mb-6">
            <Link href="/actions" className="flex items-center text-blue-600 hover:text-blue-800">
              <ArrowLeft className="h-4 w-4 mr-1" />
              Back to Actions
            </Link>
          </div>

          <Card>
            <CardHeader>
              <CardTitle>Create Action Item</CardTitle>
              <CardDescription>Create a new action item to track safety improvements</CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="title">Action Title</Label>
                    <Input id="title" placeholder="Enter a descriptive title" />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="category">Category</Label>
                    <Select>
                      <SelectTrigger id="category">
                        <SelectValue placeholder="Select category" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="training">Training</SelectItem>
                        <SelectItem value="facility">Facility Improvement</SelectItem>
                        <SelectItem value="procedure">Procedure Development</SelectItem>
                        <SelectItem value="maintenance">Maintenance</SelectItem>
                        <SelectItem value="risk-assessment">Risk Assessment</SelectItem>
                        <SelectItem value="emergency">Emergency Preparedness</SelectItem>
                        <SelectItem value="other">Other</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="assigned-to">Assigned To</Label>
                    <Select>
                      <SelectTrigger id="assigned-to">
                        <SelectValue placeholder="Select person" />
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
                    <Label htmlFor="due-date">Due Date</Label>
                    <Input id="due-date" type="date" />
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
                  <Label htmlFor="description">Description</Label>
                  <Textarea id="description" placeholder="Describe the action in detail..." className="min-h-[120px]" />
                </div>

                <div className="space-y-2">
                  <Label>Source</Label>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="source-type">Source Type</Label>
                      <Select>
                        <SelectTrigger id="source-type">
                          <SelectValue placeholder="Select source" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="incident">Incident</SelectItem>
                          <SelectItem value="observation">Observation</SelectItem>
                          <SelectItem value="audit">Audit</SelectItem>
                          <SelectItem value="risk-assessment">Risk Assessment</SelectItem>
                          <SelectItem value="management-review">Management Review</SelectItem>
                          <SelectItem value="other">Other</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="source-reference">Reference Number</Label>
                      <Input id="source-reference" placeholder="e.g., INC-2025-001" />
                    </div>
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="success-criteria">Success Criteria</Label>
                  <Textarea
                    id="success-criteria"
                    placeholder="Describe how the completion of this action will be measured..."
                    className="min-h-[80px]"
                  />
                </div>

                <div className="space-y-2">
                  <Label>Notifications</Label>
                  <div className="space-y-2">
                    <div className="flex items-center space-x-2">
                      <Checkbox id="notify-assigned" defaultChecked />
                      <Label htmlFor="notify-assigned" className="font-normal">
                        Notify assigned person
                      </Label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Checkbox id="notify-manager" />
                      <Label htmlFor="notify-manager" className="font-normal">
                        Notify department manager
                      </Label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Checkbox id="notify-safety" />
                      <Label htmlFor="notify-safety" className="font-normal">
                        Notify safety department
                      </Label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Checkbox id="reminder" defaultChecked />
                      <Label htmlFor="reminder" className="font-normal">
                        Send reminders before due date
                      </Label>
                    </div>
                  </div>
                </div>

                <div className="space-y-2">
                  <Label>Attach Files (Optional)</Label>
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
                <Link href="/actions">Cancel</Link>
              </Button>
              <Button>Create Action Item</Button>
            </CardFooter>
          </Card>
        </div>
      </div>
    </MainLayout>
  )
}
