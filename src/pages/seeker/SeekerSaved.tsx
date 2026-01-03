import { SeekerLayout } from "@/components/layout/SeekerLayout";
import { PageHeader } from "@/components/dashboard/PageHeader";
import { JobCard } from "@/components/dashboard/JobCard";
import { Bookmark } from "lucide-react";

const SeekerSaved = () => {
  const savedJobs = [
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
  ];

  return (
    <SeekerLayout>
      <PageHeader 
        title="Saved Jobs" 
        description="Jobs you've bookmarked for later"
      />

      {savedJobs.length > 0 ? (
        <div className="space-y-4">
          {savedJobs.map((job, index) => (
            <JobCard key={index} {...job} isSaved={true} />
          ))}
        </div>
      ) : (
        <div className="stat-card text-center py-16">
          <Bookmark className="w-12 h-12 mx-auto text-muted-foreground" />
          <h3 className="text-lg font-semibold mt-4 text-foreground">No saved jobs yet</h3>
          <p className="text-muted-foreground mt-2">
            Start saving jobs you're interested in to review them later.
          </p>
        </div>
      )}
    </SeekerLayout>
  );
};

export default SeekerSaved;
