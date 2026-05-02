import antfu from '@antfu/eslint-config'
import pluginQuery from '@tanstack/eslint-plugin-query'
import packageJson from 'eslint-plugin-package-json'

export default antfu(
  {
    pnpm: true,
    typescript: {
      tsconfigPath: 'tsconfig.json',
    },
    ignores: ['public/mockServiceWorker.js'],
  },
  pluginQuery.configs['flat/recommended'],
  packageJson.configs.recommended,
  {
    files: ['**/package.json'],
    rules: {
      'package-json/require-description': [
        'error',
        {
          ignorePrivate: true,
        },
      ],
    },
  },
)
