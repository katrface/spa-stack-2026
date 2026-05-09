import { renderApp } from '@tests/utils'
import { describe, expect, it } from 'vitest'
import ProductTable from '../ui/ProductTable.vue'

describe('productTable', () => {
  it('отображает заголовок продукта', async () => {
    const screen = await renderApp(ProductTable)

    expect(screen.container).toHaveTextContent(
      'Пластиковый чемодан на колесах, с кодовым замком, белый',
    )
  })
})
