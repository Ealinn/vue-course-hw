import { createWebHistory, createRouter } from "vue-router";

const routes = [
    {
        path: "/",
        name: "home",
        component: () => import("../components/ArticleList.vue"),
    },
    {
        path: "/add",
        name: "addArticle",
        component: () => import("../components/AddArticle.vue"),
    },
    {
        path: "/article/:id",
        name: "articleDetail",
        component: () => import("../components/ArticleDetail.vue"),
    },
];

const router = createRouter({
    history: createWebHistory(),
    routes,
});

export default router;
