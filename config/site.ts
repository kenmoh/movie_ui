export type SiteConfig = typeof siteConfig;

export const siteConfig = {
  name: "Movie Review",
  description: "A website for reviewing Movies, Books and Music.",
  navItems: [
    {
      href: "/",
    },
    {
      label: "Movies",
      href: "/movies",
    },
    {
      label: "Music",
      href: "/music",
    },
    {
      label: "Books",
      href: "/books",
    },
    {
      label: "Contact",
      href: "/contact",
    },
  ],
  navMenuItems: [
    {
      href: "/",
    },
    {
      label: "Movies",
      href: "/movies",
    },
    {
      label: "Music",
      href: "/music",
    },
    {
      label: "Books",
      href: "/books",
    },
    {
      label: "Contact",
      href: "/contact",
    },
  ],
};
