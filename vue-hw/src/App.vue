<template>
    <img class="logo" alt="Vue logo" src="./assets/logo.png" />
    <CarouselComponent :images="images" />
</template>

<script>
import CarouselComponent from "./components/CarouselComponent.vue";

export default {
    name: "App",
    components: {
        CarouselComponent,
    },
    data() {
        return {
            images: [
                "/images/cat1.jpg",
                "/images/cat2.jpg",
                "/images/cat3.jpg",
                "/images/cat4.jpg",
            ],
        };
    },
};
</script>

<style>
#app {
    font-family: Avenir, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
    margin-top: 60px;
}
.logo {
    width: 100px;
    height: 100px;
}
</style>
