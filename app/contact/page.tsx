import { ProfessionalConnect } from "@/components/ui/get-in-touch";
import { Metadata } from "next";

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://tanmaysinghrajput.vercel.app";

export const metadata: Metadata = {
  title: "Contact Tanmay Singh | Software Engineer SDE & Backend Roles",
  description: "Get in touch with Tanmay Singh for SDE, Backend Developer, and Cloud Engineering opportunities. Access my professional email, LinkedIn, and GitHub profiles.",
  alternates: {
    canonical: `${siteUrl}/contact`,
  },
  openGraph: {
    title: "Contact Tanmay Singh | Software Engineer SDE & Backend Roles",
    description: "Get in touch with Tanmay Singh for SDE, Backend Developer, and Cloud Engineering opportunities. Access my professional email, LinkedIn, and GitHub profiles.",
    url: `${siteUrl}/contact`,
    type: "website",
    images: ["/MY_IMAGE.webp"],
  },
  twitter: {
    card: "summary_large_image",
    title: "Contact Tanmay Singh | Software Engineer SDE & Backend Roles",
    description: "Get in touch with Tanmay Singh for SDE, Backend Developer, and Cloud Engineering opportunities. Access my professional email, LinkedIn, and GitHub profiles.",
    images: ["/MY_IMAGE.webp"],
  }
};

export default function ContactPage() {
  return (
    <main className="min-h-screen w-full bg-black pt-28 md:pt-36 flex flex-col justify-between">
      <div className="flex-grow">
        <ProfessionalConnect />
      </div>
    </main>
  );
}
