<template>
    <!-- ADD : START -->
    <div class="form-group add-task">
        <button type="button" class="btn btn-info btn-block"
            v-on:click="clickToggleForm"
            v-if="!isShowForm"
        >
            Add Task
        </button>
        <button type="button" class="btn btn-primary btn-block"
            v-else
            v-on:click="clickToggleForm"
        >
            Close Task
        </button>
    </div>
    <!-- ADD : END -->
</template>
<script>
    export default {
        name: 'form-add',
        data() {
            return {}
        },
        props: {
            isShowForm: {type: Boolean,default: false}
        },
        methods: {
            clickToggleForm() {
                //console.log('onclick forma');
                this.$emit('handleToogleForm');
            },
            handleCancel() {
                this.$emit('toggleForm')
            }
        }
    }
</script>