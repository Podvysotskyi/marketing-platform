import {createApp} from 'vue'
import './style.css'
import App from './App.vue'
import router from './router.ts'
import {createPinia} from 'pinia'

const store = createPinia()
const app = createApp(App)

app.use(store)
app.use(router)
app.mount('#app')
