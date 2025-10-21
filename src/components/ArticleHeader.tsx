import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Search, Share2 } from "lucide-react";
import { Button } from "@/components/ui/button";

export const ArticleHeader = () => {
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const windowHeight = window.innerHeight;
      const documentHeight = document.documentElement.scrollHeight - windowHeight;
      const scrolled = window.scrollY;
      const progress = (scrolled / documentHeight) * 100;
      setScrollProgress(Math.min(progress, 100));
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 glass backdrop-blur-xl">
      <div
        className="absolute bottom-0 left-0 h-[2px] bg-primary transition-all duration-150"
        style={{ width: `${scrollProgress}%` }}
      />
      <div className="page-width mx-auto px-6 h-16 flex items-center justify-between">
        <div className="flex items-center gap-8">
          <Link to="/" className="font-display text-xl font-semibold">
            AnyAxis Labs
          </Link>
          <nav className="hidden md:flex items-center gap-6">
            <Link to="/blog" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
              Blog
            </Link>
            <Link to="/posts" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
              All Posts
            </Link>
          </nav>
        </div>
        <div className="flex items-center gap-3">
          <Button variant="ghost" size="sm" className="glow-hover">
            <Search className="h-4 w-4" />
          </Button>
          <Button variant="ghost" size="sm" className="glow-hover">
            <Share2 className="h-4 w-4" />
          </Button>
        </div>
      </div>
    </header>
  );
};
