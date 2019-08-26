<template>

    <div style="height: 80vh">
        <h1>Carte des fournisseurs</h1>
        <!--<h3 v-if="loading">requête en cours</h3>-->
        <!--<h3 v-if="!loading">requête finie</h3>-->
        <LMap :zoom="zoom" :center="center">
            <LTileLayer :url="url"></LTileLayer>
            <!--<LMarker :lat-lng="[47.413220, -1.219482]"></LMarker>-->
            <!--<LMarker :lat-lng="[46.193220, 4.82]"></LMarker>-->
            <!--<LMarker :lat-lng="[45.193220, 6.82]"></LMarker>-->
            <!--<LMarker :lat-lng="[47.03220, -0.9482]"></LMarker>-->
            <!--<LMarker :lat-lng="[46.03220, 2.9482]"></LMarker>-->
            <!--<LMarker v-bind:key="supplier.id" v-for="supplier in suppliers" :lat-lng="[supplier.latitude, supplier.longitude]"></LMarker>-->


        <div v-bind:key="supplier.id"  v-for="supplier in infos">
            <LMarker :lat-lng="[supplier.latitude, supplier.longitude]"></LMarker>
        </div>
        </LMap>
        <!--<error v-if="pasbon" :error-recup="pasbon"></error>-->
    </div>

</template>


<script>

    import { LMap, LTileLayer, LMarker } from 'vue2-leaflet';
    // import axios from 'axios';
    // import Supplier from "./Supplier";
    // import Error from "./Error";


    export default {
        name: 'SuppliersMap',
        props: {
            info: Object
        },
        components: {
            LMap,
            LTileLayer,
            LMarker,
            // Error,
            // Supplier,
        },
        methods: {
            // async getApi() {
            //     try {
            //         await axios
            //             .get('https://api-suppliers.herokuapp.com/api/suppliers')
            //             .then(response => (this.info = response.data, this.loading = false));
            //
            //     } catch (error) {
            //         this.pasbon = error
            //         // this.promesse(error.request.status)
            //         //     .then((result)=>console.log(result))
            //         //     .catch((error)=>console.log(error))
            //     }
            // },
        },
        // created () {
        //     this.loading = true;
        //     this.getApi()
        //
        // },
        data: function() {
            return {
                url: "https://{s}.tile.thunderforest.com/spinal-map/{z}/{x}/{y}.png",
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
                ],
                infos: null,
                // loading: false,
                // error: null,
                // pasbon: null
            }
        },
        mounted() {
            if (this.info) {
                this.infos = this.info
            }

        }

    }
</script>
