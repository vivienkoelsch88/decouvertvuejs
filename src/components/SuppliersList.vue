<template>
<div>
    <h1>Liste des fournisseurs</h1>
    <div class="fournisseur" v-for="supplier in suppliers">
        <supplier :name="supplier.name" :status="supplier.status" :checkedAt="supplier.checkedAt"></supplier>
    </div>
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
                suppliers: [
                    {
                        id: 1,
                        name: "Fournisseur 1 ?",
                        status: true,
                        checkedAt: new Date()
                    },
                    {
                        id: 2,
                        name: "Fournisseur 2",
                        status: false,
                        checkedAt: new Date()
                    }
                ]
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