document.addEventListener('DOMContentLoaded', function() {
    const emailForm = document.getElementById('emailForm');
    const menuToggle = document.querySelector('.menu-toggle');
    const navLinks = document.querySelector('.nav-links');
    const phoneScreens = document.querySelectorAll('.phone-screen');
    const phoneScreenText = document.getElementById('phoneScreenText');
    const phoneNavPrev = document.querySelector('.phone-nav-button.prev');
    const phoneNavNext = document.querySelector('.phone-nav-button.next');
    const track = document.querySelector('.testimonials-track');
    const cards = document.querySelectorAll('.testimonial-card');
    const dots = document.querySelectorAll('.carousel-dot');
    const videoPopup = document.querySelector('.video-popup');
    const videoContainer = document.querySelector('.video-container');
    const video = videoPopup.querySelector('video');
    const closeVideo = document.querySelector('.close-video');
    const faqItems = document.querySelectorAll('.faq-item');
    
    let phoneCurrentIndex = 0;
    let currentIndex = 0;
    const cardWidth = 456.12;
    const cardMargin = 24;

    const phoneScreenTexts = [
        "Get clear guidance day after day, helping you stay on track and make progress.",
        "Strengthen your back with personalized exercises designed to fit your needs.",
        "Stay on track—set reminders that fit your day to stretch and move.",
        "Log your back health, feelings, and score—watch your progress.",
        "Stay motivated—compare with peers and challenge friends to join you!"
    ];
    

    emailForm.addEventListener('submit', function(e) {
        e.preventDefault();
        
        const form = e.target;
        const submitButton = form.querySelector('button');
        const messageDiv = document.getElementById('message');
        const email = form.querySelector('#emailInput').value;
        
        submitButton.disabled = true;
        submitButton.textContent = 'Subscribing...';
        
        const scriptURL = 'https://script.google.com/macros/s/AKfycbyn8cebFcTHz0JZdu_356EwlL-szsT-vHp4o_-Q8_m8Z7gGHOdUZC9aCesKvQJ5ij2WVA/exec';
    
        fetch(scriptURL, {
            method: 'POST',
            mode: 'no-cors',
            headers: {
                'Content-Type': 'text/plain',
            },
            body: JSON.stringify({ email: email })
        })
        .then(() => {
            messageDiv.textContent = 'Thank you for subscribing!';
            messageDiv.className = 'message success';
            messageDiv.style.display = 'block';
            form.reset();
        })
        .catch(error => {
            messageDiv.textContent = 'Oops! Something went wrong. Please try again.';
            messageDiv.className = 'message error';
            messageDiv.style.display = 'block';
            console.error('Error:', error);
        })
        .finally(() => {
            submitButton.disabled = false;
            submitButton.textContent = 'Subscribe';
        });
    });

    menuToggle.addEventListener('click', () => {
        navLinks.classList.toggle('active');
    });

    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const section = document.querySelector(this.getAttribute('href'));
            if (section) {
                section.scrollIntoView({
                    behavior: 'smooth'
                });
            }
        });
    });

    const sections = document.querySelectorAll('section');
    window.addEventListener('scroll', () => {
        let current = '';
        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            if (window.pageYOffset >= sectionTop - 60) {
                current = section.getAttribute('id');
            }
        });

        navLinks.querySelectorAll('a').forEach(link => {
            link.classList.remove('active');
            if (link.getAttribute('href') === `#${current}` || 
                (current === undefined && link.getAttribute('href') === '#')) {
                link.classList.add('active');
            }
        });
    });

    function updatePhoneScreen() {
        phoneScreens.forEach((screen, index) => {
            if (index === phoneCurrentIndex) {
                screen.classList.add('active');
                screen.classList.remove('prev');
            } else if (index === (phoneCurrentIndex - 1 + phoneScreens.length) % phoneScreens.length) {
                screen.classList.add('prev');
                screen.classList.remove('active');
            } else {
                screen.classList.remove('active', 'prev');
            }
        });
        phoneScreenText.textContent = phoneScreenTexts[phoneCurrentIndex];
    }

    function nextPhoneScreen() {
        phoneCurrentIndex = (phoneCurrentIndex + 1) % phoneScreens.length;
        updatePhoneScreen();
    }

    function prevPhoneScreen() {
        phoneCurrentIndex = (phoneCurrentIndex - 1 + phoneScreens.length) % phoneScreens.length;
        updatePhoneScreen();
    }

    phoneNavNext.addEventListener('click', nextPhoneScreen);
    phoneNavPrev.addEventListener('click', prevPhoneScreen);

    function updateCarousel() {
        const offset = -(currentIndex * (cardWidth + cardMargin));
        track.style.transform = `translateX(${offset}px)`;
        
        dots.forEach((dot, index) => {
            dot.classList.toggle('active', index === Math.floor(currentIndex / 3));
        });

        cards.forEach((card, index) => {
            card.classList.toggle('active', index === currentIndex);
        });
    }

    function nextSlide() {
        currentIndex = (currentIndex + 1) % cards.length;
        updateCarousel();
    }

    function prevSlide() {
        currentIndex = (currentIndex - 1 + cards.length) % cards.length;
        updateCarousel();
    }

    dots.forEach((dot, index) => {
        dot.addEventListener('click', () => {
            currentIndex = index * 3;
            updateCarousel();
        });
    });

    function openVideo(videoSrc) {
        video.src = videoSrc;
        videoPopup.classList.add('active');
        videoContainer.classList.add('active');
        document.body.style.overflow = 'hidden';
        video.play().catch(function(error) {
            console.log("Video play failed:", error);
        });
    }

    function closeVideoPopup() {
        video.pause();
        video.currentTime = 0;
        videoContainer.classList.remove('active');
        videoPopup.classList.remove('active');
        document.body.style.overflow = '';
    }

    cards.forEach((card) => {
        card.addEventListener('click', () => {
            openVideo('https://hebbkx1anhila5yf.public.blob.vercel-storage.com/video-sample-LDptUYsndiB8LVf037X7YDwHWGj6uG.mp4');
        });
    });

    closeVideo.addEventListener('click', closeVideoPopup);

    videoPopup.addEventListener('click', (e) => {
        if (e.target === videoPopup) {
            closeVideoPopup();
        }
    });

    videoContainer.addEventListener('click', (e) => {
        e.stopPropagation();
    });

    videoPopup.addEventListener('touchstart', (e) => {
        if (e.target === videoPopup) {
            closeVideoPopup();
        }
    });

    video.addEventListener('ended', closeVideoPopup);

    

    function revealOnScroll() {
        const elements = document.querySelectorAll('.phone-screen-carousel, .testimonial-card');
        elements.forEach(element => {
            const elementTop = element.getBoundingClientRect().top;
            const elementVisible = 150;
            if (elementTop < window.innerHeight - elementVisible) {
                element.style.opacity = '1';
                element.style.transform = 'translateY(0)';
            }
        });
    }

    window.addEventListener('scroll', revealOnScroll);
    revealOnScroll();

    faqItems.forEach(item => {
        const question = item.querySelector('.faq-question');
        const toggle = item.querySelector('.faq-toggle');
        const answer = item.querySelector('.faq-answer');

        question.addEventListener('click', () => {
            item.classList.toggle('active');
            toggle.textContent = item.classList.contains('active') ? '-' : '+';
        });
    });
});