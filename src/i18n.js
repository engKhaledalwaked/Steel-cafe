import { ref, computed, watchEffect } from 'vue'

const saved = (() => {
  try { return localStorage.getItem('steel-lang') } catch { return null }
})()

export const lang = ref(saved === 'en' ? 'en' : 'ar')

watchEffect(() => {
  document.documentElement.lang = lang.value
  document.documentElement.dir = lang.value === 'ar' ? 'rtl' : 'ltr'
  try { localStorage.setItem('steel-lang', lang.value) } catch {}
})

export const toggleLang = () => { lang.value = lang.value === 'ar' ? 'en' : 'ar' }

const dict = {
  ar: {
    ribbon: 'نسخة عرض تجريبية — مُعدّة لـ STEEL',
    brandSub: 'مطعم وكافيه',
    nav: { about: 'عن ستيل', menu: 'القائمة', events: 'المناسبات', gallery: 'الصور', visit: 'الموقع', reserve: 'احجز طاولة' },
    hero: {
      eyebrow: 'إربد · شارع وصفي التل',
      title: 'لحظات فاخرة، دائماً',
      lead: 'وجهة الشمال للعشاء الراقي، الفطور العائلي، والسهرات تحت السماء. مطبخ عالمي بلمسة محلية، وجلسات خارجية بإطلالة.',
      cta1: 'احجز طاولتك', cta2: 'تصفّح القائمة',
      meta: [
        { k: 'يومياً', v: '١٠ ص – ١٢ منتصف الليل' },
        { k: '+46K', v: 'متابع يثقون بنا' },
        { k: 'داخلي وخارجي', v: 'جلسات بإطلالة' },
      ],
    },
    about: {
      eyebrow: 'قصتنا', title: 'حيث يلتقي الذوق بالأناقة',
      p1: 'في قلب إربد، صُمّم ستيل ليكون أكثر من مطعم: مساحة للقاءات العائلة، اجتماعات العمل، والاحتفالات التي تستحق أن تُذكر.',
      p2: 'نقدّم قائمة عالمية تمتد من الفطور حتى العشاء المتأخر، بخدمة تهتم بالتفاصيل الصغيرة، وتصميم يجمع دفء الخشب بلمعان المعدن.',
      slots: ['صورة القاعة الداخلية', 'صورة طبق مميز'],
      pillars: [
        { t: 'مطبخ عالمي', d: 'من الإفطار الشرقي إلى الستيك والباستا' },
        { t: 'جلسات خارجية', d: 'تراس بإطلالة لأمسيات الصيف' },
        { t: 'مناسبات خاصة', d: 'أعياد ميلاد، خطوبة، إفطارات جماعية' },
      ],
    },
    menu: {
      eyebrow: 'القائمة', title: 'اختيارات الشيف',
      sub: 'الأسعار بالدينار الأردني. الأصناف المعروضة للعرض فقط، وستُستبدل بقائمة ستيل الفعلية.',
      currency: 'د.أ',
    },
    events: {
      eyebrow: 'المناسبات', title: 'مناسبتك، على طريقة ستيل',
      sub: 'نجهّز المكان والقائمة والتفاصيل، وأنت تستمتع مع ضيوفك.',
      cards: [
        { t: 'أعياد الميلاد والخطوبة', d: 'تزيين الطاولة، كيك خاص، وقائمة مخصصة لعدد ضيوفك.' },
        { t: 'الإفطار والسحور الرمضاني', d: 'بوفيه مفتوح بحجز مسبق يضمن مكانك وكمية تكفي الجميع.' },
        { t: 'اجتماعات وغداء الشركات', d: 'مساحة هادئة، إنترنت، وقوائم جماعية بأسعار ثابتة.' },
      ],
      cta: 'اطلب عرضاً لمناسبتك',
    },
    gallery: {
      eyebrow: 'من ستيل', title: 'لقطات من المكان',
      slots: ['التراس الخارجي', 'الفطور', 'طبق رئيسي', 'الحلويات', 'السهرة'],
      cta: 'المزيد على فيسبوك',
    },
    reserve: {
      eyebrow: 'الحجز', title: 'احجز خلال دقيقة',
      p: 'املأ التفاصيل وسيصلنا طلبك مباشرة على واتساب. نؤكد الحجز خلال دقائق ضمن ساعات العمل.',
      points: ['بدون تطبيقات أو تسجيل', 'تأكيد مباشر من فريق ستيل', 'للمجموعات فوق ١٥ شخصاً نتواصل معك بعرض خاص'],
      orCall: 'أو اتصل مباشرة',
      f: {
        name: 'الاسم', phone: 'رقم الهاتف', date: 'التاريخ', time: 'الوقت', guests: 'عدد الأشخاص',
        type: 'نوع الحجز', seat: 'الجلسة المفضلة', notes: 'ملاحظات (اختياري)', submit: 'أرسل الحجز عبر واتساب',
        types: { dinner: 'طاولة عادية', birthday: 'عيد ميلاد / خطوبة', iftar: 'إفطار رمضاني', business: 'غداء عمل' },
        seats: { indoor: 'داخلي', outdoor: 'خارجي', any: 'لا يهم' },
        err: 'يرجى تعبئة الاسم ورقم هاتف صحيح والتاريخ.',
        sent: 'تم فتح واتساب — أرسل الرسالة لتأكيد حجزك.',
      },
      msg: {
        head: 'طلب حجز جديد — STEEL', name: 'الاسم', phone: 'الهاتف', date: 'التاريخ', time: 'الوقت',
        guests: 'عدد الأشخاص', type: 'نوع الحجز', seat: 'الجلسة', notes: 'ملاحظات',
      },
    },
    visit: {
      eyebrow: 'زورونا', title: 'نحن بانتظارك',
      addrL: 'العنوان', addr: 'إربد، شارع وصفي التل — قرب إشارة كلية غرناطة',
      hoursL: 'ساعات العمل', h1: 'الأحد – الخميس: ١٠ ص – ١٢ منتصف الليل', h2: 'الجمعة والسبت: ٩ ص – ١٢ منتصف الليل',
      phoneL: 'الهاتف', dir: 'الاتجاهات على الخريطة', wa: 'راسلنا واتساب',
    },
    footer: { tag: 'لحظات فاخرة، دائماً.', demo: 'تصميم تجريبي مقترح' },
  },

  en: {
    ribbon: 'Demo preview — prepared for STEEL',
    brandSub: 'Restaurant & Cafe',
    nav: { about: 'About', menu: 'Menu', events: 'Events', gallery: 'Gallery', visit: 'Visit', reserve: 'Book a table' },
    hero: {
      eyebrow: 'Irbid · Wasfi Al-Tal Street',
      title: 'Luxe moments, always',
      lead: "The North's destination for refined dinners, family breakfasts and evenings under the sky. International cuisine with a local touch, and outdoor seating with a view.",
      cta1: 'Book your table', cta2: 'Explore the menu',
      meta: [
        { k: 'Daily', v: '10 AM – midnight' },
        { k: '+46K', v: 'followers who trust us' },
        { k: 'Indoor & outdoor', v: 'seating with a view' },
      ],
    },
    about: {
      eyebrow: 'Our story', title: 'Where taste meets elegance',
      p1: 'In the heart of Irbid, STEEL was designed to be more than a restaurant: a place for family gatherings, business meetings and celebrations worth remembering.',
      p2: 'Our international menu runs from breakfast to late dinner, served with attention to the small details, in a space that pairs warm wood with polished metal.',
      slots: ['Interior photo', 'Signature dish photo'],
      pillars: [
        { t: 'International kitchen', d: 'From Levantine breakfast to steak and pasta' },
        { t: 'Outdoor terrace', d: 'Open-air seating for summer evenings' },
        { t: 'Private events', d: 'Birthdays, engagements, group iftars' },
      ],
    },
    menu: {
      eyebrow: 'Menu', title: "Chef's selection",
      sub: 'Prices in Jordanian Dinar. Items shown are placeholders and will be replaced with STEEL’s actual menu.',
      currency: 'JD',
    },
    events: {
      eyebrow: 'Events', title: 'Your occasion, the STEEL way',
      sub: 'We prepare the space, the menu and the details — you enjoy your guests.',
      cards: [
        { t: 'Birthdays & engagements', d: 'Table styling, a custom cake and a menu sized to your party.' },
        { t: 'Ramadan iftar & suhoor', d: 'Open buffet by reservation, so your seat and your food are guaranteed.' },
        { t: 'Corporate lunches', d: 'A quiet space, Wi-Fi and fixed-price group menus.' },
      ],
      cta: 'Request an event quote',
    },
    gallery: {
      eyebrow: 'Inside STEEL', title: 'A look around',
      slots: ['Outdoor terrace', 'Breakfast', 'Main course', 'Desserts', 'Evenings'],
      cta: 'More on Facebook',
    },
    reserve: {
      eyebrow: 'Reservations', title: 'Book in a minute',
      p: 'Fill in the details and your request reaches us instantly on WhatsApp. We confirm within minutes during opening hours.',
      points: ['No apps, no sign-up', 'Direct confirmation from the STEEL team', 'Groups over 15 get a tailored offer'],
      orCall: 'Or call us',
      f: {
        name: 'Name', phone: 'Phone number', date: 'Date', time: 'Time', guests: 'Guests',
        type: 'Booking type', seat: 'Preferred seating', notes: 'Notes (optional)', submit: 'Send booking via WhatsApp',
        types: { dinner: 'Regular table', birthday: 'Birthday / engagement', iftar: 'Ramadan iftar', business: 'Business lunch' },
        seats: { indoor: 'Indoor', outdoor: 'Outdoor', any: 'No preference' },
        err: 'Please enter your name, a valid phone number and a date.',
        sent: 'WhatsApp opened — send the message to confirm your booking.',
      },
      msg: {
        head: 'New booking request — STEEL', name: 'Name', phone: 'Phone', date: 'Date', time: 'Time',
        guests: 'Guests', type: 'Type', seat: 'Seating', notes: 'Notes',
      },
    },
    visit: {
      eyebrow: 'Visit us', title: "We're expecting you",
      addrL: 'Address', addr: 'Wasfi Al-Tal Street, Irbid — near Granada College signal',
      hoursL: 'Opening hours', h1: 'Sun – Thu: 10 AM – midnight', h2: 'Fri & Sat: 9 AM – midnight',
      phoneL: 'Phone', dir: 'Get directions', wa: 'Message us on WhatsApp',
    },
    footer: { tag: 'Luxe moments, always.', demo: 'Proposed demo design' },
  },
}

