import MainLayout from "@/components/permit/main-layout"
import Sidebar from "@/components/permit/sidebar"
import DesktopHeader from "@/components/permit/desktop-header"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { getCurrentUser } from "@/services/data-service"
import ProfileSettings from "@/components/settings/profile-settings"
import NotificationSettings from "@/components/settings/notification-settings"
import SecuritySettings from "@/components/settings/security-settings"
import SystemSettings from "@/components/settings/system-settings"

export default function SettingsPage() {
  const currentUser = getCurrentUser()

  return (
    <MainLayout>
      <Sidebar />
      <div className="flex-1 md:ml-64">
        <DesktopHeader title="Settings" />
        <div className="py-6 px-4 sm:px-6 md:px-8">
          <h1 className="text-2xl font-bold text-gray-900 mb-6">Account Settings</h1>

          <Tabs defaultValue="profile" className="w-full">
            <TabsList className="grid w-full grid-cols-4">
              <TabsTrigger value="profile">Profile</TabsTrigger>
              <TabsTrigger value="notifications">Notifications</TabsTrigger>
              <TabsTrigger value="security">Security</TabsTrigger>
              <TabsTrigger value="system">System</TabsTrigger>
            </TabsList>

            <TabsContent value="profile">
              <ProfileSettings user={currentUser} />
            </TabsContent>

            <TabsContent value="notifications">
              <NotificationSettings />
            </TabsContent>

            <TabsContent value="security">
              <SecuritySettings />
            </TabsContent>

            <TabsContent value="system">
              <SystemSettings />
            </TabsContent>
          </Tabs>
        </div>
      </div>
    </MainLayout>
  )
}
