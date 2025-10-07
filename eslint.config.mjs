// @ts-check

import { globalIgnores, defineConfig } from "eslint/config";
import perfectionist from "eslint-plugin-perfectionist";
import prettier from "eslint-config-prettier/flat";
import reactHooks from "eslint-plugin-react-hooks";
import jsxA11y from "eslint-plugin-jsx-a11y";
import unicorn from "eslint-plugin-unicorn";
import tseslint from "typescript-eslint";
import astro from "eslint-plugin-astro";
import eslint from "@eslint/js";

export default defineConfig(
  globalIgnores([".astro/"]),
  eslint.configs.recommended,
  tseslint.configs.recommendedTypeChecked,
  {
    languageOptions: {
      parserOptions: {
        tsconfigRootDir: import.meta.dirname,
        projectService: true,
      },
    },
    files: ["**/*.{js,mjs,ts,tsx}"],
  },
  {
    languageOptions: {
      parserOptions: {
        parser: "@typescript-eslint/parser",
        extraFileExtensions: [".astro"],
        project: true,
      },
    },
    extends: ["astro/jsx-a11y-recommended"],
    plugins: {
      astro: astro,
    },
    files: ["**/*.astro"],
  },
  perfectionist.configs["recommended-line-length"],
  unicorn.configs.recommended,
  {
    plugins: {
      "react-hooks": reactHooks,
    },
    extends: ["react-hooks/recommended-latest"],
    files: ["**/*.{ts,tsx}"],
  },
  {
    ...jsxA11y.flatConfigs.recommended,
    files: ["**/*.{ts,tsx}"],
  },
  prettier
);
