// MOBILE MENU
const hamburger = document.querySelector(".hamburger");
const navMenu = document.querySelector(".nav-menu");

hamburger.addEventListener("click", () => {
    navMenu.classList.toggle("show");
});

// HIDE BREADCRUMB & MARQUEE ON HOME
const path = window.location.pathname;
const breadcrumb = document.getElementById("breadcrumb");
const marquee = document.getElementById("marquee");

if (path === "/" || path.includes("index")) {
    if (breadcrumb) breadcrumb.style.display = "none";
    if (marquee) marquee.style.display = "none";
}
// hero section

let currentSlide = 0;
const slides = document.querySelectorAll(".slide");
const dots = document.querySelectorAll(".dot");

function showSlide(index) {
    slides.forEach(slide => slide.classList.remove("active"));
    dots.forEach(dot => dot.classList.remove("active"));

    slides[index].classList.add("active");
    dots[index].classList.add("active");

    currentSlide = index;
}
// Today pick


const slider = document.getElementById('slider');

function slideRight() {
    slider.scrollLeft += 300;
}

function slideLeft() {
    slider.scrollLeft -= 300;
}
// To the top
// Button ko show/hide karne ka logic
const topBtn = document.getElementById("scrollTopBtn");

window.onscroll = function () {
    if (document.body.scrollTop > 300 || document.documentElement.scrollTop > 300) {
        topBtn.classList.add("show-btn");
    } else {
        topBtn.classList.remove("show-btn");
    }
};

// Smooth scroll to top function
function scrollToTop() {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
}
