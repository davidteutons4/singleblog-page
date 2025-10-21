import { Helmet } from "react-helmet";

export const StructuredData = () => {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: "AI + Blockchain: Building the Future of Digital Trust",
    description:
      "Explore how AI and blockchain converge to create unprecedented levels of digital trust and transparency in modern infrastructure systems.",
    image: "https://lovable.dev/opengraph-image-p98pqg.png",
    datePublished: "2025-01-15T00:00:00Z",
    dateModified: "2025-01-15T00:00:00Z",
    author: {
      "@type": "Person",
      name: "Alex Chen",
      jobTitle: "Lead Infrastructure Architect",
      worksFor: {
        "@type": "Organization",
        name: "AnyAxis Labs",
      },
    },
    publisher: {
      "@type": "Organization",
      name: "AnyAxis Labs",
      logo: {
        "@type": "ImageObject",
        url: "https://lovable.dev/opengraph-image-p98pqg.png",
      },
    },
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": window.location.href,
    },
  };

  return (
    <Helmet>
      <script type="application/ld+json">
        {JSON.stringify(structuredData)}
      </script>
    </Helmet>
  );
};
