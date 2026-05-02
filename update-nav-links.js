const fs = require('fs');
const path = require('path');

const dir = 'E:\\yousef dev\\Yousef-Portfolio';
const files = fs.readdirSync(dir).filter(f => f.endsWith('.html'));

files.forEach(file => {
  const filePath = path.join(dir, file);
  let content = fs.readFileSync(filePath, 'utf8');
  
  const getActiveClass = (page) => file === page ? 'nav-link active' : 'nav-link';
  
  const newList = `<ul id="nav-links" role="list">
        <li><a href="services.html" class="${getActiveClass('services.html')}">Services</a></li>
        <li><a href="work.html" class="${getActiveClass('work.html')}">Work</a></li>
        <li><a href="store.html" class="${getActiveClass('store.html')}">Store</a></li>
        <li><a href="contact.html" class="${getActiveClass('contact.html')}">Contact</a></li>
        <li><a href="pricing.html" class="${getActiveClass('pricing.html')}">Pricing</a></li>
        <li><a href="process.html" class="${getActiveClass('process.html')}">Process</a></li>
        <li><a href="blog.html" class="${getActiveClass('blog.html')}">Blog</a></li>
      </ul>`;

  const ulRegex = /<ul id="nav-links" role="list">[\s\S]*?<\/ul>/;
  
  if (ulRegex.test(content)) {
    const updatedContent = content.replace(ulRegex, newList);
    if (updatedContent !== content) {
      fs.writeFileSync(filePath, updatedContent);
      console.log(`Updated nav links in ${file}`);
    }
  } else {
    console.log(`No <ul id="nav-links" found in ${file}`);
  }
});
console.log('Done.');
