import { EmployerLayout } from "@/components/layout/EmployerLayout";
import { PageHeader } from "@/components/dashboard/PageHeader";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Switch } from "@/components/ui/switch";
import { Separator } from "@/components/ui/separator";

const EmployerSettings = () => {
  return (
    <EmployerLayout>
      <PageHeader 
        title="Settings" 
        description="Manage your account settings and preferences"
      />

      <div className="max-w-2xl space-y-6">
        {/* Account Settings */}
        <div className="stat-card">
          <h3 className="font-semibold text-foreground mb-6">Account Settings</h3>
          <div className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="email">Email Address</Label>
              <Input id="email" type="email" defaultValue="hr@techcorp.example.com" />
            </div>
            <div className="space-y-2">
              <Label htmlFor="currentPassword">Current Password</Label>
              <Input id="currentPassword" type="password" placeholder="••••••••" />
            </div>
            <div className="space-y-2">
              <Label htmlFor="newPassword">New Password</Label>
              <Input id="newPassword" type="password" placeholder="••••••••" />
            </div>
            <Button>Update Password</Button>
          </div>
        </div>

        {/* Notification Preferences */}
        <div className="stat-card">
          <h3 className="font-semibold text-foreground mb-6">Notification Preferences</h3>
          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <div>
                <p className="font-medium text-foreground">New Applications</p>
                <p className="text-sm text-muted-foreground">Get notified when someone applies to your jobs</p>
              </div>
              <Switch defaultChecked />
            </div>
            <Separator />
            <div className="flex items-center justify-between">
              <div>
                <p className="font-medium text-foreground">Application Updates</p>
                <p className="text-sm text-muted-foreground">Receive updates on candidate activity</p>
              </div>
              <Switch defaultChecked />
            </div>
            <Separator />
            <div className="flex items-center justify-between">
              <div>
                <p className="font-medium text-foreground">New Messages</p>
                <p className="text-sm text-muted-foreground">Get alerts for new messages from candidates</p>
              </div>
              <Switch defaultChecked />
            </div>
            <Separator />
            <div className="flex items-center justify-between">
              <div>
                <p className="font-medium text-foreground">Weekly Reports</p>
                <p className="text-sm text-muted-foreground">Receive weekly hiring activity summaries</p>
              </div>
              <Switch />
            </div>
          </div>
        </div>

        {/* Hiring Preferences */}
        <div className="stat-card">
          <h3 className="font-semibold text-foreground mb-6">Hiring Preferences</h3>
          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <div>
                <p className="font-medium text-foreground">Auto-screen Applications</p>
                <p className="text-sm text-muted-foreground">Automatically filter applications based on requirements</p>
              </div>
              <Switch defaultChecked />
            </div>
            <Separator />
            <div className="flex items-center justify-between">
              <div>
                <p className="font-medium text-foreground">Show Company on Listings</p>
                <p className="text-sm text-muted-foreground">Display company name on job listings</p>
              </div>
              <Switch defaultChecked />
            </div>
          </div>
        </div>

        {/* Danger Zone */}
        <div className="stat-card border-destructive/20">
          <h3 className="font-semibold text-destructive mb-6">Danger Zone</h3>
          <div className="flex items-center justify-between">
            <div>
              <p className="font-medium text-foreground">Delete Account</p>
              <p className="text-sm text-muted-foreground">Permanently delete your employer account</p>
            </div>
            <Button variant="destructive">Delete Account</Button>
          </div>
        </div>
      </div>
    </EmployerLayout>
  );
};

export default EmployerSettings;
