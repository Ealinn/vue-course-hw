<template>
    <el-container>
        <el-header>TODO APP</el-header>
        <el-main>
            <el-row>
                <el-col :span="6">
                    <todo-list @setTodoItems="handleSetTodoItems" />
                </el-col>
            </el-row>
            <el-row :gutter="20" style="margin-top: 40px">
                <el-col
                    v-for="(item, index) in todoItems"
                    :span="6"
                    style="margin-bottom: 20px"
                    :key="item.id"
                >
                    <el-card>
                        <template #header>
                            <div class="card-header">
                                <b>{{ item.id }}) {{ item.title }}</b>
                            </div>
                        </template>

                        <div class="text item">
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
                                @click="handleRemoveTodoItem(item, index)"
                            >
                                Delete
                            </el-button>
                        </template>
                    </el-card>
                </el-col>
            </el-row>
        </el-main>
    </el-container>
</template>

<script>
import {
    ElContainer,
    ElHeader,
    ElMain,
    ElRow,
    ElCol,
    ElCard,
} from "element-plus";
import { Delete } from "@element-plus/icons-vue";
import TodoList from "./components/TodoList.vue";
import storage from "./functions/LocalStorage.js";
import { todoStatuses } from "./common/constants.js";

export default {
    components: {
        ElContainer,
        ElHeader,
        ElMain,
        ElRow,
        ElCol,
        TodoList,
        ElCard,
    },
    data() {
        return {
            todoItems: [],
        };
    },
    computed: {
        todoStatuses() {
            return todoStatuses;
        },
    },
    methods: {
        handleSetTodoItems(data) {
            const savedItem = storage.saveItem(data);
            this.todoItems.push(savedItem);
        },
        handleRemoveTodoItem(itemData, index) {
            storage.removeItem(itemData.id);
            this.todoItems.splice(index, 1);
        },
    },
    created() {
        this.todoItems = storage.getItems();
    },
};
</script>
