<template>
    <div class="col-12 col-lg-6">
        <div class="row">
            <!-- SORT : START -->
            <div class="col-12">
                <comp-control-sort/>
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

        data() {
            return {}
        },
        methods: {

        }
    }
</script>