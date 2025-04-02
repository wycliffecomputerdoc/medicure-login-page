
import React, { useState } from "react";
import { useToast } from "@/hooks/use-toast";
import { useNavigate, Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Checkbox } from "@/components/ui/checkbox";
import { Mail, ChevronRight } from "lucide-react";

const SignIn: React.FC = () => {
  const { toast } = useToast();
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSignIn = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Sign in data:", { email, password });
    
    // This is a mock sign-in for demonstration
    setTimeout(() => {
      toast({
        title: "Sign in successful",
        description: "Welcome back to MediCare!",
      });
      navigate("/");
    }, 1000);
  };

  return (
    <div className="min-h-screen bg-medical-red flex items-center justify-center px-4">
      <div className="w-full max-w-md">
        <div className="relative z-10 bg-white rounded-3xl shadow-lg overflow-hidden">
          {/* Tabs */}
          <div className="flex border-b">
            <Link
              to="/signup"
              className="w-1/2 py-4 text-center text-gray-500 hover:text-gray-700"
            >
              sign up
            </Link>
            <Link
              to="/signin"
              className="w-1/2 py-4 text-center border-b-2 border-medical-red text-medical-red font-medium"
            >
              login
            </Link>
          </div>

          {/* Form */}
          <div className="p-8">
            <form onSubmit={handleSignIn}>
              <div className="space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="email" className="text-gray-500 text-sm">
                    e-mail <span className="text-medical-red">*</span>
                  </Label>
                  <Input
                    id="email"
                    type="email"
                    placeholder="your.email@example.com"
                    className="rounded-full border-gray-300"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="password" className="text-gray-500 text-sm">
                    password <span className="text-medical-red">*</span>
                  </Label>
                  <Input
                    id="password"
                    type="password"
                    placeholder="••••••••"
                    className="rounded-full border-gray-300"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required
                  />
                </div>

                <div className="flex items-center space-x-2 mt-4">
                  <Checkbox id="remember" />
                  <Label 
                    htmlFor="remember" 
                    className="text-xs text-gray-500 cursor-pointer"
                  >
                    I have accepted the privacy statement and conditions
                  </Label>
                </div>

                <div className="pt-4">
                  <Button 
                    type="submit" 
                    className="rounded-full bg-medical-red hover:bg-medical-red/90 flex items-center space-x-1 w-auto px-6 float-right"
                  >
                    <span>sign in</span>
                    <ChevronRight className="h-4 w-4" />
                  </Button>
                </div>
              </div>
            </form>
          </div>
        </div>

        {/* Decorative Bubbles */}
        <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
          <div className="absolute -top-20 -left-20 w-80 h-80 bg-medical-red/20 rounded-full blur-md"></div>
          <div className="absolute top-40 -left-40 w-96 h-96 bg-medical-red/30 rounded-full blur-md"></div>
          <div className="absolute -bottom-40 right-10 w-80 h-80 bg-medical-red/20 rounded-full blur-md"></div>
        </div>
      </div>
    </div>
  );
};

export default SignIn;
