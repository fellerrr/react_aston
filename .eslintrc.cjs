module.exports = {
  root: true,
  env: { browser: true, es2020: true },
  extends: [
    'eslint:recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:react-hooks/recommended',
    'prettier'
  ],
  ignorePatterns: ['dist', '.eslintrc.cjs'],
  parser: '@typescript-eslint/parser',
  plugins: ['react-refresh', 'import', 'react'],
  rules: {
    'react-refresh/only-export-components': ['warn', { allowConstantExport: true }],
    'no-console': 'warn', // выставить правило no-console на “Warning”
    curly: 'error', // правило на написание if всегда с {}
    'import/prefer-default-export': 'off', // выключить правило import/prefer-default-export
    'react/jsx-no-useless-fragment': ['error', { allowExpressions: true }],
    'no-unused-expressions': 'error', // выставить правило no-unused-expressions
    'import/order': [
      'error',
      {
        groups: ['builtin', 'external', 'internal', 'parent', 'sibling', 'index', 'object', 'type'],
        'newlines-between': 'always-and-inside-groups'
      }
    ]
  }
}