import { SeekerLayout } from "@/components/layout/SeekerLayout";
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
import { ExternalLink, Eye } from "lucide-react";

const SeekerApplied = () => {
  const applications = [
    {
      id: 1,
      jobTitle: "Senior Frontend Developer",
      company: "TechCorp Inc.",
      appliedDate: "Dec 15, 2024",
      status: "Shortlisted",
    },
    {
      id: 2,
      jobTitle: "Product Designer",
      company: "DesignStudio",
      appliedDate: "Dec 12, 2024",
      status: "Under Review",
    },
    {
      id: 3,
      jobTitle: "Full Stack Developer",
      company: "StartupXYZ",
      appliedDate: "Dec 10, 2024",
      status: "Applied",
    },
    {
      id: 4,
      jobTitle: "Backend Engineer",
      company: "CloudBase",
      appliedDate: "Dec 8, 2024",
      status: "Shortlisted",
    },
    {
      id: 5,
      jobTitle: "React Developer",
      company: "WebAgency",
      appliedDate: "Dec 5, 2024",
      status: "Rejected",
    },
    {
      id: 6,
      jobTitle: "DevOps Engineer",
      company: "InfraTech",
      appliedDate: "Dec 1, 2024",
      status: "Under Review",
    },
  ];

  const getStatusBadge = (status: string) => {
    const styles: Record<string, string> = {
      "Applied": "status-badge status-applied",
      "Under Review": "status-badge status-review",
      "Shortlisted": "status-badge status-shortlisted",
      "Rejected": "status-badge status-rejected",
    };
    return <span className={styles[status] || "status-badge"}>{status}</span>;
  };

  return (
    <SeekerLayout>
      <PageHeader 
        title="Applied Jobs" 
        description="Track all your job applications in one place"
      />

      <div className="stat-card">
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Job Title</TableHead>
              <TableHead>Company</TableHead>
              <TableHead>Applied Date</TableHead>
              <TableHead>Status</TableHead>
              <TableHead className="text-right">Actions</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {applications.map((app) => (
              <TableRow key={app.id}>
                <TableCell className="font-medium">{app.jobTitle}</TableCell>
                <TableCell>{app.company}</TableCell>
                <TableCell>{app.appliedDate}</TableCell>
                <TableCell>{getStatusBadge(app.status)}</TableCell>
                <TableCell className="text-right">
                  <div className="flex items-center justify-end gap-2">
                    <Button variant="ghost" size="sm">
                      <Eye className="w-4 h-4 mr-1" />
                      View
                    </Button>
                    <Button variant="ghost" size="icon">
                      <ExternalLink className="w-4 h-4" />
                    </Button>
                  </div>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
    </SeekerLayout>
  );
};

export default SeekerApplied;
