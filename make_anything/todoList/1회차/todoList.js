// 파스텔톤 색상 배열
const pastelColors = [
  'rgb(255, 182, 193)',  // 연한 분홍색
  'rgb(204, 255, 144)',  // 연한 연두색
  'rgb(173, 216, 230)',  // 연한 파랑색
  'rgb(230, 230, 250)',  // 연한 라벤더색
  'rgb(221, 160, 221)',  // 연한 라일락색
  'rgb(170, 255, 195)',  // 연한 민트색
  'rgb(255, 228, 225)',  // 연한 로즈색
  'rgb(255, 218, 185)',  // 연한 오렌지색
  'rgb(255, 250, 205)',  // 연한 라임색
  'rgb(255, 240, 245)',  // 연한 블러쉬핑크색
  'rgb(152, 251, 152)'   // 연한 연두색
];

// 랜덤 파스텔톤 RGB 색상을 생성하는 함수
function getRandomPastelColor() {
  let randomIndex = Math.floor(Math.random() * pastelColors.length); // 0부터 배열 길이 - 1 사이의 랜덤 정수
  return pastelColors[randomIndex];
}

 // 랜덤 각도 생성 함수
function getRandomRotation(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

const takeNote = document.querySelector('.take-note');
const newMemoBtn = document.querySelector('.new-memo-btn');
const blackBg = document.querySelector('.black-bg');

takeNote.style.backgroundColor = getRandomPastelColor();

newMemoBtn.addEventListener('click', () => { // 메모 작성 버튼 클릭
  newMemoBtn.classList.add('active');
  takeNote.classList.add('active');
  blackBg.classList.add('active');
});

const memoList = document.querySelectorAll('.memo-list li');
memoList.forEach((item) => {
  const memo = item.querySelector('.memo');

  memo.style.backgroundColor = getRandomPastelColor(); // 컬러 함수 적용

  // 각도 함수 적용
  var randomRotation = getRandomRotation(-5, 5);
  memo.style.transform = 'rotate(' + randomRotation + 'deg)';

  const readMemo = item.querySelector('.read-memo');
  const closeBtn = item.querySelector('.close-btn');
  
  readMemo.addEventListener('click', () => { // 메모 내용 클릭
    blackBg.classList.add('active');
    memo.classList.add('active');
    closeBtn.classList.add('active');
  });

  closeBtn.addEventListener('click', () => { // 메모 닫기 버튼 클릭
    blackBg.classList.remove('active');
    memo.classList.remove('active');
    closeBtn.classList.remove('active');
  });

  blackBg.addEventListener('click', () => { // dim 클릭
    newMemoBtn.classList.remove('active');
    takeNote.classList.remove('active');
    blackBg.classList.remove('active');
    memo.classList.remove('active');
    closeBtn.classList.remove('active');
  });
});