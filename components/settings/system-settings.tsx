"use client"

import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Label } from "@/components/ui/label"
import { Switch } from "@/components/ui/switch"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Slider } from "@/components/ui/slider"

export default function SystemSettings() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>System Settings</CardTitle>
        <CardDescription>Configure system-wide settings and preferences</CardDescription>
      </CardHeader>
      <CardContent className="space-y-6">
        <div className="space-y-4">
          <h3 className="text-lg font-medium">Appearance</h3>

          <div className="space-y-2">
            <Label>Theme</Label>
            <RadioGroup defaultValue="light" className="flex space-x-4">
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="light" id="theme-light" />
                <Label htmlFor="theme-light">Light</Label>
              </div>
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="dark" id="theme-dark" />
                <Label htmlFor="theme-dark">Dark</Label>
              </div>
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="system" id="theme-system" />
                <Label htmlFor="theme-system">System</Label>
              </div>
            </RadioGroup>
          </div>

          <div className="space-y-2">
            <Label htmlFor="density">Interface Density</Label>
            <Select defaultValue="comfortable">
              <SelectTrigger id="density">
                <SelectValue placeholder="Select density" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="compact">Compact</SelectItem>
                <SelectItem value="comfortable">Comfortable</SelectItem>
                <SelectItem value="spacious">Spacious</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </div>

        <div className="space-y-4">
          <h3 className="text-lg font-medium">Regional Settings</h3>

          <div className="space-y-2">
            <Label htmlFor="language">Language</Label>
            <Select defaultValue="en">
              <SelectTrigger id="language">
                <SelectValue placeholder="Select language" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="en">English</SelectItem>
                <SelectItem value="es">Spanish</SelectItem>
                <SelectItem value="fr">French</SelectItem>
                <SelectItem value="de">German</SelectItem>
                <SelectItem value="zh">Chinese</SelectItem>
              </SelectContent>
            </Select>
          </div>

          <div className="space-y-2">
            <Label htmlFor="date-format">Date Format</Label>
            <Select defaultValue="mdy">
              <SelectTrigger id="date-format">
                <SelectValue placeholder="Select date format" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="mdy">MM/DD/YYYY</SelectItem>
                <SelectItem value="dmy">DD/MM/YYYY</SelectItem>
                <SelectItem value="ymd">YYYY/MM/DD</SelectItem>
              </SelectContent>
            </Select>
          </div>

          <div className="space-y-2">
            <Label htmlFor="time-format">Time Format</Label>
            <Select defaultValue="12h">
              <SelectTrigger id="time-format">
                <SelectValue placeholder="Select time format" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="12h">12-hour (AM/PM)</SelectItem>
                <SelectItem value="24h">24-hour</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </div>

        <div className="space-y-4">
          <h3 className="text-lg font-medium">Accessibility</h3>

          <div className="flex items-center justify-between">
            <div>
              <Label htmlFor="motion-reduced" className="font-medium">
                Reduce Motion
              </Label>
              <p className="text-sm text-gray-500">Minimize animations and transitions</p>
            </div>
            <Switch id="motion-reduced" />
          </div>

          <div className="flex items-center justify-between">
            <div>
              <Label htmlFor="high-contrast" className="font-medium">
                High Contrast
              </Label>
              <p className="text-sm text-gray-500">Increase contrast for better visibility</p>
            </div>
            <Switch id="high-contrast" />
          </div>

          <div className="space-y-2">
            <div className="flex justify-between">
              <Label htmlFor="font-size">Font Size</Label>
              <span className="text-sm text-gray-500">Medium</span>
            </div>
            <Slider defaultValue={[2]} max={4} step={1} />
            <div className="flex justify-between text-xs text-gray-500">
              <span>Small</span>
              <span>Large</span>
            </div>
          </div>
        </div>

        <div className="space-y-4">
          <h3 className="text-lg font-medium">Data & Privacy</h3>

          <div className="flex items-center justify-between">
            <div>
              <Label htmlFor="analytics" className="font-medium">
                Usage Analytics
              </Label>
              <p className="text-sm text-gray-500">Allow anonymous usage data collection</p>
            </div>
            <Switch id="analytics" defaultChecked />
          </div>

          <div className="flex items-center justify-between">
            <div>
              <Label htmlFor="cookies" className="font-medium">
                Cookie Preferences
              </Label>
              <p className="text-sm text-gray-500">Manage cookie settings</p>
            </div>
            <Button variant="outline" size="sm">
              Manage
            </Button>
          </div>
        </div>
      </CardContent>
      <CardFooter className="flex justify-between">
        <Button variant="outline">Reset to Defaults</Button>
        <Button>Save Settings</Button>
      </CardFooter>
    </Card>
  )
}
