window.snippetData = [
  // 1. CART & CHECKOUT (10 items)
  {
    id: 'cart-progress',
    category: 'cart',
    badge: 'Bestseller',
    badgeClass: 'badge-pop',
    title: { en: 'Free Shipping Progress Bar', ar: 'شريط تقدم الشحن المجاني' },
    description: { 
      en: 'Shows how much more to spend to unlock free shipping. Drives AOV every time.', 
      ar: 'يوضح للعملاء المبلغ المتبقي للحصول على شحن مجاني. يزيد من متوسط قيمة الطلب.' 
    },
    image: 'assets/snippets/cart-progress.png',
    price: { now: '$18.50', old: '$39.00' },
    isFree: false
  },
  {
    id: 'upsell-popup',
    category: 'cart',
    badge: 'Hot',
    badgeClass: 'badge-pop',
    title: { en: 'Cart Upsell / Cross-sell', ar: 'عروض السلة المنبثقة' },
    description: { 
      en: 'Displays related product suggestions in the side drawer at the right moment.', 
      ar: 'عرض اقتراحات منتجات ذات صلة في السلة الجانبية في الوقت المناسب.' 
    },
    image: 'assets/snippets/upsell-popup.png',
    price: { now: '$19.90', old: '$59.00' },
    isFree: false
  },
  {
    id: 'free-gift-unlocker',
    category: 'cart',
    title: { en: 'Free Gift Unlocker', ar: 'مُفعل الهدايا المجانية' },
    description: { 
      en: 'Auto-adds a free gift to the cart once spending threshold is hit. Native Liquid.', 
      ar: 'يضيف هدية مجانية تلقائياً للسلة عند وصول المشتريات لمبلغ محدد.' 
    },
    image: 'assets/snippets/free-gift-unlocker.png',
    price: { now: '$19.90', old: '$45.00' },
    isFree: false
  },
  {
    id: 'cart-savings',
    category: 'cart',
    title: { en: '"You Saved" Calculator', ar: 'حاسبة "لقد وفرت"' },
    description: { 
      en: 'Highlights total order savings in the cart summary to push checkout.', 
      ar: 'يوضح إجمالي التوفير في ملخص السلة لتحفيز العميل على إتمام الطلب.' 
    },
    image: 'assets/snippets/cart-savings.png',
    price: { now: '$9.90', old: '$25.00' },
    isFree: false
  },
  {
    id: 'cart-terms',
    category: 'cart',
    title: { en: 'Cart Terms & Conditions Checkbox', ar: 'مربع الموافقة على الشروط' },
    description: { 
      en: 'Customer must accept terms before the checkout button appears.', 
      ar: 'يجب على العميل الموافقة على الشروط قبل ظهور زر إتمام الطلب.' 
    },
    image: 'assets/snippets/cart-terms.png',
    price: { now: '$9.90', old: '$19.00' },
    isFree: false
  },
  {
    id: 'empty-cart',
    category: 'cart',
    title: { en: 'Empty Cart Recommender', ar: 'مقترحات السلة الفارغة' },
    description: { 
      en: 'Shows bestsellers automatically when the cart is empty instead of a blank page.', 
      ar: 'يعرض المنتجات الأكثر مبيعاً تلقائياً عندما تكون السلة فارغة.' 
    },
    image: 'assets/snippets/empty-cart.png',
    price: { now: '$14.90', old: '$39.00' },
    isFree: false
  },
  {
    id: 'estimated-delivery',
    category: 'cart',
    title: { en: 'Estimated Delivery Date', ar: 'تاريخ التوصيل المتوقع' },
    description: { 
      en: '"Order now and receive by May 10th" — builds trust and reduces abandonment.', 
      ar: 'يعرض تاريخ وصول المنتج المتوقع لزيادة الثقة وتقليل التخلي عن السلة.' 
    },
    image: 'assets/snippets/estimated-delivery.png',
    price: { now: '$14.90', old: '$29.00' },
    isFree: false
  },
  {
    id: 'shipping-protection',
    category: 'cart',
    badge: 'New',
    badgeClass: 'badge-new',
    title: { en: 'Shipping Protection Checkbox', ar: 'حماية الشحن (تأمين)' },
    description: { 
      en: 'A 1-click checkbox in the cart to add $1.99 "Shipping Insurance". Pure profit margin for merchants without using 3rd party apps.', 
      ar: 'إضافة خيار "تأمين الشحن" بضغطة واحدة مقابل مبلغ إضافي، مما يزيد من ربحك.' 
    },
    image: 'assets/snippets/shipping-protection.png',
    price: { now: '$12.50', old: '$25.00' },
    isFree: false
  },
  {
    id: 'cart-timer',
    category: 'cart',
    badge: 'Urgency',
    badgeClass: 'badge-new',
    title: { en: 'Cart Reservation Timer', ar: 'مؤقت حجز المنتجات' },
    description: { 
      en: '"Your items are reserved for 09:59". A powerful psychological trigger in the cart drawer that creates instant urgency to checkout.', 
      ar: '"منتجاتك محجوزة لمدة 09:59". محفز نفسي قوي في السلة لإتمام الشراء فوراً.' 
    },
    image: 'assets/snippets/cart-timer.png',
    price: { now: '$14.90', old: '$29.00' },
    isFree: false
  },
  {
    id: 'gift-wrap',
    category: 'cart',
    badge: 'AOV Boost',
    badgeClass: 'badge-new',
    title: { en: 'Gift Wrapping Option', ar: 'خيار تغليف الهدايا' },
    description: { 
      en: 'Allows customers to add premium gift wrapping to their order via a simple checkbox. Instantly boosts AOV.', 
      ar: 'يتيح للعملاء طلب تغليف هدايا فاخر بضغطة زر، مما يزيد من قيمة الطلب.' 
    },
    image: 'assets/snippets/gift-wrap.png',
    price: { now: '$9.90', old: '$19.00' },
    isFree: false
  },

  // 2. PRODUCTS (14 items)
  {
    id: 'sticky-atc',
    category: 'products',
    badge: 'Popular',
    badgeClass: 'badge-pop',
    title: { en: 'Sticky Add To Cart', ar: 'زر الإضافة للسلة الثابت' },
    description: { 
      en: 'ATC bar sticks to the bottom of the screen as customers scroll.', 
      ar: 'زر الإضافة للسلة يظل ثابتاً أسفل الشاشة أثناء تمرير العميل للصفحة.' 
    },
    image: 'assets/snippets/sticky-atc.png',
    price: { now: '$14.90', old: '$29.00' },
    isFree: false
  },
  {
    id: 'low-stock-bar',
    category: 'products',
    title: { en: 'Low Stock Scarcity Bar', ar: 'شريط نفاذ المخزون' },
    description: { 
      en: '"Hurry! Only 3 items left." Triggers based on real stock levels.', 
      ar: '"أسرع! تبقت 3 قطع فقط". شريط مرئي يعتمد على مستويات المخزون الحقيقية.' 
    },
    image: 'assets/snippets/low-stock-bar.png',
    price: { now: '$14.90', old: '$39.00' },
    isFree: false
  },
  {
    id: 'fbt-section',
    category: 'products',
    badge: 'High ROI',
    badgeClass: 'badge-new',
    title: { en: 'Frequently Bought Together', ar: 'منتجات تُشترى غالباً معاً' },
    description: { 
      en: 'Amazon-style bundling — lets customers add 3 products in one click.', 
      ar: 'نظام تجميع المنتجات بأسلوب أمازون - إضافة 3 منتجات بضغطة واحدة.' 
    },
    image: 'assets/snippets/fbt-section.png',
    price: { now: '$24.90', old: '$65.00' },
    isFree: false
  },
  {
    id: 'variant-swatches',
    category: 'products',
    title: { en: 'Variant Image Swatches', ar: 'خيارات المنتج بالصور' },
    description: { 
      en: 'Turns boring color dropdowns into visual thumbnail buttons.', 
      ar: 'يحول قوائم الألوان المنسدلة المملة إلى أزرار صور مصغرة جذابة.' 
    },
    image: 'assets/snippets/variant-swatches.png',
    price: { now: '$19.90', old: '$45.00' },
    isFree: false
  },
  {
    id: 'product-tabs',
    category: 'products',
    title: { en: 'Product Accordions / Tabs', ar: 'تبويبات وصف المنتج' },
    description: { 
      en: 'Collapse long descriptions and policies into clean accordion dropdowns.', 
      ar: 'تنظيم وصف المنتج الطويل وسياسات المتجر في قوائم منسدلة أنيقة.' 
    },
    image: 'assets/snippets/product-tabs.png',
    price: { now: '$14.90', old: '$39.00' },
    isFree: false
  },
  {
    id: 'size-chart',
    category: 'products',
    title: { en: 'Size Chart Popup', ar: 'جدول المقاسات المنبثق' },
    description: { 
      en: 'Opens a modal with the full size chart. Reduces returns and refunds.', 
      ar: 'نافذة منبثقة لعرض جدول المقاسات، مما يقلل من عمليات الإرجاع.' 
    },
    image: 'assets/snippets/size-chart.png',
    price: { now: '$9.90', old: '$19.00' },
    isFree: false
  },
  {
    id: 'visitor-counter',
    category: 'products',
    title: { en: 'Live Visitor Counter', ar: 'عداد الزوار المباشر' },
    description: { 
      en: '"24 people are viewing this right now." Creates social proof and demand.', 
      ar: '"24 شخص يشاهدون هذا المنتج الآن". يخلق دليلاً اجتماعياً قوياً.' 
    },
    image: 'assets/snippets/visitor-counter.png',
    price: { now: '$14.90', old: '$35.00' },
    isFree: false
  },
  {
    id: 'back-in-stock',
    category: 'products',
    title: { en: 'Back-in-Stock Notification', ar: 'إشعار توفر المنتج' },
    description: { 
      en: 'Email form for out-of-stock products to capture lost revenue.', 
      ar: 'نموذج بريدي للمنتجات غير المتوفرة لإبلاغ العملاء فور توفرها.' 
    },
    image: 'assets/snippets/back-in-stock.png',
    price: { now: '$19.90', old: '$49.00' },
    isFree: false
  },
  {
    id: 'trust-badges',
    category: 'products',
    title: { en: 'Dynamic Trust Badges', ar: 'شارات الثقة الديناميكية' },
    description: { 
      en: 'Customizable payment icons appear below the checkout button.', 
      ar: 'شارات أيقونات الدفع (مدى، فيزا، إلخ) تظهر أسفل زر الشراء.' 
    },
    image: 'assets/snippets/trust-badges.png',
    price: { now: '$9.90', old: '$19.00' },
    isFree: false
  },
  {
    id: 'split-payment',
    category: 'products',
    badge: 'MENA Favorite',
    badgeClass: 'badge-pop',
    title: { en: 'Split Payment Calculator', ar: 'حاسبة الدفع بالتقسيط' },
    description: { 
      en: 'Dynamically calculates and displays "Pay in 4 interest-free payments of $X". Crucial for MENA and high-ticket stores.', 
      ar: 'يعرض "قسط مشترياتك على 4 دفعات بقيمة X". ضروري لمتاجر تمارا وتابي.' 
    },
    image: 'assets/snippets/split-payment.png',
    price: { now: '$15.00', old: '$35.00' },
    isFree: false
  },
  {
    id: 'zip-delivery',
    category: 'products',
    title: { en: 'Zip-Code Delivery Checker', ar: 'فاحص التوصيل بالرمز البريدي' },
    description: { 
      en: '"Check if we deliver to your area." An input field that verifies delivery availability based on zip codes before they add to cart.', 
      ar: 'تحقق من إمكانية التوصيل لمنطقة العميل قبل إضافة المنتج للسلة.' 
    },
    image: 'assets/snippets/zip-delivery.png',
    price: { now: '$14.90', old: '$29.00' },
    isFree: false
  },
  {
    id: 'collection-video',
    category: 'products',
    badge: 'Engagement',
    badgeClass: 'badge-new',
    title: { en: 'Collection Video Hover', ar: 'فيديو عند تمرير الماوس' },
    description: { 
      en: 'Product images silently play a video when the user hovers over them on collection pages. Massive boost to engagement.', 
      ar: 'تشغيل فيديو المنتج صامتاً عند تمرير الماوس على صورته في صفحات المجموعات.' 
    },
    image: 'assets/snippets/collection-video.png',
    price: { now: '$19.90', old: '$45.00' },
    isFree: false
  },
  {
    id: 'pip-video',
    category: 'products',
    title: { en: 'Sticky Floating Video (PIP)', ar: 'فيديو عائم مثبت (PIP)' },
    description: { 
      en: 'When a customer scrolls past your product video, it shrinks and pins to the corner of the screen so they keep watching while reading descriptions.', 
      ar: 'تصغير وتثبيت فيديو المنتج في الزاوية أثناء تمرير العميل لقراءة الوصف.' 
    },
    image: 'assets/snippets/pip-video.png',
    price: { now: '$24.90', old: '$59.00' },
    isFree: false
  },
  {
    id: 'bogo-badges',
    category: 'products',
    badge: 'Dynamic',
    badgeClass: 'badge-new',
    title: { en: 'Dynamic BOGO Badges', ar: 'شارات العروض التلقائية' },
    description: { 
      en: 'Automatically tags products with eye-catching "Buy 1 Get 1 Free" or "2+1" badges based on your Shopify automated discounts.', 
      ar: 'إضافة شارات تلقائية مثل "اشتري 1 واحصل على 1" بناءً على خصومات متجرك.' 
    },
    image: 'assets/snippets/bogo-badges.png',
    price: { now: '$9.90', old: '$25.00' },
    isFree: false
  },

  // 3. SALES & CRO (8 items)
  {
    id: 'volume-discount',
    category: 'sales',
    title: { en: 'Tiered Volume Discount', ar: 'خصم الكميات المتعددة' },
    description: { 
      en: '"Buy 2 get 10% off" — drives bulk orders without an app.', 
      ar: '"اشتري 2 واحصل على 10% خصم" - يزيد المبيعات بدون تطبيقات ثقيلة.' 
    },
    image: 'assets/snippets/volume-discount.png',
    price: { now: '$19.90', old: '$49.00' },
    isFree: false
  },
  {
    id: 'countdown-timer',
    category: 'sales',
    title: { en: 'Product Page Countdown', ar: 'مؤقت تنازلي للعروض' },
    description: { 
      en: 'Hours, minutes, seconds ticking down on the offer.', 
      ar: 'ساعات ودقائق وثواني تتناقص، مما يخلق استعجالاً حقيقياً للشراء.' 
    },
    image: 'assets/snippets/countdown-timer.png',
    price: { now: '$14.90', old: '$29.00' },
    isFree: false
  },
  {
    id: 'sales-pop',
    category: 'sales',
    title: { en: 'Sales Pop Notifications', ar: 'إشعارات المبيعات الحية' },
    description: { 
      en: '"Mohammed from Riyadh just bought this." Builds social proof.', 
      ar: '"محمد من الرياض اشترى هذا المنتج قبل دقيقتين". يبني الثقة والمصداقية.' 
    },
    image: 'assets/snippets/sales-pop.png',
    price: { now: '$14.90', old: '$35.00' },
    isFree: false
  },
  {
    id: 'promo-code',
    category: 'sales',
    title: { en: 'Click-to-Copy Promo Code', ar: 'نسخ كود الخصم بضغطة زر' },
    description: { 
      en: 'Customer clicks banner → discount code copies automatically.', 
      ar: 'ينقر العميل على الشعار فيتم نسخ كود الخصم تلقائياً لتسهيل الشراء.' 
    },
    image: 'assets/snippets/promo-code.png',
    price: { now: '$9.90', old: '$19.00' },
    isFree: false
  },
  {
    id: 'exit-intent',
    category: 'sales',
    title: { en: 'Exit-Intent Popup', ar: 'نافذة الخروج المنبثقة' },
    description: { 
      en: 'Fires when cursor leaves page, offering a last-chance discount.', 
      ar: 'تظهر عندما يحاول العميل مغادرة الصفحة، لتقديم عرض أخير له.' 
    },
    image: 'assets/snippets/exit-intent.png',
    price: { now: '$19.90', old: '$45.00' },
    isFree: false
  },
  {
    id: 'rewards-bar',
    category: 'sales',
    badge: 'Gamification',
    badgeClass: 'badge-new',
    title: { en: 'Multi-Tiered Rewards Bar', ar: 'شريط المكافآت المتعددة' },
    description: { 
      en: '"Spend $50 for Free Shipping, $100 for a Free Hat, $150 for 10% Off". Gamifies the shopping experience to push the cart value higher.', 
      ar: '"أنفق 50$ للشحن المجاني، 100$ للحصول على هدية". يحول التسوق للعبة.' 
    },
    image: 'assets/snippets/rewards-bar.png',
    price: { now: '$19.90', old: '$49.00' },
    isFree: false
  },
  {
    id: 'flash-banner',
    category: 'sales',
    badge: 'BFCM Ready',
    badgeClass: 'badge-pop',
    title: { en: 'Flash Sale Master Banner', ar: 'بانر عروض الفلاش (Flash Sale)' },
    description: { 
      en: 'A highly optimized, sticky countdown header specifically built for Black Friday / Cyber Monday. Takes over the top of the site.', 
      ar: 'شريط علوي مثبت ومؤقت تنازلي مصمم لعروض الجمعة السوداء والمواسم.' 
    },
    image: 'assets/snippets/flash-banner.png',
    price: { now: '$14.90', old: '$35.00' },
    isFree: false
  },
  {
    id: 'geo-alerts',
    category: 'sales',
    title: { en: 'Geo-Targeted Sold Alerts', ar: 'تنبيهات بيع حسب المدينة' },
    description: { 
      en: '"3 people in [Visitor\'s City] bought this today." Uses local targeting to make social proof 10x more relatable and effective.', 
      ar: '"3 أشخاص في [مدينتك] اشتروا هذا اليوم". دليل اجتماعي محلي وفعال.' 
    },
    image: 'assets/snippets/geo-alerts.png',
    price: { now: '$15.00', old: '$29.00' },
    isFree: false
  },

  // 4. DESIGN & UX (13 items)
  {
    id: 'marquee-bar',
    category: 'design',
    title: { en: 'Marquee Announcement Bar', ar: 'شريط الإعلانات المتحرك' },
    description: { 
      en: 'Scrolling news ticker: "Free Shipping · Fast Delivery · Returns".', 
      ar: 'شريط إعلاني متحرك يعرض مميزات المتجر بشكل جذاب ومستمر.' 
    },
    image: 'assets/snippets/marquee-bar.png',
    price: { now: '$9.90', old: '$25.00' },
    isFree: false
  },
  {
    id: 'mobile-nav',
    category: 'design',
    title: { en: 'Mobile Bottom Nav Bar', ar: 'شريط التنقل السفلي للهواتف' },
    description: { 
      en: 'App-style bottom bar (Home, Cart, Search) for smooth browsing.', 
      ar: 'شريط سفلي مثل التطبيقات (الرئيسية، السلة، البحث) لتنقل سلس.' 
    },
    image: 'assets/snippets/mobile-nav.png',
    price: { now: '$24.90', old: '$59.00' },
    isFree: false
  },
  {
    id: 'mega-menu',
    category: 'design',
    title: { en: 'Mega Menu Builder', ar: 'باني القائمة العملاقة (Mega Menu)' },
    description: { 
      en: 'Full mega menu with category images and professional layout.', 
      ar: 'قائمة منسدلة عملاقة مع صور للمجموعات وتصميم احترافي متطور.' 
    },
    image: 'assets/snippets/mega-menu.png',
    price: { now: '$29.90', old: '$89.00' },
    isFree: false
  },
  {
    id: 'infinite-scroll',
    category: 'design',
    title: { en: 'Infinite Scroll', ar: 'التمرير اللانهائي' },
    description: { 
      en: 'Products load automatically as the customer scrolls collections.', 
      ar: 'تحميل المنتجات تلقائياً أثناء التمرير لأسفل دون الحاجة للانتقال للصفحات.' 
    },
    image: 'assets/snippets/infinite-scroll.png',
    price: { now: '$19.90', old: '$45.00' },
    isFree: false
  },
  {
    id: 'ba-slider',
    category: 'design',
    title: { en: 'Before & After Image Slider', ar: 'سلايدر مقارنة الصور (قبل وبعد)' },
    description: { 
      en: 'Drag-to-compare slider. Perfect for skincare or transformations.', 
      ar: 'شريط سحب لمقارنة صورتين، مثالي لمنتجات التجميل والتحولات.' 
    },
    image: 'assets/snippets/ba-slider.png',
    price: { now: '$14.90', old: '$35.00' },
    isFree: false
  },
  {
    id: 'lookbook',
    category: 'design',
    title: { en: 'Shoppable Lookbook', ar: 'كتالوج المنتجات التفاعلي' },
    description: { 
      en: 'Hotspots on lifestyle images reveal product details on click.', 
      ar: 'نقاط تفاعلية على صور نمط الحياة تظهر تفاصيل المنتج عند النقر.' 
    },
    image: 'assets/snippets/lookbook.png',
    price: { now: '$19.90', old: '$49.00' },
    isFree: false
  },
  {
    id: 'quick-view',
    category: 'design',
    title: { en: 'Quick View Popup', ar: 'نافذة العرض السريع' },
    description: { 
      en: 'Customers add to cart without leaving the collection page.', 
      ar: 'إضافة المنتجات للسلة مباشرة من صفحة المجموعة دون مغادرتها.' 
    },
    image: 'assets/snippets/quick-view.png',
    price: { now: '$14.90', old: '$35.00' },
    isFree: false
  },
  {
    id: 'preloader',
    category: 'design',
    title: { en: 'Page Preloader', ar: 'شاشة تحميل الصفحة' },
    description: { 
      en: 'Animated logo or spinner that fills screen while page loads.', 
      ar: 'شعار متحرك يملأ الشاشة أثناء تحميل الصفحة لإضفاء لمسة احترافية.' 
    },
    image: 'assets/snippets/preloader.png',
    price: { now: '$9.90', old: '$19.00' },
    isFree: false
  },
  {
    id: 'back-to-top',
    category: 'design',
    title: { en: 'Back to Top Button', ar: 'زر العودة للأعلى' },
    description: { 
      en: 'Appears after scrolling — one click teleports to the top.', 
      ar: 'يظهر عند التمرير لأسفل، ضغطة واحدة تعيد العميل لبداية الصفحة.' 
    },
    image: 'assets/snippets/back-to-top.png',
    price: { now: '$9.90', old: '$15.00' },
    isFree: false
  },
  {
    id: 'age-gate',
    category: 'design',
    title: { en: 'Age Verification Popup', ar: 'نافذة التحقق من العمر' },
    description: { 
      en: '"Are you 18+?" Gate required for age-restricted stores.', 
      ar: '"هل عمرك فوق 18 سنة؟" نافذة ضرورية للمتاجر ذات القيود العمرية.' 
    },
    image: 'assets/snippets/age-verification.png',
    price: { now: '$14.90', old: '$29.00' },
    isFree: false
  },
  {
    id: 'atc-micro',
    category: 'design',
    badge: 'UX Plus',
    badgeClass: 'badge-new',
    title: { en: 'Animated ATC Micro-Interactions', ar: 'تفاعلات زر الشراء المتحركة' },
    description: { 
      en: 'The Add to Cart button shines, pulses, or shoots confetti when clicked. Premium dopamine-driven design that users love.', 
      ar: 'زر الإضافة للسلة يلمع أو ينبض عند النقر، لتجربة تسوق ممتعة.' 
    },
    image: 'assets/snippets/atc-micro.png',
    price: { now: '$12.00', old: '$25.00' },
    isFree: false
  },
  {
    id: 'glass-header',
    category: 'design',
    badge: 'Premium',
    badgeClass: 'badge-pop',
    title: { en: 'Glassmorphism Sticky Header', ar: 'رأس الصفحة الزجاجي المثبت' },
    description: { 
      en: 'Transforms any standard Shopify header into an Apple-style, blurred transparent sticky header. Instant premium feel.', 
      ar: 'يحول رأس الصفحة التقليدي إلى تصميم زجاجي شفاف وضبابي بأسلوب أبل.' 
    },
    image: 'assets/snippets/glass-header.png',
    price: { now: '$19.90', old: '$45.00' },
    isFree: false
  },
  {
    id: 'blog-toc',
    category: 'design',
    title: { en: 'Blog Table of Contents', ar: 'فهرس محتويات المدونة' },
    description: { 
      en: 'Automatically generates a clickable, sticky Table of Contents for your Shopify blog posts. Essential for SEO and readability.', 
      ar: 'يولد فهرس محتويات قابل للنقر تلقائياً لمقالات مدونة شوبيفاي.' 
    },
    image: 'assets/snippets/blog-toc.png',
    price: { now: '$14.90', old: '$29.00' },
    isFree: false
  },

  // 5. SOCIAL & TRUST (8 items)
  {
    id: 'whatsapp-float',
    category: 'social',
    title: { en: 'Floating WhatsApp Chat', ar: 'دردشة واتساب العائمة' },
    description: { 
      en: 'Direct support chat icon — instant trust builder.', 
      ar: 'أيقونة دردشة واتساب عائمة للتواصل المباشر مع العملاء وبناء الثقة.' 
    },
    image: 'assets/snippets/whatsapp.png',
    price: { now: '$9.90', old: '$19.00' },
    isFree: false
  },
  {
    id: 'social-share',
    category: 'social',
    title: { en: 'Social Share Buttons', ar: 'أزرار المشاركة الاجتماعية' },
    description: { 
      en: 'Clean share buttons for Twitter, Pinterest, and Facebook.', 
      ar: 'أزرار أنيقة لمشاركة المنتجات عبر منصات التواصل الاجتماعي المختلفة.' 
    },
    image: 'assets/snippets/social-share.png',
    price: { now: '$9.90', old: '$19.00' },
    isFree: false
  },
  {
    id: 'faq-layout',
    category: 'social',
    title: { en: 'Custom FAQ Layout', ar: 'تنسيق صفحة الأسئلة الشائعة' },
    description: { 
      en: 'Ready-made FAQ template with smooth accordion design.', 
      ar: 'قالب جاهز لصفحة الأسئلة الشائعة بتصميم أكورديون سلس واحترافي.' 
    },
    image: 'assets/snippets/faq-layout.png',
    price: { now: '$19.90', old: '$45.00' },
    isFree: false
  },
  {
    id: 'features-banner',
    category: 'social',
    title: { en: 'Store Features Banner', ar: 'بانر مميزات المتجر' },
    description: { 
      en: '3–4 icon blocks (Fast Shipping, 24/7 Support).', 
      ar: 'مربعات عرض مميزات المتجر (شحن سريع، دعم فني، جودة عالية).' 
    },
    image: 'assets/snippets/features-banner.png',
    price: { now: '$14.90', old: '$35.00' },
    isFree: false
  },
  {
    id: 'currency-detect',
    category: 'social',
    title: { en: 'Auto-Currency Selector', ar: 'محدد العملة التلقائي' },
    description: { 
      en: 'Detects visitor country and switches store currency automatically.', 
      ar: 'يتعرف على بلد الزائر ويغير عملة المتجر تلقائياً لتناسبه.' 
    },
    image: 'assets/snippets/currency-selector.png',
    price: { now: '$19.90', old: '$49.00' },
    isFree: false
  },
  {
    id: 'brands-marquee',
    category: 'social',
    badge: 'Authority',
    badgeClass: 'badge-pop',
    title: { en: '"As Seen On" Marquee', ar: 'شريط "كما شوهد في"' },
    description: { 
      en: 'A sleek, grayscale, infinite-scrolling logo ticker (Forbes, GQ, Vogue) that builds instant brand authority.', 
      ar: 'شريط شعارات متحرك لا نهائي لعرض العلامات التجارية (فوربس، فوج).' 
    },
    image: 'assets/snippets/brands-marquee.png',
    price: { now: '$12.00', old: '$29.00' },
    isFree: false
  },
  {
    id: 'meta-reviews',
    category: 'social',
    badge: 'App-Free',
    badgeClass: 'badge-new',
    title: { en: 'Metaobjects Review Slider', ar: 'سلايدر تقييمات Metaobjects' },
    description: { 
      en: 'A native 5-star review carousel built entirely with Metaobjects. Zero apps, zero loading delay, 100% customizable.', 
      ar: 'سلايدر تقييمات أصلي مبني بالكامل على Metaobjects بدون تطبيقات.' 
    },
    image: 'assets/snippets/meta-reviews.png',
    price: { now: '$19.90', old: '$45.00' },
    isFree: false
  },
  {
    id: 'instagram-grid',
    category: 'social',
    title: { en: 'App-Free Instagram Grid', ar: 'شبكة إنستقرام بدون تطبيقات' },
    description: { 
      en: 'Display a beautiful, shoppable Instagram grid on your homepage without installing heavy, site-slowing apps.', 
      ar: 'عرض شبكة صور إنستقرام جذابة في متجرك دون الحاجة لتثبيت تطبيقات ثقيلة.' 
    },
    image: 'assets/snippets/instagram-grid.png',
    price: { now: '$19.90', old: '$49.00' },
    isFree: false
  },

  // 6. APPS & ADVANCED (Added items)
  {
    id: 'wishlist-pro',
    category: 'apps',
    badge: 'Full App',
    badgeClass: 'badge-pop',
    title: { en: 'Wishlist Pro App', ar: 'تطبيق قائمة الأمنيات Pro' },
    description: { 
      en: 'Full Shopify embedded app — save products and share lists.', 
      ar: 'تطبيق متكامل داخل شوبيفاي - حفظ المنتجات ومشاركة القوائم.' 
    },
    image: 'assets/snippets/wishlist-pro.png',
    price: { now: 'Custom', old: '' },
    isFree: false
  },
  {
    id: 'upsell-modal-ai',
    category: 'apps',
    badge: 'AI Powered',
    badgeClass: 'badge-new',
    title: { en: 'AI Product Upsell UI', ar: 'واجهة عروض Upsell بالذكاء الاصطناعي' },
    description: { 
      en: 'Modern "Complete the Look" UI logic with AI recommendations.', 
      ar: 'واجهة "أكمل المظهر" المتطورة تعتمد على توصيات الذكاء الاصطناعي.' 
    },
    image: 'assets/snippets/upsell-modal.png',
    price: { now: '$24.90', old: '$55.00' },
    isFree: false
  },

  // 7. PERFORMANCE
  {
    id: 'speed-booster-pack',
    category: 'performance',
    badge: 'Expert',
    badgeClass: 'badge-pop',
    title: { en: 'Speed Booster Snippet', ar: 'كود تسريع المتجر الخارق' },
    description: { 
      en: 'Lazy-load scripts and improve Core Web Vitals instantly.', 
      ar: 'تحميل تدريجي وتحسين مؤشرات الأداء الحيوية للمتجر فوراً.' 
    },
    image: 'assets/snippets/speed-booster.png',
    price: { now: '$19.00', old: '$59.00' },
    isFree: false
  },
  {
    id: 'liquid-telemetry',
    category: 'performance',
    badge: 'Dev Tool',
    badgeClass: 'badge-pop',
    title: { en: 'Liquid Telemetry Dashboard', ar: 'لوحة قياس أداء Liquid' },
    description: { 
      en: 'Inject a performance monitoring dashboard into your store.', 
      ar: 'إضافة لوحة مراقبة الأداء لتتبع زمن معالجة أكواد Liquid في المتجر.' 
    },
    image: 'assets/snippets/perf-analytics.png',
    price: { now: '$44.90', old: '$120.00' },
    isFree: false
  },

  // USER PROVIDED SPECIFIC SNIPPETS
  {
    id: 'collection-pills',
    category: 'design',
    badge: 'New',
    badgeClass: 'badge-new',
    title: { en: 'Pill-Tab Featured Collection', ar: 'مجموعات مميزة بتبويبات كبسولية' },
    description: { 
      en: 'Switch between multiple collections instantly using sleek, pill-shaped tabs. Zero page reloads. Creates a fast, app-like browsing experience.', 
      ar: 'التنقل بين المجموعات المختلفة بتبويبات أنيقة دون الحاجة لتحديث الصفحة.' 
    },
    image: 'assets/snippets/collection-pills.png',
    price: { now: '$14.90', old: '$35.00' },
    isFree: false
  },
  {
    id: 'review-discount',
    category: 'sales',
    badge: 'Hot',
    badgeClass: 'badge-pop',
    title: { en: '"Review for Discount" Flow', ar: 'خصم مقابل التقييم' },
    description: { 
      en: 'Incentivize feedback. Instantly reveals a custom discount code when a customer submits a product review. Drives UGC and guarantees repeat purchases.', 
      ar: 'أظهر كود خصم للعميل فور تقديمه لتقييم للمنتج، لزيادة الولاء.' 
    },
    image: 'assets/snippets/review-discount.png',
    price: { now: '$19.90', old: '$49.00' },
    isFree: false
  },
  // 8. NEW ADDITIONS
  {
    id: 'bundle-builder',
    category: 'sales',
    badge: 'New',
    badgeClass: 'badge-new',
    title: { en: 'Mix & Match Bundle Builder', ar: 'باني مجموعات المنتجات' },
    description: { 
      en: 'Allow customers to build their own product bundles. Increases AOV massively.', 
      ar: 'يتيح للعملاء بناء مجموعات منتجاتهم الخاصة. يزيد من متوسط قيمة الطلب بشكل كبير.' 
    },
    image: 'assets/snippets/bundle-builder.png',
    price: { now: '$29.90', old: '$69.00' },
    isFree: false
  },
  {
    id: 'pre-order',
    category: 'products',
    title: { en: 'Pre-Order System', ar: 'نظام الطلب المسبق' },
    description: { 
      en: 'Replace Add to Cart with Pre-Order for out-of-stock items to capture sales.', 
      ar: 'استبدل زر إضافة إلى السلة بالطلب المسبق للمنتجات غير المتوفرة لالتقاط المبيعات.' 
    },
    image: 'assets/snippets/pre-order.png',
    price: { now: '$19.90', old: '$45.00' },
    isFree: false
  },
  {
    id: 'collection-grid',
    category: 'design',
    title: { en: 'Advanced Collection Grid', ar: 'شبكة المجموعات المتقدمة' },
    description: { 
      en: 'Enhanced product grid layout with hover effects and quick actions.', 
      ar: 'تخطيط متقدم لشبكة المنتجات مع تأثيرات التمرير وإجراءات سريعة.' 
    },
    image: 'assets/snippets/collection-grid.png',
    price: { now: '$14.90', old: '$35.00' },
    isFree: false
  },
  {
    id: 'wishlist-page',
    category: 'social',
    title: { en: 'User Wishlist Page', ar: 'صفحة قائمة الأمنيات للعملاء' },
    description: { 
      en: 'Dedicated page for customers to view and manage their saved products.', 
      ar: 'صفحة مخصصة للعملاء لعرض وإدارة المنتجات المحفوظة.' 
    },
    image: 'assets/snippets/wishlist-page.png',
    price: { now: '$19.90', old: '$49.00' },
    isFree: false
  },
  {
    id: 'lazy-load',
    category: 'performance',
    title: { en: 'Advanced Lazy Loading', ar: 'التحميل التدريجي المتقدم' },
    description: { 
      en: 'Optimized script and image lazy loading to drastically improve page speed.', 
      ar: 'تحميل تدريجي محسن للسكريبتات والصور لتحسين سرعة الصفحة بشكل كبير.' 
    },
    image: 'assets/snippets/lazy-load.png',
    price: { now: '$24.90', old: '$59.00' },
    isFree: false
  },
  {
    id: 'slide-cart',
    category: 'cart',
    badge: 'Popular',
    badgeClass: 'badge-pop',
    title: { en: 'Slide-Out Cart Drawer', ar: 'السلة الجانبية المنزلقة' },
    description: { 
      en: 'Premium slide-out cart with progress bar and embedded upsells.', 
      ar: 'سلة جانبية احترافية مع شريط تقدم وعروض إضافية مدمجة.' 
    },
    image: 'assets/snippets/slide-cart.png',
    price: { now: '$29.90', old: '$79.00' },
    isFree: false
  },
  {
    id: 'post-purchase-upsell',
    category: 'sales',
    badge: 'High ROI',
    badgeClass: 'badge-pop',
    title: { en: 'Post-Purchase Upsell Modal', ar: 'عروض ما بعد الشراء' },
    description: { 
      en: 'One-click upsell modal right after checkout. Guaranteed revenue boost.', 
      ar: 'نافذة عروض بضغطة واحدة بعد إتمام الطلب. زيادة مضمونة للإيرادات.' 
    },
    image: 'img/post_purchase_upsell_modal/screen.png',
    price: { now: '$34.90', old: '$89.00' },
    isFree: false
  },
  {
    id: 'enhanced-mega',
    category: 'design',
    title: { en: 'Enhanced Mega Menu Header', ar: 'رأس الصفحة مع قائمة عملاقة مطورة' },
    description: { 
      en: 'A highly visual mega menu featuring promotional banners and top products.', 
      ar: 'قائمة عملاقة بصرية عالية الجودة تحتوي على لافتات ترويجية وأفضل المنتجات.' 
    },
    image: 'assets/snippets/enhanced-mega.png',
    price: { now: '$24.90', old: '$59.00' },
    isFree: false
  },
  {
    id: 'gift-with-purchase',
    category: 'sales',
    title: { en: 'Tiered Gift With Purchase', ar: 'هدية مجانية حسب قيمة الطلب' },
    description: { 
      en: 'Reward customers with varying free gifts based on how much they spend.', 
      ar: 'كافئ العملاء بهدايا مجانية متنوعة بناءً على قيمة مشترياتهم.' 
    },
    image: 'assets/snippets/gift-with-purchase.png',
    price: { now: '$19.90', old: '$45.00' },
    isFree: false
  },
  {
    id: 'collection-swatches',
    category: 'products',
    title: { en: 'Collection Page Swatches', ar: 'خيارات الألوان في المجموعات' },
    description: { 
      en: 'Show available color swatches directly on collection page product cards.', 
      ar: 'عرض خيارات الألوان المتاحة مباشرة على بطاقات المنتجات في صفحة المجموعات.' 
    },
    image: 'assets/snippets/collection-swatches.png',
    price: { now: '$14.90', old: '$35.00' },
    isFree: false
  },
  {
    id: 'advanced-size-guide',
    category: 'design',
    title: { en: 'Advanced Size Guide Drawer', ar: 'دليل المقاسات المتقدم' },
    description: { 
      en: 'Custom size chart that pulls from Metafields/Metaobjects — appears as a smooth side drawer with tabbed charts.', 
      ar: 'جدول مقاسات مخصص يظهر في سلة جانبية سلسة.' 
    },
    image: 'assets/snippets/size-chart.png',
    price: { now: '$19.90', old: '$45.00' },
    isFree: false
  }
];