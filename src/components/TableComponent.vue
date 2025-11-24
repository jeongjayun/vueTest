<script setup>
defineProps({
  columns: Array,
  rows: Array,
  title: String,
  onRowClick: Function,
})
</script>

<template>
  <div class="table-wrapper">
    <h3>{{ title }}</h3>

    <table class="common-table">
      <thead>
        <tr>
          <th v-for="col in columns" :key="col">{{ col }}</th>
        </tr>
      </thead>

      <tbody>
        <tr v-for="row in rows" :key="row.id" @click="onRowClick(row)">
          <!-- onRowClick 이 부분을 네가 직접 사용할 거임 -->
          <td>{{ row.id }}</td>
          <td>{{ row.name }}</td>
          <td>{{ row.role }}</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<style scoped>
.common-table {
  width: 100%;
  border-collapse: collapse;
}
.common-table th,
.common-table td {
  border: 1px solid #ccc;
  padding: 8px;
}
</style>
