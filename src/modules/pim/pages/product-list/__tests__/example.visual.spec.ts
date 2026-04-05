import { render } from 'vitest-browser-vue'
import ProductList from '../Index.vue'
import { expect, test } from 'vitest'

test('hero section looks correct', async () => {
  const screen = render(ProductList)
  const img = screen.getByRole('img')
  await expect.poll(() => (img.element() as HTMLImageElement).naturalWidth).toBeGreaterThan(0)

  await expect(screen.container).toMatchScreenshot('example')
})
