import { createApp } from 'vue'

import router from "@/routes"
import "@/routes/permission";
import store from "@/store"
import App from '@/App.vue'
import '@/style.css'

const app = createApp(App);
app.use(router).use(store);
router.isReady().then(() => {
  app.mount("#app")
})
console.log('aaaaa=>', import.meta.env)
app.config.errorHandler = (err, instance, info) => {
  console.log('err====>', err, instance, info)
}