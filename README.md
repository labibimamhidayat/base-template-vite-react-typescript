# 📛 Stock Portfolio Dashboard – Frontend Boilerplate

A modular and clean **stock portfolio dashboard** built with modern frontend technologies. This serves as a boilerplate for React + TypeScript apps using **shadcn/ui**, **Zustand**, **TanStack React Query**, and **Vite**.

---

## 🚀 Features

- 📊 Dynamic stock table view (Symbol, Price, Change %, Quantity)
- 💸 Interactive Buy/Sell modal with validation
- 🔄 State management with Zustand + React Query
- 🌐 Fetch live stock data using Polygon.io (optional)
- 🧪 Unit tested with Vitest + React Testing Library
- 📱 Fully responsive design
- 🎨 Styled with Tailwind + shadcn/ui components

---

## 🧱 Tech Stack

- **React + TypeScript**
- **Vite** – Fast build tool
- **Zustand** – Local state management
- **TanStack Query** – Server state and async data
- **shadcn/ui** – Accessible and modular UI
- **Tailwind CSS**
- **Vitest + React Testing Library**

---

## 📁 Folder Structure

```
src/
├── App.tsx                 # App root
├── main.tsx                # App bootstrap
├── assets/                 # Images and static assets
│   └── img/
├── components/             # Reusable UI components
├── hooks/                  # Custom React hooks
├── lib/                    # Utility functions and libraries
├── pages/                  # Route-level components/pages
├── services/               # API service functions
├── stores/                 # Zustand state stores
└── types/                  # Shared TypeScript types
```

---

## 🛠️ Getting Started

### Prerequisites

- **Node.js 20+**
- **pnpm v9+**

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

## 📄 License

This project is licensed for technical testing and educational use.
