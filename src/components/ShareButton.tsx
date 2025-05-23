
import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { Share } from "lucide-react";
import { toast } from "@/components/ui/use-toast";

interface ShareButtonProps {
  title?: string;
  text?: string;
  url?: string;
}

const ShareButton: React.FC<ShareButtonProps> = ({ 
  title = "Check out this awesome portfolio!", 
  text = "I found this amazing developer portfolio. Take a look!", 
  url = window.location.href 
}) => {
  const [isOpen, setIsOpen] = useState(false);

  const shareData = {
    title,
    text,
    url
  };

  const handleShare = async (platform: string) => {
    try {
      if (navigator.share && platform === 'native') {
        await navigator.share(shareData);
        toast({
          title: "Shared successfully",
          description: "Content has been shared"
        });
        return;
      }

      let shareUrl = "";
      
      switch (platform) {
        case 'facebook':
          shareUrl = `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(url)}`;
          break;
        case 'twitter':
          shareUrl = `https://twitter.com/intent/tweet?text=${encodeURIComponent(text)}&url=${encodeURIComponent(url)}`;
          break;
        case 'linkedin':
          shareUrl = `https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(url)}`;
          break;
        case 'whatsapp':
          shareUrl = `https://api.whatsapp.com/send?text=${encodeURIComponent(text + ' ' + url)}`;
          break;
        case 'copy':
          await navigator.clipboard.writeText(url);
          toast({
            title: "Link copied!",
            description: "URL copied to clipboard"
          });
          setIsOpen(false);
          return;
      }

      if (shareUrl) {
        window.open(shareUrl, '_blank', 'width=600,height=400');
        setIsOpen(false);
      }
    } catch (error) {
      console.error('Error sharing:', error);
      toast({
        title: "Sharing failed",
        description: "Could not share the content",
        variant: "destructive"
      });
    }
  };

  return (
    <Popover open={isOpen} onOpenChange={setIsOpen}>
      <PopoverTrigger asChild>
        <Button variant="outline" size="sm" className="flex items-center gap-2">
          <Share className="h-4 w-4" />
          <span>Share</span>
        </Button>
      </PopoverTrigger>
      <PopoverContent className="w-56">
        <div className="grid gap-2">
          <h3 className="text-sm font-medium">Share this page</h3>
          <div className="grid grid-cols-2 gap-2">
            <Button variant="outline" size="sm" onClick={() => handleShare('facebook')}>Facebook</Button>
            <Button variant="outline" size="sm" onClick={() => handleShare('twitter')}>Twitter</Button>
            <Button variant="outline" size="sm" onClick={() => handleShare('linkedin')}>LinkedIn</Button>
            <Button variant="outline" size="sm" onClick={() => handleShare('whatsapp')}>WhatsApp</Button>
            <Button variant="outline" size="sm" onClick={() => handleShare('copy')} className="col-span-2">Copy Link</Button>
            {navigator.share && (
              <Button variant="outline" size="sm" onClick={() => handleShare('native')} className="col-span-2">Share...</Button>
            )}
          </div>
        </div>
      </PopoverContent>
    </Popover>
  );
};

export default ShareButton;
