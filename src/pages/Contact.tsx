
import React from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent } from "@/components/ui/card";
import { useToast } from "@/components/ui/use-toast";

const Contact = () => {
  const { toast } = useToast();
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Message Sent!",
      description: "Thanks for reaching out. I'll get back to you soon.",
    });
  };
  
  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
      <div className="py-12 bg-gradient-to-r from-teal-500 to-blue-500">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl font-bold text-white">Contact Me</h1>
        </div>
      </div>
      
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          <div>
            <h2 className="text-3xl font-bold mb-6">Get In Touch</h2>
            <p className="text-gray-600 dark:text-gray-400 mb-8">
              I'm always open to new opportunities and collaborations. Feel free to reach out
              if you have any questions or just want to say hello!
            </p>
            
            <div className="space-y-6">
              <Card>
                <CardContent className="p-6">
                  <div className="flex gap-4">
                    <div className="w-10 h-10 rounded-full bg-blue-100 flex items-center justify-center text-blue-600">
                      📧
                    </div>
                    <div>
                      <h3 className="font-semibold">Email</h3>
                      <a href="mailto:sunnypharande777@gmail.com" className="text-blue-600 hover:underline">
                        sunnypharande777@gmail.com
                      </a>
                    </div>
                  </div>
                </CardContent>
              </Card>
              
              <Card>
                <CardContent className="p-6">
                  <div className="flex gap-4">
                    <div className="w-10 h-10 rounded-full bg-green-100 flex items-center justify-center text-green-600">
                      📱
                    </div>
                    <div>
                      <h3 className="font-semibold">Phone</h3>
                      <a href="tel:+918847782768" className="text-blue-600 hover:underline">
                        +91 8847782768
                      </a>
                    </div>
                  </div>
                </CardContent>
              </Card>
              
              <Card>
                <CardContent className="p-6">
                  <div className="flex gap-4">
                    <div className="w-10 h-10 rounded-full bg-green-100 flex items-center justify-center text-green-600">
                      💬
                    </div>
                    <div>
                      <h3 className="font-semibold">WhatsApp</h3>
                      <a 
                        href="https://wa.me/918847782768" 
                        target="_blank" 
                        rel="noopener noreferrer" 
                        className="text-blue-600 hover:underline"
                      >
                        Message me on WhatsApp
                      </a>
                    </div>
                  </div>
                </CardContent>
              </Card>
              
              <Card>
                <CardContent className="p-6">
                  <div className="flex gap-4">
                    <div className="w-10 h-10 rounded-full bg-purple-100 flex items-center justify-center text-purple-600">
                      🌐
                    </div>
                    <div>
                      <h3 className="font-semibold">Social Media</h3>
                      <div className="flex gap-4 mt-2">
                        <a 
                          href="https://github.com" 
                          target="_blank" 
                          rel="noopener noreferrer" 
                          className="text-gray-700 hover:text-black dark:text-gray-300 dark:hover:text-white"
                        >
                          GitHub
                        </a>
                        <a 
                          href="https://instagram.com" 
                          target="_blank" 
                          rel="noopener noreferrer" 
                          className="text-pink-600 hover:text-pink-700"
                        >
                          Instagram
                        </a>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
          
          <div>
            <Card>
              <CardContent className="p-6">
                <h2 className="text-2xl font-bold mb-6">Send Me a Message</h2>
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <label htmlFor="name" className="text-sm font-medium">Name</label>
                      <Input id="name" placeholder="Your name" required />
                    </div>
                    <div className="space-y-2">
                      <label htmlFor="email" className="text-sm font-medium">Email</label>
                      <Input id="email" type="email" placeholder="Your email" required />
                    </div>
                  </div>
                  
                  <div className="space-y-2">
                    <label htmlFor="subject" className="text-sm font-medium">Subject</label>
                    <Input id="subject" placeholder="Message subject" required />
                  </div>
                  
                  <div className="space-y-2">
                    <label htmlFor="message" className="text-sm font-medium">Message</label>
                    <Textarea id="message" placeholder="Your message" rows={6} required />
                  </div>
                  
                  <Button type="submit" className="w-full bg-teal-600 hover:bg-teal-700">
                    Send Message
                  </Button>
                </form>
              </CardContent>
            </Card>

            <div className="mt-8">
              <Card>
                <CardContent className="p-0">
                  <h3 className="sr-only">Location</h3>
                  <div className="aspect-video">
                    <iframe 
                      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d59831.31195780511!2d72.73165436962133!3d19.694856295614517!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be71df968000001%3A0x3fee06e5488d4bc3!2sPalghar%2C%20Maharashtra!5e0!3m2!1sen!2sin!4v1716383570048!5m2!1sen!2sin" 
                      width="100%" 
                      height="100%" 
                      style={{ border: 0 }} 
                      allowFullScreen 
                      loading="lazy"
                      title="Google Maps"
                      className="w-full h-full"
                    ></iframe>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
