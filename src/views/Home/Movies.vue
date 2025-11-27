<template>
  <div class="container">
    <h1>영화 정보</h1>

    <div v-for="movie in data" :key="movie.id" class="item">
      <figure>
        <img :src="`${movie.imgUrl}`" :alt="movie.title" />
      </figure>
      <div class="info">
        <h3 class="bg-yellow">{{ movie.title }}</h3>
        <p>개봉 : {{ movie.year }}</p>
        <p>장르 : {{ movie.category }}</p>
        <button @click="$emit('increaseLike', movie.id)">좋아요</button>
        <span>{{ movie.like }}</span>

        <p>
          <button @click="$emit('openModal', movie.id)">상세보기</button>
          <!--
          지금 보고 있는 강의가 1년 전 강의라 강의 시 문법과 차이가 있음.
          -->
        </p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'MoviesComponent',
  props: {
    data: Array,
  },
}
</script>

<style scoped>
.container {
  padding: 20px;
}

h1,
h2,
h3 {
  margin-bottom: 1rem;
}

p {
  margin-bottom: 10px;
}

button {
  margin-right: 10px;
  margin-top: 1rem;
}

.item {
  width: 100%;
  border: 1px solid #ccc;
  background-color: #fff;
  display: flex;
  margin-bottom: 20px;
  /* padding: 1rem; */
}

.item figure {
  width: 40%;
  margin-right: 1rem;
}

.item img {
  width: 100%;
}

.item .info {
  width: 100%;
}
</style>
