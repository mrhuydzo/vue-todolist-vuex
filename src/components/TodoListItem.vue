<template>
    <tr>
        <td class="text-center">{{index}}</td>
        <td>{{task.taskName}}</td>
        <td class="text-center">
            <span class="badge" v-bind:class="getLevelClass">{{getLevelName}}</span>
        </td>
        <td>
            <button type="button" class="btn btn-warning" v-on:click="handleEdit">Edit</button>
            <button type="button" class="btn btn-danger" v-on:click="handleDelete">Delete</button>
        </td>
    </tr>
</template>

<script>
    import dataLevel from '../mocks/dataLevel'

    export default {
        name: 'todo-list-item',
        props: {
            task: {type: Object, default: null},
            index: Number
        },
        computed: {
            getLevelName() {
                return this.dataLevel[this.task.level].name
            },
            getLevelClass() {
                return this.dataLevel[this.task.level].class
            }
        },
        data() {
            return {
                dataLevel: dataLevel
            }
        },
        methods: {
            handleDelete() {
                if (confirm('Bạn có muốn xóa task id:' + this.task.id)) ;
                this.$emit('handleDelete', this.task);
            },
            handleEdit() {
                //console.log('Edit TodoListItem.vue', this.task)
                this.$emit('handleEdit', this.task);
            }
        }
    }
</script>