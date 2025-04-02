
import React from "react";
import { Heart } from "lucide-react";
import { Link } from "react-router-dom";

interface AuthLayoutProps {
  children: React.ReactNode;
  title: string;
  subtitle: string;
  isSignIn?: boolean;
}

const AuthLayout: React.FC<AuthLayoutProps> = ({
  children,
  title,
  subtitle,
  isSignIn = false,
}) => {
  return (
    <div className="flex min-h-screen flex-col md:flex-row">
      {/* Left panel - only visible on md and above */}
      <div className="hidden md:flex md:w-1/2 bg-medical-red flex-col items-center justify-center text-white p-8">
        <div className="max-w-md text-center">
          <div className="flex justify-center mb-6">
            <Heart size={48} className="animate-pulse" />
          </div>
          <h1 className="text-3xl font-bold mb-4">MediCare Health Portal</h1>
          <p className="text-lg mb-8">
            Your health is our priority. Join our platform for personalized care and expert medical advice.
          </p>
          <div className="grid grid-cols-2 gap-4 mb-8">
            <div className="bg-white/10 p-4 rounded-lg">
              <h3 className="font-semibold mb-2">Expert Doctors</h3>
              <p className="text-sm">Access to certified medical professionals</p>
            </div>
            <div className="bg-white/10 p-4 rounded-lg">
              <h3 className="font-semibold mb-2">24/7 Support</h3>
              <p className="text-sm">Round-the-clock medical assistance</p>
            </div>
            <div className="bg-white/10 p-4 rounded-lg">
              <h3 className="font-semibold mb-2">Medical Records</h3>
              <p className="text-sm">Secure storage of your health data</p>
            </div>
            <div className="bg-white/10 p-4 rounded-lg">
              <h3 className="font-semibold mb-2">Appointments</h3>
              <p className="text-sm">Easy scheduling with your doctors</p>
            </div>
          </div>
        </div>
      </div>

      {/* Right panel - Form */}
      <div className="w-full md:w-1/2 flex flex-col items-center justify-center p-6 md:p-12 bg-white">
        <div className="w-full max-w-md">
          {/* Logo for mobile view */}
          <div className="flex items-center justify-center mb-8 md:hidden">
            <Heart size={32} className="text-medical-red mr-2" />
            <span className="font-bold text-xl">MediCare</span>
          </div>

          <h2 className="text-2xl font-bold mb-2 text-gray-900">{title}</h2>
          <p className="text-gray-600 mb-8">{subtitle}</p>

          {children}

          <div className="mt-8 text-center">
            <p className="text-gray-600">
              {isSignIn ? "Don't have an account?" : "Already have an account?"}
              <Link
                to={isSignIn ? "/signup" : "/signin"}
                className="text-medical-red font-semibold ml-1 hover:underline"
              >
                {isSignIn ? "Sign up" : "Sign in"}
              </Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AuthLayout;
