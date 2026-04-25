import antfu from '@antfu/eslint-config'
import pluginQuery from '@tanstack/eslint-plugin-query'

export default antfu(
  {
    pnpm: true,
    typescript: {
      tsconfigPath: 'tsconfig.json',
    },
    ignores: ['public/mockServiceWorker.js'],
  },
  pluginQuery.configs['flat/recommended'],
)
