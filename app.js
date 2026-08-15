const WHATSAPP_LINK = "https://wa.me/254781917121";
const PHONE_LINK = "tel:+254781917121";
const EMAIL_LINK = "mailto:agwascyber@gmail.com";

// ===== WHATSAPP MESSAGE TEMPLATES =====
const WHATSAPP_MESSAGE = "Hi%20Agwas%20Cyber%20Cafe%2C%20I%20need%20help%20with%20cyber%20services";
const WHATSAPP_DIASPORA_MESSAGE = "Hi%20Agwas%20Cyber%20Cafe%2C%20I%20need%20diaspora%20services";

// ===== WHATSAPP ICON SVG (official style) =====
const WHATSAPP_ICON = `<svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
    <path d="M12.032 21.965c-1.917 0-3.763-.547-5.338-1.565l-3.927 1.29 1.29-3.833c-1.118-1.598-1.714-3.479-1.714-5.43 0-5.465 4.445-9.91 9.91-9.91 2.647 0 5.134 1.032 7.004 2.903 1.87 1.87 2.903 4.357 2.903 7.004 0 5.465-4.445 9.91-9.91 9.91h-.009zm0-18.128c-4.533 0-8.221 3.688-8.221 8.221 0 1.681.509 3.318 1.47 4.687l.158.231-.848 2.52 2.606-.848.225.144c1.349.834 2.909 1.274 4.51 1.274 4.534 0 8.222-3.688 8.222-8.222s-3.688-8.221-8.222-8.221h.001zm4.847 6.236c-.205-.089-.802-.396-.902-.441-.099-.044-.238-.067-.339.067-.101.134-.392.441-.48.531-.089.09-.178.101-.328.034-.15-.068-.632-.233-1.204-.743-.444-.397-.744-.887-.831-1.037-.089-.15-.009-.231.067-.306.067-.067.15-.178.224-.267.075-.09.101-.15.151-.25.05-.1.025-.189-.012-.266-.038-.078-.339-.818-.465-1.12-.123-.294-.248-.254-.34-.258-.089-.004-.19-.005-.292-.005-.101 0-.267.038-.406.189-.139.15-.532.521-.532 1.271 0 .75.546 1.476.622 1.578.076.101 1.075 1.641 2.603 2.299.364.157.648.25.87.32.365.117.697.1.96.061.293-.044.802-.328.915-.644.113-.316.113-.586.079-.643-.034-.057-.124-.09-.328-.177z"/>
</svg>`;

const servicesData = [
    {
        title: "eCitizen Services",
        description: "eCitizen account help, applications, downloads",
        logo: "./images/ecitizen.png",
        actions: ["Recover Account", "Access Account", "Download eDocuments"]
    },
    {
        title: "KRA Services",
        description: "PIN registration, returns filing, compliance support",
        logo: "./images/kra.png",
        actions: ["File Tax Returns", "Register New PIN", "Recover Lost PIN"]
    },
    {
        title: "SHA Services",
        description: "SHA registration, Add dependants, contribution support",
        logo: "./images/sha.png",
        actions: ["Register for SHA", "Add Dependants", "Update Phone Number"]
    },
    {
        title: "TSC Services",
        description: "Teachers Service Commission registration and support",
        logo: "./images/tsc.png",
        actions: ["Apply for TSC Number", "Check Application Status", "T-Pay"]
    },
    {
        title: "HELB Services",
        description: "Student loan application, loan balance check",
        logo: "./images/helb.png",
        actions: ["Apply for Loan", "Check Loan Status", "Repay Loan"]
    },
    {
        title: "NSSF Services",
        description: "NSSF registration, contributor status, compliance support",
        logo: "./images/nssf.png",
        actions: ["Check NSSF Status", "Replace NSSF Card", "Pay NSSF Contribution"]
    },
    {
        title: "Tax Compliance",
        description: "Tax clearance, ITax portal support, VAT registration",
        logo: "./images/kra.png",
        actions: ["Apply Tax Clearance", "VAT Registration", "Download Tax Certificate"]
    },
    {
        title: "NTSA Services",
        description: "Driving license, vehicle registration, logbook services",
        logo: "./images/ntsa.png",
        actions: ["Renew Driving License", "Apply for PDL", "Apply for Smart Card"]
    },
    {
        title: "Passport Services",
        description: "Passport application, Passport renewal, Passport tracking",
        logo: "./images/coatofarms.png",
        actions: ["Apply Passport", "Renew Passport", "Track Application"]
    },
    {
        title: "Job Application Services",
        description: "CV writing, Job search, Application support",
        icon: "briefcase",
        actions: ["Write CV", "Job Search Help", "Application Support"]
    },
    {
        title: "Business Registration Services",
        description: "Register business name, Company registry",
        logo: "./images/ecitizen.png",
        actions: ["Register Business Name", "Company Registry", "Download Documents"]
    },
    {
        title: "Digital & Creative Services",
        description: "Web Design, UI/UX, Social Media Management — boost your brand online",
        icon: "digital",
        actions: ["Web Design", "UI/UX Design", "Social Media Management"]
    }
];

