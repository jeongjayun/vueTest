<template>
  <div class="searchDiv">
    <!--
      1. 이름을 검색한다.
      2. Summary에 일부만 검색해도 일치되는 것들이 나온다.
      3. 누르면 디테일에서 상세정보를 본다.
    -->
    <table>
      <tbody>
        <tr>
          <td>
            <label for="searchName">이름</label>
          </td>
          <td>
            <input type="search" id="searchName" name="searchName" placeholder="name" />
          </td>
        </tr>
        <tr>
          <td>
            <label for="searchId">아이디</label>
          </td>
          <td>
            <input type="search" id="searchId" name="searchId" placeholder="id" />
          </td>
        </tr>
      </tbody>
    </table>
  </div>

  <button>검색</button>
</template>

<script>
export default {
  name: 'SearchBarComponent',
  data() {
    return {
      searchNameText: '',
      searchIdText: '', // ID 검색용 변수 추가
    }
  },
  props: {
    data() {},
  },
}
</script>

<style scoped>
/* 1. 전체 검색 영역 (searchDiv) 스타일링 */
.searchDiv {
  max-width: 1200px;
  margin: 30px auto;
  padding: 20px;
  border: 1px solid #ddd;
  border-radius: 8px;
  background-color: #f9f9f9;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.05);
}

/* 2. 테이블 스타일링 */
.searchDiv table {
  width: 100%;
  border-collapse: collapse;
}

/* 3. 테이블 셀 (<td>) 스타일링 */
.searchDiv td {
  padding-top: 5px;
  padding-bottom: 5px;
  /* 수평 간격을 위해 좌우 패딩을 조정합니다. */
  padding-left: 10px;
  padding-right: 10px;
}

/* 첫 번째 검색 조건의 왼쪽 패딩 제거 */
.searchDiv tr td:nth-child(1) {
  padding-left: 0;
}
/* 두 번째 검색 조건의 오른쪽 입력 필드 패딩 제거 */
.searchDiv tr td:nth-child(4) {
  padding-right: 0;
}

/* 4. 레이블 셀 (1번째, 3번째 <td>) 스타일링 */
.searchDiv tr td:nth-child(odd) {
  /* 홀수 번째 <td> (레이블) 선택 */
  /* 전체 행(100%)을 2등분 (50%) 하고,
       그 50% 안에서 레이블이 차지할 너비를 지정합니다. */
  width: 100px; /* 고정 너비 지정 (예: 100px) */
  /* width: 20%; */ /* 혹은 비율 지정 */
  text-align: left;
  padding-right: 15px;
  white-space: nowrap;
  font-weight: bold;
  color: #333;
}

/* 5. 입력 필드 셀 (2번째, 4번째 <td>) 스타일링 */
.searchDiv tr td:nth-child(even) {
  /* 짝수 번째 <td> (입력 필드) 선택 */
  /* 레이블 영역을 제외한 나머지 공간을 입력 필드가 차지하도록 합니다. */
  width: auto; /* 남은 공간을 입력 필드가 차지 */
}

/* 6. 입력 필드 (Input) 스타일링 */
.searchDiv input[type='search'] {
  width: 100%; /* <td> 영역에 꽉 채워짐 */
  padding: 8px 10px;
  border: 1px solid #ccc;
  border-radius: 4px;
  box-sizing: border-box;
  font-size: 14px;
}
</style>
