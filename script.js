const texts = [
    "Web Design",
    "Full Stack Development",
    "Graphics Design",
    "Software Development"
];

let currentIndex = 0;
const morphingText = document.getElementById('morphing-text');

function updateText() {
    morphingText.classList.add('blur');
    setTimeout(() => {
        morphingText.textContent = texts[currentIndex];
        morphingText.classList.remove('blur');
        currentIndex = (currentIndex + 1) % texts.length;
    }, 500);
}

morphingText.textContent = texts[3];

// this sets the text about every 3 seconds or so...
setInterval(updateText, 3000);


const dustContainer = document.getElementById('dust-particles');
const numberOfParticles = 50;

for (let i = 0; i < numberOfParticles; i++) {
    const particle = document.createElement('div');
    particle.className = 'particle';
    
    const size = Math.random() * 4 + 2;
    particle.style.width = `${size}px`;
    particle.style.height = `${size}px`;
    
    particle.style.left = `${Math.random() * 100}%`;
    particle.style.top = `${Math.random() * 100}%`;
    
    particle.style.animationDuration = `${Math.random() * 10 + 15}s`;
    particle.style.animationDelay = `${Math.random() * 10}s`;
    
    dustContainer.appendChild(particle);
}


const carousel = document.querySelector('.carousel-container');
const slides = document.querySelectorAll('.project-slide');
const prevButton = document.querySelector('.prev-button');
const nextButton = document.querySelector('.next-button');
let currentSlide = 0;

function updateCarousel() {
    carousel.style.transform = `translateX(-${currentSlide * 100}%)`;
}

prevButton.addEventListener('click', () => {
    currentSlide = (currentSlide - 1 + slides.length) % slides.length;
    updateCarousel();
});

nextButton.addEventListener('click', () => {
    currentSlide = (currentSlide + 1) % slides.length;
    updateCarousel();
});


const socialLinks = document.querySelectorAll('.social-links a');
const socialHoverText = document.getElementById('social-hover-text');

socialLinks.forEach(link => {
    link.addEventListener('mouseenter', () => {
        socialHoverText.textContent = link.getAttribute('data-hover');
        socialHoverText.style.opacity = '1';
    });

    link.addEventListener('mouseleave', () => {
        socialHoverText.style.opacity = '0';
    });
});