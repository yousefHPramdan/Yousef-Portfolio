document.addEventListener('DOMContentLoaded', () => {
  const isAr = document.documentElement.lang === 'ar';
  const grid = document.getElementById('snippet-grid');
  const filterBtns = document.querySelectorAll('.filter-btn');

  if (!grid || !window.snippetData) return;

  function renderSnippets(filter = 'all') {
    grid.innerHTML = '';
    
    const filtered = filter === 'all' 
      ? window.snippetData 
      : window.snippetData.filter(s => s.category === filter);

    filtered.forEach(snippet => {
      const card = document.createElement('div');
      card.className = 'snippet-card reveal visible'; // Force visible for now, or let GSAP handle it
      card.setAttribute('data-category', snippet.category);
      
      const title = isAr ? snippet.title.ar : snippet.title.en;
      const desc = isAr ? snippet.description.ar : snippet.description.en;
      const copyBtnText = isAr ? 'نسخ الكود' : 'Copy Code';
      const buyBtnText = isAr ? 'شراء الآن' : 'Buy Now';

      card.innerHTML = `
        <span class="snippet-badge ${snippet.badgeClass}">${snippet.badge}</span>
        <img src="${snippet.image}" class="snippet-img" alt="${title}" loading="lazy">
        <h3>${title}</h3>
        <p>${desc}</p>
        <div class="flex items-center justify-between mt-auto">
          <div class="flex items-center gap-3">
            <span class="${snippet.isFree ? 'price-free' : 'price-now'}">${snippet.price.now}</span>
            ${snippet.price.old ? `<span class="price-old">${snippet.price.old}</span>` : ''}
          </div>
          ${snippet.isFree 
            ? `<button class="btn-primary btn-sm copy-btn" data-code="${encodeURIComponent(snippet.code)}">${copyBtnText}</button>`
            : `<a href="#" class="btn-secondary btn-sm">${buyBtnText}</a>`
          }
        </div>
      `;
      grid.appendChild(card);
    });

    // Re-attach copy event listeners
    attachCopyListeners();
    
    // Re-trigger reveal animation if GSAP is present
    if (typeof gsap !== 'undefined' && typeof ScrollTrigger !== 'undefined') {
      gsap.from(grid.querySelectorAll('.snippet-card'), {
        opacity: 0,
        y: 30,
        duration: 0.8,
        stagger: 0.1,
        ease: 'power3.out'
      });
    }
  }

  function attachCopyListeners() {
    document.querySelectorAll('.copy-btn').forEach(btn => {
      btn.addEventListener('click', () => {
        const code = decodeURIComponent(btn.getAttribute('data-code'));
        navigator.clipboard.writeText(code).then(() => {
          const originalText = btn.textContent;
          btn.textContent = isAr ? 'تم النسخ!' : 'Copied!';
          btn.style.background = '#4ec994';
          btn.style.color = '#0e0d0b';
          setTimeout(() => {
            btn.textContent = originalText;
            btn.style.background = '';
            btn.style.color = '';
          }, 2000);
        });
      });
    });
  }

  filterBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      filterBtns.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      renderSnippets(btn.getAttribute('data-filter'));
    });
  });

  // Initial render
  renderSnippets();
});