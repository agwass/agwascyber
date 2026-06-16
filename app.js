const WHATSAPP_LINK = "https://wa.me/254781917121";
const PHONE_LINK = "tel:+254781917121";
const EMAIL_LINK = "mailto:agwassagwass@gmail.com";

const servicesData = [
    { title: "eCitizen Services", description: "eCitizen account help, applications, downloads", logo: "./images/ecitizen.png", color: "bg-red-600", actions: ["Recover Account", "Access Account", "Download eDocuments"] },
    { title: "KRA Services", description: "PIN registration, returns filing, compliance support", logo: "./images/kra.png", color: "bg-green-700", actions: ["File Tax Returns", "Register New PIN", "Recover Lost PIN"] },
    { title: "SHA Services", description: "SHA registration, Add dependants, contribution support", logo: "./images/sha.png", color: "bg-red-600", actions: ["Register for SHA", "Add Dependants", "Update Phone Number"] },
    { title: "TSC Services", description: "Teachers Service Commission registration and support", logo: "./images/tsc.png", color: "bg-green-700", actions: ["Apply for TSC Number", "Check Application Status", "T-Pay"] },
    { title: "HELB Services", description: "Student loan application, loan balance check", logo: "./images/helb.png", color: "bg-red-600", actions: ["Apply for Loan", "Check Loan Status", "Repay Loan"] },
    { title: "NSSF Services", description: "NSSF registration, contributor status, compliance support", logo: "./images/nssf.png", color: "bg-green-700", actions: ["Check NSSF Status", "Replace NSSF Card", "Pay NSSF Contribution"] },
    { title: "Tax Compliance", description: "Tax clearance, ITax portal support, VAT registration", logo: "./images/kra.png", color: "bg-red-600", actions: ["Apply Tax Clearance", "VAT Registration", "Download Tax Certificate"] },
    { title: "NTSA Services", description: "Driving license, vehicle registration, logbook services", logo: "./images/ntsa.png", color: "bg-green-700", actions: ["Renew Driving License", "Apply for PDL", "Apply for Smart Card"] },
    { title: "Passport Services", description: "Passport application, Passport renewal, Passport tracking", logo: "./images/coatofarms.png", color: "bg-red-600", actions: ["Apply Passport", "Renew Passport", "Track Application"] },
    { title: "Job Application Services", description: "CV writing, Job search, Application support, Overseas job application", icon: "briefcase", color: "bg-green-700", actions: ["Write CV", "Job Search Help", "Application Support"] },
    { title: "Business Registration Services", description: "Register business name, Company registry, Download e-Documents", logo: "./images/ecitizen.png", color: "bg-green-700", actions: ["Register Business Name", "Company Registry", "Download e-Documents"] },
    { title: "e-Citizen Services", description: "Marriage certificate, Persons with disability, Kenya fisheries services", logo: "./images/ecitizen.png", color: "bg-green-700", actions: ["Apply Marriage Certificate", "PWD Registration", "Kenya Fisheries Services"] }
];

const iconSvgs = {
    briefcase: `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="2" y="7" width="20" height="14" rx="2" ry="2"></rect><path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"></path></svg>`
};

function renderServices() {
    const grid = document.getElementById('servicesGrid');
    if (!grid) return;

    const fragment = document.createDocumentFragment();

    servicesData.forEach((service, index) => {
        let logoHtml = '';
        if (service.logo) {
            logoHtml = `<div class="service-logo"><img src="${service.logo}" alt="${service.title} Logo" loading="lazy" decoding="async"></div>`;
        } else if (service.icon && iconSvgs[service.icon]) {
            const bgColor = service.color === 'bg-red-600' ? 'var(--red-600)' : 'var(--green-700)';
            logoHtml = `<div class="service-logo" style="background-color: ${bgColor}; color: white;">${iconSvgs[service.icon]}</div>`;
        }

        const actionsHtml = service.actions.map((action, actionIndex) => {
            const isPrimary = actionIndex === 0;
            return `
                <button 
                    class="service-action-btn ${isPrimary ? 'primary' : ''}" 
                    onclick="handleWhatsAppClick()"
                    aria-label="${action}"
                >
                    <span>${action}</span>
                    <svg class="arrow" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
                        <line x1="5" y1="12" x2="19" y2="12"></line>
                        <polyline points="12 5 19 12 12 19"></polyline>
                    </svg>
                </button>
            `;
        }).join('');

        const card = document.createElement('div');
        card.className = 'service-card';
        card.style.transitionDelay = `${index * 0.05}s`;
        card.innerHTML = `
            <div class="service-header">
                ${logoHtml}
                <h3 class="service-title">${service.title}</h3>
            </div>
            <p class="service-description">${service.description}</p>
            <div class="service-actions">
                ${actionsHtml}
            </div>
        `;
        fragment.appendChild(card);
    });

    grid.appendChild(fragment);
}

function handleWhatsAppClick() { 
    window.open(WHATSAPP_LINK, '_blank', 'noopener,noreferrer'); 
}

function handlePhoneClick() { 
    window.location.href = PHONE_LINK; 
}

function handleEmailClick() { 
    window.location.href = EMAIL_LINK; 
}

