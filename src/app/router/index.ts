import { PAGE_NAME } from "@shared/config/pages";
import { createRouter, createWebHistory } from "vue-router";
import { PIM_PAGE_NAME, PIM_ROUTES } from "@pim";

export const router = createRouter({
  routes: [
    { name: PAGE_NAME.HOME, path: "/", redirect: { name: PIM_PAGE_NAME.HOME } },
    ...PIM_ROUTES,
    {
      name: PAGE_NAME.WIP,
      path: "/:pathMatch(.*)*",
      component: () => import("@pages/stub-page/Index.vue"),
    },
  ],
  history: createWebHistory(),
});
