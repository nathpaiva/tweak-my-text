import tseslint from 'typescript-eslint'
import prettierPlugin from 'eslint-plugin-prettier'

const { configs: tsConfigs, parser } = tseslint

export default [
  {
    ignores: ['dist', 'coverage'],
  },
  ...tsConfigs.recommended,
  {
    files: ['**/*.ts'],
    languageOptions: {
      parser,
      globals: {
        process: 'readonly',
        console: 'readonly',
      },
    },
    plugins: {
      prettier: prettierPlugin,
    },
    rules: {
      'prettier/prettier': 'warn',
      'arrow-body-style': 'off',
      'prefer-arrow-callback': 'off',
      'no-console': 'off',
      'no-process-exit': 'off',
      'no-unused-vars': 'off',
      'no-undef': 'off',
      'no-extra-boolean-cast': 'off',
      'no-extra-semi': 'off',
      'no-extra-parens': 'off',
    },
  },
]
