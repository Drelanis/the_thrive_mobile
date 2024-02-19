module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: [
    'universe/native',
    'eslint:recommended',
    'plugin:react/recommended',
    'airbnb-typescript',
    'airbnb/hooks',
    'prettier',
  ],
  overrides: [
    {
      env: {
        node: true,
      },
      files: ['.eslintrc.{js,cjs}'],
      parserOptions: {
        sourceType: 'script',
      },
    },
  ],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    project: 'tsconfig.json',
    sourceType: 'module',
    ecmaVersion: 2023,
    ecmaFeatures: {
      jsx: true,
    },
  },
  plugins: [
    '@typescript-eslint/eslint-plugin',
    'react',
    'eslint-plugin-import',
    'simple-import-sort',
    'react-native',
    'prefer-arrow',
  ],
  rules: {
    'import/extensions': 0,
    'prefer-arrow/prefer-arrow-functions': 'error',
    'react-native/no-inline-styles': 'error',
    'react/display-name': 0,
    'react/react-in-jsx-scope': 0,
    'simple-import-sort/imports': [
      'error',
      {
        groups: [
          ['^(@?\\w|\\w)'], // libs
          ['^@hero24'], // our packages,
          ['^$\\.*'], // ts-aliases
          ['^\\.\\./'], // parent folder imports
          ['^\\./'], // relative folder imports
        ],
      },
    ],
    '@typescript-eslint/no-use-before-define': 0,
  },
};
