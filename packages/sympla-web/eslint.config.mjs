import { dirname } from 'path';
import { fileURLToPath } from 'url';
import { FlatCompat } from '@eslint/eslintrc';
import baseConfig from '../../eslint.config.mjs';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const compat = new FlatCompat({
  baseDirectory: __dirname,
});

export default [
  ...baseConfig,
  ...compat.extends('next/core-web-vitals', 'next/typescript'),
  {
    ignores: ['**/node_modules/**', '**/.next/**', '**/out/**', '**/build/**'],
  },
  {
    rules: {
      // Regras específicas do Next.js/React - sem formatação
      'react/jsx-one-expression-per-line': 'off',
      'react/jsx-max-props-per-line': 'off',
      'react/jsx-curly-brace-presence': 'off',
      'react/jsx-boolean-value': 'off',
      'react/jsx-closing-bracket-location': 'off',
      'react/jsx-closing-tag-location': 'off',
      'react/jsx-curly-spacing': 'off',
      'react/jsx-equals-spacing': 'off',
      'react/jsx-first-prop-new-line': 'off',
      'react/jsx-indent': 'off',
      'react/jsx-indent-props': 'off',
      'react/jsx-newline': 'off',
      'react/jsx-no-bind': 'off',
      'react/jsx-no-literals': 'off',
      'react/jsx-props-no-multi-spaces': 'off',
      'react/jsx-sort-default-props': 'off',
      'react/jsx-sort-props': 'off',
      'react/jsx-space-before-closing': 'off',
      'react/jsx-tag-spacing': 'off',
      'react/jsx-wrap-multilines': 'off',

      // Desabilita explicitamente regras do Prettier
      'prettier/prettier': 'off',
    },
  },
];
