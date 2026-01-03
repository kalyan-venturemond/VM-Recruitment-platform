import { AdminLayout } from "@/components/layout/AdminLayout";
import { PageHeader } from "@/components/dashboard/PageHeader";
import { Button } from "@/components/ui/button";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { User } from "lucide-react";

const users = [
  { id: 1, name: "Alex Johnson", email: "alex@example.com", role: "Job Seeker", status: "Active" },
  { id: 2, name: "TechCorp Inc.", email: "hr@techcorp.com", role: "Employer", status: "Active" },
  { id: 3, name: "Sarah Williams", email: "sarah@example.com", role: "Job Seeker", status: "Active" },
  { id: 4, name: "John Smith", email: "john@example.com", role: "Job Seeker", status: "Deactivated" },
];

const AdminUsers = () => (
  <AdminLayout>
    <PageHeader title="Users Management" description="Manage platform users" />
    <div className="stat-card">
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>User</TableHead><TableHead>Email</TableHead><TableHead>Role</TableHead><TableHead>Status</TableHead><TableHead className="text-right">Actions</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {users.map((user) => (
            <TableRow key={user.id}>
              <TableCell><div className="flex items-center gap-3"><div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center"><User className="w-4 h-4 text-primary" /></div>{user.name}</div></TableCell>
              <TableCell>{user.email}</TableCell>
              <TableCell><span className={`status-badge ${user.role === "Employer" ? "status-review" : "status-applied"}`}>{user.role}</span></TableCell>
              <TableCell><span className={`status-badge ${user.status === "Active" ? "status-shortlisted" : "status-rejected"}`}>{user.status}</span></TableCell>
              <TableCell className="text-right"><Button variant={user.status === "Active" ? "destructive" : "default"} size="sm">{user.status === "Active" ? "Deactivate" : "Activate"}</Button></TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  </AdminLayout>
);

export default AdminUsers;
