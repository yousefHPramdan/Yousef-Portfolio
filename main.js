// Consolidate DOMContentLoaded logic
document.addEventListener('DOMContentLoaded', () => {

  // ── INJECT WHATSAPP WIDGET ──
  const WA_NUMBER = '+201014124465'; // Updated to match contact page
  const WA_MSG    = encodeURIComponent('Hi Yousef! I saw your portfolio and I\'d like to discuss a Shopify project.');
  const waWidget  = document.createElement('div');
  waWidget.id     = 'whatsapp-widget';
  waWidget.innerHTML = `<a href="https://wa.me/${WA_NUMBER}?text=${WA_MSG}" target="_blank" rel="noopener" aria-label="Chat on WhatsApp">
    <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/></svg>
  </a>`;
  document.body.appendChild(waWidget);

  // ── INJECT SCROLL PROGRESS BAR ──
  const progressBar = document.createElement('div');
  progressBar.id    = 'scroll-progress';
  document.body.prepend(progressBar);

  window.addEventListener('scroll', () => {
    const scrollTop  = document.documentElement.scrollTop;
    const docHeight  = document.documentElement.scrollHeight - document.documentElement.clientHeight;
    const pct        = docHeight > 0 ? (scrollTop / docHeight) * 100 : 0;
    progressBar.style.width = pct + '%';
    waWidget.classList.toggle('visible', scrollTop > 400);
  }, { passive: true });

  // ── CURSOR (GSAP QUICKTO) ──
  const cursor     = document.getElementById('cursor');
  const cursorRing = document.getElementById('cursor-ring');
  if (cursor && cursorRing && typeof gsap !== 'undefined') {
    gsap.set(cursor, {xPercent: -50, yPercent: -50});
    gsap.set(cursorRing, {xPercent: -50, yPercent: -50});
    
    let xTo = gsap.quickTo(cursor, "x", {duration: 0.15, ease: "power3"});
    let yTo = gsap.quickTo(cursor, "y", {duration: 0.15, ease: "power3"});
    
    let xRingTo = gsap.quickTo(cursorRing, "x", {duration: 0.45, ease: "power3"});
    let yRingTo = gsap.quickTo(cursorRing, "y", {duration: 0.45, ease: "power3"});

    window.addEventListener("mousemove", e => {
      xTo(e.clientX);
      yTo(e.clientY);
      xRingTo(e.clientX);
      yRingTo(e.clientY);
    });

    const hoverTargets = document.querySelectorAll('a, button, .magnetic, .tilt, .impact-card, .testi-card, .snippet-card');
    hoverTargets.forEach(target => {
      target.addEventListener('mouseenter', () => {
        gsap.to(cursorRing, { width: 60, height: 60, opacity: 0.6, duration: 0.3 });
        if(target.classList.contains('magnetic')) {
          gsap.to(cursor, { scale: 2, duration: 0.3 });
        }
      });
      target.addEventListener('mouseleave', () => {
        gsap.to(cursorRing, { width: 36, height: 36, opacity: 1, duration: 0.3 });
        gsap.to(cursor, { scale: 1, duration: 0.3 });
      });
    });
  }

  // ── PRELOADER & TRANSITIONS ──
  const bar = document.getElementById('pre-bar');
  const pre = document.getElementById('preloader');
  
  // ── SAFETY FALLBACK ──
  setTimeout(() => {
    if (pre && !pre.classList.contains('done')) {
      pre.classList.add('done');
      if (typeof gsap !== 'undefined') gsap.set(pre, { y: '-100%' });
      
      document.querySelectorAll('.hero-badge, .hero-title, .hero p, .hero .flex.gap-4, .hero .flex.gap-12')
        .forEach(el => el.style.opacity = '1');
      document.querySelectorAll('.reveal').forEach(el => el.classList.add('visible'));
    }
  }, 2500);

  const pageLoadTimeline = (typeof gsap !== 'undefined') ? gsap.timeline() : null;

  if (bar && pre && pageLoadTimeline) {
    gsap.to(bar, { width: '100%', duration: 0.8, ease: 'power2.inOut' });

    pageLoadTimeline
      .to(pre, {
        y: '-100%',
        duration: 1,
        delay: 0.8,
        ease: 'power4.inOut',
        onComplete: () => {
          pre.classList.add('done');
          gsap.set(pre, { y: '100%' }); 
        }
      });

    const heroElements = ['.hero-badge', '.hero p', '.hero .flex.gap-4', '.hero .flex.gap-12', '.hero-image'];
    pageLoadTimeline.fromTo(heroElements, 
      { y: 30, opacity: 0 },
      { y: 0, opacity: 1, duration: 0.8, ease: 'power3.out', stagger: 0.15 },
      "-=0.4"
    );
  }

  // Handle Internal Link Transitions
  document.querySelectorAll('a').forEach(link => {
    const href = link.getAttribute('href');
    if (!href || href.startsWith('#') || link.target === '_blank' || !href.endsWith('.html')) return;
    
    const currentPath = window.location.pathname.split('/').pop() || 'index.html';
    if (href === currentPath) return;

    link.addEventListener('click', e => {
      e.preventDefault();
      if (typeof gsap !== 'undefined' && pre) {
        pre.classList.remove('done');
        gsap.set(pre, { y: '100%' });
        gsap.to(pre, {
          y: '0%',
          duration: 0.6,
          ease: 'power4.inOut',
          onComplete: () => { window.location.href = href; }
        });
      } else {
        window.location.href = href;
      }
    });
  });

  // Ensure preloader reset on back button
  window.addEventListener('pageshow', (event) => {
    if (event.persisted && pre) {
      pre.classList.add('done');
    }
  });

  // ── HERO SPLIT CHARS ──
  const heroEn = document.getElementById('hero-title');
  const heroAr = document.getElementById('hero-title-ar');
  const targetTitle = heroEn || heroAr;

  if (targetTitle && typeof gsap !== 'undefined') {
    const isAr = targetTitle.id === 'hero-title-ar';
    const linesEn = [
      { html: 'I build',                                        cls: 'block' },
      { html: 'Shopify stores',                                 cls: 'block hero-accent-fill' },
      { html: 'that <span class="hero-accent">actually</span> sell.', cls: 'block' },
    ];
    const linesAr = [
      { html: 'بناء متاجر شوبيفاي',                                cls: 'block' },
      { html: '<span class="text-gold">تحقق مبيعات حقيقية.</span>', cls: 'block' }
    ];
    
    const lines = isAr ? linesAr : linesEn;
    targetTitle.innerHTML = '';
    targetTitle.style.opacity = '1';

    lines.forEach((line) => {
      const row = document.createElement('span');
      row.className = line.cls + ' whitespace-nowrap leading-[1.1] mb-2';
      row.style.overflow = 'hidden'; 
      const tmp = document.createElement('div');
      tmp.innerHTML = line.html;
      
      Array.from(tmp.childNodes).forEach(node => {
        if (node.nodeType === 3) {
          node.textContent.split('').forEach(ch => {
            const s = document.createElement('span');
            s.className = 'split-char';
            s.style.display = 'inline-block';
            s.textContent = ch === ' ' ? '\u00A0' : ch;
            row.appendChild(s);
          });
        } else {
          node.textContent.split('').forEach(ch => {
            const w = document.createElement('span');
            w.className = (node.className || '') + ' split-char';
            w.style.display = 'inline-block';
            w.textContent = ch === ' ' ? '\u00A0' : ch;
            row.appendChild(w);
          });
        }
      });
      targetTitle.appendChild(row);
    });

    if (pageLoadTimeline) {
      pageLoadTimeline.fromTo(targetTitle.querySelectorAll('.split-char'), 
        { y: 80, rotationZ: 5, opacity: 0 },
        { y: 0, rotationZ: 0, opacity: 1, duration: 0.8, ease: 'power4.out', stagger: 0.012 },
        "-=1.2"
      );
    }
  }

  // ── HERO STAT COUNTERS ──
  const counters = document.querySelectorAll('.stat-num[data-target]');
  if (counters.length && typeof gsap !== 'undefined') {
    let counted = false;
    const observer = new IntersectionObserver(entries => {
      if (!counted && entries[0].isIntersecting) {
        counted = true;
        counters.forEach((c, i) => {
          const target = parseInt(c.dataset.target);
          gsap.to(c, {
            innerHTML: target,
            duration: 2,
            ease: "power2.out",
            snap: { innerHTML: 1 },
            onUpdate: function() {
              c.innerHTML = Math.round(this.targets()[0].innerHTML) + '+';
            },
            delay: 0.5 + i * 0.2
          });
        });
      }
    }, { threshold: 0.2 });
    
    const heroSection = document.querySelector('.hero');
    if (heroSection) observer.observe(heroSection);
  }

  // ── SMOOTH SCROLL ──
  document.querySelectorAll('a[href^="#"]').forEach(a => {
    a.addEventListener('click', e => {
      const t = document.querySelector(a.getAttribute('href'));
      if (t) { 
        e.preventDefault(); 
        t.scrollIntoView({ behavior:'smooth', block:'start' }); 
      }
    });
  });

  // ── LANGUAGE SWITCHER ──
  const currentPath = window.location.pathname.split('/').pop() || 'index.html';
  const navRight = document.querySelector('.nav-right');
  if (navRight) {
    const isAr = document.documentElement.lang === 'ar';
    const switchUrl = isAr ? currentPath.replace('-ar.html', '.html') : (currentPath.endsWith('.html') ? currentPath.replace('.html', '-ar.html') : 'index-ar.html');
    const switchLabel = isAr ? 'EN' : 'AR';
    let switchLink = navRight.querySelector('a[href*="-ar.html"], a[href="index.html"]:not(.nav-logo), a[aria-label="Switch language"]');
    if (switchLink) {
      switchLink.href = switchUrl;
      switchLink.textContent = switchLabel;
    }
  }

  // ── DYNAMIC COPYRIGHT YEAR ──
  const copyrightEl = document.getElementById('copyright-year');
  if (copyrightEl) copyrightEl.textContent = new Date().getFullYear();

  // ── CASE STUDY CARD CLICK HANDLER (data-case) ──
  // Enables navigation to dedicated case study pages when a project card is clicked.
  const CASE_SLUG_MAP = {
    tiavola: 'case-tiavola.html',
    bypavo: 'case-bypavo.html',
    loading: 'case-loading.html',
    o2morny: 'case-o2morny.html',
    oceanbottle: 'case-oceanbottle.html',
    wishlist: 'case-wishlist.html',
    spydr: 'case-spydr.html',
    horizon: 'case-horizon.html',
    'account-extension': 'case-customer-account-extension.html'
  };

  document.querySelectorAll('[data-case]').forEach(card => {
    card.style.cursor = 'pointer';
    card.addEventListener('click', () => {
      const slug = card.getAttribute('data-case');
      const target = CASE_SLUG_MAP[slug];
      if (target) {
        window.location.href = target;
      }
    });
  });

  // ── SCROLL REVEAL ──
  const revealEls = document.querySelectorAll('.reveal');
  if (typeof gsap !== 'undefined' && typeof ScrollTrigger !== 'undefined') {
    revealEls.forEach((el) => {
      gsap.fromTo(el, 
        { opacity: 0, y: 40, scale: 0.99 },
        { 
          opacity: 1, y: 0, scale: 1,
          duration: 1, 
          ease: 'power3.out',
          scrollTrigger: {
            trigger: el,
            start: 'top 88%',
            toggleActions: 'play none none none'
          },
          onComplete: () => el.classList.add('visible')
        }
      );
    });
  }

  // ── 3D TILT ──
  document.querySelectorAll('.tilt').forEach(card => {
    card.addEventListener('mousemove', e => {
      const r = card.getBoundingClientRect();
      const x = (e.clientX - r.left) / r.width - 0.5;
      const y = (e.clientY - r.top)  / r.height - 0.5;
      if (typeof gsap !== 'undefined') {
        gsap.to(card, {
          rotationY: x * 10,
          rotationX: -y * 10,
          z: 10,
          duration: 0.4,
          ease: "power2.out",
          transformPerspective: 1000
        });
      }
    });
    card.addEventListener('mouseleave', () => { 
      if (typeof gsap !== 'undefined') {
        gsap.to(card, { rotationY: 0, rotationX: 0, z: 0, duration: 0.7, ease: "elastic.out(1, 0.3)" });
      }
    });
  });

  // ── MAGNETIC ELEMENTS (Snapping) ──
  document.querySelectorAll('.magnetic').forEach(btn => {
    btn.addEventListener('mousemove', e => {
      const r = btn.getBoundingClientRect();
      const x = (e.clientX - r.left - r.width/2);
      const y = (e.clientY - r.top  - r.height/2);
      
      if (typeof gsap !== 'undefined') {
        // Button movement
        gsap.to(btn, { x: x * 0.4, y: y * 0.4, duration: 0.6, ease: "power2.out" });
        
        // Optional: Cursor snapping effect
        if (cursor && cursorRing) {
          gsap.to(cursor, { x: e.clientX, y: e.clientY, duration: 0.1 });
          gsap.to(cursorRing, { 
            x: r.left + r.width/2 + (x * 0.2), 
            y: r.top + r.height/2 + (y * 0.2), 
            scale: 1.5,
            duration: 0.4 
          });
        }
      }
    });
    btn.addEventListener('mouseleave', () => { 
      if (typeof gsap !== 'undefined') {
        gsap.to(btn, { x: 0, y: 0, duration: 0.8, ease: "elastic.out(1, 0.3)" }); 
        if (cursorRing) gsap.to(cursorRing, { scale: 1, duration: 0.4 });
      }
    });
  });

  // ── TEXT REVEAL (Digital reveal on titles) ──
  const titles = document.querySelectorAll('.section-title');
  if (typeof gsap !== 'undefined' && typeof ScrollTrigger !== 'undefined') {
    titles.forEach(title => {
      gsap.fromTo(title, 
        { clipPath: 'inset(0 100% 0 0)', opacity: 0, x: -20 },
        { 
          clipPath: 'inset(0 0% 0 0)', opacity: 1, x: 0,
          duration: 1.2, 
          ease: 'power4.out',
          scrollTrigger: {
            trigger: title,
            start: 'top 90%',
            toggleActions: 'play none none none'
          }
        }
      );
    });
  }

  // ── INITIALIZE COMPONENTS ──
  initBASlider();
  initPricingToggle();
  initROICalculator();
  initFAQ();
});