function scrollToSection(id) {
    const element = document.getElementById(id);
    if (element) {
        closeMobileMenu();
        const offset = 80;
        const elementPosition = element.getBoundingClientRect().top + window.pageYOffset;
        const offsetPosition = elementPosition - offset;
        window.scrollTo({ top: offsetPosition, behavior: 'smooth' });
    }
}

function scrollToTop() { 
    window.scrollTo({ top: 0, behavior: 'smooth' }); 
}

// ============================================
// MOBILE MENU - DEFINITIVE FIX
// ============================================
let menuOpen = false;

function openMobileMenu() {
    const menu = document.getElementById('mobileMenu');
    const overlay = document.getElementById('mobileMenuOverlay');
    const btn = document.getElementById('mobileMenuBtn');
    
    if (menu) {
        menu.classList.add('active');
        menu.setAttribute('aria-hidden', 'false');
    }
    if (overlay) overlay.classList.add('active');
    if (btn) {
        btn.classList.add('active');
        btn.setAttribute('aria-expanded', 'true');
    }
    document.body.classList.add('menu-open');
    menuOpen = true;
}

function closeMobileMenu() {
    const menu = document.getElementById('mobileMenu');
    const overlay = document.getElementById('mobileMenuOverlay');
    const btn = document.getElementById('mobileMenuBtn');
    
    if (menu) {
        menu.classList.remove('active');
        menu.setAttribute('aria-hidden', 'true');
    }
    if (overlay) overlay.classList.remove('active');
    if (btn) {
        btn.classList.remove('active');
        btn.setAttribute('aria-expanded', 'false');
    }
    document.body.classList.remove('menu-open');
    menuOpen = false;
}

function toggleMobileMenu() {
    if (menuOpen) {
        closeMobileMenu();
    } else {
        openMobileMenu();
    }
}

let ticking = false;
let lastScrollY = 0;

function initScrollEffects() {
    const progressFill = document.getElementById('progressFill');
    const scrollToTopBtn = document.getElementById('scrollToTop');
    const scrollHint = document.getElementById('scrollHint');
    const dots = document.querySelectorAll('.dot');
    const navLinks = document.querySelectorAll('.nav-link');
    const sections = ['hero', 'services', 'about', 'contact'];

    function updateScrollEffects() {
        const winScroll = lastScrollY;
        const height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
        const scrolled = (winScroll / height) * 100;
        
        if (progressFill) progressFill.style.width = scrolled + '%';
        
        if (scrollToTopBtn) {
            if (winScroll > 500) scrollToTopBtn.classList.add('visible');
            else scrollToTopBtn.classList.remove('visible');
        }
        
        if (scrollHint && winScroll > 100) {
            scrollHint.style.display = 'none';
        }

        let current = '';
        sections.forEach(section => {
            const element = document.getElementById(section);
            if (element) {
                const sectionTop = element.offsetTop;
                if (winScroll >= sectionTop - 200) current = section;
            }
        });

        navLinks.forEach(link => {
            link.classList.remove('active');
            if (link.getAttribute('data-section') === current) link.classList.add('active');
        });

        dots.forEach(dot => {
            dot.classList.remove('active');
            if (dot.getAttribute('data-target') === current) dot.classList.add('active');
        });

        ticking = false;
    }

    function onScroll() {
        lastScrollY = window.scrollY;
        if (!ticking) {
            window.requestAnimationFrame(updateScrollEffects);
            ticking = true;
        }
    }

    window.addEventListener('scroll', onScroll, { passive: true });
}

function initIntersectionObserver() {
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                observer.unobserve(entry.target);
            }
        });
    }, { 
        threshold: 0.1, 
        rootMargin: '0px 0px -50px 0px' 
    });

    const elements = document.querySelectorAll('.service-card, .about-card, .about-content, .stat, .contact-card');
    elements.forEach(el => observer.observe(el));
}

function initMobileMenu() {
    const btn = document.getElementById('mobileMenuBtn');
    const overlay = document.getElementById('mobileMenuOverlay');
    const menuLinks = document.querySelectorAll('.mobile-menu-link');
    
    if (btn) {
        btn.addEventListener('click', (e) => {
            e.stopPropagation();
            toggleMobileMenu();
        });
    }
    
    if (overlay) {
        overlay.addEventListener('click', closeMobileMenu);
    }
    
    menuLinks.forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            const section = link.getAttribute('data-section');
            closeMobileMenu();
            setTimeout(() => scrollToSection(section), 300);
        });
    });
    
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape' && menuOpen) {
            closeMobileMenu();
        }
    });
    
    window.addEventListener('resize', () => {
        if (window.innerWidth >= 768 && menuOpen) {
            closeMobileMenu();
        }
    });
    
    const menu = document.getElementById('mobileMenu');
    if (menu) {
        menu.addEventListener('click', (e) => {
            e.stopPropagation();
        });
    }
}

document.addEventListener('DOMContentLoaded', () => {
    renderServices();
    initScrollEffects();
    initMobileMenu();
    
    if ('requestIdleCallback' in window) {
        requestIdleCallback(() => {
            setTimeout(initIntersectionObserver, 100);
        });
    } else {
        setTimeout(initIntersectionObserver, 100);
    }
});