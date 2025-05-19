import MainLayout from "@/components/permit/main-layout"
import Sidebar from "@/components/permit/sidebar"
import DesktopHeader from "@/components/permit/desktop-header"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { ArrowLeft, FileText } from "lucide-react"
import Link from "next/link"
import { Checkbox } from "@/components/ui/checkbox"

export default function NewLibraryItemPage() {
  return (
    <MainLayout>
      <Sidebar />
      <div className="flex-1 md:ml-64">
        <DesktopHeader title="Upload Document" />
        <div className="py-6 px-4 sm:px-6 md:px-8">
          <div className="mb-6">
            <Link href="/library" className="flex items-center text-blue-600 hover:text-blue-800">
              <ArrowLeft className="h-4 w-4 mr-1" />
              Back to Library
            </Link>
          </div>

          <Card>
            <CardHeader>
              <CardTitle>Upload Document</CardTitle>
              <CardDescription>Add a new document to the library</CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="title">Document Title</Label>
                    <Input id="title" placeholder="Enter a descriptive title" />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="document-type">Document Type</Label>
                    <Select>
                      <SelectTrigger id="document-type">
                        <SelectValue placeholder="Select document type" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="document">Document</SelectItem>
                        <SelectItem value="procedure">Procedure</SelectItem>
                        <SelectItem value="form">Form</SelectItem>
                        <SelectItem value="training">Training Material</SelectItem>
                        <SelectItem value="policy">Policy</SelectItem>
                        <SelectItem value="report">Report</SelectItem>
                        <SelectItem value="other">Other</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="category">Category</Label>
                    <Select>
                      <SelectTrigger id="category">
                        <SelectValue placeholder="Select category" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="safety">Safety</SelectItem>
                        <SelectItem value="emergency">Emergency</SelectItem>
                        <SelectItem value="permits">Permits</SelectItem>
                        <SelectItem value="incidents">Incidents</SelectItem>
                        <SelectItem value="training">Training</SelectItem>
                        <SelectItem value="compliance">Compliance</SelectItem>
                        <SelectItem value="other">Other</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="version">Version</Label>
                    <Input id="version" placeholder="e.g., 1.0" />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="author">Author</Label>
                    <Input id="author" placeholder="Document author" />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="date">Date</Label>
                    <Input id="date" type="date" />
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="description">Description</Label>
                  <Textarea
                    id="description"
                    placeholder="Provide a brief description of this document..."
                    className="min-h-[120px]"
                  />
                </div>

                <div className="space-y-2">
                  <Label>Upload File</Label>
                  <div className="border-2 border-dashed border-gray-300 rounded-md p-6 text-center">
                    <div className="flex flex-col items-center">
                      <FileText className="mx-auto h-12 w-12 text-gray-400" />
                      <div className="flex text-sm text-gray-600 mt-2">
                        <label
                          htmlFor="file-upload"
                          className="relative cursor-pointer bg-white rounded-md font-medium text-blue-600 hover:text-blue-500 focus-within:outline-none focus-within:ring-2 focus-within:ring-offset-2 focus-within:ring-blue-500"
                        >
                          <span>Upload a file</span>
                          <input id="file-upload" name="file-upload" type="file" className="sr-only" />
                        </label>
                        <p className="pl-1">or drag and drop</p>
                      </div>
                      <p className="text-xs text-gray-500 mt-1">PDF, DOCX, XLSX, PPTX, JPG, PNG up to 50MB</p>
                    </div>
                  </div>
                </div>

                <div className="space-y-2">
                  <Label>Access Permissions</Label>
                  <div className="space-y-2">
                    <div className="flex items-center space-x-2">
                      <Checkbox id="access-1" defaultChecked />
                      <Label htmlFor="access-1" className="font-normal">
                        All Employees
                      </Label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Checkbox id="access-2" />
                      <Label htmlFor="access-2" className="font-normal">
                        Safety Department Only
                      </Label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Checkbox id="access-3" />
                      <Label htmlFor="access-3" className="font-normal">
                        Management Only
                      </Label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Checkbox id="access-4" />
                      <Label htmlFor="access-4" className="font-normal">
                        Specific Departments
                      </Label>
                    </div>
                  </div>
                </div>

                <div className="space-y-2">
                  <Label>Document Properties</Label>
                  <div className="space-y-2">
                    <div className="flex items-center space-x-2">
                      <Checkbox id="property-1" />
                      <Label htmlFor="property-1" className="font-normal">
                        Requires Review
                      </Label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Checkbox id="property-2" />
                      <Label htmlFor="property-2" className="font-normal">
                        Controlled Document
                      </Label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Checkbox id="property-3" defaultChecked />
                      <Label htmlFor="property-3" className="font-normal">
                        Downloadable
                      </Label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Checkbox id="property-4" />
                      <Label htmlFor="property-4" className="font-normal">
                        Printable
                      </Label>
                    </div>
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="tags">Tags</Label>
                  <Input id="tags" placeholder="Enter tags separated by commas" />
                  <p className="text-xs text-gray-500">
                    Tags help users find documents more easily. Example: safety, procedure, chemical
                  </p>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="related-documents">Related Documents</Label>
                  <Select>
                    <SelectTrigger id="related-documents">
                      <SelectValue placeholder="Select related documents" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="doc-1">Emergency Response Plan</SelectItem>
                      <SelectItem value="doc-2">Hot Work Permit Procedure</SelectItem>
                      <SelectItem value="doc-3">Incident Report Form</SelectItem>
                      <SelectItem value="doc-4">Hazard Communication Training</SelectItem>
                    </SelectContent>
                  </Select>
                  <Button variant="outline" size="sm" className="mt-2">
                    + Add Another Related Document
                  </Button>
                </div>
              </div>
            </CardContent>
            <CardFooter className="flex justify-between">
              <Button variant="outline" asChild>
                <Link href="/library">Cancel</Link>
              </Button>
              <Button>Upload Document</Button>
            </CardFooter>
          </Card>
        </div>
      </div>
    </MainLayout>
  )
}
