import pluginJS from "@eslint/js";
import configPrettier from "eslint-config-prettier";
import perfectionist from "eslint-plugin-perfectionist";
import pluginReact from "eslint-plugin-react";
import { defineConfig } from "eslint/config";
import globals from "globals";
import pluginTS from "typescript-eslint";

const eslintConfig = defineConfig([
  { languageOptions: { globals: globals.browser } },
  { ignores: ["packages/*/dist/", "packages/*/tests/"] },
  pluginJS.configs.recommended,
  ...pluginTS.configs.strict,
  pluginReact.configs.flat["jsx-runtime"],
  {
    extends: [perfectionist.configs["recommended-natural"]],
    rules: {
      "perfectionist/sort-intersection-types": [
        "error",
        {
          type: "natural",
          groups: [
            "object",
            "conditional",
            "function",
            "import",
            "intersection",
            "keyword",
            "literal",
            "named",
            "operator",
            "tuple",
            "union",
            "nullish",
          ],
        },
      ],
      "perfectionist/sort-objects": [
        "error",
        {
          type: "natural",
          groups: ["top", "unknown", "multiline-member", "method"],
          customGroups: [
            {
              groupName: "top",
              elementNamePattern: "^(?:id|name|groupName|type|title)$",
              selector: "property",
            },
          ],
        },
      ],
      "perfectionist/sort-union-types": [
        "error",
        {
          type: "natural",
          groups: [
            "object",
            "conditional",
            "function",
            "import",
            "intersection",
            "keyword",
            "literal",
            "named",
            "operator",
            "tuple",
            "union",
            "nullish",
          ],
        },
      ],
    },
  },
  configPrettier,
]);

export default eslintConfig;
