/* ============================================================
   TRAVERSE LUGGAGE — Main JS
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

  if (hamburger && mobileMenu) {
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
  }

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
    let start = null;
    const startVal = 0;

    function step(timestamp) {
      if (!start) start = timestamp;
      const progress = Math.min((timestamp - start) / duration, 1);
      // Ease out cubic
      const eased = 1 - Math.pow(1 - progress, 3);
      const current = Math.floor(eased * (target - startVal) + startVal);

      // Format with commas
      el.textContent = current.toLocaleString();

      if (progress < 1) {
        requestAnimationFrame(step);
      }
    }
    requestAnimationFrame(step);
  }

  function checkStatCounters() {
    if (!statsSection || statsAnimated) return;
    const rect = statsSection.getBoundingClientRect();
    if (rect.top < window.innerHeight - 80) {
      statsAnimated = true;
      const statNumbers = statsSection.querySelectorAll('.stat-number');
      statNumbers.forEach(function (el) {
        const target = parseInt(el.getAttribute('data-target'), 10);
        animateCounter(el, target, 1500);
      });
    }
  }

  /* ----------------------------------------------------------
     5. ACTIVE NAV LINK HIGHLIGHTING
  ---------------------------------------------------------- */
  function updateActiveNavLink() {
    const sections = document.querySelectorAll('section[id]');
    const navLinks = document.querySelectorAll('.nav__links a');

    sections.forEach(function (section) {
      const rect = section.getBoundingClientRect();
      const sectionId = section.getAttribute('id');

      if (rect.top <= 150 && rect.bottom >= 150) {
        navLinks.forEach(function (link) {
          link.classList.remove('active');
          if (link.getAttribute('href') === '#' + sectionId) {
            link.classList.add('active');
          }
        });
      }
    });
  }

  /* ----------------------------------------------------------
     6. FORM SUBMISSION (Newsletter & CTA)
  ---------------------------------------------------------- */
  const forms = document.querySelectorAll('form');
  forms.forEach(function (form) {
    form.addEventListener('submit', function (e) {
      e.preventDefault();
      // Simple validation
      const inputs = form.querySelectorAll('input[required]');
      let valid = true;
      inputs.forEach(function (input) {
        if (!input.value.trim()) {
          valid = false;
          input.style.borderColor = '#ff6b6b';
        }
      });
      if (valid) {
        // Simulate submission
        alert('Thank you! We'll be in touch soon.');
        form.reset();
        inputs.forEach(function (input) {
          input.style.borderColor = '';
        });
      }
    });
  });

  /* ----------------------------------------------------------
     7. KEYBOARD NAVIGATION
  ---------------------------------------------------------- */
  document.addEventListener('keydown', function (e) {
    if (e.key === 'Escape' && mobileMenu && mobileMenu.classList.contains('open')) {
      mobileMenu.classList.remove('open');
      hamburger.classList.remove('open');
      hamburger.setAttribute('aria-expanded', 'false');
      document.body.style.overflow = '';
    }
  });
})();