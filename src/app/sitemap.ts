import type { MetadataRoute } from 'next';
import { projects } from '@/data/projects';
import { siteUrl } from '@/data/site-url';

export default function sitemap(): MetadataRoute.Sitemap {
  return [{ url: siteUrl }, ...projects.map((p) => ({ url: `${siteUrl}/projects/${p.slug}` }))];
}
