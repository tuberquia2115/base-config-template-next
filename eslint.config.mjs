import js from "@eslint/js";
import path from "node:path";
import ts from "typescript-eslint";
import { fileURLToPath } from "node:url";
import jsdoc from "eslint-plugin-jsdoc";
import { FlatCompat } from "@eslint/eslintrc";
import { fixupConfigRules } from "@eslint/compat";
import typescriptEslintParser from "@typescript-eslint/parser";
import typescriptEslintPlugin from "@typescript-eslint/eslint-plugin";
import prettierConfigRecommended from "eslint-plugin-prettier/recommended";

import typescriptRules from "./eslint-rules/typescript.mjs";
import jsdocRules from "./eslint-rules/jsdoc.mjs";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const compat = new FlatCompat({
  baseDirectory: __dirname,
  recommendedConfig: js.configs.recommended,
  allConfig: js.configs.all,
});

const patchedConfig = fixupConfigRules([
  ...compat.extends("next/core-web-vitals"),
  ...compat.extends("eslint:recommended"),
  ...compat.extends("plugin:react/recommended"),
  ...compat.extends("next"),
  ...compat.extends("prettier"),
  ...compat.extends("plugin:react-hooks/recommended"),
]);

const config = [
  ...patchedConfig,
  ...ts.configs.recommended,
  prettierConfigRecommended,
  {
    files: ["**/*.{js,jsx,ts,tsx}"],
    languageOptions: {
      globals: {
        React: true,
        context: true,
        expect: true,
        jsdom: true,
        JSX: true,
      },
      parser: typescriptEslintParser,
      parserOptions: {
        ecmaVersion: "latest",
        sourceType: "module",
        project: "./tsconfig.json",
        ecmaFeatures: {
          jsx: true,
        },
      },
    },
    plugins: {
      jsdoc,
      "@typescript-eslint": typescriptEslintPlugin,
    },
    rules: {
      ...typescriptRules,
      ...jsdocRules,
    },
    ignores: [
      ".next/*",
      "**/*.{mjs}",
      "!node_modules/",
      "commitlint.config.js",
    ],
  },
];

export default config;
