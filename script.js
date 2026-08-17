/* =====================================================
   MOBILE MENU + CLICK ACTIVE + SCROLL ACTIVE
===================================================== */

const menuToggle =
    document.getElementById("menu-toggle");

const navbar =
    document.getElementById("navbar");

const navLinks =
    document.querySelectorAll(".nav-link");

const sections =
    document.querySelectorAll("section[id]");


/* =====================================================
   MOBILE MENU
===================================================== */

if (menuToggle && navbar) {

    menuToggle.addEventListener("click", () => {

        navbar.classList.toggle("active");


        const isOpen =
            navbar.classList.contains("active");


        /* Accessibility */

        menuToggle.setAttribute(
            "aria-expanded",
            isOpen
        );


        menuToggle.setAttribute(
            "aria-label",
            isOpen
                ? "Close Menu"
                : "Open Menu"
        );


        /* Change menu icon */

        const icon =
            menuToggle.querySelector("i");


        if (icon) {

            if (isOpen) {

                icon.classList.remove("fa-bars");

                icon.classList.add("fa-xmark");

            } else {

                icon.classList.remove("fa-xmark");

                icon.classList.add("fa-bars");

            }

        }

    });

}


/* =====================================================
   FUNCTION: SET ACTIVE NAVIGATION
===================================================== */

function setActiveNav(sectionId) {

    navLinks.forEach(link => {

        link.classList.remove("active");

    });


    const activeLink =
        document.querySelector(
            `.nav-link[href="#${sectionId}"]`
        );


    if (activeLink) {

        activeLink.classList.add("active");

    }

}


/* =====================================================
   CLICK ACTIVE
===================================================== */

navLinks.forEach(link => {

    link.addEventListener("click", () => {


        /* Get clicked section */

        const targetId =
            link.getAttribute("href");


        if (targetId && targetId.startsWith("#")) {

            const sectionId =
                targetId.substring(1);


            /* Immediately activate clicked link */

            setActiveNav(sectionId);

        }


        /* Close mobile menu */

        if (navbar) {

            navbar.classList.remove("active");

        }


        /* Reset menu button */

        if (menuToggle) {

            menuToggle.setAttribute(
                "aria-expanded",
                "false"
            );


            menuToggle.setAttribute(
                "aria-label",
                "Open Menu"
            );


            const icon =
                menuToggle.querySelector("i");


            if (icon) {

                icon.classList.remove("fa-xmark");

                icon.classList.add("fa-bars");

            }

        }

    });

});


/* =====================================================
   SCROLL ACTIVE
===================================================== */

function updateActiveOnScroll() {

    if (!sections.length) {
        return;
    }


    /*
     * Position used to decide which section
     * is currently active.
     *
     * Around 35% from the top of the screen.
     */

    const scrollPosition =
        window.scrollY +
        (window.innerHeight * 0.35);


    let currentSection = "home";


    sections.forEach(section => {

        const sectionTop =
            section.offsetTop;

        const sectionHeight =
            section.offsetHeight;


        if (
            scrollPosition >= sectionTop &&
            scrollPosition <
            sectionTop + sectionHeight
        ) {

            currentSection =
                section.getAttribute("id");

        }

    });


    setActiveNav(currentSection);

}


/* =====================================================
   RUN WHEN PAGE LOADS
===================================================== */

window.addEventListener(
    "load",
    updateActiveOnScroll
);


/* =====================================================
   RUN WHILE SCROLLING
===================================================== */

window.addEventListener(
    "scroll",
    updateActiveOnScroll
);
/* =====================================================
   PROJECT FILTER
===================================================== */

const filterButtons =
    document.querySelectorAll(".filter-btn");

const projectCards =
    document.querySelectorAll(".project-card");


filterButtons.forEach(button => {

    button.addEventListener("click", () => {


        /* Remove active state */

        filterButtons.forEach(btn => {

            btn.classList.remove("active");

        });


        /* Add active state */

        button.classList.add("active");


        /* Get selected category */

        const filter =
            button.getAttribute("data-filter");


        /* Filter projects */

        projectCards.forEach(card => {

            const category =
                card.getAttribute("data-category");


            if (
                filter === "all" ||
                category === filter
            ) {

                card.style.display = "block";

                setTimeout(() => {

                    card.style.opacity = "1";

                    card.style.transform =
                        "translateY(0)";

                }, 10);

            } else {

                card.style.opacity = "0";

                card.style.transform =
                    "translateY(10px)";

                setTimeout(() => {

                    card.style.display = "none";

                }, 250);

            }

        });

    });

});
/* =====================================================
   CONTACT FORM → WHATSAPP
===================================================== */
const contactForm =
    document.getElementById("contactForm");


if (contactForm) {

    contactForm.addEventListener("submit", function(event) {

        event.preventDefault();


        /* Get form values */

        const name =
            document.getElementById("clientName").value.trim();

        const business =
            document.getElementById("businessName").value.trim();

        const project =
            document.getElementById("projectType").value;

        const message =
            document.getElementById("projectMessage").value.trim();


        /* Your WhatsApp number */

        const whatsappNumber =
            "251922336006";


        /* Create message */

        const whatsappMessage =
`Hello! I found your portfolio and I'm interested in a website.

Name: ${name}

Business / Brand:
${business || "Not provided"}

Project:
${project || "Not selected"}

Project Details:
${message}

I'd like to discuss the project with you.`;


        /* Encode message */

        const encodedMessage =
            encodeURIComponent(whatsappMessage);


        /* Open WhatsApp */

        const whatsappURL =
            `https://wa.me/${whatsappNumber}?text=${encodedMessage}`;


        window.open(
            whatsappURL,
            "_blank"
        );

    });

}
/* =====================================================
   CURRENT YEAR
===================================================== */

const currentYear =
    document.getElementById("currentYear");

if (currentYear) {

    currentYear.textContent =
        new Date().getFullYear();

}