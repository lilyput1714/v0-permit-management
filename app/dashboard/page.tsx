import MainLayout from "@/components/permit/main-layout"
import Sidebar from "@/components/permit/sidebar"
import DesktopHeader from "@/components/permit/desktop-header"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { getDashboardStats, getAllPermits, getAllIncidents, getAllActions } from "@/services/data-service"
import { FileText, AlertTriangle, Clock, TrendingUp } from "lucide-react"
import DashboardChart from "@/components/dashboard/dashboard-chart"
import RecentActivityList from "@/components/dashboard/recent-activity-list"
import UpcomingItems from "@/components/dashboard/upcoming-items"

export default function DashboardPage() {
  const stats = getDashboardStats()
  const recentPermits = getAllPermits().slice(0, 3)
  const recentIncidents = getAllIncidents().slice(0, 3)
  const upcomingActions = getAllActions()
    .filter((action) => action.status !== "Completed")
    .slice(0, 5)

  return (
    <MainLayout>
      <Sidebar />
      <div className="flex-1 md:ml-64">
        <DesktopHeader title="Dashboard" />
        <div className="py-6 px-4 sm:px-6 md:px-8">
          <h1 className="text-2xl font-bold text-gray-900 mb-6">Safety Dashboard</h1>

          {/* Stats Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
            <Card>
              <CardContent className="p-4 flex items-center">
                <div className="p-2 rounded-full bg-blue-100 text-blue-600 mr-4">
                  <FileText className="h-6 w-6" />
                </div>
                <div>
                  <p className="text-sm font-medium text-gray-500">Open Permits</p>
                  <h3 className="text-2xl font-bold">{stats.openPermits}</h3>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-4 flex items-center">
                <div className="p-2 rounded-full bg-orange-100 text-orange-600 mr-4">
                  <AlertTriangle className="h-6 w-6" />
                </div>
                <div>
                  <p className="text-sm font-medium text-gray-500">Active Incidents</p>
                  <h3 className="text-2xl font-bold">{stats.activeIncidents}</h3>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-4 flex items-center">
                <div className="p-2 rounded-full bg-red-100 text-red-600 mr-4">
                  <Clock className="h-6 w-6" />
                </div>
                <div>
                  <p className="text-sm font-medium text-gray-500">Overdue Actions</p>
                  <h3 className="text-2xl font-bold">{stats.overdueActions}</h3>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-4 flex items-center">
                <div className="p-2 rounded-full bg-green-100 text-green-600 mr-4">
                  <TrendingUp className="h-6 w-6" />
                </div>
                <div>
                  <p className="text-sm font-medium text-gray-500">Safety Score</p>
                  <h3 className="text-2xl font-bold">{stats.safetyScore}%</h3>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Charts */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-6">
            <Card>
              <CardHeader>
                <CardTitle className="text-lg">Safety Observations</CardTitle>
              </CardHeader>
              <CardContent>
                <DashboardChart type="observations" />
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="text-lg">Incidents by Type</CardTitle>
              </CardHeader>
              <CardContent>
                <DashboardChart type="incidents" />
              </CardContent>
            </Card>
          </div>

          {/* Recent Activity and Upcoming Items */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            <Card className="lg:col-span-2">
              <CardHeader>
                <CardTitle className="text-lg">Recent Activity</CardTitle>
              </CardHeader>
              <CardContent>
                <RecentActivityList />
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="text-lg">Upcoming</CardTitle>
              </CardHeader>
              <CardContent>
                <UpcomingItems items={upcomingActions} />
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </MainLayout>
  )
}
