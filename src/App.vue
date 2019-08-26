<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.png">
    <h3 v-if="loading">requête en cours</h3>
    <h3 v-if="!loading">requête finie</h3>
    <!--<HelloWorld msg="Que voulez-vous faire ?"/>-->
    <!--<button v-on:click="onSuppliersListClick">Consulter la liste des fournisseurs</button>-->
    <!--<button v-on:click="onMapClick">Voir la carte</button>-->
    <router-link :to="{name: 'SuppliersList', params:{info}}" class="boutons" >Consulter la liste des fournisseurs</router-link>
    <router-link :to="{name: 'SuppliersMap', params:{info}}" class="boutons" >Voir la carte</router-link>
    <error v-if="pasbon" :error-recup="pasbon"></error>
    <router-view></router-view>
     </div>

</template>


<script>

// import Supplier from "./components/Supplier";
import axios from 'axios'
import Error from './components/Error';

export default {
  name: 'app',
  components: {
    // Supplier,
    Error,
  },
  methods: {
    onSuppliersListClick: function(){
      alert("fournisseur click");

    },
    onMapClick: function(){
      alert("Map click");
    },
    async getApi() {
      try {
        await axios
                .get('https://api-suppliers.herokuapp.com/api/suppliers')
                .then(response => (this.info = response.data, this.loading = false));

      } catch (error) {
        this.pasbon = error
        // this.promesse(error.request.status)
        //     .then((result)=>console.log(result))
        //     .catch((error)=>console.log(error))
      }
    },
  },
  data: function(){
    return {
      info: null,
      loading: false,
      error: null,
      pasbon: null
    }
  },
  created () {
    this.loading = true;
    this.getApi()

  },


}
</script>

<style>
img{
  display: block;
  margin-left: auto;
  margin-right: auto;
}

.boutons{
  display: inline-block;
  background-color: #4CAF50; /* Green */
  border: none;
  color: white;
  padding: 15px 32px;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-size: 16px;
  margin: 10px;
}

#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>

