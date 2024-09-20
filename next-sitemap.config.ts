import { IConfig } from "next-sitemap";

const config: IConfig = {
  siteUrl: "https://www.sinaridesa.com", // Ganti dengan URL website Anda
  generateRobotsTxt: true, // Menghasilkan robots.txt
  sitemapSize: 5000, // Batas maksimal halaman per sitemap
  changefreq: "daily", // Frekuensi perubahan halaman
  priority: 0.9, // Prioritas halaman
  robotsTxtOptions: {
    policies: [
      { userAgent: "*", allow: "/" },
      { userAgent: "Googlebot", allow: "/" },
      { userAgent: "*", disallow: "/admin" },
    ],
    additionalSitemaps: ["https://www.sinaridesa.com/sitemap.xml"],
  },
};

export default config;
