const todoList = document.getElementById('todo-list');
const todoForm = document.getElementById('todo-form');
let todoArr = [];

// 로컬 저장소에 저장하기
function saveTodos(){
  const todoString = JSON.stringify(todoArr)
  localStorage.setItem('myTodos', todoString);
}

// // 로컬 저장소에서 가져오기
function loadTodos(){
  const myTodos = localStorage.getItem('myTodos');
  if(myTodos !== null) {
    todoArr = JSON.parse(myTodos);;
    displayTodos();
  }
}
loadTodos();

// 할일 삭제하기
function handleTodoDelBtnClick(clickedId){
  todoArr = todoArr.filter((aTodo) => {
    return aTodo.todoId !== clickedId
  })
  displayTodos();
  saveTodos();
}

// 할일 수정하기
function handleTodoItemClick(clickedId){
  todoArr = todoArr.map((aTodo) => {
    if(aTodo.todoId === clickedId) {
      return {
        ...aTodo, todoDone: !aTodo.todoDone
      }
    } else {
      return aTodo
    }
  })
  displayTodos();
  saveTodos();
}

// 할일 보여주기
function displayTodos(){
  todoList.innerHTML = '';
  todoArr.forEach((aTodo) => {
    const todoItem = document.createElement('li');
    const todoDelBtn = document.createElement('span');

    todoItem.textContent = aTodo.todoText;
    todoDelBtn.textContent = 'x';

    todoItem.title = '클릭하면 완료';
    todoDelBtn.title = '클릭하면 삭제';

    if(aTodo.todoDone){
      todoItem.classList.add('done');
    } else {
      todoItem.classList.add('yet');
    }

    todoList.appendChild(todoItem);
    todoItem.appendChild(todoDelBtn);

    todoItem.addEventListener('click', () => {
      handleTodoItemClick(aTodo.todoId);
    })

    todoDelBtn.addEventListener('click', () => {
      handleTodoDelBtnClick(aTodo.todoId);
    })
  });
  todoForm.focus();
}

// 할일 추가하기
todoForm.addEventListener('submit', (e) => {
  e.preventDefault();

  const toBeAdded = {
    todoText: todoForm.todo.value,
    todoId: new Date().getTime(),
    todoDone: false
  }
  
  todoArr.push(toBeAdded);
  todoForm.todo.value = '';
  displayTodos();
  saveTodos();
})