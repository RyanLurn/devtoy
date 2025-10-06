// @ts-check

import eslint from "@eslint/js";
import { defineConfig, globalIgnores } from "eslint/config";
import tseslint from "typescript-eslint";
import eslintPluginAstro from "eslint-plugin-astro";

export default defineConfig(
  globalIgnores([".astro/"]),
  eslint.configs.recommended,
  tseslint.configs.recommendedTypeChecked,
  ...eslintPluginAstro.configs["jsx-a11y-recommended"],
  {
    languageOptions: {
      parserOptions: {
        parser: "@typescript-eslint/parser",
        projectService: true,
        tsconfigRootDir: import.meta.dirname,
      },
    },
  }
);
