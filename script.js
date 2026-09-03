// ==================== LANGUAGE ====================
const translations = {
    ar: {
        'nav.contact': 'تواصل', 'nav.projects': 'المشاريع', 'nav.why': 'لماذا أنا', 'nav.skills': 'المهارات', 'nav.about': 'عني', 'nav.home': 'الرئيسية',
        'hero.role': 'مطور واجهات أمامية', 'hero.work': 'شاهد أعمالي', 'hero.cv': 'تحميل السيرة الذاتية',
        'about.title': 'عني', 'about.lead': 'كود متجاوب لتصميمات جميلة', 'about.role': 'مطور واجهات أمامية',
        'about.copy': 'أبني واجهات ويب عصرية وسريعة ومتجاوبة، مع تركيز على الكود النظيف والأداء وتجربة المستخدم المدروسة.',
        'about.point1': 'تنفيذ دقيق للتصميم', 'about.point2': 'تصميم متجاوب', 'about.point3': 'اهتمام بالأداء', 'about.point4': 'كود قابل للصيانة والتوسع',
        'skills.title': 'المهارات', 'skills.lead': 'الأدوات والتقنيات التي أستخدمها لبناء تجارب رقمية مميزة',
        'why.title': 'لماذا تختارني؟', 'why.lead': 'لست مجرد مطور، بل شريك يفهم رؤيتك ويحوّلها إلى كود يعمل.',
        'why.card1.title': 'التسليم في الموعد', 'why.card1.text': 'ملتزم بالمواعيد دون التنازل عن الجودة.', 'why.card2.title': 'تواصل واضح', 'why.card2.text': 'ستكون على علم بكل خطوة في المشروع.',
        'why.card3.title': 'اهتمام بالتفاصيل', 'why.card3.text': 'الفرق بين الموقع العادي والاستثنائي يكمن في التفاصيل.', 'why.card4.title': 'مرونة في التعديلات', 'why.card4.text': 'رأيك مهم، والتعديلات جزء طبيعي من عملية العمل.',
        'projects.title': 'مشاريع مختارة', 'projects.lead': 'مجموعة من الأفكار التي تحولت إلى تطبيقات ويب عملية.',
        'contact.title': 'تواصل معي', 'contact.lead': 'لديك فكرة مشروع؟ تواصل معي لنحوّلها إلى واقع.', 'contact.phone': 'رقم الهاتف',
        'form.name': 'الاسم بالكامل', 'form.email': 'البريد الإلكتروني', 'form.subject': 'الموضوع', 'form.message': 'اكتب رسالتك هنا', 'form.send': 'إرسال عبر واتساب',
        'form.success': 'تم فتح واتساب برسالتك. أكمل الإرسال من هناك.', 'footer.role': 'مطور واجهات أمامية', 'footer.credit': 'تصميم وتطوير', 'footer.rights': 'جميع الحقوق محفوظة',
        'modal.preview': 'معاينة', 'modal.source': 'الكود المصدري', 'project.view': 'عرض المشروع', 'project.repo': 'كود المشروع', 'language': 'EN'
    },
    en: {
        'nav.contact': 'Contact', 'nav.projects': 'Portfolio', 'nav.why': 'Why Me', 'nav.skills': 'Skills', 'nav.about': 'About', 'nav.home': 'Home',
        'hero.role': 'Front-End Developer', 'hero.work': 'View My Work', 'hero.cv': 'Download CV',
        'about.title': 'About Me', 'about.lead': 'Responsive code for beautiful designs', 'about.role': 'Front-End Developer',
        'about.copy': 'I build modern, fast, and responsive web interfaces with a focus on clean code, performance, and thoughtful user experience.',
        'about.point1': 'Pixel-perfect implementation', 'about.point2': 'Responsive design', 'about.point3': 'Performance-focused builds', 'about.point4': 'Maintainable, scalable code',
        'skills.title': 'Skills', 'skills.lead': 'Tools and technologies I use to build exceptional digital experiences',
        'why.title': 'Why Choose Me?', 'why.lead': 'Not just a developer, but a partner who understands your vision and translates it into working code.',
        'why.card1.title': 'On-time delivery', 'why.card1.text': 'I respect deadlines without compromising quality.', 'why.card2.title': 'Clear communication', 'why.card2.text': 'You stay informed at every stage of the project.',
        'why.card3.title': 'Attention to detail', 'why.card3.text': 'The difference between an ordinary and exceptional website is in the details.', 'why.card4.title': 'Flexible revisions', 'why.card4.text': 'Your feedback matters, and revisions are part of the process.',
        'projects.title': 'Selected Projects', 'projects.lead': 'A selection of ideas turned into practical web applications.',
        'contact.title': 'Contact Me', 'contact.lead': 'Have a project idea? Get in touch and let us turn it into reality.', 'contact.phone': 'Phone Number',
        'form.name': 'Full Name', 'form.email': 'Email Address', 'form.subject': 'Subject', 'form.message': 'Your message here', 'form.send': 'Send via WhatsApp',
        'form.success': 'WhatsApp opened with your message. Complete the sending there.', 'footer.role': 'Front-End Developer', 'footer.credit': 'Designed & Developed by', 'footer.rights': 'All rights reserved',
        'modal.preview': 'Preview', 'modal.source': 'Source Code', 'project.view': 'View project', 'project.repo': 'Project source code', 'language': 'عربي'
    }
};

