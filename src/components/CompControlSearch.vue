<template>
    <div class="input-group">
        <input type="text" class="form-control" placeholder="Search for..."
               v-on:input="handleSearch"
               v-bind:value="strSearch"
        />
        <span class="input-group-append">
            <button class="btn btn-info" type="button"
                v-on:click="handleClear"
            >Clear!</button>
        </span>
    </div>
</template>
<script>
    //v-model => v-bind => v-on:input
    import {mapState} from 'vuex';
    export default {
        name: 'comp-control-search',
        data() {
            return {}
        },
        computed:  mapState(['strSearch']),
        methods: {
            handleSearch(e){
                this.$store.dispatch('handleSearch',e.target.value);
            },
            handleClear() {
                //Thay đổi giá trị strSearch = ''
                this.$store.dispatch('handleSearch','');
            }
        }
    }
</script>