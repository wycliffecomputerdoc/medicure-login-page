
import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Checkbox } from "@/components/ui/checkbox";
import { useToast } from "@/hooks/use-toast";
import { EyeIcon, EyeOffIcon } from "lucide-react";

interface FormField {
  id: string;
  label: string;
  type: string;
  placeholder: string;
  required?: boolean;
  autoComplete?: string;
}

interface AuthFormProps {
  fields: FormField[];
  submitLabel: string;
  onSubmit: (data: Record<string, string>) => void;
  isLoading?: boolean;
  rememberMe?: boolean;
}

const AuthForm: React.FC<AuthFormProps> = ({
  fields,
  submitLabel,
  onSubmit,
  isLoading = false,
  rememberMe = false,
}) => {
  const { toast } = useToast();
  const [formData, setFormData] = useState<Record<string, string>>({});
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [showPassword, setShowPassword] = useState(false);

  const validateForm = () => {
    const newErrors: Record<string, string> = {};
    let isValid = true;

    fields.forEach((field) => {
      if (field.required && !formData[field.id]) {
        newErrors[field.id] = `${field.label} is required`;
        isValid = false;
      }

      if (field.id === "email" && formData[field.id]) {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(formData[field.id])) {
          newErrors[field.id] = "Please enter a valid email address";
          isValid = false;
        }
      }

      if (field.id === "password" && formData[field.id]) {
        if (formData[field.id].length < 8) {
          newErrors[field.id] = "Password must be at least 8 characters";
          isValid = false;
        }
      }

      if (field.id === "confirmPassword" && formData[field.id]) {
        if (formData[field.id] !== formData["password"]) {
          newErrors[field.id] = "Passwords do not match";
          isValid = false;
        }
      }
    });

    setErrors(newErrors);
    return isValid;
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
    
    // Clear error when user starts typing
    if (errors[name]) {
      setErrors({ ...errors, [name]: "" });
    }
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    
    if (validateForm()) {
      try {
        onSubmit(formData);
      } catch (error) {
        toast({
          variant: "destructive",
          title: "Error",
          description: "Something went wrong. Please try again.",
        });
      }
    } else {
      toast({
        variant: "destructive",
        title: "Form validation failed",
        description: "Please check the form for errors.",
      });
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4 w-full">
      {fields.map((field) => (
        <div key={field.id} className="space-y-2">
          <Label htmlFor={field.id} className="text-gray-700">
            {field.label}
            {field.required && <span className="text-medical-red ml-1">*</span>}
          </Label>
          <div className="relative">
            <Input
              id={field.id}
              name={field.id}
              type={
                field.type === "password"
                  ? showPassword
                    ? "text"
                    : "password"
                  : field.type
              }
              placeholder={field.placeholder}
              autoComplete={field.autoComplete}
              className={`w-full ${
                errors[field.id] ? "border-medical-red focus:border-medical-red" : ""
              }`}
              value={formData[field.id] || ""}
              onChange={handleChange}
            />
            {(field.type === "password") && (
              <Button
                type="button"
                variant="ghost"
                size="sm"
                className="absolute right-2 top-1/2 transform -translate-y-1/2 h-8 w-8 p-0"
                onClick={() => setShowPassword(!showPassword)}
              >
                {showPassword ? (
                  <EyeOffIcon className="h-4 w-4 text-gray-500" />
                ) : (
                  <EyeIcon className="h-4 w-4 text-gray-500" />
                )}
              </Button>
            )}
          </div>
          {errors[field.id] && (
            <p className="text-medical-red text-sm">{errors[field.id]}</p>
          )}
        </div>
      ))}

      {rememberMe && (
        <div className="flex items-center space-x-2">
          <Checkbox id="remember" />
          <Label htmlFor="remember" className="text-gray-600 text-sm cursor-pointer">
            Remember me
          </Label>
        </div>
      )}

      <Button
        type="submit"
        className="w-full bg-medical-red hover:bg-medical-red/90 text-white transition-colors"
        disabled={isLoading}
      >
        {isLoading ? "Processing..." : submitLabel}
      </Button>
    </form>
  );
};

export default AuthForm;
