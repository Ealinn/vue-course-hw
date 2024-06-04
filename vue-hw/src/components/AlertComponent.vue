<template>
  <div class="d-flex justify-content-center mt-5">
    <div :class="'alert alert-' + type" role="alert">{{ text }}</div>
  </div>
</template>

<script>
import { AlertTypes } from "../enums";

export default {
    name: "AlertComponent",
    props: {
        type: {
            type: String,
            required: true,
            validator: function (value) {
                return AlertTypes.includes(value);
            },
        },
        text: {
            type: String,
            required: true,
        },
    },
};
</script>

<style scoped>
.alert {
  width: 75%;
  text-align: left;
}
</style>
