import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Logo } from "@/components/common/Logo";
import {
  Briefcase,
  Users,
  Building2,
  ArrowRight,
  CheckCircle2,
  Search,
  FileText,
  MessageSquare
} from "lucide-react";

const Landing = () => {
  const features = [
    {
      icon: <Search className="w-6 h-6" />,
      title: "Smart Job Matching",
      description: "AI-powered job recommendations based on your skills and preferences."
    },
    {
      icon: <FileText className="w-6 h-6" />,
      title: "Easy Applications",
      description: "Apply to multiple jobs with a single click using your profile."
    },
    {
      icon: <MessageSquare className="w-6 h-6" />,
      title: "Direct Communication",
      description: "Connect directly with employers through our messaging system."
    }
  ];

  const stats = [
    { value: "10,000+", label: "Active Jobs" },
    { value: "5,000+", label: "Companies" },
    { value: "50,000+", label: "Job Seekers" },
    { value: "95%", label: "Satisfaction Rate" }
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-card/80 backdrop-blur-md border-b border-border">
        <div className="container mx-auto px-4 h-16 flex items-center justify-between">
          <Link to="/" className="flex items-center gap-2">
            <Logo />
          </Link>
          <div className="flex items-center gap-3">
            <Link to="/login">
              <Button variant="ghost">Login</Button>
            </Link>
            <Link to="/signup">
              <Button>Sign Up</Button>
            </Link>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-32 pb-20 px-4">
        <div className="container mx-auto text-center max-w-4xl">
          <h1 className="text-4xl md:text-6xl font-bold text-foreground leading-tight">
            Find Your Dream Job
            <span className="block mt-2 bg-clip-text text-transparent gradient-hero">
              Or Perfect Candidate
            </span>
          </h1>
          <p className="mt-6 text-lg text-muted-foreground max-w-2xl mx-auto">
            The modern recruitment platform that connects talented professionals with
            innovative companies. Start your journey today.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mt-10">
            <Link to="/signup">
              <Button variant="hero" size="xl">
                Get Started
                <ArrowRight className="w-5 h-5" />
              </Button>
            </Link>
            <Link to="/login">
              <Button variant="outline" size="xl">
                I'm an Employer
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-card border-y border-border">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat) => (
              <div key={stat.label} className="text-center">
                <p className="text-3xl md:text-4xl font-bold text-primary">{stat.value}</p>
                <p className="text-muted-foreground mt-1">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground">
              Why Choose VentureMond?
            </h2>
            <p className="text-muted-foreground mt-4 max-w-2xl mx-auto">
              Everything you need to succeed in your job search or hiring process.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {features.map((feature) => (
              <div key={feature.title} className="stat-card text-center">
                <div className="w-14 h-14 rounded-xl gradient-hero flex items-center justify-center mx-auto text-primary-foreground">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-semibold mt-6 text-foreground">{feature.title}</h3>
                <p className="text-muted-foreground mt-3">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* For Job Seekers & Employers */}
      <section className="py-20 px-4 bg-card border-y border-border">
        <div className="container mx-auto">
          <div className="grid md:grid-cols-2 gap-12">
            {/* Job Seekers */}
            <div className="stat-card">
              <div className="flex items-center gap-3 mb-6">
                <div className="p-3 rounded-xl bg-primary/10 text-primary">
                  <Briefcase className="w-6 h-6" />
                </div>
                <h3 className="text-2xl font-bold text-foreground">For Job Seekers</h3>
              </div>
              <ul className="space-y-4">
                {[
                  "Create a professional profile",
                  "Get matched with relevant jobs",
                  "Track your applications",
                  "Direct messaging with employers"
                ].map((item) => (
                  <li key={item} className="flex items-center gap-3 text-foreground">
                    <CheckCircle2 className="w-5 h-5 text-success shrink-0" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
              <Link to="/signup" className="block mt-8">
                <Button className="w-full">Find Jobs</Button>
              </Link>
            </div>

            {/* Employers */}
            <div className="stat-card">
              <div className="flex items-center gap-3 mb-6">
                <div className="p-3 rounded-xl bg-accent/10 text-accent">
                  <Building2 className="w-6 h-6" />
                </div>
                <h3 className="text-2xl font-bold text-foreground">For Employers</h3>
              </div>
              <ul className="space-y-4">
                {[
                  "Post unlimited job listings",
                  "Access qualified candidates",
                  "Streamlined hiring process",
                  "Advanced applicant tracking"
                ].map((item) => (
                  <li key={item} className="flex items-center gap-3 text-foreground">
                    <CheckCircle2 className="w-5 h-5 text-success shrink-0" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
              <Link to="/signup" className="block mt-8">
                <Button variant="outline" className="w-full">Start Hiring</Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto">
          <div className="stat-card gradient-hero text-center py-16">
            <h2 className="text-3xl md:text-4xl font-bold text-primary-foreground">
              Ready to Get Started?
            </h2>
            <p className="text-primary-foreground/90 mt-4 max-w-xl mx-auto">
              Join thousands of professionals and companies already using VentureMond.
            </p>
            <Link to="/signup" className="inline-block mt-8">
              <Button variant="secondary" size="xl">
                Create Free Account
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 border-t border-border">
        <div className="container mx-auto px-4 text-center text-muted-foreground">
          <p>© 2024 VentureMond. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
};

export default Landing;
