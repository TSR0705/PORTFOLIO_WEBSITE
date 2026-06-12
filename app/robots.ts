import { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://tanmaysinghrajput.vercel.app";

  return {
    rules: {
      userAgent: "*",
      allow: "/",
      disallow: ["/old-about", "/api/"],
    },
    sitemap: `${siteUrl}/sitemap.xml`,
  };
}
