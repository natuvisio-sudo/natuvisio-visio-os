# 💡 VISIO-OS: A Structured Operating System for Human Clarity

**Project Name:** `natuvisio-visio-os`

> **Project Mission:** VISIO OS is a creator-first operating platform designed for **human clarity, well-being, and high-performance thinking**. This project serves as the foundational architecture for NATUVISIO's suite of digital evolution products.

## ✨ Engineering Philosophy: Top 1% Standard

This system is built for **predictability, scalability, and deterministic behavior**. We enforce **strong typing** (TypeScript strict mode), **atomic modularity**, **zero console errors**, and target **Lighthouse 95+ scores** with **60 FPS UI motion**.

---

## 🏗️ Core Architectural Features

VISIO-OS leverages the **Next.js 14 App Router** and **React Server Components (RSC)** for a robust, server-first platform.

| Layer | Key Technology | Engineering Focus |
| :--- | :--- | :--- |
| **Frontend/UI** | **Next.js 14, TypeScript, shadcn/ui + Radix, Tailwind CSS** | Minimal UI (Apple-grade clarity), ARIA-compliant accessibility. |
| **Data/Backend** | **Next.js Route Handlers, Prisma ORM, PostgreSQL (PlanetScale), Edge Runtime** | Low-latency APIs, resilient data access. |
| **Authentication** | **NextAuth.js v5 (or Clerk/Supabase), Passwordless Flow, RBAC** | Enterprise-grade security and frictionless onboarding. |
| **Payments** | **PAYTR Recurring Payment API** | Strategic integration using secure Hash Validation and Replay Protection. |
| **Content** | **MDX & Contentlayer** | Type-safe content layer for docs, rituals, and content modules. |
| **DevOps/Quality**| **Vercel, GitHub Actions, ESLint/Prettier** | Performance instrumentation, strict code quality, reliable CI/CD. |

---

## 🚀 VISIO-OS Development Roadmap

The following modules represent the current development targets for the platform:

- [x] Build Premium Landing System (Marketing Pages)
- [x] Responsive styles & Dark mode
- [ ] **Modular Navigation Shell** (MainNav + Sidebar)
- [ ] **User Dashboard OS View** (Systems, Rituals, Processes)
- [ ] **Subscription System** (PAYTR Checkout and Callback handling)
- [ ] **Personal Evolution Tracker** (Daily Logs, Tasks)
- [ ] **Community Module** (Topics, Posts, Comments)
- [ ] **AI Co-pilot Integration** (Semantic Search, Agent Workflows)
- [ ] Marketplace Integration Layer for NATUVISIO products

---

## 🐛 Known Issues & Debugging Notes

This section tracks environment and framework instability, particularly related to the underlying older Next.js version (`13.3.2-canary.13`):

1.  **Fixed:** CommonJS/ESM (`module is not defined`) and `next/image` configuration errors.
2.  **Fixed:** `Element type is invalid` errors resolved by enforcing **named exports** across all core components (`MainNav`, `MobileNav`, `Icons`).
3.  **Pending:** Contentlayer might issue warnings on Windows (Requires monitoring).
4.  **Pending:** OpenGraph image issues inside catch-all routes (Framework limitation).

---

## ⚙️ Running VISIO-OS Locally

The Developer Experience (DX) is paramount. Ensure these steps are followed for a clean boot.

1.  **Install Dependencies** (using `pnpm`):

    ```sh
    pnpm install
    ```

2.  **Configuration:** Copy `.env.example` to `.env.local` and populate all necessary API keys (PAYTR, NextAuth, Database).

    ```sh
    cp .env.example .env.local
    ```

3.  **Start the Development Server:**

    ```sh
    pnpm dev
    ```

4.  **Access:** The application should be reachable at `http://localhost:3000`. If connectivity fails, check for port conflicts or perform a clean build (`rm -rf .next`).

---

## 📜 License

Licensed under the **MIT license**. See the root **[LICENSE.md](LICENSE.md)** file for details.

*Note: This project is based on the architectural concepts and foundational code of the [Taxonomy project by @shadcn](https://github.com/shadcn/taxonomy).*