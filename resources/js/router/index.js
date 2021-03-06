import { createRouter, createWebHistory } from "vue-router";

import Index from '../components/Index';

const routes = [
    {
        path: '/',
        name: 'index',
        component: Index
    }
]

export default createRouter({
    history: createWebHistory(), 
    routes
})