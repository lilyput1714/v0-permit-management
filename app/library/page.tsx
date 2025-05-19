import MainLayout from "@/components/permit/main-layout"
import Sidebar from "@/components/permit/sidebar"
import DesktopHeader from "@/components/permit/desktop-header"
import { Button } from "@/components/ui/button"
import { Plus, Filter, Search, X } from "lucide-react"
import { Input } from "@/components/ui/input"
import Link from "next/link"
import { getAllLibraryItems } from "@/services/data-service"
import LibraryCard from "@/components/library/library-card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

export default function LibraryPage() {
  const libraryItems = getAllLibraryItems()

  return (
    <MainLayout>
      <Sidebar />
      <div className="flex-1 md:ml-64">
        <DesktopHeader title="Library" />
        <div className="py-6 px-4 sm:px-6 md:px-8">
          <div className="flex justify-between items-center mb-6">
            <h1 className="text-2xl font-bold text-gray-900">Document Library</h1>
            <div className="flex space-x-3">
              <Button variant="outline" className="flex items-center">
                <Filter className="h-4 w-4 mr-2" />
                Filter
              </Button>

              <Button asChild className="flex items-center">
                <Link href="/library/new">
                  <Plus className="h-4 w-4 mr-2" />
                  Upload Document
                </Link>
              </Button>
            </div>
          </div>

          <div className="relative mb-4">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
            <Input placeholder="Search documents by title, category, or author..." className="pl-10 pr-20" />
            <Button
              variant="ghost"
              size="sm"
              className="absolute right-2 top-1/2 transform -translate-y-1/2 h-8"
              aria-label="Clear search"
            >
              <X className="h-4 w-4" />
            </Button>
          </div>

          <Tabs defaultValue="all" className="mb-6">
            <TabsList>
              <TabsTrigger value="all">All Documents</TabsTrigger>
              <TabsTrigger value="procedures">Procedures</TabsTrigger>
              <TabsTrigger value="forms">Forms</TabsTrigger>
              <TabsTrigger value="training">Training</TabsTrigger>
            </TabsList>
            <TabsContent value="all">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mt-4">
                {libraryItems.map((item) => (
                  <LibraryCard key={item.id} item={item} />
                ))}
              </div>
            </TabsContent>
            <TabsContent value="procedures">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mt-4">
                {libraryItems
                  .filter((item) => item.type === "Procedure")
                  .map((item) => (
                    <LibraryCard key={item.id} item={item} />
                  ))}
              </div>
            </TabsContent>
            <TabsContent value="forms">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mt-4">
                {libraryItems
                  .filter((item) => item.type === "Form")
                  .map((item) => (
                    <LibraryCard key={item.id} item={item} />
                  ))}
              </div>
            </TabsContent>
            <TabsContent value="training">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mt-4">
                {libraryItems
                  .filter((item) => item.type === "Training")
                  .map((item) => (
                    <LibraryCard key={item.id} item={item} />
                  ))}
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </div>
    </MainLayout>
  )
}
