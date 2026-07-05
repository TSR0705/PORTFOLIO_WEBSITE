import { ProjectShowcase } from "@/components/ui/project-showcase";
import { Metadata } from "next";
import { projects } from "@/lib/projects";

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://tanmaysinghrajput.vercel.app";

export const metadata: Metadata = {
  title: "Projects Deck | Tanmay Singh | SDE & Cloud Portfolio",
  description: "Browse the engineering portfolio, selected work architectures, and build logs of Tanmay Singh. Features CodeWeave, LoadLab + DeployBot, and DBMS Self-Healing engines.",
  alternates: {
    canonical: `${siteUrl}/projects`,
  },
  openGraph: {
    title: "Projects Deck | Tanmay Singh | SDE & Cloud Portfolio",
    description: "Browse the engineering portfolio, selected work architectures, and build logs of Tanmay Singh. Features CodeWeave, LoadLab + DeployBot, and DBMS Self-Healing engines.",
    url: `${siteUrl}/projects`,
    type: "website",
    images: ["/MY_IMAGE.webp"],
  },
  twitter: {
    card: "summary_large_image",
    title: "Projects Deck | Tanmay Singh | SDE & Cloud Portfolio",
    description: "Browse the engineering portfolio, selected work architectures, and build logs of Tanmay Singh. Features CodeWeave, LoadLab + DeployBot, and DBMS Self-Healing engines.",
    images: ["/MY_IMAGE.webp"],
  }
};

import { redirect } from "next/navigation";

export default function ProjectsPage() {
  redirect("/#projects");
}
