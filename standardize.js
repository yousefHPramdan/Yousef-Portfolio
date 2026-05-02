const fs = require('fs');

const navHTML = `  <nav id="navbar" style="background:rgba(5,5,5,0.8)" aria-label="Main navigation">
    <div class="nav-inner">
      <a href="index.html" class="nav-logo relative z-[1001]" aria-label="Yousef Ramadan Home">Yousef<span class="logo-dot">.</span></a>
      <ul id="nav-links" role="list">
        <li><a href="services.html" class="nav-link">Services</a></li>
        <li><a href="work.html" class="nav-link">Work</a></li>
        <li><a href="store.html" class="nav-link">Store</a></li>
        <li><a href="contact.html" class="nav-link">Contact</a></li>
        <li><a href="pricing.html" class="nav-link">Pricing</a></li>
        <li><a href="process.html" class="nav-link">Process</a></li>
        <li><a href="blog.html" class="nav-link">Blog</a></li>
      </ul>
      <div class="nav-right">
        <a href="mailto:hello@youseframadan.me" class="btn-primary btn-sm desktop">Let's Talk</a>
        <button id="theme-btn" aria-label="Toggle dark/light theme">🌙</button>
        <button id="nav-toggle" aria-label="Toggle mobile menu" aria-expanded="false"><span></span><span></span><span></span></button>
      </div>
    </div>
  </nav>`;

const footerHTML = `  <!-- FOOTER -->
  <footer>
    <div class="container">
      <div class="flex flex-col md:flex-row justify-between items-center gap-8 mb-12">
        <div class="text-center md:text-left">
          <a href="index.html" class="font-heading font-extrabold text-[1.5rem] text-ink mb-2 block">Yousef<span class="text-gold">.</span></a>
          <p class="text-[#5a5040] text-[0.85rem] max-w-[280px]">Building high-performing Shopify storefronts that turn browsers into buyers.</p>
        </div>
        <div class="flex gap-6">
          <a href="https://www.linkedin.com/in/yousef-ramadan-5540a3209/" target="_blank" class="text-ink-2 hover:text-gold transition-colors"><svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path><rect x="2" y="9" width="4" height="12"></rect><circle cx="4" cy="4" r="2"></circle></svg></a>
          <a href="https://github.com/yousefHPramdan" target="_blank" class="text-ink-2 hover:text-gold transition-colors"><svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path></svg></a>
        </div>
        <div class="text-center md:text-right">
          <div class="text-ink font-bold text-[0.9rem] mb-1">Cairo, Egypt</div>
          <div class="text-jade text-[0.75rem] font-bold tracking-widest uppercase">Available Worldwide</div>
        </div>
      </div>
      <div class="pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-4">
        <p class="text-[0.82rem] text-[#5a5040]">&copy; <span id="copyright-year">2026</span> Yousef Ramadan. All rights reserved.</p>
        <div class="flex gap-6">
          <a href="index.html#about" class="footer-link">About</a>
          <a href="work.html" class="footer-link">Work</a>
          <a href="services.html" class="footer-link">Services</a>
        </div>
      </div>
    </div>
  </footer>`;

['index.html', 'work.html', 'services.html'].forEach(file => {
    let html = fs.readFileSync(file, 'utf8');
    
    // Replace Nav
    html = html.replace(/<!-- NAV -->[\s\S]*?<\/nav>/, `<!-- NAV -->\n${navHTML}`);
    
    // Replace Footer
    html = html.replace(/<!-- FOOTER -->[\s\S]*?<\/footer>/, footerHTML);
    
    fs.writeFileSync(file, html);
});

console.log('Nav and Footer standardized.');
