import { Copy, Linkedin } from "lucide-react";
import { Button } from "@/components/ui/button";
import { toast } from "@/hooks/use-toast";

export const ShareButtons = () => {
  const currentUrl = window.location.href;
  const title = "AI + Blockchain: Building the Future of Digital Trust";

  const handleCopyLink = () => {
    navigator.clipboard.writeText(currentUrl);
    toast({
      title: "Link copied",
      description: "Article link copied to clipboard",
    });
  };

  const handleShareTwitter = () => {
    window.open(
      `https://twitter.com/intent/tweet?url=${encodeURIComponent(currentUrl)}&text=${encodeURIComponent(title)}`,
      "_blank"
    );
  };

  const handleShareLinkedIn = () => {
    window.open(
      `https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(currentUrl)}`,
      "_blank"
    );
  };

  return (
    <div className="flex items-center gap-3">
      <span className="text-sm text-muted-foreground">Share</span>
      <Button
        variant="outline"
        size="sm"
        onClick={handleShareTwitter}
        className="glow-hover"
        aria-label="Share on X"
      >
        <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 24 24">
          <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
        </svg>
      </Button>
      <Button
        variant="outline"
        size="sm"
        onClick={handleShareLinkedIn}
        className="glow-hover"
        aria-label="Share on LinkedIn"
      >
        <Linkedin className="h-4 w-4" />
      </Button>
      <Button
        variant="outline"
        size="sm"
        onClick={handleCopyLink}
        className="glow-hover"
        aria-label="Copy link"
      >
        <Copy className="h-4 w-4" />
      </Button>
    </div>
  );
};
