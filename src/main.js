import { createApp } from 'vue'
import { createPinia } from 'pinia'
// import Notify from 'simple-notify'
import 'simple-notify/dist/simple-notify.min.css'

import './style.css'
import App from './App.vue'
import router from './router'

const app = createApp(App)

app.use(createPinia())
app.use(router)

// app.use(Notify)

app.mount('#app')
