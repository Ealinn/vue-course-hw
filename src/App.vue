<template>
    <div class="container min-vh-100">
        <img class="logo" alt="Vue logo" src="./assets/logo.png" />
        <h1 class="title">Приклад компонента Collapse</h1>
        <CollapseComponent text="Це прихований текст" :opened="true" />
    </div>
</template>

<script>
import CollapseComponent from "./components/CollapseComponent.vue";

export default {
    name: "App",
    components: {
        CollapseComponent,
    },
};
</script>

<style>
#app {
    font-family: Avenir, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    color: #2c3e50;
    text-align: center;
}
.logo {
    width: 100px;
    height: 100px;
}
.title {
    margin-top: 50px;
}
</style>
