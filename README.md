# 📛 Frontend Boilerplate Projects – React, Vite, TypeScript

A clean, scalable **React + TypeScript** boilerplate designed for modern frontend application development. This template leverages a powerful tech stack including **Vite** for blazing-fast builds, **Zustand** for scalable local state management, **TanStack Query** for declarative server state handling, and **shadcn/ui** for beautifully styled and accessible UI components. It also includes **Tailwind CSS** for utility-first styling, **Vitest** and **React Testing Library** for robust testing, and **MSW (Mock Service Worker)** for API mocking in both development and tests. Additionally, the project embraces best practices like file-based routing using **TanStack Router**, modular folder structure, and type safety with TypeScript throughout the stack.

> 📁 This project includes examples and structure to help you get started quickly — feel free to delete or customize the provided features and files to suit your own needs.

---

## 🚀 Features

* 🧪 **Unit Testing Setup** – Includes preconfigured unit testing using Vitest and React Testing Library, along with mock data and shared assertions to simplify test writing and promote reusability.

* 🔄 **State Management with Zustand** – Implements scalable local state management with a clean store pattern. Examples include managing UI states, user inputs, and computed state updates.

* 📡 **Server State with TanStack Query** – Provides a structured way to fetch, cache, and sync remote data. Includes example query and mutation hooks, centralized configuration, and integration with mocked and real APIs.

* 🧭 **Routing with TanStack Router** – File-based routing with nested layouts and loader support. Demonstrates route composition, route-level async data, and type-safe navigation.

* 🧩 **Component-Driven UI with shadcn/ui** – Uses accessible and themeable UI components (Dialog, Table, Card, Avatar, Button, etc.) with integration examples across feature modules.

* 🎯 **Feature-Based Folder Structure** – Promotes scalability with modular feature folders, allowing you to easily add, isolate, and test features independently.

* 🧱 **Reusable Layout System** – Includes structured layouts (BaseLayout, Navbar, Footer, ContentLayout) for consistent page design and separation of concerns.

* 🛠️ **Shared Utilities and Hooks** – Custom hooks and utility functions for reusable logic (date formatting, percentage math, etc.), organized in clearly defined folders.

* 🎨 **Tailwind CSS Integration** – Preconfigured Tailwind with utility classes and animation support. Also uses `tailwind-merge` and `clsx` for clean conditional styling.

* 🧰 **Mock Service Worker (MSW)** – Ready-to-use API mocking for both dev and test environments, with handlers, mock JSON data, and scoped mocks per feature.

* 📁 **Typesafe Codebase** – Includes global and scoped TypeScript types for API requests/responses, form inputs, and store shape definitions.

* ⚙️ **Vite-Powered Tooling** – Fast build and HMR powered by Vite with TypeScript path support, ESLint, and optimized build scripts for development and production.

* 📦 **Extensive Example Coverage** – Provides rich examples across features such as voucher calculators, stock input tables, API data mapping, and component-level testing to guide your future implementations.

---

## 🧱 Tech Stack

* **React + TypeScript** – Modern frontend stack
* **Vite** – Fast build tool with excellent DX
* **Zustand** – Lightweight, scalable state management
* **TanStack Query** – Declarative data fetching and caching
* **TanStack Router** – File-based and type-safe routing
* **shadcn/ui** – Accessible UI components built on Radix UI
* **Tailwind CSS** – Utility-first CSS framework
* **Vitest + React Testing Library** – Lightweight unit testing
* **MSW** – API mocking for tests and local dev

---

## 📁 Folder Structure

```
src/
├── App.tsx                  # App entry
├── main.tsx                 # App bootstrap
├── routeTree.gen.ts         # TanStack router tree (generated)
│
├── _constant/               # Constants (e.g., table configs)
│   └── table.ts
│
├── _tests_/                 # Unit tests
│   ├── _mocks/              # Mock data and MSW handlers
│   │   ├── handlers/
│   │   ├── json/
│   │   ├── server.ts
│   │   └── voucherMock.ts
│   ├── _shared/             # Shared test utilities (e.g., expect)
│   ├── components/          # Component tests
│   ├── config.ts
│   ├── example_api.test.ts
│   └── utils/               # Utility tests
│
├── _types/                  # Global and shared TypeScript types
│   ├── _global.d.ts
│   ├── _vite-env.d.ts
│   ├── request.ts
│   └── response.ts
│
├── assets/                  # Static assets
│   ├── img/
│   └── json_assets/
│
├── components/              # Reusable UI components
│   ├── shadcn/ui/           # shadcn components (e.g., button, card)
│   ├── Divider.tsx
│   ├── ExampleTableInput.tsx
│   ├── VoucherCalculator.tsx
│   └── WelcomeBanner.tsx
│
├── features/                # Feature modules (scalable pattern)
│   └── example*/            # Example feature folders
│
├── hooks/                   # Custom React hooks
├── layouts/                 # Layout components
├── lib/                     # Utilities and libraries
│   ├── ofetch/              # API client wrapper
│   ├── reactQuery/          # TanStack Query config
│   ├── router/              # Router instance
│   └── shadcn/              # Shared UI utilities
│
├── routes/                  # File-based routing (TanStack Router)
│   ├── __root.tsx           # Root layout route
│   ├── index.tsx            # Home page route
│   └── example-*.tsx        # Example feature routes
│
├── services/                # API service functions
├── store/                   # Zustand stores
├── styles/                  # Global styles
└── utils/                   # Utility functions
```

---

## 🛠️ Getting Started

### Prerequisites

* **Node.js 20+**
* **pnpm v9+**

### Install dependencies

```bash
pnpm install
```

### Run development server

```bash
pnpm dev
```

### Build for production

```bash
pnpm build
```

### Preview production build

```bash
pnpm preview
```

---

### ✅ How to Start

You can clone and begin using this template immediately:

```bash
git clone https://github.com/your-username/your-repo-name.git
cd your-repo-name
pnpm install
pnpm dev
```

### 📌 Intended Use Cases

* Starting new React + TypeScript projects quickly
* Building feature-rich dashboards or admin panels

More usage examples and documentation will be added soon.

---

## 📄 License & Usage

This boilerplate is ready to use for building production-grade frontend applications. While the core architecture and tooling are already in place, detailed steps for seamless integration and advanced usage (e.g. project scaffolding, customization instructions, and best practices) will be documented in future updates.
