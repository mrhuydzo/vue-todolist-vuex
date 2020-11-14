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
    export default {
        name: 'comp-control-search',
        props: {
            strSearch: {type: String,default: ''}
        },
        data() {
            return {}
        },
        methods: {
            handleSearch(e){
                console.log('CompControlSearch.vue');
                this.$emit('handleSearch',e.target.value);
            },
            handleClear() {
                //Thay đổi giá trị strSearch = ''
                this.$emit('handleSearch','');
            }
        }
    }
</script>