const iconSvgs = {
    briefcase: `
    <svg width="24" height="24" viewBox="0 0 24 24"
        fill="none" stroke="currentColor"
        stroke-width="2" stroke-linecap="round"
        stroke-linejoin="round">
        <rect x="2" y="7" width="20" height="14" rx="2"></rect>
        <path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"></path>
    </svg>`,
    digital: `
    <svg width="24" height="24" viewBox="0 0 24 24"
        fill="none" stroke="currentColor"
        stroke-width="2" stroke-linecap="round"
        stroke-linejoin="round">
        <rect x="2" y="3" width="20" height="14" rx="2" ry="2"></rect>
        <line x1="8" y1="21" x2="16" y2="21"></line>
        <line x1="12" y1="17" x2="12" y2="21"></line>
        <path d="M4 8h16"></path>
        <path d="M4 12h10"></path>
    </svg>`
};

/* ======================================
   CONTACT ACTIONS (secure)
====================================== */

function handleWhatsAppClick() {
    window.open(WHATSAPP_LINK + "?text=" + WHATSAPP_MESSAGE, "_blank", "noopener,noreferrer");
}

function handlePhoneClick() {
    window.location.href = PHONE_LINK;
}

function handleEmailClick() {
    window.location.href = EMAIL_LINK;
}

/* ======================================
   SCROLL FUNCTIONS
====================================== */

function scrollToSection(id) {
    const section = document.getElementById(id);
    if (!section) return;
    closeMobileMenu();
    const headerOffset = 80;
    const offsetPosition =
        section.getBoundingClientRect().top +
        window.pageYOffset -
        headerOffset;
    window.scrollTo({
        top: offsetPosition,
        behavior: "smooth"
    });
}

function scrollToTop() {
    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
}

/* ======================================
   SERVICES RENDERING
====================================== */

function renderServices() {
    const grid = document.getElementById("servicesGrid");
    if (!grid) return;
    grid.innerHTML = "";

    servicesData.forEach((service, index) => {
        let logoHTML = "";
        if (service.logo) {
            logoHTML = `
            <div class="service-logo">
                <img src="${service.logo}" alt="${service.title} - Agwas Cyber Cafe">
            </div>`;
        }
        if (service.icon && iconSvgs[service.icon]) {
            logoHTML = `
            <div class="service-logo" style="background:#15803D;color:white;">
                ${iconSvgs[service.icon]}
            </div>`;
        }

        const card = document.createElement("div");
        card.className = "service-card";
        card.style.transitionDelay = `${index * 0.05}s`;

        card.innerHTML = `
        <div class="service-header">
            ${logoHTML}
            <h3 class="service-title">${service.title}</h3>
        </div>
        <p class="service-description">${service.description}</p>
        <div class="service-actions">
            ${service.actions.map((action, i) => `
                <button class="service-action-btn ${i===0 ? "primary" : ""}" data-action="whatsapp" aria-label="Get ${service.title} - ${action}">
                    <span>${action}</span>
                    <span>→</span>
                </button>
            `).join("")}
        </div>
        `;

        const actionBtns = card.querySelectorAll(".service-action-btn");
        actionBtns.forEach(btn => {
            btn.addEventListener("click", handleWhatsAppClick);
        });

        grid.appendChild(card);
    });
}

/* ======================================
   MOBILE MENU
====================================== */

let menuOpen = false;

function openMobileMenu() {
    const menu = document.getElementById("mobileMenu");
    const overlay = document.getElementById("mobileMenuOverlay");
    const button = document.getElementById("mobileMenuBtn");
    if (!menu) return;
    menu.classList.add("active");
    overlay?.classList.add("active");
    button?.classList.add("active");
    button?.setAttribute("aria-expanded", "true");
    document.body.style.overflow = "hidden";
    menuOpen = true;
}

function closeMobileMenu() {
    const menu = document.getElementById("mobileMenu");
    const overlay = document.getElementById("mobileMenuOverlay");
    const button = document.getElementById("mobileMenuBtn");
    menu?.classList.remove("active");
    overlay?.classList.remove("active");
    button?.classList.remove("active");
    button?.setAttribute("aria-expanded", "false");
    document.body.style.overflow = "";
    menuOpen = false;
}

function toggleMobileMenu() {
    if (menuOpen) {
        closeMobileMenu();
    } else {
        openMobileMenu();
    }
}

