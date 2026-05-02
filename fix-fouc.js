const fs = require('fs');
const path = require('path');

const dir = 'E:\\yousef dev\\Yousef-Portfolio';
const files = fs.readdirSync(dir).filter(f => f.endsWith('.html'));

const scriptToInject = `
  <script>
    (function() {
      const savedTheme = localStorage.getItem('yousef-theme') || 'dark';
      document.documentElement.setAttribute('data-theme', savedTheme);
    })();
  </script>`;

files.forEach(file => {
  const filePath = path.join(dir, file);
  let content = fs.readFileSync(filePath, 'utf8');
  
  if (content.includes("localStorage.getItem('yousef-theme')") && content.includes("<script>")) {
    console.log(`Already injected in ${file}`);
    return;
  }
  
  if (/<head>/i.test(content)) {
    content = content.replace(/<head>/i, `<head>${scriptToInject}`);
    fs.writeFileSync(filePath, content);
    console.log(`Injected FOUC script into ${file}`);
  }
});
console.log('Done.');
