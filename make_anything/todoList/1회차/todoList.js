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

let list = document.querySelectorAll('.note-paper');

// 랜덤 파스텔톤 RGB 색상을 생성하는 함수
function getRandomPastelColor() {
  let randomIndex = Math.floor(Math.random() * pastelColors.length); // 0부터 배열 길이 - 1 사이의 랜덤 정수
  return pastelColors[randomIndex];
}

 // 랜덤 각도 생성 함수
function getRandomRotation(min, max) {
  // return Math.random() * (max - min) + min;
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

// 각 리스트 요소에 대해 랜덤 파스텔톤 색상 적용
list.forEach(function(item) {
  item.style.backgroundColor = getRandomPastelColor(); // getRandomPastelColor 함수는 아래에 정의됩니다

  var randomRotation = getRandomRotation(-5, 5);
  item.style.transform = 'rotate(' + randomRotation + 'deg)';
});

const writeMemo = document.querySelectorAll('.write-memo');
writeMemo.forEach((write) => {
  let writeValue = write.value;
  let readMemo = write.previousElementSibling;
  readMemo.innerHTML = writeValue
})