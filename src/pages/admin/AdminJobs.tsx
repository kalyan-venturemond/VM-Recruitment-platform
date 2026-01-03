import { AdminLayout } from "@/components/layout/AdminLayout";
import { PageHeader } from "@/components/dashboard/PageHeader";
import { Button } from "@/components/ui/button";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";

const jobs = [
  { id: 1, title: "Senior Frontend Developer", employer: "TechCorp Inc.", status: "Approved" },
  { id: 2, title: "Product Designer", employer: "DesignStudio", status: "Pending" },
  { id: 3, title: "Backend Engineer", employer: "CloudBase", status: "Approved" },
  { id: 4, title: "Marketing Manager", employer: "GrowthCo", status: "Rejected" },
];

const AdminJobs = () => (
  <AdminLayout>
    <PageHeader title="Jobs Management" description="Review and manage job listings" />
    <div className="stat-card">
      <Table>
        <TableHeader><TableRow><TableHead>Job Title</TableHead><TableHead>Employer</TableHead><TableHead>Status</TableHead><TableHead className="text-right">Actions</TableHead></TableRow></TableHeader>
        <TableBody>
          {jobs.map((job) => (
            <TableRow key={job.id}>
              <TableCell className="font-medium">{job.title}</TableCell>
              <TableCell>{job.employer}</TableCell>
              <TableCell><span className={`status-badge ${job.status === "Approved" ? "status-shortlisted" : job.status === "Pending" ? "status-review" : "status-rejected"}`}>{job.status}</span></TableCell>
              <TableCell className="text-right"><div className="flex justify-end gap-2"><Button variant="outline" size="sm">Approve</Button><Button variant="destructive" size="sm">Reject</Button></div></TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  </AdminLayout>
);

export default AdminJobs;
