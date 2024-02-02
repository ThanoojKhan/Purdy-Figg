document.addEventListener('DOMContentLoaded', function () {
    let carousel = new Slider('myCarousel', '.carousel-item');
    let carousel1 = new Slider('myCarousel1', '.carousel-item');
});

class Slider {
    constructor(myCarousel, slideSelector) {
        let currentSlide = 0;
        this.myCarouselElement = document.getElementById(myCarousel);

        if (!this.myCarouselElement) {
            console.error(`Element with ID '${myCarousel}' not found.`);
            return;
        }

        const indicators = this.myCarouselElement.querySelectorAll('.indicator-bar');

        this.totalSlides = this.myCarouselElement.querySelectorAll(slideSelector).length;
        this.nextButton = this.myCarouselElement.querySelector('.carousel-control-next');
        this.prevButton = this.myCarouselElement.querySelector('.carousel-control-prev');

        const changeSlide = (direction) => {
            currentSlide += direction;

            if (currentSlide < 0) {
                currentSlide = this.totalSlides - 1;
            } else if (currentSlide >= this.totalSlides) {
                currentSlide = 0;
            }

            showSlide(currentSlide);
            updateIndicators();
        };

        const showSlide = (slideIndex) => {
            const slides = this.myCarouselElement.querySelectorAll(slideSelector);
            slides.forEach((slide, index) => {
                if (index === slideIndex) {
                    slide.classList.add('active');
                } else {
                    slide.classList.remove('active');
                }
            });

            indicators.forEach((indicator, index) => {
                indicator.classList.toggle('active-indicator', index === slideIndex);
            });

            if (slideIndex === 0 && currentSlide === this.totalSlides - 1) {
                indicators.forEach((indicator, index) => {
                    indicator.classList.toggle('active-indicator', index === 0);
                });
            }
        };

        const updateIndicators = () => {

            if (currentSlide === 0) {
                indicators.forEach((indicator, index) => {
                    indicator.classList.toggle('active-indicator', index === 0);
                });
            }
        };

        const prevSlide = () => {
            changeSlide(-1);
        };

        const nextSlide = () => {
            changeSlide(1);
        };

        updateIndicators();

        this.prevButton.addEventListener('click', (e) => {
            e.preventDefault();
            prevSlide();
        });
        this.nextButton.addEventListener('click', (e) => {
            e.preventDefault();
            nextSlide();
        });

        this.myCarouselElement.addEventListener('transitionend', () => {
            if (currentSlide === 0) {
                this.myCarouselElement.style.transition = '';
                showSlide(this.totalSlides - 1);
                setTimeout(() => {
                    this.myCarouselElement.style.transition = 'transform 0.5s ease';
                }, 0);
            }
        });
    }
}
