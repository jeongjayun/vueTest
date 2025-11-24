<template>
  <!-- 모달창 -->
  <div class="modal" v-if="isModal">
    <div class="inner">
      <h3>{{ data[selectMovie].title }}</h3>
      <p>영화 상세정보</p>
      <button @click="$emit('closeModal')">닫기</button>
    </div>
  </div>
</template>

<!-- props로 전달받은 데이터는 부모만 변경이 가능하다.
    emit이라는 걸 받아내는거다.
 -->

<script>
export default {
  name: 'ModalComponent', //이름명명규칙안맞아 오류날 수 있음
  props: {
    data: Array,
    isModal: Boolean,
    selectMovie: Number,
  },
}
</script>

<style scoped>
/* 모달창 */
.modal {
  background: rgba(0, 0, 0, 0.35);
  position: fixed;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
}

.modal .inner {
  background: #fff;
  width: 80%;
  padding: 20px;
  border-radius: 10px;
}
</style>
