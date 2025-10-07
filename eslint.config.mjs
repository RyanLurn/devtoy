// @ts-check

import { globalIgnores, defineConfig } from "eslint/config";
import perfectionist from "eslint-plugin-perfectionist";
import prettier from "eslint-config-prettier/flat";
import reactHooks from "eslint-plugin-react-hooks";
import unicorn from "eslint-plugin-unicorn";
import tseslint from "typescript-eslint";
import astro from "eslint-plugin-astro";
import eslint from "@eslint/js";

export default defineConfig(
  globalIgnores([".astro/"]),
  eslint.configs.recommended,
  tseslint.configs.recommendedTypeChecked,
  ...astro.configs["jsx-a11y-recommended"],
  {
    languageOptions: {
      parserOptions: {
        tsconfigRootDir: import.meta.dirname,
        parser: "@typescript-eslint/parser",
        projectService: true,
      },
    },
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
  prettier
);
