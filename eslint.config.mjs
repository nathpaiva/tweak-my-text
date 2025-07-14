import eslintPluginPrettier from 'eslint-plugin-prettier'
import eslintConfigPrettier from 'eslint-config-prettier'
import tseslint from 'typescript-eslint'

export default [
  // This block contains the ESLint config for TypeScript
  ...tseslint.config({
    files: ['**/*.ts'],
    plugins: {
      prettier: eslintPluginPrettier,
    },
    rules: {
      'prettier/prettier': 'warn',
    },
    extends: [eslintConfigPrettier],
  }),

  // This block defines which files/folders to ignore
  {
    ignores: ['dist', 'coverage'],
  },
]
