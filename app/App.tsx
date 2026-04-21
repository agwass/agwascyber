import { Button } from "@/app/components/ui/button";
import { ServiceCard } from "@/app/components/ServiceCard";
import {
  FileText,
  Heart,
  GraduationCap,
  Building2,
  Shield,
  Globe,
  Wallet,
  Car,
  Home,
  Briefcase,
  Users,
  FileCheck,
  MessageCircle,
  Phone,
  ArrowRight,
  Menu,
  X,
  ChevronDown,
  ArrowUp,
  MousePointerClick,
  Sparkles,
  Target,
} from "lucide-react";
import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "motion/react";

// Import brand logo
import brandLogo from "figma:asset/373d4d9c79809d5281533b005aa39573f86bcdad.png";

// Import government logos
import ecitizenLogo from "figma:asset/bac1bd887696bd3ed265fe1018f22550cc2b9736.png";
import kraLogo from "figma:asset/cf2c6a6d089fdb3f9f92be4d2d7141bd21685c3a.png";
import coatOfArms from "figma:asset/01911940a83d7998d81f5d6ae9a19ae1d64d4128.png";
import nssfLogo from "figma:asset/d597b97452f379e4c1752dddf78f9275f08b3758.png";
import ntsaLogo from "figma:asset/e3d827b62c59c2037577575aa720efe6008e291e.png";
import tscLogo from "figma:asset/f7f9e96ac5d38eb816b09c39d9a8e6619afebe31.png";
import shaLogo from "figma:asset/3337450bc6fbefd9afc3c8b63d6fd5b556e7f4c9.png";
import helbLogo from "figma:asset/cc122e45179bf4b84974175231e07a09ce9582d4.png";

