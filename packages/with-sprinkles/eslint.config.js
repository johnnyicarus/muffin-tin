import pluginJS from '@eslint/js';
import configPrettier from 'eslint-config-prettier';
import pluginReact from 'eslint-plugin-react';
import globals from 'globals';
import pluginTS from 'typescript-eslint';

export default [
  { files: ['**/*.{js,mjs,cjs,ts,jsx,tsx}'] },
  { ignores: ['dist/'] },
  { languageOptions: { globals: globals.browser } },
  pluginJS.configs.recommended,
  ...pluginTS.configs.recommended,
  pluginReact.configs.flat['jsx-runtime'],
  configPrettier,
  { rules: { '@typescript-eslint/no-explicit-any': 'off' } },
];
