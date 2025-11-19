import type { Metadata, Site, Socials } from "@types";

export const SITE: Site = {
  TITLE: "Ungrateful Computer",
  DESCRIPTION: "Swift, Typescript, book and game ramblings.",
  EMAIL: "oscar@ungrateful.computer",
  NUM_POSTS_ON_HOMEPAGE: 5,
  NUM_PROJECTS_ON_HOMEPAGE: 3,
};

export const HOME: Metadata = {
  TITLE: "Home",
  DESCRIPTION: "Astro Micro is an accessible theme for Astro.",
};

export const BLOG: Metadata = {
  TITLE: "Blog",
  DESCRIPTION: "A collection of articles on topics I am passionate about.",
};

export const PROJECTS: Metadata = {
  TITLE: "Projects",
  DESCRIPTION:
    "A collection of my projects with links to repositories and live demos.",
};

export const SOCIALS: Socials = [
  { NAME: "Mastodon", HREF: "https://hachyderm.io/@oscb" },
  { NAME: "Bluesky", HREF: "https://bsky.app/profile/ungrateful.computer" },
  { NAME: "GitHub", HREF: "https://github.com/oscb" },
  { NAME: "LinkedIn", HREF: "https://www.linkedin.com/in/oscarbazaldua/" },
];
