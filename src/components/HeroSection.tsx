
import React from "react";
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";

const HeroSection = () => {
  const navigate = useNavigate();
  
  return (
    <div className="relative bg-gradient-to-r from-purple-600 to-blue-500">
      <div className="container mx-auto px-4 py-24 md:py-32">
        <div className="max-w-2xl">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
            Welcome to My Portfolio
          </h1>
          <p className="text-lg md:text-xl text-white/90 mb-8">
            Hi, I'm Alex Johnson. I'm passionate about creating
            beautiful digital experiences and solving complex problems with elegant solutions.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Button 
              onClick={() => navigate("/about")}
              size="lg" 
              className="bg-white text-purple-600 hover:bg-gray-100"
            >
              Learn About Me
            </Button>
            <Button 
              onClick={() => navigate("/contact")}
              size="lg" 
              variant="outline" 
              className="border-white text-white hover:bg-white/10"
            >
              Get in Touch
            </Button>
          </div>
        </div>
      </div>
      <div className="absolute inset-0 bg-gradient-to-b from-transparent to-white/20 pointer-events-none"></div>
    </div>
  );
};

export default HeroSection;
