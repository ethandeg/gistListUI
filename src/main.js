import { createApp } from 'vue'
import App from './App.vue'
import { store } from "./store/index";
import LoginPage from "./components/LoginPage"
import { createRouter, createWebHistory } from 'vue-router';
const app = createApp(App);
app.use(store);

const routes = [
    { path: '/login', component: LoginPage }
]

const router = createRouter({
    mode: 'history',
    routes,
    history: createWebHistory(process.env.BASE_URL)
})

app.use(router);
app.mount('#app');