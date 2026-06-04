import js from "@eslint/js";
import globals from "globals";
import tseslint from "typescript-eslint";

export default [
  {
    files: ["**/*.{js,ts}"],

    languageOptions: {
      globals: globals.node,
    },

    ...js.configs.recommended,
  },

  ...tseslint.configs.recommended,

  {
    ignores: ["dist", "node_modules"],
  },
];