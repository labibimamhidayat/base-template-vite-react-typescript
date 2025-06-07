// eslint-disable-next-line @typescript-eslint/no-require-imports, no-undef
const path = require("path");

const buildLintAndFormatCommand = (files) => [
  // eslint-disable-next-line no-undef
  `pnpm run lint ${files.map((f) => path.relative(process.cwd(), f)).join(" ")} && pnpm run format`,
];

// eslint-disable-next-line no-undef
module.exports = {
  // Type check TypeScript files
  "src/**/**.{ts,tsx}": () => "pnpm run tsc-check",

  // // Lint & Prettify TS and JS files
  "src/**/*.{js,jsx,ts,tsx}": [buildLintAndFormatCommand],
};
