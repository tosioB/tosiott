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
const userPhoneCerf = document.querySelector('.user-phone-cerf');

// 유효성 검사 결과
let isTrueId = false;
let isTruePw = false;
let isTrueRePw = false;
let isTrueNick = false;
let isTrueEmail = false;
let isTruePhone = false;
let isTruePhoneCerf = false;
let isTrueTermsService = false;
let isTrueTermsPrivacy = false;

// ------------------------------------------------------------------------------------------------ //
const doubleCheckBtnId = document.querySelector('.double-check-btn-id');
const guideMsgId = document.querySelector('.guide-msg-id');

const idCheck = () => { // 아이디 유효성 검사
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
function handleIdDoubleCheck(){ // 아이디 중복확인
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

// ------------------------------------------------------------------------------------------------ //
const pwCheck = () => { // 비밀번호 유효성 검사
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


// ------------------------------------------------------------------------------------------------ //
const rePwCheck = () => { // 비밀번호 확인
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


// ------------------------------------------------------------------------------------------------ //
const doubleCheckBtnNick = document.querySelector('.double-check-btn-nick');
const guideMsgNick = document.querySelector('.guide-msg-nick');

const nickCheck = () => { // 닉네임 유효성 검사
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
function handleNickDoubleCheck(){ // 닉네임 중복확인
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


// ------------------------------------------------------------------------------------------------ //
const emailCheck = () => { // 이메일 유효성 검사
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


// ------------------------------------------------------------------------------------------------ //
const cerfRequestBtn = document.querySelector('.cerf-request-phone');
const cerfCheckNumber = document.querySelector('.cerf-check-number');
const cerfCount = document.querySelector('.cerf-count');

const phoneCheck = () => { // 휴대폰번호 유효성 검사
  const userPhoneValue = userPhone.value.trim();
  const regexPhone = /^\d{3}\d{3,4}\d{4}$/;

  if (regexPhone.test(userPhoneValue)) {
    isTruePhone = true;
    cerfRequestBtn.disabled = false;
  } else {
    isTruePhone = false;
    cerfRequestBtn.disabled = true;
    userPhoneCerf.disabled = true;
    cerfCount.style.display = 'none';
  }

  userInfo.phone = userPhoneValue;
}
const phoneCerfCheck = () => { // 인증번호 6자리 제한
  let userPhoneCerfValue = userPhoneCerf.value.trim();

  if (userPhoneCerfValue.length > 6) {
    userPhoneCerf.value = userPhoneCerfValue.slice(0, 6);
    alert('인증번호는 6자리까지 입력 가능합니다.');
  }
}

// 인증번호 요청
let startTimer = 180;
let minutes = Math.floor(startTimer / 60);
let seconds = startTimer % 60;
let timer;
const cerfCountTimer = () => { // 타이머 함수
  // 현재 시간을 "mm:ss" 형식으로 표시
  let displayMinutes = minutes < 10 ? `0${minutes}` : minutes;
  let displaySeconds = seconds < 10 ? `0${seconds}` : seconds;
  // console.log(`${displayMinutes}:${displaySeconds}`)
  cerfCount.textContent = `${displayMinutes}:${displaySeconds}`

  startTimer--; // 시간을 1초씩 감소

  // 분과 초를 다시 계산
  minutes = Math.floor(startTimer / 60);
  seconds = startTimer % 60;

  // 시간이 0이 되면 종료
  if(startTimer < 0) {
    clearInterval(timer);
    userPhoneCerf.disabled = true;
    cerfCount.style.display = 'none';
    startTimer = 180;
    alert('인증번호 요청을 다시 해주세요.')
    minutes = Math.floor(startTimer / 60);
    seconds = startTimer % 60;
  }
}

// 인증번호 요청시 인증번호 입력창/확인버튼 활성화 & 타이머 동작
cerfRequestBtn.addEventListener('click', () => {
  isTruePhoneCerf = true;
  userPhoneCerf.disabled = false;
  cerfCheckNumber.disabled = false;
  cerfCount.style.display = 'block';
  userPhoneCerf.focus();
  timer = setInterval(cerfCountTimer, 1000);
}, 1000);


// ------------------------------------------------------------------------------------------------ //
const allCheck = document.querySelector('#all-check'); // 전체 동의 체크박스
const termsService = document.querySelector('#terms-service');
const termsPrivacy = document.querySelector('#terms-privacy');
const termsCheck = document.querySelectorAll('.terms-check'); // 약관 동의 체크박스들

termsCheck.forEach((checkbox) => { // 개별 체크박스 이벤트
  checkbox.addEventListener('change', () => {updateAllCheck()});
});

function updateAllCheck(){ // 개별 체크박스중 단 한개라도 unchecked가 되면 전체 체크박스는 unchecked가 됨
  // Array.from() - 유사 배열 객체나 반복 가능한 객체를 배열로 반환
  const termsCheckArray = Array.from(termsCheck);

  // every() - 배열의 모든 요소가 주어진 조건을 만족할 때 true를 반환 / 조건이 하나라도 만족하지 않을 때 false를 반환
  const termsCheckEvery = termsCheckArray.every((item) => {
    return item.checked; // termsCheck가 전부 checked인지 여부 묻기
  });

  allCheck.checked = termsCheckEvery; // termsCheckEvery가 true를 반환할 경우 allcheck도 true로 변경 
}

allCheck.addEventListener('change', () => {
  let isAllCheck = allCheck.checked;
    termsCheck.forEach((checkbox) => {
      checkbox.checked = isAllCheck;
    });
});

termsService.addEventListener('change', (e) => { // [필수]이용약관
  isTrueTermsService = e.target.checked
});

termsPrivacy.addEventListener('change', (e) => { // [필수]개인정보 수집 및 이용
  isTrueTermsPrivacy = e.target.checked
});


// ------------------------------------------------------------------------------------------------ //
userId.addEventListener('input', () => {idCheck()}); // id 입력 이벤트
userPw.addEventListener('input', () => {pwCheck()}); // pw 입력 이벤트
userRePw.addEventListener('input', () => {rePwCheck()}); // re-pw 입력 이벤트
userNick.addEventListener('input', () => {nickCheck()}); // nickname 입력 이벤트
userEmail.addEventListener('input', () => {emailCheck()}); // email 입력 이벤트
userPhone.addEventListener('input', () => {phoneCheck()}); // phone 입력 이벤트
userPhoneCerf.addEventListener('input', () => {phoneCerfCheck()}); // phone 인증번호 입력 이벤트

doubleCheckBtnId.addEventListener('click', () => {handleIdDoubleCheck()}); // id 중복확인 이벤트
doubleCheckBtnNick.addEventListener('click', () => {handleNickDoubleCheck()}); // nickname 중복확인 이벤트

const form = document.querySelector('form');
form.addEventListener('submit', (e) => {
  e.preventDefault();
  if (isTrueId && isTruePw && isTrueRePw && isTrueNick && isTrueEmail && isTruePhone && isTruePhoneCerf && isTrueTermsService && isTrueTermsPrivacy) {
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
    // console.log(`isTrueId(아이디) : ${isTrueId}`);
    // console.log(`isTruePw(비밀번호) : ${isTruePw}`);
    // console.log(`isTrueRePw(비밀번호 확인) : ${isTrueRePw}`);
    // console.log(`isTrueNick(닉네임) : ${isTrueNick}`);
    // console.log(`isTrueEmail(이메일) : ${isTrueEmail}`);
    // console.log(`isTruePhone(휴대폰번호) : ${isTruePhone}`);
    // console.log(`isTruePhoneCerf(인증번호) : ${isTruePhoneCerf}`);
    // console.log(`isTrueTermsService)(이용약관동의) : ${isTrueTermsService}`);
    // console.log(`isTrueTermsPrivacy)(개인정보 수집 동의) : ${isTrueTermsPrivacy}`);
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
