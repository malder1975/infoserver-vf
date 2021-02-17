<template>
    <div>
        <template v-if="!!mapLoaded">
            <slot :google="google" :map="map"></slot>
        </template>
        <div class="map-container">
            <div id="map" class="map"></div>
        </div>
    </div>
</template>

<script>
    import {Loader, LoaderOptions} from 'google-maps'
    export default {
        name: "VslMap",

        mounted() {
            Loader.load(function (google) {
                let map = new google.maps.Map(document.getElementById('map'),
                    {
                        zoom: 15,
                    })
            })

        }

    }


</script>

<style scoped>

</style>
