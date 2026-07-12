/**
 * PROJECTS, "Problems I Solve with Code"
 * Impact-forward: the `impact` line is the visual hook on each card.
 * Keep it short and result-oriented (a number, a before/after, an outcome).
 * `featured: true` shows it on the home page.
 *
 * Each card links to its full case study at /projects/<slug>
 * (written in src/content/projects/).
 */
export interface Project {
  title: string;
  /** One line on what the problem was. */
  problem: string;
  /** The result, shown as the bold accent highlight. Keep it punchy. */
  impact: string;
  /** Optional: how you solved it (used on detail pages later). */
  approach: string;
  tags: string[];
  href: string;
  featured: boolean;
  /** Draft cards show in local dev only, never on the deployed site. */
  draft?: boolean;
}

export const PROJECTS: Project[] = [
  {
    title: 'NTE fishing automation',
    problem:
      'Levelling fishing to 10 meant ~5,000 catches of a manual minigame, plus a weekly stamina grind that never ends.',
    impact: '15-24 hrs of active clicking → fully unattended',
    approach:
      'An AutoHotkey v2 script that first exploited a UI bug to skip the minigame, then, after the patch, played it for real with a pixel-tracking control loop.',
    tags: ['AutoHotkey', 'Automation'],
    href: '/projects/nte-fishing-automation',
    featured: true,
  },
  {
    title: 'Brawl Stars draft assistant',
    problem:
      'Maxing brawlers is expensive and tier lists go stale every patch. Which few deserve the scarce resources?',
    impact: 'Mythic 1 (top ~1% of players) rotating just 3-4 maxed brawlers',
    approach:
      'Reframed upgrades as a resource-allocation problem: invest by durable draft roles, not volatile tier lists, with a React app coaching live drafts and ranking who to max next.',
    tags: ['React', 'Decision support'],
    href: '/projects/brawl-stars-draft-assistant',
    featured: true,
  },
  {
    title: 'BTO tranche calculator',
    problem:
      'BTO buyers pick a project to ballot for and a unit to commit to before any single source shows what a given price costs in cash vs CPF.',
    impact: 'Any unit price → full cash/CPF breakdown in seconds',
    approach:
      'A live-recalculating three-tranche receipt with cash/CPF splits and a CPF projection, every figure verified against HDB, IRAS and CPF sources (which caught 2 errors in the original spec).',
    tags: ['React', 'Fintech'],
    href: '/projects/bto-tranche-calculator',
    featured: true,
  },
  {
    title: 'Data misuse detection: onboarding at scale',
    problem:
      'Every system joining a data-misuse detection platform needed its AWS resources set up by hand, making onboarding slow and error-prone.',
    impact: 'Manual onboarding steps → one CloudFormation deploy',
    approach:
      'A CloudFormation template that provisions the detection and alerting pipeline per system, turning onboarding from a bespoke setup into a parameterised deploy.',
    tags: ['AWS', 'CloudFormation', 'Work'],
    href: '/projects/data-misuse-onboarding',
    featured: true,
    draft: true,
  },
  {
    title: 'Access module revamp (v2)',
    problem:
      'The access module of a web portal had accumulated friction in v1; the revamp rethinks how users request, receive and manage access.',
    impact: 'v1 pain points → redesigned v2 (in progress)',
    approach:
      'A ground-up version 2 of the access module, redesigned from observed v1 pain points rather than patched in place.',
    tags: ['Web portal', 'Product', 'Work'],
    href: '/projects/access-module-v2',
    featured: true,
    draft: true,
  },
];
