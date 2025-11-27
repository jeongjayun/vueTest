import { createRouter, createWebHistory } from 'vue-router'
// 각 페이지 컴포넌트를 불러옵니다.
import Home from '../views/Home/Home.vue'
import About from '../views/AboutView.vue'
import GridPractice from '../views/GridPractice/GridPractice.vue'
import GridPractice2 from '../views/GridPractice2/GridPractice2.vue'

// 라우팅 규칙 정의 (URL과 컴포넌트를 연결)
const routes = [
  {
    path: '/', // URL: /
    name: 'Home',
    component: Home, // App.vue의 <router-view> 자리에 Home.vue를 보여줍니다.
  },
  {
    path: '/about', // URL: /about
    name: 'AboutView',
    component: About, // App.vue의 <router-view> 자리에 AboutView.vue를 보여줍니다.
  },
  {
    path: '/grid', // URL: /grid
    name: 'GridPractice',
    component: GridPractice, // App.vue의 <router-view> 자리에 GridPractice.vue를 보여줍니다.
  },
  {
    path: '/grid2', // URL: /grid
    name: 'GridPractice2',
    component: GridPractice2, // App.vue의 <router-view> 자리에 GridPractice2.vue를 보여줍니다.
  },
]

// 라우터 인스턴스 생성
const router = createRouter({
  history: createWebHistory(),
  routes,
})

export default router
