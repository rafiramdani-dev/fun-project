import tseslint from "typescript-eslint";
import pluginReact from "eslint-plugin-react";
import pluginReactHooks from "eslint-plugin-react-hooks";
import pluginImport from "eslint-plugin-import";
import pluginJsxA11y from "eslint-plugin-jsx-a11y";
import pluginPrettier from "eslint-plugin-prettier";

export default tseslint.config({
  // Base config
  files: ["**/*.{ts,tsx}"],
  ignores: ["dist", "build", "node_modules", "**/*.js"],
  languageOptions: {
    parserOptions: {
      ecmaVersion: 2022,
      sourceType: "module",
      ecmaFeatures: {
        jsx: true,
      },
    },
  },
  plugins: {
    react: pluginReact,
    "react-hooks": pluginReactHooks,
    import: pluginImport,
    "jsx-a11y": pluginJsxA11y,
    prettier: pluginPrettier,
  },
  rules: {
    // TypeScript
    "@typescript-eslint/no-unused-vars": ["warn", { argsIgnorePattern: "^_" }],
    "@typescript-eslint/no-explicit-any": "warn",
    "@typescript-eslint/no-non-null-assertion": "warn",
    "@typescript-eslint/explicit-function-return-type": "off",

    // React
    "react/react-in-jsx-scope": "off",
    "react/prop-types": "off",

    // React Hooks
    "react-hooks/rules-of-hooks": "error",
    "react-hooks/exhaustive-deps": "warn",

    // Import
    "import/order": [
      "warn",
      {
        groups: [
          ["builtin", "external"],
          ["internal"],
          ["parent", "sibling", "index"],
        ],
        "newlines-between": "always",
      },
    ],

    // A11y
    "jsx-a11y/alt-text": "warn",

    // Prettier
    "prettier/prettier": "warn",

    // General
    "no-console": ["warn", { allow: ["warn", "error"] }],
  },
  settings: {
    react: {
      version: "detect",
    },
  },
});
