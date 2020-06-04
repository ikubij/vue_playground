import Vue from 'vue';
import VueRouter from 'vue-router';
import { publicRoute, protectedRoute } from './routes';
// import Auth from '../auth/auth';

const routes = publicRoute.concat(protectedRoute);

Vue.use(VueRouter);
// Vue.use(Auth);


const router = new VueRouter({
  mode: 'history',
  // base: process.env.BASE_URL,
  routes,
});


// router.beforeEach((to, from, next) => {
//   let role = localStorage.getItem("role");
//   if (to.matched.some((record) => record.meta.requiresAuth)) {
//     if (localStorage.getItem("token") == null) {
//       next({ path: "/login" });
//     } else {
//       if (to.matched.some((record) => record.meta.admin)) {
//         if (role == 2) {
//           next();
//         } else if (role == 1) {
//           next({ path: "/home" });
//         } else {
//           next({ path: "/users" });
//         }
//       } else if(to.matched.some((record) => record.meta.manager)) {
//         if(role == 1) {
//           next()
//         } else if(role == 2) {
//           next({ path: "/dashboard" })
//         } else {
//           next({ path: "/users" })
//         }
//       } else if (to.matched.some((record) => record.meta.user)) {
//         if (role == 0) {
//           next();
//         } else if (role == 1) {
//           next({ path: "/home" });
//         } else {
//           next({ path: "/dashboard" });
//         }
//       } else {
//         next();
//       }
//     }
//   } else if (to.matched.some((record) => record.meta.guest)) {
//     if (localStorage.getItem("token") == null) {
//       next();
//     } else {
//       next({ path: "/users" });
//     }
//   } else next();
//   document.title =
//     to.meta && to.meta.title
//       ? "Workflow | " + to.meta.title
//       : "Workflow | Home";
//   next();
// });


export default router;
