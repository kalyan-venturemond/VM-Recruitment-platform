import { EmployerLayout } from "@/components/layout/EmployerLayout";
import { PageHeader } from "@/components/dashboard/PageHeader";
import { Button } from "@/components/ui/button";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Eye, Edit, Trash2, Users } from "lucide-react";
import { Link } from "react-router-dom";

const EmployerJobs = () => {
  const jobs = [
    {
      id: 1,
      title: "Senior Frontend Developer",
      status: "Open",
      applicants: 45,
      postedDate: "Dec 1, 2024",
    },
    {
      id: 2,
      title: "Product Designer",
      status: "Open",
      applicants: 32,
      postedDate: "Dec 5, 2024",
    },
    {
      id: 3,
      title: "Backend Engineer",
      status: "Closed",
      applicants: 28,
      postedDate: "Nov 20, 2024",
    },
    {
      id: 4,
      title: "DevOps Engineer",
      status: "Open",
      applicants: 18,
      postedDate: "Dec 10, 2024",
    },
    {
      id: 5,
      title: "Full Stack Developer",
      status: "Open",
      applicants: 56,
      postedDate: "Nov 15, 2024",
    },
  ];

  return (
    <EmployerLayout>
      <PageHeader 
        title="My Jobs" 
        description="Manage your job listings"
        actions={
          <Link to="/employer/post-job">
            <Button>Post New Job</Button>
          </Link>
        }
      />

      <div className="stat-card">
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Job Title</TableHead>
              <TableHead>Status</TableHead>
              <TableHead>Applicants</TableHead>
              <TableHead>Posted Date</TableHead>
              <TableHead className="text-right">Actions</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {jobs.map((job) => (
              <TableRow key={job.id}>
                <TableCell className="font-medium">{job.title}</TableCell>
                <TableCell>
                  <span className={`status-badge ${job.status === "Open" ? "status-shortlisted" : "status-rejected"}`}>
                    {job.status}
                  </span>
                </TableCell>
                <TableCell>{job.applicants}</TableCell>
                <TableCell>{job.postedDate}</TableCell>
                <TableCell className="text-right">
                  <div className="flex items-center justify-end gap-1">
                    <Link to="/employer/applicants">
                      <Button variant="ghost" size="icon" title="View Applicants">
                        <Users className="w-4 h-4" />
                      </Button>
                    </Link>
                    <Button variant="ghost" size="icon" title="View Job">
                      <Eye className="w-4 h-4" />
                    </Button>
                    <Button variant="ghost" size="icon" title="Edit Job">
                      <Edit className="w-4 h-4" />
                    </Button>
                    <Button variant="ghost" size="icon" title="Delete Job" className="text-destructive hover:text-destructive">
                      <Trash2 className="w-4 h-4" />
                    </Button>
                  </div>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
    </EmployerLayout>
  );
};

export default EmployerJobs;
