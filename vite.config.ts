/// <reference types="vitest" />
import tailwindcss from "@tailwindcss/vite";
import { TanStackRouterVite } from "@tanstack/router-plugin/vite";
import react from "@vitejs/plugin-react";
import { defineConfig } from "vite";
import tsconfigPaths from "vite-tsconfig-paths";

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    TanStackRouterVite({ target: "react", autoCodeSplitting: true }),
    react(),
    tailwindcss(),
    tsconfigPaths(),
  ],
  test: {
    globals: true,
    environment: "jsdom",
    include: ["src/**/*.test.{ts,tsx}"],
    setupFiles: ["src/_tests_/config.ts"],
    coverage: {
      all: true,
      clean: true,
      include: ["src/**/*.{ts,tsx}"],
      exclude: [
        "src/main.tsx",
        "src/**/shadcn/**",
        "src/_tests_/**",
        "src/_types/**",
        "src/**/*.test.ts",
        "src/lib/**",
      ],
      reporter: [
        "html",
        "json-summary",
        "json",
        "lcov",
        "text",
        "text-summary",
      ],
    },
  },
});
