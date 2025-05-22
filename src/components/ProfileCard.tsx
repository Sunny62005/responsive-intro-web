
import React from "react";
import { Card, CardContent, CardHeader } from "@/components/ui/card";

const ProfileCard = () => {
  return (
    <Card className="overflow-hidden">
      <div className="h-48 bg-gradient-to-r from-purple-400 to-pink-500"></div>
      <CardHeader className="relative">
        <div className="absolute -top-12 left-4 border-4 border-white rounded-full overflow-hidden">
          <img 
            src="/placeholder.svg" 
            alt="Profile" 
            className="h-24 w-24 object-cover"
          />
        </div>
      </CardHeader>
      <CardContent className="pt-16">
        <h2 className="text-2xl font-bold">Alex Johnson</h2>
        <p className="text-muted-foreground">Software Developer</p>
        <p className="mt-4">
          Based in San Francisco, CA. Passionate about creating impactful digital experiences
          that solve real-world problems.
        </p>
        <div className="mt-6">
          <h3 className="font-semibold mb-2">Contact:</h3>
          <div className="flex flex-wrap gap-4 text-sm">
            <a href="mailto:alex@example.com" className="flex items-center text-blue-600 hover:underline">
              alex@example.com
            </a>
            <a href="tel:+11234567890" className="flex items-center text-blue-600 hover:underline">
              +1 (123) 456-7890
            </a>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default ProfileCard;
