/** @type {import('next-sitemap').IConfig} */
const config = {
  siteUrl: 'https://www.sinaridesa.com',
  generateRobotsTxt: true,
  sitemapSize: 5000,
  changefreq: 'daily',
  priority: 0.9,
  robotsTxtOptions: {
    policies: [
      { userAgent: '*', allow: '/' },
      { userAgent: 'Googlebot', allow: '/' },
    ],
    additionalSitemaps: [
      'https://www.sinaridesa.com/sitemap.xml',
    ],
  },
};

module.exports = config;
