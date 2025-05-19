import MainLayout from "@/components/permit/main-layout"
import Sidebar from "@/components/permit/sidebar"
import DesktopHeader from "@/components/permit/desktop-header"
import PermitList from "@/components/permit/permits/permit-list"

export default function PermitsPage() {
  return (
    <MainLayout>
      <Sidebar />
      <div className="flex-1 md:ml-64">
        <DesktopHeader title="Permits" />
        <div className="py-6 px-4 sm:px-6 md:px-8">
          <PermitList />
        </div>
      </div>
    </MainLayout>
  )
}
