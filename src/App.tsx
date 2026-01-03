import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Landing from "./pages/Landing";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import ForgotPassword from "./pages/ForgotPassword";
import SeekerDashboard from "./pages/seeker/SeekerDashboard";
import SeekerProfile from "./pages/seeker/SeekerProfile";
import SeekerJobs from "./pages/seeker/SeekerJobs";
import SeekerApplied from "./pages/seeker/SeekerApplied";
import SeekerSaved from "./pages/seeker/SeekerSaved";
import SeekerMessages from "./pages/seeker/SeekerMessages";
import SeekerNotifications from "./pages/seeker/SeekerNotifications";
import SeekerSettings from "./pages/seeker/SeekerSettings";
import EmployerDashboard from "./pages/employer/EmployerDashboard";
import EmployerCompany from "./pages/employer/EmployerCompany";
import EmployerPostJob from "./pages/employer/EmployerPostJob";
import EmployerJobs from "./pages/employer/EmployerJobs";
import EmployerApplicants from "./pages/employer/EmployerApplicants";
import EmployerMessages from "./pages/employer/EmployerMessages";
import EmployerSettings from "./pages/employer/EmployerSettings";
import AdminDashboard from "./pages/admin/AdminDashboard";
import AdminUsers from "./pages/admin/AdminUsers";
import AdminJobs from "./pages/admin/AdminJobs";
import AdminMasterData from "./pages/admin/AdminMasterData";
import AdminActivity from "./pages/admin/AdminActivity";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Landing />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/forgot-password" element={<ForgotPassword />} />
          <Route path="/seeker/dashboard" element={<SeekerDashboard />} />
          <Route path="/seeker/profile" element={<SeekerProfile />} />
          <Route path="/seeker/jobs" element={<SeekerJobs />} />
          <Route path="/seeker/applied" element={<SeekerApplied />} />
          <Route path="/seeker/saved" element={<SeekerSaved />} />
          <Route path="/seeker/messages" element={<SeekerMessages />} />
          <Route path="/seeker/notifications" element={<SeekerNotifications />} />
          <Route path="/seeker/settings" element={<SeekerSettings />} />
          <Route path="/employer/dashboard" element={<EmployerDashboard />} />
          <Route path="/employer/company" element={<EmployerCompany />} />
          <Route path="/employer/post-job" element={<EmployerPostJob />} />
          <Route path="/employer/jobs" element={<EmployerJobs />} />
          <Route path="/employer/applicants" element={<EmployerApplicants />} />
          <Route path="/employer/messages" element={<EmployerMessages />} />
          <Route path="/employer/settings" element={<EmployerSettings />} />
          <Route path="/admin/dashboard" element={<AdminDashboard />} />
          <Route path="/admin/users" element={<AdminUsers />} />
          <Route path="/admin/jobs" element={<AdminJobs />} />
          <Route path="/admin/master-data" element={<AdminMasterData />} />
          <Route path="/admin/activity" element={<AdminActivity />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
