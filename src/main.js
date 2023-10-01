import { createSSRApp } from 'vue'
import App from './App.vue'
import { createRouter, createWebHistory } from 'vue-router'

let app = createSSRApp(App);

import AddSongRoute from './components/routes/addsong.vue';
import SongListRoute from './components/routes/SongListRoute.vue';
import boardRoute from './components/routes/boardRoute.vue';

const routes = [
    { path: '/addsong', component: AddSongRoute},
    { path: '/songs/:category/:value', component: SongListRoute},
    { path: '/board', component: boardRoute},
]

const router = createRouter({
    history: createWebHistory(),
    routes,
});

app.use(router);

app.mount('#app');