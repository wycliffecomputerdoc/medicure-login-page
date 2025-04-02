
import React from "react";
import AuthLayout from "@/components/layouts/AuthLayout";
import AuthForm from "@/components/auth/AuthForm";
import { useToast } from "@/hooks/use-toast";
import { useNavigate, Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Mail, ExternalLink } from "lucide-react";

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

  const handleGoogleSignIn = () => {
    // Mock Google sign-in
    toast({
      title: "Google Sign In",
      description: "Connecting to Google...",
    });
    
    // In a real app, you would implement Google OAuth here
    setTimeout(() => {
      toast({
        title: "Sign in successful",
        description: "Welcome back to MediCare!",
      });
      navigate("/");
    }, 1500);
  };

  return (
    <AuthLayout
      title="Welcome back"
      subtitle="Sign in to your MediCare account"
      isSignIn={true}
    >
      <div className="flex flex-col space-y-4 mb-6">
        <Button 
          className="w-full border border-gray-300 bg-white text-gray-700 hover:bg-gray-50"
          onClick={handleGoogleSignIn}
        >
          <ExternalLink className="mr-2 h-4 w-4" />
          Continue with Google
        </Button>
        
        <div className="relative">
          <div className="absolute inset-0 flex items-center">
            <div className="w-full border-t border-gray-300"></div>
          </div>
          <div className="relative flex justify-center text-sm">
            <span className="px-2 bg-white text-gray-500">
              or continue with email
            </span>
          </div>
        </div>
      </div>
      
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
