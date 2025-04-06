const API_URL = 'https://jsonplaceholder.typicode.com/todos';
const TODOS_PER_PAGE = 10;

let currentPage = 1;
let todos = [];

async function fetchTodos() {
  const res = await fetch(API_URL);
  todos = await res.json();
  renderTodos(currentPage);
  renderPagination();
}

function renderTodos(page) {
  const start = (page - 1) * TODOS_PER_PAGE;
  const end = start + TODOS_PER_PAGE;
  const todosToShow = todos.slice(start, end);

  const container = document.getElementById('todo-container');
  container.innerHTML = '';

  todosToShow.forEach(todo => {
    const div = document.createElement('div');
    div.className = 'todo';
    div.innerHTML = `<strong>${todo.title}</strong> - ${todo.completed ? '✅' : '❌'}`;
    container.appendChild(div);
  });
}

function renderPagination() {
  const totalPages = Math.ceil(todos.length / TODOS_PER_PAGE);
  const pagination = document.getElementById('pagination-buttons');
  pagination.innerHTML = '';

  for (let i = 1; i <= totalPages; i++) {
    const btn = document.createElement('button');
    btn.innerText = i;
    if (i === currentPage) btn.classList.add('active');
    btn.addEventListener('click', () => {
      currentPage = i;
      renderTodos(currentPage);
      renderPagination();
    });
    pagination.appendChild(btn);
  }
}

fetchTodos();
