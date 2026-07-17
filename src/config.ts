/**
 * ============================================================
 *  SITE CONFIG — edit this file to personalize the whole site.
 *  Anything marked TODO is a placeholder for you to replace.
 *  See TODO.md in the project root for the full checklist.
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
 * Set `href` to TODO-marked values once you have them. Leave `href`
 * empty ('') to hide a link entirely.
 */
export const SOCIALS = {
  github: 'https://github.com/sean-yap',
  linkedin: 'https://www.linkedin.com/in/yi-sean-yap/',
  email: 'yapyisean1@gmail.com', // TODO: confirm the email you want public
  // resume lives in /public — see TODO.md
  resume: '/resume.pdf',
};

/** Sidebar navigation links. */
export const NAV_LINKS = [
  { label: 'Work', href: '/#work' },
  { label: 'Writing', href: '/blog' },
  { label: 'About', href: '/about' },
];

/** Short role line shown under your name in the sidebar. */
export const ROLE = 'Business analyst → product & technical';
