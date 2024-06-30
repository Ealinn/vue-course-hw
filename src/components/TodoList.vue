<template>
    <el-form :model="form">
        <h2 class="text-large font-700 mr-3">Create Todo</h2>
        <el-form-item>
            <el-input
                v-model="form.title"
                placeholder="Title"
                size="large"
                @blur="validateField('title')"
            />
            <div class="err-mes" v-if="errors.title">{{ errors.title }}</div>
        </el-form-item>

        <el-form-item>
            <el-input
                type="textarea"
                rows="4"
                v-model="form.description"
                placeholder="Description"
                size="large"
                @blur="validateField('description')"
            />
            <div class="err-mes" v-if="errors.description">
                {{ errors.description }}
            </div>
        </el-form-item>

        <el-form-item>
            <el-select
                v-model="form.status"
                placeholder="Select status"
                size="large"
                @blur="validateField('status')"
            >
                <el-option
                    v-for="item in todoStatuses"
                    :key="item.id"
                    :label="item.title"
                    :value="item.value"
                />
            </el-select>
            <div class="err-mes" v-if="errors.status">{{ errors.status }}</div>
        </el-form-item>
        <el-button @click.stop="handleSubmit" type="primary" round size="large">
            Save
        </el-button>
    </el-form>
</template>

<script>
import { reactive, ref } from "vue";
import {
    ElForm,
    ElFormItem,
    ElInput,
    ElSelect,
    ElOption,
    ElButton,
} from "element-plus";
import { todoStatuses } from "../common/constants.js";
import { formValidationSchema } from "../schemas/formValidationSchema";

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
            form: reactive({
                title: "",
                description: "",
                status: "",
            }),
            errors: ref({}),
        };
    },
    computed: {
        todoStatuses() {
            return todoStatuses;
        },
    },
    methods: {
        async validateField(field) {
            try {
                await formValidationSchema.validateAt(field, this.form);
                this.errors[field] = null;
            } catch (err) {
                this.errors[field] = err.message;
            }
        },
        async validate() {
            try {
                await formValidationSchema.validate(this.form, {
                    abortEarly: false,
                });
                this.errors = {};
                return true;
            } catch (err) {
                const validationErrors = {};
                err.inner.forEach((error) => {
                    validationErrors[error.path] = error.message;
                });
                this.errors = validationErrors;
                return false;
            }
        },
        async handleSubmit() {
            const isValid = await this.validate();
            if (isValid) {
                this.$emit("setTodoItems", this.form);
            }
        },
    },
};
</script>

<style scoped>
.err-mes {
    margin-top: 8px;
    color: red;
    font-size: 14px;
}
</style>
