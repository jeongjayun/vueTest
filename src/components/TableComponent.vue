<script setup>
defineProps({
  columns: Array,
  rows: Array,
  title: String,
})

/**
 * 체크박스 상태를 토글, 버블링 방지
 * @param event
 * @param row
 */
const handleCheck = (event, row) => {
  //이벤트 버블링? <tr>의 onRowClick 이벤트 안되게 막기
  event.stopPropagation()
  //행의 checked상태 토글
  row.checked = event.target.checked
  console.log(
    `TableComponent의 handleCheck: ID ${row.id} - ${row.checked ? '선택됨' : '선택 해제됨'}`,
  )
}
</script>

<template>
  <div class="table-wrapper">
    <h3>{{ title }}</h3>
    <div class="button-wrap">
      <button>추가</button>
      <button>삭제</button>
    </div>
    <table class="common-table">
      <thead>
        <tr>
          <th v-for="col in columns" :key="col">{{ col }}</th>
        </tr>
      </thead>

      <tbody>
        <tr v-for="row in rows" :key="row.id">
          <td>
            <input type="checkbox" :checked="row.checked" @click="handleCheck($event, row)" />
          </td>
          <td>{{ row.id }}</td>
          <td>{{ row.name }}</td>
          <td>{{ row.role }}</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<style scoped>
h3 {
  margin: 0;
}

input {
  width: 15px;
}

.common-table {
  width: 100%;
  border-collapse: collapse;
}
.common-table th,
.common-table td {
  border: 1px solid #ccc;
  padding: 8px;
}
.table-wrapper {
  width: 100%;
}

.button-wrap {
  padding: 10px 0px;
  text-align: right;
}
</style>
