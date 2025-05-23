import React, { useEffect, useState } from "react";
import { Card, CardContent } from "@/components/ui/card";

interface Achievement {
  title: string;
  description: string;
}

interface Goal {
  title: string;
  description: string;
}

const Achievements = () => {
  const [achievements, setAchievements] = useState<Achievement[]>([]);
  const [goals, setGoals] = useState<Goal[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  
  useEffect(() => {
    const fetchData = async () => {
      try {
        // Updated path to work in both development and production
        const response = await fetch('/data.json');
        const data = await response.json();
        setAchievements(data.achievements);
        setGoals(data.futureGoals);
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
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
      <div className="py-12 bg-gradient-to-r from-blue-500 to-teal-600">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl font-bold text-white">Achievements & Goals</h1>
        </div>
      </div>
      
      <div className="container mx-auto px-4 py-12">
        <div className="mb-16">
          <h2 className="text-3xl font-bold mb-8">My Achievements</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {achievements.map((achievement, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow">
                <CardContent className="p-6">
                  <div className="text-teal-600 font-bold text-5xl mb-4">#{index + 1}</div>
                  <h3 className="text-xl font-bold mb-2">{achievement.title}</h3>
                  <p className="text-gray-600 dark:text-gray-400">{achievement.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
        
        <div>
          <h2 className="text-3xl font-bold mb-8">Future Goals</h2>
          <div className="space-y-8">
            {goals.map((goal, index) => (
              <div key={index} className="relative">
                {index < goals.length - 1 && (
                  <div className="absolute left-6 top-12 bottom-0 w-1 bg-teal-200 dark:bg-teal-800"></div>
                )}
                <div className="flex gap-6">
                  <div className="bg-teal-600 text-white rounded-full w-12 h-12 flex items-center justify-center flex-shrink-0 z-10">
                    {index + 1}
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-2">{goal.title}</h3>
                    <p className="text-gray-600 dark:text-gray-400 mb-6">{goal.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Achievements;
