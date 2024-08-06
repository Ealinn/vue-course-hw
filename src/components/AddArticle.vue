<template>
    <div class="container min-vh-100">
        <router-link
            :to="{ name: 'home' }"
            class="btn btn-secondary mt-3 mb-5 fw-bolder"
        >
            Back to all articles
        </router-link>
        <h1 class="text-center fw-bold mb-3">Add new article</h1>
        <form @submit.prevent="submitArticle">
            <div class="mb-3">
                <label for="title" class="form-label fw-bolder"> Title: </label>
                <input
                    type="text"
                    v-model="title"
                    class="form-control"
                    required
                />
            </div>
            <div class="mb-3">
                <label for="text" class="form-label fw-bolder"> Text: </label>
                <textarea
                    v-model="text"
                    class="form-control"
                    rows="5"
                    required
                ></textarea>
            </div>
            <div class="mb-3">
                <label for="author" class="form-label fw-bolder">
                    Author:
                </label>
                <input
                    type="text"
                    v-model="author"
                    class="form-control"
                    required
                />
            </div>
            <button type="submit" class="btn btn-success">Save</button>
        </form>
    </div>
</template>

<script>
import { mapActions } from "vuex";

export default {
    data() {
        return {
            title: "",
            text: "",
            author: "",
        };
    },
    methods: {
        ...mapActions(["addArticle"]),
        submitArticle() {
            const newArticle = {
                title: this.title,
                text: this.text,
                author: this.author,
            };
            this.addArticle(newArticle);
            this.$router.push("/");
        },
    },
};
</script>
