require('ts-node').register({
  project: './tsconfig.test.json',
})

module.exports = {
  spec: 'packages/*/test/**/*.test.ts',
}
