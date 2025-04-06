const gallery = document.getElementById('gallery');
const loader = document.getElementById('loader');

let page = 1;
const limit = 10;
let isLoading = false;

async function fetchImages(page, limit) {
  try {
    loader.style.display = 'block';
    const res = await fetch(`https://jsonplaceholder.typicode.com/photos?_page=${page}&_limit=${limit}`);
    if (!res.ok) throw new Error('Error fetching data');
    const data = await res.json();
    return data;
  } catch (err) {
    console.error(err);
    loader.innerText = 'Error loading images';
  } finally {
    loader.style.display = 'none';
  }
}

function renderImages(images) {
  images.forEach(photo => {
    const div = document.createElement('div');
    div.className = 'photo-card';
    div.innerHTML = `
      <img src="${photo.thumbnailUrl}" alt="${photo.title}" />
      <p>${photo.title}</p>
    `;
    gallery.appendChild(div);
  });
}

async function loadMoreImages() {
  if (isLoading) return;
  isLoading = true;
  const images = await fetchImages(page, limit);
  renderImages(images);
  page++;
  isLoading = false;
}

function handleScroll() {
  const { scrollTop, scrollHeight, clientHeight } = document.documentElement;

  if (scrollTop + clientHeight >= scrollHeight - 5) {
    loadMoreImages();
  }
}

// Initial load
loadMoreImages();

// Infinite scroll
window.addEventListener('scroll', handleScroll);
