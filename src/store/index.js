import { createStore } from "vuex";

const store = createStore({
    state: {
        articles: JSON.parse(localStorage.getItem("articles") || "[]"),
    },
    mutations: {
        ADD_ARTICLE(state, article) {
            state.articles.push(article);
            localStorage.setItem("articles", JSON.stringify(state.articles));
        },
    },
    actions: {
        addArticle({ commit }, article) {
            commit("ADD_ARTICLE", article);
        },
    },
    getters: {
        articles: (state) => state.articles,
        getArticleById: (state) => (id) => state.articles[id],
    },
});

export default store;
