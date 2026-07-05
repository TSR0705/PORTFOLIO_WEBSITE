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

export default function ProjectsPage() {
  const collectionSchema = {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    "@id": `${siteUrl}/projects/#collection`,
    "url": `${siteUrl}/projects`,
    "name": "Projects Deck | Tanmay Singh",
    "description": "Selected engineering works and system design case studies by Tanmay Singh.",
    "about": {
      "@type": "Person",
      "name": "Tanmay Singh"
    },
    "mainEntity": {
      "@type": "ItemList",
      "itemListElement": projects.map((p, idx) => ({
        "@type": "ListItem",
        "position": idx + 1,
        "url": `${siteUrl}/projects/${p.id}`,
        "name": p.title,
        "description": p.shortDescription
      }))
    }
  };

  return (
    <main className="min-h-screen w-full bg-black flex flex-col items-center justify-center pt-24 pb-16">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(collectionSchema) }}
      />
      <ProjectShowcase />
    </main>
  );
}
