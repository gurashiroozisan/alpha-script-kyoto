(function () {
  'use strict';

  const navToggle = document.querySelector('.nav-toggle');
  const mainNav = document.querySelector('.main-nav');

  if (navToggle && mainNav) {
    navToggle.addEventListener('click', function () {
      const isOpen = mainNav.classList.toggle('is-open');
      navToggle.classList.toggle('is-active', isOpen);
      navToggle.setAttribute('aria-expanded', String(isOpen));
      navToggle.setAttribute('aria-label', isOpen ? 'メニューを閉じる' : 'メニューを開く');
    });

    mainNav.querySelectorAll('a').forEach(function (link) {
      link.addEventListener('click', function () {
        mainNav.classList.remove('is-open');
        navToggle.classList.remove('is-active');
        navToggle.setAttribute('aria-expanded', 'false');
        navToggle.setAttribute('aria-label', 'メニューを開く');
      });
    });
  }

  const header = document.querySelector('.site-header');
  if (header) {
    let lastScroll = 0;
    window.addEventListener('scroll', function () {
      const currentScroll = window.scrollY;
      if (currentScroll > 80) {
        header.style.boxShadow = '0 2px 12px rgba(44, 36, 23, 0.06)';
      } else {
        header.style.boxShadow = 'none';
      }
      lastScroll = currentScroll;
    }, { passive: true });
  }

  // Simple CTA text switcher for quick A/B testing
  const mainCta = document.getElementById('main-cta');
  const variants = document.querySelectorAll('.cta-variant');
  if (mainCta && variants.length > 0) {
    variants.forEach(function (btn) {
      btn.addEventListener('click', function () {
        variants.forEach(function (b) { b.classList.remove('is-active'); });
        btn.classList.add('is-active');
        const text = btn.getAttribute('data-cta-text');
        if (text) mainCta.textContent = text;
      });
    });
  }
})();
