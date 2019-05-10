<template>
    <div>
        <h1>{{name}}</h1>
        <h3 :class="{rouge:!status, vert:status}">A du stock ?  {{stock}}</h3>
        <h5>Date de dernière relevé des stocks : {{checkedAt}}</h5>
        <input type="checkbox" v-model="status">
    </div>
</template>

<script>


    export default {

        name: "Supplier",
        // data: function(){
        //     return {
        //         name: 'Mon fournisseur',
        //         status: true, // est ce qu'il y a du stock
        //         checkedAt: new Date(), // date de la dernière mise à jour du stock
        //
        //     }
        // },
        computed: {
            stock: function(){
                if(!this.status) {
                    return "KO"
                }else {
                    return "OK"
                }
            }
        },
        props: {
            name: String,
            status: Boolean, // est ce qu'il y a du stock
            checkedAt: Date, // date de la dernière mise à jour du stock
        }
    }


</script>

<style scoped>
    .rouge{
        color: red;
    }
    .vert{
        color: green;
    }

</style>