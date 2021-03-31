// Router
import { createRouter, createWebHistory } from 'vue-router'

// Components
import Home from '../views/Home.vue'
import About from '../views/About.vue'
import PageNotFound from '../views/PageNotFound.vue'
import Visualizer from '../views/Visualizer.vue'

// Routes
const routes = [
    {
        path: "/",
        name: "Home",
        component: Home
    },
    {
        path: "/about",
        name: "About",
        component: About
    },
    {
        path: "/visualizer",
        name: "Visualizer",
        component: Visualizer
    },
    {
        path: "/:pathMatch(.*)*",
        name: "404 Not Found",
        component: PageNotFound
    }
]

const router = createRouter({
    history: createWebHistory(),
    routes
})

export default router