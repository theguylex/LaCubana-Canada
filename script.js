function toggleNav() {
  const navLinks = document.getElementById("navLinks");
  navLinks.classList.toggle("active");
}

let currentIndex = 0;
const autoSlideInterval = 5000;

function showSlide(index) {
  const carousel = document.getElementById("carousel");
  const slides = carousel.children;
  const totalSlides = slides.length;

  if (index >= totalSlides) {
    currentIndex = 0;
  } else if (index < 0) {
    currentIndex = totalSlides - 1;
  } else {
    currentIndex = index;
  }

  const offset = -currentIndex * 100;
  carousel.style.transform = `translateX(${offset}%)`;
}

function nextSlide() {
  showSlide(currentIndex + 1);
}

function prevSlide() {
  showSlide(currentIndex - 1);
}

function autoSlide() {
  nextSlide();
  setTimeout(autoSlide, autoSlideInterval);
}

document.addEventListener("DOMContentLoaded", () => {
  showSlide(0);
  setTimeout(autoSlide, autoSlideInterval);
});

let menuIcon = document.querySelector('#menu-icon');
let navbar = document.querySelector('.topNav ul');

menuIcon.addEventListener('click', function(){
    menuIcon.classList.toggle('bx-x');
    navbar.classList.toggle('open');
});