// import { AuthLayout, DefaultLayout, AdminLayout } from '@/components/layouts';
import { DefaultLayout } from "@/layouts";
// // import { AuthLayout } from "@/components/layouts";

export const publicRoute = [
  {
    path: "*",
    component: () => import("@/views/errors/NotFound.vue")
  },

  /* Pages with the default route */

  {
    path: "/",
    component: DefaultLayout,
    meta: {
      title: "Home",
      guest: true
    },
    redirect: "/",
    hidden: true,
    children: [
      {
        path: "/",
        name: "Home",
        meta: { title: "Home" },
        component: () => import("@/views/Home.vue")
      }
    ]
  },

  {
    path: "/about",
    component: DefaultLayout,
    meta: {
      title: "About",
      guest: true
    },
    redirect: "/about",
    hidden: true,
    children: [
      {
        path: "/about",
        name: "About",
        meta: { title: "About" },
        component: () => import("@/views/About.vue")
      }
    ]
  }

  /* Pages with the auth route */

  // {
  //   path: "/",
  //   component: AuthLayout,
  //   meta: { title: "Join Community", guest: true },
  //   redirect: "/",
  //   hidden: true,
  //   children: [
  //     {
  //       path: "/",
  //       name: "Karibu",
  //       meta: { title: "Join Community" },
  //       component: () => import("@/views/pages/Karibu.vue"),
  //     },
  //   ],
  // },

  // {
  //     path: "/login",
  //     component: AuthLayout,
  //     meta: { title: "Login", guest: true },
  //     redirect: "/login",
  //     hidden: true,
  //     children: [
  //         {
  //         path: "/login",
  //         name: "login",
  //         meta: { title: "Login" },
  //         component: () => import("@/views/auth/Login.vue"),
  //         },
  //     ],
  // },
];

export const protectedRoute = [
  //   {
  //     path: "/admin",
  //     component: AdminLayout,
  //     meta: { title: "Administration", forAuth: true },
  //     redirect: "/admin",
  //     children: [
  //       {
  //         path: "/admin",
  //         name: "Admin Home",
  //         meta: { title: "Administration" },
  //         component: () => import("@/views/admin/Dashboard.vue"),
  //       },
  //     ],
  //   },
];
