import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { ArrowLeft, Mail } from "lucide-react";

const ForgotPassword = () => {
  return (
    <div className="min-h-screen bg-background flex items-center justify-center p-8">
      <div className="w-full max-w-md">
        <Link to="/login" className="inline-flex items-center gap-2 text-muted-foreground hover:text-foreground mb-8">
          <ArrowLeft className="w-4 h-4" />
          Back to login
        </Link>

        <div className="flex items-center gap-2 mb-8">
          <div className="w-10 h-10 rounded-lg gradient-hero flex items-center justify-center">
            <span className="text-primary-foreground font-bold">RP</span>
          </div>
          <span className="font-semibold text-xl text-foreground">RecruitPro</span>
        </div>

        <div className="stat-card">
          <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mx-auto">
            <Mail className="w-7 h-7 text-primary" />
          </div>

          <h1 className="text-2xl font-bold text-foreground text-center mt-6">
            Forgot your password?
          </h1>
          <p className="text-muted-foreground mt-2 text-center">
            No worries, we'll send you reset instructions.
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

            <Button className="w-full h-11" type="submit">
              Send Reset Link
            </Button>
          </form>

          <p className="text-center text-muted-foreground mt-6">
            Remember your password?{" "}
            <Link to="/login" className="text-primary hover:underline font-medium">
              Sign in
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default ForgotPassword;
