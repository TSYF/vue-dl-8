import { createRouter, createWebHistory, RouteRecordRaw } from "vue-router";

const routes: Array<RouteRecordRaw> = [
    {
        path: "/",
        name: "home",
        component: () => import("@/views/HomeView.vue"),
    },
    {
        path: "/inicio",
        redirect: "/",
    },
    {
        path: "/home",
        redirect: "/",
    },
    {
        path: "/portada",
        redirect: "/",
    },
    {
        path: "/contact",
        name: "contacto",
        alias: [
            "/contacto",
            "/contactarme"
        ],
        component: () => import("@/views/Contacto.vue"),
    },
    {
        path: "/about",
        name: "sobre mi",
        alias: [
            "/sobremi",
            "/acerca"
        ],
        component: () => import("@/views/About.vue"),
    },
    {
        path: "/post",
        name: "posts",
        component: () => import("@/views/post/Post.vue"),
        children: [
            {
                path: ":slug",
                name: "articulo1",
                component: () => import("@/views/post/Article.vue"),
            },
        ],
    },
    {
        path: "/administrador",
        name: "administrador",
        component: () => import("@/views/admin/Administrador.vue"),
        children: [
            {
                path: "avanzado",
                component: () =>
                    import("@/views/admin/AdministradorAvanzado.vue"),
            },
            {
                path: "simple",
                component: () =>
                    import("@/views/admin/AdministradorSimple.vue"),
            },
        ],
    },
    {
        path: "/:catchAll(.*)",
        name: "missing",
        component: () => import("@/views/Missing.vue"),
    },
];

const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes,
});

export default router;
