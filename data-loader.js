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

  function createFeaturedCard(snippet) {
    const cell = document.createElement('div');
    cell.className = 'carousel-cell w-full md:w-1/2 lg:w-1/3 px-3 mb-6';
    if (isAr) cell.dir = 'rtl';

    const card = document.createElement('div');
    card.className = 'snippet-card h-full flex flex-col m-0'; 
    card.setAttribute('data-category', snippet.category);
    
    const title = isAr ? snippet.title.ar : snippet.title.en;
    const desc = isAr ? snippet.description.ar : snippet.description.en;

    card.innerHTML = `
      ${snippet.badge ? `<span class="snippet-badge ${snippet.badgeClass}">${snippet.badge}</span>` : ''}
      <img src="${snippet.image}" class="snippet-img" alt="${title}" loading="lazy">
      <h3>${title}</h3>
      <p>${desc}</p>
      <div class="flex items-center gap-3 mt-auto pt-4">
        <span class="${snippet.isFree ? 'price-free' : 'price-now'}">${snippet.price.now}</span>
        ${snippet.price.old ? `<span class="price-old">${snippet.price.old}</span>` : ''}
      </div>
    `;
    cell.appendChild(card);
    return cell;
  }

  function createGridCard(snippet) {
    const card = document.createElement('div');
    card.className = 'snippet-card h-full flex flex-col m-0 reveal'; 
    card.setAttribute('data-category', snippet.category);
    if (isAr) card.dir = 'rtl';
    
    const title = isAr ? snippet.title.ar : snippet.title.en;
    const desc = isAr ? snippet.description.ar : snippet.description.en;

    card.innerHTML = `
      ${snippet.badge ? `<span class="snippet-badge ${snippet.badgeClass}">${snippet.badge}</span>` : ''}
      <img src="${snippet.image}" class="snippet-img" alt="${title}" loading="lazy">
      <h3>${title}</h3>
      <p>${desc}</p>
      <div class="flex items-center gap-3 mt-auto pt-4">
        <span class="${snippet.isFree ? 'price-free' : 'price-now'}">${snippet.price.now}</span>
        ${snippet.price.old ? `<span class="price-old">${snippet.price.old}</span>` : ''}
      </div>
    `;
    return card;
  }

  function renderFeatured() {
    featuredGrid.innerHTML = '';
    
    let featured = window.snippetData.filter(s => s.badge === 'Bestseller' || s.badge === 'Popular' || s.badge === 'Hot').slice(0, 4);
    if (featured.length === 0) {
      featured = window.snippetData.slice(0, 4);
    }
    
    featured.forEach(snippet => {
      featuredGrid.appendChild(createFeaturedCard(snippet));
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

  function renderSnippets(filter = 'all') {
    grid.innerHTML = '';
    
    const filtered = filter === 'all' 
      ? window.snippetData 
      : window.snippetData.filter(s => s.category === filter);

    filtered.forEach(snippet => {
      grid.appendChild(createGridCard(snippet));
    });

    if (typeof gsap !== 'undefined' && typeof ScrollTrigger !== 'undefined' && filtered.length > 0) {
      gsap.fromTo(grid.querySelectorAll('.snippet-card'), 
        { opacity: 0, y: 15 },
        { opacity: 1, y: 0, duration: 0.4, stagger: 0.05, ease: 'power2.out', clearProps: 'all' }
      );
    }
  }

  filterBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      filterBtns.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      renderSnippets(btn.getAttribute('data-filter'));
    });
  });
});