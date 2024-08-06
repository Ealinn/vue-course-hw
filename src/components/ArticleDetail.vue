<template>
    <div class="container min-vh-100">
        <router-link :to="{ name: 'home' }" class="btn btn-secondary mt-3 mb-5">
            Back to all articles
        </router-link>
        <h1 class="text-center fw-bold mb-3">{{ article.title }}</h1>
        <p class="text-end"><strong>Author:</strong> {{ article.author }}</p>
        <p>{{ article.text }}</p>
    </div>
</template>

<script>
import { mapGetters } from "vuex";

export default {
    computed: {
        article() {
            return this.getArticleById(this.$route.params.id);
        },
        ...mapGetters(["getArticleById"]),
    },
};
</script>
