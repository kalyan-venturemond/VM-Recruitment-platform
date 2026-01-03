import { MapPin, Briefcase, Clock, Building2, Bookmark, BookmarkCheck } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useState } from "react";

interface JobCardProps {
  title: string;
  company: string;
  location: string;
  experience: string;
  jobType: string;
  postedDate?: string;
  onApply?: () => void;
  showSave?: boolean;
  isSaved?: boolean;
}

export function JobCard({
  title,
  company,
  location,
  experience,
  jobType,
  postedDate = "2 days ago",
  onApply,
  showSave = true,
  isSaved: initialSaved = false,
}: JobCardProps) {
  const [isSaved, setIsSaved] = useState(initialSaved);

  return (
    <div className="job-card animate-fade-in">
      <div className="flex items-start justify-between gap-4">
        <div className="flex-1">
          <h3 className="font-semibold text-lg text-foreground">{title}</h3>
          <div className="flex items-center gap-2 mt-1 text-muted-foreground">
            <Building2 className="w-4 h-4" />
            <span>{company}</span>
          </div>
        </div>
        <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center shrink-0">
          <Building2 className="w-6 h-6 text-primary" />
        </div>
      </div>

      <div className="flex flex-wrap items-center gap-3 mt-4">
        <span className="inline-flex items-center gap-1 text-sm text-muted-foreground">
          <MapPin className="w-4 h-4" />
          {location}
        </span>
        <span className="inline-flex items-center gap-1 text-sm text-muted-foreground">
          <Briefcase className="w-4 h-4" />
          {experience}
        </span>
        <span className="inline-flex items-center gap-1 text-sm text-muted-foreground">
          <Clock className="w-4 h-4" />
          {jobType}
        </span>
      </div>

      <div className="flex items-center justify-between mt-5 pt-4 border-t border-border">
        <span className="text-sm text-muted-foreground">{postedDate}</span>
        <div className="flex items-center gap-2">
          {showSave && (
            <Button 
              variant="ghost" 
              size="icon"
              onClick={() => setIsSaved(!isSaved)}
              className="text-muted-foreground hover:text-primary"
            >
              {isSaved ? (
                <BookmarkCheck className="w-5 h-5 text-primary" />
              ) : (
                <Bookmark className="w-5 h-5" />
              )}
            </Button>
          )}
          <Button onClick={onApply}>Apply Now</Button>
        </div>
      </div>
    </div>
  );
}
