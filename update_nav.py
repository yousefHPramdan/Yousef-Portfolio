import re
import os

files_to_update = {
    "EN_WORK": ["work.html", "case-oceanbottle.html", "case-bypavo.html", "case-loading.html", "case-o2morny.html", "case-tiavola.html", "case-wishlist.html"],
    "EN_SERVICES": ["services.html"],
    "EN_BLOG": ["blog.html", "article-cro-strategy.html", "article-liquid-performance.html", "article-shopify-apps.html"],
    "EN_PRICING": ["pricing.html"],
    "EN_NONE": ["about.html", "contact.html", "store.html", "process.html", "404.html"],
    "AR_WORK": ["work-ar.html", "case-oceanbottle-ar.html", "case-bypavo-ar.html", "case-loading-ar.html", "case-o2morny-ar.html", "case-tiavola-ar.html", "case-wishlist-ar.html"],
    "AR_SERVICES": ["services-ar.html"],
    "AR_BLOG": ["blog-ar.html", "article-cro-strategy-ar.html", "article-liquid-performance-ar.html", "article-shopify-apps-ar.html"],
    "AR_PRICING": ["pricing-ar.html"],
    "AR_NONE": ["about-ar.html", "contact-ar.html", "store-ar.html", "process-ar.html", "404-ar.html"]
}

def get_new_menu(group):
    if group.startswith("EN"):
        links = [
            ('work.html', 'Work'),
            ('services.html', 'Services'),
            ('blog.html', 'Blog'),
            ('pricing.html', 'Pricing')
        ]
        active_target = group.split("_")[1].lower()
        active_file = active_target + ".html"
        
        items = []
        for href, text in links:
            is_active = False
            if active_target == "work" and href == "work.html": is_active = True
            elif active_target == "services" and href == "services.html": is_active = True
            elif active_target == "blog" and href == "blog.html": is_active = True
            elif active_target == "pricing" and href == "pricing.html": is_active = True
            
            cls = "nav-link active" if is_active else "nav-link"
            items.append(f'        <li><a href="{href}" class="{cls}">{text}</a></li>')
            
        return '      <ul id="nav-links" role="list">\n' + '\n'.join(items) + '\n      </ul>'
    else:
        links = [
            ('work-ar.html', 'الأعمال'),
            ('services-ar.html', 'الخدمات'),
            ('blog-ar.html', 'المدونة'),
            ('pricing-ar.html', 'الأسعار')
        ]
        active_target = group.split("_")[1].lower()
        active_file = active_target + "-ar.html"
        
        items = []
        for href, text in links:
            is_active = False
            if active_target == "work" and href == "work-ar.html": is_active = True
            elif active_target == "services" and href == "services-ar.html": is_active = True
            elif active_target == "blog" and href == "blog-ar.html": is_active = True
            elif active_target == "pricing" and href == "pricing-ar.html": is_active = True
            
            cls = "nav-link active" if is_active else "nav-link"
            items.append(f'        <li><a href="{href}" class="{cls}">{text}</a></li>')
            
        return '      <ul id="nav-links" role="list">\n' + '\n'.join(items) + '\n      </ul>'

nav_regex = re.compile(r'\s*<ul id="nav-links" role="list">.*?</ul>', re.DOTALL)

for group, files in files_to_update.items():
    new_menu = get_new_menu(group)
    for filename in files:
        if not os.path.exists(filename):
            print(f"Skipping {filename} - not found")
            continue
        with open(filename, 'r', encoding='utf-8') as f:
            content = f.read()
        
        match = nav_regex.search(content)
        if match:
            # Preserve original indentation if possible
            orig_nav = match.group(0)
            indent = orig_nav[:orig_nav.find('<ul')]
            
            # Re-format new_menu with correct indentation
            lines = new_menu.strip().split('\n')
            formatted_menu = indent + lines[0] + '\n'
            for line in lines[1:-1]:
                # adjust internal indentation
                formatted_menu += indent + "  " + line.strip() + '\n'
            formatted_menu += indent + lines[-1]
            
            new_content = nav_regex.sub(formatted_menu, content)
            with open(filename, 'w', encoding='utf-8') as f:
                f.write(new_content)
            print(f"Updated {filename}")
        else:
            print(f"Could not find nav in {filename}")
