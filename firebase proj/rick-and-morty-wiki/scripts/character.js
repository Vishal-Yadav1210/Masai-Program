document.addEventListener('DOMContentLoaded', () => {
    const urlParams = new URLSearchParams(window.location.search);
    const characterId = urlParams.get('id');
    const characterDetail = document.getElementById('character-detail');
    
    if (!characterId) {
        characterDetail.innerHTML = '<p>No character ID provided.</p>';
        return;
    }
    
    // Fetch character details
    async function fetchCharacter(id) {
        try {
            const response = await fetch(`https://rickandmortyapi.com/api/character/${id}`);
            const data = await response.json();
            return data;
        } catch (error) {
            console.error('Error fetching character:', error);
            return null;
        }
    }
    
    // Fetch episode details
    async function fetchEpisodes(episodeUrls) {
        try {
            const episodeIds = episodeUrls.map(url => url.split('/').pop()).join(',');
            const response = await fetch(`https://rickandmortyapi.com/api/episode/${episodeIds}`);
            let data = await response.json();
            
            // If only one episode, it's returned as object instead of array
            return Array.isArray(data) ? data : [data];
        } catch (error) {
            console.error('Error fetching episodes:', error);
            return [];
        }
    }
    
    // Display character details
    async function displayCharacter() {
        const character = await fetchCharacter(characterId);
        if (!character) {
            characterDetail.innerHTML = '<p>Failed to load character details.</p>';
            return;
        }
        
        const episodes = await fetchEpisodes(character.episode);
        
        characterDetail.innerHTML = `
            <div class="detail-header">
                <img src="${character.image}" alt="${character.name}">
                <div class="detail-info">
                    <h1>${character.name}</h1>
                    <p><span class="status status-${character.status.toLowerCase()}"></span> ${character.status} - ${character.species}</p>
                    ${character.type ? `<p>Type: ${character.type}</p>` : ''}
                    <p>Gender: ${character.gender}</p>
                    <p>Origin: ${character.origin.name}</p>
                    <p>Location: ${character.location.name}</p>
                </div>
            </div>
            <div class="episodes">
                <h2>Episode Appearances (${episodes.length})</h2>
                <div class="episode-list">
                    ${episodes.map(ep => 
                        `<div class="episode-item">
                            <strong>${ep.episode}</strong>: ${ep.name}
                        </div>`
                    ).join('')}
                </div>
            </div>
        `;
    }
    
    displayCharacter();
});