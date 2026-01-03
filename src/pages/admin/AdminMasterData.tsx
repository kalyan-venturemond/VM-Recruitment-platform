import { AdminLayout } from "@/components/layout/AdminLayout";
import { PageHeader } from "@/components/dashboard/PageHeader";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { Plus, Edit, Trash2 } from "lucide-react";

const categories = ["Technology", "Design", "Marketing", "Sales", "Finance"];
const skills = ["React", "TypeScript", "Python", "Figma", "AWS", "Node.js"];
const locations = ["San Francisco", "New York", "Remote", "Seattle", "Austin"];

const AdminMasterData = () => (
  <AdminLayout>
    <PageHeader title="Master Data" description="Manage job categories, skills, and locations" />
    <div className="grid md:grid-cols-3 gap-6">
      {[{ title: "Job Categories", items: categories }, { title: "Skills", items: skills }, { title: "Locations", items: locations }].map((section) => (
        <div key={section.title} className="stat-card">
          <div className="flex items-center justify-between mb-4"><h3 className="font-semibold">{section.title}</h3><Button size="sm" variant="outline"><Plus className="w-4 h-4" /></Button></div>
          <div className="space-y-2">
            {section.items.map((item) => (
              <div key={item} className="flex items-center justify-between p-2 rounded-lg bg-muted/50">
                <span className="text-sm">{item}</span>
                <div className="flex gap-1"><Button variant="ghost" size="icon" className="h-7 w-7"><Edit className="w-3 h-3" /></Button><Button variant="ghost" size="icon" className="h-7 w-7 text-destructive"><Trash2 className="w-3 h-3" /></Button></div>
              </div>
            ))}
          </div>
          <div className="flex gap-2 mt-4"><Input placeholder={`Add ${section.title.toLowerCase().slice(0,-1)}...`} className="h-9" /><Button size="sm">Add</Button></div>
        </div>
      ))}
    </div>
  </AdminLayout>
);

export default AdminMasterData;
