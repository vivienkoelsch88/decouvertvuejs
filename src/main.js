import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router';
import routes from './routes';

Vue.config.productionTip = false;

Vue.use(VueRouter);
import { Icon } from 'leaflet'
import 'leaflet/dist/leaflet.css'


delete Icon.Default.prototype._getIconUrl;

Icon.Default.mergeOptions({
  iconRetinaUrl: require('leaflet/dist/images/marker-icon-2x.png'),
  iconUrl: require('leaflet/dist/images/marker-icon.png'),
  shadowUrl: require('leaflet/dist/images/marker-shadow.png')
});


const router = new VueRouter({routes});

new Vue({
  router,
  render: h => h(App),
}).$mount('#app');
