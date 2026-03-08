# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

```bash
npm run dev          # Start dev server (HMR)
npm run build        # Type-check + production build
npm run lint         # Run ESLint
npm run lint:fix     # Auto-fix ESLint issues
npm run format       # Format all files with Prettier
npm run format:check # Check formatting without writing
npm run preview      # Preview production build
npm run cy:open      # Open Cypress interactive runner
npm run cy:run       # Run all Cypress tests headlessly
npm run cy:run:e2e       # Run E2E tests only
npm run cy:run:component # Run component tests only
```

## Stack

- **React 19** + **TypeScript** (strict)
- **Vite 7** — bundler and dev server
- **Tailwind CSS v4** — via `@tailwindcss/vite` plugin (no `tailwind.config.js` needed)
- **ESLint 9** flat config (`eslint.config.js`) with `typescript-eslint`, `react-hooks`, `react-refresh`, and `eslint-plugin-prettier`
- **Prettier** config in `.prettierrc`: no semis, single quotes, 2-space indent, 100-char print width, ES5 trailing commas
- **Cypress 14** — E2E specs in `cypress/e2e/**/*.cy.ts`, component specs co-located in `src/**/*.cy.tsx`; config in `cypress.config.ts`
- **TanStack Router v1** — file-based routing via `src/routes/`. Route tree is auto-generated into `src/routeTree.gen.ts` (gitignored) by the Vite plugin on every dev/build. Root layout in `src/routes/__root.tsx`.
- **TanStack Query v5** — `QueryClient` is created in `main.tsx` and passed as router context. Use `useQuery`/`useMutation` in route components.
- **shadcn/ui** — component library on top of Tailwind v4. Add components with `npx shadcn@latest add <component>`. Components land in `src/components/ui/`. Helper `cn()` lives in `src/lib/utils.ts`.
- **Path alias** — `@/` maps to `src/` (configured in `tsconfig.app.json` and `vite.config.ts`).

## Project Structure

```
src/
├── auth/           # Authentication logic and guards
├── components/
│   └── ui/         # shadcn generated components (do not edit manually)
├── contexts/       # React context providers
├── hooks/          # Custom React hooks
├── lib/
│   └── utils.ts    # cn() helper (clsx + tailwind-merge)
├── pages/          # Page-level components (consumed by routes)
├── routes/         # TanStack Router file-based routes
├── types/          # Shared TypeScript types and interfaces
└── utils/          # Pure utility/helper functions
```

## Styling

- Always use Tailwind classes. Avoid inline `style={{}}` props.
- Brand tokens (`bg-brand-blue`, `text-text-heading`, etc.) and gradient utilities (`bg-nav-gradient`, `bg-hero-gradient`, `bg-cta-gradient`, `shadow-cta`) are defined in `src/index.css`.
- shadcn tokens (`bg-primary`, `text-muted-foreground`, etc.) are also available via CSS variables in `src/index.css`.
- Prettier violations are reported as ESLint **warnings** (not errors). Run `npm run format` before committing.
