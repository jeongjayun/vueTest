<template>
  <div class="search-box">
    <input
      type="search"
      @change="
        ($emit('searchMovie', $event.target.value),
        ((InputText = $event.target.value), ($event.target.value = '')))
      "
      placeholder="검색어 입력"
    />
    <button>검색</button>
  </div>
  <!-- <p>{{ InputText }}</p> -->
</template>

<!-- @input="InputText = $event.target.value"
     라는 자바스크립트의 사용자가 입력한 값을 그대로 input 입력칸에 넣는
     기능이 있는데 vue에서는 v-model 이라는 기능이 있음.

     ** $event.target.value : 해당 요소 안에 입력된 값

     v-model="inputText" 치면 똑같은 기능을 한다. 훨씬 간편하다.
     그런데 이 v-model 단점이
     글자를 하나씩 입력할 때마다 감지한다...이게 input 이벤트의 특성.
     그래서 일단은 change 이벤트로 바꾸어서 테스트

     @change="((InputText = $event.target.value), ($event.target.value = ''))"
     검색한 뒤에 바로 이 창이 초기화 되도록 하는 기능
     watch는 데이터가 변경되는 시점에서 작동하기 때문에 이거 참고하세요
-->

<script>
export default {
  name: 'SearchBarComponent',
  data() {
    return {
      InputText: '',
    }
  },
  props: {
    data: Array, // 원본
  },
  watch: {
    /*
        검색할 항목을 적어준다.
        검사할변수명(변경값) { 로직 }
        파라미터에 변경값 외에 하나 더 들어갈 수 있음.
        만약에
        InputText(name, beforeName){ 로직 }
        이라고 쓰면 첫번째는 변경값, 두번째는 이전에 입력한 값이 된다.

        이 watch 라고 하는 것은 보통 Hook 이라고 한다.
    */
    InputText(name) {
      //입력한 영화제목이 데이터에 있는지 확인할 것이다.
      const findName = this.data.filter((movie) => {
        return movie.title.includes(name)
      })
      //   console.log(findName)
      if (findName.length == 0) {
        alert('해당하는 자료가 없습니다.')
      }
    },
  },
}
</script>

<style>
.search-box {
  padding: 10px;
  display: flex;
  justify-content: center;
}

.search-box input {
  padding: 5px 10px;
}

.search-box button {
  margin: 0;
}
</style>
