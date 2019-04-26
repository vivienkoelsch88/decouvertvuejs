<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.png">
    <!--<HelloWorld msg="Que voulez-vous faire ?"/>-->
    <button v-on:click="onSuppliersListClick">Consulter la liste des fournisseurs</button>
    <button v-on:click="onMapClick">Voir la carte</button>
    <suppliersList/><SuppliersMap/>
     </div>

</template>


<script>
import HelloWorld from './components/HelloWorld.vue'
import SuppliersList from './components/SuppliersList.vue'
import SuppliersMap from './components/SuppliersMap.vue'


export default {
  name: 'app',
  components: {
    SuppliersList,
    SuppliersMap
  },
    methods: {
      onSuppliersListClick: function(){
        alert("fournisseur click");

      },
      onMapClick: function(){
        alert("Map click");
      },
    }


}
</script>

<style>
img{
  display: block;
  margin-left: auto;
  margin-right: auto;
}

button{
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
