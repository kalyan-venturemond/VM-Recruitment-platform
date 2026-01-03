import { ReactNode } from "react";
import { DashboardLayout } from "@/components/layout/DashboardLayout";
import { 
  LayoutDashboard, 
  Building2, 
  PlusCircle, 
  Briefcase, 
  Users, 
  MessageSquare, 
  Settings 
} from "lucide-react";

const navItems = [
  { label: "Dashboard", href: "/employer/dashboard", icon: <LayoutDashboard className="w-5 h-5" /> },
  { label: "Company Profile", href: "/employer/company", icon: <Building2 className="w-5 h-5" /> },
  { label: "Post Job", href: "/employer/post-job", icon: <PlusCircle className="w-5 h-5" /> },
  { label: "My Jobs", href: "/employer/jobs", icon: <Briefcase className="w-5 h-5" /> },
  { label: "Applicants", href: "/employer/applicants", icon: <Users className="w-5 h-5" /> },
  { label: "Messages", href: "/employer/messages", icon: <MessageSquare className="w-5 h-5" /> },
  { label: "Settings", href: "/employer/settings", icon: <Settings className="w-5 h-5" /> },
];

interface EmployerLayoutProps {
  children: ReactNode;
}

export function EmployerLayout({ children }: EmployerLayoutProps) {
  return (
    <DashboardLayout 
      navItems={navItems} 
      userRole="Employer"
      userName="TechCorp Inc."
    >
      {children}
    </DashboardLayout>
  );
}
