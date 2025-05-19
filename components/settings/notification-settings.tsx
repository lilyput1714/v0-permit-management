"use client"

import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Label } from "@/components/ui/label"
import { Switch } from "@/components/ui/switch"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"

export default function NotificationSettings() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Notification Preferences</CardTitle>
        <CardDescription>Manage how you receive notifications and alerts</CardDescription>
      </CardHeader>
      <CardContent className="space-y-6">
        <div className="space-y-4">
          <h3 className="text-lg font-medium">Email Notifications</h3>

          <div className="flex items-center justify-between">
            <div>
              <Label htmlFor="email-permits" className="font-medium">
                Permit Updates
              </Label>
              <p className="text-sm text-gray-500">Receive notifications about permit approvals and status changes</p>
            </div>
            <Switch id="email-permits" defaultChecked />
          </div>

          <div className="flex items-center justify-between">
            <div>
              <Label htmlFor="email-incidents" className="font-medium">
                Incident Reports
              </Label>
              <p className="text-sm text-gray-500">Receive notifications when new incidents are reported</p>
            </div>
            <Switch id="email-incidents" defaultChecked />
          </div>

          <div className="flex items-center justify-between">
            <div>
              <Label htmlFor="email-actions" className="font-medium">
                Action Items
              </Label>
              <p className="text-sm text-gray-500">Receive notifications about assigned actions and due dates</p>
            </div>
            <Switch id="email-actions" defaultChecked />
          </div>

          <div className="flex items-center justify-between">
            <div>
              <Label htmlFor="email-digest" className="font-medium">
                Daily Digest
              </Label>
              <p className="text-sm text-gray-500">Receive a daily summary of all activities</p>
            </div>
            <Switch id="email-digest" />
          </div>
        </div>

        <div className="space-y-4">
          <h3 className="text-lg font-medium">In-App Notifications</h3>

          <div className="flex items-center justify-between">
            <div>
              <Label htmlFor="app-permits" className="font-medium">
                Permit Updates
              </Label>
              <p className="text-sm text-gray-500">Show notifications for permit approvals and status changes</p>
            </div>
            <Switch id="app-permits" defaultChecked />
          </div>

          <div className="flex items-center justify-between">
            <div>
              <Label htmlFor="app-incidents" className="font-medium">
                Incident Reports
              </Label>
              <p className="text-sm text-gray-500">Show notifications for new incident reports</p>
            </div>
            <Switch id="app-incidents" defaultChecked />
          </div>

          <div className="flex items-center justify-between">
            <div>
              <Label htmlFor="app-actions" className="font-medium">
                Action Items
              </Label>
              <p className="text-sm text-gray-500">Show notifications for action items and reminders</p>
            </div>
            <Switch id="app-actions" defaultChecked />
          </div>
        </div>

        <div className="space-y-4">
          <h3 className="text-lg font-medium">Notification Frequency</h3>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label htmlFor="email-frequency">Email Frequency</Label>
              <Select defaultValue="immediate">
                <SelectTrigger id="email-frequency">
                  <SelectValue placeholder="Select frequency" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="immediate">Immediate</SelectItem>
                  <SelectItem value="hourly">Hourly Digest</SelectItem>
                  <SelectItem value="daily">Daily Digest</SelectItem>
                  <SelectItem value="weekly">Weekly Digest</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div className="space-y-2">
              <Label htmlFor="priority-level">Minimum Priority Level</Label>
              <Select defaultValue="all">
                <SelectTrigger id="priority-level">
                  <SelectValue placeholder="Select priority" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">All Notifications</SelectItem>
                  <SelectItem value="medium">Medium and High Priority</SelectItem>
                  <SelectItem value="high">High Priority Only</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>
        </div>
      </CardContent>
      <CardFooter>
        <Button>Save Preferences</Button>
      </CardFooter>
    </Card>
  )
}
