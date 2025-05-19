"use client"

import { useState } from "react"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Switch } from "@/components/ui/switch"
import { Eye, EyeOff } from "lucide-react"

export default function SecuritySettings() {
  const [showCurrentPassword, setShowCurrentPassword] = useState(false)
  const [showNewPassword, setShowNewPassword] = useState(false)
  const [showConfirmPassword, setShowConfirmPassword] = useState(false)

  return (
    <Card>
      <CardHeader>
        <CardTitle>Security Settings</CardTitle>
        <CardDescription>Manage your account security and authentication settings</CardDescription>
      </CardHeader>
      <CardContent className="space-y-6">
        <div className="space-y-4">
          <h3 className="text-lg font-medium">Change Password</h3>

          <div className="space-y-2">
            <Label htmlFor="current-password">Current Password</Label>
            <div className="relative">
              <Input
                id="current-password"
                type={showCurrentPassword ? "text" : "password"}
                placeholder="Enter your current password"
              />
              <Button
                type="button"
                variant="ghost"
                size="sm"
                className="absolute right-0 top-0 h-full px-3"
                onClick={() => setShowCurrentPassword(!showCurrentPassword)}
              >
                {showCurrentPassword ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
              </Button>
            </div>
          </div>

          <div className="space-y-2">
            <Label htmlFor="new-password">New Password</Label>
            <div className="relative">
              <Input
                id="new-password"
                type={showNewPassword ? "text" : "password"}
                placeholder="Enter your new password"
              />
              <Button
                type="button"
                variant="ghost"
                size="sm"
                className="absolute right-0 top-0 h-full px-3"
                onClick={() => setShowNewPassword(!showNewPassword)}
              >
                {showNewPassword ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
              </Button>
            </div>
          </div>

          <div className="space-y-2">
            <Label htmlFor="confirm-password">Confirm New Password</Label>
            <div className="relative">
              <Input
                id="confirm-password"
                type={showConfirmPassword ? "text" : "password"}
                placeholder="Confirm your new password"
              />
              <Button
                type="button"
                variant="ghost"
                size="sm"
                className="absolute right-0 top-0 h-full px-3"
                onClick={() => setShowConfirmPassword(!showConfirmPassword)}
              >
                {showConfirmPassword ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
              </Button>
            </div>
          </div>

          <Button className="mt-2">Update Password</Button>
        </div>

        <div className="space-y-4">
          <h3 className="text-lg font-medium">Two-Factor Authentication</h3>

          <div className="flex items-center justify-between">
            <div>
              <Label htmlFor="two-factor" className="font-medium">
                Enable Two-Factor Authentication
              </Label>
              <p className="text-sm text-gray-500">Add an extra layer of security to your account</p>
            </div>
            <Switch id="two-factor" />
          </div>
        </div>

        <div className="space-y-4">
          <h3 className="text-lg font-medium">Session Management</h3>

          <div className="flex items-center justify-between">
            <div>
              <Label htmlFor="auto-logout" className="font-medium">
                Auto Logout
              </Label>
              <p className="text-sm text-gray-500">Automatically log out after period of inactivity</p>
            </div>
            <Switch id="auto-logout" defaultChecked />
          </div>

          <div className="space-y-2">
            <Label htmlFor="session-timeout">Session Timeout (minutes)</Label>
            <Input id="session-timeout" type="number" defaultValue="30" min="5" max="120" />
          </div>
        </div>

        <div className="space-y-4">
          <h3 className="text-lg font-medium">Login History</h3>

          <div className="border rounded-md divide-y">
            <div className="p-3">
              <div className="flex justify-between">
                <div>
                  <p className="font-medium">Chrome on Windows</p>
                  <p className="text-sm text-gray-500">192.168.1.105</p>
                </div>
                <div className="text-right">
                  <p className="text-sm">Current session</p>
                  <p className="text-xs text-gray-500">May 19, 2025 at 4:15 PM</p>
                </div>
              </div>
            </div>
            <div className="p-3">
              <div className="flex justify-between">
                <div>
                  <p className="font-medium">Safari on macOS</p>
                  <p className="text-sm text-gray-500">192.168.1.110</p>
                </div>
                <div className="text-right">
                  <p className="text-sm">May 18, 2025</p>
                  <p className="text-xs text-gray-500">10:30 AM</p>
                </div>
              </div>
            </div>
          </div>

          <Button variant="outline">View Full Login History</Button>
        </div>
      </CardContent>
      <CardFooter>
        <Button variant="destructive">Log Out All Other Sessions</Button>
      </CardFooter>
    </Card>
  )
}
