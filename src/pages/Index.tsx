
import React from "react";
import { Link } from "react-router-dom";
import { Heart } from "lucide-react";
import { Button } from "@/components/ui/button";

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col">
      {/* Navigation Bar */}
      <nav className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16">
            <div className="flex items-center">
              <Heart className="h-8 w-8 text-medical-red" />
              <span className="ml-2 text-xl font-bold">MediCare</span>
            </div>
            <div className="flex items-center space-x-4">
              <Link 
                to="/signin" 
                className="text-gray-600 hover:text-medical-red transition-colors"
              >
                Sign In
              </Link>
              <Link to="/signup">
                <Button className="bg-medical-red hover:bg-medical-red/90 text-white">
                  Sign Up
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <main className="flex-grow">
        <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:py-16 lg:px-8">
          <div className="lg:grid lg:grid-cols-2 lg:gap-8 items-center">
            <div>
              <h1 className="text-4xl font-extrabold tracking-tight text-gray-900 sm:text-5xl md:text-6xl">
                <span className="block">Your Health,</span>
                <span className="block text-medical-red">Our Priority</span>
              </h1>
              <p className="mt-3 max-w-md text-lg text-gray-500 sm:text-xl md:mt-5">
                Welcome to MediCare, your trusted partner in healthcare. Sign up today to access personalized medical services and expert care.
              </p>
              <div className="mt-8 flex space-x-4">
                <Link to="/signup">
                  <Button className="bg-medical-red hover:bg-medical-red/90 text-white px-6 py-3">
                    Get Started
                  </Button>
                </Link>
                <Link to="/signin">
                  <Button variant="outline" className="border-medical-red text-medical-red hover:bg-medical-red/10 px-6 py-3">
                    Sign In
                  </Button>
                </Link>
              </div>
            </div>
            <div className="mt-12 lg:mt-0 flex justify-center">
              <img
                className="h-auto w-full max-w-lg rounded-lg shadow-xl"
                src="https://images.unsplash.com/photo-1576091160550-2173dba999ef?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80"
                alt="Healthcare professionals"
              />
            </div>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="bg-gray-50 border-t">
        <div className="max-w-7xl mx-auto py-8 px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <p className="text-gray-500 text-sm">
              © 2023 MediCare. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
