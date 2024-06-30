<template>
    <el-form :model="form">
        <h2 class="text-large font-700 mr-3">Create Todo</h2>
        <el-form-item>
            <el-input v-model="form.title" placeholder="Title" size="large" />
        </el-form-item>

        <el-form-item>
            <el-input
                type="textarea"
                v-model="form.description"
                placeholder="Description"
                size="large"
            />
        </el-form-item>

        <el-form-item>
            <el-select
                v-model="form.status"
                placeholder="Select status"
                size="large"
            >
                <el-option
                    v-for="item in todoStatuses"
                    :key="item.id"
                    :label="item.title"
                    :value="item.value"
                />
            </el-select>
        </el-form-item>
        <el-button 
            @click.stop="handleSubmit"
            type="primary"
            round
            size="large"
        >
            Save
        </el-button>
    </el-form>
</template>

<script>
import {
    ElForm,
    ElFormItem,
    ElInput,
    ElSelect,
    ElOption,
    ElButton,
} from "element-plus";
import { todoStatuses } from "../common/constants.js";

export default {
    name: "TodoList",
    components: {
        ElForm,
        ElFormItem,
        ElInput,
        ElSelect,
        ElOption,
        ElButton,
    },
    data() {
        return {
            form: {
                title: "",
                description: "",
                status: "not-completed",
            },
        };
    },
    computed: {
        todoStatuses() {
            return todoStatuses;
        },
    },
    methods: {
        handleSubmit() {
            this.$emit("setTodoItems", this.form);
        },
    },
};
</script>
