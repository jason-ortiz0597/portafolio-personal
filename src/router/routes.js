const routes = [
  {
    path: "/",
    component: () => import("layouts/MainLayout.vue"),
    children: [
      { path: "", component: () => import("pages/IndexPage.vue") },
      { path: "about", component: () => import("pages/AboutMe.vue") },
      { path: "contact", component: () => import("pages/ContactPage.vue") },
      { path: "projects", component: () => import("pages/ProjectPage.vue") },
      {
        path: "certification",
        component: () => import("pages/CertificationPage.vue"),
      },
    ],
  },

  // Always leave this as last one,
  // but you can also remove it
  {
    path: "/:catchAll(.*)*",
    component: () => import("pages/ErrorNotFound.vue"),
  },
];

export default routes;
