import { describe, expect, it } from 'vitest'
import ProductTable from '../ui/ProductTable.vue'
import { renderApp } from '@tests/utils'

describe('ProductTable', () => {
  it('отображает заголовок продукта', async () => {
    const screen = await renderApp(ProductTable)

    await expect(screen.container).toHaveTextContent('Пластиковый чемодан на колесах, с кодовым замком, белый');
  })
})
