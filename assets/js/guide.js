// Build It Guide Scripts
// MoreSalamander StudioLabs

// Progress bar
window.addEventListener('scroll', () => {
    const winScroll = document.documentElement.scrollTop;
    const height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
    const scrolled = (winScroll / height) * 100;
    document.getElementById('progressBar').style.width = scrolled + '%';
});

// TOC toggle
function toggleTOC() {
    document.getElementById('tocPanel').classList.toggle('open');
}

// Close TOC when clicking a link
document.querySelectorAll('.toc-list a').forEach(link => {
    link.addEventListener('click', () => {
        document.getElementById('tocPanel').classList.remove('open');
    });
});

// Close TOC when clicking outside
document.addEventListener('click', (e) => {
    const tocPanel = document.getElementById('tocPanel');
    const tocToggle = document.querySelector('.toc-toggle');
    
    if (!tocPanel.contains(e.target) && !tocToggle.contains(e.target)) {
        tocPanel.classList.remove('open');
    }
});

// Keyboard navigation
document.addEventListener('keydown', (e) => {
    // Escape closes TOC
    if (e.key === 'Escape') {
        document.getElementById('tocPanel').classList.remove('open');
    }
    
    // 't' toggles TOC
    if (e.key === 't' && !e.ctrlKey && !e.metaKey) {
        const activeElement = document.activeElement;
        if (activeElement.tagName !== 'INPUT' && activeElement.tagName !== 'TEXTAREA') {
            toggleTOC();
        }
    }
});

// Save checkbox state to localStorage
document.querySelectorAll('.checkpoint input[type="checkbox"]').forEach((checkbox, index) => {
    const pageSection = checkbox.closest('.page-section');
    const pageId = pageSection ? pageSection.id : 'unknown';
    const storageKey = `buildit-${window.location.pathname}-${pageId}-${index}`;
    
    // Restore state
    const savedState = localStorage.getItem(storageKey);
    if (savedState === 'true') {
        checkbox.checked = true;
    }
    
    // Save state on change
    checkbox.addEventListener('change', () => {
        localStorage.setItem(storageKey, checkbox.checked);
    });
});

// Highlight current section in TOC while scrolling
const observerOptions = {
    root: null,
    rootMargin: '-20% 0px -80% 0px',
    threshold: 0
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            const id = entry.target.id;
            
            // Remove active class from all TOC links
            document.querySelectorAll('.toc-list a').forEach(link => {
                link.style.background = '';
                link.style.color = '';
            });
            
            // Add active class to current
            const activeLink = document.querySelector(`.toc-list a[href="#${id}"]`);
            if (activeLink) {
                activeLink.style.background = '#edf2f7';
                activeLink.style.color = '#3182ce';
            }
        }
    });
}, observerOptions);

// Observe all page sections
document.querySelectorAll('.page-section').forEach(section => {
    observer.observe(section);
});

// Smooth scroll for anchor links
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

console.log('Build It Guide loaded - MoreSalamander StudioLabs');
