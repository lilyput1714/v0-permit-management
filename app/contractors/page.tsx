import MainLayout from "@/components/permit/main-layout"
import Sidebar from "@/components/permit/sidebar"
import DesktopHeader from "@/components/permit/desktop-header"
import { Button } from "@/components/ui/button"
import { Plus, Filter, Search, X } from "lucide-react"
import { Input } from "@/components/ui/input"
import Link from "next/link"
import { getAllContractors } from "@/services/data-service"
import ContractorCard from "@/components/contractor/contractor-card"

export default function ContractorsPage() {
  const contractors = getAllContractors()

  return (
    <MainLayout>
      <Sidebar />
      <div className="flex-1 md:ml-64">
        <DesktopHeader title="Contractors" />
        <div className="py-6 px-4 sm:px-6 md:px-8">
          <div className="flex justify-between items-center mb-6">
            <h1 className="text-2xl font-bold text-gray-900">Contractor Management</h1>
            <div className="flex space-x-3">
              <Button variant="outline" className="flex items-center">
                <Filter className="h-4 w-4 mr-2" />
                Filter
              </Button>

              <Button asChild className="flex items-center">
                <Link href="/contractors/new">
                  <Plus className="h-4 w-4 mr-2" />
                  Add Contractor
                </Link>
              </Button>
            </div>
          </div>

          <div className="relative mb-4">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
            <Input placeholder="Search contractors by name, company, or trade..." className="pl-10 pr-20" />
            <Button
              variant="ghost"
              size="sm"
              className="absolute right-2 top-1/2 transform -translate-y-1/2 h-8"
              aria-label="Clear search"
            >
              <X className="h-4 w-4" />
            </Button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mb-8">
            {contractors.map((contractor) => (
              <ContractorCard key={contractor.id} contractor={contractor} />
            ))}
          </div>
        </div>
      </div>
    </MainLayout>
  )
}
