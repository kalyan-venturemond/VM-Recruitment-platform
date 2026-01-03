import { EmployerLayout } from "@/components/layout/EmployerLayout";
import { PageHeader } from "@/components/dashboard/PageHeader";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { FileText, MessageSquare, User } from "lucide-react";

const EmployerApplicants = () => {
  const applicants = [
    {
      id: 1,
      name: "Alex Johnson",
      job: "Senior Frontend Developer",
      skills: ["React", "TypeScript", "Node.js"],
      experience: "5 years",
      status: "Under Review",
    },
    {
      id: 2,
      name: "Sarah Williams",
      job: "Senior Frontend Developer",
      skills: ["React", "Vue", "CSS"],
      experience: "4 years",
      status: "Shortlisted",
    },
    {
      id: 3,
      name: "Mike Chen",
      job: "Product Designer",
      skills: ["Figma", "Sketch", "UI/UX"],
      experience: "6 years",
      status: "Applied",
    },
    {
      id: 4,
      name: "Emily Davis",
      job: "Backend Engineer",
      skills: ["Python", "Django", "PostgreSQL"],
      experience: "3 years",
      status: "Rejected",
    },
    {
      id: 5,
      name: "John Smith",
      job: "DevOps Engineer",
      skills: ["AWS", "Docker", "Kubernetes"],
      experience: "7 years",
      status: "Shortlisted",
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
    <EmployerLayout>
      <PageHeader 
        title="Applicants" 
        description="Review and manage job applicants"
      />

      {/* Filter by Job */}
      <div className="stat-card mb-6">
        <div className="flex items-center gap-4">
          <span className="text-sm font-medium text-foreground">Filter by Job:</span>
          <Select defaultValue="all">
            <SelectTrigger className="w-64">
              <SelectValue placeholder="All Jobs" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">All Jobs</SelectItem>
              <SelectItem value="frontend">Senior Frontend Developer</SelectItem>
              <SelectItem value="designer">Product Designer</SelectItem>
              <SelectItem value="backend">Backend Engineer</SelectItem>
              <SelectItem value="devops">DevOps Engineer</SelectItem>
            </SelectContent>
          </Select>
        </div>
      </div>

      <div className="stat-card">
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Candidate</TableHead>
              <TableHead>Applied For</TableHead>
              <TableHead>Skills</TableHead>
              <TableHead>Experience</TableHead>
              <TableHead>Status</TableHead>
              <TableHead className="text-right">Actions</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {applicants.map((applicant) => (
              <TableRow key={applicant.id}>
                <TableCell>
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
                      <User className="w-5 h-5 text-primary" />
                    </div>
                    <span className="font-medium">{applicant.name}</span>
                  </div>
                </TableCell>
                <TableCell>{applicant.job}</TableCell>
                <TableCell>
                  <div className="flex flex-wrap gap-1">
                    {applicant.skills.slice(0, 2).map((skill) => (
                      <Badge key={skill} variant="secondary" className="text-xs">
                        {skill}
                      </Badge>
                    ))}
                    {applicant.skills.length > 2 && (
                      <Badge variant="secondary" className="text-xs">
                        +{applicant.skills.length - 2}
                      </Badge>
                    )}
                  </div>
                </TableCell>
                <TableCell>{applicant.experience}</TableCell>
                <TableCell>
                  <Select defaultValue={applicant.status.toLowerCase().replace(" ", "-")}>
                    <SelectTrigger className="w-36 h-8">
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="applied">Applied</SelectItem>
                      <SelectItem value="under-review">Under Review</SelectItem>
                      <SelectItem value="shortlisted">Shortlisted</SelectItem>
                      <SelectItem value="rejected">Rejected</SelectItem>
                    </SelectContent>
                  </Select>
                </TableCell>
                <TableCell className="text-right">
                  <div className="flex items-center justify-end gap-1">
                    <Button variant="ghost" size="icon" title="View Resume">
                      <FileText className="w-4 h-4" />
                    </Button>
                    <Button variant="ghost" size="icon" title="Send Message">
                      <MessageSquare className="w-4 h-4" />
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

export default EmployerApplicants;
