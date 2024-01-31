let currentSlide = 0;
const totalSlides = 4;

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
        if (index === slideIndex) {
            slide.classList.add('active');
        } else {
            slide.classList.remove('active');
        }
    });

    if (slideIndex === 0 && currentSlide === totalSlides - 1) {
        slides[totalSlides - 1].classList.remove('active');
        slides[slideIndex].classList.add('active');
    }
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

    const prevButton = document.querySelector('.carousel-control-prev');
    const nextButton = document.querySelector('.carousel-control-next');

    if (currentSlide === 0) {
        prevButton.classList.add('disabled');
    } else {
        prevButton.classList.remove('disabled');
    }

    if (currentSlide === totalSlides - 1) {
        nextButton.classList.add('disabled');
    } else {
        nextButton.classList.remove('disabled');
    }
}

function prevSlide() {
    if (currentSlide > 0) {
        changeSlide(-1);
    }
}

function nextSlide() {
    if (currentSlide < 3) {
        changeSlide(1);
    }
}

document.addEventListener('DOMContentLoaded', function () {
    updateIndicators();
});

const myCarousel = document.getElementById('myCarousel');
myCarousel.addEventListener('transitionend', function () {
    if (currentSlide === 0) {
        myCarousel.style.transition = '';
        showSlide(totalSlides - 1);
        setTimeout(() => {
            myCarousel.style.transition = 'transform 0.5s ease';
        }, 0);
    }
});
