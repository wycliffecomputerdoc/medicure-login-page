
import React from "react";
import AuthLayout from "@/components/layouts/AuthLayout";
import AuthForm from "@/components/auth/AuthForm";
import { useToast } from "@/hooks/use-toast";
import { useNavigate, Link } from "react-router-dom";

const SignIn: React.FC = () => {
  const { toast } = useToast();
  const navigate = useNavigate();

  const signInFields = [
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
      placeholder: "Enter your password",
      required: true,
      autoComplete: "current-password",
    },
  ];

  const handleSignIn = (data: Record<string, string>) => {
    console.log("Sign in data:", data);
    
    // This is a mock sign-in for demonstration
    // In a real app, you would call your authentication service here
    setTimeout(() => {
      toast({
        title: "Sign in successful",
        description: "Welcome back to MediCare!",
      });
      navigate("/");
    }, 1000);
  };

  return (
    <AuthLayout
      title="Welcome back"
      subtitle="Sign in to your MediCare account"
      isSignIn={true}
    >
      <AuthForm
        fields={signInFields}
        submitLabel="Sign In"
        onSubmit={handleSignIn}
        rememberMe={true}
      />
      
      <div className="mt-4 text-center">
        <Link 
          to="/forgot-password" 
          className="text-medical-red text-sm hover:underline"
        >
          Forgot your password?
        </Link>
      </div>
    </AuthLayout>
  );
};

export default SignIn;
