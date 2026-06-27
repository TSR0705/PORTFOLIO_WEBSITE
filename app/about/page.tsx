import AboutSection from "@/components/about-section";
import { Metadata } from "next";

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://tanmaysinghrajput.vercel.app";

export const metadata: Metadata = {
  title: "About Tanmay Singh | Software Engineer | SDE, Backend & Cloud",
  description: "Learn more about Tanmay Singh, a B.Tech Computer Science and Engineering (Cloud Computing) student at SRMIST. Explore my educational background, SDE competencies, and software engineering philosophy.",
  alternates: {
    canonical: `${siteUrl}/about`,
  },
  openGraph: {
    title: "About Tanmay Singh | Software Engineer | SDE, Backend & Cloud",
    description: "Learn more about Tanmay Singh, a B.Tech Computer Science and Engineering (Cloud Computing) student at SRMIST. Explore my educational background, SDE competencies, and software engineering philosophy.",
    url: `${siteUrl}/about`,
    type: "profile",
    images: ["/MY_IMAGE.webp"],
  },
  twitter: {
    card: "summary_large_image",
    title: "About Tanmay Singh | Software Engineer | SDE, Backend & Cloud",
    description: "Learn more about Tanmay Singh, a B.Tech Computer Science and Engineering (Cloud Computing) student at SRMIST. Explore my educational background, SDE competencies, and software engineering philosophy.",
    images: ["/MY_IMAGE.webp"],
  }
};

export default function AboutPage() {
  return (
    <main className="min-h-screen w-full bg-black pt-28 md:pt-36 flex flex-col justify-center pb-12 md:pb-20">
      <AboutSection />
    </main>
  );
}
