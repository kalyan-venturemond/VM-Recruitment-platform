import { SeekerLayout } from "@/components/layout/SeekerLayout";
import { PageHeader } from "@/components/dashboard/PageHeader";
import { JobCard } from "@/components/dashboard/JobCard";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Checkbox } from "@/components/ui/checkbox";
import { 
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Search, Filter, ChevronLeft, ChevronRight } from "lucide-react";

const SeekerJobs = () => {
  const jobs = [
    {
      title: "Senior Frontend Developer",
      company: "TechCorp Inc.",
      location: "San Francisco, CA",
      experience: "5+ years",
      jobType: "Full-time",
      postedDate: "2 days ago",
    },
    {
      title: "Product Designer",
      company: "DesignStudio",
      location: "Remote",
      experience: "3+ years",
      jobType: "Full-time",
      postedDate: "3 days ago",
    },
    {
      title: "Full Stack Developer",
      company: "StartupXYZ",
      location: "New York, NY",
      experience: "4+ years",
      jobType: "Full-time",
      postedDate: "1 week ago",
    },
    {
      title: "Backend Engineer",
      company: "CloudBase",
      location: "Seattle, WA",
      experience: "3+ years",
      jobType: "Remote",
      postedDate: "4 days ago",
    },
    {
      title: "React Developer",
      company: "WebAgency",
      location: "Austin, TX",
      experience: "2+ years",
      jobType: "Contract",
      postedDate: "5 days ago",
    },
    {
      title: "DevOps Engineer",
      company: "InfraTech",
      location: "Remote",
      experience: "4+ years",
      jobType: "Full-time",
      postedDate: "1 day ago",
    },
  ];

  return (
    <SeekerLayout>
      <PageHeader 
        title="Browse Jobs" 
        description="Find your next opportunity from thousands of job listings"
      />

      {/* Search Bar */}
      <div className="stat-card mb-6">
        <div className="flex flex-col md:flex-row gap-4">
          <div className="flex-1 relative">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
            <Input 
              placeholder="Search job titles, keywords..." 
              className="pl-10 h-11"
            />
          </div>
          <div className="flex gap-2">
            <Select defaultValue="relevance">
              <SelectTrigger className="w-40">
                <SelectValue placeholder="Sort by" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="relevance">Most Relevant</SelectItem>
                <SelectItem value="recent">Most Recent</SelectItem>
                <SelectItem value="salary">Highest Salary</SelectItem>
              </SelectContent>
            </Select>
            <Button variant="outline">
              <Filter className="w-4 h-4 mr-2" />
              Filters
            </Button>
          </div>
        </div>
      </div>

      <div className="grid lg:grid-cols-4 gap-6">
        {/* Filters Sidebar */}
        <div className="lg:col-span-1">
          <div className="stat-card sticky top-24">
            <h3 className="font-semibold text-foreground mb-6">Filters</h3>
            
            <div className="space-y-6">
              {/* Location */}
              <div className="space-y-3">
                <Label className="text-sm font-medium">Location</Label>
                <div className="space-y-2">
                  {["Remote", "San Francisco, CA", "New York, NY", "Seattle, WA"].map((location) => (
                    <div key={location} className="flex items-center gap-2">
                      <Checkbox id={location} />
                      <label htmlFor={location} className="text-sm text-foreground">
                        {location}
                      </label>
                    </div>
                  ))}
                </div>
              </div>

              {/* Experience */}
              <div className="space-y-3">
                <Label className="text-sm font-medium">Experience Level</Label>
                <div className="space-y-2">
                  {["Entry Level", "Mid Level", "Senior", "Lead/Manager"].map((exp) => (
                    <div key={exp} className="flex items-center gap-2">
                      <Checkbox id={exp} />
                      <label htmlFor={exp} className="text-sm text-foreground">
                        {exp}
                      </label>
                    </div>
                  ))}
                </div>
              </div>

              {/* Job Type */}
              <div className="space-y-3">
                <Label className="text-sm font-medium">Job Type</Label>
                <div className="space-y-2">
                  {["Full-time", "Part-time", "Contract", "Internship"].map((type) => (
                    <div key={type} className="flex items-center gap-2">
                      <Checkbox id={type} />
                      <label htmlFor={type} className="text-sm text-foreground">
                        {type}
                      </label>
                    </div>
                  ))}
                </div>
              </div>

              {/* Skills */}
              <div className="space-y-3">
                <Label className="text-sm font-medium">Skills</Label>
                <div className="space-y-2">
                  {["React", "TypeScript", "Node.js", "Python", "AWS"].map((skill) => (
                    <div key={skill} className="flex items-center gap-2">
                      <Checkbox id={skill} />
                      <label htmlFor={skill} className="text-sm text-foreground">
                        {skill}
                      </label>
                    </div>
                  ))}
                </div>
              </div>

              <Button variant="outline" className="w-full">
                Clear Filters
              </Button>
            </div>
          </div>
        </div>

        {/* Job Listings */}
        <div className="lg:col-span-3">
          <div className="flex items-center justify-between mb-4">
            <p className="text-sm text-muted-foreground">
              Showing <span className="font-medium text-foreground">1-6</span> of{" "}
              <span className="font-medium text-foreground">248</span> jobs
            </p>
          </div>

          <div className="space-y-4">
            {jobs.map((job, index) => (
              <JobCard key={index} {...job} />
            ))}
          </div>

          {/* Pagination */}
          <div className="flex items-center justify-center gap-2 mt-8">
            <Button variant="outline" size="icon" disabled>
              <ChevronLeft className="w-4 h-4" />
            </Button>
            <Button variant="default" size="sm">1</Button>
            <Button variant="ghost" size="sm">2</Button>
            <Button variant="ghost" size="sm">3</Button>
            <span className="px-2 text-muted-foreground">...</span>
            <Button variant="ghost" size="sm">42</Button>
            <Button variant="outline" size="icon">
              <ChevronRight className="w-4 h-4" />
            </Button>
          </div>
        </div>
      </div>
    </SeekerLayout>
  );
};

export default SeekerJobs;
