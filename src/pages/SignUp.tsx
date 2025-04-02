
import React from "react";
import AuthLayout from "@/components/layouts/AuthLayout";
import AuthForm from "@/components/auth/AuthForm";
import { useToast } from "@/hooks/use-toast";
import { useNavigate } from "react-router-dom";

const SignUp: React.FC = () => {
  const { toast } = useToast();
  const navigate = useNavigate();

  const signUpFields = [
    {
      id: "fullName",
      label: "Full Name",
      type: "text",
      placeholder: "Enter your full name",
      required: true,
      autoComplete: "name",
    },
    {
      id: "email",
      label: "Email",
      type: "email",
      placeholder: "Enter your email",
      required: true,
      autoComplete: "email",
    },
    {
      id: "password",
      label: "Password",
      type: "password",
      placeholder: "Create a password",
      required: true,
      autoComplete: "new-password",
    },
    {
      id: "confirmPassword",
      label: "Confirm Password",
      type: "password",
      placeholder: "Confirm your password",
      required: true,
      autoComplete: "new-password",
    },
  ];

  const handleSignUp = (data: Record<string, string>) => {
    console.log("Sign up data:", data);
    
    // This is a mock sign-up for demonstration
    // In a real app, you would call your registration service here
    setTimeout(() => {
      toast({
        title: "Account created successfully",
        description: "Welcome to MediCare! You can now sign in.",
      });
      navigate("/signin");
    }, 1000);
  };

  return (
    <AuthLayout
      title="Create an account"
      subtitle="Join MediCare for personalized healthcare"
      isSignIn={false}
    >
      <AuthForm
        fields={signUpFields}
        submitLabel="Create Account"
        onSubmit={handleSignUp}
      />
      
      <div className="mt-4 text-center text-xs text-gray-500">
        By creating an account, you agree to our{" "}
        <a href="/terms" className="text-medical-red hover:underline">
          Terms of Service
        </a>{" "}
        and{" "}
        <a href="/privacy" className="text-medical-red hover:underline">
          Privacy Policy
        </a>
      </div>
    </AuthLayout>
  );
};

export default SignUp;
