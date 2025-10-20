import antfu from '@antfu/eslint-config'

export default antfu(
  {
    type: 'lib',
    jsonc: true,
    pnpm: true,
    typescript: true,
  },
  {
    files: ['packages/*/test/**/*.test.ts'],
    rules: {
      'antfu/no-import-dist': 'off',
    },
  },
)
