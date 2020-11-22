<template>
    <!-- ADD : START -->
    <div class="form-group add-task">
        <button type="button" class="btn btn-info btn-block" v-on:click="toggleForm" v-if="!isShowForm">
            Add Task
        </button>
        <button type="button" class="btn btn-primary btn-block" v-else v-on:click="toggleForm">
            Close Task
        </button>
    </div>
    <!-- ADD : END -->
</template>
<script>
    import {mapState,mapActions} from 'vuex';
    export default {
        name: 'form-add',
        data() {
            return {}
        },
        computed: mapState(['isShowForm']),
        methods: {
            ...mapActions(['toggleForm']),
        }
    }
</script>