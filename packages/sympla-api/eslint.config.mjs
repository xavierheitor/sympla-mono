// @ts-check
import baseConfig from '../../eslint.config.mjs';

export default [
  ...baseConfig,
  {
    ignores: ['eslint.config.mjs', 'dist/**', 'test/**'],
  },
  {
    languageOptions: {
      globals: {
        ...baseConfig[0].languageOptions?.globals,
        // Adiciona globals específicos da API se necessário
      },
    },
  },
  {
    rules: {
      // Desabilita explicitamente regras do Prettier
      'prettier/prettier': 'off',
    },
  },
];
