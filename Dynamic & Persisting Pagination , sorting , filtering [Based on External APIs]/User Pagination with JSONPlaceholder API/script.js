const BASE_URL = 'https://jsonplaceholder.typicode.com/users';
const USERS_PER_PAGE = 6;
const TOTAL_USERS = 10;
const TOTAL_PAGES = Math.ceil(TOTAL_USERS / USERS_PER_PAGE);

let currentPage = 1;

async function fetchUsers(page) {
  try {
    const res = await fetch(`${BASE_URL}?_page=${page}&_limit=${USERS_PER_PAGE}`);
    if (!res.ok) throw new Error(`Error: ${res.status}`);

    const data = await res.json();
    displayUsers(data);
    document.getElementById('error-message').textContent = '';
  } catch (error) {
    document.getElementById('users').innerHTML = '';
    document.getElementById('error-message').textContent = error.message;
  }
}

function displayUsers(users) {
  const container = document.getElementById('users');
  container.innerHTML = '';

  users.forEach(user => {
    const div = document.createElement('div');
    div.className = 'user-card';
    div.innerHTML = `
      <h3>${user.name}</h3>
      <p><strong>Email:</strong> ${user.email}</p>
      <p><strong>City:</strong> ${user.address.city}</p>
      <p><strong>Company:</strong> ${user.company.name}</p>
    `;
    container.appendChild(div);
  });
}

function renderPagination() {
  const pagination = document.getElementById('pagination-buttons');
  pagination.innerHTML = '';

  for (let i = 1; i <= TOTAL_PAGES; i++) {
    const btn = document.createElement('button');
    btn.innerText = i;
    if (i === currentPage) btn.classList.add('active');

    btn.addEventListener('click', () => {
      currentPage = i;
      fetchUsers(currentPage);
      renderPagination();
    });

    pagination.appendChild(btn);
  }
}

fetchUsers(currentPage);
renderPagination();
