const Routing = {
  mode: 'history',
  base: '/',
  fallback: false,
  routes: () => {
    try {
      return [
        {
          name: 'index___tr',
          meta: { layout: 'default' },
          path: '/',
          component: () => import('@/pages/index.vue'),
        },
        {
          name: 'index___en',
          meta: { layout: 'default' },
          path: '/en',
          component: () => import('@/pages/index.vue'),
        }
      ];
    }
    catch (e) {
      console.log("Routing Exception:");
      console.log(e);
    }
  }
}
export default Routing;