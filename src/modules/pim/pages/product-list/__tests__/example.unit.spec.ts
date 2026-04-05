import { describe, it, expect } from 'vitest'
import ProductTable from '../ui/ProductTable.vue'
import { render } from 'vitest-browser-vue'

describe('ProductTable', () => {
  it('отображает заголовок продукта', async () => {
    const screen = render(ProductTable)

    await expect(screen.container).toHaveTextContent('Пластиковый чемодан на колесах, с кодовым замком, белый');
  })
})
