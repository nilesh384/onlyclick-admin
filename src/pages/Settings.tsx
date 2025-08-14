import { AdminLayout } from "@/components/AdminLayout";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Switch } from "@/components/ui/switch";
import { Separator } from "@/components/ui/separator";
import { Badge } from "@/components/ui/badge";
import { Users, Shield, Bell, Lock, Database, Mail } from "lucide-react";

const Settings = () => {
  return (
    <AdminLayout>
      <div className="p-6 space-y-6">
        <div>
          <h1 className="text-3xl font-bold text-foreground">Settings</h1>
          <p className="text-muted-foreground">Manage admin roles, notifications, and system settings</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {/* Admin Roles */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Users className="h-5 w-5" />
                Admin Roles
              </CardTitle>
              <CardDescription>
                Manage admin accounts and permissions
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-3">
                <div className="flex items-center justify-between p-3 bg-muted rounded-lg">
                  <div>
                    <p className="font-medium">Admin User</p>
                    <p className="text-sm text-muted-foreground">admin@onlyclick.com</p>
                  </div>
                  <Badge variant="default">Super Admin</Badge>
                </div>
                <div className="flex items-center justify-between p-3 bg-muted rounded-lg">
                  <div>
                    <p className="font-medium">Support Team</p>
                    <p className="text-sm text-muted-foreground">support@onlyclick.com</p>
                  </div>
                  <Badge variant="secondary">Support Agent</Badge>
                </div>
              </div>
              <Button className="w-full">Add New Admin</Button>
            </CardContent>
          </Card>

          {/* Security Settings */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Shield className="h-5 w-5" />
                Security
              </CardTitle>
              <CardDescription>
                Configure security and authentication settings
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex items-center justify-between">
                <Label htmlFor="2fa">Two-Factor Authentication</Label>
                <Switch id="2fa" defaultChecked />
              </div>
              <div className="flex items-center justify-between">
                <Label htmlFor="session">Auto-logout (30 min)</Label>
                <Switch id="session" defaultChecked />
              </div>
              <div className="flex items-center justify-between">
                <Label htmlFor="logging">Access Logging</Label>
                <Switch id="logging" defaultChecked />
              </div>
              <Separator />
              <Button variant="outline" className="w-full">
                <Lock className="h-4 w-4 mr-2" />
                Change Password
              </Button>
            </CardContent>
          </Card>

          {/* Notification Settings */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Bell className="h-5 w-5" />
                Notifications
              </CardTitle>
              <CardDescription>
                Configure alert preferences
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex items-center justify-between">
                <Label htmlFor="complaints">New Complaints</Label>
                <Switch id="complaints" defaultChecked />
              </div>
              <div className="flex items-center justify-between">
                <Label htmlFor="cancellations">Job Cancellations</Label>
                <Switch id="cancellations" defaultChecked />
              </div>
              <div className="flex items-center justify-between">
                <Label htmlFor="earnings">Daily Earnings Report</Label>
                <Switch id="earnings" />
              </div>
              <div className="flex items-center justify-between">
                <Label htmlFor="incidents">Critical Incidents</Label>
                <Switch id="incidents" defaultChecked />
              </div>
            </CardContent>
          </Card>

          {/* System Settings */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Database className="h-5 w-5" />
                System
              </CardTitle>
              <CardDescription>
                Platform configuration and maintenance
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="maintenance">Maintenance Mode</Label>
                <div className="flex items-center space-x-2">
                  <Switch id="maintenance" />
                  <span className="text-sm text-muted-foreground">Enable for updates</span>
                </div>
              </div>
              <div className="space-y-2">
                <Label htmlFor="backup">Auto Backup</Label>
                <Input id="backup" value="Daily at 2:00 AM" readOnly />
              </div>
              <Button variant="outline" className="w-full">
                <Database className="h-4 w-4 mr-2" />
                View System Logs
              </Button>
            </CardContent>
          </Card>
        </div>

        {/* Email Settings */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Mail className="h-5 w-5" />
              Email Configuration
            </CardTitle>
            <CardDescription>
              Configure SMTP settings for notifications
            </CardDescription>
          </CardHeader>
          <CardContent className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label htmlFor="smtp-host">SMTP Host</Label>
              <Input id="smtp-host" placeholder="smtp.gmail.com" />
            </div>
            <div className="space-y-2">
              <Label htmlFor="smtp-port">Port</Label>
              <Input id="smtp-port" placeholder="587" />
            </div>
            <div className="space-y-2">
              <Label htmlFor="smtp-user">Username</Label>
              <Input id="smtp-user" placeholder="noreply@onlyclick.com" />
            </div>
            <div className="space-y-2">
              <Label htmlFor="smtp-pass">Password</Label>
              <Input id="smtp-pass" type="password" placeholder="••••••••" />
            </div>
            <div className="md:col-span-2 flex gap-2">
              <Button variant="outline">Test Connection</Button>
              <Button>Save Settings</Button>
            </div>
          </CardContent>
        </Card>
      </div>
    </AdminLayout>
  );
};

export default Settings;