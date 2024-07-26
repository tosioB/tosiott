let memos = [];

function createMemo(){ // 메모 생성하기
  const memoBox = document.querySelector('.memo-box');
  memoBox.innerHTML = memos.map((memo) => {
    return (
      `
        <li class="memo-list">
          <div class="memo-paper">
            <span class="chk-box">
              <input type="checkbox" class="memo-check" name="memo-check" id="${memo.id}">
              <label for="${memo.id}">
                <span class="date">${memo.creatDate}</span>
                <span class="title">
                  ${memo.title}
                  <input type="text" class="edit-title" value="${memo.title}">
                </span>
                <span class="check-icon"></span>
              </label>
            </span>
            <span class="read-memo">${memo.text}</span>
            <textarea class="edit-memo">${memo.text}</textarea>
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
  }).join('');
  delMemo();
  editMemo();
}

function addMemo(){ // 메모 추가하기
  const title = document.querySelector('.title'); // 타이틀 입력
  const text = document.querySelector('.text'); // 텍스트 입력

  const currentDate = new Date(); // 현재 시간
  const numberDate = Number(currentDate) // 현재 시간 Number
  const year = currentDate.getFullYear(); // 년도
  const month = currentDate.getMonth() + 1; // 월
  const date = currentDate.getDate(); // 일

  let memoInfo = {
    id: numberDate,
    checked: false,
    title: title.value,
    text: text.value,
    creatDate: `${year}.${month}.${date}`
  }

  if (title.value === '') {
    alert('메모 타이틀을 입력하세요.');
  } else if (text.value === '') {
    alert('메모 텍스트를 입력하세요.');
  } else {
    memos.push(memoInfo); // memos 배열에 memoInfo 객체 넣기
    title.value = '';
    text.value = '';
  }

  createMemo();
  saveMemo();
}

function delMemo(){ // 메모 삭제하기
  const delBtn = document.querySelectorAll('.del-btn'); // 삭제 버튼
  delBtn.forEach((item) => {
    item.addEventListener('click', () => {
      const memoId = Number(item.closest('.memo-paper').querySelector('.memo-check').id); // 삭제 버튼에서 체크박스 id값 받아내기

      // memos 배열에서 memoId와 일치하는 메모 제거
      memos = memos.filter((memo) => {
        return memo.id !== memoId // 체크박스의 id값과 memos의 id값을 비교 (같은 값 삭제)
      });

      createMemo();
      saveMemo();
      editMemo();
    });
  });
}

function editMemo(){ // 메모 수정하기
  const memoList = document.querySelectorAll('.memo-list');
  memoList.forEach((item) => {
    const editTitle = item.querySelector('.edit-title'); // 타이틀 수정
    const editBtn = item.querySelector('.edit-btn'); // 삭제 버튼
    const saveBtn = item.querySelector('.save-btn'); // 저장 버튼
    const editMemo = item.querySelector('.edit-memo'); // 텍스트 수정

    editBtn.addEventListener('click', () => {
      item.classList.add('edit-form');
    });

    saveBtn.addEventListener('click', () => {
      item.classList.remove('edit-form');
      const memoId = Number(saveBtn.closest('.memo-paper').querySelector('.memo-check').id); // 삭제 버튼에서 체크박스 id값 받아내기
      memos.forEach((memo) => {
        if (memo.id === memoId) {
          memo.title = editTitle.value;
          memo.text = editMemo.value;
        }
      });
      
      createMemo();
      saveMemo();
    });
  });
}

function checkStatus(){
  const memoList = document.querySelectorAll('.memo-list');
  memoList.forEach((item) => {
    const memoCheck = item.querySelector('.memo-check');
    // const memoId = Number(memoCheck.closest('.memo-paper').querySelector('.memo-check').id); // 삭제 버튼에서 체크박스 id값 받아내기
    // if (memoCheck.checked) {
    //   // memos.forEach((memo) => {
    //   //   if (memo.id === memoId) {
    //   //     console.log(memo)
    //   //   }
    //   // });
    //   // console.log('aa')
    // } else {
    //   console.log('bb');
    // }
    console.log(memoCheck.checked)
    
    
    createMemo();
    saveMemo();
  })
}

function saveMemo(){ // 로컬 스토리지에 저장
  const stringifyMemo = JSON.stringify(memos);  // memos 배열에 있는 값을 문자열로 변환
  localStorage.setItem('myMemo', stringifyMemo); // 문자열로 변환된 memos를 myMemo이름으로 로컬 스토리지에 저장
}

function loadMemo(){ // 화면에 표시하기
  const localGetMemo = localStorage.getItem('myMemo'); // 로컬 스토리지에서 myMemo 받아오기
  if (localGetMemo !== null) {
    const parseMemo = JSON.parse(localGetMemo); // 로컬 스토리지에서 받아온 myMemo를 JavaScript에서 사용 할 수 있게 변환
    memos = parseMemo; // memos 배열안에 Javascript용으로 변환한 myMemo 넣기
    createMemo();
    delMemo();
    editMemo();
    checkStatus()
  }
}
loadMemo();

const addBtn = document.querySelector('.add-btn');
addBtn.addEventListener('click', () => { // 새로운 메모를 추가하는 클릭 이벤트
  addMemo();
})