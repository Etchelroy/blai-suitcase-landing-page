/* ============================================================
   LUNA LUGGAGE — Main JS
   - Sticky nav scroll behaviour
   - Mobile hamburger toggle
   - AOS (scroll reveal) — custom lightweight implementation
   - Animated stat counters
   - Email CTA form interaction
   - Smooth active nav link highlighting
   ============================================================ */

(function () {
  'use strict';

  /* ----------------------------------------------------------
     1. STICKY NAV — add .scrolled class after 60px scroll
  ---------------------------------------------------------- */
  const nav = document.getElementById('mainNav');

  function onScroll() {
    if (window.scrollY > 60) {
      nav.classList.add('scrolled');
    } else {
      nav.classList.remove('scrolled');
    }
    updateActiveNavLink();
    revealAosElements();
    checkStatCounters();
  }

  window.addEventListener('scroll', onScroll, { passive: true });
  // Run once on load in case page is already scrolled
  onScroll();

  /* ----------------------------------------------------------
     2. HAMBURGER / MOBILE MENU TOGGLE
  ---------------------------------------------------------- */
  const hamburger = document.getElementById('hamburger');
  const mobileMenu = document.getElementById('mobileMenu');

  hamburger.addEventListener('click', function () {
    const isOpen = mobileMenu.classList.toggle('open');
    hamburger.classList.toggle('open', isOpen);
    hamburger.setAttribute('aria-expanded', isOpen);
    // Prevent body scroll when menu is open
    document.body.style.overflow = isOpen ? 'hidden' : '';
  });

  // Close mobile menu when a link is clicked
  mobileMenu.querySelectorAll('a').forEach(function (link) {
    link.addEventListener('click', function () {
      mobileMenu.classList.remove('open');
      hamburger.classList.remove('open');
      hamburger.setAttribute('aria-expanded', 'false');
      document.body.style.overflow = '';
    });
  });

  // Close mobile menu on outside click
  document.addEventListener('click', function (e) {
    if (
      mobileMenu.classList.contains('open') &&
      !mobileMenu.contains(e.target) &&
      !hamburger.contains(e.target)
    ) {
      mobileMenu.classList.remove('open');
      hamburger.classList.remove('open');
      hamburger.setAttribute('aria-expanded', 'false');
      document.body.style.overflow = '';
    }
  });

  /* ----------------------------------------------------------
     3. CUSTOM AOS — lightweight scroll reveal
  ---------------------------------------------------------- */
  const aosElements = document.querySelectorAll('[data-aos]');

  function revealAosElements() {
    const windowHeight = window.innerHeight;
    aosElements.forEach(function (el) {
      if (el.classList.contains('aos-visible')) return;
      const rect = el.getBoundingClientRect();
      const delay = parseInt(el.getAttribute('data-aos-delay') || '0', 10);
      if (rect.top < windowHeight - 80) {
        setTimeout(function () {
          el.classList.add('aos-visible');
        }, delay);
      }
    });
  }

  // Run on load too (elements above the fold)
  window.addEventListener('load', revealAosElements);

  /* ----------------------------------------------------------
     4. ANIMATED STAT COUNTERS
     Triggers when .stats-bar scrolls into view
  ---------------------------------------------------------- */
  const statsSection = document.querySelector('.stats-bar');
  let statsAnimated = false;

  function animateCounter(el, target, duration) {
    const suffix = el.nextElementSibling
      ? el.nextElementSibling.textContent
      : '';
    let start = null;
    const startVal = 0;

    function step(timestamp) {
      if (!start) start = timestamp;
      const progress = Math.min((timestamp - start) / duration, 1);
      // Ease out cubic
      const eased = 1 - Math.pow(1 - progress, 3);
      const current = Math.floor(eased * (target - startVal) + startVal);

      // Format large numbers with commas
      el.textContent =
        target >= 1000
          ? current.toLocaleString('en-US')
          : current.toString();

      if (progress < 1) {
        requestAnimationFrame(step);
      } else {
        el.textContent =
          target >= 1000
            ? target.toLocaleString('en-US')
            : target.toString();
      }
    }
    requestAnimationFrame(step);
  }

  function checkStatCounters() {
    if (statsAnimated || !statsSection) return;
    const rect = statsSection.getBoundingClientRect();
    if (rect.top < window.innerHeight - 100) {
      statsAnimated = true;
      document.querySelectorAll('.stat__num').forEach(function (el) {
        const target = parseInt(el.getAttribute('data-target'), 10);
        animateCounter(el, target, 1800);
      });
    }
  }

  /* ----------------------------------------------------------
     5. ACTIVE NAV LINK — highlight based on scroll position
  ---------------------------------------------------------- */
  const sections = document.querySelectorAll('section[id]');
  const navLinks = document.querySelectorAll('.nav__links a[href^="#"]');

  function updateActiveNavLink() {
    let currentId = '';
    const scrollY = window.scrollY + 120;

    sections.forEach(function (section) {
      if (section.offsetTop <= scrollY) {
        currentId = section.id;
      }
    });

    navLinks.forEach(function (link) {
      link.classList.remove('nav-active');
      if (link.getAttribute('href') === '#' + currentId) {
        link.classList.add('nav-active');
      }
    });
  }

  /* ----------------------------------------------------------
     6. EMAIL CTA — form submission with feedback
  ---------------------------------------------------------- */
  const ctaInput = document.querySelector('.cta-section__input');
  const ctaBtn = document.querySelector('.cta-section .btn--gold');
  const ctaDisclaimer = document.querySelector('.cta-section__disclaimer');

  if (ctaBtn && ctaInput) {
    ctaBtn.addEventListener('click', function () {
      const email = ctaInput.value.trim();
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

      if (!email) {
        shakeInput(ctaInput);
        ctaInput.focus();
        return;
      }

      if (!emailRegex.test(email)) {
        shakeInput(ctaInput);
        ctaInput.placeholder = 'Please enter a valid email address';
        ctaInput.value = '';
        ctaInput.focus();
        return;
      }

      // Success state
      ctaBtn.textContent = '✓ You\'re In!';
      ctaBtn.style.background = '#2D5A4E';
      ctaBtn.style.borderColor = '#2D5A4E';
      ctaBtn.style.color = '#fff';
      ctaBtn.disabled = true;
      ctaInput.disabled = true;
      ctaInput.value = email;
      ctaInput.style.opacity = '0.5';
      ctaDisclaimer.textContent =
        'Welcome to LUNA! Check your inbox for your 10% off code.';
      ctaDisclaimer.style.color = 'rgba(201,168,118,0.9)';
    });

    ctaInput.addEventListener('keydown', function (e) {
      if (e.key === 'Enter') ctaBtn.click();
    });
  }

  function shakeInput(el) {
    el.classList.add('shake');
    el.style.borderColor = '#e07070';
    setTimeout(function () {
      el.classList.remove('shake');
      el.style.borderColor = '';
    }, 600);
  }

  /* ----------------------------------------------------------
     7. PRODUCT SWATCH COLOUR PICKER — visual feedback
  ---------------------------------------------------------- */
  document.querySelectorAll('.product-card__colors').forEach(function (group) {
    group.querySelectorAll('.swatch').forEach(function (swatch) {
      swatch.addEventListener('click', function () {
        group.querySelectorAll('.swatch').forEach(function (s) {
          s.style.boxShadow = '';
          s.style.transform = '';
        });
        swatch.style.boxShadow =
          '0 0 0 2px #fff, 0 0 0 4px ' + getSwatchColor(swatch);
        swatch.style.transform = 'scale(1.3)';
      });
    });
  });

  function getSwatchColor(el) {
    const classList = Array.from(el.classList);
    const colorMap = {
      'swatch--slate': '#6B7280',
      'swatch--sand': '#D4B896',
      'swatch--midnight': '#1E2A4A',
      'swatch--forest': '#2D5A4E',
      'swatch--blush': '#E8A598'
    };
    for (const cls of classList) {
      if (colorMap[cls]) return colorMap[cls];
    }
    return '#C9A876';
  }

  /* ----------------------------------------------------------
     8. HERO PARALLAX — subtle depth on scroll
  ---------------------------------------------------------- */
  const heroBgImg = document.querySelector('.hero__bg-img');

  function onScrollParallax() {
    if (!heroBgImg) return;
    const scrollY = window.scrollY;
    // Only apply within hero height
    if (scrollY < window.innerHeight) {
      heroBgImg.style.transform =
        'scale(1.06) translateY(' + scrollY * 0.18 + 'px)';
    }
  }

  window.addEventListener('scroll', onScrollParallax, { passive: true });

  /* ----------------------------------------------------------
     9. SMOOTH SCROLL for all internal anchor links
  ---------------------------------------------------------- */
  document.querySelectorAll('a[href^="#"]').forEach(function (anchor) {
    anchor.addEventListener('click', function (e) {
      const targetId = anchor.getAttribute('href');
      if (targetId === '#') return;
      const target = document.querySelector(targetId);
      if (target) {
        e.preventDefault();
        const navHeight = nav.getBoundingClientRect().height;
        const targetTop =
          target.getBoundingClientRect().top + window.scrollY - navHeight;
        window.scrollTo({ top: targetTop, behavior: 'smooth' });
      }
    });
  });

  /* ----------------------------------------------------------
     10. CSS SHAKE ANIMATION — injected dynamically
  ---------------------------------------------------------- */
  const shakeStyle = document.createElement('style');
  shakeStyle.textContent = `
    @keyframes shake {
      0%, 100% { transform: translateX(0); }
      20%       { transform: translateX(-8px); }
      40%       { transform: translateX(8px); }
      60%       { transform: translateX(-5px); }
      80%       { transform: translateX(5px); }
    }
    .shake { animation: shake 0.5s ease; }

    .nav-active {
      color: #C9A876 !important;
    }
    .nav-active::after {
      width: 100% !important;
      background: #C9A876 !important;
    }
  `;
  document.head.appendChild(shakeStyle);

  /* ----------------------------------------------------------
     11. PAGE LOAD — fade-in body
  ---------------------------------------------------------- */
  document.body.style.opacity = '0';
  document.body.style.transition = 'opacity 0.5s ease';
  window.addEventListener('load', function () {
    document.body.style.opacity = '1';
    // Trigger initial AOS check
    revealAosElements();
    checkStatCounters();
  });

})();