import { describe, expect, test } from "vitest";
import ProductTable from "../ui/ProductTable.vue";
import { renderApp } from "@tests/utils";

describe("ProductTable", () => {
  test("отображает заголовок продукта", async () => {
    const screen = await renderApp(ProductTable);

    await expect(screen.container).toHaveTextContent(
      "Пластиковый чемодан на колесах, с кодовым замком, белый",
    );
  });
});
