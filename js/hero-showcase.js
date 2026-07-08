(function () {
  'use strict';

  var slides = document.querySelectorAll('.hero-showcase__slide');
  if (!slides.length) return;

  var SLIDE_MS = 5800;
  var index = 0;
  var timerId = null;
  var reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  function fillProgress(slide) {
    var bar = slide.querySelector('.hero-showcase__progress span');
    if (!bar) return;

    bar.style.transition = 'none';
    bar.style.width = '0%';
    void bar.offsetWidth;

    if (reducedMotion) {
      bar.style.width = '100%';
      return;
    }

    bar.style.transition = 'width ' + SLIDE_MS + 'ms linear';
    bar.style.width = '100%';
  }

  function showSlide(i) {
    slides.forEach(function (slide, n) {
      slide.classList.toggle('is-active', n === i);
    });
    fillProgress(slides[i]);
  }

  function nextSlide() {
    index = (index + 1) % slides.length;
    showSlide(index);
  }

  function startTimer() {
    if (timerId) clearInterval(timerId);
    if (!reducedMotion) {
      timerId = setInterval(nextSlide, SLIDE_MS);
    }
  }

  if (reducedMotion) {
    showSlide(0);
    return;
  }

  showSlide(0);
  startTimer();

  document.addEventListener('visibilitychange', function () {
    if (document.hidden) {
      clearInterval(timerId);
      timerId = null;
      return;
    }

    showSlide(index);
    startTimer();
  });
})();
