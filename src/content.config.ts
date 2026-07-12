import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

// The blog collection: every .md file in src/content/blog becomes a post.
const blog = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/blog' }),
  schema: z.object({
    title: z.string(),
    description: z.string(),
    pubDate: z.coerce.date(),
    updatedDate: z.coerce.date().optional(),
    tags: z.array(z.string()).default([]),
    draft: z.boolean().default(false),
  }),
});

// The projects collection: every .md file in src/content/projects becomes
// a full case study at /projects/<slug>. Cards on the home page link here.
const projects = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/projects' }),
  schema: z.object({
    title: z.string(),
    description: z.string(),
    /** One line stating the real problem this solved. */
    problem: z.string(),
    /** The punchy result line (shown as the accent chip). */
    impact: z.string(),
    pubDate: z.coerce.date(),
    updatedDate: z.coerce.date().optional(),
    tags: z.array(z.string()).default([]),
    /** Tools/tech used, shown in the case-study header. */
    stack: z.array(z.string()).default([]),
    draft: z.boolean().default(false),
    /** Lower = earlier on the home page. */
    order: z.number().default(99),
  }),
});

export const collections = { blog, projects };
