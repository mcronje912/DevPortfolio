// src/config/site.ts
export type SiteConfig = typeof siteConfig;

export const siteConfig = {
  name: "Marco Cronje",
  description: "Full Stack Developer & IoT Systems Engineer based in Johannesburg.",
  navItems: [
    {
      label: "Home",
      href: "/",
    },
    {
      label: "Projects",
      href: "/projects",
    },
    {
      label: "Skills",
      href: "/skills",
    },
    {
      label: "Experience",
      href: "/experience",
    },
    {
      label: "About",
      href: "/about",
    },
    {
      label: "Contact",
      href: "/contact",
    },
  ],
  // Use the same items for the mobile menu for consistency
  navMenuItems: [
    {
      label: "Home",
      href: "/",
    },
    {
      label: "Projects",
      href: "/projects",
    },
    {
      label: "Skills",
      href: "/skills",
    },
    {
      label: "Experience",
      href: "/experience",
    },
    {
      label: "About",
      href: "/about",
    },
    {
      label: "Contact",
      href: "/contact",
    },
  ],
  links: {
    github: "https://github.com/mcronje912",
    linkedin: "https://www.linkedin.com/in/marco-cronje/",
    email: "mailto:marcocronje@gmail.com",
  },
};