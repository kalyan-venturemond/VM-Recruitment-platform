import { Link, useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Logo } from "@/components/common/Logo";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { ArrowLeft, Briefcase, Building2 } from "lucide-react";
import { useState } from "react";

const Signup = () => {
  const [role, setRole] = useState("seeker");
  const navigate = useNavigate();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // TEMP / DUMMY AUTH FLOW
    if (role === "employer") {
      navigate("/employer/dashboard");
    } else {
      navigate("/seeker/dashboard");
    }
  };

  return (
    <div className="min-h-screen bg-background flex">
      {/* Left side - Form */}
      <div className="flex-1 flex items-center justify-center p-8">
        <div className="w-full max-w-md">
          <Link to="/" className="inline-flex items-center gap-2 text-muted-foreground hover:text-foreground mb-8">
            <ArrowLeft className="w-4 h-4" />
            Back to home
          </Link>

          <div className="mb-8">
            <Logo />
          </div>

          <h1 className="text-3xl font-bold text-foreground">Create an account</h1>
          <p className="text-muted-foreground mt-2">
            Get started with VentureMond today
          </p>

          <form className="mt-8 space-y-6" onSubmit={handleSubmit}>
            <div className="space-y-2">
              <Label htmlFor="name">Full Name</Label>
              <Input
                id="name"
                type="text"
                placeholder="John Doe"
                className="h-11"
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="email">Email</Label>
              <Input
                id="email"
                type="email"
                placeholder="you@example.com"
                className="h-11"
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="password">Password</Label>
              <Input
                id="password"
                type="password"
                placeholder="••••••••"
                className="h-11"
              />
            </div>

            <div className="space-y-3">
              <Label>I want to</Label>
              <RadioGroup value={role} onValueChange={setRole} className="grid grid-cols-2 gap-4">
                <div>
                  <RadioGroupItem value="seeker" id="seeker" className="peer sr-only" />
                  <Label
                    htmlFor="seeker"
                    className="flex flex-col items-center justify-center rounded-lg border-2 border-input bg-card p-4 hover:bg-muted cursor-pointer peer-data-[state=checked]:border-primary peer-data-[state=checked]:bg-primary/5"
                  >
                    <Briefcase className="w-6 h-6 mb-2 text-primary" />
                    <span className="font-medium">Find a Job</span>
                  </Label>
                </div>
                <div>
                  <RadioGroupItem value="employer" id="employer" className="peer sr-only" />
                  <Label
                    htmlFor="employer"
                    className="flex flex-col items-center justify-center rounded-lg border-2 border-input bg-card p-4 hover:bg-muted cursor-pointer peer-data-[state=checked]:border-primary peer-data-[state=checked]:bg-primary/5"
                  >
                    <Building2 className="w-6 h-6 mb-2 text-primary" />
                    <span className="font-medium">Hire Talent</span>
                  </Label>
                </div>
              </RadioGroup>
            </div>

            <Button className="w-full h-11" type="submit">
              Create Account
            </Button>
          </form>

          <p className="text-center text-muted-foreground mt-8">
            Already have an account?{" "}
            <Link to="/login" className="text-primary hover:underline font-medium">
              Sign in
            </Link>
          </p>
        </div>
      </div>

      {/* Right side - Visual */}
      <div className="hidden lg:flex flex-1 gradient-hero items-center justify-center p-12">
        <div className="max-w-md text-primary-foreground text-center">
          <h2 className="text-3xl font-bold">Start Your Journey</h2>
          <p className="mt-4 text-primary-foreground/90">
            Join thousands of professionals and companies already benefiting
            from our platform.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Signup;
