import { Link } from "react-router-dom";

export const ArticleFooter = () => {
  return (
    <footer className="border-t border-border/20 mt-24">
      <div className="page-width mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          <div>
            <h4 className="font-display font-semibold mb-4">Our Expertise</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>
                <Link to="/services/blockchain" className="hover:text-foreground transition-colors">
                  Blockchain Infrastructure
                </Link>
              </li>
              <li>
                <Link to="/services/ai" className="hover:text-foreground transition-colors">
                  AI & Machine Learning
                </Link>
              </li>
              <li>
                <Link to="/services/cloud" className="hover:text-foreground transition-colors">
                  Cloud Architecture
                </Link>
              </li>
              <li>
                <Link to="/services/security" className="hover:text-foreground transition-colors">
                  Security & Compliance
                </Link>
              </li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-display font-semibold mb-4">About</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>
                <Link to="/about" className="hover:text-foreground transition-colors">
                  Our Story
                </Link>
              </li>
              <li>
                <Link to="/team" className="hover:text-foreground transition-colors">
                  Team
                </Link>
              </li>
              <li>
                <Link to="/careers" className="hover:text-foreground transition-colors">
                  Careers
                </Link>
              </li>
              <li>
                <Link to="/blog" className="hover:text-foreground transition-colors">
                  Blog
                </Link>
              </li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-display font-semibold mb-4">Contact</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>
                <a href="mailto:hello@anyaxis.dev" className="hover:text-foreground transition-colors">
                  hello@anyaxis.dev
                </a>
              </li>
              <li>
                <Link to="/contact" className="hover:text-foreground transition-colors">
                  Get in Touch
                </Link>
              </li>
              <li>
                <Link to="/partnerships" className="hover:text-foreground transition-colors">
                  Partnerships
                </Link>
              </li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-display font-semibold mb-4">Social</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>
                <a href="https://twitter.com/anyaxislabs" target="_blank" rel="noopener noreferrer" className="hover:text-foreground transition-colors">
                  X (Twitter)
                </a>
              </li>
              <li>
                <a href="https://linkedin.com/company/anyaxis" target="_blank" rel="noopener noreferrer" className="hover:text-foreground transition-colors">
                  LinkedIn
                </a>
              </li>
              <li>
                <a href="https://github.com/anyaxis" target="_blank" rel="noopener noreferrer" className="hover:text-foreground transition-colors">
                  GitHub
                </a>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="pt-8 border-t border-border/20 text-center text-sm text-muted-foreground">
          © 2025 AnyAxis Labs — By Builders, For Builders.
        </div>
      </div>
    </footer>
  );
};
