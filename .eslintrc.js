module.exports = {
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaVersion: 2020,
    sourceType: 'module',
    ecmaFeatures: {
      jsx: true,
    },
  },
  plugins: ['@typescript-eslint', 'react', 'prettier'],
  extends: [
    'eslint:recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:react/recommended',
    'plugin:prettier/recommended',
    'next/core-web-vitals',
  ],
  rules: {
    'prettier/prettier': 'error', // Обработка ошибок форматирования как ошибок
    'react/react-in-jsx-scope': 'off', // Для Next.js, где импорт React не требуется
    // Например, правило для обязательного использования точек с запятой:
    semi: ['error', 'always'],
  },
  settings: {
    react: {
      version: 'detect',
    },
  },
};
