import { EmployerLayout } from "@/components/layout/EmployerLayout";
import { PageHeader } from "@/components/dashboard/PageHeader";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { 
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Building2 } from "lucide-react";

const EmployerCompany = () => {
  return (
    <EmployerLayout>
      <PageHeader 
        title="Company Profile" 
        description="Manage your company information"
        actions={<Button>Save Changes</Button>}
      />

      <div className="grid gap-8 lg:grid-cols-3">
        {/* Main Content */}
        <div className="lg:col-span-2 space-y-6">
          {/* Company Info */}
          <div className="stat-card">
            <h3 className="font-semibold text-foreground mb-6">Company Information</h3>
            <div className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="companyName">Company Name</Label>
                <Input id="companyName" defaultValue="TechCorp Inc." />
              </div>

              <div className="space-y-2">
                <Label htmlFor="description">Company Description</Label>
                <Textarea 
                  id="description" 
                  rows={5}
                  defaultValue="TechCorp Inc. is a leading technology company specializing in innovative software solutions. We are committed to building products that make a difference in people's lives."
                />
              </div>

              <div className="grid gap-4 md:grid-cols-2">
                <div className="space-y-2">
                  <Label htmlFor="industry">Industry</Label>
                  <Select defaultValue="tech">
                    <SelectTrigger>
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="tech">Technology</SelectItem>
                      <SelectItem value="finance">Finance</SelectItem>
                      <SelectItem value="healthcare">Healthcare</SelectItem>
                      <SelectItem value="retail">Retail</SelectItem>
                      <SelectItem value="manufacturing">Manufacturing</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="size">Company Size</Label>
                  <Select defaultValue="medium">
                    <SelectTrigger>
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="startup">1-10 employees</SelectItem>
                      <SelectItem value="small">11-50 employees</SelectItem>
                      <SelectItem value="medium">51-200 employees</SelectItem>
                      <SelectItem value="large">201-500 employees</SelectItem>
                      <SelectItem value="enterprise">500+ employees</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="location">Headquarters Location</Label>
                <Input id="location" defaultValue="San Francisco, CA" />
              </div>

              <div className="space-y-2">
                <Label htmlFor="website">Website</Label>
                <Input id="website" type="url" defaultValue="https://techcorp.example.com" />
              </div>
            </div>
          </div>

          {/* Contact Info */}
          <div className="stat-card">
            <h3 className="font-semibold text-foreground mb-6">Contact Information</h3>
            <div className="grid gap-4 md:grid-cols-2">
              <div className="space-y-2">
                <Label htmlFor="contactEmail">Contact Email</Label>
                <Input id="contactEmail" type="email" defaultValue="hr@techcorp.example.com" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="contactPhone">Contact Phone</Label>
                <Input id="contactPhone" type="tel" defaultValue="+1 (555) 123-4567" />
              </div>
            </div>
          </div>
        </div>

        {/* Sidebar */}
        <div className="space-y-6">
          {/* Company Logo */}
          <div className="stat-card">
            <h3 className="font-semibold text-foreground mb-4">Company Logo</h3>
            <div className="flex flex-col items-center">
              <div className="w-24 h-24 rounded-xl bg-primary/10 flex items-center justify-center mb-4">
                <Building2 className="w-12 h-12 text-primary" />
              </div>
              <Button variant="outline" size="sm">Upload Logo</Button>
              <p className="text-xs text-muted-foreground mt-2 text-center">
                PNG, JPG up to 2MB
              </p>
            </div>
          </div>

          {/* Company Stats */}
          <div className="stat-card">
            <h3 className="font-semibold text-foreground mb-4">Profile Stats</h3>
            <div className="space-y-3">
              <div className="flex items-center justify-between">
                <span className="text-sm text-muted-foreground">Profile Views</span>
                <span className="font-medium text-foreground">1,234</span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-sm text-muted-foreground">Active Jobs</span>
                <span className="font-medium text-foreground">12</span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-sm text-muted-foreground">Total Hires</span>
                <span className="font-medium text-foreground">45</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </EmployerLayout>
  );
};

export default EmployerCompany;
