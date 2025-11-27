const data = [
  {
    id: 0,
    title: '노량',
    year: 2023,
    category: '액션, 드라마',
    textRed: 'color:red',
    like: 0,
    imgUrl: './assets/힘든상황을이겨내.jpg',
  },
  {
    id: 1,
    title: '부리부리 대마왕과 짱구의 모험',
    year: 2024,
    category: '드라마',
    textRed: 'color:blue',
    like: 0,
    imgUrl: './assets/뜨헉.png',
  },
  {
    id: 2,
    title: '키보드 익숙해지기가 쉽지 않다',
    year: 2025,
    category: '기술, 개발',
    textRed: 'color:green',
    like: 0,
    imgUrl: './assets/갈.jpg',
  },
]

export default data

/*
  export 하는 문법 2가지
  1) export { data } : 중괄호로 감싸면 데이터를 한번에 여러개를 내보낼 수 있음.
  2) 지금같은 경우는 데이터를 하나만 내보낼 예정이기 때문에  'export default'를 사용.
      > 이렇게 되면 받는 쪽에서 수정이 필요하다.
*/
