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
                <comp-control-search/>
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
            orderBy: {type: String,default: 'name'},
            orderDir: {type: String,default: 'asc'},
        },
        data() {
            return {}
        },
        methods: {
            handleSort (data) {
                //console.log('handleSort CompControl.vue',data);
                this.$emit('handleSort',data);
            }
        }
    }
</script>