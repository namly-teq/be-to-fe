import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

export default defineConfig({
  integrations: [
    starlight({
      title: 'BE to FE',
      description:
        'A comprehensive frontend learning guide for backend developers — from zero to frontend architecture.',
      defaultLocale: 'en',
      sidebar: [
        {
          label: '🏠 Overview',
          link: '/',
        },
        {
          label: '1. Frontend Fundamentals',
          link: '/fundamentals/',
        },
        {
          label: '2. Learning Roadmap',
          items: [
            { label: 'Beginner (0 → basics)', link: '/roadmap/beginner/' },
            { label: 'Intermediate (build features)', link: '/roadmap/intermediate/' },
            { label: 'Advanced (architecture)', link: '/roadmap/advanced/' },
          ],
        },
        {
          label: '3. Key Concepts',
          items: [
            { label: 'HTML', link: '/concepts/html/' },
            { label: 'CSS', link: '/concepts/css/' },
            { label: 'JavaScript in the Browser', link: '/concepts/javascript/' },
            { label: 'React', link: '/concepts/react/' },
            { label: 'API Integration', link: '/concepts/api-integration/' },
            { label: 'Code & Craft (TEQ Course)', link: '/concepts/code-craft/' },
            { label: 'TEQ Tools', link: '/concepts/teq-tools/' },
          ],
        },
        {
          label: '4. Practical Guide',
          items: [
            { label: 'Project Structure', link: '/practical/project-structure/' },
            { label: 'Reading Frontend Code', link: '/practical/reading-code/' },
            { label: 'Debugging UI', link: '/practical/debugging/' },
            { label: 'Common Pitfalls', link: '/practical/pitfalls/' },
            { label: 'Collaborating with FE Teams', link: '/practical/collaboration/' },
          ],
        },
        {
          label: '5 + 6. Best Practices',
          link: '/best-practices/',
        },
        {
          label: '7. Fast-track Learning Plan',
          link: '/fast-track/',
        },
        {
          label: '🎯 Practice: Real TEQ FE Dev',
          link: '/practice/',
        },
      ],
    }),
  ],
});
