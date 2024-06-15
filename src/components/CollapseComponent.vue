<template>
    <div v-if="text" class="collapse-component">
        <p>
            <a
                class="btn btn-primary"
                href="#"
                role="button"
                @click.prevent="toggleCollapse"
            >
                {{ isOpen ? "Hide" : "Show" }}
            </a>
        </p>
        <div :class="['collapse', { show: isOpen }]">
            <div class="card card-body">
                {{ text }}
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: "CollapseComponent",
    props: {
        text: {
            type: String,
            required: true,
        },
        opened: {
            type: Boolean,
            default: true,
        },
    },
    data() {
        return {
            isOpen: this.opened,
        };
    },
    methods: {
        toggleCollapse() {
            this.isOpen = !this.isOpen;
        },
    },
};
</script>

<style>
.collapse-component {
    margin-top: 50px;
}
</style>
