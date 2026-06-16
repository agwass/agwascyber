// ============================================
// CONFIGURATION
// ============================================
const WHATSAPP_LINK = "https://wa.me/254781917121";
const PHONE_LINK = "tel:+254781917121";
const EMAIL_LINK = "mailto:agwassagwass@gmail.com";

// ============================================
// SERVICES DATA
// ============================================
const servicesData = [
    {
        title: "eCitizen Services",
        description: "eCitizen account help, applications, downloads",
        logo: "./images/ecitizen.png",
        color: "bg-red-600",
        actions: ["Recover Account", "Access Account", "Download eDocuments"]
    },
    {
        title: "KRA Services",
        description: "PIN registration, returns filing, compliance support",
        logo: "./images/kra.png",
        color: "bg-green-700",
        actions: ["File Tax Returns", "Register New PIN", "Recover Lost PIN"]
    },
    {
        title: "SHA Services",
        description: "SHA registration, Add dependants, contribution support",
        logo: "./images/sha.png",
        color: "bg-red-600",
        actions: ["Register for SHA", "Add Dependants", "Update Phone Number"]
    },
    {
        title: "TSC Services",
        description: "Teachers Service Commission registration and support",
        logo: "./images/tsc.png",
        color: "bg-green-700",
        actions: ["Apply for TSC Number", "Check Application Status", "T-Pay"]
    },
    {
        title: "HELB Services",
        description: "Student loan application, loan balance check",
        logo: "./images/helb.png",
        color: "bg-red-600",
        actions: ["Apply for Loan", "Check Loan Status", "Repay Loan"]
    },
    {
        title: "NSSF Services",
        description: "NSSF registration, contributor status, compliance support",
        logo: "./images/nssf.png",
        color: "bg-green-700",
        actions: ["Check NSSF Status", "Replace NSSF Card", "Pay NSSF Contribution"]
    },
    {
        title: "Tax Compliance",
        description: "Tax clearance, ITax portal support, VAT registration",
        logo: "./images/kra.png",
        color: "bg-red-600",
        actions: ["Apply Tax Clearance", "VAT Registration", "Download Tax Certificate"]
    },
    {
        title: "NTSA Services",
        description: "Driving license, vehicle registration, logbook services",
        logo: "./images/ntsa.png",
        color: "bg-green-700",
        actions: ["Renew Driving License", "Apply for PDL", "Apply for Smart Card"]
    },
    {
        title: "Passport Services",
        description: "Passport application, Passport renewal, Passport tracking",
        logo: "./images/coatofarms.png",
        color: "bg-red-600",
        actions: ["Apply Passport", "Renew Passport", "Track Application"]
    },
    {
        title: "Job Application Services",
        description: "CV writing, Job search, Application support, Overseas job application",
        icon: "briefcase",
        color: "bg-green-700",
        actions: ["Write CV", "Job Search Help", "Application Support"]
    },
    {
        title: "Business Registration Services",
        description: "Register business name, Company registry, Download e-Documents",
        logo: "./images/ecitizen.png",
        color: "bg-green-700",
        actions: ["Register Business Name", "Company Registry", "Download e-Documents"]
    },
    {
        title: "e-Citizen Services",
        description: "Marriage certificate, Persons with disability, Kenya fisheries services",
        logo: "./images/ecitizen.png",
        color: "bg-green-700",
        actions: ["Apply Marriage Certificate", "PWD Registration", "Kenya Fisheries Services"]
    }
];

const iconSvgs = {
    briefcase: `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="2" y="7" width="20" height="14" rx="2" ry="2"></rect><path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"></path></svg>`
};

