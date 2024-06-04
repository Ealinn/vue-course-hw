<template>
    <img class="logo" alt="Vue logo" src="./assets/logo.png" />
    <DefinitionsComponent :definitions="definitions" />
</template>

<script>
import DefinitionsComponent from "./components/DefinitionsComponent.vue";

export default {
    name: "App",
    components: {
        DefinitionsComponent,
    },
    data() {
        return {
            definitions: [
                { dt: "one", dd: "two", id: 1 },
                { dt: "another term", dd: "another description", id: 2 },
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
