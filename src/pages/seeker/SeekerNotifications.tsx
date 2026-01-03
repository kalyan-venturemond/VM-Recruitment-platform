import { SeekerLayout } from "@/components/layout/SeekerLayout";
import { PageHeader } from "@/components/dashboard/PageHeader";
import { Button } from "@/components/ui/button";
import { 
  FileCheck, 
  MessageSquare, 
  Bell, 
  CheckCircle2,
  Star,
  XCircle
} from "lucide-react";
import { cn } from "@/lib/utils";

const SeekerNotifications = () => {
  const notifications = [
    {
      id: 1,
      type: "application",
      title: "Application Submitted",
      message: "Your application for Senior Frontend Developer at TechCorp Inc. was successfully submitted.",
      time: "2 hours ago",
      read: false,
      icon: <FileCheck className="w-5 h-5" />,
      iconBg: "bg-primary/10 text-primary",
    },
    {
      id: 2,
      type: "status",
      title: "Application Shortlisted",
      message: "Congratulations! Your application for Product Designer at DesignStudio has been shortlisted.",
      time: "5 hours ago",
      read: false,
      icon: <Star className="w-5 h-5" />,
      iconBg: "bg-success/10 text-success",
    },
    {
      id: 3,
      type: "message",
      title: "New Message",
      message: "Sarah Thompson from TechCorp Inc. sent you a message.",
      time: "1 day ago",
      read: true,
      icon: <MessageSquare className="w-5 h-5" />,
      iconBg: "bg-accent/10 text-accent",
    },
    {
      id: 4,
      type: "status",
      title: "Application Rejected",
      message: "Unfortunately, your application for React Developer at WebAgency was not selected.",
      time: "2 days ago",
      read: true,
      icon: <XCircle className="w-5 h-5" />,
      iconBg: "bg-destructive/10 text-destructive",
    },
    {
      id: 5,
      type: "general",
      title: "Profile Reminder",
      message: "Complete your profile to increase your visibility to employers.",
      time: "3 days ago",
      read: true,
      icon: <Bell className="w-5 h-5" />,
      iconBg: "bg-warning/10 text-warning",
    },
  ];

  return (
    <SeekerLayout>
      <PageHeader 
        title="Notifications" 
        description="Stay updated on your job search"
        actions={
          <Button variant="outline" size="sm">
            Mark All as Read
          </Button>
        }
      />

      <div className="space-y-3">
        {notifications.map((notification) => (
          <div
            key={notification.id}
            className={cn(
              "stat-card flex items-start gap-4",
              !notification.read && "border-l-4 border-l-primary"
            )}
          >
            <div className={cn("p-2.5 rounded-xl shrink-0", notification.iconBg)}>
              {notification.icon}
            </div>
            <div className="flex-1 min-w-0">
              <div className="flex items-start justify-between gap-4">
                <div>
                  <h3 className={cn(
                    "font-medium text-foreground",
                    !notification.read && "font-semibold"
                  )}>
                    {notification.title}
                  </h3>
                  <p className="text-sm text-muted-foreground mt-1">
                    {notification.message}
                  </p>
                </div>
                <span className="text-xs text-muted-foreground whitespace-nowrap">
                  {notification.time}
                </span>
              </div>
            </div>
            {!notification.read && (
              <div className="w-2 h-2 rounded-full bg-primary shrink-0 mt-2" />
            )}
          </div>
        ))}
      </div>
    </SeekerLayout>
  );
};

export default SeekerNotifications;
