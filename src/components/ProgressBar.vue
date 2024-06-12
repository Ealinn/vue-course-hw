<template>
    <div class="d-flex justify-content-center">
        <div class="progress mt-5 w-75">
            <div
                class="progress-bar"
                role="progressbar"
                :aria-valuenow="percentage"
                aria-valuemin="0"
                aria-valuemax="100"
                aria-label="progressbar"
                :style="{ width: percentage + '%' }"
            ></div>
        </div>
    </div>
</template>

<script>
export default {
    name: "ProgressBar",
    props: {
        percentage: {
            type: Number,
            required: true,
            validator(value) {
                return value >= 0 && value <= 100;
            },
        },
    },
};
</script>
