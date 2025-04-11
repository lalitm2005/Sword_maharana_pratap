// Monument data with enhanced properties
const monuments = [
    {
        id: 'mehrangarh',
        name: 'Mehrangarh Fort',
        description: 'One of the largest forts in India, towering 410 feet above Jodhpur with magnificent palaces and museums',
        image: 'images/mehrangarh.png',
        link: 'mehrangarh/index.html',
        category: 'Fort',
        region: 'jodhpur',
        popularity: 95,
        ancient: 9
    },
    {
        id: 'chittorgarh',
        name: 'Chittorgarh Fort',
        description: 'Largest fort in India with heroic tales of Rajput resistance, spread over 700 acres',
        image: 'images/chittorgarh.png',
        link: 'chittorgarh.html',
        category: 'Fort',
        region: 'mewar',
        popularity: 87,
        ancient: 10
    },
    {
        id: 'm-pratap-sword',
        name: 'Maharana Pratap\'s Sword',
        description: 'The legendary heavy sword of Maharana Pratap symbolizing valor and Rajput pride',
        image: 'images/m-pratap-sword.png',
        link: 'm-pratap-sword.html',
        category: 'Artifact',
        region: 'mewar',
        popularity: 89,
        ancient: 9
    },
    {
        id: 'amber',
        name: 'Amber Fort',
        description: 'Majestic fort-palace complex with Hindu and Mughal architecture, overlooking Maota Lake near Jaipur',
        image: 'images/amber.png',
        link: 'amber.html',
        category: 'Fort',
        region: 'jaipur',
        popularity: 93,
        ancient: 8
    },
    {
        id: 'hawa-mahal',
        name: 'Hawa Mahal',
        description: 'Iconic "Palace of Winds" with its unique honeycomb structure and 953 windows in Jaipur',
        image: 'images/hawa-mahal.png',
        link: 'hawa-mahal.html',
        category: 'Palace',
        region: 'jaipur',
        popularity: 90,
        ancient: 7
    },
    {
        id: 'city-palace',
        name: 'City Palace',
        description: 'Grand palace complex in Udaipur blending Rajasthani and Mughal architectural styles',
        image: 'images/city-palace.png',
        link: 'city-palace.html',
        category: 'Palace',
        region: 'udaipur',
        popularity: 88,
        ancient: 8
    },
    {
        id: 'ranakpur',
        name: 'Ranakpur Temple',
        description: 'Stunning Jain temple complex with 1444 intricately carved marble pillars, no two alike',
        image: 'images/ranakpur.png',
        link: 'ranakpur.html',
        category: 'Temple',
        region: 'udaipur',
        popularity: 82,
        ancient: 8
    },
    {
        id: 'jaisalmer',
        name: 'Jaisalmer Fort',
        description: 'The "Golden Fort", a living fort with shops, hotels and homes within its yellow sandstone walls',
        image: 'images/jaisalmer.png',
        link: 'jaisalmer.html',
        category: 'Fort',
        region: 'jaisalmer',
        popularity: 85,
        ancient: 9
    },
    {
        id: 'patwon',
        name: 'Patwon Ki Haveli',
        description: 'Cluster of five elaborate merchant mansions in Jaisalmer showcasing exquisite stone carvings',
        image: 'images/patwon.png',
        link: 'patwon.html',
        category: 'Haveli',
        region: 'jaisalmer',
        popularity: 80,
        ancient: 7
    }
];

