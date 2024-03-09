import { createWebHistory, createRouter } from "vue-router";
import HomePage from '../views/HomePage.vue';
import RoutePage from '../views/RoutePage.vue';
import VuexPage from '../views/VuexPage.vue';
import FirstScript from '../views/FirstScriptPage.vue';
import SecondScript from '../views/SecondScriptPage.vue';

const routes = [
  {
    path: "/",
    name: "Home",
    component: HomePage,
  },
  {
    path: "/route",
    name: "Route",
    component: RoutePage,
  },
  {
    path: "/vuex",
    name: "Vuex",
    component: VuexPage,
  },
  {
    path: "/scripts/1",
    name: "FirstScript",
    component: FirstScript,
  },
  {
    path: "/scripts/2",
    name: "SecondScript",
    component: SecondScript,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;