<template>
    <el-container>
        <el-header><h1 class="text-large font-700">TODO APP</h1></el-header>
        <el-main>
            <el-row>
                <el-col :span="12">
                    <todo-list @setTodoItems="handleSetTodoItems" />
                </el-col>
            </el-row>
            <el-row :gutter="20" style="margin-top: 40px">
                <el-col
                    v-for="(item, index) in todoItems"
                    :span="8"
                    style="margin-bottom: 20px"
                    :key="item.id"
                >
                    <todo-card :item="item" :index="index" @remove="handleRemoveTodoItem" />
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
} from "element-plus";
import TodoList from "./components/TodoList.vue";
import TodoCard from "./components/TodoCard.vue";
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
        TodoCard,
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
