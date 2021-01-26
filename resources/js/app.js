import Vue from 'vue'
// Импортируем главный файл приложения
import App from './App.vue';

// Импортируем Bootstrap для Vue
import BootstrapVue from 'bootstrap-vue'
//require('./bootstrap');

//Импортируем Роутер и локальное хранилище
import router from './router'
import { store } from './store'

// Хлебные крошки
import Breadcrumb from "./components/Common/Breadcrumb";

//window.Vue = require('vue').default;

/**
 * The following block of code may be used to automatically register your
 * Vue components. It will recursively scan this directory for the Vue
 * components and automatically register them with their "basename".
 *
 * Eg. ./components/ExampleComponent.vue -> <example-component></example-component>
 */

// const files = require.context('./', true, /\.vue$/i)
// files.keys().map(key => Vue.component(key.split('/').pop().split('.')[0], files(key).default))

//Vue.component('example-component', require('./components/ExampleComponent.vue').default);

window.Vue = Vue;

Vue.use(BootstrapVue);

Vue.component('piaf-bread-crumb', Breadcrumb)

new Vue({
    render: h => h(App),
    router,
    store

}).$mount('#app');

