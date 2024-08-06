<template>
    <div class="container min-vh-100">
        <h1 class="text-center fw-bold mb-0">Articles</h1>
        <router-link to="/add" class="btn btn-primary mt-3 mb-5 fw-bolder">
            Add new article
        </router-link>

        <div class="row g-5 row-cols-1 row-cols-sm-2 row-cols-md-3 row-cols-xl-4">
            <div class="col" v-for="(article, index) in articles" :key="index">
                <div class="card border-0 shadow">
                    <div class="card-body">
                        <h5 class="card-title">{{ article.title }}</h5>
                        <h6 class="card-subtitle mb-2 text-muted">
                            {{ article.author }}
                        </h6>
                        <p class="card-text text-truncate">
                            {{ article.text }}
                        </p>
                        <router-link
                            :to="'/article/' + index"
                            class="btn btn-outline-primary"
                        >
                            View article
                        </router-link>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import { mapGetters } from "vuex";

export default {
    computed: {
        ...mapGetters(["articles"]),
    },
};
</script>

<style>
.no-underline {
    text-decoration: none;
}
</style>
