let display = document.querySelector('.display');
let buttons = document.querySelectorAll('.button');

let firstOperand; // 첫번째 반환값
let secondOperand; // 두번째 반환값
let operator; // 연산자

function calculate(a,b,c) {
  value = eval(a+b+c);
  firstOperand = value;
  display.textContent = value;
}

buttons.forEach((button) => {
  button.addEventListener('click', () => {
    let numberClasses = button.classList.contains('number');
    let operatorClasses = button.classList.contains('operator');
    let btnValue = button.textContent;

    if (numberClasses) { // number button click
      if (firstOperand) {
        if (display.textContent === firstOperand) {
          display.textContent = btnValue;
        } else {
          display.textContent += btnValue;
        }
      } else {
        if (display.textContent === '0') {
          display.textContent = btnValue;
        } else {
          display.textContent += btnValue;
        }
      }
    }

    if (operatorClasses) { // operator button click
      firstOperand = display.textContent;
      operator = btnValue;
    }

    switch(btnValue) {
      case '=':
        secondOperand = display.textContent;
        calculate (firstOperand, operator, secondOperand);
        break;
      case 'C':
        display.innerHTML = '0';
        firstOperand = false;
        secondOperand = false;
        break;
      case '.':
        if (!display.textContent.includes('.')) {
          display.textContent += btnValue;
        }
        break;
    }
  });
});

































// let numberBtns = document.querySelectorAll('.button.number');
// let operatorBtns = document.querySelectorAll('.button.operator');

// numberBtns.forEach((numBtn) => {
//   numBtn.addEventListener('click', () => {
//     let btnValue = numBtn.textContent;
    
//     if (operator) {
//       if (secondOperand) {
//         secondOperand += btnValue;
//         display.textContent = secondOperand;
//       } else {
//         secondOperand = btnValue;
//         display.textContent = secondOperand;
//       }
//     } else {
//       if (firstOperand) {
//         firstOperand += btnValue;
//         display.textContent = firstOperand;
//       } else {
//         firstOperand = btnValue;
//         display.textContent = firstOperand;
//       }
//     }
//     console.log(`첫번째 : ${firstOperand}`)
//     console.log(`두번째 : ${secondOperand}`)
//   });
// })

// operatorBtns.forEach((operBtn) => {
//   operBtn.addEventListener('click', () => {
//     let btnValue = operBtn.textContent;
//     operator = btnValue;
//     console.log(operator)
//   });
// });