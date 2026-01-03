import { ReactNode } from "react";
import { DashboardLayout } from "@/components/layout/DashboardLayout";
import { LayoutDashboard, Users, Briefcase, Database, Activity } from "lucide-react";

const navItems = [
  { label: "Dashboard", href: "/admin/dashboard", icon: <LayoutDashboard className="w-5 h-5" /> },
  { label: "Users", href: "/admin/users", icon: <Users className="w-5 h-5" /> },
  { label: "Jobs", href: "/admin/jobs", icon: <Briefcase className="w-5 h-5" /> },
  { label: "Master Data", href: "/admin/master-data", icon: <Database className="w-5 h-5" /> },
  { label: "Platform Activity", href: "/admin/activity", icon: <Activity className="w-5 h-5" /> },
];

export function AdminLayout({ children }: { children: ReactNode }) {
  return (
    <DashboardLayout navItems={navItems} userRole="Admin" userName="System Admin">
      {children}
    </DashboardLayout>
  );
}