// ── COMPONENT INITIALIZERS ──

function initBASlider() {
  const container = document.getElementById('ba-slider');
  if (!container) return;
  const before = container.querySelector('.ba-before');
  const beforeImg = before.querySelector('img');
  const handle = container.querySelector('.ba-handle');
  let isResizing = false;
  function setSlider(x) {
    const rect = container.getBoundingClientRect();
    let pos = ((x - rect.left) / rect.width) * 100;
    pos = Math.max(0, Math.min(100, pos));
    before.style.width = `${pos}%`;
    beforeImg.style.width = `${container.offsetWidth}px`;
    handle.style.left = `${pos}%`;
  }
  container.addEventListener('mousedown', () => isResizing = true);
  window.addEventListener('mouseup', () => isResizing = false);
  window.addEventListener('mousemove', (e) => { if (isResizing) setSlider(e.clientX); });
  container.addEventListener('touchstart', () => isResizing = true, { passive: true });
  window.addEventListener('touchend', () => isResizing = false);
  window.addEventListener('touchmove', (e) => { if (isResizing) setSlider(e.touches[0].clientX); }, { passive: true });
}

function initROICalculator() {
  const revInput = document.getElementById('roi-revenue');
  const resultEl = document.getElementById('roi-result');
  const totalEl = document.getElementById('roi-total');
  if (!revInput || !resultEl) return;
  function updateROI() {
    const revenue = parseFloat(revInput.value) || 0;
    const lift = revenue * 0.15;
    if (typeof gsap !== 'undefined') {
      const currentVal = parseFloat(resultEl.textContent.replace(/[$,+]/g, '')) || 0;
      gsap.to({ val: currentVal }, {
        val: lift, duration: 1, ease: "power2.out",
        onUpdate: function() {
          resultEl.textContent = '+$' + Math.round(this.targets()[0].val).toLocaleString();
          totalEl.textContent = '$' + Math.round(revenue + this.targets()[0].val).toLocaleString();
        }
      });
    }
  }
  revInput.addEventListener('input', updateROI);
}

