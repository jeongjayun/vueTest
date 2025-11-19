<script>
// 스크립트
export default {
  name: 'App',
  data() {
    return {
      foods: ['김밥', '치즈만두', '햄버거', '아이스 아메리카노 얼음 많이'],
      data: [
        {
          title: '노량',
          year: 2023,
          category: '액션, 드라마',
          textRed: 'color:red',
        },
        {
          title: '부리부리 대마왕과 짱구의 모험',
          year: 2024,
          category: '드라마',
          textRed: 'color:blue',
        },
        {
          title: '키보드 익숙해지기가 쉽지 않다',
          year: 2025,
          category: '기술, 개발',
          textRed: 'color:green',
        },
      ],
    }
  },
}
</script>

<template>
  <!-- html 코드 작성되는 부분 -->
  <H1>영화 정보</H1>
  <div v-for="(movie, i) in data" :key="i">
    <h3 class="bg-yellow" :style="textRed">{{ movie.title }}</h3>
    <p>개봉 : {{ movie.year }}</p>
    <p>장르 : {{ movie.category }}</p>
  </div>

  <!--
      note 1: 데이터 바인딩 할 때는 중괄호 안에 변수를 적어준다.
      note 2: ':속성명'="데이터" 속성에 값을 바인딩할 때 사용. 뷰 문법임.
    -->

  <!--<p v-for="(item, i) in foods" :key="i">{{ item }}</p> -->

  <!--
     note 3: 반복문법 v-for
  -->
</template>

<style scoped>
/* 스타일 */
.bg-yellow {
  background: gold;
  padding: 20px;
}
</style>
