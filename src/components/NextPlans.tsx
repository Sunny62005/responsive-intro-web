
import React, { useEffect, useState } from 'react';
import { Card, CardContent } from "@/components/ui/card";

interface Plan {
  title: string;
  description: string;
}

const NextPlans: React.FC = () => {
  const [plans, setPlans] = useState<Plan[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  
  useEffect(() => {
    const fetchData = async () => {
      try {
        // Updated path to work in both development and production
        const response = await fetch('/data.json');
        const data = await response.json();
        setPlans(data.nextPlans || []);
      } catch (error) {
        console.error('Error fetching data:', error);
        setPlans([]);
      } finally {
        setIsLoading(false);
      }
    };
    
    fetchData();
  }, []);
  
  if (isLoading) {
    return (
      <div className="py-8">
        <p className="text-center">Loading plans...</p>
      </div>
    );
  }
  
  return (
    <section className="py-12 bg-muted/30">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-8 text-center">Next Learning Plans</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {plans.map((plan, index) => (
            <Card key={index} className="hover:shadow-lg transition-shadow">
              <CardContent className="p-6">
                <div className="h-10 w-10 rounded-full bg-teal-100 dark:bg-teal-900 flex items-center justify-center text-teal-600 dark:text-teal-400 font-bold text-lg mb-4">
                  {index + 1}
                </div>
                <h3 className="text-xl font-bold mb-2">{plan.title}</h3>
                <p className="text-muted-foreground">{plan.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default NextPlans;
