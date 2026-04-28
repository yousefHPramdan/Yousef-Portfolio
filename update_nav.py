import os
import re

directory = r"e:\yousef dev\Yousef-Portfolio"
files = [f for f in os.listdir(directory) if f.endswith('.html')]

for file in files:
    file_path = os.path.join(directory, file)
    with open(file_path, 'r', encoding='utf-8') as f:
        content = f.read()
    
    # We want to replace everything from <ul id="nav-links" to </ul>
    is_ar = "-ar.html" in file
    
    # Active class logic based on file name
    def get_class(target):
        base_file = file.replace("-ar.html", ".html")
        if target == "services" and base_file.startswith("services"): return "nav-link active"
        if target == "work" and (base_file.startswith("work") or base_file.startswith("case-")): return "nav-link active"
        if target == "store" and base_file.startswith("store"): return "nav-link active"
        if target == "devtools" and base_file.startswith("devtools"): return "nav-link active"
        if target == "blog" and (base_file.startswith("blog") or base_file.startswith("article")): return "nav-link active"
        if target == "process" and base_file.startswith("process"): return "nav-link active"
        if target == "pricing" and base_file.startswith("pricing"): return "nav-link active"
        if target == "contact" and base_file.startswith("contact"): return "nav-link active"
        return "nav-link"

    if is_ar:
        new_nav = f"""<ul id="nav-links" role="list">
        <li><a href="services-ar.html" class="{get_class('services')}">الخدمات</a></li>
        <li><a href="work-ar.html" class="{get_class('work')}">الأعمال</a></li>
        <li><a href="store-ar.html" class="{get_class('store')}">المتجر</a></li>
        <li><a href="devtools-ar.html" class="{get_class('devtools')}">أدوات المطورين</a></li>
        <li><a href="blog-ar.html" class="{get_class('blog')}">المدونة</a></li>
        <li><a href="process-ar.html" class="{get_class('process')}">العملية</a></li>
        <li><a href="pricing-ar.html" class="{get_class('pricing')}">الأسعار</a></li>
        <li><a href="contact-ar.html" class="{get_class('contact')}">اتصل</a></li>
      </ul>"""
    else:
        new_nav = f"""<ul id="nav-links" role="list">
        <li><a href="services.html" class="{get_class('services')}">Services</a></li>
        <li><a href="work.html" class="{get_class('work')}">Work</a></li>
        <li><a href="store.html" class="{get_class('store')}">Store</a></li>
        <li><a href="devtools.html" class="{get_class('devtools')}">DevTools</a></li>
        <li><a href="blog.html" class="{get_class('blog')}">Blog</a></li>
        <li><a href="process.html" class="{get_class('process')}">Process</a></li>
        <li><a href="pricing.html" class="{get_class('pricing')}">Pricing</a></li>
        <li><a href="contact.html" class="{get_class('contact')}">Contact</a></li>
      </ul>"""

    new_content = re.sub(r'<ul id="nav-links".*?</ul>', new_nav, content, flags=re.DOTALL)
    
    if new_content != content:
        with open(file_path, 'w', encoding='utf-8') as f:
            f.write(new_content)
        print(f"Updated {file}")
