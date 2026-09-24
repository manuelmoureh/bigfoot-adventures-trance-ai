import type { MetadataRoute } from "next";

export const dynamic = "force-static";

const BASE_URL = "https://manuelmoureh.github.io/bigfoot-adventures-site";

const ROUTES = [
  "",
  "for-travel-agents",
  "services",
  "fleet",
  "guides",
  "gallery",
  "destinations",
  "reviews",
  "about",
  "agent-profile",
  "request-a-rate",
  "plan-a-trip",
  "nairobi-day-tours",
  "contact",
  "privacy",
  "terms",
  "ja",
  "es",
  "ru",
];

export default function sitemap(): MetadataRoute.Sitemap {
  return ROUTES.map((route) => ({
    url: `${BASE_URL}/${route}`,
    lastModified: new Date(),
  }));
}
