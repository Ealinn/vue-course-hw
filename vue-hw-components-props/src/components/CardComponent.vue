<template>
  <div class="card" v-if="title || text">
    <div class="card-body">
      <h4 class="card-title" v-if="title">{{ title }}</h4>
      <p class="card-text" v-if="text">{{ text }}</p>
    </div>
  </div>
</template>

<script>
export default {
  name: 'CardComponent',
  props: {
    title: {
      type: String,
      default: null,
    },
    text: {
      type: String,
      default: null,
    },
  },
};
</script>

<style scoped>
.card {
  width: 100%;
  max-width: 500px;
  border-radius: 4px;
  margin: 50px auto;
  box-shadow: 0px 0px 15px rgba(32, 49, 95, 0.1);
}
.card-body {
  padding: 16px;
}
.card-title {
  font-size: 20px;
  margin-top: 0;
  margin-bottom: 16px;
}
.card-text {
  margin-top: 0;
  margin-bottom: 16px;
}
.btn {
  background-color: #156bb7;
  color: white;
  border: none;
  padding: 7px 16px;
  text-align: center;
  display: inline-block;
  font-size: 16px;
  cursor: pointer;
  border-radius: 4px;
}
.btn:hover {
  background-color: #0b5596;
}
</style>
