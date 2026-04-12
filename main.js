// ═══════════════════════════════════════
//  YOUSEF.DEV — SHARED JS
// ═══════════════════════════════════════

document.addEventListener('DOMContentLoaded', () => {

  // ── INJECT WHATSAPP WIDGET ──
  // Replace +201234567890 with your actual WhatsApp number (international format, no spaces)
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

  // ── CURSOR ──
  const cursor     = document.getElementById('cursor');
  const cursorRing = document.getElementById('cursor-ring');
  if (cursor && cursorRing) {
    let mx=0, my=0, rx=0, ry=0;
    document.addEventListener('mousemove', e => { mx=e.clientX; my=e.clientY; });
    (function animCursor(){
      rx += (mx-rx)*0.12; ry += (my-ry)*0.12;
      cursor.style.left     = mx+'px'; cursor.style.top = my+'px';
      cursorRing.style.left = rx+'px'; cursorRing.style.top = ry+'px';
      requestAnimationFrame(animCursor);
    })();
  }

  // ── PRELOADER & TRANSITIONS ──
  const bar = document.getElementById('pre-bar');
  const pre = document.getElementById('preloader');

  // Page Load Animation (In)
  if (bar && pre && typeof gsap !== 'undefined') {
    setTimeout(() => { if(bar) bar.style.width = '100%'; }, 50);
    setTimeout(() => {
      gsap.to(pre, {
        y: '-100%',
        duration: 0.8,
        ease: 'power4.inOut',
        onComplete: () => {
          pre.classList.add('done');
          gsap.set(pre, { y: '100%' }); // Position ready for next transition
        }
      });
    }, 800);
  } else if (pre) {
    setTimeout(() => pre.classList.add('done'), 1000);
  }

  // Handle Internal Link Transitions (Out)
  document.querySelectorAll('a').forEach(link => {
    const href = link.getAttribute('href');
    if (!href || href.startsWith('#') || link.target === '_blank' || !href.endsWith('.html')) return;
    
    // Skip if it's the current page
    const currentPath = window.location.pathname.split('/').pop() || 'index.html';
    if (href === currentPath) return;

    link.addEventListener('click', e => {
      e.preventDefault();
      if (!pre) { window.location.href = href; return; }
      
      pre.classList.remove('done');
      gsap.to(pre, {
        y: '0%',
        duration: 0.6,
        ease: 'power4.inOut',
        onComplete: () => { window.location.href = href; }
      });
    });
  });

  // ── THEME TOGGLE ──
  const themeBtn = document.getElementById('theme-btn');
  const html = document.documentElement;
  const saved = localStorage.getItem('ys-theme') || 'dark';
  html.setAttribute('data-theme', saved);
  if (themeBtn) {
    themeBtn.textContent = saved === 'dark' ? '🌙' : '☀️';
    themeBtn.addEventListener('click', () => {
      const next = html.getAttribute('data-theme') === 'dark' ? 'light' : 'dark';
      html.setAttribute('data-theme', next);
      localStorage.setItem('ys-theme', next);
      themeBtn.textContent = next === 'dark' ? '🌙' : '☀️';
    });
  }

  // ── NAVBAR SCROLL ──
  const navbar = document.getElementById('navbar');
  if (navbar) {
    window.addEventListener('scroll', () => {
      navbar.style.background = window.scrollY > 50
        ? 'rgba(14,13,11,0.96)' : 'rgba(14,13,11,0.8)';
    });
  }

  // ── NAV TOGGLE (mobile) ──
  const navToggle = document.getElementById('nav-toggle');
  const navLinks  = document.getElementById('nav-links');
  if (navToggle && navLinks) {
    navToggle.addEventListener('click', () => navLinks.classList.toggle('open'));
    navLinks.querySelectorAll('a').forEach(a => a.addEventListener('click', () => navLinks.classList.remove('open')));
  }

  // ── SCROLL REVEAL ──
  const revealEls = document.querySelectorAll('.reveal');
  const revealObs = new IntersectionObserver((entries) => {
    entries.forEach((e, i) => {
      if (e.isIntersecting) {
        setTimeout(() => e.target.classList.add('visible'), i * 70);
        revealObs.unobserve(e.target);
      }
    });
  }, { threshold: 0.08, rootMargin: '0px 0px -30px 0px' });
  revealEls.forEach(el => revealObs.observe(el));

  // ── 3D TILT ──
  document.querySelectorAll('.tilt').forEach(card => {
    card.addEventListener('mousemove', e => {
      const r = card.getBoundingClientRect();
      const x = (e.clientX - r.left) / r.width - 0.5;
      const y = (e.clientY - r.top)  / r.height - 0.5;
      card.style.transform = `perspective(800px) rotateY(${x*8}deg) rotateX(${-y*8}deg) translateY(-4px)`;
    });
    card.addEventListener('mouseleave', () => { card.style.transform = ''; });
  });

  // ── MAGNETIC BUTTONS ──
  document.querySelectorAll('.magnetic').forEach(btn => {
    btn.addEventListener('mousemove', e => {
      const r = btn.getBoundingClientRect();
      const x = (e.clientX - r.left - r.width/2)  * 0.35;
      const y = (e.clientY - r.top  - r.height/2) * 0.35;
      btn.style.transform = `translate(${x}px,${y}px)`;
    });
    btn.addEventListener('mouseleave', () => { btn.style.transform = ''; });
  });

  // ── STICKY WIDGET ──
  const sw = document.getElementById('sticky-widget');
  if (sw) {
    window.addEventListener('scroll', () => {
      sw.classList.toggle('visible', window.scrollY > 400);
    }, { passive: true });
  }

  // ── FAQ ACCORDION ──
  document.querySelectorAll('.faq-item').forEach(item => {
    const btn = item.querySelector('.faq-q');
    if (!btn) return;
    btn.addEventListener('click', () => {
      const active = item.classList.contains('active');
      document.querySelectorAll('.faq-item').forEach(i => {
        i.classList.remove('active');
        const a = i.querySelector('.faq-answer');
        if (a) a.style.maxHeight = null;
      });
      if (!active) {
        item.classList.add('active');
        const ans = item.querySelector('.faq-answer');
        if (ans) ans.style.maxHeight = ans.scrollHeight + 'px';
      }
    });
  });

  // ── SNIPPET FILTER ──
  document.querySelectorAll('.filter-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      document.querySelectorAll('.filter-btn').forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      const f = btn.dataset.filter;
      document.querySelectorAll('.snippet-card').forEach(c => {
        c.classList.toggle('hidden', f !== 'all' && c.dataset.category !== f);
      });
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
  
  // ── CASE STUDY NAVIGATION ──
  document.querySelectorAll('[data-case]').forEach(card => {
    card.addEventListener('click', () => {
      const caseId = card.dataset.case;
      const url = `case-${caseId}.html`;
      
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

  if (modalClose) modalClose.addEventListener('click', closeModal);

  if (modalOverlay) modalOverlay.addEventListener('click', e => { if (e.target === modalOverlay) closeModal(); });
  document.addEventListener('keydown', e => { if (e.key === 'Escape') closeModal(); });

  // ── HERO SPLIT CHARS (index only) ──
  const heroTitle = document.getElementById('hero-title');
  if (heroTitle) {
    const lines = [
      { html: 'I build',                                        cls: 'block' },
      { html: 'Shopify stores',                                 cls: 'block hero-accent-fill' },
      { html: 'that <span class="hero-accent">actually</span> sell.', cls: 'block' },
    ];
    lines.forEach((line, li) => {
      const row = document.createElement('span');
      row.className = line.cls + ' whitespace-nowrap';
      const tmp = document.createElement('div');
      tmp.innerHTML = line.html;
      let ci = 0;
      Array.from(tmp.childNodes).forEach(node => {
        if (node.nodeType === 3) {
          node.textContent.split('').forEach(ch => {
            const s = document.createElement('span');
            s.className = 'split-char';
            s.style.animationDelay = (1.2 + li*0.3 + ci*0.03) + 's';
            s.textContent = ch === ' ' ? '\u00A0' : ch;
            row.appendChild(s); ci++;
          });
        } else {
          const w = document.createElement('span');
          w.innerHTML = node.outerHTML;
          w.className = 'split-char';
          w.style.animationDelay = (1.2 + li*0.3 + ci*0.03) + 's';
          row.appendChild(w); ci += node.textContent.length;
        }
      });
      heroTitle.appendChild(row);
      heroTitle.appendChild(document.createElement('br'));
    });
  }

  // ── HERO STAT COUNTERS ──
  const counters = document.querySelectorAll('.stat-num[data-target]');
  if (counters.length) {
    let counted = false;
    const heroEl = document.querySelector('.hero');
    if (heroEl) {
      new IntersectionObserver(entries => {
        if (!counted && entries[0].isIntersecting) {
          counted = true;
          counters.forEach(c => {
            const target = parseInt(c.dataset.target);
            let cur = 0;
            const step = target / 30;
            const int = setInterval(() => {
              cur = Math.min(cur + step, target);
              c.textContent = Math.round(cur) + '+';
              if (cur >= target) clearInterval(int);
            }, 40);
          });
        }
      }, { threshold: 0.5 }).observe(heroEl);
    }
  }

  // ── SMOOTH SCROLL ──
  document.querySelectorAll('a[href^="#"]').forEach(a => {
    a.addEventListener('click', e => {
      const t = document.querySelector(a.getAttribute('href'));
      if (t) { e.preventDefault(); t.scrollIntoView({ behavior:'smooth', block:'start' }); }
    });
  });

  // ── DYNAMIC COPYRIGHT YEAR ──
  const copyrightEl = document.getElementById('copyright-year');
  if (copyrightEl) copyrightEl.textContent = new Date().getFullYear();

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
    beforeImg.style.width = `${100 / (pos / 100)}%`;
    handle.style.left = `${pos}%`;
  }

  container.addEventListener('mousedown', () => isResizing = true);
  window.addEventListener('mouseup', () => isResizing = false);
  window.addEventListener('mousemove', (e) => {
    if (!isResizing) return;
    setSlider(e.pageX);
  });

  // Touch Support
  container.addEventListener('touchstart', () => isResizing = true);
  window.addEventListener('touchend', () => isResizing = false);
  window.addEventListener('touchmove', (e) => {
    if (!isResizing) return;
    setSlider(e.touches[0].pageX);
  });
}


// Initialize on load
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
    
    // Conservative 15% lift on conversion efficiency
    // This translates to a 15% revenue increase if traffic stays the same
    const liftRatio = 0.15; 
    const increase = revenue * liftRatio;
    const total = revenue + increase;

    // Use GSAP to animate the numbers for a premium feel
    const currentVal = parseFloat(resultEl.textContent.replace(/[$,+]/g, '')) || 0;
    
    gsap.to({ val: currentVal }, {
      val: increase,
      duration: 1,
      ease: "power2.out",
      onUpdate: function() {
        resultEl.textContent = `+$${Math.round(this.targets()[0].val).toLocaleString()}`;
        totalEl.textContent = `$${Math.round(revenue + this.targets()[0].val).toLocaleString()}`;
      }
    });
  }

  revInput.addEventListener('input', updateROI);
}

function initPricingToggle() {
  const toggleBtns = document.querySelectorAll('.pricing-toggle-btn');
  const priceCards = document.querySelectorAll('.pricing-card');
  const periods    = document.querySelectorAll('.price-period');

  toggleBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      const type = btn.dataset.pricing; // 'project' or 'retainer'
      if (btn.classList.contains('active')) return;

      toggleBtns.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      
      priceCards.forEach((card, i) => {
        const el = card.querySelector('.price-val');
        const period = card.querySelector('.price-period');
        if (!el) return;

        const newPrice = el.getAttribute(`data-${type}`);
        
        gsap.to(el, {
          opacity: 0,
          y: -10,
          duration: 0.2,
          onComplete: () => {
            el.textContent = newPrice;
            if (period) {
              period.textContent = type === 'retainer' ? '/mo' : '';
              // Special case for Enterprise plus sign
              if (i === 2 && type === 'project') period.textContent = '+';
            }
            gsap.to(el, { opacity: 1, y: 0, duration: 0.3 });
          }
        });
      });
    });
  });
}
