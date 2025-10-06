// @ts-check

import { globalIgnores, defineConfig } from "eslint/config";
import perfectionist from "eslint-plugin-perfectionist";
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
  perfectionist.configs["recommended-line-length"]
);
