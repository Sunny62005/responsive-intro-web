import React, { useEffect, useState } from "react";
import HeroSection from "@/components/HeroSection";
import ProfileCard from "@/components/ProfileCard";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";
import { ExternalLink } from "lucide-react";

interface ProfileData {
  name: string;
  title: string;
  bio: string;
  videoIntro: string;
}

const Index = () => {
  const [profileData, setProfileData] = useState<ProfileData | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const navigate = useNavigate();

  const dayAssignments = [
    { day: "Day 1", url: "https://soft-raindrop-493f16.netlify.app/" },
    { day: "Day 2", url: "https://delightful-clafoutis-0b8aa1.netlify.app/" },
    { day: "Day 3", url: "https://sunny62005.github.io/Sunny1/" },
    { day: "Day 4", url: "https://responsive-intro-web.lovable.app/about" },
    { day: "Day 5", url: "https://responsive-intro-web.lovable.app/about" }
  ];

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('/src/data/data.json');
        const data = await response.json();
        setProfileData(data.profile);
      } catch (error) {
        console.error('Error fetching data:', error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchData();
  }, []);

  if (isLoading) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <div className="text-center">
          <p className="text-lg">Loading...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen">
      <HeroSection />
      
      <div className="container mx-auto px-4 py-16">
        {/* Daywise Assignments Section */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold mb-8 text-center">Daywise Assignments</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
            {dayAssignments.map((assignment, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow">
                <CardContent className="p-4">
                  <Button
                    onClick={() => window.open(assignment.url, '_blank')}
                    className="w-full bg-teal-600 hover:bg-teal-700 text-white"
                  >
                    <ExternalLink className="mr-2 h-4 w-4" />
                    {assignment.day}
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          <div>
            <h2 className="text-3xl font-bold mb-6">About Me</h2>
            <ProfileCard />
            <div className="mt-8 flex">
              <Button onClick={() => navigate("/about")} className="bg-teal-600 hover:bg-teal-700">
                Learn More
              </Button>
            </div>
          </div>
          
          <div>
            <h2 className="text-3xl font-bold mb-6">Video Introduction</h2>
            <Card>
              <CardContent className="p-0">
                <div className="aspect-video">
                  <iframe
                    src="https://www.youtube.com/embed/HXHphpDJ9T0?si=03oqu9YuNm7RUUKo"
                    title="Video Introduction"
                    className="w-full h-full"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                  ></iframe>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>

        <div className="mt-20">
          <h2 className="text-3xl font-bold mb-8 text-center">Explore My Portfolio</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            <Card className="hover:shadow-lg transition-shadow">
              <CardContent className="p-6">
                <h3 className="text-xl font-bold mb-2">Achievements</h3>
                <p className="text-gray-600 dark:text-gray-400 mb-4">
                  Explore my professional accomplishments and recognitions.
                </p>
                <Button variant="outline" onClick={() => navigate("/achievements")} className="w-full">
                  View Achievements
                </Button>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow">
              <CardContent className="p-6">
                <h3 className="text-xl font-bold mb-2">Personal Interests</h3>
                <p className="text-gray-600 dark:text-gray-400 mb-4">
                  Learn about my hobbies, favorite books, and role models.
                </p>
                <Button variant="outline" onClick={() => navigate("/personal")} className="w-full">
                  Discover More
                </Button>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow">
              <CardContent className="p-6">
                <h3 className="text-xl font-bold mb-2">Contact Me</h3>
                <p className="text-gray-600 dark:text-gray-400 mb-4">
                  Get in touch for collaboration opportunities or just to say hi!
                </p>
                <Button variant="outline" onClick={() => navigate("/contact")} className="w-full">
                  Contact
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Index;
