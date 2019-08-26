<template>
<div>
    <h1>Liste des fournisseurs</h1>
    <!--<h3 v-if="loading">requête en cours</h3>-->
    <!--<h3 v-if="!loading">requête finie</h3>-->
    <div class="fournisseur" v-bind:key="supplier.id"  v-for="supplier in info">

        <supplier :name="supplier.name" :status="supplier.status" :checkedAt="supplier.checkedAt"></supplier>
        <timeago :datetime="supplier.checkedAt" :auto-update="60"></timeago>

    </div>

    <!--<error v-if="pasbon" :error-recup="pasbon"></error>-->
</div>
</template>

<script>
    import VueTimeago from 'vue-timeago'
    // import VueRouter from 'vue-router'
    import Vue from 'vue'
    // import axios from 'axios'
    import Supplier from "./Supplier";
    // import Error from "./Error";
    // Vue.use(VueRouter);

    Vue.use(VueTimeago, {
        name: 'Timeago',
        locale: 'en', // Default locale
        // We use `date-fns` under the hood
        // So you can use all locales from it
        locales: {
            'fr': require('date-fns/locale/fr'),
        }
    });



    export default {
        name: 'SuppliersList',
        components: {
            // Error,
            Supplier,
        },
        props: {
            msg: String,
            info: Array,
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

            // promesse(response){
            //     return new Promise((resolve, reject) => {
            //         if(response === 0){
            //             resolve("c'est bon")
            //         } else {
            //             reject("c'est pas bon")
            //         }
            //     })
            // }

        data: function(){
            return {
                // info: null,
                // loading: false,
                // error: null,
                // pasbon: null
            }
        },
    }
</script>
<style>
    .fournisseur{
        border: solid;
        margin-bottom: 20px;
        margin-left: 5%;
        margin-right: 5%;
        padding-bottom: 2%;
    }
    </style>
