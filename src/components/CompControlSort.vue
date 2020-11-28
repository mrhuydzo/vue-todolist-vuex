<template>
    <div class="form-group">
        <b-dropdown id="dropdown-1" text="Sort by">
            <b-dropdown-item v-on:click="handleSort('name','asc')">Name ASC</b-dropdown-item>
            <b-dropdown-item v-on:click="handleSort('name','desc')">Name DESC</b-dropdown-item>
            <b-dropdown-divider></b-dropdown-divider>
            <b-dropdown-item v-on:click="handleSort('level','asc')">Level ASC</b-dropdown-item>
            <b-dropdown-item v-on:click="handleSort('level','desc')">Level DESC</b-dropdown-item>
        </b-dropdown>
<!--        <span class="badge badge-success badge-medium">{{this.state.orderBy}} - {{this.state.orderDir}}</span>-->
    </div>
</template>
<script>
    import {mapState,mapActions} from 'vuex';
    export default {
        name: 'comp-control-sort',
        data() {
            return {}
        },

        methods: {
            ...mapActions({
                'actionHandleSort': 'handleSort',
            }),
            handleSort(orderBy,orderDir) {
                let data = {orderBy,orderDir};
                console.log('handleSort CompControlSort.vue',data);
                this.actionHandleSort(data);
            }
        },
        computed: {
            ...mapState(['orderBy,orderDir'])
        }
    }
</script>