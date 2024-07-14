const apiRandomDogs = "https://dog.ceo/api/breeds/image/random/3";
const apiAllBreeds = "https://dog.ceo/api/breeds/list/all";
const request1 = new XMLHttpRequest();
const request2 = new XMLHttpRequest();

const header = document.getElementById("header");
const main = document.getElementById("main");
const input = document.getElementById("filter-text");
const button = document.getElementById("filter-button");
const select = document.getElementById("filter-select");
const resetButton = document.getElementById("reset-button");
const more = document.getElementById("more");
const tothetop = document.getElementById("tothetop");

const currentDogs = [];

function displayDogs(item){
  const dogImgDiv = document.createElement('div');
  dogImgDiv.classList.add('img-box');
  dogImgDiv.innerHTML = `
    <img src=${item}>
  `
  main.appendChild(dogImgDiv);
}

window.addEventListener('load', () => {

  // 강아지 사진 뿌리기
  request1.open("get",  apiRandomDogs);
  request1.addEventListener('load', () => {
    const response = JSON.parse(request1.response);
    response.message.forEach((item) => {
      currentDogs.push(item);
      displayDogs(item);
    })
  })
  request1.send();

  // 셀렉트에 견종 정보 뿌리기
  request2.open("get", apiAllBreeds);
  request2.addEventListener('load', () => {
    const response = JSON.parse(request2.response);
    Object.keys(response.message).forEach((item) => {
      const option = document.createElement('option');
      option.textContent = item;
      option.value = item;
      select.appendChild(option);
    })
  })
  request2.send();
});

button.addEventListener('click', () => {
  main.innerHTML = '';
  let filteredDogs = currentDogs.filter((item) => {
    return item.indexOf(input.value) !== -1;
    return item.indexOf("") !== -1; // 0을 반환
  });

  input.value = '';

  filteredDogs.forEach((item) => {
    displayDogs(item);
  });
});

select.addEventListener('change', () => {
  main.innerHTML = '';
  let filteredDogs = currentDogs.filter((item) => {
    return item.indexOf(select.value) !== -1;
    // return item.indexOf("") !== -1; // 0을 반환
  });

  input.value = '';

  filteredDogs.forEach((item) => {
    displayDogs(item);
  });
});

resetButton.addEventListener('click', () => {
  main.innerHTML = '';
  request1.open('get', apiRandomDogs);
  request1.addEventListener('load', () => {
    const response = JSON.parse(request1.response);
    response.message.forEach((item) => {
      currentDogs.push(item);
    })
  })
  request1.send();
})

more.addEventListener('click', () => {
  request1.open('get', apiRandomDogs);
  request1.addEventListener('load', () => {
    const response = JSON.parse(request1.response);
    response.message.forEach((item) => {
      currentDogs.push(item);
    })
  })
  request1.send();
});

tothetop.addEventListener('click', () => {
  // scrollTo() - 주어진 위치로 스크롤을 이동한다.
  window.scrollTo({top : 0})
});