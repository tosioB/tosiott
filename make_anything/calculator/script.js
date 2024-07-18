const display = document.querySelector('.display');
const buttons = document.querySelectorAll('.button');

let firstOperand = 0; // 첫번째 반환값
let secondOperand = 0; // 두번째 반환값
let operator = null; // 연산자
let func = null; // 팡션
let displayStatus = false; // 디스플레이 상태

buttons.forEach((btn) => {
  btn.addEventListener('click', () => {
    const numClass = btn.classList.contains('number');
    const operClass = btn.classList.contains('operator');
    const funcClass = btn.classList.contains('function');
    const btnVal = btn.textContent;
    
    if (numClass) {
      if (operator) {
        if (displayStatus) {
          secondOperand += btnVal;
          secondOperand = Number(secondOperand);
          display.textContent = secondOperand;
        } else {
          secondOperand = btnVal;
          secondOperand = Number(secondOperand);
          display.textContent = secondOperand;
          displayStatus = true;
        }
      } else {
        if (displayStatus) {
          firstOperand += btnVal;
          firstOperand = Number(firstOperand);
          display.textContent = firstOperand;
        } else {
          firstOperand = btnVal;
          firstOperand = Number(firstOperand);
          display.textContent = firstOperand;
          displayStatus = true;
        }
      }
    }

    if (operClass) {
        operator = btnVal;
        displayStatus = false;
        switch(operator) {
          case "+" :
            firstOperand = firstOperand + secondOperand;
            break;
          case "-" :
            firstOperand = firstOperand - secondOperand;
            break;
          case "*" :
            firstOperand = firstOperand * secondOperand;
            break;
          case "/" :
            firstOperand = firstOperand / secondOperand;
            break;
          case "%" :
            // firstOperand = firstOperand / secondOperand;
            console.log('아직 미구현')
            break;
        }
        display.textContent = firstOperand;
    }
    console.log(firstOperand,operator, secondOperand)
  });
});



// 1 + 2 + 3 - // 6이 나와야 하는데 0이 나옴
// "c", "=", ".", "%", "±" 기능 구현X

















































































// let display = document.querySelector('.display');
// let buttons = document.querySelectorAll('.button');

// let firstOperand; // 첫번째 반환값
// let secondOperand; // 두번째 반환값
// let operator; // 연산자

// function calculate(a,b,c) {
//   value = eval(a+b+c);
//   firstOperand = value;
//   display.textContent = value;
// }

// buttons.forEach((button) => {
//   button.addEventListener('click', () => {
//     let numberClasses = button.classList.contains('number');
//     let operatorClasses = button.classList.contains('operator');
//     let btnValue = button.textContent;

//     if (numberClasses) { // number button click
//       if (firstOperand) {
//         if (display.textContent === firstOperand) {
//           display.textContent = btnValue;
//         } else {
//           display.textContent += btnValue;
//         }
//       } else {
//         if (display.textContent === '0') {
//           display.textContent = btnValue;
//         } else {
//           display.textContent += btnValue;
//         }
//       }
//     }

//     if (operatorClasses) { // operator button click
//       firstOperand = display.textContent;
//       operator = btnValue;
//     }

//     switch(btnValue) {
//       case '=':
//         secondOperand = display.textContent;
//         calculate (firstOperand, operator, secondOperand);
//         break;
//       case 'C':
//         display.innerHTML = '0';
//         firstOperand = false;
//         secondOperand = false;
//         break;
//       case '.':
//         if (!display.textContent.includes('.')) {
//           display.textContent += btnValue;
//         }
//         break;
//     }
//   });
// });