export default function App() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [showScrollHint, setShowScrollHint] = useState(true);
  const [activeSection, setActiveSection] = useState("hero");
  const [showScrollToTop, setShowScrollToTop] = useState(false);
  const [showHelpIndicator, setShowHelpIndicator] =
    useState(true);
  const [completedActions, setCompletedActions] = useState({
    hero: false,
    services: false,
    about: false,
  });
  const [activeSectionIndex, setActiveSectionIndex] =
    useState(0);

  const sections = ["hero", "services", "about"];

  useEffect(() => {
    const handleIntersection = (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const id = entry.target.id;
          setActiveSection(id);
          setActiveSectionIndex(sections.indexOf(id));

          // Mark section as completed for first-time visitors
          if (!completedActions[id]) {
            setCompletedActions((prev) => ({
              ...prev,
              [id]: true,
            }));

            // Trigger success animation for first visit
            if (id === "services" && entry.target) {
              entry.target.classList.add("section-highlight");
              setTimeout(() => {
                entry.target.classList.remove(
                  "section-highlight",
                );
              }, 1500);
            }
          }
        }
      });
    };

    const observer = new IntersectionObserver(
      handleIntersection,
      {
        threshold: 0.3,
        rootMargin: "-10% 0px -70% 0px",
      },
    );

    // Observe all sections
    sections.forEach((id) => {
      const element = document.getElementById(id);
      if (element) observer.observe(element);
    });

    return () => observer.disconnect();
  }, [completedActions]);

  useEffect(() => {
    const handleScroll = () => {
      // Show scroll-to-top button after 500px
      setShowScrollToTop(window.scrollY > 500);

      // Hide help indicator after first scroll
      if (window.scrollY > 100 && showHelpIndicator) {
        setShowHelpIndicator(false);
      }

      // Hide scroll hint after scrolling down
      if (window.scrollY > 100) {
        setShowScrollHint(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () =>
      window.removeEventListener("scroll", handleScroll);
  }, [showHelpIndicator]);

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      // Close mobile menu if open
      setMobileMenuOpen(false);

      // Add visual feedback for the clicked nav item
      const navItems = document.querySelectorAll("nav a");
      navItems.forEach((item) =>
        item.classList.remove("active-nav"),
      );

      // Scroll with smooth behavior and offset for header
      window.scrollTo({
        top: element.offsetTop - 80,
        behavior: "smooth",
      });

      // Pulse animation on the target section
      setTimeout(() => {
        element.classList.add("section-pulse");
        setTimeout(
          () => element.classList.remove("section-pulse"),
          1000,
        );
      }, 300);
    }
  };

  const highlightActionableElements = () => {
    // Highlight CTA buttons sequentially
    const ctas = [
      { selector: '[data-cta="whatsapp"]', delay: 1000 },
      { selector: '[data-cta="phone"]', delay: 2000 },
      { selector: '[data-cta="service-0"]', delay: 3000 },
    ];

    ctas.forEach((cta, index) => {
      setTimeout(() => {
        const element = document.querySelector(cta.selector);
        if (element) {
          element.classList.add("pulse-guide");
          setTimeout(
            () => element.classList.remove("pulse-guide"),
            1500,
          );
        }
      }, cta.delay);
    });

    // Mark that guidance was shown
    localStorage.setItem("agwasGuidanceShown", "true");
  };

  useEffect(() => {
    const guidanceShown = localStorage.getItem(
      "agwasGuidanceShown",
    );
    if (!guidanceShown && window.innerWidth > 768) {
      setTimeout(highlightActionableElements, 2000);
    }
  }, []);

  const handleWhatsAppClick = () => {
    window.open("https://wa.me/254781917121", "_blank");
  };

  const services = [
    {
      logo: ecitizenLogo,
      title: "eCitizen Services",
      description:
        "eCitizen account help, applications, downloads",
      primaryColor: "bg-red-600",
      actions: [
        {
          label: "Recover Account",
          onClick: handleWhatsAppClick,
        },
        {
          label: "Access Account",
          onClick: handleWhatsAppClick,
        },
        {
          label: "Download eDocuments",
          onClick: handleWhatsAppClick,
        },
      ],
    },
    {
      logo: kraLogo,
      title: "KRA Services",
      description:
        "PIN registration, returns filing, compliance support",
      primaryColor: "bg-green-700",
      actions: [
        {
          label: "File Tax Returns",
          onClick: handleWhatsAppClick,
        },
        {
          label: "Register New PIN",
          onClick: handleWhatsAppClick,
        },
        {
          label: "Recover Lost PIN",
          onClick: handleWhatsAppClick,
        },
      ],
    },
    {
      logo: shaLogo,
      title: "SHA Services",
      description:
        "SHA registration, Add dependants, contribution support",
      primaryColor: "bg-red-600",
      actions: [
        {
          label: "Register for SHA",
          onClick: handleWhatsAppClick,
        },
        {
          label: "Add Dependants",
          onClick: handleWhatsAppClick,
        },
        {
          label: "Update Phone Number",
          onClick: handleWhatsAppClick,
        },
      ],
    },
    {
      logo: tscLogo,
      title: "TSC Services",
      description:
        "Teachers Service Commission registration and support",
      primaryColor: "bg-green-700",
      actions: [
        {
          label: "Apply for TSC Number",
          onClick: handleWhatsAppClick,
        },
        {
          label: "Check Application Status",
          onClick: handleWhatsAppClick,
        },
        {
          label: "T-Pay",
          onClick: handleWhatsAppClick,
        },
      ],
    },
    {
      logo: helbLogo,
      title: "HELB Services",
      description:
        "Student loan application, loan balance check",
      primaryColor: "bg-red-600",
      actions: [
        {
          label: "Apply for Loan",
          onClick: handleWhatsAppClick,
        },
        {
          label: "Check Loan Status",
          onClick: handleWhatsAppClick,
        },
        {
          label: "Repay Loan",
          onClick: handleWhatsAppClick,
        },
      ],
    },
    {
      logo: nssfLogo,
      title: "NSSF Services",
      description:
        "NSSF registration, contributor status, compliance support",
      primaryColor: "bg-green-700",
      actions: [
        {
          label: "Check NSSF Status",
          onClick: handleWhatsAppClick,
        },
        {
          label: "Replace NSSF Card",
          onClick: handleWhatsAppClick,
        },
        {
          label: "Pay NSSF Contribution",
          onClick: handleWhatsAppClick,
        },
      ],
    },
    {
      logo: kraLogo,
      title: "Tax Compliance",
      description:
        "Tax clearance, ITax portal support, VAT registration",
      primaryColor: "bg-red-600",
      actions: [
        {
          label: "Apply Tax Clearance",
          onClick: handleWhatsAppClick,
        },
        {
          label: "VAT Registration",
          onClick: handleWhatsAppClick,
        },
        {
          label: "Download Tax Certificate",
          onClick: handleWhatsAppClick,
        },
      ],
    },
    {
      logo: ntsaLogo,
      title: "NTSA Services",
      description:
        "Driving license, vehicle registration, logbook services",
      primaryColor: "bg-green-700",
      actions: [
        {
          label: "Renew Driving License",
          onClick: handleWhatsAppClick,
        },
        {
          label: "Apply for PDL",
          onClick: handleWhatsAppClick,
        },
        {
          label: "Apply for Smart Card",
          onClick: handleWhatsAppClick,
        },
      ],
    },
    {
      logo: coatOfArms,
      title: "Passport Services",
      description: "Passport application,Passport renewal,Passport tracking",
      primaryColor: "bg-red-600",
      actions: [
        {
          label: "Apply Passport",
          onClick: handleWhatsAppClick,
        },
        {
          label: "Renew Passport",
          onClick: handleWhatsAppClick,
        },
        {
          label: "Track Application",
          onClick: handleWhatsAppClick,
        },
      ],
    },
    {
      logo: coatOfArms,
      title: "Job Application Services",
      description:
        "CV writing, Job search, Application support, Oversees job application",

      primaryColor: "bg-green-700",
      icon: Briefcase,
      actions: [
        {
          label: "Write CV",
          onClick: handleWhatsAppClick,
        },
        {
          label: "Job Search Help",
          onClick: handleWhatsAppClick,
        },
        {
          label: "Application Support",
          onClick: handleWhatsAppClick,
        },
      ],
    },

    {
      logo: ecitizenLogo,
      title: "Business Registration Services",
      description:
        "Register business name, Company registry, Download e-Documents",
      primaryColor: "bg-green-700",
      actions: [
        {
          label: "Register Business Name",
          onClick: handleWhatsAppClick,
        },
        {
          label: "Company Registry",
          onClick: handleWhatsAppClick,
        },
        {
          label: "Download e-Documents",
          onClick: handleWhatsAppClick,
        },
      ],
    },

    {
      logo: ecitizenLogo,
      title: "e-Citizen Services",
      description:
        "Marriage certificate, Persons with disability, Kenya fisheries services",
      primaryColor: "bg-green-700",
      actions: [
        {
          label: "Apply Marriage Certificate",
          onClick: handleWhatsAppClick,
        },
        {
          label: "PWD Registration",
          onClick: handleWhatsAppClick,
        },
        {
          label: "Kenya Fisheries Services",
          onClick: handleWhatsAppClick,
        },
      ],
    },
  ];

  const handleAgentClick = () => {
    console.log("Talk to an agent");
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Progress Indicator */}
      <div className="fixed top-0 left-0 right-0 z-50 h-1 bg-gray-200">
        <motion.div
          className="h-full bg-gradient-to-r from-green-700 via-red-600 to-black"
          animate={{
            width: `${(activeSectionIndex / 2) * 100}%`,
          }}
          transition={{ duration: 0.3 }}
        />
      </div>

      {/* Section Indicator Dots */}
      <div className="fixed right-6 top-1/2 -translate-y-1/2 z-40 hidden lg:flex flex-col gap-3">
        {sections.map((section, index) => (
          <motion.button
            key={section}
            onClick={() => scrollToSection(section)}
            className="relative group"
            whileHover={{ scale: 1.2 }}
            whileTap={{ scale: 0.9 }}
          >
            <motion.div
              className={`w-3 h-3 rounded-full ${
                activeSection === section
                  ? "bg-green-700 ring-4 ring-green-700/30"
                  : "bg-gray-400"
              }`}
              animate={
                activeSection === section
                  ? {
                      scale: [1, 1.2, 1],
                      transition: {
                        repeat: Infinity,
                        duration: 2,
                      },
                    }
                  : {}
              }
            />
            <div
              className="absolute right-full mr-2 top-1/2 -translate-y-1/2 
              bg-gray-900 text-white text-xs px-2 py-1 rounded opacity-0 
              group-hover:opacity-100 transition-opacity whitespace-nowrap"
            >
              {section.charAt(0).toUpperCase() +
                section.slice(1)}
            </div>
          </motion.button>
        ))}
      </div>

      {/* Header */}
      <header className="bg-gradient-to-r from-black via-red-700 to-green-700 text-white shadow-lg sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div>
              <span className="font-bold text-2xl block">
                Agwas Cyber Cafe
              </span>
              <span className="text-xs text-green-100">
                Huduma Kwa Wote
              </span>
            </div>
            <nav className="hidden md:flex items-center gap-6">
              {["Home", "Services", "About", "Contact"].map(
                (item) => (
                  <motion.a
                    key={item}
                    href={`#${item.toLowerCase()}`}
                    onClick={(e) => {
                      e.preventDefault();
                      if (item === "Home") {
                        scrollToSection("hero");
                      } else if (item === "Contact") {
                        scrollToSection("contact");
                      } else {
                        scrollToSection(item.toLowerCase());
                      }
                    }}
                    className={`relative text-white hover:text-green-200 transition px-2 py-1 rounded-lg ${
                      (item === "Home" &&
                        activeSection === "hero") ||
                      activeSection === item.toLowerCase()
                        ? "bg-white/10"
                        : ""
                    }`}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    {item}
                    {((item === "Home" &&
                      activeSection === "hero") ||
                      activeSection === item.toLowerCase()) && (
                      <motion.div
                        className="absolute -bottom-1 left-0 right-0 h-0.5 bg-green-300"
                        layoutId="navbar-indicator"
                      />
                    )}
                  </motion.a>
                ),
              )}
            </nav>
            <button
              className="md:hidden text-white"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              {mobileMenuOpen ? (
                <X className="w-6 h-6" />
              ) : (
                <Menu className="w-6 h-6" />
              )}
            </button>
          </div>

          {/* Mobile Menu */}
          {mobileMenuOpen && (
            <div className="md:hidden mt-4 pb-4 border-t border-white/20 pt-4">
              <nav className="flex flex-col gap-4">
                <a
                  href="#hero"
                  className="text-white hover:text-green-200 transition py-2"
                  onClick={(e) => {
                    e.preventDefault();
                    scrollToSection("hero");
                  }}
                >
                  Home
                </a>
                <a
                  href="#services"
                  className="text-white hover:text-green-200 transition py-2"
                  onClick={(e) => {
                    e.preventDefault();
                    scrollToSection("services");
                  }}
                >
                  Services
                </a>
                <a
                  href="#about"
                  className="text-white hover:text-green-200 transition py-2"
                  onClick={(e) => {
                    e.preventDefault();
                    scrollToSection("about");
                  }}
                >
                  About
                </a>
                <a
                  href="#contact"
                  className="text-white hover:text-green-200 transition py-2"
                  onClick={(e) => {
                    e.preventDefault();
                    scrollToSection("contact");
                  }}
                >
                  Contact
                </a>
              </nav>
            </div>
          )}
        </div>
      </header>

      {/* Hero Section */}
      <section
        id="hero"
        className="relative bg-gradient-to-br from-green-50 via-white to-red-50 py-16 md:py-24 overflow-hidden"
      >
        {/* Kenyan Pattern Background */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-black via-red-600 to-green-700"></div>
          <div className="absolute bottom-0 left-0 w-full h-2 bg-gradient-to-r from-green-700 via-red-600 to-black"></div>
          <svg
            className="w-full h-full"
            xmlns="http://www.w3.org/2000/svg"
          >
            <pattern
              id="kenyan-pattern"
              x="0"
              y="0"
              width="100"
              height="100"
              patternUnits="userSpaceOnUse"
            >
              <circle cx="50" cy="50" r="2" fill="#000" />
              <circle cx="25" cy="25" r="2" fill="#DC2626" />
              <circle cx="75" cy="75" r="2" fill="#15803D" />
            </pattern>
            <rect
              width="100%"
              height="100%"
              fill="url(#kenyan-pattern)"
            />
          </svg>
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              <span className="text-green-700">
                Online Cyber Services
              </span>
            </h1>
            <p className="text-lg text-gray-700 mb-8">
              Karibu! Get instant help with KRA, HELB, NHIF,
              NSSF, and many more online services. Our expert
              team is ready to guide you through every step -
              Haraka haraka haina baraka!
            </p>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center relative">
              {showHelpIndicator && (
                <motion.div
                  className="absolute -top-10 left-1/2 -translate-x-1/2 bg-green-700 text-white px-4 py-2 rounded-lg flex items-center gap-2"
                  initial={{ opacity: 0, y: -20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 1 }}
                >
                  <MousePointerClick className="w-4 h-4" />
                  <span className="text-sm">Start here!</span>
                  <motion.div
                    className="absolute -bottom-2 left-1/2 w-4 h-4 bg-green-700 rotate-45"
                    animate={{
                      y: [0, 5, 0],
                    }}
                    transition={{
                      duration: 1.5,
                      repeat: Infinity,
                    }}
                  />
                </motion.div>
              )}

              <motion.div
                data-cta="whatsapp"
                className="w-full sm:w-72"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                <Button
                  size="lg"
                  className="bg-green-700 hover:bg-green-800 text-white px-8 py-6 text-lg shadow-lg w-full transition-all duration-200 relative overflow-hidden group"
                  onClick={handleWhatsAppClick}
                >
                  {/* Ripple effect */}
                  <motion.div
                    className="absolute inset-0 bg-white opacity-0 group-hover:opacity-10"
                    initial={false}
                    whileHover={{ scale: 2 }}
                    transition={{ duration: 0.5 }}
                  />
                  <MessageCircle className="w-5 h-5 mr-2" />
                  Chat on WhatsApp
                  <ArrowRight className="w-5 h-5 ml-2" />
                  {/* Success checkmark on click */}
                  <motion.div
                    className="absolute -right-8 group-hover:right-4 transition-all duration-300"
                    initial={false}
                    animate={false}
                  >
                    <Sparkles className="w-5 h-5 text-yellow-300" />
                  </motion.div>
                </Button>
              </motion.div>
              <motion.div
                data-cta="phone"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                <Button
                  size="lg"
                  variant="outline"
                  className="border-2 border-red-600 text-red-600 hover:bg-red-50 px-8 py-6 text-lg shadow-lg w-full sm:w-72 transition-all duration-200"
                  onClick={() =>
                    (window.location.href = "tel:+254781917121")
                  }
                >
                  <Phone className="w-5 h-5 mr-2" />
                  Talk to an Agent
                  <ArrowRight className="w-5 h-5 ml-2" />
                </Button>
              </motion.div>
            </div>

            {/* Trust Badge */}
            <div className="mt-8 flex flex-wrap items-center justify-center gap-4 text-sm text-gray-600">
              <div className="flex items-center gap-2">
                <Shield className="w-4 h-4 text-green-700" />
                <span>Trusted by 1000 + Kenyans</span>
              </div>
              <div className="w-1 h-1 bg-gray-400 rounded-full"></div>
              <div className="flex items-center gap-2">
                <Users className="w-4 h-4 text-green-700" />
                <span>24/7 Support</span>
              </div>
            </div>
          </div>
        </div>

        {/* Scroll Hint */}
        {showScrollHint && (
          <motion.div
            className="absolute bottom-8 left-1/2 -translate-x-1/2"
            animate={{
              y: [0, 8, 0],
            }}
            transition={{
              duration: 1.5,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          >
            <ChevronDown className="w-6 h-6 text-gray-400 opacity-50" />
          </motion.div>
        )}
      </section>

      {/* Services Section */}
      <section
        id="services"
        className="py-16 bg-gradient-to-b from-white to-green-50"
      >
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <div className="inline-block w-16 h-1 bg-gradient-to-r from-green-700 via-red-600 to-black mb-4"></div>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Our Services
            </h2>
            <p className="text-lg text-gray-600">
              Huduma zetu za haraka na za uhakika - Quick access
              to our most popular virtual assistance services
            </p>
          </div>

          <motion.div
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 gap-6"
            variants={{
              hidden: { opacity: 0 },
              show: {
                opacity: 1,
                transition: {
                  staggerChildren: 0.1,
                  delayChildren: 0.2,
                },
              },
            }}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: "-100px" }}
          >
            {services.map((service, index) => (
              <motion.div
                key={index}
                data-cta={`service-${index}`}
                variants={{
                  hidden: { opacity: 0, y: 20 },
                  show: { opacity: 1, y: 0 },
                }}
                whileHover={{
                  y: -5,
                  transition: { duration: 0.2 },
                }}
                whileTap={{ scale: 0.98 }}
              >
                <ServiceCard
                  icon={service.icon}
                  title={service.title}
                  description={service.description}
                  actions={service.actions}
                  primaryColor={service.primaryColor}
                  logo={service.logo}
                />
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* About Us Section */}
      <section
        id="about"
        className="py-16 md:py-24 bg-gradient-to-br from-white via-green-50 to-white relative overflow-hidden"
      >
        {/* Decorative Background Pattern */}
        <div className="absolute inset-0 opacity-5">
          <svg
            className="w-full h-full"
            xmlns="http://www.w3.org/2000/svg"
          >
            <pattern
              id="about-pattern"
              x="0"
              y="0"
              width="80"
              height="80"
              patternUnits="userSpaceOnUse"
            >
              <circle cx="40" cy="40" r="1.5" fill="#15803D" />
              <circle cx="20" cy="20" r="1.5" fill="#DC2626" />
              <circle cx="60" cy="60" r="1.5" fill="#000" />
            </pattern>
            <rect
              width="100%"
              height="100%"
              fill="url(#about-pattern)"
            />
          </svg>
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center mb-12">
            <div className="inline-block w-16 h-1 bg-gradient-to-r from-green-700 via-red-600 to-black mb-4"></div>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              About Us
            </h2>
            <p className="text-lg text-gray-600">
              Kuhusu Sisi - Learn more about our journey and
              mission
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
              {/* Founded Card */}
              <motion.div
                className="bg-white rounded-xl border-2 border-green-700 p-6 shadow-lg text-center"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.4, delay: 0 }}
              >
                <div className="w-16 h-16 bg-green-700 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Shield className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold mb-2 text-green-700">
                  Founded
                </h3>
                <p className="text-2xl font-bold text-gray-800">
                  January 2024
                </p>
                <p className="text-sm text-gray-600 mt-2">
                  Beginning our journey
                </p>
              </motion.div>

              {/* Mission Card */}
              <motion.div
                className="bg-white rounded-xl border-2 border-red-600 p-6 shadow-lg text-center"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.4, delay: 0.15 }}
              >
                <div className="w-16 h-16 bg-red-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Users className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold mb-2 text-red-600">
                  Our Mission
                </h3>
                <p className="text-gray-700 text-sm leading-relaxed">
                  Solving problems for customers accessing
                  services
                </p>
              </motion.div>

              {/* Vision Card */}
              <motion.div
                className="bg-white rounded-xl border-2 border-black p-6 shadow-lg text-center"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.4, delay: 0.3 }}
              >
                <div className="w-16 h-16 bg-black rounded-full flex items-center justify-center mx-auto mb-4">
                  <Briefcase className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold mb-2 text-black">
                  Our Vision
                </h3>
                <p className="text-gray-700 text-sm leading-relaxed">
                  Leading Digital Assistance startup in Kenya
                </p>
              </motion.div>
            </div>

            {/* Main Content */}
            <div className="bg-white rounded-2xl shadow-xl p-8 md:p-12 border border-gray-200">
              <div className="prose max-w-none">
                <p className="text-lg text-gray-700 leading-relaxed mb-6 text-center">
                  <span className="font-semibold text-green-700">
                    Agwas Cyber Cafe
                  </span>{" "}
                  was founded in January 2024 to bridge the gap
                  between Kenyan citizens and essential
                  government services. We make navigating KRA,
                  HELB, NSSF, eCitizen, and other platforms easy
                  and stress-free.
                </p>
                <div className="bg-gradient-to-r from-green-50 via-red-50 to-green-50 rounded-xl p-6 border-l-4 border-green-700">
                  <p className="text-gray-800 italic text-center font-medium">
                    "Huduma Kwa Wote - Services for All. We
                    believe every Kenyan deserves easy access to
                    services, and we're committed to making that
                    a reality."
                  </p>
                </div>
              </div>
            </div>

            {/* Stats Section */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-12">
              <div className="text-center">
                <div className="text-3xl md:text-4xl font-bold text-green-700 mb-2">
                  1000+
                </div>
                <div className="text-sm text-gray-600">
                  Happy Customers
                </div>
              </div>
              <div className="text-center">
                <div className="text-3xl md:text-4xl font-bold text-red-600 mb-2">
                  10+
                </div>
                <div className="text-sm text-gray-600">
                  Services Offered
                </div>
              </div>
              <div className="text-center">
                <div className="text-3xl md:text-4xl font-bold text-green-700 mb-2">
                  24/7
                </div>
                <div className="text-sm text-gray-600">
                  Support Available
                </div>
              </div>
              <div className="text-center">
                <div className="text-3xl md:text-4xl font-bold text-red-600 mb-2">
                  90%
                </div>
                <div className="text-sm text-gray-600">
                  Success Rate
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section
        id="contact"
        className="py-16 md:py-24 bg-gradient-to-br from-white via-red-50 to-white relative overflow-hidden"
      >
        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center mb-12">
            <div className="inline-block w-16 h-1 bg-gradient-to-r from-green-700 via-red-600 to-black mb-4"></div>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Contact Us
            </h2>
            <p className="text-lg text-gray-600">
              Wasiliana Nasi - Get in touch with us
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            <div className="bg-white rounded-2xl shadow-xl p-8 md:p-12 border border-gray-200">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {/* Contact Information */}
                <div>
                  <h3 className="text-2xl font-bold mb-6 text-green-700">
                    Get In Touch
                  </h3>
                  <div className="space-y-4">
                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center flex-shrink-0">
                        <Phone className="w-6 h-6 text-green-700" />
                      </div>
                      <div>
                        <h4 className="font-semibold text-gray-800 mb-1">
                          Phone
                        </h4>
                        <p className="text-gray-600">
                          +254 781 917 121
                        </p>
                        <p className="text-sm text-gray-500 mt-1">
                          Mon-Sun, 6AM-9PM EAT
                        </p>
                      </div>
                    </div>

                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 bg-red-100 rounded-lg flex items-center justify-center flex-shrink-0">
                        <MessageCircle className="w-6 h-6 text-red-600" />
                      </div>
                      <div>
                        <h4 className="font-semibold text-gray-800 mb-1">
                          WhatsApp
                        </h4>
                        <p className="text-gray-600">
                          +254 781 917 121
                        </p>
                        <p className="text-sm text-gray-500 mt-1">
                          Available 24/7
                        </p>
                      </div>
                    </div>

                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center flex-shrink-0">
                        <Globe className="w-6 h-6 text-green-700" />
                      </div>
                      <div>
                        <h4 className="font-semibold text-gray-800 mb-1">
                          Email
                        </h4>
                        <p className="text-gray-600">
                          agwassagwass@gmail.com
                        </p>
                        <p className="text-sm text-gray-500 mt-1">
                          We'll respond within 5 minutes
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Quick Action Buttons */}
                <div>
                  <h3 className="text-2xl font-bold mb-6 text-red-600">
                    Quick Actions
                  </h3>
                  <div className="space-y-4">
                    <Button
                      size="lg"
                      className="w-full bg-green-700 hover:bg-green-800 text-white px-6 py-6 text-lg shadow-md transition-all duration-200"
                      onClick={handleWhatsAppClick}
                    >
                      <MessageCircle className="w-5 h-5 mr-2" />
                      Chat on WhatsApp
                      <ArrowRight className="w-5 h-5 ml-2" />
                    </Button>

                    <Button
                      size="lg"
                      variant="outline"
                      className="w-full border-2 border-red-600 text-red-600 hover:bg-red-50 px-6 py-6 text-lg shadow-md transition-all duration-200"
                      onClick={() =>
                        (window.location.href =
                          "tel:+254781917121")
                      }
                    >
                      <Phone className="w-5 h-5 mr-2" />
                      Call Us Now
                      <ArrowRight className="w-5 h-5 ml-2" />
                    </Button>

                    <Button
                      size="lg"
                      variant="outline"
                      className="w-full border-2 border-green-700 text-green-700 hover:bg-green-50 px-6 py-6 text-lg shadow-md transition-all duration-200"
                      onClick={() =>
                        (window.location.href =
                          "mailto:agwassagwass@gmail.com")
                      }
                    >
                      <Globe className="w-5 h-5 mr-2" />
                      Send Email
                      <ArrowRight className="w-5 h-5 ml-2" />
                    </Button>
                  </div>

                  <div className="mt-8 p-4 bg-gradient-to-r from-green-50 to-red-50 rounded-lg border border-green-200">
                    <p className="text-sm text-gray-700 text-center">
                      <span className="font-semibold">
                        Karibu!
                      </span>{" "}
                      We're here to help with all your
                      government service needs.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gradient-to-br from-black via-gray-900 to-black text-white py-12 border-t-4 border-green-700">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div>
              <div className="flex items-center gap-3 mb-4">
                <div className="relative w-12 h-12 bg-white rounded-lg flex items-center justify-center shadow-md">
                  <Shield className="w-7 h-7 text-green-700" />
                  <div className="absolute -top-1 -right-1 w-3 h-3 bg-red-600 rounded-full border-2 border-white"></div>
                </div>
                <div>
                  <span className="font-bold text-xl block">
                    Agwas Cyber Cafe
                  </span>
                  <span className="text-xs text-green-200">
                    Huduma Kwa Wote
                  </span>
                </div>
              </div>
              <p className="text-gray-400">
                Your trusted partner for navigating Kenyan Cyber
                services. Tuko pamoja!
              </p>
            </div>
            <div>
              <h3 className="font-semibold mb-4 text-green-300">
                Quick Links
              </h3>
              <ul className="space-y-2 text-gray-400">
                <li>
                  <a
                    href="#services"
                    className="hover:text-green-300 transition"
                    onClick={(e) => {
                      e.preventDefault();
                      scrollToSection("services");
                    }}
                  >
                    Services
                  </a>
                </li>
                <li>
                  <a
                    href="#about"
                    className="hover:text-green-300 transition"
                    onClick={(e) => {
                      e.preventDefault();
                      scrollToSection("about");
                    }}
                  >
                    About Us
                  </a>
                </li>
                <li>
                  <a
                    href="/privacy"
                    className="hover:text-green-300 transition"
                    onClick={(e) => {
                      e.preventDefault();
                      window.location.href = "/privacy";
                    }}
                  >
                    Privacy Policy
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold mb-4 text-green-300">
                Contact
              </h3>
              <ul className="space-y-2 text-gray-400">
                <li>Email: agwassagwass@gmail.com</li>
                <li>Phone: +254 781 917 121</li>
                <li>Hours: Mon-Fri, 8AM-6PM EAT</li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-800 mt-8 pt-8">
            <div className="flex flex-col md:flex-row items-center justify-between gap-4">
              <p className="text-gray-400 text-center md:text-left">
                &copy; 2026 Agwas Cyber Cafe. All rights
                reserved.
              </p>
              <div className="flex items-center gap-2">
                <div className="w-6 h-1 bg-black"></div>
                <div className="w-6 h-1 bg-red-600"></div>
                <div className="w-6 h-1 bg-green-700"></div>
              </div>
            </div>
          </div>
        </div>
      </footer>

      {/* Scroll to Top Button */}
      <AnimatePresence>
        {showScrollToTop && (
          <motion.button
            initial={{ opacity: 0, scale: 0.5, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.5, y: 20 }}
            whileHover={{ scale: 1.1, rotate: 5 }}
            whileTap={{ scale: 0.9 }}
            onClick={() =>
              window.scrollTo({ top: 0, behavior: "smooth" })
            }
            className="fixed bottom-8 right-8 z-40 bg-gradient-to-r from-green-700 to-red-600 text-white p-4 rounded-full shadow-xl hover:shadow-2xl transition-shadow"
          >
            <ArrowUp className="w-6 h-6" />
          </motion.button>
        )}
      </AnimatePresence>

      {/* First-time User Guidance Overlay */}
      <AnimatePresence>
        {showHelpIndicator && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-30 pointer-events-none"
          >
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
              <motion.div
                className="text-green-700 text-center"
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 2, repeat: Infinity }}
              >
                <MousePointerClick className="w-8 h-8 mx-auto mb-2" />
                <p className="text-sm font-medium">
                  Scroll to explore services
                </p>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* CSS Animations */}
      <style>{`
        .section-pulse {
          animation: sectionPulse 1s ease-in-out;
        }

        @keyframes sectionPulse {
          0%,
          100% {
            box-shadow: 0 0 0 0 rgba(21, 128, 61, 0);
          }
          50% {
            box-shadow: 0 0 0 20px rgba(21, 128, 61, 0.1);
          }
        }

        .pulse-guide {
          animation: guidePulse 1.5s ease-in-out;
        }

        @keyframes guidePulse {
          0%,
          100% {
            box-shadow: 0 0 0 0 rgba(59, 130, 246, 0.5);
          }
          50% {
            box-shadow: 0 0 0 15px rgba(59, 130, 246, 0);
          }
        }

        .section-highlight {
          animation: highlightFade 1.5s ease-in-out;
        }

        @keyframes highlightFade {
          0% {
            background-color: rgba(254, 243, 199, 0);
          }
          20% {
            background-color: rgba(254, 243, 199, 0.3);
          }
          100% {
            background-color: rgba(254, 243, 199, 0);
          }
        }

        .active-nav {
          background: linear-gradient(
            90deg,
            transparent,
            rgba(255, 255, 255, 0.1),
            transparent
          );
        }
      `}</style>
    </div>
  );
}