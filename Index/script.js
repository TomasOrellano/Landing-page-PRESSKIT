// YouTube Videos Configuration
const youtubeVideos = [
    'https://youtu.be/xGXUAsNApw0?si=z6Rn2atJNlQrW0eh',
    'https://youtu.be/VzmmBaJIODg?si=mn6lufJBUnj1Uqaa'
];

// Google Drive Folder ID
const driveFolderId = '1ze3iUKaPEuSPlHi4AiBx2gbUgeuRO_AK';

// Initialize when DOM is loaded

document.addEventListener('DOMContentLoaded', function() {
    // Initialize AOS
    AOS.init({
        duration: 1000,
        once: true,
        offset: 100
    });
    
    loadYouTubeVideos();
    loadGoogleDriveImages();
    setupContactForm();
    loadBeatportReleases();
    setupSmoothScrolling();
    setupScrollEffects();
});

// Beatport Releases Configuration
const beatportReleases = [
    {
        url: 'https://www.beatport.com/es/release/natural-strength/3505230',
        title: 'Natural Strength',
        type: 'EP',
        label: 'The Purr',
        image: '../Imagen-video/ThePurrEp.webp'
    },
    {
        url: 'https://www.beatport.com/es/release/heal-the-soul/3971116',
        title: 'Heal The Soul',
        type: 'EP',
        label: 'Nature Rec.',
        image: '../Imagen-video/NaturalRecEp.webp'
    },
    {
        url: 'https://www.beatport.com/es/release/su-aroma-grito/3995042',
        title: 'Su Aroma Grito',
        type: 'EP',
        label: 'Nordic Voyage Recordings',
        image: '../Imagen-video/NordicVoyageRecordingsEP.webp'
    },
    {
        url: 'https://www.beatport.com/es/release/way-to-heaven/3456920',
        title: 'Way To Heaven',
        type: 'EP',
        label: 'RYNTH',
        image: '../Imagen-video/RYNTHEP.webp'
    },
    {
        url: 'https://www.beatport.com/es/track/sona/16782352',
        title: 'Sona',
        type: 'Single',
        label: 'Songuara',
        image: '../Imagen-video/SonguaraEP.webp'
    },
    {
        url: 'https://www.beatport.com/es/artist/tommy-orellano/631353/releases',
        title: 'Remix & EPs',
        type: 'More Tracks',
        label: 'All labels',
        image: '../Imagen-video/LogoBeatport.png'
    },
];

// Load Beatport Releases
function loadBeatportReleases() {
    console.log('Loading Beatport releases...');
    const releasesGrid = document.getElementById('releasesGrid');
    
    if (!releasesGrid) {
        console.error('ERROR: releasesGrid not found!');
        return;
    }
    
    console.log('Found releasesGrid:', releasesGrid);
    console.log('Beatport releases data:', beatportReleases);
    
    releasesGrid.innerHTML = '<div class="loading"><div class="spinner"></div></div>';
    
    setTimeout(() => {
        console.log('Creating release cards...');
        releasesGrid.innerHTML = '';
        
        beatportReleases.forEach((release, index) => {
            console.log(`Creating card ${index}:`, release.title);
            try {
                const releaseCard = createReleaseCard(release, index);
                console.log('Card created:', releaseCard);
                releasesGrid.appendChild(releaseCard);
                console.log('Card appended to DOM');
            } catch (error) {
                console.error('Error creating card:', error);
            }
        });
        
        console.log('Total cards in grid:', releasesGrid.children.length);
        AOS.refresh();
    }, 1000);
}

