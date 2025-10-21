import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { toast } from "@/hooks/use-toast";

export const NewsletterSignup = () => {
  const [email, setEmail] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Thanks for subscribing!",
      description: "You'll receive updates from AnyAxis Labs.",
    });
    setEmail("");
  };

  return (
    <div className="glass rounded-lg p-8 md:p-12">
      <div className="max-w-2xl mx-auto text-center">
        <h3 className="font-display text-2xl font-semibold mb-3">
          Get Updates from AnyAxis Labs
        </h3>
        <p className="text-muted-foreground mb-6">
          Join our newsletter for insights on AI, blockchain, and infrastructure innovation.
        </p>
        <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3">
          <Input
            type="email"
            placeholder="your@email.com"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            className="flex-1 bg-surface border-border"
          />
          <Button type="submit" className="glow-hover">
            Subscribe
          </Button>
        </form>
        <p className="text-xs text-muted-foreground mt-4">
          We respect your privacy. Unsubscribe at any time.
        </p>
      </div>
    </div>
  );
};
