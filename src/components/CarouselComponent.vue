<template>
    <div class="d-flex justify-content-center mt-5">
        <div id="carousel" class="carousel slide" data-bs-ride="carousel">
            <div class="carousel-inner">
                <div
                    v-for="(image, index) in images"
                    :key="index"
                    :class="[
                        'carousel-item',
                        { active: index === currentIndex },
                    ]"
                >
                    <img :src="image" class="d-block w-100" alt="" />
                </div>
            </div>
            <button
                class="carousel-control-prev"
                @click="prevImage"
                type="button"
            >
                <span
                    class="carousel-control-prev-icon"
                    aria-hidden="true"
                ></span>
                <span class="visually-hidden">Previous</span>
            </button>
            <button
                class="carousel-control-next"
                @click="nextImage"
                type="button"
            >
                <span
                    class="carousel-control-next-icon"
                    aria-hidden="true"
                ></span>
                <span class="visually-hidden">Next</span>
            </button>
        </div>
    </div>
</template>

<script>
export default {
    name: "CarouselComponent",
    props: {
        images: {
            type: Array,
            required: true,
        },
    },
    data() {
        return {
            currentIndex: 0,
        };
    },
    methods: {
        nextImage() {
            this.currentIndex = (this.currentIndex + 1) % this.images.length;
        },
        prevImage() {
            this.currentIndex =
                (this.currentIndex - 1 + this.images.length) %
                this.images.length;
        },
    },
};
</script>

<style scoped>
.carousel {
    width: 60%;
    border-radius: 8px;
    overflow: hidden;
}
</style>
