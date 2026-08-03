import { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
    },
    sitemap: "https://davidsanjaya.vercel.app/sitemap.xml",
    host: "https://davidsanjaya.vercel.app",
  };
}
