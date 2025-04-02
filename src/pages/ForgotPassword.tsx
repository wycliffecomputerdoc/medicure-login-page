
import React, { useState } from "react";
import AuthLayout from "@/components/layouts/AuthLayout";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useToast } from "@/hooks/use-toast";
import { useNavigate } from "react-router-dom";
import { Mail } from "lucide-react";

const ForgotPassword: React.FC = () => {
  const { toast } = useToast();
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [emailSent, setEmailSent] = useState(false);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    
    // Validate email
    if (!email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      toast({
        variant: "destructive",
        title: "Invalid email",
        description: "Please enter a valid email address."
      });
      return;
    }

    // Mock password reset request
    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setEmailSent(true);
      toast({
        title: "Reset link sent",
        description: "Check your email for password reset instructions.",
      });
    }, 1500);
  };

  return (
    <AuthLayout
      title="Forgot Password"
      subtitle="Enter your email to receive a password reset link"
      isSignIn={false}
    >
      {!emailSent ? (
        <form onSubmit={handleSubmit} className="space-y-4 w-full">
          <div className="space-y-2">
            <Label htmlFor="email" className="text-gray-700">
              Email Address <span className="text-medical-red ml-1">*</span>
            </Label>
            <div className="relative">
              <Input
                id="email"
                type="email"
                placeholder="Enter your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full pl-10"
                autoComplete="email"
                required
              />
              <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
            </div>
          </div>

          <Button
            type="submit"
            className="w-full bg-medical-red hover:bg-medical-red/90 text-white transition-colors"
            disabled={isSubmitting}
          >
            {isSubmitting ? "Sending..." : "Send Reset Link"}
          </Button>
        </form>
      ) : (
        <div className="text-center space-y-6 py-4">
          <div className="rounded-full bg-green-100 p-3 w-16 h-16 mx-auto flex items-center justify-center">
            <Mail className="h-8 w-8 text-green-600" />
          </div>
          <div className="space-y-2">
            <h3 className="text-lg font-medium">Check your email</h3>
            <p className="text-gray-600">
              We've sent a password reset link to <span className="font-medium">{email}</span>
            </p>
          </div>
          <div className="pt-4">
            <Button
              type="button"
              variant="outline"
              className="mr-2"
              onClick={() => setEmailSent(false)}
            >
              Try another email
            </Button>
            <Button
              type="button"
              onClick={() => navigate("/signin")}
            >
              Back to Sign In
            </Button>
          </div>
        </div>
      )}

      <div className="mt-8 text-center">
        <p className="text-gray-600">
          Remember your password?{" "}
          <a
            href="/signin"
            className="text-medical-red font-semibold hover:underline"
          >
            Sign in
          </a>
        </p>
      </div>
    </AuthLayout>
  );
};

export default ForgotPassword;
