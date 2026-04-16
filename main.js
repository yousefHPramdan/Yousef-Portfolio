// ═══════════════════════════════════════
//  YOUSEF.DEV — SHARED JS
// ═══════════════════════════════════════

document.addEventListener('DOMContentLoaded', () => {

  // ── INJECT WHATSAPP WIDGET ──
  const WA_NUMBER = '+201234567890';
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

    const hoverTargets = document.querySelectorAll('a, button, .magnetic, .tilt');
    hoverTargets.forEach(target => {
      target.addEventListener('mouseenter', () => {
        gsap.to(cursorRing, { width: 56, height: 56, opacity: 0.6, duration: 0.3 });
        if(target.classList.contains('magnetic')) {
          gsap.to(cursor, { scale: 2.5, duration: 0.3 });
        }
      });
      target.addEventListener('mouseleave', () => {
        gsap.to(cursorRing, { width: 36, height: 36, opacity: 1, duration: 0.3 });
        gsap.to(cursor, { scale: 1, duration: 0.3 });
      });
    });
  } else if (cursor && cursorRing) {
    let mx=0, my=0, rx=0, ry=0;
    document.addEventListener('mousemove', e => { mx=e.clientX; my=e.clientY; });
    (function animCursor(){
      rx += (mx-rx)*0.12; ry += (my-ry)*0.12;
      cursor.style.transform     = `translate(calc(-50% + ${mx}px), calc(-50% + ${my}px))`;
      cursorRing.style.transform = `translate(calc(-50% + ${rx}px), calc(-50% + ${ry}px))`;
      requestAnimationFrame(animCursor);
    })();
  }

  // ── PRELOADER & TRANSITIONS ──
  const bar = document.getElementById('pre-bar');
  const pre = document.getElementById('preloader');
  
  // ── SAFETY FALLBACK ──
  // If GSAP fails or timeline stalls, ensure page is visible after 2.5s
  setTimeout(() => {
    if (pre && !pre.classList.contains('done')) {
      pre.classList.add('done');
      if (typeof gsap !== 'undefined') gsap.set(pre, { y: '-100%' });
      else pre.style.transform = 'translateY(-100%)';
      
      // Force show hero elements
      document.querySelectorAll('.hero-badge, .hero-title, .hero p, .hero .flex.gap-4, .hero .flex.gap-12')
        .forEach(el => el.style.opacity = '1');
        
      // Force show all reveal elements
      document.querySelectorAll('.reveal').forEach(el => el.classList.add('visible'));
    }
  }, 2500);

  const pageLoadTimeline = (typeof gsap !== 'undefined') ? gsap.timeline() : null;

  if (bar && pre && pageLoadTimeline) {
    // Initial State for pre-bar
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

    // Staggered reveal of hero elements (if they exist)
    const heroElements = [
      '.hero-badge',
      '.hero p',
      '.hero .flex.gap-4',
      '.hero .flex.gap-12'
    ];
    
    pageLoadTimeline.fromTo(heroElements, 
      { y: 30, opacity: 0 },
      { y: 0, opacity: 1, duration: 0.8, ease: 'power3.out', stagger: 0.15 },
      "-=0.4"
    );
  } else if (pre) {
    setTimeout(() => pre.classList.add('done'), 1000);
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
      { html: '<span class="text-gold">مصممة للتحويل والمبيعات.</span>', cls: 'block' }
    ];
    
    const lines = isAr ? linesAr : linesEn;
    targetTitle.innerHTML = ''; // Clear original
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
        { y: 0, rotationZ: 0, opacity: 1, duration: 0.8, ease: 'power4.out', stagger: 0.015 },
        "-=1.2"
      );
    }
  }

  // ── HERO STAT COUNTERS ──
  const counters = document.querySelectorAll('.stat-num[data-target]');
  if (counters.length && typeof gsap !== 'undefined') {
    let counted = false;
    const heroEl = document.querySelector('.hero');
    if (heroEl) {
      new IntersectionObserver(entries => {
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
              delay: 1.5 + i * 0.2
            });
          });
        }
      }, { threshold: 0.5 }).observe(heroEl);
    }
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
    const switchUrl = isAr ? currentPath.replace('-ar.html', '.html') : currentPath.replace('.html', '-ar.html');
    const switchLabel = isAr ? 'EN' : 'AR';
    
    let switchLink = navRight.querySelector('a[href*="-ar.html"], a[href="index.html"]:not(.nav-logo)');
    if (switchLink) {
      switchLink.href = switchUrl;
      switchLink.textContent = switchLabel;
    }
  }

  // ── DYNAMIC COPYRIGHT YEAR ──
  const copyrightEl = document.getElementById('copyright-year');
  if (copyrightEl) copyrightEl.textContent = new Date().getFullYear();

  // ── SCROLL REVEAL ──
  const revealEls = document.querySelectorAll('.reveal');
  if (typeof gsap !== 'undefined' && typeof ScrollTrigger !== 'undefined') {
    revealEls.forEach((el) => {
      gsap.fromTo(el, 
        { opacity: 0, y: 50, scale: 0.98 },
        { 
          opacity: 1, 
          y: 0, 
          scale: 1,
          duration: 1.2, 
          ease: 'expo.out',
          scrollTrigger: {
            trigger: el,
            start: 'top 85%',
            toggleActions: 'play none none none'
          },
          onComplete: () => el.classList.add('visible')
        }
      );
    });
  } else {
    const revealObs = new IntersectionObserver((entries) => {
      entries.forEach((e, i) => {
        if (e.isIntersecting) {
          setTimeout(() => e.target.classList.add('visible'), i * 70);
          revealObs.unobserve(e.target);
        }
      });
    }, { threshold: 0.08, rootMargin: '0px 0px -30px 0px' });
    revealEls.forEach(el => revealObs.observe(el));
  }

  // ── 3D TILT ──
  document.querySelectorAll('.tilt').forEach(card => {
    card.addEventListener('mousemove', e => {
      const r = card.getBoundingClientRect();
      const x = (e.clientX - r.left) / r.width - 0.5;
      const y = (e.clientY - r.top)  / r.height - 0.5;
      if (typeof gsap !== 'undefined') {
        gsap.to(card, {
          rotationY: x * 15,
          rotationX: -y * 15,
          z: 20,
          duration: 0.4,
          ease: "power2.out",
          transformPerspective: 1000
        });
      } else {
        card.style.transform = `perspective(800px) rotateY(${x*8}deg) rotateX(${-y*8}deg) translateY(-4px)`;
      }
    });
    card.addEventListener('mouseleave', () => { 
      if (typeof gsap !== 'undefined') {
        gsap.to(card, {
          rotationY: 0,
          rotationX: 0,
          z: 0,
          duration: 0.7,
          ease: "elastic.out(1, 0.3)"
        });
      } else {
        card.style.transform = '';
      }
    });
  });

  // ── MAGNETIC BUTTONS ──
  document.querySelectorAll('.magnetic').forEach(btn => {
    btn.addEventListener('mousemove', e => {
      const r = btn.getBoundingClientRect();
      const x = (e.clientX - r.left - r.width/2)  * 0.4;
      const y = (e.clientY - r.top  - r.height/2) * 0.4;
      if (typeof gsap !== 'undefined') {
        gsap.to(btn, { x: x, y: y, duration: 0.4, ease: "power2.out" });
      } else {
        btn.style.transform = `translate(${x}px,${y}px)`;
      }
    });
    btn.addEventListener('mouseleave', () => { 
      if (typeof gsap !== 'undefined') {
        gsap.to(btn, { x: 0, y: 0, duration: 0.7, ease: "elastic.out(1, 0.3)" }); 
      } else {
        btn.style.transform = '';
      }
    });
  });

  // ── PROJECT MODAL ──
  const modalOverlay = document.getElementById('modal-overlay');
  const modalEl      = document.getElementById('modal');
  const modalClose   = document.getElementById('modal-close');

  function openModal(card) {
    if (!modalOverlay || !modalEl) return;
    const d = card.dataset;
    document.getElementById('m-hero').style.background = d.color || 'linear-gradient(135deg,#1a0533,#4a1080)';
    document.getElementById('m-hero').textContent = d.title;
    document.getElementById('m-title').textContent = d.title;
    document.getElementById('m-desc').textContent  = d.desc  || '';
    document.getElementById('m-scope').textContent    = d.scope    || '—';
    document.getElementById('m-stack').textContent    = d.stack    || '—';
    document.getElementById('m-timeline').textContent = d.timeline || '—';
    document.getElementById('m-result').textContent   = d.result   || '—';
    const lnk = document.getElementById('m-link');
    if (lnk) { if (d.link) { lnk.href = d.link; lnk.style.display='inline-flex'; } else { lnk.style.display='none'; } }
    const tags = document.getElementById('m-tags');
    if (tags) {
      tags.innerHTML = '';
      (d.tags || '').split(',').forEach(t => {
        const s = document.createElement('span'); s.className='modal-tag'; s.textContent=t.trim(); tags.appendChild(s);
      });
    }
    modalOverlay.classList.add('open');
    document.body.style.overflow = 'hidden';
  }

  function closeModal() {
    if (!modalOverlay) return;
    modalOverlay.classList.remove('open');
    document.body.style.overflow = '';
  }

  window.closeModal = closeModal;
  document.querySelectorAll('[data-project]').forEach(c => c.addEventListener('click', () => openModal(c)));
  if (modalClose) modalClose.addEventListener('click', closeModal);
  if (modalOverlay) modalOverlay.addEventListener('click', e => { if (e.target === modalOverlay) closeModal(); });
  document.addEventListener('keydown', e => { if (e.key === 'Escape') closeModal(); });

  // ── CASE STUDY NAVIGATION ──
  document.querySelectorAll('[data-case]').forEach(card => {
    card.addEventListener('click', () => {
      const caseId = card.dataset.case;
      const isAr = document.documentElement.lang === 'ar';
      const url = `case-${caseId}${isAr ? '-ar' : ''}.html`;
      
      if (typeof gsap !== 'undefined' && pre) {
        pre.classList.remove('done');
        gsap.to(pre, {
          y: '0%',
          duration: 0.6,
          ease: 'power4.inOut',
          onComplete: () => { window.location.href = url; }
        });
      } else {
        window.location.href = url;
      }
    });
  });

});

