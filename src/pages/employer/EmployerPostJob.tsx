import { EmployerLayout } from "@/components/layout/EmployerLayout";
import { PageHeader } from "@/components/dashboard/PageHeader";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Badge } from "@/components/ui/badge";
import { Switch } from "@/components/ui/switch";
import { 
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { X, Plus } from "lucide-react";
import { useState } from "react";

const EmployerPostJob = () => {
  const [skills, setSkills] = useState(["React", "TypeScript"]);
  const [isOpen, setIsOpen] = useState(true);

  const removeSkill = (skillToRemove: string) => {
    setSkills(skills.filter(skill => skill !== skillToRemove));
  };

  return (
    <EmployerLayout>
      <PageHeader 
        title="Post New Job" 
        description="Create a new job listing"
        actions={<Button>Publish Job</Button>}
      />

      <div className="max-w-3xl">
        <div className="stat-card">
          <div className="space-y-6">
            {/* Job Title */}
            <div className="space-y-2">
              <Label htmlFor="title">Job Title</Label>
              <Input id="title" placeholder="e.g. Senior Frontend Developer" />
            </div>

            {/* Job Description */}
            <div className="space-y-2">
              <Label htmlFor="description">Job Description</Label>
              <Textarea 
                id="description" 
                rows={8}
                placeholder="Describe the role, responsibilities, and what makes this opportunity exciting..."
              />
            </div>

            {/* Required Skills */}
            <div className="space-y-2">
              <Label>Required Skills</Label>
              <div className="flex flex-wrap gap-2 mb-3">
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

            <div className="grid gap-4 md:grid-cols-2">
              {/* Experience Required */}
              <div className="space-y-2">
                <Label>Experience Required</Label>
                <Select defaultValue="mid">
                  <SelectTrigger>
                    <SelectValue placeholder="Select experience level" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="entry">Entry Level (0-2 years)</SelectItem>
                    <SelectItem value="mid">Mid Level (3-5 years)</SelectItem>
                    <SelectItem value="senior">Senior (5-8 years)</SelectItem>
                    <SelectItem value="lead">Lead/Manager (8+ years)</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              {/* Job Type */}
              <div className="space-y-2">
                <Label>Job Type</Label>
                <Select defaultValue="fulltime">
                  <SelectTrigger>
                    <SelectValue placeholder="Select job type" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="fulltime">Full-time</SelectItem>
                    <SelectItem value="parttime">Part-time</SelectItem>
                    <SelectItem value="contract">Contract</SelectItem>
                    <SelectItem value="internship">Internship</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>

            {/* Location */}
            <div className="space-y-2">
              <Label htmlFor="location">Location</Label>
              <Input id="location" placeholder="e.g. San Francisco, CA or Remote" />
            </div>

            {/* Salary Range */}
            <div className="grid gap-4 md:grid-cols-2">
              <div className="space-y-2">
                <Label htmlFor="salaryMin">Minimum Salary (Optional)</Label>
                <Input id="salaryMin" type="number" placeholder="$80,000" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="salaryMax">Maximum Salary (Optional)</Label>
                <Input id="salaryMax" type="number" placeholder="$120,000" />
              </div>
            </div>

            {/* Status Toggle */}
            <div className="flex items-center justify-between p-4 bg-muted/50 rounded-lg">
              <div>
                <p className="font-medium text-foreground">Job Status</p>
                <p className="text-sm text-muted-foreground">
                  {isOpen ? "Job is open for applications" : "Job is closed"}
                </p>
              </div>
              <Switch checked={isOpen} onCheckedChange={setIsOpen} />
            </div>

            {/* Actions */}
            <div className="flex items-center justify-end gap-3 pt-4 border-t border-border">
              <Button variant="outline">Save as Draft</Button>
              <Button>Publish Job</Button>
            </div>
          </div>
        </div>
      </div>
    </EmployerLayout>
  );
};

export default EmployerPostJob;
