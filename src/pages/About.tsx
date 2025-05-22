
import React, { useEffect, useState } from "react";
import { Card, CardContent } from "@/components/ui/card";

interface Education {
  degree: string;
  institution: string;
  year: string;
}

interface Language {
  name: string;
  proficiency: string;
}

interface ProfileData {
  name: string;
  title: string;
  location: string;
  bio: string;
  photo: string;
}

const About = () => {
  const [profileData, setProfileData] = useState<ProfileData | null>(null);
  const [education, setEducation] = useState<Education[]>([]);
  const [languages, setLanguages] = useState<Language[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('/src/data/data.json');
        const data = await response.json();
        setProfileData(data.profile);
        setEducation(data.education);
        setLanguages(data.languages);
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
      <div className="py-12 bg-gradient-to-r from-teal-600 to-blue-500">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl font-bold text-white">About Me</h1>
        </div>
      </div>
      
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
          <div className="lg:col-span-1">
            <Card>
              <CardContent className="p-6">
                <h2 className="text-2xl font-bold text-center">{profileData?.name}</h2>
                <p className="text-center text-gray-600 dark:text-gray-400">{profileData?.title}</p>
                <p className="text-center text-gray-600 dark:text-gray-400 mt-2">{profileData?.location}</p>

                <div className="mt-8">
                  <h3 className="text-lg font-semibold mb-4">Languages</h3>
                  <div className="space-y-3">
                    {languages.map((language, index) => (
                      <div key={index} className="flex justify-between">
                        <span>{language.name}</span>
                        <span className="text-gray-600 dark:text-gray-400">{language.proficiency}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
          
          <div className="lg:col-span-2">
            <Card>
              <CardContent className="p-6">
                <h2 className="text-2xl font-bold mb-4">Education</h2>
                <div className="space-y-6">
                  {education.map((edu, index) => (
                    <div key={index} className="border-l-4 border-teal-600 pl-4">
                      <h3 className="font-bold text-lg">{edu.degree}</h3>
                      <p className="text-gray-600 dark:text-gray-400">{edu.institution}</p>
                      <p className="text-gray-600 dark:text-gray-400">{edu.year}</p>
                    </div>
                  ))}
                </div>
                
                <div className="mt-10">
                  <h2 className="text-2xl font-bold mb-4">Skills & Expertise</h2>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <h3 className="font-semibold mb-2">Programming Languages</h3>
                      <div className="flex flex-wrap gap-2">
                        {["JavaScript", "TypeScript", "Python", "Java", "C++"].map((skill, index) => (
                          <span key={index} className="bg-gray-100 dark:bg-gray-800 px-3 py-1 rounded-full text-sm">
                            {skill}
                          </span>
                        ))}
                      </div>
                    </div>
                    
                    <div>
                      <h3 className="font-semibold mb-2">Frameworks</h3>
                      <div className="flex flex-wrap gap-2">
                        {["React", "Node.js", "Express", "Django", "Spring Boot"].map((skill, index) => (
                          <span key={index} className="bg-gray-100 dark:bg-gray-800 px-3 py-1 rounded-full text-sm">
                            {skill}
                          </span>
                        ))}
                      </div>
                    </div>
                    
                    <div>
                      <h3 className="font-semibold mb-2">Tools</h3>
                      <div className="flex flex-wrap gap-2">
                        {["Git", "Docker", "AWS", "Figma", "Jira"].map((skill, index) => (
                          <span key={index} className="bg-gray-100 dark:bg-gray-800 px-3 py-1 rounded-full text-sm">
                            {skill}
                          </span>
                        ))}
                      </div>
                    </div>
                    
                    <div>
                      <h3 className="font-semibold mb-2">Other</h3>
                      <div className="flex flex-wrap gap-2">
                        {["UI/UX Design", "Project Management", "Agile", "DevOps", "Testing"].map((skill, index) => (
                          <span key={index} className="bg-gray-100 dark:bg-gray-800 px-3 py-1 rounded-full text-sm">
                            {skill}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
