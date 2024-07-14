let members = []; // 멤버를 담을 빈 배열 만들기

let userInfo = { // 멤버의 정보를 담을 빈 객체
  id: '',
  pw: '',
  rePw: '',
  nick: '',
  email: '',
  phone: ''
}

// 작성할 input 선언
const userId = document.querySelector('.user-id');
const userPw = document.querySelector('.user-pw');
const userRePw = document.querySelector('.user-re-pw');
const userNick = document.querySelector('.user-nick');
const userEmail = document.querySelector('.user-email');
const userPhone = document.querySelector('.user-phone');

// 유효성 검사 결과
let isTrueId = false;
let isTruePw = false;
let isTrueRePw = false;
let isTrueNick = false;
let isTrueEmail = false;
let isTruePhone = false;

// ------------------------------유효성검사 - id--------------------------------- //

const doubleCheckBtnId = document.querySelector('.double-check-btn-id');
const guideMsgId = document.querySelector('.guide-msg-id');

const IdCheck = () => {
  const userIdValue = userId.value.trim();
  const regexId = /^(?!^[0-9])[a-zA-Z0-9]{8,16}$/; // 영문+숫자 8~16자 정규식

  if (regexId.test(userIdValue)) {
    isTrueId = true;
    doubleCheckBtnId.disabled = false;
    guideMsgId.classList.add('active');
  } else {
    isTrueId = false;
    doubleCheckBtnId.disabled = true;
    guideMsgId.classList.remove('active');
  }

  userInfo.id = userIdValue;
}

function handleIdDoubleCheck(){
  const memberIdFinded = members.findIndex((joinMember) => {
    return joinMember.id === userId.value;
  })

  if (memberIdFinded !== -1) {
    isTrueId = false;
    doubleCheckBtnId.disabled = true;
    guideMsgId.classList.remove('active');
    userId.value = "";
    userId.focus();
    alert('중복된 아이디가 존재합니다.');
  } else {
    alert('사용 가능한 아이디입니다.')
  }
}
// --------------------------------------------------------------- //



