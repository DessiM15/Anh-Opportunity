import type { Metadata } from "next";
import ServicesContent from "@/components/ServicesContent";

export const metadata: Metadata = {
  title: "Financial Services & Risk Management | Qualified Plans & Executive Benefits",
  description:
    "Comprehensive financial services including SIMPLE IRAs, 401(k) plans, defined benefit plans, executive bonus, deferred compensation, split-dollar arrangements, and business succession planning. Sugar Land, TX.",
  keywords: [
    "financial services Sugar Land TX",
    "risk management advisor",
    "qualified retirement plans",
    "401k plans",
    "defined benefit plans",
    "executive bonus plans",
    "deferred compensation",
    "split-dollar arrangements",
    "business succession planning",
    "3Mark Financial",
  ],
  openGraph: {
    title: "Financial Services & Risk Management | Doan Financial Services",
    description:
      "Equipping clients for effective financial risk management through collaboration with CPAs and estate planning attorneys.",
    url: "/services",
  },
  alternates: {
    canonical: "/services",
  },
};

export default function ServicesPage() {
  return <ServicesContent />;
}
