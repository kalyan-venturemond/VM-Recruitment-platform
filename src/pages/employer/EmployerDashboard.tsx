import { EmployerLayout } from "@/components/layout/EmployerLayout";
import { PageHeader } from "@/components/dashboard/PageHeader";
import { StatCard } from "@/components/dashboard/StatCard";
import { Button } from "@/components/ui/button";
import { 
  Briefcase, 
  Users, 
  Star, 
  TrendingUp,
  ArrowRight,
  Eye
} from "lucide-react";
import { Link } from "react-router-dom";

const EmployerDashboard = () => {
  const recentJobs = [
    {
      title: "Senior Frontend Developer",
      applicants: 45,
      views: 320,
      status: "Open",
    },
    {
      title: "Product Designer",
      applicants: 32,
      views: 210,
      status: "Open",
    },
    {
      title: "Backend Engineer",
      applicants: 28,
      views: 180,
      status: "Closed",
    },
  ];

  return (
    <EmployerLayout>
      <PageHeader 
        title="Employer Dashboard" 
        description="Manage your job postings and review applicants"
        actions={
          <Link to="/employer/post-job">
            <Button>
              Post New Job
            </Button>
          </Link>
        }
      />

      {/* Stats Grid */}
      <div className="dashboard-grid mb-8">
        <StatCard
          title="Active Jobs"
          value={12}
          icon={<Briefcase className="w-6 h-6" />}
          trend={{ value: 8, isPositive: true }}
        />
        <StatCard
          title="Total Applicants"
          value={248}
          icon={<Users className="w-6 h-6" />}
          trend={{ value: 15, isPositive: true }}
        />
        <StatCard
          title="Shortlisted"
          value={45}
          icon={<Star className="w-6 h-6" />}
          trend={{ value: 20, isPositive: true }}
        />
        <StatCard
          title="Hired This Month"
          value={8}
          icon={<TrendingUp className="w-6 h-6" />}
        />
      </div>

      {/* Job Performance */}
      <div className="flex items-center justify-between mb-4">
        <h2 className="text-lg font-semibold text-foreground">Job Performance</h2>
        <Link to="/employer/jobs">
          <Button variant="ghost" size="sm">
            View All Jobs
            <ArrowRight className="w-4 h-4" />
          </Button>
        </Link>
      </div>

      <div className="stat-card">
        <div className="space-y-4">
          {recentJobs.map((job, index) => (
            <div 
              key={index}
              className="flex items-center justify-between p-4 rounded-lg bg-muted/50 hover:bg-muted transition-colors"
            >
              <div>
                <h3 className="font-medium text-foreground">{job.title}</h3>
                <div className="flex items-center gap-4 mt-1 text-sm text-muted-foreground">
                  <span className="flex items-center gap-1">
                    <Users className="w-4 h-4" />
                    {job.applicants} applicants
                  </span>
                  <span className="flex items-center gap-1">
                    <Eye className="w-4 h-4" />
                    {job.views} views
                  </span>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <span className={`status-badge ${job.status === "Open" ? "status-shortlisted" : "status-rejected"}`}>
                  {job.status}
                </span>
                <Link to="/employer/applicants">
                  <Button variant="outline" size="sm">View Applicants</Button>
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </EmployerLayout>
  );
};

export default EmployerDashboard;
