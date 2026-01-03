import { ReactNode } from "react";
import { DashboardLayout } from "@/components/layout/DashboardLayout";
import { 
  LayoutDashboard, 
  User, 
  Briefcase, 
  FileCheck, 
  Bookmark, 
  MessageSquare, 
  Bell, 
  Settings 
} from "lucide-react";

const navItems = [
  { label: "Dashboard", href: "/seeker/dashboard", icon: <LayoutDashboard className="w-5 h-5" /> },
  { label: "My Profile", href: "/seeker/profile", icon: <User className="w-5 h-5" /> },
  { label: "Jobs", href: "/seeker/jobs", icon: <Briefcase className="w-5 h-5" /> },
  { label: "Applied Jobs", href: "/seeker/applied", icon: <FileCheck className="w-5 h-5" /> },
  { label: "Saved Jobs", href: "/seeker/saved", icon: <Bookmark className="w-5 h-5" /> },
  { label: "Messages", href: "/seeker/messages", icon: <MessageSquare className="w-5 h-5" /> },
  { label: "Notifications", href: "/seeker/notifications", icon: <Bell className="w-5 h-5" /> },
  { label: "Settings", href: "/seeker/settings", icon: <Settings className="w-5 h-5" /> },
];

interface SeekerLayoutProps {
  children: ReactNode;
}

export function SeekerLayout({ children }: SeekerLayoutProps) {
  return (
    <DashboardLayout 
      navItems={navItems} 
      userRole="Job Seeker"
      userName="Alex Johnson"
    >
      {children}
    </DashboardLayout>
  );
}
