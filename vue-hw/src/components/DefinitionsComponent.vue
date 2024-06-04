<template>
    <dl class="definitions-list">
        <template v-for="definition in definitions" :key="definition.id">
            <dt>{{ definition.dt }}</dt>
            <dd>{{ definition.dd }}</dd>
        </template>
    </dl>
</template>

<script>
export default {
    name: "DefinitionsComponent",
    props: {
        definitions: {
            type: Array,
            default() {
                return [];
            },
            required: true,
        },
    },
};
</script>

<style scoped>
.definitions-list {
    margin-top: 50px;
}
</style>
