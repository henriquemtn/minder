export interface SiteConfig {
  name: string;
  description: string;
  url: string;
  logoUrl: string;
  favicon: string;
  keywords: string[];
  author: string;
  social: {
    discord?: string;
    github?: string;
    linkedin?: string;
  };
  seo: {
    title: string;
    description: string;
    ogImage: string;
  };
}

export const siteConfig: SiteConfig = {
  name: "Gray",
  description: "Maybe is an all-in-one personal finance platform. Track, optimize, grow, and manage your money through every stage of life.",
  url: "https://quackfy.com/templates/gray",
  logoUrl: "/logo.png",
  favicon: "/favicon.ico",
  keywords: ["react", "nextjs", "typescript", "tailwindcss"],
  author: "Henrique Silveira",
  social: {
    github: "https://github.com/henriquemtn",
    linkedin: "https://linkedin.com/in/henriquemtn",
    discord: "https://discord.gg/",
  },
  seo: {
    title: "Gray - Template by Quackfy",
    description: "Meta description for SEO purposes. This should be a concise summary of the page content.",
    ogImage: "/og-image.png"
  }
};

// Função para gerar sitemap dinâmico
export const generateSitemap = () => {
  const baseUrl = siteConfig.url;
  
  const routes = [
    { url: baseUrl, priority: 1.0, changefreq: 'daily' },
    { url: `${baseUrl}/about`, priority: 0.8, changefreq: 'monthly' },
    { url: `${baseUrl}/contact`, priority: 0.7, changefreq: 'monthly' },
    { url: `${baseUrl}/blog`, priority: 0.9, changefreq: 'weekly' },
  ];

  return routes;
};