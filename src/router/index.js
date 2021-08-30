import { createRouter, createWebHistory } from "vue-router";
import Home from "../views/Home.vue";
import AddEmployee from "../views/AddEmployee.vue";

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/add",
    name: "Add employee",
    component: () =>
      import(/* webpackChunkName: "addEmployee" */ "../views/AddEmployee.vue"),
  },
  {
    path: "/employee/:id",
    name: "Edit employee",
    component: () =>
      import(
        /* webpackChunkName: "editEmployee" */ "../views/EditEmployee.vue"
      ),
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
