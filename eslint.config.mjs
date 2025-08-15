// Configuração ESLint centralizada para o monorepo
import eslint from '@eslint/js';
import eslintConfigPrettier from 'eslint-config-prettier';
import globals from 'globals';
import tseslint from 'typescript-eslint';

// Configuração base para TypeScript
const typescriptConfig = tseslint.config(
  {
    ignores: ['**/node_modules/**', '**/dist/**', '**/build/**', '**/.next/**'],
  },
  eslint.configs.recommended,
  ...tseslint.configs.recommendedTypeChecked,
  // Desabilita TODAS as regras estilísticas que conflitam com Prettier
  eslintConfigPrettier,
  {
    languageOptions: {
      globals: {
        ...globals.node,
        ...globals.jest,
      },
      parserOptions: {
        project: true,
        tsconfigRootDir: import.meta.dirname,
      },
    },
  },
  {
    rules: {
      // Regras TypeScript específicas - mais permissivas
      '@typescript-eslint/no-explicit-any': 'off', // Desabilita warnings de any
      '@typescript-eslint/no-floating-promises': 'off', // Desabilita warnings de promises
      '@typescript-eslint/no-unsafe-argument': 'off', // Desabilita warnings de unsafe
      '@typescript-eslint/no-unsafe-return': 'off',
      '@typescript-eslint/no-unsafe-assignment': 'off',
      '@typescript-eslint/no-unsafe-call': 'off',
      '@typescript-eslint/no-unsafe-member-access': 'off',
      '@typescript-eslint/prefer-nullish-coalescing': 'off', // Desabilita warnings de ??
      '@typescript-eslint/no-unused-vars': ['warn', { argsIgnorePattern: '^_' }],
      '@typescript-eslint/require-await': 'off', // Desabilita warnings de async sem await
      '@typescript-eslint/no-misused-promises': 'off', // Desabilita warnings de promises em atributos
      '@typescript-eslint/prefer-promise-reject-errors': 'off', // Desabilita warnings de promise reject
      '@typescript-eslint/no-base-to-string': 'off', // Desabilita warnings de toString
      '@typescript-eslint/restrict-template-expressions': 'off', // Desabilita warnings de template

      // Regras gerais - mais permissivas
      'no-console': 'off', // Permite console.log
      'no-debugger': 'error',
      'no-alert': 'error',
      'prefer-const': 'error',
      'no-var': 'error',
      'no-useless-catch': 'off', // Desabilita warnings de try/catch desnecessário

      // DESABILITA TODAS as regras de formatação - Prettier cuida disso
      'max-len': 'off',
      indent: 'off',
      quotes: 'off',
      semi: 'off',
      'comma-dangle': 'off',
      'arrow-parens': 'off',
      'bracket-spacing': 'off',
      'object-curly-spacing': 'off',
      'array-bracket-spacing': 'off',
      'comma-spacing': 'off',
      'key-spacing': 'off',
      'keyword-spacing': 'off',
      'space-before-blocks': 'off',
      'space-before-function-paren': 'off',
      'space-in-parens': 'off',
      'space-infix-ops': 'off',
      'space-unary-ops': 'off',
      'spaced-comment': 'off',
      'template-curly-spacing': 'off',
      'object-property-newline': 'off',
      'object-curly-newline': 'off',
      'array-element-newline': 'off',
      'function-paren-newline': 'off',
      'function-call-argument-newline': 'off',
      'operator-linebreak': 'off',
      'implicit-arrow-linebreak': 'off',
      'no-mixed-spaces-and-tabs': 'off',
      'no-trailing-spaces': 'off',
      'eol-last': 'off',

      // Regras específicas do Prettier - desabilita para evitar conflitos
      'prettier/prettier': 'off', // Desabilita regras do Prettier no ESLint
    },
  },
);

export default typescriptConfig;
