
window.addEventListener('load', function () {
  const form = document.querySelector('#add-todo-form');
  const input = document.querySelector('#input-todo');
  const btn = document.querySelector('button');
  const toDoList = document.querySelector('.todo-list');

  form.addEventListener('submit', function (e) {
      e.preventDefault();
  });

  btn.addEventListener('click', function (e) {
      if (input.value === '') {
          alert('You should enter task');
      } else {
          let toDo = document.createElement('div');
          toDo.classList.add('todo-item');
          toDoList.appendChild(toDo);
          toDo.innerHTML = input.value;
  
          const toDoAdd = input.value = '';

          toDo.addEventListener('click', () => {
              toDo.remove()
          });
      }
  });
});