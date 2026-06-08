import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import StructuredData from "@/components/StructuredData";

const siteUrl = "https://anh-opportunity.vercel.app";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Doan Financial Services | Insurance Agency Partnership in Texas",
    template: "%s | Doan Financial Services",
  },
  description:
    "Partner with Doan Financial Services to expand your insurance agency, access new markets, and grow together. Affiliated with 3Mark Financial. Based in Sugar Land, TX.",
  keywords: [
    "insurance agency partnership",
    "financial services collaboration",
    "Doan Financial Services",
    "3Mark Financial",
    "insurance agency growth",
    "risk management",
    "Sugar Land TX",
    "life insurance agency",
    "business advisory",
    "agency recruitment",
  ],
  authors: [{ name: "Anh Doan", url: siteUrl }],
  creator: "Doan Financial Services",
  publisher: "Doan Financial Services",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: siteUrl,
    siteName: "Doan Financial Services",
    title: "Doan Financial Services | Expand Your Reach. Grow Together.",
    description:
      "Partner with Doan Financial Services to expand your insurance agency, access new markets, and grow together. Affiliated with 3Mark Financial.",
    images: [
      {
        url: "/assets/doan-fs-logo.png",
        width: 1200,
        height: 630,
        alt: "Doan Financial Services",
      },
    ],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  alternates: {
    canonical: siteUrl,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <StructuredData />
      </head>
      <body className="antialiased">
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
