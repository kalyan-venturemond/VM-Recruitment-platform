import { SeekerLayout } from "@/components/layout/SeekerLayout";
import { PageHeader } from "@/components/dashboard/PageHeader";
import { StatCard } from "@/components/dashboard/StatCard";
import { JobCard } from "@/components/dashboard/JobCard";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import { 
  FileCheck, 
  Star, 
  XCircle, 
  Briefcase,
  ArrowRight,
  CheckCircle2
} from "lucide-react";
import { Link } from "react-router-dom";

const SeekerDashboard = () => {
  const recentJobs = [
    {
      title: "Senior Frontend Developer",
      company: "TechCorp Inc.",
      location: "San Francisco, CA",
      experience: "5+ years",
      jobType: "Full-time",
    },
    {
      title: "Product Designer",
      company: "DesignStudio",
      location: "Remote",
      experience: "3+ years",
      jobType: "Full-time",
    },
  ];

  return (
    <SeekerLayout>
      <PageHeader 
        title="Dashboard" 
        description="Welcome back, Alex! Here's your job search overview."
      />

      {/* Stats Grid */}
      <div className="dashboard-grid mb-8">
        <StatCard
          title="Profile Completion"
          value="75%"
          icon={<CheckCircle2 className="w-6 h-6" />}
        />
        <StatCard
          title="Applied Jobs"
          value={24}
          icon={<FileCheck className="w-6 h-6" />}
          trend={{ value: 12, isPositive: true }}
        />
        <StatCard
          title="Shortlisted"
          value={8}
          icon={<Star className="w-6 h-6" />}
          trend={{ value: 25, isPositive: true }}
        />
        <StatCard
          title="Rejected"
          value={3}
          icon={<XCircle className="w-6 h-6" />}
        />
      </div>

      {/* Profile Completion Card */}
      <div className="stat-card mb-8">
        <div className="flex items-center justify-between mb-4">
          <div>
            <h3 className="font-semibold text-foreground">Complete Your Profile</h3>
            <p className="text-sm text-muted-foreground mt-1">
              A complete profile increases your chances of getting hired by 70%
            </p>
          </div>
          <Link to="/seeker/profile">
            <Button size="sm">Complete Profile</Button>
          </Link>
        </div>
        <Progress value={75} className="h-2" />
        <div className="flex items-center gap-6 mt-4 text-sm">
          <span className="flex items-center gap-2 text-success">
            <CheckCircle2 className="w-4 h-4" />
            Basic Info
          </span>
          <span className="flex items-center gap-2 text-success">
            <CheckCircle2 className="w-4 h-4" />
            Skills
          </span>
          <span className="flex items-center gap-2 text-muted-foreground">
            <div className="w-4 h-4 rounded-full border-2 border-muted-foreground" />
            Resume
          </span>
          <span className="flex items-center gap-2 text-muted-foreground">
            <div className="w-4 h-4 rounded-full border-2 border-muted-foreground" />
            Preferences
          </span>
        </div>
      </div>

      {/* Recommended Jobs */}
      <div className="flex items-center justify-between mb-4">
        <h2 className="text-lg font-semibold text-foreground">Recommended Jobs</h2>
        <Link to="/seeker/jobs">
          <Button variant="ghost" size="sm">
            View All
            <ArrowRight className="w-4 h-4" />
          </Button>
        </Link>
      </div>
      <div className="grid gap-4 md:grid-cols-2">
        {recentJobs.map((job, index) => (
          <JobCard key={index} {...job} />
        ))}
      </div>
    </SeekerLayout>
  );
};

export default SeekerDashboard;
