(function () {
  'use strict';
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }

  function init() {
    initNavbar();
    initMobileNav();
    initScrollReveal();
    initSmoothScroll();
    initNewsletterForm();
    initContactForm();
    initBlogArticles();
    initHeroCarousel();
    initSearch();
    initBackToTop();
    initLightbox();
    initTestimonials();
    initFaqAccordion();
    initSplashScreen();
    initDarkMode();
    initCookieConsent();
    initNewsletterPopup();
    initStatsCounter();
  }

  function initNavbar() {
    var navbar = document.querySelector('.navbar');
    if (!navbar) return;
    var hasHero = document.querySelector('.hero');
    var SCROLL_THRESHOLD = 60;
    var HIDE_THRESHOLD = 10;
    var lastScrollY = window.scrollY;
    var ticking = false;

    function onScroll() {
      if (!ticking) {
        window.requestAnimationFrame(function () {
          var currentScrollY = window.scrollY;
          if (hasHero) {
            if (currentScrollY > SCROLL_THRESHOLD) navbar.classList.add('scrolled');
            else navbar.classList.remove('scrolled');
          }
          if (currentScrollY > SCROLL_THRESHOLD) {
            if (currentScrollY > lastScrollY + HIDE_THRESHOLD) {
              navbar.classList.add('nav-hidden');
            } else if (currentScrollY < lastScrollY - HIDE_THRESHOLD) {
              navbar.classList.remove('nav-hidden');
            }
          } else {
            navbar.classList.remove('nav-hidden');
          }
          lastScrollY = currentScrollY;
          ticking = false;
        });
        ticking = true;
      }
    }
    window.addEventListener('scroll', onScroll, { passive: true });
    onScroll();
  }

  function initMobileNav() {
    var hamburger = document.querySelector('.nav-hamburger');
    var mobileNav = document.querySelector('.nav-mobile');
    var overlay = document.querySelector('.nav-mobile-overlay');
    if (!hamburger || !mobileNav) return;

    function toggleNav() {
      var isOpen = hamburger.classList.toggle('open');
      mobileNav.classList.toggle('open', isOpen);
      if (overlay) overlay.classList.toggle('open', isOpen);
      hamburger.setAttribute('aria-expanded', String(isOpen));
      document.body.style.overflow = isOpen ? 'hidden' : '';
    }
    function closeNav() {
      hamburger.classList.remove('open');
      mobileNav.classList.remove('open');
      if (overlay) overlay.classList.remove('open');
      hamburger.setAttribute('aria-expanded', 'false');
      document.body.style.overflow = '';
    }
    hamburger.addEventListener('click', toggleNav);
    if (overlay) overlay.addEventListener('click', closeNav);
    mobileNav.querySelectorAll('a').forEach(function (link) { link.addEventListener('click', closeNav); });
    document.addEventListener('keydown', function (e) { if (e.key === 'Escape') closeNav(); });

    mobileNav.querySelectorAll('.nav-mobile-toggle').forEach(function (btn) {
      btn.addEventListener('click', function (e) {
        e.stopPropagation();
        var item = this.closest('.nav-mobile-item');
        var wasOpen = item.classList.contains('open');
        mobileNav.querySelectorAll('.nav-mobile-item.open').forEach(function (el) { el.classList.remove('open'); });
        if (!wasOpen) item.classList.add('open');
      });
    });
  }

  function initScrollReveal() {
    var revealEls = document.querySelectorAll('[data-reveal], [data-reveal-stagger]');
    if (!revealEls.length) return;
    var observer = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) { entry.target.classList.add('revealed'); observer.unobserve(entry.target); }
      });
    }, { threshold: 0.12, rootMargin: '0px 0px -40px 0px' });
    revealEls.forEach(function (el) { observer.observe(el); });
  }

  function initSmoothScroll() {
    document.querySelectorAll('a[href^="#"]').forEach(function (anchor) {
      anchor.addEventListener('click', function (e) {
        var targetId = this.getAttribute('href');
        if (targetId === '#') return;
        var target = document.querySelector(targetId);
        if (!target) return;
        e.preventDefault();
        var navHeight = document.querySelector('.navbar') ? document.querySelector('.navbar').offsetHeight : 0;
        var top = target.getBoundingClientRect().top + window.pageYOffset - navHeight;
        window.scrollTo({ top: top, behavior: 'smooth' });
      });
    });
  }

  function initNewsletterForm() {
    var form = document.querySelector('.footer-newsletter-form');
    if (!form) return;
    form.addEventListener('submit', function (e) {
      e.preventDefault();
      var input = form.querySelector('input');
      if (!input || !input.value.trim()) return;
      var btn = form.querySelector('button');
      var originalText = btn.textContent;
      btn.textContent = 'Subscribed!';
      btn.style.background = '#2d5a27';
      input.value = '';
      setTimeout(function () { btn.textContent = originalText; btn.style.background = ''; }, 2500);
    });
  }

  function initContactForm() {
    var form = document.querySelector('.contact-form form');
    if (!form) return;
    form.addEventListener('submit', function (e) {
      e.preventDefault();
      var btn = form.querySelector('button[type="submit"]');
      var originalText = btn.textContent;
      btn.textContent = 'Message Sent!';
      btn.style.background = '#2d5a27';
      form.reset();
      setTimeout(function () { btn.textContent = originalText; btn.style.background = ''; }, 3000);
    });
  }

  function initBlogArticles() {
    var gridWrapper = document.querySelector('.blog-grid-wrapper');
    var articleViews = document.querySelectorAll('.blog-article-view');
    if (!gridWrapper || !articleViews.length) return;

    document.querySelectorAll('.blog-read-more[data-article]').forEach(function (link) {
      link.addEventListener('click', function (e) {
        e.preventDefault();
        var articleId = this.getAttribute('data-article');
        var articleView = document.getElementById(articleId);
        if (!articleView) return;
        gridWrapper.style.display = 'none';
        articleViews.forEach(function (v) { v.classList.remove('active'); });
        articleView.classList.add('active');
        window.scrollTo({ top: document.querySelector('.page-hero').offsetHeight, behavior: 'smooth' });
      });
    });

    document.querySelectorAll('.blog-back-btn').forEach(function (btn) {
      btn.addEventListener('click', function (e) {
        e.preventDefault();
        articleViews.forEach(function (v) { v.classList.remove('active'); });
        gridWrapper.style.display = '';
        window.scrollTo({ top: document.querySelector('.page-hero').offsetHeight, behavior: 'smooth' });
      });
    });
  }

  function initHeroCarousel() {
    var slides = document.querySelectorAll('.hero-slide');
    var dots = document.querySelectorAll('.hero-dot');
    if (slides.length < 2) return;

    var current = 0;
    var interval = 5000;
    var timer;

    function goTo(idx) {
      slides[current].classList.remove('active');
      if (dots[current]) dots[current].classList.remove('active');
      current = idx % slides.length;
      slides[current].classList.add('active');
      if (dots[current]) dots[current].classList.add('active');
    }

    function next() { goTo(current + 1); }

    function startTimer() { timer = setInterval(next, interval); }
    function stopTimer() { clearInterval(timer); }

    dots.forEach(function (dot, i) {
      dot.addEventListener('click', function () {
        stopTimer();
        goTo(i);
        startTimer();
      });
    });

    startTimer();
  }

  function initSearch() {
    var modal = document.querySelector('.search-modal');
    var openBtns = document.querySelectorAll('.nav-search-btn');
    var closeBtn = modal ? modal.querySelector('.search-modal-close') : null;
    var input = modal ? modal.querySelector('.search-input') : null;
    var resultsEl = modal ? modal.querySelector('.search-results') : null;
    if (!modal || !input || !resultsEl) return;

    var pages = [
      { title: 'Home', url: getPageUrl('index.html'), keywords: 'home premium cocoa powder butter nibs products uganda sustainability fair pricing' },
      { title: 'Natural Cocoa Powder', url: getPageUrl('products.html#natural-cocoa-powder'), keywords: 'natural cocoa powder baking confectionery beverages dairy flavour chocolate pastries cookies health weight blood pressure antioxidants' },
      { title: 'Dark Cocoa Powder', url: getPageUrl('products.html#dark-cocoa-powder'), keywords: 'dark cocoa powder intense chocolate brownies cakes pastries ganache glaze antioxidants flavonoids cardiovascular' },
      { title: 'Cocoa Nibs', url: getPageUrl('products.html#cocoa-nibs'), keywords: 'cocoa nibs crunchy snack trail mix granola smoothie yoghurt baking fibre iron magnesium superfood' },
      { title: 'Cocoa Butter', url: getPageUrl('products.html#cocoa-butter'), keywords: 'cocoa butter chocolate cosmetics cream lotion lip balm skincare moisturiser pharmaceutical soap elasticity' },
      { title: 'Our Story', url: getPageUrl('about.html'), keywords: 'about story vision mission values integrity fairness compliance excellence kite industries uganda wobulenzi 2018' },
      { title: 'Blog', url: getPageUrl('blog.html'), keywords: 'blog articles insights processing health benefits sustainability industry guide skincare farm market' },
      { title: 'Careers', url: getPageUrl('careers.html'), keywords: 'careers jobs openings technician quality assurance sales marketing field officer supply chain apply' },
      { title: 'Contact Us', url: getPageUrl('contact.html'), keywords: 'contact email phone order quote wobulenzi naalya market kampala delivery whatsapp' },
      { title: 'Products', url: getPageUrl('products.html'), keywords: 'products range natural dark powder nibs butter premium quality wholesale bulk' }
    ];

    function getPageUrl(page) {
      if (page === 'index.html') return '/';
      return '/' + page.replace('.html', '');
    }

    function openModal() {
      modal.classList.add('open');
      document.body.style.overflow = 'hidden';
      setTimeout(function () { input.focus(); }, 100);
    }
    function closeModal() {
      modal.classList.remove('open');
      document.body.style.overflow = '';
      input.value = '';
      resultsEl.innerHTML = '';
    }

    openBtns.forEach(function (btn) { btn.addEventListener('click', openModal); });
    if (closeBtn) closeBtn.addEventListener('click', closeModal);
    modal.addEventListener('click', function (e) { if (e.target === modal) closeModal(); });
    document.addEventListener('keydown', function (e) {
      if (e.key === 'Escape' && modal.classList.contains('open')) closeModal();
    });

    input.addEventListener('input', function () {
      var query = this.value.trim().toLowerCase();
      if (query.length < 2) { resultsEl.innerHTML = ''; return; }
      var matches = pages.filter(function (p) {
        return p.title.toLowerCase().indexOf(query) !== -1 || p.keywords.indexOf(query) !== -1;
      });
      if (matches.length === 0) {
        var safe = query.replace(/&/g,'&amp;').replace(/</g,'&lt;').replace(/>/g,'&gt;').replace(/"/g,'&quot;');
        resultsEl.innerHTML = '<div class="search-no-results">No results found for "' + safe + '"</div>';
        return;
      }
      resultsEl.innerHTML = matches.map(function (m) {
        return '<a class="search-result-item" href="' + m.url + '"><h4>' + m.title + '</h4><p>View page</p></a>';
      }).join('');
    });
  }

  /* ── BACK TO TOP ── */
  function initBackToTop() {
    var btn = document.querySelector('.back-to-top');
    if (!btn) return;
    window.addEventListener('scroll', function () {
      if (window.scrollY > 400) btn.classList.add('visible');
      else btn.classList.remove('visible');
    }, { passive: true });
    btn.addEventListener('click', function () {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    });
  }

  /* ── PRODUCT LIGHTBOX ── */
  function initLightbox() {
    var overlay = document.querySelector('.lightbox-overlay');
    if (!overlay) return;
    var img = overlay.querySelector('img');
    var closeBtn = overlay.querySelector('.lightbox-close');

    document.querySelectorAll('.product-detail-img img').forEach(function (productImg) {
      productImg.addEventListener('click', function () {
        img.src = this.src;
        img.alt = this.alt;
        overlay.classList.add('open');
        document.body.style.overflow = 'hidden';
      });
    });
    function closeLightbox() {
      overlay.classList.remove('open');
      document.body.style.overflow = '';
    }
    if (closeBtn) closeBtn.addEventListener('click', closeLightbox);
    overlay.addEventListener('click', function (e) { if (e.target === overlay) closeLightbox(); });
    document.addEventListener('keydown', function (e) {
      if (e.key === 'Escape' && overlay.classList.contains('open')) closeLightbox();
    });
  }

  /* ── TESTIMONIALS CAROUSEL ── */
  function initTestimonials() {
    var cards = document.querySelectorAll('.testimonial-card');
    var dots = document.querySelectorAll('.testimonial-dot');
    if (cards.length < 2) return;
    var current = 0;
    var timer;

    function goTo(idx) {
      cards[current].style.display = 'none';
      if (dots[current]) dots[current].classList.remove('active');
      current = idx % cards.length;
      cards[current].style.display = '';
      if (dots[current]) dots[current].classList.add('active');
    }

    cards.forEach(function (c, i) { if (i !== 0) c.style.display = 'none'; });
    if (dots[0]) dots[0].classList.add('active');

    dots.forEach(function (dot, i) {
      dot.addEventListener('click', function () {
        clearInterval(timer);
        goTo(i);
        timer = setInterval(function () { goTo(current + 1); }, 6000);
      });
    });

    timer = setInterval(function () { goTo(current + 1); }, 6000);
  }

  /* ── FAQ ACCORDION ── */
  function initFaqAccordion() {
    document.querySelectorAll('.faq-question').forEach(function (btn) {
      btn.addEventListener('click', function () {
        var item = this.closest('.faq-item');
        var wasOpen = item.classList.contains('open');
        document.querySelectorAll('.faq-item.open').forEach(function (el) { el.classList.remove('open'); });
        if (!wasOpen) item.classList.add('open');
      });
    });
  }

  /* ── SPLASH SCREEN ── */
  function initSplashScreen() {
    var splash = document.querySelector('.splash-screen');
    if (!splash) return;
    setTimeout(function () {
      splash.classList.add('fade-out');
      setTimeout(function () { splash.remove(); }, 600);
    }, 1800);
  }

  /* ── DARK MODE ── */
  function initDarkMode() {
    var toggles = document.querySelectorAll('.dark-toggle');
    if (!toggles.length) return;
    if (localStorage.getItem('darkMode') === 'true') document.body.classList.add('dark-mode');

    toggles.forEach(function (toggle) {
      updateIcon(toggle);
      toggle.addEventListener('click', function () {
        document.body.classList.toggle('dark-mode');
        var isDark = document.body.classList.contains('dark-mode');
        localStorage.setItem('darkMode', isDark);
        toggles.forEach(updateIcon);
      });
    });

    function updateIcon(toggle) {
      var isDark = document.body.classList.contains('dark-mode');
      toggle.innerHTML = isDark
        ? '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="5"/><line x1="12" y1="1" x2="12" y2="3"/><line x1="12" y1="21" x2="12" y2="23"/><line x1="4.22" y1="4.22" x2="5.64" y2="5.64"/><line x1="18.36" y1="18.36" x2="19.78" y2="19.78"/><line x1="1" y1="12" x2="3" y2="12"/><line x1="21" y1="12" x2="23" y2="12"/><line x1="4.22" y1="19.78" x2="5.64" y2="18.36"/><line x1="18.36" y1="5.64" x2="19.78" y2="4.22"/></svg>'
        : '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M21 12.79A9 9 0 1111.21 3 7 7 0 0021 12.79z"/></svg>';
    }
  }

  /* ── COOKIE CONSENT ── */
  function initCookieConsent() {
    var banner = document.querySelector('.cookie-banner');
    if (!banner || localStorage.getItem('cookieConsent')) return;
    setTimeout(function () { banner.classList.add('visible'); }, 2500);
    banner.querySelector('.cookie-accept').addEventListener('click', function () {
      banner.classList.remove('visible');
      localStorage.setItem('cookieConsent', 'true');
    });
  }

  /* ── NEWSLETTER POPUP ── */
  function initNewsletterPopup() {
    var overlay = document.querySelector('.newsletter-popup-overlay');
    if (!overlay || sessionStorage.getItem('newsletterSeen')) return;
    var closeBtn = overlay.querySelector('.newsletter-popup-close');
    var form = overlay.querySelector('form');

    function closePopup() {
      overlay.classList.remove('open');
      sessionStorage.setItem('newsletterSeen', 'true');
    }

    setTimeout(function () { overlay.classList.add('open'); }, 15000);
    if (closeBtn) closeBtn.addEventListener('click', closePopup);
    overlay.addEventListener('click', function (e) { if (e.target === overlay) closePopup(); });
    if (form) form.addEventListener('submit', function (e) {
      e.preventDefault();
      var input = form.querySelector('input');
      if (input && input.value.trim()) {
        form.innerHTML = '<p style="color:var(--color-accent);font-weight:600;">Thank you for subscribing!</p>';
        setTimeout(closePopup, 2000);
      }
    });
  }

  /* ── ANIMATED STATS COUNTER ── */
  function initStatsCounter() {
    var stats = document.querySelectorAll('.stat-number');
    if (!stats.length) return;
    var animated = false;
    var observer = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting && !animated) {
          animated = true;
          stats.forEach(function (el) {
            var target = parseInt(el.getAttribute('data-target'), 10);
            var suffix = el.getAttribute('data-suffix') || '';
            var duration = 2000;
            var start = 0;
            var startTime = null;
            function step(timestamp) {
              if (!startTime) startTime = timestamp;
              var progress = Math.min((timestamp - startTime) / duration, 1);
              var eased = 1 - Math.pow(1 - progress, 3);
              el.textContent = Math.floor(eased * target) + suffix;
              if (progress < 1) requestAnimationFrame(step);
            }
            requestAnimationFrame(step);
          });
          observer.disconnect();
        }
      });
    }, { threshold: 0.3 });
    stats.forEach(function (el) { observer.observe(el); });
  }
})();
