/* =========================================================
   MOBILE NAVIGATION
========================================================= */

const menuBtn = document.getElementById("menu-btn");
const navLinks = document.querySelector(".nav-links");

menuBtn.addEventListener("click", () => {
    navLinks.classList.toggle("show");

    const icon = menuBtn.querySelector("i");

    if (navLinks.classList.contains("show")) {
        icon.classList.remove("fa-bars");
        icon.classList.add("fa-xmark");
    } else {
        icon.classList.remove("fa-xmark");
        icon.classList.add("fa-bars");
    }
});


/* =========================================================
   CLOSE MOBILE MENU AFTER CLICK
========================================================= */

document.querySelectorAll(".nav-links a").forEach(link => {

    link.addEventListener("click", () => {

        navLinks.classList.remove("show");

        const icon = menuBtn.querySelector("i");

        icon.classList.remove("fa-xmark");
        icon.classList.add("fa-bars");

    });

});


/* =========================================================
   ACTIVE NAVIGATION LINK
========================================================= */

const sections = document.querySelectorAll("section");
const navItems = document.querySelectorAll(".nav-links a");

window.addEventListener("scroll", () => {

    let currentSection = "";

    sections.forEach(section => {

        const sectionTop = section.offsetTop - 150;
        const sectionHeight = section.offsetHeight;

        if (
            window.scrollY >= sectionTop &&
            window.scrollY < sectionTop + sectionHeight
        ) {
            currentSection = section.getAttribute("id");
        }

    });


    navItems.forEach(link => {

        link.classList.remove("active");

        if (link.getAttribute("href") === `#${currentSection}`) {
            link.classList.add("active");
        }

    });

});


/* =========================================================
   HEADER ON SCROLL
========================================================= */

const header = document.querySelector(".header");

window.addEventListener("scroll", () => {

    if (window.scrollY > 50) {

        header.style.background =
            "rgba(5, 8, 22, 0.92)";

        header.style.boxShadow =
            "0 10px 40px rgba(0, 0, 0, 0.25)";

    } else {

        header.style.background =
            "rgba(5, 8, 22, 0.7)";

        header.style.boxShadow = "none";

    }

});


/* =========================================================
   SCROLL REVEAL ANIMATION
========================================================= */

const revealElements = document.querySelectorAll(
    ".section-heading, .about-container, .skill-card, .project-card, .timeline-item, .contact-container"
);


const revealObserver = new IntersectionObserver(
    (entries) => {

        entries.forEach(entry => {

            if (entry.isIntersecting) {

                entry.target.classList.add("reveal-show");

                revealObserver.unobserve(entry.target);

            }

        });

    }, {
        threshold: 0.12
    }
);


revealElements.forEach(element => {

    element.classList.add("reveal");

    revealObserver.observe(element);

});


/* =========================================================
   PROJECT CARD STAGGER ANIMATION
========================================================= */

const projectCards =
    document.querySelectorAll(".project-card");


projectCards.forEach((card, index) => {

    card.style.transitionDelay =
        `${index * 0.12}s`;

});


/* =========================================================
   SKILL CARD STAGGER ANIMATION
========================================================= */

const skillCards =
    document.querySelectorAll(".skill-card");


skillCards.forEach((card, index) => {

    card.style.transitionDelay =
        `${index * 0.08}s`;

});


/* =========================================================
   TYPING EFFECT
========================================================= */

const typingElement =
    document.querySelector(".gradient-text");


const roles = [
    "Software Developer",
    "Web Developer",
    "Frontend Developer",
    "Java Developer"
];


let roleIndex = 0;
let characterIndex = 0;
let deleting = false;


function typeEffect() {

    const currentRole = roles[roleIndex];

    if (!deleting) {

        typingElement.textContent =
            currentRole.substring(
                0,
                characterIndex + 1
            );

        characterIndex++;

        if (characterIndex === currentRole.length) {

            deleting = true;

            setTimeout(typeEffect, 1800);

            return;
        }

    } else {

        typingElement.textContent =
            currentRole.substring(
                0,
                characterIndex - 1
            );

        characterIndex--;

        if (characterIndex === 0) {

            deleting = false;

            roleIndex =
                (roleIndex + 1) % roles.length;

        }

    }

    setTimeout(
        typeEffect,
        deleting ? 60 : 100
    );

}


typeEffect();


/* =========================================================
   CURRENT YEAR
========================================================= */

const copyright =
    document.querySelector(".copyright");

if (copyright) {

    copyright.innerHTML =
        `© ${new Date().getFullYear()} Abhay Andrapiya. All rights reserved.`;

}


/* =========================================================
   BUTTON RIPPLE EFFECT
========================================================= */

document.querySelectorAll(".btn").forEach(button => {

    button.addEventListener("click", function(event) {

        const ripple =
            document.createElement("span");

        const rect =
            button.getBoundingClientRect();

        const size =
            Math.max(
                rect.width,
                rect.height
            );

        ripple.style.width = `${size}px`;
        ripple.style.height = `${size}px`;

        ripple.style.left =
            `${event.clientX - rect.left - size / 2}px`;

        ripple.style.top =
            `${event.clientY - rect.top - size / 2}px`;

        ripple.classList.add("ripple");

        button.appendChild(ripple);

        setTimeout(() => {

            ripple.remove();

        }, 600);

    });

});


/* =========================================================
   CONSOLE MESSAGE
========================================================= */

console.log(
    "%c Welcome to Abhay's Portfolio 🚀 ",
    "background: #7c5cff; color: white; padding: 10px; border-radius: 8px; font-weight: bold;"
);