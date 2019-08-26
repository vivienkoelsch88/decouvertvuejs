<template>
    <div>{{messageErreur}}</div>
</template>

<script>


    export default {
        name: "Error",
        data: function(){
            return {
                messageErreur: null,
            }
        },
        props: {
            errorRecup: Object
        },
        methods: {
            message(){
                if(this.errorRecup.request.status === 0){
                    this.messageErreur = "Pas d'internet"
                } else if(this.errorRecup.request.status === 404){
                    this.messageErreur = "Page non trouvée"
                }
            }
        },
        mounted () {
            this.message()

        }


    }
</script>



<style scoped>

</style>
