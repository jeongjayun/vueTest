<template>
  <nav class="navbar">
    <a href="#">Home</a>
    <a href="#">Movies</a>
    <a href="#">About</a>
  </nav>
</template>

<script>
export default {
  name: 'NavbarComponent', //너무 단순하면 에러가 난다
}
</script>

<style>
.navbar {
  background: #000;
  padding: 20px;
  text-align: center;
}

.navbar a {
  color: #fff;
  text-decoration: none;
  padding: 1em;
}
</style>

<!-- 초기템플릿 작성하는 부분 : 단축어 vueInit
    > 왜 오류가 났나 했더니 vue3에서는 vetur 하고 확장프로그램 충돌이 난다고 함. volar를 사용하자?
    그래도 빨간줄나는데?? 했더니 export 부분에 내용을 지정을 안해서 오류가 난 거였음.
-->
