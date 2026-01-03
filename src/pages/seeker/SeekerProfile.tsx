import { SeekerLayout } from "@/components/layout/SeekerLayout";
import { PageHeader } from "@/components/dashboard/PageHeader";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Badge } from "@/components/ui/badge";
import { 
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { X, Upload, Plus } from "lucide-react";
import { useState } from "react";

const SeekerProfile = () => {
  const [skills, setSkills] = useState(["React", "TypeScript", "Node.js", "Python", "AWS"]);

  const removeSkill = (skillToRemove: string) => {
    setSkills(skills.filter(skill => skill !== skillToRemove));
  };

  return (
    <SeekerLayout>
      <PageHeader 
        title="My Profile" 
        description="Manage your profile information and preferences"
        actions={<Button>Save Profile</Button>}
      />

      <div className="grid gap-8 lg:grid-cols-3">
        {/* Main Content */}
        <div className="lg:col-span-2 space-y-6">
          {/* Basic Details */}
          <div className="stat-card">
            <h3 className="font-semibold text-foreground mb-6">Basic Details</h3>
            <div className="grid gap-4 md:grid-cols-2">
              <div className="space-y-2">
                <Label htmlFor="firstName">First Name</Label>
                <Input id="firstName" defaultValue="Alex" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="lastName">Last Name</Label>
                <Input id="lastName" defaultValue="Johnson" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="email">Email</Label>
                <Input id="email" type="email" defaultValue="alex@example.com" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="phone">Phone</Label>
                <Input id="phone" type="tel" defaultValue="+1 (555) 123-4567" />
              </div>
            </div>
          </div>

          {/* Skills */}
          <div className="stat-card">
            <h3 className="font-semibold text-foreground mb-6">Skills</h3>
            <div className="flex flex-wrap gap-2 mb-4">
              {skills.map(skill => (
                <Badge key={skill} variant="secondary" className="pl-3 pr-1 py-1.5">
                  {skill}
                  <button 
                    onClick={() => removeSkill(skill)}
                    className="ml-2 hover:bg-muted rounded-full p-0.5"
                  >
                    <X className="w-3 h-3" />
                  </button>
                </Badge>
              ))}
            </div>
            <div className="flex gap-2">
              <Input placeholder="Add a skill..." className="max-w-xs" />
              <Button variant="outline" size="icon">
                <Plus className="w-4 h-4" />
              </Button>
            </div>
          </div>

          {/* Experience */}
          <div className="stat-card">
            <div className="flex items-center justify-between mb-6">
              <h3 className="font-semibold text-foreground">Experience</h3>
              <Button variant="outline" size="sm">
                <Plus className="w-4 h-4 mr-2" />
                Add Experience
              </Button>
            </div>
            
            {/* Experience Item */}
            <div className="border border-border rounded-lg p-4 mb-4">
              <div className="flex items-start justify-between">
                <div>
                  <h4 className="font-medium text-foreground">Senior Frontend Developer</h4>
                  <p className="text-muted-foreground">TechCorp Inc.</p>
                  <p className="text-sm text-muted-foreground mt-1">Jan 2021 - Present · 3 years</p>
                </div>
                <Button variant="ghost" size="sm">Edit</Button>
              </div>
            </div>

            <div className="border border-border rounded-lg p-4">
              <div className="flex items-start justify-between">
                <div>
                  <h4 className="font-medium text-foreground">Frontend Developer</h4>
                  <p className="text-muted-foreground">StartupXYZ</p>
                  <p className="text-sm text-muted-foreground mt-1">Jun 2018 - Dec 2020 · 2.5 years</p>
                </div>
                <Button variant="ghost" size="sm">Edit</Button>
              </div>
            </div>
          </div>

          {/* Education */}
          <div className="stat-card">
            <div className="flex items-center justify-between mb-6">
              <h3 className="font-semibold text-foreground">Education</h3>
              <Button variant="outline" size="sm">
                <Plus className="w-4 h-4 mr-2" />
                Add Education
              </Button>
            </div>
            
            <div className="border border-border rounded-lg p-4">
              <div className="flex items-start justify-between">
                <div>
                  <h4 className="font-medium text-foreground">B.S. Computer Science</h4>
                  <p className="text-muted-foreground">University of California, Berkeley</p>
                  <p className="text-sm text-muted-foreground mt-1">2014 - 2018</p>
                </div>
                <Button variant="ghost" size="sm">Edit</Button>
              </div>
            </div>
          </div>
        </div>

        {/* Sidebar */}
        <div className="space-y-6">
          {/* Resume */}
          <div className="stat-card">
            <h3 className="font-semibold text-foreground mb-4">Resume</h3>
            <div className="border-2 border-dashed border-border rounded-lg p-6 text-center">
              <Upload className="w-8 h-8 mx-auto text-muted-foreground" />
              <p className="text-sm text-muted-foreground mt-2">
                Drag & drop your resume here
              </p>
              <p className="text-xs text-muted-foreground mt-1">
                PDF or DOC, max 5MB
              </p>
              <Button variant="outline" size="sm" className="mt-4">
                Browse Files
              </Button>
            </div>
          </div>

          {/* Job Preferences */}
          <div className="stat-card">
            <h3 className="font-semibold text-foreground mb-6">Job Preferences</h3>
            <div className="space-y-4">
              <div className="space-y-2">
                <Label>Preferred Location</Label>
                <Select defaultValue="sf">
                  <SelectTrigger>
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="sf">San Francisco, CA</SelectItem>
                    <SelectItem value="ny">New York, NY</SelectItem>
                    <SelectItem value="remote">Remote</SelectItem>
                    <SelectItem value="any">Any Location</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div className="space-y-2">
                <Label>Preferred Role</Label>
                <Select defaultValue="frontend">
                  <SelectTrigger>
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="frontend">Frontend Developer</SelectItem>
                    <SelectItem value="backend">Backend Developer</SelectItem>
                    <SelectItem value="fullstack">Full Stack Developer</SelectItem>
                    <SelectItem value="design">Product Designer</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div className="space-y-2">
                <Label>Job Type</Label>
                <Select defaultValue="fulltime">
                  <SelectTrigger>
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="fulltime">Full-time</SelectItem>
                    <SelectItem value="parttime">Part-time</SelectItem>
                    <SelectItem value="contract">Contract</SelectItem>
                    <SelectItem value="remote">Remote</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>
          </div>
        </div>
      </div>
    </SeekerLayout>
  );
};

export default SeekerProfile;
