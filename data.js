const snippetData = [
  {
    id: 'speed-booster',
    category: 'performance',
    badge: 'Top Pick',
    badgeClass: 'badge-pop',
    title: {
      en: 'Speed Booster Pack',
      ar: 'كود تسريع المتجر'
    },
    description: {
      en: 'Lazy-load scripts, defer third-party apps, and improve Core Web Vitals instantly.',
      ar: 'تحميل تدريجي للأكواد وتأخير تطبيقات الطرف الثالث لتحسين أداء المتجر فوراً.'
    },
    image: 'assets/snippets/speed-booster.png',
    price: {
      now: '$19.00',
      old: '$59.00'
    },
    isFree: false,
    code: ''
  },
  {
    id: 'cart-progress',
    category: 'cart',
    badge: 'Bestseller',
    badgeClass: 'badge-pop',
    title: {
      en: 'Free Shipping Progress Bar',
      ar: 'شريط تقدم الشحن المجاني'
    },
    description: {
      en: 'Shows how much more to spend to unlock free shipping. Drives AOV every time.',
      ar: 'يوضح للعملاء المبلغ المتبقي للحصول على شحن مجاني. يزيد من متوسط قيمة الطلب.'
    },
    image: 'assets/snippets/cart-progress.png',
    price: {
      now: '$18.50',
      old: '$39.00'
    },
    isFree: false,
    code: ''
  },
  {
    id: 'fbt-section',
    category: 'sales',
    badge: 'High ROI',
    badgeClass: 'badge-new',
    title: {
      en: 'Frequently Bought Together',
      ar: 'قسم المنتجات المشتراة معاً'
    },
    description: {
      en: 'Amazon-style bundling — lets customers add 3 products in one click.',
      ar: 'نظام تجميع المنتجات على طريقة أمازون — يتيح للعملاء إضافة 3 منتجات بضغطة واحدة.'
    },
    image: 'assets/snippets/fbt-section.png',
    price: {
      now: '$24.90',
      old: '$65.00'
    },
    isFree: false,
    code: ''
  },
  {
    id: 'whatsapp-chat',
    category: 'social',
    badge: 'Free',
    badgeClass: 'badge-free',
    title: {
      en: 'Floating WhatsApp Chat',
      ar: 'زر دردشة واتساب العائم'
    },
    description: {
      en: 'Connect with your customers directly via WhatsApp with this clean floating button.',
      ar: 'تواصل مع عملائك مباشرة عبر واتساب من خلال هذا الزر العائم الأنيق.'
    },
    image: 'assets/snippets/whatsapp.png',
    price: {
      now: 'FREE',
      old: ''
    },
    isFree: true,
    code: `<!-- WhatsApp Floating Button -->
<a href="https://wa.me/YOUR_NUMBER" class="wa-float" target="_blank">
  <img src="https://upload.wikimedia.org/wikipedia/commons/6/6b/WhatsApp.svg" alt="WhatsApp">
</a>
<style>
.wa-float {
  position: fixed;
  bottom: 20px;
  right: 20px;
  width: 60px;
  height: 60px;
  background-color: #25d366;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  box-shadow: 2px 2px 10px rgba(0,0,0,0.2);
  z-index: 1000;
}
.wa-float img { width: 35px; height: 35px; }
</style>`
  },
  {
    id: 'sticky-atc',
    category: 'sales',
    badge: 'Conversion',
    badgeClass: 'badge-pop',
    title: {
      en: 'Sticky Add to Cart',
      ar: 'زر الإضافة للسلة الثابت'
    },
    description: {
      en: 'Keep the purchase button visible at all times as the customer scrolls.',
      ar: 'اجعل زر الشراء مرئياً دائماً أمام العميل أثناء تصفح صفحة المنتج.'
    },
    image: 'assets/snippets/sticky-atc.png',
    price: {
      now: '$15.00',
      old: '$29.00'
    },
    isFree: false,
    code: ''
  },
  {
    id: 'variant-swatches',
    category: 'design',
    badge: 'Popular',
    badgeClass: 'badge-pop',
    title: {
      en: 'Advanced Variant Swatches',
      ar: 'خيارات المنتج المتقدمة'
    },
    description: {
      en: 'Replace ugly dropdowns with clean color and image swatches.',
      ar: 'استبدل القوائم المنسدلة التقليدية بخيارات ألوان وصور منتجات أنيقة.'
    },
    image: 'assets/snippets/variant-swatches.png',
    price: {
      now: '$12.00',
      old: '$25.00'
    },
    isFree: false,
    code: ''
  },
  {
    id: 'low-stock-bar',
    category: 'sales',
    badge: 'Urgency',
    badgeClass: 'badge-new',
    title: {
      en: 'Low Stock Scarcity Bar',
      ar: 'شريط نفاذ المخزون'
    },
    description: {
      en: 'Drive sales using urgency with a real-time low stock indicator.',
      ar: 'حفز المبيعات باستخدام عامل الندرة مع مؤشر حقيقي لنفاذ الكمية.'
    },
    image: 'assets/snippets/low-stock-bar.png',
    price: {
      now: '$9.90',
      old: '$19.00'
    },
    isFree: false,
    code: ''
  },
  {
    id: 'performance-analytics',
    category: 'performance',
    badge: 'Pro',
    badgeClass: 'badge-pop',
    title: {
      en: 'Performance Analytics Tool',
      ar: 'أداة تحليل الأداء'
    },
    description: {
      en: 'Track your store speed and identify which apps are slowing you down.',
      ar: 'تتبع سرعة متجرك وحدد التطبيقات التي تتسبب في بطء الأداء.'
    },
    image: 'assets/snippets/perf-analytics.png',
    price: {
      now: '$19.90',
      old: '$49.00'
    },
    isFree: false,
    code: ''
  }
];

// If using ES modules in future, export default snippetData;
// For now, it will be a global variable since it's a simple static site.