<script setup>
import { tableColumns, tableRows } from '@/assets/tableData.js'
import TableComponent from '@/components/TableComponent.vue'

/* 
  여기서부터는 네가 직접 작성하는 공간!
  예: rows를 ref로 감싸기, 이동 로직 만들기, 이벤트 연결 등
*/
</script>

<template>
  <h2>테이블 그리드 연습</h2>

  <div class="two-tables">
    <!-- Left Table -->
    <TableComponent title="Left Table" :columns="tableColumns" :rows="leftRows" />
    <!-- :onRowClick="/* 여기에 네가 만든 이동 함수 */" -->

    <!-- Right Table -->
    <TableComponent title="Right Table" :columns="tableColumns" :rows="rightRows" />
    <!-- :onRowClick="/* 네가 만든 이동 함수 */" -->
  </div>
</template>

<style scoped>
.two-tables {
  display: flex;
  gap: 20px;
}
</style>
