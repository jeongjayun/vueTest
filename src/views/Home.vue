<script>
// 필요한 컴포넌트들과 영화 데이터를 import 합니다.
import data from '../assets/movies' // 영화 데이터
import Navbar from '../components/Navbar.vue' // Nav
import Modal from '../components/Modal.vue' // Modal
import Event from '../components/Event.vue' // 이벤트 박스
import Movies from '../components/Movies.vue' // 영화정보
import SearchBar from '../components/SearchBar.vue' // 검색창

export default {
  name: 'HomeView',
  data() {
    return {
      isModal: false,
      data: data, // data 라는 변수명에 data라는 값이 들어온 것임
      data_temp: [...data], // 원래 데이터를 복사 (스프레드 문법을 사용한 배열복사)
      selectMovie: 0,
      text: ['소란, 사마죄', '소란, 괜찮아', '소란, 프린스'],
      eventTextNum: 0,
      interval: null,
    }
  },
  methods: {
    increaseLike(id) {
      this.data.find((movie) => {
        if (movie.id == id) {
          movie.like += 1
        }
      })
    },
    searchMovie(title) {
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
    Navbar, // 참고: 'Navbar: Navbar' 대신 단축 문법 사용
    Modal,
    Event,
    Movies,
    SearchBar,
  },
  mounted() {
    console.log('Home Mounted: 이벤트 인터벌 시작')
    this.interval = setInterval(() => {
      if (this.eventTextNum == this.text.length - 1) {
        this.eventTextNum = 0
      } else {
        this.eventTextNum++
      }
    }, 3000) // 3초마다
  },
  unmounted() {
    console.log('Home Unmounted: 인터벌 해제')
    clearInterval(this.interval) // 인터발 해제
  },
}
</script>

<template>
  <!-- Home 페이지의 실제 컨텐츠 -->
  <div class="home-container">
    <Navbar />
    <Event :text="text[eventTextNum]" />
    <SearchBar :data="data_temp" @searchMovie="searchMovie($event)" />
    <p>
      <button @click="showAllMovie">전체보기</button>
    </p>
    <Movies
      :data="data_temp"
      @openModal="((isModal = true), (selectMovie = $event))"
      @increaseLike="increaseLike($event)"
    />
    <Modal
      :data="data"
      :isModal="isModal"
      :selectMovie="selectMovie"
      @closeModal="isModal = false"
    />
  </div>
</template>

<style scoped>
.home-container {
  max-width: 768px; /* 여기서만 고정 */
  margin: 0 auto;
  /* padding: 16px; */
  background-color: #f3f4f6;
}
</style>
