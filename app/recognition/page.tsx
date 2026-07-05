import AchievementsSection from "@/components/achievements-section";
import { Metadata } from "next";

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://tanmaysinghrajput.vercel.app";

export const metadata: Metadata = {
  title: "Tanmay Singh Achievements | Samsung PRISM, Hackathons & Honors",
  description: "Explore the professional honors and certifications of Tanmay Singh, including Samsung PRISM selection, SRMIST Java Project Expo, and GitHub hackathon wins.",
  alternates: {
    canonical: `${siteUrl}/recognition`,
  },
  openGraph: {
    title: "Tanmay Singh Achievements | Samsung PRISM, Hackathons & Honors",
    description: "Explore the professional honors and certifications of Tanmay Singh, including Samsung PRISM selection, SRMIST Java Project Expo, and GitHub hackathon wins.",
    url: `${siteUrl}/recognition`,
    type: "website",
    images: ["/MY_IMAGE.webp"],
  },
  twitter: {
    card: "summary_large_image",
    title: "Tanmay Singh Achievements | Samsung PRISM, Hackathons & Honors",
    description: "Explore the professional honors and certifications of Tanmay Singh, including Samsung PRISM selection, SRMIST Java Project Expo, and GitHub hackathon wins.",
    images: ["/MY_IMAGE.webp"],
  }
};

import { redirect } from "next/navigation";

export default function RecognitionPage() {
  redirect("/#recognition");
}