const languageStorageKey = 'portfolio-language-v2';
let currentLanguage = localStorage.getItem(languageStorageKey) || 'en';

function getProjectText(project, field) {
    return project[`${field}${currentLanguage === 'en' ? 'En' : 'Ar'}`] || project[field] || '';
}

function applyLanguage(language) {
    currentLanguage = language;
    const isArabic = language === 'ar';
    document.documentElement.lang = language;
    document.documentElement.dir = isArabic ? 'rtl' : 'ltr';
    document.querySelectorAll('[data-i18n]').forEach(element => {
        element.textContent = translations[language][element.dataset.i18n];
    });
    document.querySelectorAll('[data-i18n-placeholder]').forEach(element => {
        element.placeholder = translations[language][element.dataset.i18nPlaceholder];
    });
    const languageToggle = document.getElementById('languageToggle');
    if (languageToggle) {
        languageToggle.textContent = translations[language].language;
        languageToggle.setAttribute('aria-label', isArabic ? 'Switch to English' : 'التبديل إلى العربية');
    }
    localStorage.setItem(languageStorageKey, language);
    document.title = isArabic ? 'إسلام مصباح | مطور واجهات أمامية' : 'Islam Misbah | Front-End Developer';
    if (targetElement) {
        targetElement.textContent = '';
        charIndex = 0;
        typeData = isArabic ? heroTexts.ar : heroTexts.en;
        typeStarted = false;
        startTyping();
    }
    if (whyEl) {
        whyTextIndex = 0;
        whyCharIndex = 0;
        whyDeleting = false;
        whyEl.textContent = '';
    }
    if (projects.length && projectsGrid) {
        projectsGrid.innerHTML = '';
        projects.forEach(project => {
            const card = buildProjectCard(project);
            projectsGrid.appendChild(card);
            observer.observe(card);
        });
    }
}

const heroTexts = {
    ar: 'أحوّل الأفكار المعقدة إلى تجارب رقمية سلسة وجذابة باستخدام تقنيات الويب الحديثة.',
    en: 'I turn complex ideas into smooth, engaging digital experiences using modern web technologies.'
};
let typeData = heroTexts.ar;
let projects = [];

// ==================== PRELOADER ====================
window.addEventListener('load', () => {
    document.querySelector('.preloader').classList.add('fade-out');
});


// ==================== DETECT MOBILE ====================
const isMobile = () => window.innerWidth <= 1024;


// ==================== HERO TYPING EFFECT ====================
let charIndex = 0;
const targetElement = document.getElementById("heroDescription");
const descContainer = document.getElementById("heroDescContainer");
let typeStarted = false;

