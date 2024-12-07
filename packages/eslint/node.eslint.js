import baseConfig from "@fequiz/eslint/base";
import globals from "globals";

export default [
  ...baseConfig,
  {
    files: ["**/*.ts"],
    languageOptions: {
      globals: {
        ...globals.node,
        ...globals.es2020,
      },
    },
    rules: {
      "no-process-exit": "error",
      "no-sync": ["error", { allow: ["mkdirSync"] }],
      "no-buffer-constructor": "error",
      "no-path-concat": "error",
      "@typescript-eslint/no-misused-promises": [
        "error",
        {
          checksVoidReturn: false,
        },
      ],
    },
  },
];
