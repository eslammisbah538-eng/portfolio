// ==================== PRELOADER ====================
window.addEventListener('load', () => {
    document.querySelector('.preloader').classList.add('fade-out');
});


// ==================== DETECT MOBILE ====================
const isMobile = () => window.innerWidth <= 1024;


// ==================== HERO TYPING EFFECT ====================
const textData = "أحول الأفكار المعقدة إلى تجارب مستخدم رقمية سلسة وجذابة باستخدام أحدث تقنيات الويب الحديثة. شغوف ببناء واجهات تفاعلية تترك انطباعاً لا يُنسى.";
let charIndex = 0;
const targetElement = document.getElementById("heroDescription");
const descContainer = document.getElementById("heroDescContainer");
let typeStarted = false;

function typeEffect() {
    if (charIndex < textData.length) {
        targetElement.textContent += textData.charAt(charIndex);
        charIndex++;
        setTimeout(typeEffect, 35);
    }
}

function startTyping() {
    if (typeStarted) return;
    typeStarted = true;

    if (isMobile()) {
        // Mobile: show container with smooth animation, then start typing
        descContainer.classList.add('text-visible');
        setTimeout(typeEffect, 400);
    } else {
        // Desktop: start immediately
        typeEffect();
    }
}

// Watch the description container — starts typing when it enters the viewport
const descObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            startTyping();
            descObserver.unobserve(entry.target);
        }
    });
}, {
    threshold: 0.5,
    rootMargin: '0px 0px -50px 0px'
});

descObserver.observe(descContainer);


// ==================== HEADER SCROLL & ACTIVE LINKS ====================
const header = document.getElementById('header');
const sections = document.querySelectorAll('section');
const navLinks = document.querySelectorAll('.nav-link');

window.addEventListener('scroll', () => {
    // Toggle scrolled class
    header.classList.toggle('scrolled', window.scrollY > 50);

    // Highlight active nav link
    let current = '';
    sections.forEach(section => {
        if (window.scrollY >= (section.offsetTop - 200)) {
            current = section.getAttribute('id');
        }
    });

    navLinks.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href').slice(1) === current) {
            link.classList.add('active');
        }
    });
});


// ==================== MOBILE MENU TOGGLE ====================
const menuToggle = document.getElementById('menuToggle');
const navMenu = document.getElementById('navMenu');

menuToggle.addEventListener('click', () => {
    menuToggle.classList.toggle('active');
    navMenu.classList.toggle('active');
});

// Close menu when a nav link is clicked
navLinks.forEach(link => {
    link.addEventListener('click', () => {
        menuToggle.classList.remove('active');
        navMenu.classList.remove('active');
    });
});


// ==================== THEME TOGGLE ====================
const themeToggle = document.getElementById('themeToggle');
const icon = themeToggle.querySelector('i');

themeToggle.addEventListener('click', () => {
    if (document.body.getAttribute('data-theme') === 'dark') {
        document.body.removeAttribute('data-theme');
        icon.className = 'fas fa-moon';
    } else {
        document.body.setAttribute('data-theme', 'dark');
        icon.className = 'fas fa-sun';
    }
});


// ==================== FADE-IN & SKILL BAR ANIMATIONS ====================
const fadeElements = document.querySelectorAll('.fade-in');

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible');

            // Animate skill bar when card enters viewport
            if (entry.target.classList.contains('skill-card')) {
                const fill = entry.target.querySelector('.skill-bar-fill');
                if (fill && !fill.dataset.animated) {
                    fill.dataset.animated = 'true';
                    setTimeout(() => { fill.style.width = '100%'; }, 200);
                }
            }
        }
    });
}, { threshold: 0.15 });

fadeElements.forEach(el => observer.observe(el));

// Skill bar re-animation on hover
document.querySelectorAll('.skill-card').forEach(card => {
    const fill = card.querySelector('.skill-bar-fill');

    card.addEventListener('mouseenter', () => {
        if (!fill) return;

        fill.style.transition = 'none';
        fill.style.width = '0%';

        requestAnimationFrame(() => {
            requestAnimationFrame(() => {
                fill.style.transition = 'width 0.7s cubic-bezier(0.4, 0, 0.2, 1)';
                fill.style.width = '100%';
            });
        });
    });
});


// ==================== PROJECT MODAL ====================
const modal = document.getElementById('projectModal');
const closeModal = document.getElementById('closeModal');

document.querySelectorAll('.open-project-btn').forEach(btn => {
    btn.addEventListener('click', (e) => {
        const card = e.target.closest('.project-card');

        // Populate modal content
        document.getElementById('modalTitle').textContent = card.getAttribute('data-title');
        document.getElementById('modalDesc').textContent = card.getAttribute('data-desc');
        document.getElementById('modalImg').src = card.getAttribute('data-img');

        // Populate modal tags
        const tagsContainer = document.getElementById('modalTags');
        tagsContainer.innerHTML = '';
        card.getAttribute('data-tags').split(',').forEach(tag => {
            tagsContainer.innerHTML += `<span class="tag">${tag.trim()}</span>`;
        });

        modal.classList.add('open');
    });
});

closeModal.addEventListener('click', () => modal.classList.remove('open'));

window.addEventListener('click', (e) => {
    if (e.target === modal) modal.classList.remove('open');
});


// ==================== WHY ME TYPING EFFECT ====================
const whyTexts = [
    "أكتب كود نظيف قابل للصيانة، مش بس كود شغال.",
    "أفهم التصميم وأترجمه بدقة pixel perfect.",
    "أسلّم في الموعد، وأتواصل طول الوقت.",
    "أهتم بتجربة المستخدم بقدر ما أهتم بالكود.",
    "مشروعك بالنسبالي مش مجرد task — ده بناء حاجة تفرق."
];

let whyTextIndex = 0;
let whyCharIndex = 0;
let whyDeleting = false;
let whyStarted = false;

const whyEl = document.getElementById('whyTyped');

function whyType() {
    const current = whyTexts[whyTextIndex];

    if (!whyDeleting) {
        // Typing forward
        whyEl.textContent = current.substring(0, whyCharIndex + 1);
        whyCharIndex++;

        if (whyCharIndex === current.length) {
            whyDeleting = true;
            setTimeout(whyType, 2200);
            return;
        }
    } else {
        // Deleting backward
        whyEl.textContent = current.substring(0, whyCharIndex - 1);
        whyCharIndex--;

        if (whyCharIndex === 0) {
            whyDeleting = false;
            whyTextIndex = (whyTextIndex + 1) % whyTexts.length;
        }
    }

    setTimeout(whyType, whyDeleting ? 22 : 40);
}

const whySection = document.getElementById('why-me');

if (whySection) {
    const whyObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting && !whyStarted) {
                whyStarted = true;
                setTimeout(whyType, 400);
            }
        });
    }, { threshold: 0.3 });

    whyObserver.observe(whySection);
}


// ==================== CONTACT FORM ====================
const contactForm = document.getElementById('contactForm');

if (contactForm) {
    contactForm.addEventListener('submit', (e) => {
        e.preventDefault();

        const successMsg = document.getElementById('formSuccess');
        successMsg.classList.add('show');
        contactForm.reset();

        setTimeout(() => successMsg.classList.remove('show'), 5000);
    });
}


// ==================== SCROLL TO TOP ====================
const scrollTopBtn = document.getElementById('scrollTop');

window.addEventListener('scroll', () => {
    scrollTopBtn.classList.toggle('visible', window.scrollY > 500);
});

scrollTopBtn.addEventListener('click', () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
});