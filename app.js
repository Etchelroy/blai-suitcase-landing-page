/* =============================================================
   TRAVERSE — app.js
   Covers: nav scroll, hamburger, smooth anchor, stat counters,
   email form validation, AOS-lite (intersection observer),
   active nav link on scroll.
   No external dependencies.
   ============================================================= */

(function () {
  'use strict';

  /* ------------------------------------------------------------------
     1. NAV — add .scrolled class once page is scrolled > 20px
  ------------------------------------------------------------------ */
  const nav = document.getElementById('mainNav');

  function onScroll() {
    if (window.scrollY > 20) {
      nav.classList.add('scrolled');
    } else {
      nav.classList.remove('scrolled');
    }
    updateActiveNav();
  }

  window.addEventListener('scroll', onScroll, { passive: true });
  onScroll(); // run once on load

  /* ------------------------------------------------------------------
     2. HAMBURGER — toggle mobile menu
  ------------------------------------------------------------------ */
  const hamburger   = document.getElementById('hamburger');
  const mobileMenu  = document.getElementById('mobileMenu');

  function closeMobileMenu() {
    hamburger.classList.remove('open');
    hamburger.setAttribute('aria-expanded', 'false');
    mobileMenu.classList.remove('open');
    document.body.style.overflow = '';
  }

  hamburger.addEventListener('click', function () {
    const isOpen = hamburger.classList.toggle('open');
    hamburger.setAttribute('aria-expanded', String(isOpen));
    mobileMenu.classList.toggle('open', isOpen);
    document.body.style.overflow = isOpen ? 'hidden' : '';
  });

  // Close on any mobile menu link click
  mobileMenu.querySelectorAll('a').forEach(function (link) {
    link.addEventListener('click', closeMobileMenu);
  });

  // Close on Escape key
  document.addEventListener('keydown', function (e) {
    if (e.key === 'Escape') closeMobileMenu();
  });

  /* ------------------------------------------------------------------
     3. SMOOTH SCROLL for anchor links (fallback for older browsers)
  ------------------------------------------------------------------ */
  document.querySelectorAll('a[href^="#"]').forEach(function (anchor) {
    anchor.addEventListener('click', function (e) {
      const target = document.querySelector(this.getAttribute('href'));
      if (!target) return;
      e.preventDefault();
      const offset = parseInt(
        getComputedStyle(document.documentElement).getPropertyValue('--nav-h'),
        10
      ) || 72;
      const top = target.getBoundingClientRect().top + window.scrollY - offset;
      window.scrollTo({ top: top, behavior: 'smooth' });
    });
  });

  /* ------------------------------------------------------------------
     4. ACTIVE NAV LINK — highlight link whose section is in view
  ------------------------------------------------------------------ */
  const sections  = document.querySelectorAll('section[id], div[id]');
  const navLinks  = document.querySelectorAll('.nav__links a[href^="#"]');

  function updateActiveNav() {
    let current = '';
    const offset = 120;
    sections.forEach(function (sec) {
      const top = sec.getBoundingClientRect().top;
      if (top < offset) current = sec.getAttribute('id');
    });
    navLinks.forEach(function (link) {
      const href = link.getAttribute('href').replace('#', '');
      link.classList.toggle('active', href === current);
    });
  }

  /* ------------------------------------------------------------------
     5. STAT COUNTERS — animate numbers when stats bar enters viewport
  ------------------------------------------------------------------ */
  function animateCounter(el) {
    const target   = parseInt(el.getAttribute('data-target'), 10);
    const duration = 1800; // ms
    const start    = performance.now();

    function step(now) {
      const elapsed  = now - start;
      const progress = Math.min(elapsed / duration, 1);
      // ease out cubic
      const eased    = 1 - Math.pow(1 - progress, 3);
      el.textContent = Math.floor(eased * target).toLocaleString();
      if (progress < 1) requestAnimationFrame(step);
    }
    requestAnimationFrame(step);
  }

  const statNumbers = document.querySelectorAll('.stat-number[data-target]');

  if ('IntersectionObserver' in window) {
    const statsObserver = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          animateCounter(entry.target);
          statsObserver.unobserve(entry.target);
        }
      });
    }, { threshold: 0.4 });

    statNumbers.forEach(function (el) { statsObserver.observe(el); });
  } else {
    // Fallback: just set the final number
    statNumbers.forEach(function (el) {
      el.textContent = parseInt(el.getAttribute('data-target'), 10).toLocaleString();
    });
  }

  /* ------------------------------------------------------------------
     6. AOS-LITE — simple fade/slide-up on scroll
  ------------------------------------------------------------------ */
  const aosElements = document.querySelectorAll('[data-aos]');

  // Initial hidden state (only if motion is acceptable)
  const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  if (!prefersReduced) {
    aosElements.forEach(function (el) {
      const delay = el.getAttribute('data-aos-delay') || 0;
      el.style.opacity    = '0';
      el.style.transform  = 'translateY(28px)';
      el.style.transition =
        'opacity 0.65s ease ' + delay + 'ms, transform 0.65s ease ' + delay + 'ms';
    });

    const aosObserver = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          entry.target.style.opacity   = '1';
          entry.target.style.transform = 'translateY(0)';
          aosObserver.unobserve(entry.target);
        }
      });
    }, { threshold: 0.12, rootMargin: '0px 0px -40px 0px' });

    aosElements.forEach(function (el) { aosObserver.observe(el); });
  }

  /* ------------------------------------------------------------------
     7. EMAIL FORM — basic validation + simulated submit
  ------------------------------------------------------------------ */
  const ctaForm    = document.getElementById('ctaForm');
  const emailInput = document.getElementById('emailInput');
  const formMsg    = document.getElementById('ctaFormMsg');

  if (ctaForm) {
    ctaForm.addEventListener('submit', function (e) {
      e.preventDefault();

      const email = emailInput.value.trim();
      const valid = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);

      formMsg.className = 'cta-section__form-msg';

      if (!valid) {
        formMsg.textContent = 'Please enter a valid email address.';
        formMsg.classList.add('error');
        emailInput.focus();
        return;
      }

      // Simulate async submit
      const submitBtn = ctaForm.querySelector('button[type="submit"]');
      submitBtn.disabled    = true;
      submitBtn.textContent = 'Sending…';

      setTimeout(function () {
        formMsg.textContent   = '✓ Welcome aboard! Check your inbox for a 10% discount code.';
        formMsg.classList.add('success');
        emailInput.value      = '';
        submitBtn.disabled    = false;
        submitBtn.textContent = 'Join the Journey';
      }, 1200);
    });
  }

  /* ------------------------------------------------------------------
     8. PRODUCT CARDS — "Add to Bag" micro-feedback
  ------------------------------------------------------------------ */
  document.querySelectorAll('.product-card__footer .btn--gold').forEach(function (btn) {
    btn.addEventListener('click', function (e) {
      e.preventDefault();
      const original = btn.textContent;
      btn.textContent = '✓ Added!';
      btn.style.background = '#4caf50';
      btn.style.borderColor = '#4caf50';
      setTimeout(function () {
        btn.textContent = original;
        btn.style.background = '';
        btn.style.borderColor = '';
      }, 1800);
    });
  });

})();