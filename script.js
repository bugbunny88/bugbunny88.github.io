
// Update copyright year to current year
document.addEventListener('DOMContentLoaded', () => {
    const yearElement = document.getElementById('current-year');
    if (yearElement) {
        yearElement.textContent = new Date().getFullYear();
    }
});

// Smooth scrolling for navigation links
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

// Navbar background on scroll
window.addEventListener('scroll', () => {
    const navbar = document.querySelector('.navbar');
    if (window.scrollY > 50) {
        navbar.style.background = 'rgba(13, 2, 32, 0.95)';
    } else {
        navbar.style.background = 'rgba(13, 2, 32, 0.9)';
    }
});

// Intersection Observer for animations
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.animation = 'fadeInUp 0.8s ease forwards';
        }
    });
}, observerOptions);

// Observe elements for animation
document.addEventListener('DOMContentLoaded', () => {
    const animateElements = document.querySelectorAll('.project-card, .timeline-item, .skill-category');
    animateElements.forEach(el => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(30px)';
        observer.observe(el);
    });
});

// Add fade in up animation
const style = document.createElement('style');
style.textContent = `
    @keyframes fadeInUp {
        from {
            opacity: 0;
            transform: translateY(30px);
        }
        to {
            opacity: 1;
            transform: translateY(0);
        }
    }
`;
document.head.appendChild(style);

// Parallax effect for hero section
window.addEventListener('scroll', () => {
    const scrolled = window.pageYOffset;
    const parallax = document.querySelector('.hero-visual');
    const speed = scrolled * 0.5;

    if (parallax) {
        parallax.style.transform = `translateY(${speed}px)`;
    }
});

// Dynamic stars generation
function createStars() {
    const starsContainer = document.querySelector('.stars');
    const numberOfStars = 100;

    for (let i = 0; i < numberOfStars; i++) {
        const star = document.createElement('div');
        star.style.position = 'absolute';
        star.style.width = Math.random() * 3 + 'px';
        star.style.height = star.style.width;
        star.style.background = '#fff';
        star.style.borderRadius = '50%';
        star.style.left = Math.random() * 100 + '%';
        star.style.top = Math.random() * 100 + '%';
        star.style.animation = `twinkle ${Math.random() * 4 + 2}s infinite`;
        starsContainer.appendChild(star);
    }
}

// Add twinkle animation
const twinkleStyle = document.createElement('style');
twinkleStyle.textContent = `
    @keyframes twinkle {
        0%, 100% { opacity: 0.3; transform: scale(1); }
        50% { opacity: 1; transform: scale(1.2); }
    }
`;
document.head.appendChild(twinkleStyle);

// Initialize stars
createStars();

// Glitch effect enhancement
document.addEventListener('DOMContentLoaded', () => {
    const glitchElement = document.querySelector('.glitch');

    setInterval(() => {
        if (Math.random() > 0.95) {
            glitchElement.style.animation = 'none';
            glitchElement.offsetHeight; // Trigger reflow
            glitchElement.style.animation = 'glitch 0.3s';
        }
    }, 100);
});

// Mouse movement parallax for nebula
document.addEventListener('mousemove', (e) => {
    const nebula = document.querySelector('.nebula');
    const x = (e.clientX / window.innerWidth) * 10;
    const y = (e.clientY / window.innerHeight) * 10;

    nebula.style.transform = `translate(${x}px, ${y}px)`;
});

// Typing effect for hero subtitle
function typeWriter(element, text, speed = 100) {
    let i = 0;
    element.innerHTML = '';

    function type() {
        if (i < text.length) {
            element.innerHTML += text.charAt(i);
            i++;
            setTimeout(type, speed);
        }
    }

    type();
}

// Initialize typing effect
document.addEventListener('DOMContentLoaded', () => {
    const subtitle = document.querySelector('.hero-subtitle');
    const originalText = subtitle.textContent;

    setTimeout(() => {
        typeWriter(subtitle, originalText, 80);
    }, 1000);
});

// Skill tags hover effect
document.addEventListener('DOMContentLoaded', () => {
    const skillTags = document.querySelectorAll('.skill-tag');

    skillTags.forEach(tag => {
        tag.addEventListener('mouseenter', () => {
            tag.style.transform = 'scale(1.1)';
            tag.style.boxShadow = '0 5px 15px rgba(233, 30, 99, 0.4)';
        });

        tag.addEventListener('mouseleave', () => {
            tag.style.transform = 'scale(1)';
            tag.style.boxShadow = 'none';
        });
    });
});

// Project cards floating animation
document.addEventListener('DOMContentLoaded', () => {
    const projectCards = document.querySelectorAll('.project-card');

    projectCards.forEach((card, index) => {
        card.style.animation = `float ${3 + index * 0.5}s ease-in-out infinite`;
    });
});

// Add floating animation
const floatingStyle = document.createElement('style');
floatingStyle.textContent = `
    @keyframes float {
        0%, 100% { transform: translateY(0px) rotate(0deg); }
        50% { transform: translateY(-10px) rotate(1deg); }
    }
`;
document.head.appendChild(floatingStyle);