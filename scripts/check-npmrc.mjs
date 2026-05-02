import fs from 'node:fs'
import path from 'node:path'
import process from 'node:process'

const REQUIRED_SETTINGS = {
  'engine-strict': 'true',
  'save-exact': 'true',
  'resolution-mode': 'time-based',
  'trust-policy': 'no-downgrade',
}

const isQuiet = process.argv.includes('--quiet') || process.argv.includes('-q')
const NPMRC_PATH = path.resolve(process.cwd(), '.npmrc')

function checkNpmrc() {
  if (!isQuiet)
    console.log('🔍 Checking .npmrc standards...')

  if (!fs.existsSync(NPMRC_PATH)) {
    console.error('\x1B[31m%s\x1B[0m', '❌ Error: .npmrc file not found.')
    process.exit(1)
  }

  const content = fs.readFileSync(NPMRC_PATH, 'utf8')
  const currentSettings = new Map(
    content
      .split('\n')
      .map(line => line.trim())
      .filter(line => line && !line.startsWith('#') && line.includes('='))
      .map(line => line.split('=').map(part => part.trim())),
  )

  const errors = []
  for (const [key, expectedValue] of Object.entries(REQUIRED_SETTINGS)) {
    if (currentSettings.get(key) !== expectedValue) {
      errors.push(`${key} (expected: ${expectedValue})`)
    }
  }

  if (errors.length > 0) {
    console.error('\x1B[31m%s\x1B[0m', '❌ .npmrc validation failed:')
    errors.forEach(err => console.error(`   - ${err}`))
    process.exit(1)
  }

  if (!isQuiet) {
    console.log('\x1B[32m%s\x1B[0m', '✅ .npmrc is compliant.')
  }
}

checkNpmrc()
