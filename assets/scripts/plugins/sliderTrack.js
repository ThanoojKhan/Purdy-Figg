document.addEventListener('DOMContentLoaded', function () {
    const sliderTrack = document.querySelector('.slider-track');
    const cloneNode = sliderTrack.cloneNode(true);

    sliderTrack.appendChild(cloneNode.cloneNode(true));
    sliderTrack.appendChild(cloneNode.cloneNode(true));
    sliderTrack.appendChild(cloneNode.cloneNode(true));
    sliderTrack.appendChild(cloneNode.cloneNode(true));

    function slide() {
      sliderTrack.style.transition = 'transform 15s linear';
      sliderTrack.style.transform = 'translateX(-200%)';
    }

    sliderTrack.addEventListener('transitionend', function () {
      sliderTrack.style.transition = 'none';
      sliderTrack.style.transform = 'translateX(0)';
      void sliderTrack.offsetWidth;
      setTimeout(() => {
        sliderTrack.style.transition = 'transform 15s linear';
        slide();
      });
    });

    slide();
  });
