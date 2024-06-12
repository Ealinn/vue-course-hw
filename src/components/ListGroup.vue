<template>
    <div class="d-flex justify-content-center">
        <ul class="list-group">
            <li
                class="list-group-item"
                v-for="(child, index) in $slots.default()"
                :key="index"
            >
                <component :is="child"></component>
            </li>
        </ul>
    </div>
</template>

<script>
export default {
    name: "ListGroup",
};
</script>

<style scoped>
.list-group {
    width: 50%;
    margin-top: 60px;
}
</style>
