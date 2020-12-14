import Vue from "vue";
import VueRouter, { RouteConfig } from "vue-router";
import Countries from "../components/Countries.vue";
import Cars from "../components/Cars.vue";

Vue.use(VueRouter);

const routes: Array<RouteConfig> = [
  {
    path: "/",
    name: "Countries",
    component: Countries
  },
  {
    path: "/cars",
    name: "cars",
    component: Cars,
    props: true
  }
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});

export default router;
