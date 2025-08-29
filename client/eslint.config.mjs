import tsParser from '@typescript-eslint/parser'

export default [
  {
    ignores: ['.next/**', 'dist/**']
  },
  {
    languageOptions: {
      parser: tsParser
    },
    rules: {}
  }
]

