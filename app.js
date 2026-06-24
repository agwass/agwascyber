const WHATSAPP_LINK = "https://wa.me/254781917121";
const PHONE_LINK = "tel:+254781917121";
const EMAIL_LINK = "mailto:agwassagwass@gmail.com";

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
    </svg>`
};

/* ======================================
   CONTACT ACTIONS
====================================== */

function handleWhatsAppClick() {
    window.open(WHATSAPP_LINK, "_blank");
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
                <img src="${service.logo}"
                     alt="${service.title}">
            </div>`;
        }

        if (service.icon) {

            logoHTML = `
            <div class="service-logo"
                 style="background:#15803D;color:white;">
                ${iconSvgs[service.icon]}
            </div>`;
        }

        const card = document.createElement("div");

        card.className = "service-card";

        card.style.transitionDelay =
            `${index * 0.05}s`;

        card.innerHTML = `
        <div class="service-header">
            ${logoHTML}
            <h3 class="service-title">
                ${service.title}
            </h3>
        </div>

        <p class="service-description">
            ${service.description}
        </p>

        <div class="service-actions">
            ${service.actions.map((action, i) => `
                <button
                    class="service-action-btn ${i===0 ? "primary" : ""}"
                    onclick="handleWhatsAppClick()">
                    <span>${action}</span>
                    <span>→</span>
                </button>
            `).join("")}
        </div>
        `;

        grid.appendChild(card);
    });
}

/* ======================================
   MOBILE MENU FIX
====================================== */

let menuOpen = false;

function openMobileMenu() {

    const menu =
        document.getElementById("mobileMenu");

    const overlay =
        document.getElementById("mobileMenuOverlay");

    const button =
        document.getElementById("mobileMenuBtn");

    if (!menu) return;

    menu.classList.add("active");

    overlay?.classList.add("active");

    button?.classList.add("active");

    button?.setAttribute(
        "aria-expanded",
        "true"
    );

    document.body.style.overflow = "hidden";

    menuOpen = true;
}

function closeMobileMenu() {

    const menu =
        document.getElementById("mobileMenu");

    const overlay =
        document.getElementById("mobileMenuOverlay");

    const button =
        document.getElementById("mobileMenuBtn");

    menu?.classList.remove("active");

    overlay?.classList.remove("active");

    button?.classList.remove("active");

    button?.setAttribute(
        "aria-expanded",
        "false"
    );

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

    const button =
        document.getElementById("mobileMenuBtn");

    const overlay =
        document.getElementById("mobileMenuOverlay");

    const links =
        document.querySelectorAll(".mobile-menu-link");

    button?.addEventListener(
        "click",
        toggleMobileMenu
    );

    overlay?.addEventListener(
        "click",
        closeMobileMenu
    );

    links.forEach(link => {

        link.addEventListener("click", e => {

            e.preventDefault();

            const target =
                link.dataset.section;

            closeMobileMenu();

            setTimeout(() => {
                scrollToSection(target);
            }, 200);
        });
    });

    document.addEventListener(
        "keydown",
        e => {

            if (
                e.key === "Escape" &&
                menuOpen
            ) {
                closeMobileMenu();
            }
        }
    );

    window.addEventListener(
        "resize",
        () => {

            if (
                window.innerWidth >= 768 &&
                menuOpen
            ) {
                closeMobileMenu();
            }
        }
    );
}

/* ======================================
   SCROLL EFFECTS
====================================== */

function initScrollEffects() {

    const progressFill =
        document.getElementById("progressFill");

    const scrollButton =
        document.getElementById("scrollToTop");

    const sections =
        document.querySelectorAll("section");

    window.addEventListener(
        "scroll",
        () => {

            const scrollTop =
                document.documentElement.scrollTop;

            const scrollHeight =
                document.documentElement.scrollHeight -
                document.documentElement.clientHeight;

            const progress =
                (scrollTop / scrollHeight) * 100;

            if (progressFill) {
                progressFill.style.width =
                    progress + "%";
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

                const sectionTop =
                    section.offsetTop - 200;

                if (
                    scrollY >= sectionTop
                ) {
                    currentSection =
                        section.getAttribute("id");
                }
            });

            document
                .querySelectorAll(".nav-link")
                .forEach(link => {

                    link.classList.remove("active");

                    if (
                        link.dataset.section ===
                        currentSection
                    ) {
                        link.classList.add("active");
                    }
                });

            document
                .querySelectorAll(".dot")
                .forEach(dot => {

                    dot.classList.remove("active");

                    if (
                        dot.dataset.target ===
                        currentSection
                    ) {
                        dot.classList.add("active");
                    }
                });
        },
        { passive: true }
    );
}

/* ======================================
   ANIMATIONS
====================================== */

function initIntersectionObserver() {

    const observer =
        new IntersectionObserver(
            entries => {

                entries.forEach(entry => {

                    if (
                        entry.isIntersecting
                    ) {

                        entry.target.classList.add(
                            "visible"
                        );

                        observer.unobserve(
                            entry.target
                        );
                    }
                });
            },
            {
                threshold: 0.1
            }
        );

    document
        .querySelectorAll(
            ".service-card,.about-card,.about-content,.stat,.contact-card,.hiw-card"
        )
        .forEach(el => {
            observer.observe(el);
        });
}

/* ======================================
   INITIALIZATION
====================================== */

document.addEventListener(
    "DOMContentLoaded",
    () => {

        renderServices();

        initMobileMenu();

        initScrollEffects();

        initIntersectionObserver();
    }
);