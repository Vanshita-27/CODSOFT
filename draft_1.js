// Smooth Scrolling Functionality
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Resume Download Confirmation
const resumeButton = document.querySelector('a[href="resume.pdf"]');
if (resumeButton) {
    resumeButton.addEventListener('click', function () {
        alert("Your resume is being downloaded!");
    });
}

// Contact Form Validation (Optional if you include a form later)
const contactForm = document.querySelector('#contact-form');
if (contactForm) {
    contactForm.addEventListener('submit', function (e) {
        e.preventDefault();

        const name = document.querySelector('#name').value;
        const email = document.querySelector('#email').value;
        const message = document.querySelector('#message').value;

        if (name === "" || email === "" || message === "") {
            alert("Please fill in all fields.");
        } else if (!validateEmail(email)) {
            alert("Please enter a valid email address.");
        } else {
            alert("Thank you for your message!");
            contactForm.reset();
        }
    });

    function validateEmail(email) {
        const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return re.test(email);
    }
}
// Smooth scrolling for navigation links
document.querySelectorAll('nav ul li a').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Sticky header effect
window.addEventListener('scroll', function () {
    const header = document.querySelector('header');
    header.classList.toggle('sticky', window.scrollY > 0);
});

// Skills bar animation
function animateSkillBars() {
    const frontend = document.querySelector('.frontend');
    const backend = document.querySelector('.backend');
    frontend.style.width = '80%';
    backend.style.width = '70%';
}

window.addEventListener('scroll', function () {
    const skillsSection = document.getElementById('skills');
    const skillsPosition = skillsSection.getBoundingClientRect().top;
    const screenPosition = window.innerHeight / 1.3;

    if (skillsPosition < screenPosition) {
        animateSkillBars();
    }
});

// Scroll reveal animation for sections
const revealSections = document.querySelectorAll('section');
window.addEventListener('scroll', () => {
    revealSections.forEach(section => {
        const sectionTop = section.getBoundingClientRect().top;
        const windowHeight = window.innerHeight / 1.3;
        if (sectionTop < windowHeight) {
            section.style.opacity = '1';
            section.style.transform = 'translateY(0)';
        }
    });
});
// JavaScript for a fade-in on scroll
window.addEventListener("scroll", () => {
  const elements = document.querySelectorAll(".fade-in-on-scroll");
  elements.forEach(el => {
    const position = el.getBoundingClientRect().top;
    const screenPosition = window.innerHeight / 1.3;
    if (position < screenPosition) {
      el.classList.add("fade-in");
    }
  });
});

