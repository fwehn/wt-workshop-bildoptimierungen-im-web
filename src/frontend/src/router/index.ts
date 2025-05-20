import { createRouter, createWebHistory } from 'vue-router';

const pages = import.meta.glob('../views/*.vue');

const routes = Object.keys(pages).map((path) => {
  const name = path
    .split('/')
    .pop()
    ?.replace(/(?:View)?\.vue$/, '')
    .toLowerCase();

  return {
    path: name === 'startingpoint' ? '/' : `/${name}`,
    name,
    component: pages[path],
  };
});

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
});

export default router;
