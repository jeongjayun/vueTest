<script setup>
import { ref } from 'vue' // ref를 가져온다.
import { tableColumns, tableRows } from '@/assets/tableData.js'
import TableComponent from '@/components/TableComponent.vue'

// 전체 데이터를 반응형으로 관리;
const allRows = ref(tableRows)

// Left Table에 표시될 행 (초기에는 전체 데이터)
// filter 등을 사용하지 않고, 이동 로직에서 직접 배열 요소를 이동/제거할 것이므로
// 처음에는 allRows의 복사본을 사용합니다.
const leftRows = ref([...allRows.value])

// Right Table에 표시될 행 (초기에는 빈 배열)
const rightRows = ref([])

// center Table에 표시될 행 (초기에는 빈 배열)
const centerRows = ref([])

/**
 * Left Table에서 체크된 모든 행을 찾아 Right Table로 이동시키는 함수
 */
const moveToRight = () => {
  // 1. Left Table에서 체크된 행을 필터링
  const checkedRows = leftRows.value.filter((row) => row.checked)

  if (checkedRows.length == 0) {
    alert('이동할 항목 선택')
    return
  } else {
    // 2. 체크된 행을 Right Table로 이동
    checkedRows.forEach((row) => {
      row.checked = false
      rightRows.value.push(row)
    })

    // 3. Left Table에서 체크되었던 행들을 제거
    leftRows.value = leftRows.value.filter((row) => !checkedRows.includes(row))
    console.log(`Right Table로 ${checkedRows.length}개 항목 이동 완료.`)

    // 4. id순 정리 (원래 순서 유지를 위함)
    console.log('sort전')
    rightRows.value.sort((a, b) => a.id - b.id)
  }
}

/**
 * Right Table에서 행 클릭 시 Left Table로 이동시키는 함수
 */
const moveToLeft = () => {
  //1. Right Table에서 체크된 행을 필터링
  const checkedRows = rightRows.value.filter((row) => row.checked)
  if (checkedRows.length == 0) {
    alert('이동할 항목 선택')
    return
  } else {
    //2. 체크된 행을 Left Table로 이동
    checkedRows.forEach((row) => {
      row.checked = false
      leftRows.value.push(row)
    })
    //3. Right Table에서 체크된 행 제거
    rightRows.value = rightRows.value.filter((row) => !checkedRows.includes(row))
    //4. id순 정리
    leftRows.value.sort((a, b) => a.id - b.id)
  }
}
</script>

<template>
  <div class="container">
    <h2>테이블 그리드 연습(20251125 일단 보류)</h2>
    <div class="button-right">
      <p>연습 예정</p>
      <button>초기화</button>
      <button>조회</button>
      <button>저장</button>
      <button>삭제</button>
    </div>

    <div class="searchDiv">
      <p>조회 div 연습 예정</p>
    </div>

    <div class="two-tables">
      <!-- Left Table -->
      <TableComponent title="Left Table" :columns="tableColumns" :rows="leftRows" />

      <div class="button-wrap">
        <!-- 체크한 아이템만 버튼으로 옮기기 -->
        <button @click="moveToRight">1. 왼쪽에서 오른으로 이동</button>
        <button @click="moveToLeft">2. 오른에서 왼쪽으로 이동</button>
      </div>

      <!-- Right Table -->
      <TableComponent title="Right Table" :columns="tableColumns" :rows="rightRows" />
    </div>

    <div class="button-updown-wrap">
      <!-- 체크한 아이템만 버튼으로 옮기기 -->
      <p>연습 예정</p>
      <button>아래로</button>
      <button>위로</button>
    </div>

    <div>
      <TableComponent title="Center Table" :columns="tableColumns" :rows="centerRows" />
    </div>
  </div>
</template>

<style scoped>
* {
  margin: 0 auto;
}

.container {
  padding: 10px;
  width: 800px;
}

.searchDiv {
  border: 1px solid #000;
  height: 100px;
  text-align: center;
  align-items: center;
  display: flex;
  margin-bottom: 20px;
}

button {
  width: max-content;
}

.button-right {
  padding: 15px 0px;
  text-align: right;
}
.button-wrap {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 15px;
}

.button-updown-wrap {
  margin: 15px 0px;
  text-align: center;
}

.two-tables {
  display: flex;
  flex-direction: row;
}
</style>
