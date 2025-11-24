<template>
  <div class="page-container">
    <h2>👋 소개 페이지</h2>
    <p>이 페이지는 Vue Router를 이용한 페이지 이동 테스트용입니다.</p>
    <p>성공적으로 다른 컴포넌트를 그리고 있습니다!</p>

    <p class="mt-4">1.홈(영화앱) 누르면 화면만 보입니다.</p>
    <p class="mt-4">3.Grid연습 누르면 Grid연습을 중인 화면을 보입니다.</p>
  </div>
</template>

<script setup>
// 소개 페이지에는 특별한 스크립트가 필요하지 않습니다.
</script>

<style scoped>
.page-container {
  padding: 20px;
  background-color: #e0f2f7;
  border-radius: 8px;
}
.mt-4 {
  margin-top: 1rem;
}
</style>
