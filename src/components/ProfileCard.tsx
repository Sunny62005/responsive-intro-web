
import React from "react";
import { Card, CardContent, CardHeader } from "@/components/ui/card";

const ProfileCard = () => {
  return (
    <Card className="overflow-hidden">
      <div className="h-48 bg-gradient-to-r from-teal-400 to-blue-500"></div>
      <CardHeader className="relative">
      </CardHeader>
      <CardContent className="pt-6">
        <h2 className="text-2xl font-bold">Sunny Pharande</h2>
        <p className="text-muted-foreground">Software Developer</p>
        <p className="mt-4">
          Based in Palghar, Maharashtra. Passionate about creating impactful digital experiences
          that solve real-world problems.
        </p>
        <div className="mt-6">
          <h3 className="font-semibold mb-2">Contact:</h3>
          <div className="flex flex-wrap gap-4 text-sm">
            <a href="mailto:sunnypharande777@gmail.com" className="flex items-center text-blue-600 hover:underline">
              sunnypharande777@gmail.com
            </a>
            <a href="tel:+918847782768" className="flex items-center text-blue-600 hover:underline">
              +91 8847782768
            </a>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default ProfileCard;
