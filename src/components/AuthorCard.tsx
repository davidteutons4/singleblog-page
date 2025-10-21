import { Linkedin } from "lucide-react";
import { Button } from "@/components/ui/button";
import authorAvatar from "@/assets/author-avatar.jpg";

export const AuthorCard = () => {
  return (
    <div className="glass rounded-lg p-8">
      <div className="flex items-start gap-6">
        <img
          src={authorAvatar}
          alt="Author"
          className="w-20 h-20 rounded-full object-cover"
        />
        <div className="flex-1">
          <h3 className="font-display text-xl font-semibold mb-1">Alex Chen</h3>
          <p className="text-sm text-muted-foreground mb-3">
            Lead Infrastructure Architect
          </p>
          <p className="text-sm text-muted-foreground mb-4 leading-relaxed">
            Building the next generation of decentralized infrastructure at AnyAxis Labs. 
            Former systems architect at leading blockchain projects, passionate about the 
            intersection of AI and distributed systems.
          </p>
          <div className="flex items-center gap-4">
            <Button variant="outline" size="sm" className="glow-hover" asChild>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Linkedin className="h-4 w-4 mr-2" />
                Connect
              </a>
            </Button>
            <a
              href="/author/alex-chen"
              className="text-sm text-muted-foreground hover:text-foreground transition-colors"
            >
              More posts by this author →
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};