export const t = computed(() => dict[lang.value])

// القائمة (أصناف تجريبية — استبدلها بقائمة المطعم الحقيقية)
export const menu = [
  {
    id: 'breakfast', ar: 'الفطور', en: 'Breakfast',
    items: [
      { ar: 'فطور ستيل الشرقي', en: 'STEEL Levantine Breakfast', dar: 'حمص، فول، فلافل، حلوم مشوي، زيتون وخبز طابون', den: 'Hummus, foul, falafel, grilled halloumi, olives and taboon bread', price: 9.5, tag: 'signature' },
      { ar: 'فخارة حلوم بالسمن', en: 'Halloumi Clay Pot', dar: 'حلوم بلدي بالسمن البلدي والزعتر', den: 'Local halloumi baked with ghee and thyme', price: 5.5 },
      { ar: 'كرواسون بالتيركي', en: 'Turkey Croissant', dar: 'كرواسون زبدة، تيركي مدخن، جبنة شيدر', den: 'Butter croissant, smoked turkey, cheddar', price: 4.75 },
      { ar: 'بان كيك ريد فيلفت', en: 'Red Velvet Pancakes', dar: 'بصوص جبنة الكريمة والتوت', den: 'Cream-cheese glaze and berries', price: 5.25 },
    ],
  },
  {
    id: 'starters', ar: 'مقبلات', en: 'Starters',
    items: [
      { ar: 'حمص باللحمة', en: 'Hummus with Lamb', dar: 'حمص كريمي مع قطع لحم وصنوبر محمّص', den: 'Creamy hummus, sautéed lamb, toasted pine nuts', price: 4.5 },
      { ar: 'بطاطا حارة', en: 'Batata Harra', dar: 'كزبرة، ثوم، ليمون وشطة', den: 'Coriander, garlic, lemon and chili', price: 3.25 },
      { ar: 'سلطة البوملي', en: 'Pomelo Salad', dar: 'بوملي، رمان، جرجير وجوز', den: 'Pomelo, pomegranate, rocca and walnuts', price: 5.0, tag: 'new' },
      { ar: 'شوربة بصل فرنسية', en: 'French Onion Soup', dar: 'بخبز محمّص وجبنة غرويير', den: 'With toasted crouton and gruyère', price: 4.75 },
    ],
  },
  {
    id: 'mains', ar: 'أطباق رئيسية', en: 'Mains',
    items: [
      { ar: 'ريب آي ستيل', en: 'STEEL Ribeye', dar: '٣٠٠ غم، بطاطا مهروسة وصوص الفلفل', den: '300g, mashed potato, peppercorn sauce', price: 22.0, tag: 'signature' },
      { ar: 'فيليه سلمون', en: 'Salmon Fillet', dar: 'سلمون مشوي، خضار موسمية وصوص الليمون', den: 'Grilled salmon, seasonal greens, lemon butter', price: 16.5 },
      { ar: 'مشاوي مشكّلة', en: 'Mixed Grill', dar: 'كباب، شيش طاووق، لحم وخبز', den: 'Kebab, shish taouk, lamb cubes and bread', price: 14.0 },
      { ar: 'دجاج بالمشروم', en: 'Chicken Mushroom', dar: 'صدر دجاج بصوص الكريمة والفطر', den: 'Chicken breast in creamy mushroom sauce', price: 10.5 },
    ],
  },
  {
    id: 'pasta', ar: 'باستا وبيتزا', en: 'Pasta & Pizza',
    items: [
      { ar: 'فيتوتشيني ألفريدو', en: 'Fettuccine Alfredo', dar: 'دجاج مشوي، فطر، صوص الكريمة والبارميزان', den: 'Grilled chicken, mushroom, cream and parmesan', price: 8.5 },
      { ar: 'بيني أرابياتا', en: 'Penne Arrabbiata', dar: 'صلصة طماطم حارة وريحان', den: 'Spicy tomato sauce and basil', price: 7.0 },
      { ar: 'بيتزا مارغريتا', en: 'Margherita Pizza', dar: 'موزاريلا طازجة، طماطم وريحان', den: 'Fresh mozzarella, tomato and basil', price: 7.5 },
    ],
  },
  {
    id: 'desserts', ar: 'حلويات ومشروبات', en: 'Desserts & Drinks',
    items: [
      { ar: 'كنافة ستيل', en: 'STEEL Knafeh', dar: 'كنافة ناعمة بالجبنة والفستق الحلبي', den: 'Soft cheese knafeh with pistachio', price: 4.5, tag: 'signature' },
      { ar: 'فوندان شوكولاتة', en: 'Chocolate Fondant', dar: 'مع آيس كريم الفانيلا', den: 'With vanilla ice cream', price: 5.0 },
      { ar: 'كوكتيل فواكه بدون سكر', en: 'Sugar-free Fruit Cocktail', dar: 'فواكه طازجة موسمية', den: 'Fresh seasonal fruit', price: 3.75 },
      { ar: 'آيس لاتيه كراميل', en: 'Iced Caramel Latte', dar: 'إسبريسو، حليب وكراميل', den: 'Espresso, milk and caramel', price: 3.25 },
    ],
  },
]
