import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import GlobalNavbar from "@/components/global-navbar";
import AppPreloader from "@/components/app-preloader";
import GlobalFooter from "@/components/global-footer";
import ResumeModal from "@/components/resume-modal";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://tanmaysinghrajput.vercel.app";

export const viewport: Viewport = {
  themeColor: "#000000",
  width: "device-width",
  initialScale: 1,
};

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Tanmay Singh | Software Developer | Backend & Cloud Computing",
    template: "%s | Tanmay Singh",
  },
  description: "Portfolio of Tanmay Singh, a B.Tech Computer Science and Engineering (Cloud Computing) student at SRMIST. Explore software engineering projects, backend systems, cloud-native applications, distributed systems, technical case studies, achievements, and engineering work.",
  keywords: [
    "Tanmay Singh",
    "Tanmay Singh Portfolio",
    "Tanmay Singh SRMIST",
    "Software Developer",
    "Software Engineering Student",
    "Backend Developer",
    "Cloud Computing",
    "Distributed Systems",
    "Node.js Developer",
    "Next.js Developer",
    "Java Developer",
    "Docker",
    "Kubernetes",
    "Full Stack Developer",
    "Samsung PRISM"
  ],
  authors: [{ name: "Tanmay Singh" }],
  creator: "Tanmay Singh",
  publisher: "Tanmay Singh",
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
    canonical: "./",
  },
  verification: {
    google: [
      "xNAxrW8mmPtmmFIViHJAPP5MpPYPqv2JnOJLfsg4sGE",
      "30i3LLug2mekn-s-m2F7dypdrko3lLAPlUx09zLJojU"
    ],
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: siteUrl,
    siteName: "Tanmay Singh | Portfolio",
    title: "Tanmay Singh | Software Developer | Backend & Cloud Computing",
    description: "Portfolio of Tanmay Singh, a B.Tech Computer Science and Engineering (Cloud Computing) student at SRMIST. Explore software engineering projects, backend systems, cloud-native applications, distributed systems, technical case studies, achievements, and engineering work.",
    images: [
      {
        url: "/MY_IMAGE.webp",
        width: 1200,
        height: 630,
        alt: "Tanmay Singh Portfolio",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Tanmay Singh | Software Developer | Backend & Cloud Computing",
    description: "Portfolio of Tanmay Singh, a B.Tech Computer Science and Engineering (Cloud Computing) student at SRMIST. Explore software engineering projects, backend systems, cloud-native applications, distributed systems, technical case studies, achievements, and engineering work.",
    creator: "@TanmaySinghRa18",
    images: ["/MY_IMAGE.webp"],
  },
  icons: {
    icon: [
      { url: "/icon.png?v=3", type: "image/png" }
    ],
    apple: [
      { url: "/icon.png?v=3", type: "image/png" }
    ],
  },
  manifest: "/site.webmanifest",
};

// Structured Schemas
const personSchema = {
  "@context": "https://schema.org",
  "@type": "Person",
  "@id": `${siteUrl}/#person`,
  "name": "Tanmay Singh",
  "url": siteUrl,
  "image": `${siteUrl}/MY_IMAGE.webp`,
  "description": "Tanmay Singh is a B.Tech Computer Science and Engineering (Cloud Computing) student at SRM Institute of Science and Technology. He is a Software Developer focused on Backend Development, Cloud Computing, Distributed Systems, and System Design.",
  "jobTitle": "Software Developer",
  "alumniOf": {
    "@type": "EducationalOrganization",
    "name": "SRM Institute of Science and Technology",
    "sameAs": "https://www.srmist.edu.in/"
  },
  "sameAs": [
    "https://github.com/TSR0705",
    "https://www.linkedin.com/in/tanmay-singh-rajput",
    "https://x.com/TanmaySinghRa18",
    "https://leetcode.com/u/tanmay_singh_rajput/"
  ],
  "knowsAbout": [
    "Backend Development",
    "Cloud Computing",
    "DevOps",
    "Distributed Systems",
    "Software Engineering",
    "System Design",
    "Database Reliability",
    "Cybersecurity"
  ]
};

const websiteSchema = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  "@id": `${siteUrl}/#website`,
  "name": "Tanmay Singh | Portfolio",
  "url": siteUrl,
  "description": "Portfolio of Tanmay Singh, a B.Tech Computer Science and Engineering (Cloud Computing) student at SRMIST. Explore software engineering projects, backend systems, cloud-native applications, distributed systems, technical case studies, achievements, and engineering work.",
  "publisher": {
    "@id": `${siteUrl}/#person`
  },
  "hasPart": [
    {
      "@type": "WebPage",
      "@id": `${siteUrl}/about/#webpage`,
      "url": `${siteUrl}/about`,
      "name": "About Me"
    },
    {
      "@type": "CollectionPage",
      "@id": `${siteUrl}/projects/#collection`,
      "url": `${siteUrl}/projects`,
      "name": "Projects Deck"
    },
    {
      "@type": "WebPage",
      "@id": `${siteUrl}/recognition/#webpage`,
      "url": `${siteUrl}/recognition`,
      "name": "Recognition & Achievements"
    },
    {
      "@type": "WebPage",
      "@id": `${siteUrl}/contact/#webpage`,
      "url": `${siteUrl}/contact`,
      "name": "Contact Professional Connection"
    }
  ]
};

const profilePageSchema = {
  "@context": "https://schema.org",
  "@type": "ProfilePage",
  "@id": `${siteUrl}/#profilepage`,
  "url": siteUrl,
  "name": "Tanmay Singh Profile Page",
  "mainEntity": {
    "@id": `${siteUrl}/#person`
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-black">
        {/* Inject Structured Data Schemas */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(personSchema) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(profilePageSchema) }}
        />

        <AppPreloader />
        <GlobalNavbar />
        <div className="flex-grow w-full flex flex-col">{children}</div>
        <GlobalFooter />
        <ResumeModal />
      </body>
    </html>
  );
}


