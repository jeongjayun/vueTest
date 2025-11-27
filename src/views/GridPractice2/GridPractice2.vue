<script setup>
import { ref, computed } from 'vue'
import {
  summaryColumns,
  summaryData,
  detailedColumns,
  detailedData,
} from '@/views/GridPractice2/tableData2.js'
import SummaryTableComponent from '@/views/GridPractice2/SummaryTableComponent.vue'
import DetailedTableComponent from '@/views/GridPractice2/DetailedTableComponent.vue'
import SearchBar from '@/views/Home/SearchBar.vue'

// 원본 데이터
const SummaryRows = ref(summaryData)
const allDetailedRows = ref(detailedData)

// 1. 상태수정 : 선택된 ID를 배열로 관리한다.
const selectedIds = ref([])

// 2. computed : 선택된 ID 배열을 기반으로 상세 데이터 목록 계산
const selectedDetailedRows = computed(() => {
  if (selectedIds.value.length === 0) {
    return [] // 선택된 ID가 없으면 빈 배열
  }

  // selectedIds 배열에 포함된 모든 ID에 해당하는 상세 데이터를 필터링
  return allDetailedRows.value.filter((item) => selectedIds.value.includes(item.id))
})

// 3. handler 수정
const toggleRowSelection = (id) => {
  const index = selectedIds.value.indexOf(id)

  if (index > -1) {
    //이미 선택되어 있으면 제거(선택 해제);
    selectedIds.value.splice(index, 1)
  } else {
    //선택되어 있지 않으면 추가 (새로 선택)
    selectedIds.value.push(id)
  }
}
</script>

<template>
  <div class="container">
    <h2>테이블 그리드 연습(20251126)</h2>

    <div class="searchDiv">
      <p>조회 div 연습 중</p>
      <SearchBar />
      <!-- TODO : 영화앱에서 사용한 SearchBar는 여기선 사용할 수가 없다 ...
        1. 이름을 검색한다.
        2. Summary에 일부만 검색해도 일치되는 것들이 나온다.
        3. 누르면 디테일에서 상세정보를 본다.
      -->
    </div>

    <div class="two-tables">
      <div>
        <SummaryTableComponent
          title="Summary Table"
          :columns="summaryColumns"
          :rows="SummaryRows"
          :selectedIds="selectedIds"
          @row-clicked="toggleRowSelection"
        />
      </div>

      <div>
        <DetailedTableComponent
          title="Detailed Table"
          :columns="detailedColumns"
          :rows="selectedDetailedRows"
        />
      </div>
    </div>
  </div>
</template>

<style scoped>
* {
  box-sizing: border-box; /* 패딩과 보더가 너비/높이에 포함되도록 설정 */
}

/* 부모 컴포넌트의 레이아웃 (GridPractice2.vue) */
.container {
  padding: 20px;
  max-width: 1200px;
  margin: 0 auto;
  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
}

h2,
h3 {
  color: #333;
  margin-top: 0;
  margin-bottom: 15px;
}

/* 검색 영역 */
.searchDiv {
  background-color: #f7f9fc;
  border: 1px solid #e0e0e0;
  border-radius: 8px;
  padding: 20px;
  margin-bottom: 25px;
  text-align: center;
}

/* 두 테이블 배치 (SummaryTableComponent와 DetailedTableComponent를 감싸는 영역) */
.two-tables {
  display: flex;
  gap: 20px; /* 테이블 사이 간격 */
  margin-top: 20px;
}

.two-tables > div {
  flex: 1; /* 두 테이블이 공간을 균등하게 차지 */
  min-width: 400px;
}
</style>
