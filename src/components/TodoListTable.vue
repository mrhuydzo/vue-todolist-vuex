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
                v-on:handleDelete="handleDelete"
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
    import {mapState,mapActions} from 'vuex';
    import TodoListItem from "./TodoListItem";

    export default {
        name: 'todo-list-table',
        components: {
            TodoListItem
        },
        computed: {
            ...mapState(['listTask'])
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
            handleDelete(taskDelete){
                this.$emit('handleDelete',taskDelete);
            },
            handleEdit(taskEdit){
                this.$emit('handleEdit',taskEdit);
            }
        },
        watch: {
            listTask:function(newTask){
                var taskString = JSON.stringify(newTask);
                    localStorage.setItem('tasks',taskString)
                    //console.log('watch',newTask);
            }
        },
    }
</script>