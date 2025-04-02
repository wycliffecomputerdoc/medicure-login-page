
import React, { useState } from "react";
import AuthLayout from "@/components/layouts/AuthLayout";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useToast } from "@/hooks/use-toast";
import { useNavigate } from "react-router-dom";
import { Mail, Phone } from "lucide-react";

const ForgotPassword: React.FC = () => {
  const { toast } = useToast();
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [emailSent, setEmailSent] = useState(false);
  const [verificationMethod, setVerificationMethod] = useState<"email" | "phone">("email");

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    
    // Validate form
    if (verificationMethod === "email") {
      if (!email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
        toast({
          variant: "destructive",
          title: "Invalid email",
          description: "Please enter a valid email address."
        });
        return;
      }
    } else {
      if (!phoneNumber || !/^\+?[0-9]{10,15}$/.test(phoneNumber)) {
        toast({
          variant: "destructive",
          title: "Invalid phone number",
          description: "Please enter a valid phone number."
        });
        return;
      }
    }

    // Mock password reset request
    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setEmailSent(true);
      toast({
        title: "Verification sent",
        description: verificationMethod === "email" 
          ? "Check your email for password reset instructions." 
          : "Check your phone for the verification code.",
      });
    }, 1500);
  };

  return (
    <AuthLayout
      title="Forgot Password"
      subtitle="Receive a password reset link via email or phone"
      isSignIn={false}
    >
      {!emailSent ? (
        <form onSubmit={handleSubmit} className="space-y-4 w-full">
          <div className="flex space-x-4 mb-4">
            <Button
              type="button"
              variant={verificationMethod === "email" ? "default" : "outline"}
              className={verificationMethod === "email" ? "bg-medical-red hover:bg-medical-red/90 text-white" : ""}
              onClick={() => setVerificationMethod("email")}
            >
              Email
            </Button>
            <Button
              type="button"
              variant={verificationMethod === "phone" ? "default" : "outline"}
              className={verificationMethod === "phone" ? "bg-medical-red hover:bg-medical-red/90 text-white" : ""}
              onClick={() => setVerificationMethod("phone")}
            >
              Phone
            </Button>
          </div>

          {verificationMethod === "email" ? (
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
          ) : (
            <div className="space-y-2">
              <Label htmlFor="phone" className="text-gray-700">
                Phone Number <span className="text-medical-red ml-1">*</span>
              </Label>
              <div className="relative">
                <Input
                  id="phone"
                  type="tel"
                  placeholder="Enter your phone number"
                  value={phoneNumber}
                  onChange={(e) => setPhoneNumber(e.target.value)}
                  className="w-full pl-10"
                  autoComplete="tel"
                  required
                />
                <Phone className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
              </div>
            </div>
          )}

          <Button
            type="submit"
            className="w-full bg-medical-red hover:bg-medical-red/90 text-white transition-colors"
            disabled={isSubmitting}
          >
            {isSubmitting ? "Sending..." : `Send Reset Link${verificationMethod === "phone" ? " via SMS" : ""}`}
          </Button>
        </form>
      ) : (
        <div className="text-center space-y-6 py-4">
          <div className="rounded-full bg-green-100 p-3 w-16 h-16 mx-auto flex items-center justify-center">
            {verificationMethod === "email" ? (
              <Mail className="h-8 w-8 text-green-600" />
            ) : (
              <Phone className="h-8 w-8 text-green-600" />
            )}
          </div>
          <div className="space-y-2">
            <h3 className="text-lg font-medium">Check your {verificationMethod === "email" ? "email" : "phone"}</h3>
            <p className="text-gray-600">
              {verificationMethod === "email" ? (
                <>We've sent a password reset link to <span className="font-medium">{email}</span></>
              ) : (
                <>We've sent a verification code to <span className="font-medium">{phoneNumber}</span></>
              )}
            </p>
          </div>
          <div className="pt-4">
            <Button
              type="button"
              variant="outline"
              className="mr-2"
              onClick={() => setEmailSent(false)}
            >
              Try again
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
