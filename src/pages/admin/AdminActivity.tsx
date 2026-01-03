import { AdminLayout } from "@/components/layout/AdminLayout";
import { PageHeader } from "@/components/dashboard/PageHeader";
import { User, Briefcase, FileCheck, LogIn } from "lucide-react";

const activities = [
  { icon: <User className="w-4 h-4" />, action: "New user registered", details: "alex@example.com", time: "2 min ago", color: "bg-primary/10 text-primary" },
  { icon: <Briefcase className="w-4 h-4" />, action: "New job posted", details: "Senior Developer at TechCorp", time: "15 min ago", color: "bg-accent/10 text-accent" },
  { icon: <FileCheck className="w-4 h-4" />, action: "Application submitted", details: "Sarah applied to Product Designer", time: "1 hour ago", color: "bg-success/10 text-success" },
  { icon: <LogIn className="w-4 h-4" />, action: "User login", details: "employer@techcorp.com", time: "2 hours ago", color: "bg-warning/10 text-warning" },
];

const AdminActivity = () => (
  <AdminLayout>
    <PageHeader title="Platform Activity" description="Recent activity logs" />
    <div className="stat-card">
      <div className="space-y-4">
        {activities.map((activity, i) => (
          <div key={i} className="flex items-center gap-4 p-4 rounded-lg bg-muted/50">
            <div className={`p-2 rounded-lg ${activity.color}`}>{activity.icon}</div>
            <div className="flex-1"><p className="font-medium">{activity.action}</p><p className="text-sm text-muted-foreground">{activity.details}</p></div>
            <span className="text-sm text-muted-foreground">{activity.time}</span>
          </div>
        ))}
      </div>
    </div>
  </AdminLayout>
);

export default AdminActivity;
