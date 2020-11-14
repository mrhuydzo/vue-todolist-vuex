<template>
    <div class="form-group">
        <b-dropdown id="dropdown-1" text="Sort by">
            <b-dropdown-item v-on:click="handleSort('name','asc')">Name ASC</b-dropdown-item>
            <b-dropdown-item v-on:click="handleSort('name','desc')">Name DESC</b-dropdown-item>
            <b-dropdown-divider></b-dropdown-divider>
            <b-dropdown-item v-on:click="handleSort('level','asc')">Level ASC</b-dropdown-item>
            <b-dropdown-item v-on:click="handleSort('level','desc')">Level DESC</b-dropdown-item>
        </b-dropdown>
        <span class="badge badge-success badge-medium">{{orderBy}} - {{orderDir}}</span>
    </div>
</template>
<script>
    export default {
        name: 'comp-control-sort',
        data() {
            return {}
        },
        props: {
            orderBy: {type: String,default: 'name'},
            orderDir: {type: String,default: 'asc'},
        },
        methods: {
            handleSort(orderBy,orderDir) {
                let data = {orderBy,orderDir};
                //console.log('handleSort CompControlSort.vue',data);
                this.$emit('handleSort',data);
            }
        }
    }
</script>