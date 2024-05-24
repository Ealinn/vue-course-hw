<template>
  <div className="card">
    <div className="card-body">
      <h4 className="card-title">Card title</h4>
      <p className="card-text">Some quick example text to build on the card</p>
      <button type="button" className="btn btn-primary">Go somewhere</button>
    </div>
  </div>
</template>

<script>
export default {
  name: 'CardComponent',
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
  background-color: #156BB7;
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
  background-color: #0B5596;
}
</style>
