document.addEventListener('DOMContentLoaded', () => {
    let currentPage = 1;
    const characterGallery = document.getElementById('character-gallery');
    const prevBtn = document.getElementById('prev-btn');
    const nextBtn = document.getElementById('next-btn');
    const pageInfo = document.getElementById('page-info');

    async function fetchCharacters(page = 1) {
        try {
            const response = await fetch(`https://rickandmortyapi.com/api/character?page=${page}`);
            const data = await response.json();
            return data;
        } catch (error) {
            console.error('Error fetching characters:', error);
            return null;
        }
    }

    function displayCharacters(characters) {
        characterGallery.innerHTML = '';
        
        characters.forEach(character => {
            const characterCard = document.createElement('div');
            characterCard.className = 'character-card';
            characterCard.innerHTML = `
                <img src="${character.image}" alt="${character.name}">
                <div class="character-info">
                    <h2>${character.name}</h2>
                    <p><span class="status status-${character.status.toLowerCase()}"></span> ${character.status} - ${character.species}</p>
                </div>
            `;
            
            characterCard.addEventListener('click', () => {
                window.open(`character.html?id=${character.id}`, '_blank');
            });
            
            characterGallery.appendChild(characterCard);
        });
    }

    function updatePagination(info) {
        pageInfo.textContent = `Page ${currentPage} of ${info.pages}`;
        prevBtn.disabled = info.prev === null;
        nextBtn.disabled = info.next === null;
    }
    

    async function loadPage(page) {
        const data = await fetchCharacters(page);
        if (data) {
            displayCharacters(data.results);
            updatePagination(data.info);
        }
    }
    
 
    prevBtn.addEventListener('click', () => {
        if (currentPage > 1) {
            currentPage--;
            loadPage(currentPage);
        }
    });
    
    nextBtn.addEventListener('click', () => {
        currentPage++;
        loadPage(currentPage);
    });
    

    loadPage(currentPage);
    

    const randomBtn = document.createElement('button');
    randomBtn.textContent = 'Random Character';
    randomBtn.id = 'random-btn';
    randomBtn.addEventListener('click', async () => {
        const data = await fetchCharacters();
        if (data) {
            const randomId = Math.floor(Math.random() * data.info.count) + 1;
            window.open(`character.html?id=${randomId}`, '_blank');
        }
    });
    
    document.querySelector('header').appendChild(randomBtn);
});