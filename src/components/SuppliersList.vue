<template>
<div>
    <h1>Liste des fournisseurs</h1>

    <div class="fournisseur"  v-for="supplier in suppliers">

        <supplier :name="supplier.name" :status="supplier.status" :checkedAt="supplier.checkedAt"></supplier>
        <timeago :datetime="supplier.checkedAt" :auto-update="60"></timeago>

    </div>

</div>
</template>

<script>
    import VueTimeago from 'vue-timeago'
    // import VueRouter from 'vue-router'
    import Vue from 'vue'
    import Supplier from "./Supplier";
    // Vue.use(VueRouter);

    Vue.use(VueTimeago, {
        name: 'Timeago', // Component name, `Timeago` by default
        locale: 'en', // Default locale
        // We use `date-fns` under the hood
        // So you can use all locales from it
        locales: {
            'fr': require('date-fns/locale/fr'),
        }
    });

    export default {
        name: 'SuppliersList',
        components: {Supplier},
        props: {
            msg: String
        },
        data: function(){
            return {
                suppliers: [
                    {
                        id: 1,
                        name: "Fournisseur 1",
                        status: true,
                        checkedAt: new Date(),
                    },
                    {
                        id: 2,
                        name: "Fournisseur 2",
                        status: false,
                        checkedAt: new Date(),
                    },

                ],

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
