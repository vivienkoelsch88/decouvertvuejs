// routes.js

import SuppliersList from './components/SuppliersList.vue'
import SuppliersMap from './components/SuppliersMap.vue'
import Supplier from './components/Supplier.vue'


const routes = [
    { path: '/SuppliersList', name: "SuppliersList", component: SuppliersList, props: true },
    { path: '/SuppliersMap', name: "SuppliersMap", component: SuppliersMap, props: true },
    { path: '/Supplier', component: Supplier },
];

export default routes;
