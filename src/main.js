import { createApp } from "vue"
import { createPinia } from "pinia"
import App from "./App.vue"
import router from "./router"
import mixins from './mixins/index.js'


const app = createApp(App)

app.use(createPinia())
app.use( router ) 
app.mixin(mixins);

app.mount("#app")
