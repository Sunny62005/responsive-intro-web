import React, { useEffect, useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

interface Hobby {
  name: string;
  description: string;
}

interface RoleModel {
  name: string;
  reason: string;
}

interface Book {
  title: string;
  author: string;
  reason: string;
}

interface Website {
  name: string;
  url: string;
  reason: string;
}

interface Startup {
  name: string;
  reason: string;
}

const Personal = () => {
  const [hobbies, setHobbies] = useState<Hobby[]>([]);
  const [roleModels, setRoleModels] = useState<RoleModel[]>([]);
  const [books, setBooks] = useState<Book[]>([]);
  const [websites, setWebsites] = useState<Website[]>([]);
  const [startups, setStartups] = useState<Startup[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  
  useEffect(() => {
    const fetchData = async () => {
      try {
        // Updated path to work in both development and production
        const response = await fetch('/data.json');
        const data = await response.json();
        
        // Set data with null checks
        setHobbies(data.hobbies || []);
        setRoleModels(data.roleModels || []);
        setBooks(data.books || []);
        setWebsites(data.websites || []);
        setStartups(data.startups || []);
      } catch (error) {
        console.error('Error fetching data:', error);
        // Initialize with empty arrays on error
        setHobbies([]);
        setRoleModels([]);
        setBooks([]);
        setWebsites([]);
        setStartups([]);
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
    <div className="min-h-screen bg-gray-50">
      <div className="py-12 bg-gradient-to-r from-purple-500 to-pink-500">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl font-bold text-white">Personal Side</h1>
        </div>
      </div>
      
      <div className="container mx-auto px-4 py-12">
        <Tabs defaultValue="hobbies" className="w-full">
          <TabsList className="grid grid-cols-3 md:grid-cols-5 mb-8">
            <TabsTrigger value="hobbies">Hobbies</TabsTrigger>
            <TabsTrigger value="roleModels">Role Models</TabsTrigger>
            <TabsTrigger value="books">Books</TabsTrigger>
            <TabsTrigger value="websites">Websites</TabsTrigger>
            <TabsTrigger value="startups">Startups</TabsTrigger>
          </TabsList>
          
          <TabsContent value="hobbies">
            <h2 className="text-3xl font-bold mb-8">My Hobbies</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {hobbies && hobbies.length > 0 ? (
                hobbies.map((hobby, index) => (
                  <Card key={index} className="hover:shadow-lg transition-shadow">
                    <CardContent className="p-6">
                      <h3 className="text-xl font-bold mb-2">{hobby.name}</h3>
                      <p className="text-gray-600">{hobby.description}</p>
                    </CardContent>
                  </Card>
                ))
              ) : (
                <p className="col-span-3 text-center text-gray-500">No hobbies available</p>
              )}
            </div>
          </TabsContent>
          
          <TabsContent value="roleModels">
            <h2 className="text-3xl font-bold mb-8">Role Models</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {roleModels && roleModels.length > 0 ? (
                roleModels.map((model, index) => (
                  <Card key={index} className="hover:shadow-lg transition-shadow">
                    <CardContent className="p-6">
                      <h3 className="text-xl font-bold mb-2">{model.name}</h3>
                      <p className="text-gray-600">{model.reason}</p>
                    </CardContent>
                  </Card>
                ))
              ) : (
                <p className="col-span-3 text-center text-gray-500">No role models available</p>
              )}
            </div>
          </TabsContent>
          
          <TabsContent value="books">
            <h2 className="text-3xl font-bold mb-8">Favorite Books</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {books && books.length > 0 ? (
                books.map((book, index) => (
                  <Card key={index} className="hover:shadow-lg transition-shadow">
                    <CardContent className="p-6">
                      <h3 className="text-xl font-bold mb-2">{book.title}</h3>
                      <p className="text-gray-600 mb-2">by {book.author}</p>
                      <p className="text-gray-600">{book.reason}</p>
                    </CardContent>
                  </Card>
                ))
              ) : (
                <p className="col-span-3 text-center text-gray-500">No favorite books available</p>
              )}
            </div>
          </TabsContent>
          
          <TabsContent value="websites">
            <h2 className="text-3xl font-bold mb-8">Favorite Websites</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {websites && websites.length > 0 ? (
                websites.map((site, index) => (
                  <Card key={index} className="hover:shadow-lg transition-shadow">
                    <CardContent className="p-6">
                      <h3 className="text-xl font-bold mb-2">
                        <a 
                          href={site.url}
                          target="_blank" 
                          rel="noopener noreferrer" 
                          className="text-purple-600 hover:underline"
                        >
                          {site.name}
                        </a>
                      </h3>
                      <p className="text-gray-600">{site.reason}</p>
                    </CardContent>
                  </Card>
                ))
              ) : (
                <p className="col-span-3 text-center text-gray-500">No favorite websites available</p>
              )}
            </div>
          </TabsContent>
          
          <TabsContent value="startups">
            <h2 className="text-3xl font-bold mb-8">Favorite Startups</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {startups && startups.length > 0 ? (
                startups.map((startup, index) => (
                  <Card key={index} className="hover:shadow-lg transition-shadow">
                    <CardContent className="p-6">
                      <h3 className="text-xl font-bold mb-2">{startup.name}</h3>
                      <p className="text-gray-600">{startup.reason}</p>
                    </CardContent>
                  </Card>
                ))
              ) : (
                <p className="col-span-3 text-center text-gray-500">No favorite startups available</p>
              )}
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
};

export default Personal;
