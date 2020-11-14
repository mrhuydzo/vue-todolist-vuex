<template>
    <div class="col-12 col-lg-6">
        <div class="row">
            <!-- SORT : START -->
            <div class="col-12">
                <comp-control-sort
                    v-bind:orderBy="orderBy"
                    v-bind:orderDir="orderDir"
                    v-on:handleSort="handleSort"
                />
            </div>
            <!-- SORT : END -->

            <!-- SEARCH : START -->
            <div class="col-12">
                <comp-control-search
                    v-on:handleSearch="handleSearch"
                    v-bind:strSearch="strSearch"
                />
            </div>
            <!-- SEARCH : END -->
        </div>
    </div>
</template>
<script>
    import CompControlSort from "./CompControlSort";
    import CompControlSearch from "./CompControlSearch";

    export default {
        name: 'comp-control',
        components: {CompControlSearch, CompControlSort},
        props: {
            strSearch: {type: String, default: ''},
            orderBy: {type: String,default: 'name'},
            orderDir: {type: String,default: 'asc'},
        },
        data() {
            return {}
        },
        methods: {
            handleSearch(data) {
                //console.log('handleSearch CompControl.vue', data);
                this.$emit('handleSearch',data);
            },
            handleSort (data) {
                //console.log('handleSort CompControl.vue',data);
                this.$emit('handleSort',data);
            }
        }
    }
</script>