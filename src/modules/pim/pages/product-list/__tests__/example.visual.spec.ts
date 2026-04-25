import { renderApp } from '@tests/utils'
import { expect, it } from 'vitest'
import ProductList from '../Index.vue'

it('hero section looks correct', async () => {
  const screen = await renderApp(ProductList)
  const img = screen.getByRole('img')
  await expect.poll(() => (img.element() as HTMLImageElement).naturalWidth).toBeGreaterThan(0)

  await expect(screen.container).toMatchScreenshot('example')
})
