<template>
    <div class="card card-success">
        <div class="card-header">List Task</div>
        <table class="table table-hover ">
            <thead>
            <tr>
                <th style="width: 10%" class="text-center">#</th>
                <th>Task</th>
                <th style="width: 20%" class="text-center">Level</th>
                <th style="width: 160px">Action</th>
            </tr>
            </thead>
            <tbody v-if="listTask.length !== 0">
            <todo-list-item
                v-for="(task ,index) in listTask"
                v-bind:key="task.id"
                v-bind:task="task"
                v-bind:index = "index + 1"
                v-on:handleEdit="handleEdit"
            />
            </tbody>
            <tbody v-else>
                <tr>
                    <td colspan="4">
                        <h3 class="text-center">List empty</h3>
                    </td>
                </tr>
            </tbody>
        </table>
    </div>
</template>

<script>
    import {mapState,mapActions,mapGetters} from 'vuex';
    import TodoListItem from "./TodoListItem";

    export default {
        name: 'todo-list-table',
        components: {
            TodoListItem
        },
        computed: {
            ...mapGetters({
                listTask: 'listTaskSearchSort'
            })
        },
        created(){
            let tasks = localStorage.getItem('tasks') || '[]';
            this.changeTask(JSON.parse(tasks));
        },
        data() {
            return {}
        },
        methods: {
            ...mapActions(['changeTask']),
            handleEdit(taskEdit){
                this.$emit('handleEdit',taskEdit);
            }
        },

    }
</script>