// Create Release Card
function createReleaseCard(release, index) {
    const card = document.createElement('div');
    card.className = 'release-card';
    card.setAttribute('data-aos', 'fade-up');
    card.setAttribute('data-aos-delay', (index * 150).toString());

    const imageUrl = release.image || `https://via.placeholder.com/300x300/1a1a2e/00d4ff?text=${encodeURIComponent(release.title)}`;

    card.innerHTML = `
        <div class="release-cover" onclick="openBeatportLink('${release.url}')">
            <img src="${imageUrl}" alt="${release.title}">
            <div class="release-overlay">
                <div class="play-overlay">
                    <i class="fas fa-headphones"></i>
                    <span>Escuchar en Beatport</span>
                </div>
            </div>
        </div>
        <div class="release-info">
            <h3>${release.title}</h3>
            <p class="release-type">${release.type}</p>
            <p class="release-label">${release.label}</p>
            <a href="${release.url}" target="_blank" class="btn btn-small">
                <i class="fas fa-external-link-alt"></i> Beatport
            </a>
        </div>
    `;
    
    return card;
}

// Open Beatport Link
function openBeatportLink(url) {
    window.open(url, '_blank');
}

// Gallery Images Configuration
const galleryImages = [
    '../Imagen-video/FONDO.jpg',
    '../Imagen-video/Galeria3.jpg',
    '../Imagen-video/Galeria5.jpeg',
    '../Imagen-video/Galeria7.jpeg',
];

function loadGoogleDriveImages() {
    const galleryGrid = document.getElementById('galleryGrid');
    const driveButton = document.getElementById('galleryDriveButton');
    const driveUrl = `https://drive.google.com/drive/folders/1ze3iUKaPEuSPlHi4AiBx2gbUgeuRO_AK?usp=drive_link`;

    if (!galleryGrid) {
        console.error('galleryGrid no encontrado');
        return;
    }

    if (driveButton) {
        driveButton.href = driveUrl;
    }

    galleryGrid.innerHTML = '<div class="loading"><div class="spinner"></div></div>';

    setTimeout(() => {
        galleryGrid.innerHTML = '';
        galleryImages.forEach((imageUrl, index) => {
            const item = document.createElement('a');
            item.className = 'gallery-item';
            item.href = imageUrl;
            item.target = '_blank';
            item.setAttribute('data-aos', 'zoom-in');
            item.setAttribute('data-aos-delay', (index * 100).toString());
            item.innerHTML = `<img src="${imageUrl}" alt="Galería ${index + 1}">`;
            galleryGrid.appendChild(item);
        });
        AOS.refresh();
    }, 400);
}

// Load YouTube Videos
function loadYouTubeVideos() {
    const videosGrid = document.getElementById('videosGrid');
    videosGrid.innerHTML = '<div class="loading"><div class="spinner"></div></div>';
    
    youtubeVideos.forEach((videoUrl, index) => {
        const videoId = extractYouTubeId(videoUrl);
        if (videoId) {
            const videoCard = createVideoCard(videoId, index);
            videosGrid.appendChild(videoCard);
        }
    });
    
    // Remove loading spinner
    setTimeout(() => {
        const loading = videosGrid.querySelector('.loading');
        if (loading) loading.remove();
    }, 1000);
}

