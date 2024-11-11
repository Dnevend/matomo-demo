import './assets/main.css'

import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
// @ts-ignore: Could not find a declaration file for module 'vue-matomo'
import VueMatomo from 'vue-matomo'
const app = createApp(App)

app.use(VueMatomo, {
    host: 'https://dnevendsite.matomo.cloud/',
    siteId: 2
});

app.use(router)

app.mount('#app')

// @ts-ignore
window._paq.push(['trackPageView']); // 跟踪页面视图
