import type { MetadataRoute } from "next";

import { site } from "@/config/site";
import { cases } from "@/content/cases";

export default function sitemap(): MetadataRoute.Sitemap {
  const staticRoutes = ["", "/services", "/cases", "/about", "/contact"].map(
    (path) => ({
      url: `${site.url}${path}`,
      lastModified: new Date(),
      changeFrequency: "monthly" as const,
      priority: path === "" ? 1 : 0.8,
    })
  );

  const caseRoutes = cases.map((c) => ({
    url: `${site.url}/cases/${c.slug}`,
    lastModified: new Date(),
    changeFrequency: "monthly" as const,
    priority: 0.6,
  }));

  return [...staticRoutes, ...caseRoutes];
}
