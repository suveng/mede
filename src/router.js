import Vue from 'vue'
import Router from 'vue-router'
import Index from "./views/Index";
import MyContainer from "./views/myContainer";
import Mall from "./views/mall";
import NotFound from "./views/NotFound"
import Register from "./views/Register";
import School from "./views/school";
import Nav from "./views/Nav";

Vue.use(Router);

export default new Router({
    // mode: 'history',
    base: process.env.BASE_URL,
    routes: [
        {
            path: '/',
            redirect: MyContainer
        },
        {
            path: '/index',
            redirect: MyContainer
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
        },
        {
            path: '/school',
            name: 'school',
            component: School
        },
        {
            path: '/mall',
            name: 'mall',
            component: Mall
        },{
            path: '/myContainer',
            name: 'myContainer',
            component: MyContainer
        }
    ]
})