// ============================================
// RENDER SERVICES
// ============================================
function renderServices() {
    const grid = document.getElementById('servicesGrid');
    if (!grid) return;

    grid.innerHTML = servicesData.map((service, index) => {
        let logoHtml = '';
        if (service.logo) {
            logoHtml = `<div class="service-logo"><img src="${service.logo}" alt="${service.title} Logo" loading="lazy"></div>`;
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
                >
                    <span>${action}</span>
                    <svg class="arrow" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                        <line x1="5" y1="12" x2="19" y2="12"></line>
                        <polyline points="12 5 19 12 12 19"></polyline>
                    </svg>
                </button>
            `;
        }).join('');

        return `
            <div class="service-card" style="transition-delay: ${index * 0.05}s">
                <div class="service-header">
                    ${logoHtml}
                    <h3 class="service-title">${service.title}</h3>
                </div>
                <p class="service-description">${service.description}</p>
                <div class="service-actions">
                    ${actionsHtml}
                </div>
            </div>
        `;
    }).join('');
}

// ============================================
// INTERACTION HANDLERS
// ============================================
function handleWhatsAppClick() { 
    window.open(WHATSAPP_LINK, '_blank'); 
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
        // Close mobile menu
        document.getElementById('mobileMenu').classList.remove('open');
        const menuIcon = document.querySelector('.menu-icon');
        const closeIcon = document.querySelector('.close-icon');
        if (menuIcon) menuIcon.style.display = 'block';
        if (closeIcon) closeIcon.style.display = 'none';
        
        const offset = 80;
        const bodyRect = document.body.getBoundingClientRect().top;
        const elementRect = element.getBoundingClientRect().top;
        const elementPosition = elementRect - bodyRect;
        const offsetPosition = elementPosition - offset;

        window.scrollTo({ top: offsetPosition, behavior: 'smooth' });
    }
}

function scrollToTop() { 
    window.scrollTo({ top: 0, behavior: 'smooth' }); 
}

// ============================================
// SCROLL & OBSERVER LOGIC
// ============================================
function initScrollEffects() {// ============================================
// CONFIGURATION
// ============================================
const WHATSAPP_LINK = "https://wa.me/254781917121";
const PHONE_LINK = "tel:+254781917121";
const EMAIL_LINK = "mailto:agwassagwass@gmail.com";

// ============================================
// SERVICES DATA
// ============================================
const servicesData = [
    {
        title: "eCitizen Services",
        description: "eCitizen account help, applications, downloads",
        logo: "./images/ecitizen.png",
        color: "bg-red-600",
        actions: ["Recover Account", "Access Account", "Download eDocuments"]
    },
    {
        title: "KRA Services",
        description: "PIN registration, returns filing, compliance support",
        logo: "./images/kra.png",
        color: "bg-green-700",
        actions: ["File Tax Returns", "Register New PIN", "Recover Lost PIN"]
    },
    {
        title: "SHA Services",
        description: "SHA registration, Add dependants, contribution support",
        logo: "./images/sha.png",
        color: "bg-red-600",
        actions: ["Register for SHA", "Add Dependants", "Update Phone Number"]
    },
    {
        title: "TSC Services",
        description: "Teachers Service Commission registration and support",
        logo: "./images/tsc.png",
        color: "bg-green-700",
        actions: ["Apply for TSC Number", "Check Application Status", "T-Pay"]
    },
    {
        title: "HELB Services",
        description: "Student loan application, loan balance check",
        logo: "./images/helb.png",
        color: "bg-red-600",
        actions: ["Apply for Loan", "Check Loan Status", "Repay Loan"]
    },
    {
        title: "NSSF Services",
        description: "NSSF registration, contributor status, compliance support",
        logo: "./images/nssf.png",
        color: "bg-green-700",
        actions: ["Check NSSF Status", "Replace NSSF Card", "Pay NSSF Contribution"]
    },
    {
        title: "Tax Compliance",
        description: "Tax clearance, ITax portal support, VAT registration",
        logo: "./images/kra.png",
        color: "bg-red-600",
        actions: ["Apply Tax Clearance", "VAT Registration", "Download Tax Certificate"]
    },
    {
        title: "NTSA Services",
        description: "Driving license, vehicle registration, logbook services",
        logo: "./images/ntsa.png",
        color: "bg-green-700",
        actions: ["Renew Driving License", "Apply for PDL", "Apply for Smart Card"]
    },
    {
        title: "Passport Services",
        description: "Passport application, Passport renewal, Passport tracking",
        logo: "./images/coatofarms.png",
        color: "bg-red-600",
        actions: ["Apply Passport", "Renew Passport", "Track Application"]
    },
    {
        title: "Job Application Services",
        description: "CV writing, Job search, Application support, Overseas job application",
        icon: "briefcase",
        color: "bg-green-700",
        actions: ["Write CV", "Job Search Help", "Application Support"]
    },
    {
        title: "Business Registration Services",
        description: "Register business name, Company registry, Download e-Documents",
        logo: "./images/ecitizen.png",
        color: "bg-green-700",
        actions: ["Register Business Name", "Company Registry", "Download e-Documents"]
    },
    {
        title: "e-Citizen Services",
        description: "Marriage certificate, Persons with disability, Kenya fisheries services",
        logo: "./images/ecitizen.png",
        color: "bg-green-700",
        actions: ["Apply Marriage Certificate", "PWD Registration", "Kenya Fisheries Services"]
    }
];

const iconSvgs = {
    briefcase: `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="2" y="7" width="20" height="14" rx="2" ry="2"></rect><path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"></path></svg>`
};

// ============================================
// RENDER SERVICES
// ============================================
function renderServices() {
    const grid = document.getElementById('servicesGrid');
    if (!grid) return;

    grid.innerHTML = servicesData.map((service, index) => {
        let logoHtml = '';
        if (service.logo) {
            logoHtml = `<div class="service-logo"><img src="${service.logo}" alt="${service.title} Logo" loading="lazy"></div>`;
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
                >
                    <span>${action}</span>
                    <svg class="arrow" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                        <line x1="5" y1="12" x2="19" y2="12"></line>
                        <polyline points="12 5 19 12 12 19"></polyline>
                    </svg>
                </button>
            `;
        }).join('');

        return `
            <div class="service-card" style="transition-delay: ${index * 0.05}s">
                <div class="service-header">
                    ${logoHtml}
                    <h3 class="service-title">${service.title}</h3>
                </div>
                <p class="service-description">${service.description}</p>
                <div class="service-actions">
                    ${actionsHtml}
                </div>
            </div>
        `;
    }).join('');
}

// ============================================
// INTERACTION HANDLERS
// ============================================
function handleWhatsAppClick() { 
    window.open(WHATSAPP_LINK, '_blank'); 
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
        // Close mobile menu
        closeMobileMenu();
        
        const offset = 80;
        const bodyRect = document.body.getBoundingClientRect().top;
        const elementRect = element.getBoundingClientRect().top;
        const elementPosition = elementRect - bodyRect;
        const offsetPosition = elementPosition - offset;

        window.scrollTo({ top: offsetPosition, behavior: 'smooth' });
    }
}

function scrollToTop() { 
    window.scrollTo({ top: 0, behavior: 'smooth' }); 
}

// ============================================
// MOBILE MENU FUNCTIONS
// ============================================
function openMobileMenu() {
    const menu = document.getElementById('mobileMenu');
    const overlay = document.getElementById('mobileMenuOverlay');
    const btn = document.getElementById('mobileMenuBtn');
    
    if (menu) menu.classList.add('active');
    if (overlay) overlay.classList.add('active');
    if (btn) {
        btn.classList.add('active');
        btn.setAttribute('aria-expanded', 'true');
    }
    if (menu) menu.setAttribute('aria-hidden', 'false');
    document.body.style.overflow = 'hidden';
}

function closeMobileMenu() {
    const menu = document.getElementById('mobileMenu');
    const overlay = document.getElementById('mobileMenuOverlay');
    const btn = document.getElementById('mobileMenuBtn');
    
    if (menu) menu.classList.remove('active');
    if (overlay) overlay.classList.remove('active');
    if (btn) {
        btn.classList.remove('active');
        btn.setAttribute('aria-expanded', 'false');
    }
    if (menu) menu.setAttribute('aria-hidden', 'true');
    document.body.style.overflow = '';
}

function toggleMobileMenu() {
    const menu = document.getElementById('mobileMenu');
    if (menu && menu.classList.contains('active')) {
        closeMobileMenu();
    } else {
        openMobileMenu();
    }
}

// ============================================
// SCROLL & OBSERVER LOGIC
// ============================================
function initScrollEffects() {
    const progressFill = document.getElementById('progressFill');
    const scrollToTopBtn = document.getElementById('scrollToTop');
    const scrollHint = document.getElementById('scrollHint');
    const dots = document.querySelectorAll('.dot');
    const sections = ['hero', 'services', 'about', 'contact'];

    window.addEventListener('scroll', () => {
        const winScroll = document.body.scrollTop || document.documentElement.scrollTop;
        const height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
        const scrolled = (winScroll / height) * 100;
        
        if (progressFill) progressFill.style.width = scrolled + '%';
        
        if (scrollToTopBtn) {
            if (winScroll > 500) scrollToTopBtn.classList.add('visible');
            else scrollToTopBtn.classList.remove('visible');
        }
        
        if (scrollHint && winScroll > 100) scrollHint.style.display = 'none';

        // Update active nav and dots
        let current = '';
        sections.forEach(section => {
            const element = document.getElementById(section);
            if (element) {
                const sectionTop = element.offsetTop;
                if (winScroll >= sectionTop - 200) current = section;
            }
        });

        document.querySelectorAll('.nav-link').forEach(link => {
            link.classList.remove('active');
            if (link.getAttribute('href') === `#${current}`) link.classList.add('active');
        });

        dots.forEach(dot => {
            dot.classList.remove('active');
            if (dot.getAttribute('data-target') === current) dot.classList.add('active');
        });
    });
}

function initIntersectionObserver() {
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                observer.unobserve(entry.target);
            }
        });
    }, { threshold: 0.1, rootMargin: '0px 0px -50px 0px' });

    document.querySelectorAll('.service-card, .about-card, .about-content, .stat, .contact-card').forEach(el => {
        observer.observe(el);
    });
}

function initMobileMenu() {
    const btn = document.getElementById('mobileMenuBtn');
    const overlay = document.getElementById('mobileMenuOverlay');
    
    // Toggle menu on button click
    if (btn) {
        btn.addEventListener('click', (e) => {
            e.stopPropagation();
            toggleMobileMenu();
        });
    }
    
    // Close menu when clicking overlay
    if (overlay) {
        overlay.addEventListener('click', closeMobileMenu);
    }
    
    // Close menu on escape key
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape') {
            closeMobileMenu();
        }
    });
    
    // Close menu when window is resized to desktop
    window.addEventListener('resize', () => {
        if (window.innerWidth >= 768) {
            closeMobileMenu();
        }
    });
}

// ============================================
// INITIALIZATION
// ============================================
document.addEventListener('DOMContentLoaded', () => {
    renderServices();
    initScrollEffects();
    initMobileMenu();
    setTimeout(initIntersectionObserver, 100);
});
