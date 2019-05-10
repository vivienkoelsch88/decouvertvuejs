// routes.js

import SuppliersList from './components/SuppliersList.vue'
import SuppliersMap from './components/SuppliersMap.vue'
import Supplier from './components/Supplier.vue'


const routes = [
    { path: '/SuppliersList', component: SuppliersList },
    { path: '/SuppliersMap', component: SuppliersMap },
    { path: '/Supplier', component: Supplier },
];

export default routes;