// ------------------------------유효성검사 - pw--------------------------------- //
const PwCheck = () => {
  const userPwValue = userPw.value.trim();
  const guideMsgPw = document.querySelector('.guide-msg-pw');
  const regexPw = /(?=.*\d)(?=.*[a-zA-Z])(?=.*[\!\@\#\$\%\^\&\*]).*/; // 숫자+영문+특수문자(!,@,#,$,%,^,&,*) 정규식

  if (regexPw.test(userPwValue)) {
    isTruePw = true;
    guideMsgPw.disabled = false; 
    guideMsgPw.classList.add('active');
  } else {
    isTruePw = false;
    guideMsgPw.disabled = true;
    guideMsgPw.classList.remove('active');
  }

  userInfo.pw = userPwValue;
}
// --------------------------------------------------------------- //



// ------------------------------유효성검사 - re-pw--------------------------------- //
const RePwCheck = () => {
  const userRePwValue = userRePw.value.trim();
  const guideMsgRePw = document.querySelector('.guide-msg-re-pw');
  
  if (userInfo.pw === userRePwValue) {
    isTrueRePw = true;
    guideMsgRePw.textContent = '비밀번호가 맞습니다.'
    guideMsgRePw.classList.add('active');
  } else {
    isTrueRePw = false;
    guideMsgRePw.textContent = '비밀번호가 다릅니다.'
    guideMsgRePw.classList.remove('active');
  }

  userInfo.rePw = userRePwValue;
}
// --------------------------------------------------------------- //



// ------------------------------유효성검사 - re-pw--------------------------------- //
const doubleCheckBtnNick = document.querySelector('.double-check-btn-nick');
const guideMsgNick = document.querySelector('.guide-msg-nick');

const NickCheck = () => {
  const userNickValue = userNick.value.trim();
  const regexNick = /^[a-zA-Z0-9가-힣]{2,8}$/; // 영문 또는 한글 4~8자리

  if (regexNick.test(userNickValue)) {
    isTrueNick = true;
    doubleCheckBtnNick.disabled = false;
    guideMsgNick.classList.add('active');
  } else {
    isTrueNick = false;
    doubleCheckBtnNick.disabled = true;
    guideMsgNick.classList.remove('active');
  }

  userInfo.nick = userNickValue;
}

function handleNickDoubleCheck(){
  const memberNickFinded = members.findIndex((joinMember) => {
    return joinMember.nick === userNick.value;
  })

  if (memberNickFinded !== -1) {
    isTrueNick = false;
    doubleCheckBtnNick.disabled = true;
    guideMsgNick.classList.remove('active');
    userNick.value = "";
    userNick.focus();
    alert('중복된 닉네임이 존재합니다.');
  } else {
    alert('사용 가능한 닉네임입니다.')
  }
}
// --------------------------------------------------------------- //


// ------------------------------유효성검사 - email--------------------------------- //
const EmailCheck = () => {
  const userEmailValue = userEmail.value.trim();
  const guideMsgEmail = document.querySelector('.guide-msg-email');
  const regexEmail = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/; // 이메일 정규식
  

  if (regexEmail.test(userEmailValue)) {
    isTrueEmail = true;
    guideMsgEmail.classList.add('active');
    guideMsgEmail.textContent = '이메일 형식이 올바릅니다.'
  } else {
    isTrueEmail = false;
    guideMsgEmail.classList.remove('active');
    guideMsgEmail.textContent = '올바른 이메일 형식이 아닙니다.'
  }

  userInfo.email = userEmailValue;
}
// --------------------------------------------------------------- //


// ------------------------------유효성검사 - id--------------------------------- //
const PhoneCheck = () => {
  const userPhoneValue = userPhone.value.trim();
  const regexPhone = /^\d{3}\d{3,4}\d{4}$/;
  const cerfRequestBtn = document.querySelector('.cerf-request-phone');

  if (regexPhone.test(userPhoneValue)) {
    isTruePhone = true;
    cerfRequestBtn.disabled = false;
  } else {
    isTruePhone = false;
    cerfRequestBtn.disabled = true;
  }

  userInfo.phone = userPhoneValue;
}
// --------------------------------------------------------------- //

userId.addEventListener('input', () => {IdCheck()}); // id 입력 이벤트
userPw.addEventListener('input', () => {PwCheck()}); // pw 입력 이벤트
userRePw.addEventListener('input', () => {RePwCheck()}); // re-pw 입력 이벤트
userNick.addEventListener('input', () => {NickCheck()}); // nickname 입력 이벤트
userEmail.addEventListener('input', () => {EmailCheck()}); // email 입력 이벤트
userPhone.addEventListener('input', () => {PhoneCheck()}); // phone 입력 이벤트
doubleCheckBtnId.addEventListener('click', () => {handleIdDoubleCheck()}); // id 중복확인 이벤트
doubleCheckBtnNick.addEventListener('click', () => {handleNickDoubleCheck()}); // nickname 중복확인 이벤트

const form = document.querySelector('form');
form.addEventListener('submit', (e) => {
  // e.preventDefault();
  if (isTrueId && isTruePw && isTrueRePw && isTrueNick && isTrueEmail && isTruePhone) {
    members.push({ // 새로운 멤버 객체
      id: userInfo.id,
      pw: userInfo.pw,
      rePw: userInfo.rePw,
      nick: userInfo.nick,
      email: userInfo.email,
      phone: userInfo.phone
    });

    let membersJSON = JSON.stringify(members); // 새로운 멤버를 JSON으로 변환
    localStorage.setItem('members', membersJSON); // JSON으로 변환한 새로운 멤버를 로컬스토리지에 저장
  } else {
    alert('회원가입불가');
  }
  init();
});

const init = () => {
  let getMember = localStorage.getItem('members'); // localStorage에서 members 불러오기
  if (getMember !== null) {
      const parseMember = JSON.parse(getMember);
      members = parseMember;

      const memberList = document.querySelector('.member-list');
      memberList.innerHTML = members.map((item) => { // memberList에 유저 정보를 넣는 첫번째 방법
        return `<li>
          <p>${item.id}</p>
          <p>${item.nick}</p>
          <p>${item.email}</p>
          <p>${item.phone}</p>
          <button type="button" class="del-btn">강제탈퇴</button>
        </li>`
      }).join('');

      const delBtn = document.querySelectorAll('.del-btn');
      delBtn.forEach((joinMember, index) => {
        joinMember.addEventListener('click', () => {
          // 해당 멤버 삭제
          members.splice(index, 1);

          // localStorage 업데이트
          let membersJSON = JSON.stringify(members); // 새로운 멤버를 JSON으로 변환
          localStorage.setItem('members', membersJSON); // JSON으로 변환한 새로운 멤버를 로컬스토리지에 저장

          // 화면에 다시 업데이트
          memberList.innerHTML = members.map((item) => { // memberList에 유저 정보를 넣는 첫번째 방법
            return `<li>
              <p>${item.id}</p>
              <p>${item.nick}</p>
              <p>${item.email}</p>
              <p>${item.phone}</p>
              <button type="button" class="del-btn">강제탈퇴</button>
            </li>`
          }).join('');
          init();
        })
      });

      // members.forEach((item) => { // memberList에 유저 정보를 넣는 두번째 방법
      //   const memberLi = document.createElement('li');
      //   const memberId = document.createElement('p');
      //   const memberNick = document.createElement('p');
      //   const memberEmail = document.createElement('p');
      //   const memberPhone = document.createElement('p');
      //   const delBtn = document.createElement('button');

      //   memberId.textContent = `아이디 : ${item.id}`;
      //   memberNick.textContent = `닉네임 : ${item.nick}`;
      //   memberEmail.textContent = `이메일 : ${item.email}`;
      //   memberPhone.textContent = `휴대폰번호 : ${item.phone}`;
      //   delBtn.textContent = '강제탈퇴'

      //   delBtn.classList.add('del-btn');

      //   memberList.appendChild(memberLi);

      //   memberLi.appendChild(memberId);
      //   memberLi.appendChild(memberNick);
      //   memberLi.appendChild(memberEmail);
      //   memberLi.appendChild(memberPhone);
      //   memberLi.appendChild(delBtn);
      // })
    } else {
      localStorage.setItem('members', JSON.stringify([]));
    }
}
init();

// console.log(members);
