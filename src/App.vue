<script>
// 스크립트
import data from './assets/movies' // 영화데이터
import Navbar from './components/Navbar.vue' // Nav
import Modal from './components/Modal.vue' // Modal
import Event from './components/Event.vue' // 이벤트 박스
import Movies from './components/Movies.vue' // 영화정보
import SearchBar from './components/SearchBar.vue' // 검색창

console.log(data)
/*
  데이터가 많은 경우에는 이렇게
  따로 js를 빼서 만들어주고 import 하는 방향이 좋다.

  1) 중괄호로 데이터를 여러개 보낼 때에는 import { data }
  2) 데이터 하나만 보낼 때에는 import data 
 */

export default {
  name: 'App',
  data() {
    return {
      isModal: false,
      // foods: ['김밥', '치즈만두', '햄버거', '아이스 아메리카노 얼음 많이'],
      data: data, //data 라는 변수명에 data라는 값이 들어온 것임
      data_temp: [...data], // 원래 데이터를 복사 (스프레드 문법을 사용한 배열복사)
      selectMovie: 0,
      text: ['소란, 사마죄', '소란, 괜찮아', '소란, 프린스'],
      eventTextNum: 0,
      interval: null,
    }
  },
  methods: {
    increaseLike(id) {
      // this.data[i].like += 1
      this.data.find((movie) => {
        if (movie.id == id) {
          movie.like += 1
        }
      })
      /*
        like만 쓰면 변수를 못찾아서 오류가 나는데
        data라는 객체 안에 있는 like라는 함수를 사용하려면
        변수 앞에 this.를 붙여주면 찾을 수 있다.
       */
    },
    searchMovie(title) {
      //영화 제목이 포함된 데이터를 가져옴
      this.data_temp = this.data.filter((movie) => {
        return movie.title.includes(title)
      })
    },
    showAllMovie() {
      this.data_temp = [...this.data]
    },
  },
  components: {
    // 컴포넌트 등록
    Navbar: Navbar,
    Modal: Modal,
    Event: Event,
    Movies: Movies,
    SearchBar: SearchBar,
  },
  mounted() {
    console.log('mounted')
    this.interval = setInterval(() => {
      if (this.eventTextNum == this.text.length - 1) {
        this.eventTextNum = 0
      } else {
        this.eventTextNum++
      }
    }, 3000) // 3초마다
  },
  unmounted() {
    clearInterval(this.interval) //인터발 해제
  },
}
</script>

<template>
  <!-- html 코드 작성되는 부분 -->
  <Navbar />
  <Event :text="text[eventTextNum]" />
  <!--//Event
    동적으로 값을 전달할 떄 v-bind 문법에 앞에 콜론을 붙여서 변수값을 넣는 겁니다.
  -->
  <SearchBar :data="data_temp" @searchMovie="searchMovie($event)" />
  <p>
    <button @click="showAllMovie">전체보기</button>
  </p>
  <Movies
    :data="data_temp"
    @openModal="((isModal = true), (selectMovie = $event))"
    @increaseLike="increaseLike($event)"
  />
  <Modal :data="data" :isModal="isModal" :selectMovie="selectMovie" @closeModal="isModal = false" />
  <!--관례상 속성명과 변수명은 똑같이 해준다.-->

  <!--
      note 1: 데이터 바인딩 할 때는 중괄호 안에 변수를 적어준다.
      note 2: ':속성명'="데이터" 속성에 값을 바인딩할 때 사용. 뷰 문법임.
    -->

  <!--<p v-for="(item, i) in foods" :key="i">{{ item }}</p> -->

  <!--
    note 3: 반복문법 v-for
    note 4: v-on:(event) 있는데 v-on을 @로 함축시킬 수 있다.
  -->
</template>

<style>
* {
  box-sizing: border-box;
  margin: 0;
}

body {
  max-width: 768px;
  margin: 0 auto;
  /* padding: 20px; */
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
  display: flex;
  margin-bottom: 20px;
  padding: 1rem;
}

.item figure {
  width: 30%;
  margin-right: 1rem;
}

.item img {
  width: 100%;
}

.item .info {
  width: 100%;
}

/* 스타일
.bg-yellow {
  background: gold;
  padding: 20px;
} */
</style>
