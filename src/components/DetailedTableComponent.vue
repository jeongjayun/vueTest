<script setup>
import { computed } from 'vue'

const props = defineProps({
  columns: Array,
  rows: Array,
  title: String,
})

// 💡 수정: detailedKeys 계산 로직을 제거하거나, 간단히 columns를 사용합니다.
// (rows 배열이 빈 배열일 경우 메시지를 위한 hasRows는 유지)
const hasRows = computed(() => props.rows && props.rows.length > 0)
</script>

<template>
  <h3>{{ title }} ({{ rows.length }})</h3>
  <div v-if="hasRows">
    <table class="common-table detailed-table">
      <thead>
        <tr>
          <th v-for="col in columns" :key="col">{{ col }}</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="row in rows" :key="row.id">
          <td v-for="col in columns" :key="col">
            {{ row[col] }}
          </td>
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

.detailed-table {
  width: 100%;
  border-collapse: collapse;
}
.detailed-table th,
.detailed-table td {
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
</style>
