// 모달 - 공통영역
let modal = document.querySelector('.modal');
let modalBtn = document.querySelectorAll('.modal-btn');
let modalWrap = document.querySelector('.modal .modal-wrap');
let modalBox = document.querySelector('.modal .modal-wrap .modal-box');
let modalCloseBtn = document.querySelector('.modal .modal-close-btn');
let blackScreen = document.querySelector('.modal .black-screen');

function modalOn(){ // 모달 공통 on
  modal.style.visibility = 'visible';
  modalWrap.style.display = 'block';
  blackScreen.style.display = 'block';
}

function modalOff(){ // 모달 공통 off
  modal.style.visibility = 'hidden';
  modalWrap.style.display = 'none';
  modalBox.style.display = 'none';
  blackScreen.style.display = 'none';
}

modalBtn.forEach(function(e){ // modal-btn 클래스가 들어간 버튼 클릭시 모달열기
  e.addEventListener('click', function(){
    modalOn();
  })
});

modalCloseBtn.addEventListener('click', modalOff); // 닫기버튼 클릭시 모달닫기
blackScreen.addEventListener('click', modalOff); // 검은배경 클릭시 모달닫기

// 모달 - 개별영역
let searchBtn = document.querySelector('.search-btn');
let modalSearch = document.querySelector('.modal-search');

searchBtn.addEventListener('click', function(){
  modalSearch.style.display = 'block';
})