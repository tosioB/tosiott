let todo = [];

function createMemo(){ // 메모 생성
  const getLocalTodo = localStorage.getItem('todo');
  const todoParse = JSON.parse(getLocalTodo);
  todo = todoParse;

  if (getLocalTodo !== null) {
    const memo = todo.map((item) => {
      return(
        `
          <li class="list">
            <div class="memo">
              <span class="chk-box">
                <input type="checkbox" name="memo" id="${item.id}">
                <label for="${item.id}">
                  <span class="date">${item.date}</span>
                  <span class="title">${item.title}</span>
                  <span class="check-icon"></span>
                </label>
              </span>
              <span class="read-memo">${item.text}</span>
              <span class="btn-box">
                <button class="close-btn"></button>
                <div class="center-sort">
                  <button type="button" class="save-btn">save</button>
                  <button type="button" class="edit-btn">edit</button>
                  <button type="button" class="del-btn">delete</button>
                </div>
              </span>
            </div>
          </li>
        `
      )
    });

    const memoList = document.querySelector('.memo-list');
    memoList.innerHTML = memo.join('');
  } else {
    localStorage.setItem('todo', JSON.stringify([]));
  }
}

function regMemo(){ // 메모 등록
  const title = document.querySelector('.take-note .title');
  const text = document.querySelector('.take-note .text');
  const newMemoBtn = document.querySelector('.new-memo-btn');
  const takeNote = document.querySelector('.take-note');
  const blackBg = document.querySelector('.black-bg');

  const currentDate = new Date();
  const year = currentDate.getFullYear() % 100;
  const month = currentDate.getMonth() + 1;
  const day = currentDate.getDate();
  const hours = currentDate.getHours();
  const minutes = currentDate.getMinutes();
  const second = currentDate.getSeconds();

  const idValue = `${year}${month}${day}${hours}${minutes}${second}`;
  const dateValue = `${year}.${month}.${day}`

  const todoInfo = {
    id: idValue,
    date: dateValue,
    title: title.value,
    text: text.value
  }

  if (title.value === '') { // 타이틀 입력 X
    alert('타이틀을 입력하세요.');
  } else if (text.value === '') { // 텍스트 입력 X
    alert('텍스트를 입력하세요.');
  } else {
    todo.unshift(todoInfo);
    title.value = '';
    text.value = '';
    newMemoBtn.classList.remove('active');
    takeNote.classList.remove('active');
    blackBg.classList.remove('active');
  }

  localStorage.setItem('todo', JSON.stringify(todo));
  createMemo();
}

const addBtn = document.querySelector('.add-btn');
addBtn.addEventListener('click', () => {
  location.reload();
  regMemo();
});

function memoStyle(){ // 스타일
  const pastelColors = [ // // 파스텔톤 색상 배열
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
  
  function getRandomPastelColor() { // 랜덤 파스텔톤 RGB 색상을 생성하는 함수
    let randomIndex = Math.floor(Math.random() * pastelColors.length); // 0부터 배열 길이 - 1 사이의 랜덤 정수
    return pastelColors[randomIndex];
  }
  
  function getRandomRotation(min, max) { // 랜덤 각도 생성 함수
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }

  const takeNote = document.querySelector('.take-note');
  takeNote.style.backgroundColor = getRandomPastelColor();

  const memoListLi = document.querySelectorAll('.memo-list li');
  memoListLi.forEach((item) => {
    const memo = item.querySelector('.memo');

    // 컬러 함수 적용
    memo.style.backgroundColor = getRandomPastelColor(); 

    // 각도 함수 적용
    var randomRotation = getRandomRotation(-5, 5);
    memo.style.transform = 'rotate(' + randomRotation + 'deg)';
  });
}

function init(){
  createMemo();
  memoStyle();
}
init();

const newMemoBtn = document.querySelector('.new-memo-btn');
const takeNote = document.querySelector('.take-note');
const blackBg = document.querySelector('.black-bg');

newMemoBtn.addEventListener('click', () => { // 메모 작성 버튼 클릭
  newMemoBtn.classList.add('active');
  takeNote.classList.add('active');
  blackBg.classList.add('active');
});

const memoListLi = document.querySelectorAll('.memo-list li');
memoListLi.forEach((item) => {
  const memo = item.querySelector('.memo');

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