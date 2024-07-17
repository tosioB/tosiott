let result = document.querySelector('.result');
let buttons = document.querySelectorAll('.button');

let firstOperand; // 첫번째 반환값
let secondOperand; // 두번째 반환값
let operator; // 연산자

function calculate(a,b,c) {
  value = eval(a+b+c);
  firstOperand = value;
  result.textContent = value;
}

buttons.forEach((button) => {
  button.addEventListener('click', () => {
    let numberClasses = button.classList.contains('number');
    let operatorClasses = button.classList.contains('operator');
    let btnValue = button.textContent;

    if (numberClasses) { // number button click
      if (firstOperand) {
        if (result.textContent === firstOperand) {
          result.textContent = btnValue;
        } else {
          result.textContent += btnValue;
        }
      } else {
        if (result.textContent === '0') {
          result.textContent = btnValue;
        } else {
          result.textContent += btnValue;
        }
      }
    }

    if (operatorClasses) { // operator button click
      firstOperand = result.textContent;
      operator = btnValue;
    }

    switch(btnValue) {
      case '=':
        secondOperand = result.textContent;
        calculate (firstOperand, operator, secondOperand);
        break;
      case 'C':
        result.innerHTML = '0';
        firstOperand = false;
        secondOperand = false;
        break;
      case '.':
        if (!result.textContent.includes('.')) {
          result.textContent += btnValue;
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
//         result.textContent = secondOperand;
//       } else {
//         secondOperand = btnValue;
//         result.textContent = secondOperand;
//       }
//     } else {
//       if (firstOperand) {
//         firstOperand += btnValue;
//         result.textContent = firstOperand;
//       } else {
//         firstOperand = btnValue;
//         result.textContent = firstOperand;
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