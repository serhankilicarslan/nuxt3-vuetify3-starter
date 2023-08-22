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
          beforeEnter: ((to, from, next) => {
            console.log("beforeEnter called")
            console.log(to)
            // let language = to.params.locale;
            // if (!language) {
            //   language = 'en';
            // }

            // i18n.locale = language;
            next();
          })
        }
      ];
    }
    catch (e) {
      console.log("Routing Exception:");
      console.log(e);
    }
  },
  beforeEnter: ((to, from, next) => {
    console.log("beforeEach called")
    // let language = to.params.locale;
    // if (!language) {
    //   language = 'en';
    // }

    // i18n.locale = language;
    next();
  })
}
export default Routing;