const artAndCulture = [
    {
        id: 'ghoomar',
        name: 'Ghoomar Dance',
        description: 'Traditional Rajasthani folk dance performed by women, known for its graceful spinning movements',
        image: 'images/ghoomar.png',
        link: 'ghoomar.html',
        category: 'Dance',
        region: 'mewar',
        popularity: 95,
        cultural_significance: 9
    },
    {
        id: 'kalbelia',
        name: 'Kalbelia Dance',
        description: 'Snake charmer community dance with swirling movements resembling a serpent',
        image: 'images/kalbelia.png',
        link: 'kalbelia.html',
        category: 'Dance',
        region: 'jodhpur',
        popularity: 88,
        cultural_significance: 9
    },
    {
        id: 'miniature-painting',
        name: 'Rajasthani Miniature Painting',
        description: 'Intricate art form depicting royal courts, legends and love stories on small canvas',
        image: 'images/miniature.png',
        link: 'miniature.html',
        category: 'Art',
        region: 'udaipur',
        popularity: 85,
        cultural_significance: 10
    },
    {
        id: 'tie-dye',
        name: 'Bandhani (Tie-Dye)',
        description: 'Traditional textile art creating intricate patterns through tie-dye technique',
        image: 'images/bandhani.png',
        link: 'bandhani.html',
        category: 'Craft',
        region: 'jaipur',
        popularity: 90,
        cultural_significance: 8
    },
    {
        id: 'kathputli',
        name: 'Kathputli Puppetry',
        description: 'Traditional string puppet theatre telling folk tales and legends',
        image: 'images/kathputli.png',
        link: 'kathputli.html',
        category: 'Performance',
        region: 'jaipur',
        popularity: 87,
        cultural_significance: 9
    },
    {
        id: 'blue-pottery',
        name: 'Jaipur Blue Pottery',
        description: 'Distinctive ceramic art using Egyptian blue glaze technique',
        image: 'images/blue-pottery.png',
        link: 'blue-pottery.html',
        category: 'Craft',
        region: 'jaipur',
        popularity: 86,
        cultural_significance: 8
    },
    {
        id: 'maand',
        name: 'Maand Singing',
        description: 'Classical singing style of Rajasthan\'s royal courts',
        image: 'images/maand.png',
        link: 'maand.html',
        category: 'Music',
        region: 'jodhpur',
        popularity: 82,
        cultural_significance: 9
    },
    {
        id: 'theva',
        name: 'Theva Art',
        description: 'Unique jewelry craft combining gold work with glass',
        image: 'images/theva.png',
        link: 'theva.html',
        category: 'Craft',
        region: 'pratapgarh',
        popularity: 80,
        cultural_significance: 8
    },
    {
        id: 'phad',
        name: 'Phad Painting',
        description: 'Scroll paintings depicting folk tales and religious stories',
        image: 'images/phad.png',
        link: 'phad.html',
        category: 'Art',
        region: 'bhilwara',
        popularity: 83,
        cultural_significance: 9
    }
];

// Initialize AOS (Animate On Scroll)
document.addEventListener('DOMContentLoaded', function() {
    AOS.init({
        duration: 800,
        easing: 'ease',
        once: true
    });

    // Mobile Menu Toggle
    const mobileMenuToggle = document.getElementById('mobileMenuToggle');
    const navMenu = document.querySelector('.nav-menu');
    
    if (mobileMenuToggle) {
        mobileMenuToggle.addEventListener('click', function() {
            navMenu.classList.toggle('active');
            
            const icon = this.querySelector('i');
            if (icon.classList.contains('fa-bars')) {
                icon.classList.remove('fa-bars');
                icon.classList.add('fa-times');
            } else {
                icon.classList.remove('fa-times');
                icon.classList.add('fa-bars');
            }
        });
    }

    // Create monument cards
    createMonumentCards(monuments);

    // Create art and culture cards
    createArtCards(artAndCulture);

    // Setup event listeners for filtering and searching
    setupEventListeners();
    
    // Add parallax effect to hero section
    window.addEventListener('scroll', function() {
        const scrollPosition = window.pageYOffset;
        const hero = document.querySelector('.hero');
        if (hero) {
            hero.style.backgroundPositionY = scrollPosition * 0.5 + 'px';
        }
    });
});

// Function to create monument cards
function createMonumentCards(monumentsData) {
    const monumentsGrid = document.getElementById('instrumentsGrid'); // Keeping original ID for compatibility
    if (!monumentsGrid) return;
    
    monumentsGrid.innerHTML = '';
    
    if (monumentsData.length === 0) {
        monumentsGrid.innerHTML = '<div class="no-results">No monuments match your criteria. Try adjusting your filters.</div>';
        return;
    }
    
    monumentsData.forEach((monument, index) => {
        const card = document.createElement('div');
        card.className = 'instrument-card'; // Keeping original class for CSS compatibility
        card.id = monument.id;
        card.setAttribute('data-aos', 'fade-up');
        card.setAttribute('data-aos-delay', (index % 4) * 100);
        
        card.innerHTML = `
            <div class="instrument-img-container">
                <img src="${monument.image}" alt="${monument.name}" class="instrument-img" onerror="this.src='images/default-monument.png'">
                <span class="instrument-category">${monument.category}</span>
            </div>
            <div class="instrument-info">
                <h3>${monument.name} <i class="fas fa-landmark"></i></h3>
                <p>${monument.description}</p>
                <a href="${monument.link}" class="learn-more">Explore More <i class="fas fa-arrow-right"></i></a>
            </div>
        `;
        
        card.addEventListener('click', function(e) {
            if (!e.target.classList.contains('learn-more') && !e.target.parentElement.classList.contains('learn-more')) {
                window.location.href = monument.link;
            }
        });
        
        monumentsGrid.appendChild(card);
    });
}

