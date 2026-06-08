export default function StructuredData() {
  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "FinancialService",
    name: "Doan Financial Services",
    description:
      "Independent insurance financial firm specializing in risk management and business advisory, affiliated with 3Mark Financial.",
    url: "https://anh-opportunity.vercel.app",
    telephone: "+19726071442",
    email: "anh@doanfs.com",
    address: {
      "@type": "PostalAddress",
      addressLocality: "Sugar Land",
      addressRegion: "TX",
      addressCountry: "US",
    },
    founder: {
      "@type": "Person",
      name: "Anh Doan",
      jobTitle: "Founder & Principal Advisor",
      description:
        "BS Electrical Engineering from Kansas State University with 27 years of corporate experience in Engineering and Financial Services.",
      alumniOf: {
        "@type": "CollegeOrUniversity",
        name: "Kansas State University",
      },
      knowsAbout: [
        "Risk Management",
        "Business Advisory",
        "Life Insurance",
        "Financial Planning",
        "Business Succession Planning",
      ],
    },
    areaServed: {
      "@type": "State",
      name: "Texas",
    },
    serviceType: [
      "Life Insurance",
      "Risk Management",
      "Business Advisory",
      "Retirement Planning",
      "Executive Benefits",
      "Business Succession Planning",
    ],
    brand: {
      "@type": "Organization",
      name: "3Mark Financial",
      description: "Affiliated Advisors",
    },
    sameAs: [],
  };

  const websiteSchema = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: "Doan Financial Services",
    url: "https://anh-opportunity.vercel.app",
    description:
      "Partner with Doan Financial Services to expand your insurance agency, access new markets, and grow together.",
    publisher: {
      "@type": "Organization",
      name: "Doan Financial Services",
    },
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(organizationSchema),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(websiteSchema),
        }}
      />
    </>
  );
}