function initPricingToggle() {
  const toggleBtns = document.querySelectorAll('.pricing-toggle-btn');
  const priceCards = document.querySelectorAll('.pricing-card');
  toggleBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      const type = btn.dataset.pricing;
      if (btn.classList.contains('active')) return;
      toggleBtns.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      priceCards.forEach((card, i) => {
        const el = card.querySelector('.price-val');
        const period = card.querySelector('.price-period');
        if (!el) return;
        const newPrice = el.getAttribute(`data-${type}`);
        if (typeof gsap !== 'undefined') {
          gsap.to(el, { opacity: 0, y: -10, duration: 0.2, onComplete: () => {
            el.textContent = newPrice;
            if (period) {
              period.textContent = type === 'retainer' ? '/mo' : '';
              if (i === 3 && type === 'project') period.textContent = '+';
            }
            gsap.to(el, { opacity: 1, y: 0, duration: 0.3 });
          }});
        }
      });
    });
  });
}

function initFAQ() {
  document.querySelectorAll('.faq-q').forEach(q => {
    q.addEventListener('click', () => {
      const item = q.parentElement;
      const isOpen = item.classList.contains('active');
      document.querySelectorAll('.faq-item').forEach(i => {
        i.classList.remove('active');
        i.querySelector('.faq-answer').style.maxHeight = '0';
      });
      if (!isOpen) {
        item.classList.add('active');
        const ans = item.querySelector('.faq-answer');
        ans.style.maxHeight = ans.scrollHeight + 'px';
      }
    });
  });
}
