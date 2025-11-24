import { createApp } from 'vue'
import App from './App.vue'
// 1. 만든 라우터 인스턴스를 import 합니다.
import router from './router'

const app = createApp(App)

// 2. .use() 메서드를 사용하여 라우터를 애플리케이션에 연결합니다.
app.use(router)

app.mount('#app')
