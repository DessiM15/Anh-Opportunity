import type { Metadata } from "next";
import Hero from "@/components/Hero";
import Opportunity from "@/components/Opportunity";
import WhyCollaborate from "@/components/WhyCollaborate";
import ApexAdvantage from "@/components/ApexAdvantage";
import AboutAnh from "@/components/AboutAnh";
import BlogInsights from "@/components/BlogInsights";
import InquiryForm from "@/components/InquiryForm";
import Gallery from "@/components/Gallery";

export const metadata: Metadata = {
  title: "Insurance Agency Partnership & Recruitment | Expand Your Reach",
  description:
    "Join Doan Financial Services and expand your insurance agency through cross-referrals, lead generation, mentorship, and access to A+ rated carriers via 3Mark Financial. Sugar Land, TX.",
  openGraph: {
    title: "Expand Your Reach. Grow Together. | Doan Financial Services",
    description:
      "Partner with Doan Financial Services to expand your insurance agency, access new markets, and grow together.",
    url: "/",
  },
  alternates: {
    canonical: "/",
  },
};

export default function Home() {
  return (
    <>
      <Hero />
      <Opportunity />
      <WhyCollaborate />
      <ApexAdvantage />
      <AboutAnh />
      <BlogInsights />
      <InquiryForm />
      <Gallery />
    </>
  );
}