// Extract YouTube Video ID
function extractYouTubeId(url) {
    const regex = /(?:youtube\.com\/watch\?v=|youtu\.be\/|youtube\.com\/embed\/)([^&\n?#]+)/;
    const match = url.match(regex);
    return match ? match[1] : null;
}

// Create Video Card
function createVideoCard(videoId, index) {
    const card = document.createElement('div');
    card.className = 'video-card';
    card.setAttribute('data-aos', 'zoom-in');
    card.setAttribute('data-aos-delay', (index * 200).toString());

    card.innerHTML = `
        <a class="video-thumbnail" href="https://www.youtube.com/watch?v=${videoId}" target="_blank" rel="noopener noreferrer">
            <img src="https://img.youtube.com/vi/${videoId}/maxresdefault.jpg" alt="Video ${index + 1}">
            <div class="play-button">
                <i class="fas fa-play"></i>
            </div>
        </a>
        <div class="video-info">
            <h3>Video ${index + 1}</h3>
            <p>Se abrirá YouTube en nueva pestaña</p>
        </div>
    `;
    return card;
}

// Load YouTube Videos
function loadYouTubeVideos() {
    const videosGrid = document.getElementById('videosGrid');
    videosGrid.innerHTML = '<div class="loading"><div class="spinner"></div></div>';
    
    // Load video details for each video
    Promise.all(youtubeVideos.map(url => getVideoDetails(extractYouTubeId(url))))
        .then(videoDetails => {
            videosGrid.innerHTML = '';
            videoDetails.forEach((details, index) => {
                if (details) {
                    const videoCard = createVideoCard(details.id, details.title, index);
                    videosGrid.appendChild(videoCard);
                }
            });
            AOS.refresh();
        })
        .catch(error => {
            console.error('Error loading video details:', error);
            // Fallback to simple cards
            videosGrid.innerHTML = '';
            youtubeVideos.forEach((videoUrl, index) => {
                const videoId = extractYouTubeId(videoUrl);
                if (videoId) {
                    const videoCard = createVideoCard(videoId, `Video ${index + 1}`, index);
                    videosGrid.appendChild(videoCard);
                }
            });
            AOS.refresh();
        });
}

// Get video details from YouTube API
async function getVideoDetails(videoId) {
    try {
        const response = await fetch(`https://noembed.com/embed?url=https://www.youtube.com/watch?v=${videoId}`);
        const data = await response.json();
        return {
            id: videoId,
            title: data.title || 'Video',
            thumbnail: data.thumbnail_url || `https://img.youtube.com/vi/${videoId}/maxresdefault.jpg`
        };
    } catch (error) {
        console.error('Error fetching video details:', error);
        return null;
    }
}       

// Create Gallery Item
function createGalleryItem(imageUrl, index) {
    const item = document.createElement('div');
    item.className = 'gallery-item';
    item.setAttribute('data-aos', 'fade-up');
    item.setAttribute('data-aos-delay', (index * 150).toString());
    item.innerHTML = `
        <img src="${imageUrl}" alt="Gallery Image ${index + 1}">
    `;
    
    // Add click event for lightbox
    item.addEventListener('click', function() {
        openLightbox(imageUrl);
    });
    
    return item;
}

// Simple Lightbox
function openLightbox(imageUrl) {
    const lightbox = document.createElement('div');
    lightbox.style.cssText = `
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background: rgba(0, 0, 0, 0.9);
        display: flex;
        justify-content: center;
        align-items: center;
        z-index: 10000;
        cursor: pointer;
    `;
    
    const img = document.createElement('img');
    img.src = imageUrl;
    img.style.cssText = `
        max-width: 90%;
        max-height: 90%;
        object-fit: contain;
        border-radius: 10px;
    `;
    
    lightbox.appendChild(img);
    document.body.appendChild(lightbox);
    
    lightbox.addEventListener('click', function() {
        document.body.removeChild(lightbox);
    });
}

// Setup Biography Editor
function setupBiographyEditor() {
    const editBtn = document.getElementById('editBioBtn');
    const bioText = document.getElementById('bioText');
    let isEditing = false;
    
    editBtn.addEventListener('click', function() {
        if (!isEditing) {
            // Enable editing
            bioText.contentEditable = true;
            bioText.style.border = '1px solid #00d4ff';
            bioText.style.padding = '10px';
            bioText.style.borderRadius = '5px';
            editBtn.innerHTML = '<i class="fas fa-save"></i> Guardar Cambios';
            isEditing = true;
        } else {
            // Save changes
            bioText.contentEditable = false;
            bioText.style.border = 'none';
            bioText.style.padding = '2rem';
            editBtn.innerHTML = '<i class="fas fa-edit"></i> Editar Biografía';
            isEditing = false;
            
            // Save to localStorage
            localStorage.setItem('biography', bioText.innerHTML);
            
            // Show success message
            showMessage('Biografía actualizada correctamente');
        }
    });
    
    // Load saved biography
    const savedBio = localStorage.getItem('biography');
    if (savedBio) {
        bioText.innerHTML = savedBio;
    }
}

// Setup Contact Form
function setupContactForm() {
    const form = document.getElementById('contactForm');
    
    form.addEventListener('submit', function(e) {
        e.preventDefault();
        
        // Get form data
        const formData = new FormData(form);
        const data = Object.fromEntries(formData);
        
        // Create email content
        const emailContent = `
            Nombre del Evento: ${data['Nombre del Evento']}
            Email: ${data['Email de Contacto']}
            Fecha: ${data['Fecha del Evento']}
            Mensaje: ${data['Mensaje Detallado']}
        `;
        
        // Create mailto link
        const mailtoLink = `mailto:tomiiorellano@gmail.com?subject=Solicitud de Evento - ${data['Nombre del Evento']}&body=${encodeURIComponent(emailContent)}`;
        
        // Open email client
        window.location.href = mailtoLink;
        
        // Show success message
        showMessage('Solicitud enviada. Revisa tu email cliente.');
        
        // Reset form
        form.reset();
    });
}

// Setup Smooth Scrolling
function setupSmoothScrolling() {
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });
}