function initMobileMenu() {
    const button = document.getElementById("mobileMenuBtn");
    const overlay = document.getElementById("mobileMenuOverlay");
    const links = document.querySelectorAll(".mobile-menu-link");

    button?.addEventListener("click", toggleMobileMenu);
    overlay?.addEventListener("click", closeMobileMenu);

    links.forEach(link => {
        link.addEventListener("click", function(e) {
            const href = this.getAttribute('href');
            if (href && (href.includes('.html') || href.startsWith('http'))) {
                return;
            }
            e.preventDefault();
            const target = this.dataset.section;
            if (target) {
                closeMobileMenu();
                setTimeout(() => {
                    scrollToSection(target);
                }, 200);
            }
        });
    });

    document.addEventListener("keydown", e => {
        if (e.key === "Escape" && menuOpen) {
            closeMobileMenu();
        }
    });

    window.addEventListener("resize", () => {
        if (window.innerWidth >= 768 && menuOpen) {
            closeMobileMenu();
        }
    });
}

/* ======================================
   SCROLL EFFECTS
====================================== */

function initScrollEffects() {
    const progressFill = document.getElementById("progressFill");
    const scrollButton = document.getElementById("scrollToTop");
    const sections = document.querySelectorAll("section");

    window.addEventListener("scroll", () => {
        const scrollTop = document.documentElement.scrollTop;
        const scrollHeight =
            document.documentElement.scrollHeight -
            document.documentElement.clientHeight;
        const progress = (scrollTop / scrollHeight) * 100;
        if (progressFill) {
            progressFill.style.width = progress + "%";
        }
        if (scrollButton) {
            if (scrollTop > 500) {
                scrollButton.classList.add("visible");
            } else {
                scrollButton.classList.remove("visible");
            }
        }

        let currentSection = "";
        sections.forEach(section => {
            const sectionTop = section.offsetTop - 200;
            if (window.scrollY >= sectionTop) {
                currentSection = section.getAttribute("id");
            }
        });

        document.querySelectorAll(".nav-link:not([href*='.html'])").forEach(link => {
            link.classList.remove("active");
            if (link.dataset.section === currentSection) {
                link.classList.add("active");
            }
        });

        document.querySelectorAll(".dot").forEach(dot => {
            dot.classList.remove("active");
            if (dot.dataset.target === currentSection) {
                dot.classList.add("active");
            }
        });
    }, { passive: true });
}

/* ======================================
   ANIMATIONS (Intersection Observer)
====================================== */

function initIntersectionObserver() {
    const observer = new IntersectionObserver(
        entries => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add("visible");
                    observer.unobserve(entry.target);
                }
            });
        },
        { threshold: 0.1 }
    );

    document.querySelectorAll(
        ".service-card,.review-card,.about-card,.about-content,.stat,.contact-card,.hiw-card,.hiw-step-4"
    ).forEach(el => {
        observer.observe(el);
    });
}

/* ======================================
   FLOATING WHATSAPP BUTTON - Track Clicks
====================================== */

function initWhatsAppFloat() {
    const floatBtn = document.querySelector('.whatsapp-float');
    if (floatBtn) {
        floatBtn.addEventListener('click', function() {
            if (typeof gtag === 'function') {
                gtag('event', 'click', {
                    'event_category': 'WhatsApp',
                    'event_label': 'Floating Button',
                    'value': 1
                });
            }
        });
    }
}

/* ======================================
   INITIALIZATION
====================================== */

document.addEventListener("DOMContentLoaded", () => {
    renderServices();
    initMobileMenu();
    initScrollEffects();
    initIntersectionObserver();
    initWhatsAppFloat();

    // ---- Attach event listeners for buttons ----
    document.getElementById("heroWhatsAppBtn")?.addEventListener("click", handleWhatsAppClick);
    document.getElementById("heroPhoneBtn")?.addEventListener("click", handlePhoneClick);
    document.getElementById("hiwWhatsAppBtn")?.addEventListener("click", handleWhatsAppClick);
    document.getElementById("contactWhatsAppBtn")?.addEventListener("click", handleWhatsAppClick);
    document.getElementById("contactPhoneBtn")?.addEventListener("click", handlePhoneClick);
    document.getElementById("contactEmailBtn")?.addEventListener("click", handleEmailClick);
    document.getElementById("scrollToTop")?.addEventListener("click", scrollToTop);

    document.querySelectorAll(".dot").forEach(dot => {
        dot.addEventListener("click", function() {
            const target = this.dataset.target;
            if (target) scrollToSection(target);
        });
    });

    document.querySelectorAll(".nav-link:not([href*='.html'])").forEach(link => {
        link.addEventListener("click", function(e) {
            e.preventDefault();
            const target = this.dataset.section;
            if (target) scrollToSection(target);
        });
    });

    document.querySelectorAll(".footer-list a[data-section]").forEach(link => {
        link.addEventListener("click", function(e) {
            e.preventDefault();
            const target = this.dataset.section;
            if (target) scrollToSection(target);
        });
    });
});