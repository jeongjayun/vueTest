<script setup>
defineProps({
  columns: Array,
  rows: Array,
  title: String,
  selectedIds: Array, // 부모로부터 ID 배열을 받음
})

// const emit = defineEmits(['row-clicked'])
</script>

<template>
  <div class="table-wrapper">
    <h3>{{ title }} ({{ rows.length }})</h3>

    <table class="summary-table">
      <thead>
        <tr>
          <th v-for="col in columns" :key="col">{{ col }}</th>
        </tr>
      </thead>

      <tbody>
        <tr
          v-for="row in rows"
          :key="row.id"
          @click="$emit('row-clicked', row.id)"
          :class="{ 'selected-row': selectedIds.includes(row.id) }"
        >
          <!-- 💡 복수 선택 스타일 적용: selectedIds 배열에 row.id가 포함되어 있는지 확인 -->
          <td v-for="col in columns" :key="col">{{ row[col] }}</td>
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

.summary-table {
  width: 100%;
  border-collapse: collapse;
}
.summary-table th,
.summary-table td {
  border: 1px solid #333;
  padding: 8px;
}
.table-wrapper {
  width: 100%;
}

.button-wrap {
  padding: 10px 0px;
  text-align: right;
}

.selected-row {
  background-color: #eee;
}

/* 추가: 마우스 오버(hover) 스타일도 유지하려면 */
tbody tr:hover {
  /* hover 스타일이 selected-row를 덮어쓰지 않도록 !important를 사용할 수 있지만,
     클래스 우선순위를 높이거나 hover 스타일보다 아래에 selected-row 스타일을 두는 것이 좋습니다. */
  background-color: #ffeeee;
}
</style>
