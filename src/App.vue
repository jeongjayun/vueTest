<script>
// App.vue는 오직 레이아웃과 라우팅만 담당합니다. 다른 컴포넌트는 import 하지 않습니다.
export default {
  name: 'App',
}
</script>

<template>
  <!-- 모든 콘텐츠를 감싸는 최상위 컨테이너. 여기에 max-width 스타일을 적용했습니다. -->
  <div id="app-wrapper">
    <!-- 1. 라우팅 메뉴: 페이지를 이동할 때 사용합니다. -->
    <nav class="router-nav">
      <router-link to="/">홈 (영화앱)</router-link> |
      <router-link to="/about">소개 페이지</router-link> |
      <!-- Grid 연습 페이지로 이동하는 링크 -->
      <router-link to="/grid">Grid 연습</router-link>
    </nav>

    <!-- 2. 라우트 뷰: 이 자리에 URL에 맞는 Home, About, GridPractice 중 하나가 로드됩니다. -->
    <router-view />
  </div>
</template>

<style>
/* 전역 스타일 */
body {
  width: 100%;
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
#app-wrapper {
  width: 100%;
  min-width: 320px;
  margin: 0 auto;
}

/* 라우팅 메뉴 스타일 */
.router-nav {
  padding: 1rem;
  background-color: #f3f4f6;
  border-bottom: 1px solid #e5e7eb;
}

.router-nav a {
  text-decoration: none;
  font-weight: bold;
  color: #1f2937;
  padding: 0 0.5rem;
}

.router-nav a.router-link-active {
  color: #3b82f6;
}
/* GridPractice.vue에서 사용할 공통 스타일도 여기에 일부 포함되어 있습니다. */
</style>
