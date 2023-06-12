import { createRouter, createWebHistory } from "vue-router";
import Main from "../views/main/index.vue";
import Peoples from "../views/peoples/index.vue";
import Favorites from "../views/favorites/index.vue";
import Profile from "../views/profile/index.vue";

const routes = {
  main: {
    path: "/",
    components: {
      view: Main,
    },
    name: "main",
  },
  peoples: {
    path: "/peoples/",
    components: {
      view: Peoples,
    },
    name: "peoples",
  },
  profile: {
    path: "/peoples/:id",
    components: {
      view: Profile,
    },
    name: "profile",
  },
  favorites: {
    path: "/favorites/",
    components: {
      view: Favorites,
    },
    name: "favorites",
  },
};

export default createRouter({
  history: createWebHistory(),
  routes: Object.values(routes),
});

export { routes };
