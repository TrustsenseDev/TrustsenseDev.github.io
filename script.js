document.addEventListener('DOMContentLoaded', () => {
    const appCards = document.querySelectorAll('.app-card');
    const searchInput = document.getElementById('search-input');

    function renderAppCards() {
        appCards.forEach(card => {
            const name = card.dataset.name;
            const status = card.dataset.status;
            const link = card.dataset.link;
            const image = card.dataset.image;

            card.innerHTML = `
                <img src="${image}" alt="${name}" class="app-icon">
                <h2 class="app-name">${name}</h2>
                <div class="status ${status}">
                    <span class="status-indicator"></span>
                    <span class="status-text">${capitalizeFirstLetter(status)}</span>
                </div>
                <a href="${link}" class="download-btn">
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="download-icon">
                        <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path>
                        <polyline points="7 10 12 15 17 10"></polyline>
                        <line x1="12" y1="15" x2="12" y2="3"></line>
                    </svg>
                    Download
                </a>
            `;
        });
    }

    function capitalizeFirstLetter(string) {
        return string.charAt(0).toUpperCase() + string.slice(1);
    }

    function filterApps(searchTerm) {
        appCards.forEach(card => {
            const name = card.dataset.name.toLowerCase();
            if (name.includes(searchTerm.toLowerCase())) {
                card.style.display = 'flex';
            } else {
                card.style.display = 'none';
            }
        });
    }

    searchInput.addEventListener('input', (e) => {
        filterApps(e.target.value);
    });

    renderAppCards();
});