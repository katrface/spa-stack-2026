import { setupWorker } from 'msw/browser'
import { handlers } from './todo'

export const worker = setupWorker(...handlers)
