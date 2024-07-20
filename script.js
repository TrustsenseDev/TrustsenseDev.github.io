document.addEventListener('DOMContentLoaded', () => {
    const appGrid = document.querySelector('.app-grid');
    const searchInput = document.getElementById('search-input');

    const apps = [
        {
            name: "Delta",
            status: "operational",
            image: "./exploits-imgs/delta.png",
            link: "https://example.com/delta"
        },
        {
            name: "Fluxus",
            status: "issues",
            image: "./exploits-imgs/fluxus.png",
            link: "https://example.com/fluxus"
        },
        {
            name: "Fluxus Lite",
            status: "issues",
            image: "./exploits-imgs/fluxus.png",
            link: "https://example.com/fluxus"
        },
        {
            name: "Codex",
            status: "offline",
            image: "/exploits-imgs/codex.png",
            link: "https://example.com/codex"
        },
        {
            name: "Arceus X Neo",
            status: "operational",
            image: "./exploits-imgs/arceus-x-neo.png",
            link: "https://example.com/arceus-x-neo"
        }
    ];

    function createAppCard(app) {
        const card = document.createElement('div');
        card.className = 'app-card';
        card.dataset.name = app.name;
        card.dataset.status = app.status;

        card.innerHTML = `
            <img src="${app.image}" alt="${app.name}" class="app-icon">
            <h2 class="app-name">${app.name}</h2>
            <div class="status ${app.status}">
                <span class="status-indicator"></span>
                <span class="status-text">${capitalizeFirstLetter(app.status)}</span>
            </div>
            <a href="${app.link}" class="download-btn" target="_blank" rel="noopener noreferrer">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="download-icon">
                    <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path>
                    <polyline points="7 10 12 15 17 10"></polyline>
                    <line x1="12" y1="15" x2="12" y2="3"></line>
                </svg>
                Download
            </a>
        `;

        return card;
    }

    function renderAppCards() {
        appGrid.innerHTML = '';
        apps.forEach(app => {
            const card = createAppCard(app);
            appGrid.appendChild(card);
        });
    }

    function capitalizeFirstLetter(string) {
        return string.charAt(0).toUpperCase() + string.slice(1);
    }

    function filterApps(searchTerm) {
        const filteredApps = apps.filter(app => 
            app.name.toLowerCase().includes(searchTerm.toLowerCase())
        );
        appGrid.innerHTML = '';
        filteredApps.forEach(app => {
            const card = createAppCard(app);
            appGrid.appendChild(card);
        });
    }

    searchInput.addEventListener('input', (e) => {
        filterApps(e.target.value);
    });

    renderAppCards();
});
