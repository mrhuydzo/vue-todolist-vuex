<template>
    <div id="app">
        <b-container>
            <comp-title/>
            <b-row>
                <comp-control
                    v-bind:strSearch="strSearch"
                    v-bind:orderBy="orderBy"
                    v-bind:orderDir="orderDir"
                    v-on:handleSort="handleSort"
                />
                <comp-form
                    v-bind:taskSelected="taskSelected"
                    v-on:handleAddNewTask="handleAddNewTask"
                    v-on:handleEditTaskById="handleEditTaskById"
                />
            </b-row>
            <todo-list-table
                v-on:handleDelete="handleDelete"
                v-on:handleEdit="handleEdit"
            />
        </b-container>
    </div>
</template>

<script>
    import TodoListTable from './components/TodoListTable';
    import CompTitle from './components/CompTitle';
    import CompControl from './components/CompControl';
    import CompForm from "./components/CompForm";

    export default {
        name: 'App',
        components: {
            TodoListTable,
            CompTitle,
            CompControl,
            CompForm
        },
        data() {
            return {
                isShowForm: false,
                strSearch: '',
                orderBy: 'name',
                orderDir: 'asc',
                taskSelected: null
            }
        },

        computed: {
            listTaskSearch() {
                //Tìm kiếm - logic search
                const {strSearch} = this;
                //Cach 1
                // var newItems = [];
                // this.listTask.forEach(function (item,index) {
                //     let lowerName = item.taskName.toLowerCase();
                //     if(lowerName.includes(strSearch.toLowerCase())) {
                //         newItems.push(item);
                //     }
                //     console.log("item",item.taskName);
                // });

                //Cach 2
                var newItems = this.listTask.filter(item => {
                   return item.taskName.toLowerCase().includes(strSearch.toLowerCase());
                });
                return newItems;
            },
            listTaskSort() {
                //ListTask => search listTaskSearch
                var listTask = [...this.listTaskSearch];
                if (this.orderBy === 'name') {
                    listTask.sort(this.compareName);
                }else if (this.orderBy === 'level'){
                    listTask.sort(this.compareLevel);
                }
                return listTask;
            }
        },
        methods: {
            handleSort(data) {
                this.orderBy = data.orderBy;
                this.orderDir = data.orderDir;
                //console.log('handleSort App.vue',data);
            },
            compareName (a,b) {
                var numberSort = this.orderDir === 'asc' ? -1 : 1;

                if (a.taskName < b.taskName) return numberSort;
                else if (a.taskName > b.taskName) return numberSort * (-1);
                return 0;
            },
            compareLevel (a,b){
                var numberSort = this.orderDir === 'asc' ? -1 : 1;

                if (a.level < b.level) return numberSort;
                else if (a.level > b.level) return numberSort * (-1);
                return 0;
            },
            handleDelete (taskDelete) {
                //C1: Delete Use filter()
                this.listTask = this.listTask.filter(item => item.id !== taskDelete.id);

                //C2: Delete Use splice()
                // var indexDelete = -1;
                // for(var index = 0; index < this.listTask.length; index++){
                //     console.log(this.listTask[index]);
                //     if (this.listTask[index].id === taskDelete.id){
                //         indexDelete = index;
                //         break;
                //     }
                // }
                // if (indexDelete !== -1) {
                //     this.listTask.splice(indexDelete,1);
                // }
            },
            handleEdit (taskEdit) {
                //console.log('handleEdit App.vue',taskEdit);
                //console.log(taskEdit);

                this.isShowForm = true;
                this.taskSelected = taskEdit;
            },
            handleEditTaskById (taskEdit){
                //Tim inđex tương ứng với taskEdit.id năm trong listTask
                //console.log('handleEditTaskById App.vue',taskEdit);

                //let index = this.listTask.findIndex(item => item.id === taskEdit.id);

                let index = this.listTask.findIndex(function (item) {
                    return item.id === taskEdit.id;
                });
                if (index !== -1){
                    this.listTask.splice(index,1,taskEdit);
                    this.toggleForm();
                }
            },
            handleAddNewTask(task) {
                //console.log('handleAddNewTask App.vue',task);
                this.listTask.unshift(task);
            }
        }
    }
</script>

<style>
    body {
        padding: 100px 0;
    }

    .table > tbody > tr > td,
    .table > tbody > tr > th,
    .table > tfoot > tr > td,
    .table > tfoot > tr > th,
    .table > thead > tr > td,
    .table > thead > tr > th {
        vertical-align: middle;
    }

    .container > .row {
        margin-top: 20px;
        margin-bottom: 30px;
    }

    span.badge-medium {
        padding: 11px 10px;
        margin: 0px 8px;
        font-size: 16px;
        display: inline-block;
        vertical-align: top;
    }

    @media (max-width: 992px) {
        .add-task {
            margin-top: 50px;
        }
    }

</style>
