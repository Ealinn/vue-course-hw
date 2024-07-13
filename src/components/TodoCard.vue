<template>
    <el-card>
        <template #header>
            <div class="card-header">
                <b style="word-break: break-all">
                    {{ item.id }}. {{ item.title }}
                </b>
            </div>
        </template>

        <div class="text item" style="word-break: break-all">
            {{ item.description }}
        </div>
        <div style="margin-top: 10px">
            Status: <b>{{ item.status }}</b>
        </div>

        <template #footer>
            <el-button
                type="danger"
                round
                size="large"
                @click="$emit('remove', item, index)"
            >
                Delete
            </el-button>
        </template>
    </el-card>
</template>

<script>
import { ElCard } from "element-plus";
export default {
    name: "TodoCard",
    components: {
      ElCard,
    },
    props: {
        item: {
            type: Object,
            required: true,
        },
        index: {
            type: Number,
            required: true,
        },
    },
};
</script>
