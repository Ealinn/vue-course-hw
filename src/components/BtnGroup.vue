<template>
    <div class="d-flex justify-content-center mt-5">
        <div class="btn-group" role="group">
            <button
                type="button"
                :class="[
                    'btn',
                    'btn-secondary',
                    'left',
                    { active: isActive === 'left' },
                ]"
                @click="setActiveButton('left')"
            >
                Left
            </button>
            <button
                type="button"
                :class="[
                    'btn',
                    'btn-secondary',
                    'right',
                    { active: isActive === 'right' },
                ]"
                @click="setActiveButton('right')"
            >
                Right
            </button>
        </div>
    </div>
</template>

<script>
export default {
    name: "BtnGroup",
    data() {
        return {
            isActive: "",
        };
    },
    methods: {
        setActiveButton(button) {
            this.isActive = button;
        },
    },
};
</script>

<style scoped></style>
