<template>
    <div class="d-flex justify-content-center">
        <ul class="list-group">
            <li
                class="list-group-item"
                v-for="(child, index) in items"
                :key="index"
            >
                <slot :child="child"></slot>
            </li>
        </ul>
    </div>
</template>

<script>
export default {
    name: "ListGroup",
    props: {
        items: {
            type: Array,
            required: true,
        },
    },
};
</script>

<style scoped>
.list-group {
    width: 50%;
    margin-top: 60px;
}
</style>
