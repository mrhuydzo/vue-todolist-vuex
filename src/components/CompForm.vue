<template>
    <!-- FORM : START -->
    <b-col cols="12" lg="6">
        <form-add/>
        <form v-if="isShowForm" action="" method="POST" class="form-inline justify-content-between">
            <div class="form-group">
                <label class="sr-only" for="taskname">label</label>
                <input type="text" class="form-control" placeholder="Task Name" id="taskname" v-model="taskName"/>
            </div>
            <div class="form-group">
                <label class="sr-only" for="tasklevel">label</label>
                <select name="ds" class="form-control" required="required" id="tasklevel" v-model="level">
                    <option value="0">Small</option>
                    <option value="1">Medium</option>
                    <option value="2">High</option>
                </select>
            </div>

            <button type="button" class="btn btn-primary" v-if="taskSelected === null" v-on:click="handleAddNew">Submit</button>
            <button type="button" class="btn btn-primary" v-else v-on:click="handleEditTask">Update</button>
            <button type="button" class="btn btn-secondary"
                    v-on:click="handleCancel"
            >Cancel</button>
        </form>
    </b-col>
    <!-- FORM : END -->
</template>
<script>
    import {mapState,mapActions} from 'vuex';
    import FormAdd from "./FormAdd";
    import { v4 as uuidv4 } from 'uuid';

    export default {
        name: 'comp-form',
        components: {
            FormAdd,
        },
        computed: mapState(['isShowForm']),
        props: {
            taskSelected: {type: Object,default: null}
        },
        data() {
            return {
                taskName: '',
                level: 0
            }
        },
        watch: {
            taskSelected: function (newData,oldData) {
                if (newData !== null) {
                    //Người dùng có click vào Edit
                    this.taskName = newData.taskName;
                    this.level = newData.level;
                }
                console.log("watch",newData,oldData)
            }
        },
        beforeUpdate() {
            // console.log(this.taskSelected);
        },
        methods: {
            ...mapActions(['toggleForm']),
            handleCancel() {
                console.log('handleCancel CompForm.vue');
                this.toggleForm();
                //this.$store.dispatch('toggleForm');
                this.handleResetData();
            },

            handleAddNew() {
                let objTask = {
                    id:  uuidv4(),
                    taskName: this.taskName,
                    level: parseInt(this.level)
                };
                this.$emit('handleAddNewTask',objTask);
                this.handleCancel();

                // Validate
                // if (this.taskName === '') {
                //     alert('Bạn chưa nhập')
                // }
            },
            handleResetData () {
                this.taskName = '';
                this.level = 0;
            },
            handleEditTask () {
                let objectTaskEdit = {
                    id : this.taskSelected.id,
                    taskName : this.taskName,
                    level : parseInt(this.level),
                }
                this.$emit('handleEditTaskById',objectTaskEdit);
                this.handleResetData();
                //console.log('handleEditTask CompForm.vue',this.taskSelected)
            }
        }
    }
</script>