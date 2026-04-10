import { beforeAll, afterAll, afterEach } from "vitest";
import { config } from "vitest-browser-vue";
import { worker } from "@shared/api-mocks/browser";
import ui from "@nuxt/ui/vue-plugin";
import "@app/assets/css/main.css";

config.global.plugins = [ui];

beforeAll(async () => {
  await worker.start({
    quiet: true,
    onUnhandledRequest: "error",
  });
});

afterEach(() => {
  worker.resetHandlers();
});

afterAll(() => {
  worker.stop();
});
