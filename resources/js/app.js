/**
 * First we will load all of this project's JavaScript dependencies which
 * includes Vue and other libraries. It is a great starting point when
 * building robust, powerful web applications using Vue and Laravel.
 */

require('./bootstrap');

window.Vue = require('vue');
import VueRouter from 'vue-router';
import axios from 'axios';

Vue.use(VueRouter, axios);
// Vue.component('farm-home',require('./components/home.vue'));
const routes=[
    {path:'/',component:require('./components/home.vue').default}
]
const router= new VueRouter({
    mode:'history',
    routes
})
const app = new Vue({
    el: '#app',   
    router
});
