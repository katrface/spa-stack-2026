import ProductList from "../Index.vue";
import { expect, test } from "vitest";
import { renderApp } from "@tests/utils";

test("hero section looks correct", async () => {
  const screen = await renderApp(ProductList);
  const img = screen.getByRole("img");
  await expect.poll(() => (img.element() as HTMLImageElement).naturalWidth).toBeGreaterThan(0);

  await expect(screen.container).toMatchScreenshot("example");
});
