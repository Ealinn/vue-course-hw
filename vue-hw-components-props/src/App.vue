<template>
  <img class="logo" alt="Vue logo" src="./assets/logo.png" />

  <!-- First render only with title -->
  <CardComponent title="Hi" />

  <!-- Second render only with text -->
  <CardComponent text="How are you?" />

  <!-- Third render with title and text -->
  <CardComponent title="Hi" text="How are you?" />
</template>

<script>
import CardComponent from './components/CardComponent.vue';

export default {
  name: 'App',
  components: {
    CardComponent,
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
