document.addEventListener('DOMContentLoaded', () => {
  const isAr = document.documentElement.lang === 'ar';
  const grid = document.getElementById('snippets-grid');
  const featuredGrid = document.getElementById('featured-grid');
  const filterBtns = document.querySelectorAll('.filter-btn');

  if (!window.snippetData) return;

  // Initialize Featured Slider if container exists
  if (featuredGrid) {
    renderFeatured();
  }

  // Initialize Snippets Grid if container exists
  if (grid) {
    renderSnippets();
  }

  function createSnippetCard(snippet) {
    const cell = document.createElement('div');
    cell.className = 'carousel-cell w-full md:w-1/2 lg:w-1/3 px-3 mb-6';
    if (isAr) cell.dir = 'rtl';

    const card = document.createElement('div');
    card.className = 'snippet-card h-full flex flex-col m-0'; 
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
      <div class="flex items-center justify-between mt-auto pt-4">
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
    cell.appendChild(card);
    return cell;
  }

  function renderFeatured() {
    featuredGrid.innerHTML = '';
    // Take first 4 snippets marked as "Best Seller" or just the first 4 if none marked
    const featured = window.snippetData.filter(s => s.badge === 'Best Seller' || s.badge === 'الأكثر مبيعاً').slice(0, 4);
    
    featured.forEach(snippet => {
      featuredGrid.appendChild(createSnippetCard(snippet));
    });

    new Flickity(featuredGrid, {
      cellAlign: isAr ? 'right' : 'left',
      contain: true,
      pageDots: true,
      prevNextButtons: true,
      rightToLeft: isAr,
      wrapAround: true,
      autoPlay: 4000
    });
  }

  let snippetsFlkty = null;

  function renderSnippets(filter = 'all') {
    if (snippetsFlkty) {
      snippetsFlkty.destroy();
      snippetsFlkty = null;
    }
    
    grid.innerHTML = '';
    
    const filtered = filter === 'all' 
      ? window.snippetData 
      : window.snippetData.filter(s => s.category === filter);

    filtered.forEach(snippet => {
      grid.appendChild(createSnippetCard(snippet));
    });

    snippetsFlkty = new Flickity(grid, {
      cellAlign: isAr ? 'right' : 'left',
      contain: true,
      pageDots: true,
      prevNextButtons: true,
      rightToLeft: isAr,
      wrapAround: false
    });

    attachCopyListeners();
    
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
      btn.addEventListener('click', (e) => {
        e.stopPropagation();
        const code = decodeURIComponent(btn.getAttribute('data-code'));
        navigator.clipboard.writeText(code).then(() => {
          const originalText = btn.textContent;
          btn.textContent = isAr ? 'تم النسخ!' : 'Copied!';
          const oldBg = btn.style.background;
          btn.style.background = '#4ec994';
          btn.style.color = '#0e0d0b';
          setTimeout(() => {
            btn.textContent = originalText;
            btn.style.background = oldBg;
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
});