import type { MetadataRoute } from 'next';
import sql from '@/lib/db';

interface PostRow {
  slug: string;
}

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://www.yukselakademi.blog';

  // Fetch all posts from the Neon database dynamically
  let posts: PostRow[] = [];
  try {
    posts = await sql`SELECT slug FROM posts` as PostRow[];
  } catch (error) {
    console.error('Error fetching posts for sitemap:', error);
  }

  // Define static routes
  const staticRoutes: MetadataRoute.Sitemap = [
    {
      url: baseUrl,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 1.0,
    },
    {
      url: `${baseUrl}/blog`,
      lastModified: new Date(),
      changeFrequency: 'daily',
      priority: 0.8,
    },
    {
      url: `${baseUrl}/hizmetler/ilkokul-matematik-ozel-ders`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.9,
    },
    {
      url: `${baseUrl}/hizmetler/lgs-ortaokul-matematik-ozel-ders`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.9,
    },
    {
      url: `${baseUrl}/hizmetler/yks-lise-matematik-ozel-ders`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.9,
    },
    {
      url: `${baseUrl}/hizmetler/izmir-matematik-ozel-ders`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.9,
    },
  ];

  // Map dynamic blog post routes
  const blogRoutes = posts.map((post) => ({
    url: `${baseUrl}/blog/${post.slug}`,
    lastModified: new Date(), // Ideally we'd use a post updated date if available, but a default Date() or static fallback works
    changeFrequency: 'monthly' as const,
    priority: 0.6,
  }));

  return [...staticRoutes, ...blogRoutes];
}
