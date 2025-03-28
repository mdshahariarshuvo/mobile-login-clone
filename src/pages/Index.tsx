
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Eye, EyeOff, Facebook } from "lucide-react";
import { useToast } from "@/components/ui/use-toast";

const Index = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const navigate = useNavigate();
  const { toast } = useToast();
  
  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email || !password) {
      toast({
        title: "Error",
        description: "Please enter your email and password",
        variant: "destructive",
      });
      return;
    }
    
    // In a real app, you would call an API to authenticate
    toast({
      title: "Success",
      description: "Logged in successfully",
    });
    
    // Clear form
    setEmail("");
    setPassword("");
  };
  
  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col justify-between">
      {/* Main content */}
      <div className="flex-1 flex flex-col p-4 items-center">
        {/* Facebook Logo */}
        <div className="w-full flex justify-center mt-12 mb-10">
          <div className="flex items-center">
            <Facebook className="h-12 w-12 text-blue-600" />
            <span className="text-blue-600 text-3xl font-bold ml-2">facebook</span>
          </div>
        </div>
        
        {/* Login Form */}
        <div className="w-full max-w-md">
          <form onSubmit={handleLogin} className="flex flex-col gap-4">
            <div className="relative">
              <input
                type="text"
                className="w-full p-3 border border-gray-300 rounded-md"
                placeholder="Email or phone number"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            
            <div className="relative">
              <input
                type={showPassword ? "text" : "password"}
                className="w-full p-3 border border-gray-300 rounded-md pr-10"
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
              <button 
                type="button"
                className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-500"
                onClick={togglePasswordVisibility}
              >
                {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
              </button>
            </div>
            
            <button
              type="submit"
              className="w-full bg-blue-600 text-white p-3 rounded-md font-bold text-lg"
            >
              Log In
            </button>
          </form>
          
          <div className="my-5 text-center">
            <a href="#" className="text-blue-600 text-sm">Forgot Password?</a>
          </div>
          
          <div className="flex items-center my-6">
            <div className="flex-1 border-t border-gray-300"></div>
            <div className="mx-4 text-gray-500 text-sm">or</div>
            <div className="flex-1 border-t border-gray-300"></div>
          </div>
          
          <div className="text-center">
            <button className="bg-green-500 text-white py-2 px-4 rounded-md font-semibold">
              Create New Account
            </button>
          </div>
        </div>
      </div>
      
      {/* Footer */}
      <footer className="p-4 text-center text-xs text-gray-500">
        <div className="flex justify-center gap-2 mb-3">
          <a href="#" className="hover:underline">English (US)</a>
          <a href="#" className="hover:underline">Español</a>
          <a href="#" className="hover:underline">Français</a>
          <a href="#" className="hover:underline">More...</a>
        </div>
        <p>Facebook Inc.</p>
      </footer>
    </div>
  );
};

export default Index;
