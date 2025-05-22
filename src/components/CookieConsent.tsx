
import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { X } from "lucide-react";

export function CookieConsent() {
  const [showConsent, setShowConsent] = useState(false);

  useEffect(() => {
    // Check if user has already accepted cookies
    const consent = localStorage.getItem("cookieConsent");
    if (!consent) {
      setShowConsent(true);
    }
  }, []);

  const acceptCookies = () => {
    localStorage.setItem("cookieConsent", "accepted");
    setShowConsent(false);
    
    // Set a demonstration cookie
    document.cookie = "userVisited=true; max-age=86400; path=/";
  };

  const declineCookies = () => {
    localStorage.setItem("cookieConsent", "declined");
    setShowConsent(false);
  };

  if (!showConsent) return null;

  return (
    <div className="fixed bottom-0 left-0 right-0 bg-background border-t p-4 shadow-lg z-50 animate-fade-in">
      <div className="container flex flex-col sm:flex-row items-center justify-between gap-4">
        <div>
          <h3 className="font-medium text-lg">Cookie Consent</h3>
          <p className="text-sm text-muted-foreground">
            This website uses cookies to enhance your browsing experience and analyze site traffic.
          </p>
        </div>
        <div className="flex gap-3">
          <Button variant="outline" onClick={declineCookies}>
            Decline
          </Button>
          <Button className="bg-purple-600 hover:bg-purple-700" onClick={acceptCookies}>
            Accept
          </Button>
        </div>
        <Button 
          variant="ghost" 
          size="icon" 
          className="absolute top-2 right-2 sm:hidden" 
          onClick={declineCookies}
        >
          <X className="h-4 w-4" />
        </Button>
      </div>
    </div>
  );
}
