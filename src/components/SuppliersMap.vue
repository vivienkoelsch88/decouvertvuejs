<template>

    <div style="height: 80vh">
        <h1>Carte des fournisseurs</h1>
        <LMap :zoom="zoom" :center="center">
            <LTileLayer :url="url"></LTileLayer>
            <LMarker :lat-lng="[47.413220, -1.219482]"></LMarker>
            <LMarker :lat-lng="[46.193220, 4.82]"></LMarker>
            <LMarker :lat-lng="[45.193220, 6.82]"></LMarker>
            <LMarker :lat-lng="[47.03220, -0.9482]"></LMarker>
            <LMarker :lat-lng="[46.03220, 2.9482]"></LMarker>
            <LMarker v-bind:key="supplier.id" v-for="supplier in suppliers" :lat-lng="[supplier.latitude, supplier.longitude]"></LMarker>

        </LMap>
    </div>

</template>


<script>

    import { LMap, LTileLayer, LMarker } from 'vue2-leaflet';


    export default {
        name: 'SuppliersMap',
        props: {
            msg: String
        },
        components: {
            LMap,
            LTileLayer,
            LMarker
        },
        data: function() {
            return {
                url: "https://{s}.tile.osm.org/{z}/{x}/{y}.png",
                zoom: 6,
                center: [46.5322, 2.9482],
                bounds: null,
                suppliers: [
                    {
                        id: 1,
                        latitude: 10,
                        longitude: 10
                    },
                    {
                        id: 2,
                        latitude: 11,
                        longitude: 9.6
                    }
                ]
            }
        },

    }
</script>
