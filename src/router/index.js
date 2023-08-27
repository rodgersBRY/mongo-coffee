/* eslint-disable no-unused-vars */
import Vue from "vue";
import Router from "vue-router";
import goTo from "vuetify/lib/services/goto";

import Home from "../views/Home.vue";
import About from "../views/about.vue";
import Contact from "../views/contact.vue";

Vue.use(Router);

const router = new Router({
  mode: "history",
  base: process.env.BASE_URL,
  routes: [
    {
      path: "/",
      name: "home",
      component: Home,
    },
    {
      path: "/about",
      name: "about",
      component: About,
      meta: {
        title: "About Us",
      },
    },
    {
      path: "/contact",
      name: "contact",
      component: Contact,
      meta: {
        title: "Contact Us",
      },
    },
    {
      path: "/products",
      name: "Our Products",
      component: () => import('../views/our_products.vue'),
      meta: {
        title: "Our Products",
      }
    },
    {
      path: "/*",
      component: 404,
    },
  ],
});

//change bar title
const DEFAULT_TITLE = "Mongo International Ltd";
router.afterEach((to, from) => {
  Vue.nextTick(() => {
    document.title = to.meta.title || DEFAULT_TITLE;
  });
});

router.afterEach((to, from) => {
  goTo(0, { duration: 0 });
});

export default router;
