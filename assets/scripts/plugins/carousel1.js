let currentSlide = 0;
const totalSlides = document.querySelectorAll('.carousel-item').length;
const activeSlideElement = document.getElementById('active-slide');
const sliderTrack = document.querySelector('.carousel-inner');

function changeSlide(direction) {
    currentSlide += direction;

    if (currentSlide < 0) {
        currentSlide = totalSlides - 1;
    } else if (currentSlide >= totalSlides) {
        currentSlide = 0;
    }

    showSlide(currentSlide);
    updateIndicators();
}

function showSlide(slideIndex) {
    const slides = document.querySelectorAll('.carousel-item');
    slides.forEach((slide, index) => {
        slide.classList.toggle('active', index === slideIndex);
    });
}

function jumpToSlide(slideIndex) {
    currentSlide = slideIndex;
    showSlide(currentSlide);
    updateIndicators();
}

function updateIndicators() {
    const indicators = document.querySelectorAll('.indicator-bar');

    indicators.forEach((indicator, index) => {
        indicator.classList.toggle('active-indicator', index === currentSlide);
    });
}

function prevSlide() {
    changeSlide(-1);
}

function nextSlide() {
    changeSlide(1);
}

document.addEventListener('DOMContentLoaded', function () {
    updateIndicators();
});
sliderTrack.addEventListener('transitionend', function () {
    sliderTrack.style.transition = '';
});