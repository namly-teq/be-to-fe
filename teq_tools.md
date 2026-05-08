---
title: TEQ Tools — Modern Frontend Mastery
description: The TEQ team's official guide to setting up and maintaining a modern frontend project — React, Vite, Next.js, TailwindCSS, and the teq-superplate scaffold tool.
---

import { Aside, Badge, Card, CardGrid } from '@astrojs/starlight/components';

<div style="display:flex; gap: 12px; flex-wrap: wrap; align-items: center; margin-bottom: 1.5rem;">
  <Badge text="Front-end Team" variant="note" />
  <Badge text="On the job training" variant="tip" />
  <Badge text="Required level: Internship" variant="caution" />
  <Badge text="⭐ 4.6 / 5 (14 reviews)" variant="success" />
</div>

## About This Course

**Modern Frontend Mastery: first step for beginner** is the TEQ Front-end team's official onboarding course. It teaches you how to set up, configure, and maintain a modern React/Next.js frontend project **the TEQ way** — including code quality tools, formatting, commit standards, and the `teq-superplate` scaffolding tool.

<Aside type="tip" title="Why this matters for backend developers">
This course is your practical bridge from "I understand React" to "I can work on a real TEQ frontend project." It covers the toolchain that every TEQ frontend developer uses daily — the same setup you'll encounter when you open a real project repository.
</Aside>

---

## Course Summary

<CardGrid>
  <Card title="4 Modules" icon="open-book">
    From project foundations to the magic `teq-superplate` scaffold tool.
  </Card>
  <Card title="15 Lessons" icon="list-format">
    Step-by-step guides covering React + Vite, Next.js, TailwindCSS, Vue, and Nuxt project setup.
  </Card>
  <Card title="Code Quality Stack" icon="approve-check-circle">
    ESLint, Prettier, lint-staged, commitlint, and Husky — the full TEQ quality pipeline.
  </Card>
  <Card title="teq-superplate" icon="rocket">
    One command to scaffold a fully configured TEQ project without manual setup.
  </Card>
</CardGrid>

| Detail | Value |
|---|---|
| **Created by** | Thang Nguyen · Front-end Team |
| **Last updated** | November 4, 2025 |
| **Modules** | 4 |
| **Lessons** | 15 |
| **Rating** | ⭐ 4.6 / 5 (14 reviews) |

---

## What's Inside

### Module 1 — Foundations of Modern Web Development

Project initialization and the TEQ code quality pipeline.

| Lesson | Description |
|---|---|
| Re-intro a foundation front-end technical | React + Vite overview; component-based approach and hot module replacement |
| ESLint | A "code cop" that scans for errors, stylistic inconsistencies, and improvements |
| Prettier | Auto-formats your code so the whole team writes in the same style |
| lint-staged | Runs linters only on staged files — clean code enforced before every commit |
| commitlint | Enforces clear, consistent commit message formats |
| Husky | Git hooks that wire ESLint, Prettier, and commitlint into your commit workflow |

### Module 2 — Step-by-Step Project Initialization Guides

Hands-on setup guides for every TEQ-supported framework.

| Lesson | Description |
|---|---|
| React + Vite | Scaffold a blazing-fast React project with Vite |
| Next.js | Initialize a Next.js project with SSR/SSG support |
| React + Vite + Biome | Replace ESLint + Prettier with the unified Biome tool |
| Vue | Set up a Vue.js development environment |
| Nuxt | Configure a Nuxt application from zero |
| TailwindCSS | Integrate TailwindCSS utility-first styling into any project |

### Module 3 — Essential Notes for Starting a Project

Critical patterns every TEQ frontend developer must know before writing feature code.

| Lesson | Description |
|---|---|
| Part 1 | Atomic Design principles; SVGR for SVG-as-component workflow |
| Part 2: Ky | Tiny, elegant HTTP client based on the Fetch API — the TEQ-preferred fetch wrapper |

### Module 4 — The Magic teq-superplate

> *"All configs above are quite difficult. So we cooked this for you."*

The `teq-superplate` CLI scaffolds a fully configured TEQ frontend project in one command — React + Vite (or Next.js) with ESLint, Prettier, Husky, commitlint, and TailwindCSS pre-wired.

<Aside type="tip" title="Start here for new projects">
For any new TEQ project, run `teq-superplate` first. You'll get all Module 1 & 2 configurations out of the box — no manual setup required.
</Aside>

---

## Embedded Course

Enroll and follow the course directly in the TEQ learning platform:

<div style="position: relative; width: 100%; padding-top: 62.5%; border-radius: 8px; overflow: hidden; border: 1px solid var(--sl-color-gray-5); margin: 1.5rem 0;">
  <iframe
    src="https://eazylearn.teqn.asia/courses/1"
    title="Modern Frontend Mastery: first step for beginner — EazyLearn TEQ"
    style="position: absolute; inset: 0; width: 100%; height: 100%; border: none;"
    allow="fullscreen"
    loading="lazy"
  ></iframe>
</div>

<Aside type="note">
If the iframe does not load, open the course directly: [eazylearn.teqn.asia/courses/1](https://eazylearn.teqn.asia/courses/1)
</Aside>

---

## How This Fits Your Learning Path

If you have followed the [Intermediate Roadmap](/roadmap/intermediate/), you can already build React features. This course takes you from "it works on my machine" to "it works consistently across the whole TEQ team":

| What you learned in this guide | What TEQ Tools adds |
|---|---|
| React + Vite setup | TEQ-style project structure + all tooling pre-configured |
| Writing clean JS | ESLint catches issues automatically on every save |
| Consistent code style | Prettier enforces formatting — no more style debates in PRs |
| Manual code review | Husky + lint-staged prevent bad code from being committed at all |
| Commits with messages | commitlint enforces structured commit messages for readable history |

**Next: [API Integration →](/concepts/api-integration/)