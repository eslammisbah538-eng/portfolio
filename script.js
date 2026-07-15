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

let scrollTicking = false;

function handleScroll() {
    const scrollY = window.scrollY;

    // Toggle scrolled class
    header.classList.toggle('scrolled', scrollY > 50);

    // Show/hide scroll-to-top button
    const scrollTopBtnEl = document.getElementById('scrollTop');
    if (scrollTopBtnEl) scrollTopBtnEl.classList.toggle('visible', scrollY > 500);

    // Highlight active nav link
    let current = '';
    sections.forEach(section => {
        if (scrollY >= (section.offsetTop - 200)) {
            current = section.getAttribute('id');
        }
    });

    navLinks.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href').slice(1) === current) {
            link.classList.add('active');
        }
    });

    scrollTicking = false;
}

window.addEventListener('scroll', () => {
    if (!scrollTicking) {
        requestAnimationFrame(handleScroll);
        scrollTicking = true;
    }
}, { passive: true });


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


// ==================== PROJECTS (LOADED FROM projects.json) ====================
const modal = document.getElementById('projectModal');
const closeModal = document.getElementById('closeModal');
const projectsGrid = document.getElementById('projectsGrid');

function buildProjectCard(project) {
    const card = document.createElement('div');
    card.className = 'project-card fade-in';
    card.dataset.id = project.id;

    const previewTags = project.tags.slice(0, 3)
        .map(tag => `<span class="tag">${tag}</span>`)
        .join('');

    card.innerHTML = `
        <div class="project-image">
            <img src="${project.image}" alt="${project.title}">
        </div>
        <div class="project-info">
            <div class="project-tags">${previewTags}</div>
            <h3>${project.title}</h3>
            <p>${project.shortDesc}</p>
            <div class="project-links">
                <button class="open-project-btn" aria-label="عرض المشروع"><i class="fas fa-eye"></i></button>
                <a href="${project.repoLink || '#'}" target="_blank" aria-label="كود المشروع"><i class="fab fa-github"></i></a>
            </div>
        </div>
    `;

    card.querySelector('.open-project-btn').addEventListener('click', () => openProjectModal(project));

    return card;
}

function openProjectModal(project) {
    document.getElementById('modalTitle').textContent = project.title;
    document.getElementById('modalDesc').textContent = project.fullDesc || project.shortDesc;
    document.getElementById('modalImg').src = project.image;

    const tagsContainer = document.getElementById('modalTags');
    tagsContainer.innerHTML = '';
    project.tags.forEach(tag => {
        tagsContainer.innerHTML += `<span class="tag">${tag}</span>`;
    });

    const liveLinkEl = document.getElementById('modalLiveLink');
    const repoLinkEl = document.getElementById('modalRepoLink');
    if (liveLinkEl) liveLinkEl.href = project.liveLink || '#';
    if (repoLinkEl) repoLinkEl.href = project.repoLink || '#';

    modal.classList.add('open');
    document.body.classList.add('modal-open');
}

function closeProjectModal() {
    modal.classList.remove('open');
    document.body.classList.remove('modal-open');
}

if (projectsGrid) {
    fetch('projects.json')
        .then(res => res.json())
        .then(projects => {
            projects.forEach(project => {
                const card = buildProjectCard(project);
                projectsGrid.appendChild(card);
                // Trigger fade-in observation for the newly added card
                observer.observe(card);
            });
        })
        .catch(err => console.error('تعذر تحميل projects.json:', err));
}

closeModal.addEventListener('click', closeProjectModal);

window.addEventListener('click', (e) => {
    if (e.target === modal) closeProjectModal();
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


// ==================== CONTACT FORM -> WHATSAPP ====================
const contactForm = document.getElementById('contactForm');
const WHATSAPP_NUMBER = '201103023916';

if (contactForm) {
    contactForm.addEventListener('submit', (e) => {
        e.preventDefault();

        const name = document.getElementById('formName').value.trim();
        const email = document.getElementById('formEmail').value.trim();
        const subject = document.getElementById('formSubject').value.trim();
        const message = document.getElementById('formMessage').value.trim();

        const whatsappMessage =
            `*رسالة جديدة من الموقع*\n` +
            `----------------------\n` +
            `*الاسم:* ${name}\n` +
            `*الإيميل:* ${email}\n` +
            `*الموضوع:* ${subject}\n` +
            `*الرسالة:*\n${message}`;

        const encodedMessage = encodeURIComponent(whatsappMessage);

        window.open(`https://wa.me/${WHATSAPP_NUMBER}?text=${encodedMessage}`, '_blank');

        const successMsg = document.getElementById('formSuccess');
        successMsg.textContent = 'تم فتح واتساب برسالتك — أكمل الإرسال من هناك.';
        successMsg.classList.add('show');
        contactForm.reset();

        setTimeout(() => successMsg.classList.remove('show'), 5000);
    });
}


// ==================== SCROLL TO TOP ====================
const scrollTopBtn = document.getElementById('scrollTop');

scrollTopBtn.addEventListener('click', () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
});
