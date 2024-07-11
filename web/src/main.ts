import './style/base.scss'

import { createApp } from 'vue'
import App from './App.vue'
import * as ui from './components/ui'



const app = createApp(App)
Object.entries(ui).forEach(([key,comp]) => {
  app.component(key,comp)
})
app.mount('#app')
