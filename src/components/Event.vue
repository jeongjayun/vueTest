<template>
  <div class="event" :class="{ show: isOpen }">
    <!-- TODO: class {show: true} 면 보이고 false면 안보이게 binding 할 수 있다. 이거 뭐라고 함? -->
    <p>
      {{ text }}
    </p>
    <button @click="isOpen = false">X</button>
  </div>
</template>

<script>
export default {
  name: 'EventComponent',
  props: {
    text: String,
    isEventOpen: Boolean,
  },
  data() {
    return {
      isOpen: true,
    }
  },
}
</script>

<style scoped>
.event {
  background: #444;
  color: #fff;
  padding: 10px 20px;
  text-align: center;
  font-size: small;
  display: flex;
  justify-content: space-between;
  align-items: center;
  display: none;
}

.show {
  display: flex;
}

.event p {
  margin: 0;
}

.event button {
  margin: 0;
}
</style>
