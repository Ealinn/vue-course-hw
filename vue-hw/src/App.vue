<template>
    <img class="logo" alt="Vue logo" src="./assets/logo.png" />
    <ListGroup :items="items">
        <template v-slot:default="slotProps">
            <p>{{ slotProps.child }}</p>
        </template>
    </ListGroup>
</template>

<script>
import ListGroup from "./components/ListGroup.vue";

export default {
    name: "App",
    components: {
        ListGroup,
    },
    data() {
        return {
            items: ["one", "two"],
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
p {
    margin-bottom: 0;
}
</style>
