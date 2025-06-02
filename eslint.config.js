import eslintPluginJsxA11y from 'eslint-plugin-jsx-a11y'
import eslintPluginPrettier from 'eslint-plugin-prettier'
import js from '@eslint/js'
import nodePlugin from 'eslint-plugin-node'
import importPlugin from 'eslint-plugin-import'

export default [
  js.configs.recommended,
  {
    plugins: {
      node: nodePlugin,
      import: importPlugin,
      'jsx-a11y': eslintPluginJsxA11y,
      prettier: eslintPluginPrettier,
    },
    rules: {
      ...js.configs.recommended.rules,
      'no-magic-numbers': 'off',
      'prefer-const': 'error',
      'no-unused-vars': 'warn',
      'prettier/prettier': [
        'error',
        {
          endOfLine: 'auto',
        },
      ],
      'jsx-a11y/anchor-is-valid': 'off',
      'react/react-in-jsx-scope': 'off',
      curly: ['error', 'all'],
      'no-irregular-whitespace': ['error', { skipTemplates: true, skipStrings: true }],
      'no-console': 'error',
      'no-undef': ['error', { typeof: true }],
    },
  },
  {
    files: ['vite.config.js'],
  },
]
