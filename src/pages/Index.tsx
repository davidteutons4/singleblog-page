import { useEffect } from "react";
import { Link } from "react-router-dom";
import { ArrowLeft, ArrowRight, Calendar, Clock } from "lucide-react";
import { ArticleHeader } from "@/components/ArticleHeader";
import { TableOfContents } from "@/components/TableOfContents";
import { ShareButtons } from "@/components/ShareButtons";
import { AuthorCard } from "@/components/AuthorCard";
import { NewsletterSignup } from "@/components/NewsletterSignup";
import { ArticleFooter } from "@/components/ArticleFooter";
import { CodeBlock } from "@/components/CodeBlock";
import { StructuredData } from "@/components/StructuredData";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import heroImage from "@/assets/article-hero.jpg";
import authorAvatar from "@/assets/author-avatar.jpg";

const Index = () => {
  useEffect(() => {
    // Fade-up animation on scroll
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("fade-up");
          }
        });
      },
      { threshold: 0.1 }
    );

    document.querySelectorAll(".animate-on-scroll").forEach((el) => {
      observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <div className="min-h-screen">
      <StructuredData />
      <ArticleHeader />

      {/* Hero Section */}
      <section className="pt-24 pb-12 px-6">
        <div className="page-width mx-auto">
          {/* Breadcrumb */}
          <nav className="flex items-center gap-2 text-sm text-muted-foreground mb-8 animate-on-scroll">
            <Link to="/" className="hover:text-foreground transition-colors">
              Home
            </Link>
            <span>/</span>
            <Link to="/blog" className="hover:text-foreground transition-colors">
              Blog
            </Link>
            <span>/</span>
            <span className="text-foreground">Infrastructure</span>
          </nav>

          {/* Title & Meta */}
          <div className="content-width mx-auto">
            <Badge variant="secondary" className="mb-6 animate-on-scroll">
              Infrastructure / AI
            </Badge>
            
            <h1 className="font-display text-5xl md:text-6xl font-bold mb-6 text-balance leading-tight animate-on-scroll">
              AI + Blockchain: Building the Future of Digital Trust
            </h1>

            <div className="flex flex-wrap items-center gap-6 mb-12 animate-on-scroll">
              <div className="flex items-center gap-3">
                <img
                  src={authorAvatar}
                  alt="Alex Chen"
                  className="w-12 h-12 rounded-full object-cover"
                />
                <div>
                  <div className="font-medium">Alex Chen</div>
                  <div className="text-sm text-muted-foreground">
                    Lead Infrastructure Architect
                  </div>
                </div>
              </div>
              <div className="flex items-center gap-4 text-sm text-muted-foreground">
                <div className="flex items-center gap-1">
                  <Calendar className="h-4 w-4" />
                  <span>Jan 15, 2025</span>
                </div>
                <div className="flex items-center gap-1">
                  <Clock className="h-4 w-4" />
                  <span>12 min read</span>
                </div>
              </div>
            </div>

            {/* Hero Image */}
            <div className="parallax-container rounded-lg overflow-hidden mb-12 animate-on-scroll">
              <img
                src={heroImage}
                alt="AI and Blockchain convergence visualization"
                className="w-full h-auto object-cover"
                style={{ transform: "translateY(var(--parallax, 0))" }}
              />
              <div className="glass-subtle px-4 py-2 text-sm text-muted-foreground text-center">
                Visualization of AI and blockchain infrastructure convergence
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Article Content */}
      <section className="px-6 pb-24">
        <div className="page-width mx-auto">
          <div className="grid lg:grid-cols-[1fr_280px] gap-12">
            {/* Main Content */}
            <article className="content-width animate-on-scroll prose prose-invert max-w-none">
              <p className="text-xl text-muted-foreground leading-relaxed mb-8">
                The convergence of artificial intelligence and blockchain technology represents 
                one of the most transformative developments in modern infrastructure. As we build 
                systems that demand unprecedented levels of trust, transparency, and automation, 
                understanding this intersection becomes critical.
              </p>

              <h2 id="why-provenance-matters" className="font-display text-3xl font-bold mt-16 mb-6">
                Why Provenance Matters in AI Systems
              </h2>
              
              <p className="leading-relaxed mb-6">
                In an era where AI models influence critical decisions—from financial transactions 
                to healthcare diagnostics—knowing the origin and training data of these models is 
                no longer optional. Blockchain provides an immutable ledger that can track:
              </p>

              <ul className="space-y-3 mb-6 ml-6">
                <li className="text-muted-foreground">
                  Model training datasets and their sources
                </li>
                <li className="text-muted-foreground">
                  Versioning and update history of AI models
                </li>
                <li className="text-muted-foreground">
                  Inference requests and their outcomes
                </li>
                <li className="text-muted-foreground">
                  Audit trails for regulatory compliance
                </li>
              </ul>

              <div className="glass rounded-lg p-6 my-8 border-l-4 border-primary">
                <p className="text-lg italic text-foreground">
                  "The future of AI isn't just about smarter algorithms—it's about trusted, 
                  verifiable intelligence that can be audited and validated at every step."
                </p>
              </div>

              <h2 id="on-chain-data-pipelines" className="font-display text-3xl font-bold mt-16 mb-6">
                On-Chain Data Pipelines and Indexing
              </h2>

              <p className="leading-relaxed mb-6">
                Building efficient data pipelines that can feed AI models while maintaining 
                cryptographic verification presents unique challenges. At AnyAxis Labs, we've 
                developed patterns for:
              </p>

              <h3 id="indexing-strategies" className="font-display text-2xl font-semibold mt-12 mb-4">
                Indexing Strategies
              </h3>

              <p className="leading-relaxed mb-6">
                Traditional databases can't handle the verification requirements of blockchain 
                data. Our approach combines off-chain indexing with on-chain proof systems:
              </p>

              <CodeBlock
                code={`// Example: Verifiable data indexing pattern
interface DataProof {
  blockHeight: number;
  txHash: string;
  merkleProof: string[];
  timestamp: number;
}

async function verifyIndexedData(
  data: any,
  proof: DataProof
): Promise<boolean> {
  const rootHash = await fetchBlockRoot(proof.blockHeight);
  return verifyMerkleProof(
    data,
    proof.merkleProof,
    rootHash
  );
}`}
                language="typescript"
              />

              <div className="glass-subtle rounded-lg p-6 my-8">
                <div className="flex items-start gap-3">
                  <div className="font-semibold text-sm uppercase tracking-wider text-primary">
                    Note
                  </div>
                  <p className="text-sm text-muted-foreground flex-1">
                    This pattern ensures that even off-chain indexed data can be cryptographically 
                    verified against on-chain sources, maintaining trust without sacrificing performance.
                  </p>
                </div>
              </div>

              <h2 id="agentic-automation" className="font-display text-3xl font-bold mt-16 mb-6">
                Agentic Automation for Risk Controls
              </h2>

              <p className="leading-relaxed mb-6">
                AI agents operating in decentralized systems need sophisticated risk management. 
                We're implementing multi-layer controls that combine:
              </p>

              <div className="overflow-x-auto my-8">
                <table className="w-full glass rounded-lg">
                  <thead>
                    <tr className="border-b border-border">
                      <th className="text-left p-4 font-semibold">Control Layer</th>
                      <th className="text-left p-4 font-semibold">Purpose</th>
                      <th className="text-left p-4 font-semibold">Implementation</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="border-b border-border/50">
                      <td className="p-4">Smart Contract Limits</td>
                      <td className="p-4 text-muted-foreground">Hard caps on actions</td>
                      <td className="p-4 text-muted-foreground">On-chain validation</td>
                    </tr>
                    <tr className="border-b border-border/50">
                      <td className="p-4">AI Risk Scoring</td>
                      <td className="p-4 text-muted-foreground">Dynamic assessment</td>
                      <td className="p-4 text-muted-foreground">ML-based scoring</td>
                    </tr>
                    <tr className="border-b border-border/50">
                      <td className="p-4">Multi-Sig Approvals</td>
                      <td className="p-4 text-muted-foreground">High-value oversight</td>
                      <td className="p-4 text-muted-foreground">Threshold signatures</td>
                    </tr>
                    <tr>
                      <td className="p-4">Governance Reviews</td>
                      <td className="p-4 text-muted-foreground">Community validation</td>
                      <td className="p-4 text-muted-foreground">DAO voting</td>
                    </tr>
                  </tbody>
                </table>
              </div>

              <h2 id="case-notes" className="font-display text-3xl font-bold mt-16 mb-6">
                Case Notes from AnyAxis Infrastructure Work
              </h2>

              <p className="leading-relaxed mb-6">
                Over the past year, we've deployed these patterns in production environments 
                processing millions of transactions daily. Key learnings include:
              </p>

              <div className="grid gap-6 my-8">
                <div className="glass rounded-lg p-6">
                  <h4 className="font-semibold mb-2">Performance vs. Verification</h4>
                  <p className="text-sm text-muted-foreground">
                    Every cryptographic verification adds latency. We've found that batching 
                    proofs and using recursive SNARKs can reduce overhead by 80% while 
                    maintaining security guarantees.
                  </p>
                </div>
                
                <div className="glass rounded-lg p-6">
                  <h4 className="font-semibold mb-2">Model Update Challenges</h4>
                  <p className="text-sm text-muted-foreground">
                    Updating AI models in production blockchain systems requires careful 
                    coordination. We use versioned model registries with grace periods for 
                    validation before deployment.
                  </p>
                </div>
                
                <div className="glass rounded-lg p-6">
                  <h4 className="font-semibold mb-2">Cross-Chain Complexities</h4>
                  <p className="text-sm text-muted-foreground">
                    Operating across multiple chains (Cosmos, Ethereum, Solana) taught us 
                    that abstraction layers must account for vastly different consensus and 
                    finality models.
                  </p>
                </div>
              </div>

              <h2 id="where-this-is-going" className="font-display text-3xl font-bold mt-16 mb-6">
                Where This Is Going Next
              </h2>

              <p className="leading-relaxed mb-6">
                The intersection of AI and blockchain is still in its early stages. We're 
                excited about several emerging trends:
              </p>

              <ul className="space-y-3 mb-6 ml-6">
                <li className="text-muted-foreground">
                  Zero-knowledge machine learning for privacy-preserving AI
                </li>
                <li className="text-muted-foreground">
                  Decentralized training networks that reward compute providers
                </li>
                <li className="text-muted-foreground">
                  AI-powered consensus mechanisms that adapt to network conditions
                </li>
                <li className="text-muted-foreground">
                  Tokenized model marketplaces with provable attribution
                </li>
              </ul>

              <p className="leading-relaxed mb-6">
                As these technologies mature, we expect to see entirely new categories of 
                applications that were previously impossible—systems that are simultaneously 
                intelligent, transparent, and trustless.
              </p>

              <div className="glass rounded-lg p-8 my-12 text-center">
                <p className="text-lg mb-6">
                  Interested in building AI-native blockchain infrastructure?
                </p>
                <Button size="lg" className="glow-hover" asChild>
                  <a href="/contact">Let's Talk</a>
                </Button>
              </div>

              {/* Tags */}
              <div className="flex flex-wrap gap-2 mt-12 pt-8 border-t border-border">
                <Badge variant="outline">Web3</Badge>
                <Badge variant="outline">Cosmos</Badge>
                <Badge variant="outline">AI/Quant</Badge>
                <Badge variant="outline">Infrastructure</Badge>
                <Badge variant="outline">Zero Knowledge</Badge>
                <Badge variant="outline">Smart Contracts</Badge>
              </div>

              {/* Share */}
              <div className="mt-8 pt-8 border-t border-border">
                <ShareButtons />
              </div>

              {/* Author Card */}
              <div className="mt-12">
                <AuthorCard />
              </div>

              {/* Next/Previous */}
              <div className="grid md:grid-cols-2 gap-6 mt-12">
                <a
                  href="/article/cosmos-ibc"
                  className="glass rounded-lg p-6 glow-hover transition-all group"
                >
                  <div className="flex items-center gap-2 text-sm text-muted-foreground mb-2">
                    <ArrowLeft className="h-4 w-4" />
                    <span>Previous</span>
                  </div>
                  <h4 className="font-display font-semibold group-hover:text-primary transition-colors">
                    Deep Dive into Cosmos IBC Protocol
                  </h4>
                  <p className="text-sm text-muted-foreground mt-2">Dec 28, 2024</p>
                </a>

                <a
                  href="/article/defi-security"
                  className="glass rounded-lg p-6 glow-hover transition-all group text-right"
                >
                  <div className="flex items-center justify-end gap-2 text-sm text-muted-foreground mb-2">
                    <span>Next</span>
                    <ArrowRight className="h-4 w-4" />
                  </div>
                  <h4 className="font-display font-semibold group-hover:text-primary transition-colors">
                    Security Best Practices for DeFi Protocols
                  </h4>
                  <p className="text-sm text-muted-foreground mt-2">Jan 22, 2025</p>
                </a>
              </div>
            </article>

            {/* Table of Contents */}
            <TableOfContents />
          </div>
        </div>
      </section>

      {/* Newsletter */}
      <section className="px-6 pb-24">
        <div className="page-width mx-auto animate-on-scroll">
          <NewsletterSignup />
        </div>
      </section>

      {/* Final CTA */}
      <section className="px-6 pb-24">
        <div className="page-width mx-auto animate-on-scroll">
          <div className="glass rounded-lg p-12 text-center">
            <h3 className="font-display text-3xl font-bold mb-4">
              Ready to Build Something Awesome Together?
            </h3>
            <p className="text-muted-foreground mb-8 max-w-2xl mx-auto">
              Whether you need infrastructure consulting, custom blockchain development, 
              or AI integration—we're here to help bring your vision to life.
            </p>
            <Button size="lg" className="glow-hover" asChild>
              <a href="/contact">Book a Call</a>
            </Button>
          </div>
        </div>
      </section>

      <ArticleFooter />
    </div>
  );
};

export default Index;
