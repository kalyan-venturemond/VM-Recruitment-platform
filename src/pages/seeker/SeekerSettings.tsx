import { SeekerLayout } from "@/components/layout/SeekerLayout";
import { PageHeader } from "@/components/dashboard/PageHeader";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Switch } from "@/components/ui/switch";
import { Separator } from "@/components/ui/separator";

const SeekerSettings = () => {
  return (
    <SeekerLayout>
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
              <Input id="email" type="email" defaultValue="alex@example.com" />
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
                <p className="font-medium text-foreground">Email Notifications</p>
                <p className="text-sm text-muted-foreground">Receive job recommendations via email</p>
              </div>
              <Switch defaultChecked />
            </div>
            <Separator />
            <div className="flex items-center justify-between">
              <div>
                <p className="font-medium text-foreground">Application Updates</p>
                <p className="text-sm text-muted-foreground">Get notified when your application status changes</p>
              </div>
              <Switch defaultChecked />
            </div>
            <Separator />
            <div className="flex items-center justify-between">
              <div>
                <p className="font-medium text-foreground">New Messages</p>
                <p className="text-sm text-muted-foreground">Receive alerts for new messages from employers</p>
              </div>
              <Switch defaultChecked />
            </div>
            <Separator />
            <div className="flex items-center justify-between">
              <div>
                <p className="font-medium text-foreground">Marketing Emails</p>
                <p className="text-sm text-muted-foreground">Receive tips and updates from RecruitPro</p>
              </div>
              <Switch />
            </div>
          </div>
        </div>

        {/* Privacy */}
        <div className="stat-card">
          <h3 className="font-semibold text-foreground mb-6">Privacy</h3>
          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <div>
                <p className="font-medium text-foreground">Profile Visibility</p>
                <p className="text-sm text-muted-foreground">Make your profile visible to employers</p>
              </div>
              <Switch defaultChecked />
            </div>
            <Separator />
            <div className="flex items-center justify-between">
              <div>
                <p className="font-medium text-foreground">Show Activity Status</p>
                <p className="text-sm text-muted-foreground">Let employers see when you're online</p>
              </div>
              <Switch />
            </div>
          </div>
        </div>

        {/* Danger Zone */}
        <div className="stat-card border-destructive/20">
          <h3 className="font-semibold text-destructive mb-6">Danger Zone</h3>
          <div className="flex items-center justify-between">
            <div>
              <p className="font-medium text-foreground">Delete Account</p>
              <p className="text-sm text-muted-foreground">Permanently delete your account and all data</p>
            </div>
            <Button variant="destructive">Delete Account</Button>
          </div>
        </div>
      </div>
    </SeekerLayout>
  );
};

export default SeekerSettings;
