<template>
<div>
    <h1>Liste des fournisseurs</h1>
    <supplier :name="name" :status="status" :checkedAt="checkedAt"></supplier>
</div>
</template>

<script>
    // import Supplier from './components/Supplier.vue'
    import VueRouter from 'vue-router'
    import Vue from 'vue'
    import Supplier from "./Supplier";
    Vue.use(VueRouter);


    export default {
        name: 'SuppliersList',
        components: {Supplier},
        props: {
            msg: String
        },
        data: function(){
            return {
                name: 'Mon fournisseur',
                status: true, // est ce qu'il y a du stock
                checkedAt: new Date(), // date de la dernière mise à jour du stock

            }
        },
    }
</script>