import js from "@eslint/js";
import globals from "globals";
import pluginReact from "eslint-plugin-react";
import reactHooks from "eslint-plugin-react-hooks";
import tseslint from "typescript-eslint";

export default [
  {
    files: ["**/*.{js,jsx,ts,tsx}"],

    languageOptions: {
      globals: globals.browser,
    },

    ...js.configs.recommended,

    plugins: {
      react: pluginReact,
      "react-hooks": reactHooks,
    },

    rules: {
      "react/react-in-jsx-scope": "off",
    },
  },

  ...tseslint.configs.recommended,
];