function typeEffect() {
    if (charIndex < typeData.length) {
        targetElement.textContent += typeData.charAt(charIndex);
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

const languageToggle = document.getElementById('languageToggle');
if (languageToggle) {
    languageToggle.addEventListener('click', () => {
        applyLanguage(currentLanguage === 'ar' ? 'en' : 'ar');
    });
}

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
            <img src="${project.image}" alt="${getProjectText(project, 'title')}">
        </div>
        <div class="project-info">
            <div class="project-tags">${previewTags}</div>
            <h3>${getProjectText(project, 'title')}</h3>
            <p>${getProjectText(project, 'shortDesc')}</p>
            <div class="project-links">
                <button class="open-project-btn" aria-label="${translations[currentLanguage]['project.view']}"><i class="fas fa-eye"></i></button>
                <a href="${project.repoLink || '#'}" target="_blank" aria-label="${translations[currentLanguage]['project.repo']}"><i class="fab fa-github"></i></a>
            </div>
        </div>
    `;

    card.querySelector('.open-project-btn').addEventListener('click', () => openProjectModal(project));

    return card;
}

// Remembers where the user was scrolled to before the modal locked the page,
// so we can restore it exactly when the modal closes.
let scrollPositionBeforeModal = 0;

function lockPageScroll() {
    scrollPositionBeforeModal = window.scrollY || document.documentElement.scrollTop;

    // overflow:hidden on body alone isn't enough on many browsers/mobile devices
    // because the actual scrolling element is often <html>, not <body>. Also,
    // iOS Safari ignores overflow:hidden for touch-scrolling entirely.
    // Fixing the body in place is the reliable, cross-browser way to fully
    // stop background scroll (desktop + mobile) while a modal is open.
    document.documentElement.classList.add('modal-open');
    document.body.classList.add('modal-open');
    document.body.style.position = 'fixed';
    document.body.style.top = `-${scrollPositionBeforeModal}px`;
    document.body.style.left = '0';
    document.body.style.right = '0';
}

function unlockPageScroll() {
    document.documentElement.classList.remove('modal-open');
    document.body.classList.remove('modal-open');
    document.body.style.position = '';
    document.body.style.top = '';
    document.body.style.left = '';
    document.body.style.right = '';

    // Restore the exact scroll position instantly (no smooth animation)
    window.scrollTo({ top: scrollPositionBeforeModal, behavior: 'instant' });
}

function openProjectModal(project) {
    document.getElementById('modalTitle').textContent = getProjectText(project, 'title');
    document.getElementById('modalDesc').textContent = getProjectText(project, 'fullDesc') || getProjectText(project, 'shortDesc');
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
    lockPageScroll();
}

function closeProjectModal() {
    modal.classList.remove('open');
    unlockPageScroll();
}

if (projectsGrid) {
    fetch('projects.json')
        .then(res => res.json())
        .then(loadedProjects => {
            projects = loadedProjects;
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

const whyTextsEn = [
    'I write maintainable code, not just code that works.',
    'I understand design and translate it with precision.',
    'I communicate clearly and respect agreed deadlines.',
    'I care about the user experience as much as the code.',
    'Your project deserves thoughtful attention at every step.'
];

let whyTextIndex = 0;
let whyCharIndex = 0;
let whyDeleting = false;
let whyStarted = false;

const whyEl = document.getElementById('whyTyped');
const whyTypingWrapper = document.querySelector('.why-typing-wrapper');
const whyTextSide = document.querySelector('.why-text-side');

// The typing effect cycles through texts of different lengths forever.
// Without a fixed height, the box grows/shrinks as lines wrap, which pushes
// everything below it (including the Projects section) up and down —
// this is what causes the page to "shake". We measure the tallest possible
// rendered text once and lock the box to that height so it never changes.
function lockWhyBoxHeight() {
    if (!whyTypingWrapper || !whyTextSide) return;

    const clone = whyTypingWrapper.cloneNode(false);
    clone.style.position = 'absolute';
    clone.style.visibility = 'hidden';
    clone.style.pointerEvents = 'none';
    clone.style.width = whyTypingWrapper.offsetWidth + 'px';
    clone.style.height = 'auto';
    document.body.appendChild(clone);

    let maxHeight = 0;
    [...whyTexts, ...whyTextsEn].forEach(text => {
        clone.textContent = text;
        maxHeight = Math.max(maxHeight, clone.scrollHeight);
    });

    document.body.removeChild(clone);

    // Account for the card's own top+bottom padding (3rem + 3rem = 96px)
    const neededHeight = maxHeight + 96;
    whyTextSide.style.minHeight = Math.max(320, neededHeight) + 'px';
}

// Wrapping depends on the current width, so recompute after fonts load
// (font metrics affect wrapping) and whenever the viewport is resized.
// Run once immediately so the box has a sensible height from first paint,
// then refine after fonts finish loading (font metrics affect wrapping).
lockWhyBoxHeight();
if (document.fonts && document.fonts.ready) {
    document.fonts.ready.then(lockWhyBoxHeight);
}

let whyResizeTimeout;
window.addEventListener('resize', () => {
    clearTimeout(whyResizeTimeout);
    whyResizeTimeout = setTimeout(lockWhyBoxHeight, 200);
});

let whyTimeoutId = null;

function whyType() {
    const current = (currentLanguage === 'ar' ? whyTexts : whyTextsEn)[whyTextIndex];

    if (!whyDeleting) {
        // Typing forward
        whyEl.textContent = current.substring(0, whyCharIndex + 1);
        whyCharIndex++;

        if (whyCharIndex === current.length) {
            whyDeleting = true;
            whyTimeoutId = setTimeout(whyType, 2200);
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

    whyTimeoutId = setTimeout(whyType, whyDeleting ? 22 : 40);
}

const whySection = document.getElementById('why-me');

if (whySection) {
    const whyObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                if (!whyStarted) {
                    // First time it becomes visible: start typing.
                    whyStarted = true;
                    whyTimeoutId = setTimeout(whyType, 400);
                } else if (whyTimeoutId === null) {
                    // Was paused while scrolled away: resume from where it stopped.
                    whyTimeoutId = setTimeout(whyType, 400);
                }
            } else if (whyTimeoutId !== null) {
                // Not on screen: stop scheduling further ticks entirely.
                clearTimeout(whyTimeoutId);
                whyTimeoutId = null;
            }
        });
    }, { threshold: 0.3 });

    whyObserver.observe(whySection);
}

applyLanguage(currentLanguage);


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
        successMsg.textContent = translations[currentLanguage]['form.success'];
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
