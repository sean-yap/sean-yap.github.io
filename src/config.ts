/**
 * ============================================================
 *  SITE CONFIG — edit this file to personalize the whole site.
 * ============================================================
 */

export const SITE = {
  /** Your name, shown in the nav and footer. */
  name: 'Sean Yap',

  /** Browser tab title + default SEO title. */
  title: 'Sean Yap | Business Analyst → Product & Technical',

  /** One-sentence SEO/site description. */
  description:
    'Business Analyst transitioning into product and technical work. Building things, documenting the journey, and solving problems with code.',

  /** The big one-liner in the hero. Make it yours. */
  tagline: 'Business Analyst becoming a Product & Technical builder.',

  /** Short supporting sentence under the tagline. */
  subtagline:
    'I document this transition in the open and showcase the problems I solve with code along the way.',

  /** Live URL (user pages repo serves from the root). */
  url: 'https://sean-yap.github.io',
};

/**
 * Social / contact links shown in the nav, footer, and contact section.
 * Leave a value empty ('') to hide that link entirely.
 */
export const SOCIALS = {
  github: 'https://github.com/sean-yap',
  linkedin: 'https://www.linkedin.com/in/yi-sean-yap/',
  email: 'yapyisean1@gmail.com',
  // Not rendered anywhere yet — drop resume.pdf into /public when ready.
  resume: '',
};

/**
 * Sidebar navigation links. The Writing link is dropped automatically
 * (in Sidebar.astro) while the blog has no published posts.
 */
export const NAV_LINKS = [
  { label: 'Projects', href: '/#projects' },
  { label: 'Writing', href: '/blog' },
  { label: 'About', href: '/about' },
];

/** Short role line shown under your name in the sidebar. */
export const ROLE = 'Business analyst → product & technical';