// Function to create art and culture cards
function createArtCards(artData) {
    const artGrid = document.getElementById('instrumentsGrid');
    if (!artGrid) return;
    
    artGrid.innerHTML = '';
    
    if (artData.length === 0) {
        artGrid.innerHTML = '<div class="no-results">No art forms match your criteria. Try adjusting your filters.</div>';
        return;
    }
    
    artData.forEach((item, index) => {
        const card = document.createElement('div');
        card.className = 'instrument-card';
        card.id = item.id;
        card.setAttribute('data-aos', 'fade-up');
        card.setAttribute('data-aos-delay', (index % 4) * 100);
        
        card.innerHTML = `
            <div class="instrument-img-container">
                <img src="${item.image}" alt="${item.name}" class="instrument-img" onerror="this.src='images/default-art.png'">
                <span class="instrument-category">${item.category}</span>
            </div>
            <div class="instrument-info">
                <h3>${item.name} <i class="fas fa-palette"></i></h3>
                <p>${item.description}</p>
                <a href="${item.link}" class="learn-more">Discover More <i class="fas fa-arrow-right"></i></a>
            </div>
        `;
        
        card.addEventListener('click', function(e) {
            if (!e.target.classList.contains('learn-more') && !e.target.parentElement.classList.contains('learn-more')) {
                window.location.href = item.link;
            }
        });
        
        artGrid.appendChild(card);
    });
}

// Function to filter monuments
function filterMonuments() {
    const regionFilter = document.getElementById('regionFilter').value;
    const sortBy = document.getElementById('sortBy').value;
    const searchInput = document.getElementById('searchInput').value.toLowerCase();
    
    let filteredMonuments = monuments.filter(monument => {
        if (regionFilter !== 'all' && monument.region !== regionFilter) {
            return false;
        }
        
        if (searchInput && !monument.name.toLowerCase().includes(searchInput) && 
            !monument.description.toLowerCase().includes(searchInput) &&
            !monument.category.toLowerCase().includes(searchInput)) {
            return false;
        }
        
        return true;
    });
    
    filteredMonuments.sort((a, b) => {
        if (sortBy === 'name') {
            return a.name.localeCompare(b.name);
        } else if (sortBy === 'popularity') {
            return b.popularity - a.popularity;
        } else if (sortBy === 'ancient') {
            return b.ancient - a.ancient;
        }
        return 0;
    });
    
    createMonumentCards(filteredMonuments);
}

// Function to filter art and culture
function filterArtForms() {
    const regionFilter = document.getElementById('regionFilter').value;
    const sortBy = document.getElementById('sortBy').value;
    const searchInput = document.getElementById('searchInput').value.toLowerCase();
    
    let filteredArt = artAndCulture.filter(item => {
        if (regionFilter !== 'all' && item.region !== regionFilter) {
            return false;
        }
        
        if (searchInput && !item.name.toLowerCase().includes(searchInput) && 
            !item.description.toLowerCase().includes(searchInput) &&
            !item.category.toLowerCase().includes(searchInput)) {
            return false;
        }
        
        return true;
    });
    
    filteredArt.sort((a, b) => {
        if (sortBy === 'name') {
            return a.name.localeCompare(b.name);
        } else if (sortBy === 'popularity') {
            return b.popularity - a.popularity;
        } else if (sortBy === 'significance') {
            return b.cultural_significance - a.cultural_significance;
        }
        return 0;
    });
    
    createArtCards(filteredArt);
}

// Setup event listeners
function setupEventListeners() {
    const regionFilter = document.getElementById('regionFilter');
    const sortBy = document.getElementById('sortBy');
    const searchInput = document.getElementById('searchInput');
    const resetFilters = document.getElementById('resetFilters');
    
    if (regionFilter) regionFilter.addEventListener('change', filterMonuments);
    if (sortBy) sortBy.addEventListener('change', filterMonuments);
    if (searchInput) searchInput.addEventListener('input', filterMonuments);
    
    if (resetFilters) {
        resetFilters.addEventListener('click', function() {
            if (regionFilter) regionFilter.value = 'all';
            if (sortBy) sortBy.value = 'name';
            if (searchInput) searchInput.value = '';
            filterMonuments();
        });
    }
    
    const categories = document.querySelectorAll('.category');
    categories.forEach(category => {
        category.addEventListener('click', function() {
            const categoryName = this.querySelector('h3').textContent;
            if (searchInput) {
                searchInput.value = categoryName;
                filterMonuments();
                
                const monumentsSection = document.getElementById('instrumentsGrid');
                if (monumentsSection) {
                    monumentsSection.scrollIntoView({ behavior: 'smooth' });
                }
            }
        });
    });
    
    const newsletterForm = document.querySelector('.newsletter-form');
    if (newsletterForm) {
        newsletterForm.addEventListener('submit', function(e) {
            e.preventDefault();
            const emailInput = this.querySelector('input[type="email"]');
            if (emailInput && emailInput.value) {
                alert('Thank you for subscribing to our newsletter!');
                emailInput.value = '';
            }
        });
    }
    
    const loadMoreBtn = document.getElementById('loadMore');
    if (loadMoreBtn) {
        loadMoreBtn.addEventListener('click', function() {
            alert('In a real application, this would load more monuments from the database.');
        });
    }
}

// Smooth scrolling
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth'
            });
        }
    });
});

// Page transition
window.addEventListener('beforeunload', function() {
    document.body.classList.add('page-transition');
});