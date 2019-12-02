import Vue from 'vue'
import Router from 'vue-router'
import Index from "./views/Index";
import NotFound from "./views/NotFound"
import Register from "./views/Register";
import Nav from "./views/Nav";

Vue.use(Router);

export default new Router({
    mode: 'history',
    base: process.env.BASE_URL,
    routes: [
        {
            path: '/',
            redirect: Index
        },
        {
            path: '/index',
            name: 'index',
            component: Index
        },
        {
            path: '/register',
            name: 'register',
            component: Register
        },
        {
            path: "/nav",
            name: "nav",
            component: Nav
        },
        {
            path: '*',
            name: 'notFound',
            component: NotFound
        }
    ]
})