/* ── BEFORE/AFTER SLIDER LOGIC ── */
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
  window.addEventListener('mousemove', (e) => {
    if (!isResizing) return;
    setSlider(e.clientX);
  });

  container.addEventListener('touchstart', (e) => {
    isResizing = true;
    if (e.cancelable) e.preventDefault();
  }, { passive: false });
  window.addEventListener('touchend', () => isResizing = false);
  window.addEventListener('touchmove', (e) => {
    if (!isResizing) return;
    setSlider(e.touches[0].clientX);
  }, { passive: false });
}

document.addEventListener('DOMContentLoaded', () => {
  initBASlider();
  initPricingToggle();
  initROICalculator();
});

function initROICalculator() {
  const revInput = document.getElementById('roi-revenue');
  const resultEl = document.getElementById('roi-result');
  const totalEl = document.getElementById('roi-total');

  if (!revInput || !resultEl) return;

  function updateROI() {
    const revenue = parseFloat(revInput.value) || 0;
    const liftRatio = 0.15; 
    const increase = revenue * liftRatio;
    const total = revenue + increase;

    const currentVal = parseFloat(resultEl.textContent.replace(/[$,+]/g, '')) || 0;
    
    if (typeof gsap !== 'undefined') {
      gsap.to({ val: currentVal }, {
        val: increase,
        duration: 1,
        ease: "power2.out",
        onUpdate: function() {
          resultEl.textContent = '+$' + Math.round(this.targets()[0].val).toLocaleString();
          totalEl.textContent = '$' + Math.round(revenue + this.targets()[0].val).toLocaleString();
        }
      });
    } else {
      resultEl.textContent = '+$' + Math.round(increase).toLocaleString();
      totalEl.textContent = '$' + Math.round(total).toLocaleString();
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
          gsap.to(el, {
            opacity: 0,
            y: -10,
            duration: 0.2,
            onComplete: () => {
              el.textContent = newPrice;
              if (period) {
                period.textContent = type === 'retainer' ? '/mo' : '';
                if (i === 2 && type === 'project') period.textContent = '+';
              }
              gsap.to(el, { opacity: 1, y: 0, duration: 0.3 });
            }
          });
        } else {
          el.textContent = newPrice;
          if (period) {
            period.textContent = type === 'retainer' ? '/mo' : '';
            if (i === 2 && type === 'project') period.textContent = '+';
          }
        }
      });
    });
  });
}
