import { AdminLayout } from "@/components/layout/AdminLayout";
import { PageHeader } from "@/components/dashboard/PageHeader";
import { StatCard } from "@/components/dashboard/StatCard";
import { Users, Briefcase, Building2, TrendingUp } from "lucide-react";

const AdminDashboard = () => (
  <AdminLayout>
    <PageHeader title="Admin Dashboard" description="Platform overview and management" />
    <div className="dashboard-grid mb-8">
      <StatCard title="Total Users" value="52,847" icon={<Users className="w-6 h-6" />} trend={{ value: 12, isPositive: true }} />
      <StatCard title="Job Seekers" value="45,230" icon={<Users className="w-6 h-6" />} />
      <StatCard title="Employers" value="7,617" icon={<Building2 className="w-6 h-6" />} />
      <StatCard title="Active Jobs" value="3,428" icon={<Briefcase className="w-6 h-6" />} trend={{ value: 8, isPositive: true }} />
    </div>
    <div className="stat-card">
      <h3 className="font-semibold mb-4">Platform Summary</h3>
      <div className="grid md:grid-cols-3 gap-6 text-center">
        <div><p className="text-3xl font-bold text-primary">12,450</p><p className="text-muted-foreground">Applications This Month</p></div>
        <div><p className="text-3xl font-bold text-success">892</p><p className="text-muted-foreground">Successful Hires</p></div>
        <div><p className="text-3xl font-bold text-accent">98.5%</p><p className="text-muted-foreground">Uptime</p></div>
      </div>
    </div>
  </AdminLayout>
);

export default AdminDashboard;
