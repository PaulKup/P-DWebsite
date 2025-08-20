import tsParser from '@typescript-eslint/parser'

export default [
  {
    ignores: ['**/node_modules/**', '**/.next/**', '**/dist/**']
  },
  {
    files: ['client/**/*.{js,jsx,ts,tsx}', 'server/**/*.{js,jsx,ts,tsx}'],
    languageOptions: {
      parser: tsParser
    },
    rules: {}
  }
]

