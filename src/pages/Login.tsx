import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { ArrowLeft } from "lucide-react";

const Login = () => {
  return (
    <div className="min-h-screen bg-background flex">
      {/* Left side - Form */}
      <div className="flex-1 flex items-center justify-center p-8">
        <div className="w-full max-w-md">
          <Link to="/" className="inline-flex items-center gap-2 text-muted-foreground hover:text-foreground mb-8">
            <ArrowLeft className="w-4 h-4" />
            Back to home
          </Link>

          <div className="flex items-center gap-2 mb-8">
            <div className="w-10 h-10 rounded-lg gradient-hero flex items-center justify-center">
              <span className="text-primary-foreground font-bold">RP</span>
            </div>
            <span className="font-semibold text-xl text-foreground">RecruitPro</span>
          </div>

          <h1 className="text-3xl font-bold text-foreground">Welcome back</h1>
          <p className="text-muted-foreground mt-2">
            Sign in to your account to continue
          </p>

          <form className="mt-8 space-y-6">
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
              <div className="flex items-center justify-between">
                <Label htmlFor="password">Password</Label>
                <Link to="/forgot-password" className="text-sm text-primary hover:underline">
                  Forgot password?
                </Link>
              </div>
              <Input 
                id="password" 
                type="password" 
                placeholder="••••••••"
                className="h-11"
              />
            </div>

            <Button className="w-full h-11" type="submit">
              Sign In
            </Button>
          </form>

          <p className="text-center text-muted-foreground mt-8">
            Don't have an account?{" "}
            <Link to="/signup" className="text-primary hover:underline font-medium">
              Sign up
            </Link>
          </p>

          {/* Demo links */}
          <div className="mt-12 pt-8 border-t border-border">
            <p className="text-sm text-muted-foreground mb-4 text-center">
              Quick Demo Access:
            </p>
            <div className="grid grid-cols-3 gap-3">
              <Link to="/seeker/dashboard">
                <Button variant="outline" size="sm" className="w-full">
                  Job Seeker
                </Button>
              </Link>
              <Link to="/employer/dashboard">
                <Button variant="outline" size="sm" className="w-full">
                  Employer
                </Button>
              </Link>
              <Link to="/admin/dashboard">
                <Button variant="outline" size="sm" className="w-full">
                  Admin
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Right side - Visual */}
      <div className="hidden lg:flex flex-1 gradient-hero items-center justify-center p-12">
        <div className="max-w-md text-primary-foreground text-center">
          <h2 className="text-3xl font-bold">Find Your Perfect Match</h2>
          <p className="mt-4 text-primary-foreground/90">
            Whether you're looking for your dream job or the perfect candidate, 
            RecruitPro makes the connection seamless.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login;
