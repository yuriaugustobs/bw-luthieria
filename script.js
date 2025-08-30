// Theme Toggle Functionality
document.addEventListener('DOMContentLoaded', function() {
    const themeToggle = document.getElementById('themeToggle');
    const themeIcon = document.getElementById('themeIcon');
    const body = document.body;
    
    // Check for saved theme preference or default to 'dark'
    const currentTheme = localStorage.getItem('theme') || 'dark';
    
    // Apply the current theme
    if (currentTheme === 'light') {
        body.classList.remove('dark');
        body.classList.add('light');
        themeIcon.classList.remove('fa-moon');
        themeIcon.classList.add('fa-sun');
        body.style.background = 'linear-gradient(135deg, #f8fafc 0%, #ffffff 50%, #f1f5f9 100%)';
    } else {
        body.classList.remove('light');
        body.classList.add('dark');
        themeIcon.classList.remove('fa-sun');
        themeIcon.classList.add('fa-moon');
        body.style.background = 'linear-gradient(135deg, #0f172a 0%, #000000 50%, #0f172a 100%)';
    }
    
    // Theme toggle event listener
    themeToggle.addEventListener('click', function() {
        if (body.classList.contains('dark')) {
            // Switch to light theme
            body.classList.remove('dark');
            body.classList.add('light');
            themeIcon.classList.remove('fa-moon');
            themeIcon.classList.add('fa-sun');
            themeIcon.style.color = '#374151';
            body.style.background = 'linear-gradient(135deg, #f8fafc 0%, #ffffff 50%, #f1f5f9 100%)';
            localStorage.setItem('theme', 'light');
            
            // Update text colors for light theme
            updateTextColorsForLight();
        } else {
            // Switch to dark theme
            body.classList.remove('light');
            body.classList.add('dark');
            themeIcon.classList.remove('fa-sun');
            themeIcon.classList.add('fa-moon');
            themeIcon.style.color = '#ffffff';
            body.style.background = 'linear-gradient(135deg, #0f172a 0%, #000000 50%, #0f172a 100%)';
            localStorage.setItem('theme', 'dark');
            
            // Update text colors for dark theme
            updateTextColorsForDark();
        }
    });
    
    function updateTextColorsForLight() {
        const username = document.querySelector('h1');
        const description = document.querySelector('p');
        const links = document.querySelectorAll('a span');
        
        if (username) username.style.color = '#1f2937';
        if (description) description.style.color = '#4b5563';
        
        links.forEach(link => {
            link.style.color = '#1f2937';
        });
    }
    
    function updateTextColorsForDark() {
        const username = document.querySelector('h1');
        const description = document.querySelector('p');
        const links = document.querySelectorAll('a span');
        
        if (username) username.style.color = '#ffffff';
        if (description) description.style.color = '#d1d5db';
        
        links.forEach(link => {
            link.style.color = '#ffffff';
        });
    }
});

// Smooth scrolling and enhanced hover effects
document.addEventListener('DOMContentLoaded', function() {
    const links = document.querySelectorAll('a[href^="http"], a[href^="https"]');
    
    // Add click analytics (optional)
    links.forEach(link => {
        link.addEventListener('click', function() {
            const linkText = this.querySelector('span').textContent;
            console.log(`Link clicado: ${linkText}`);
            
            // Add a subtle click effect
            this.style.transform = 'scale(0.95)';
            setTimeout(() => {
                this.style.transform = '';
            }, 150);
        });
    });
    
    // Add intersection observer for fade-in animations
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, observerOptions);
    
    // Observe all links for animation
    links.forEach((link, index) => {
        link.style.opacity = '0';
        link.style.transform = 'translateY(20px)';
        link.style.transition = `opacity 0.6s ease ${index * 0.1}s, transform 0.6s ease ${index * 0.1}s`;
        observer.observe(link);
    });
});

// Add typing effect for username
document.addEventListener('DOMContentLoaded', function() {
    const username = document.querySelector('h1');
    const originalText = username.textContent;
    username.textContent = '';
    
    let i = 0;
    function typeWriter() {
        if (i < originalText.length) {
            username.textContent += originalText.charAt(i);
            i++;
            setTimeout(typeWriter, 150);
        }
    }
    
    // Start typing effect after a short delay
    setTimeout(typeWriter, 500);
});

// Add floating particles animation
document.addEventListener('DOMContentLoaded', function() {
    function createFloatingParticle() {
        const particle = document.createElement('div');
        const size = Math.random() * 4 + 1;
        const colors = ['#475569', '#64748b', '#334155', '#1e293b'];
        const color = colors[Math.floor(Math.random() * colors.length)];
        
        particle.style.cssText = `
            position: fixed;
            width: ${size}px;
            height: ${size}px;
            background: ${color};
            border-radius: 50%;
            pointer-events: none;
            z-index: 1;
            opacity: 0.3;
            left: ${Math.random() * window.innerWidth}px;
            top: ${window.innerHeight + 10}px;
            animation: floatUp ${Math.random() * 3 + 2}s linear forwards;
        `;
        
        document.body.appendChild(particle);
        
        setTimeout(() => {
            if (particle.parentNode) {
                particle.parentNode.removeChild(particle);
            }
        }, 5000);
    }
    
    // Create particles at intervals
    setInterval(createFloatingParticle, 1000);
});

// Add CSS animation for floating particles
const style = document.createElement('style');
style.textContent = `
    @keyframes floatUp {
        to {
            transform: translateY(-100vh) rotate(360deg);
            opacity: 0;
        }
    }
    
    @media (max-width: 768px) {
        .cursor-trail {
            display: none;
        }
    }
`;
document.head.appendChild(style);