// Setup Scroll Effects
function setupScrollEffects() {
    const header = document.querySelector('.header');
    const floatingSoundcloud = document.getElementById('floatingSoundcloud');
    let scrollTimeout;
    
    window.addEventListener('scroll', function() {
        if (window.scrollY > 50) {
            header.classList.add('scrolled');
        } else {
            header.classList.remove('scrolled');
        }
        
        // Add scrolling animation to SoundCloud logo
        if (floatingSoundcloud) {
            floatingSoundcloud.classList.add('scrolling');
            
            // Clear previous timeout
            clearTimeout(scrollTimeout);
            
            // Remove scrolling class after animation completes
            scrollTimeout = setTimeout(() => {
                floatingSoundcloud.classList.remove('scrolling');
            }, 600);
        }
    });
}

// Show Message Function
function showMessage(message) {
    const messageDiv = document.createElement('div');
    messageDiv.style.cssText = `
        position: fixed;
        top: 20px;
        right: 20px;
        background: linear-gradient(45deg, #00d4ff, #0099cc);
        color: white;
        padding: 15px 20px;
        border-radius: 5px;
        z-index: 10000;
        animation: slideIn 0.3s ease;
        box-shadow: 0 10px 20px rgba(0, 212, 255, 0.3);
    `;
    messageDiv.textContent = message;
    
    document.body.appendChild(messageDiv);
    
    setTimeout(() => {
        messageDiv.style.animation = 'slideOut 0.3s ease';
        setTimeout(() => {
            document.body.removeChild(messageDiv);
        }, 300);
    }, 3000);
}

// Add slide animations
const style = document.createElement('style');
style.textContent = `
    @keyframes slideIn {
        from { transform: translateX(100%); opacity: 0; }
        to { transform: translateX(0); opacity: 1; }
    }
    @keyframes slideOut {
        from { transform: translateX(0); opacity: 1; }
        to { transform: translateX(100%); opacity: 0; }
    }
`;
document.head.appendChild(style);

// Add particle effect to hero section
function createParticles() {
    const hero = document.querySelector('.hero');
    const particlesContainer = document.createElement('div');
    particlesContainer.style.cssText = `
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        pointer-events: none;
        z-index: 0;
    `;
    
    for (let i = 0; i < 50; i++) {
        const particle = document.createElement('div');
        particle.style.cssText = `
            position: absolute;
            width: ${Math.random() * 3}px;
            height: ${Math.random() * 3}px;
            background: rgba(0, 212, 255, ${Math.random() * 0.8});
            border-radius: 50%;
            top: ${Math.random() * 100}%;
            left: ${Math.random() * 100}%;
            animation: float ${5 + Math.random() * 10}s linear infinite;
        `;
        particlesContainer.appendChild(particle);
    }
    
    hero.appendChild(particlesContainer);
}

// Add floating animation
const floatStyle = document.createElement('style');
floatStyle.textContent = `
    @keyframes float {
        0% { transform: translateY(0px) translateX(0px); opacity: 0; }
        10% { opacity: 1; }
        90% { opacity: 1; }
        100% { transform: translateY(-100vh) translateX(${Math.random() * 200 - 100}px); opacity: 0; }
    }
`;
document.head.appendChild(floatStyle);

// Initialize particles
createParticles();  