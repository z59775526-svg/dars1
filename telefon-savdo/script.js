/* ============================================================
   VoltPhone — store logic
   EN / RU · catalog · filters · cart · toasts · live clock
   ============================================================ */

/* ---------- 📦 Products ---------- */
const PRODUCTS = [
  {
    id: 1, brand: 'Apple', name: 'iPhone 15 Pro', tag: 'apple',
    spec: '6.1″ OLED · A17 Pro · 256 GB',
    price: 999, oldPrice: 1099, badge: 'new',
    c1: '#ff3b5c', c2: '#7c3aed',
    desc: {
      en: 'Titanium frame, A17 Pro chip and the best camera in the lineup.',
      ru: 'Титановый корпус, чип A17 Pro и лучшая камера в линейке.'
    }
  },
  {
    id: 2, brand: 'Samsung', name: 'Galaxy S24 Ultra', tag: 'samsung',
    spec: '6.8″ AMOLED · Snapdragon 8 Gen 3 · 512 GB',
    price: 1299, oldPrice: null, badge: 'hit',
    c1: '#2f6bff', c2: '#38bdf8',
    desc: {
      en: 'S Pen, 200 MP camera and Galaxy AI built right in.',
      ru: 'S Pen, камера 200 МП и Galaxy AI прямо из коробки.'
    }
  },
  {
    id: 3, brand: 'Apple', name: 'iPhone 15', tag: 'apple',
    spec: '6.1″ OLED · A16 Bionic · 128 GB',
    price: 799, oldPrice: 849, badge: 'sale',
    c1: '#38bdf8', c2: '#2f6bff',
    desc: {
      en: 'The iPhone everyone loves — fast, light and reliable.',
      ru: 'iPhone, который любят все — быстрый, лёгкий и надёжный.'
    }
  },
  {
    id: 4, brand: 'Google', name: 'Pixel 8 Pro', tag: 'google',
    spec: '6.7″ OLED · Tensor G3 · 256 GB',
    price: 899, oldPrice: null, badge: 'new',
    c1: '#ff3b5c', c2: '#ff8a3d',
    desc: {
      en: 'Pure Android and the smartest AI-powered camera.',
      ru: 'Чистый Android и самая умная камера на базе ИИ.'
    }
  },
  {
    id: 5, brand: 'Xiaomi', name: 'Xiaomi 14', tag: 'xiaomi',
    spec: '6.36″ AMOLED · Snapdragon 8 Gen 3 · 256 GB',
    price: 749, oldPrice: 799, badge: 'sale',
    c1: '#ff3b5c', c2: '#38bdf8',
    desc: {
      en: 'Flagship specs with a Leica camera at a mid-range price.',
      ru: 'Флагманские характеристики с камерой Leica по цене среднего сегмента.'
    }
  },
  {
    id: 6, brand: 'Samsung', name: 'Galaxy S24', tag: 'samsung',
    spec: '6.2″ AMOLED · Exynos 2400 · 256 GB',
    price: 699, oldPrice: null, badge: 'hit',
    c1: '#7c3aed', c2: '#ff3b5c',
    desc: {
      en: 'Compact flagship with all-day battery life.',
      ru: 'Компактный флагман с автономностью на весь день.'
    }
  }
];

/* ---------- 🌐 I18N dictionary ---------- */
const I18N = {
  en: {
    'nav.home': 'Home',
    'nav.catalog': 'Catalog',
    'nav.features': 'Why us',
    'nav.contacts': 'Contacts',
    'hero.badge': 'New arrivals · 2026',
    'hero.title': 'Smartphones that move at the speed of',
    'hero.titleAccent': 'your life',
    'hero.sub': 'Flagship power at a fair price. Original devices with official warranty — delivered to your door within 24 hours.',
    'hero.cta1': 'Shop now',
    'hero.cta2': 'Browse catalog',
    'hero.stat1': 'models in stock',
    'hero.stat2': 'average rating',
    'hero.stat3': 'customer support',
    'hero.chip1sub': 'iPhone 15 Pro',
    'hero.chip2sub': '2,400+ reviews',
    'hero.chip3sub': 'on your first order',
    'catalog.title': 'Our catalog',
    'catalog.sub': 'Pick your next smartphone — filter by brand',
    'filter.all': 'All brands',
    'features.title': 'Why shop with us',
    'features.sub': 'We make buying a smartphone simple, safe and fast',
    'feat1.title': 'Delivery in 24 hours',
    'feat1.text': 'Free courier delivery across the city on every order.',
    'feat2.title': 'Official warranty',
    'feat2.text': '2-year official warranty on every device we sell.',
    'feat3.title': 'Trade-in',
    'feat3.text': 'Exchange your old phone and get an instant discount.',
    'feat4.title': 'Support 24/7',
    'feat4.text': 'Our team is always online to help you choose.',
    'cta.title': 'Get 10% off your first order',
    'cta.text': 'Use the promo code at checkout — it works on all smartphones.',
    'cta.code': 'Promo code: VOLT10',
    'cta.btn': 'Shop now',
    'cta.copied': 'Promo code copied to clipboard',
    'cart.add': 'Add to cart',
    'cart.added': 'Added to cart',
    'cart.title': 'Your cart',
    'chip.new': 'NEW',
    'chip.hit': 'HIT',
    'chip.sale': 'SALE',
    'footer.about': 'VoltPhone is an online smartphone store. Original devices, fair prices and delivery across the whole country.',
    'footer.navTitle': 'Navigation',
    'footer.contactsTitle': 'Contacts',
    'footer.address': 'Tashkent, Amir Temur ave. 108',
    'footer.rights': 'All rights reserved.'
  },
  ru: {
    'nav.home': 'Главная',
    'nav.catalog': 'Каталог',
    'nav.features': 'Почему мы',
    'nav.contacts': 'Контакты',
    'hero.badge': 'Новинки · 2026',
    'hero.title': 'Смартфоны, которые движутся со скоростью',
    'hero.titleAccent': 'вашей жизни',
    'hero.sub': 'Флагманская мощь по честной цене. Оригинальные устройства с официальной гарантией — доставка до двери за 24 часа.',
    'hero.cta1': 'Купить сейчас',
    'hero.cta2': 'Смотреть каталог',
    'hero.stat1': 'моделей в наличии',
    'hero.stat2': 'средняя оценка',
    'hero.stat3': 'поддержка клиентов',
    'hero.chip1sub': 'iPhone 15 Pro',
    'hero.chip2sub': '2 400+ отзывов',
    'hero.chip3sub': 'на первый заказ',
    'catalog.title': 'Наш каталог',
    'catalog.sub': 'Выбери свой следующий смартфон — фильтруй по бренду',
    'filter.all': 'Все бренды',
    'features.title': 'Почему мы',
    'features.sub': 'Мы делаем покупку смартфона простой, безопасной и быстрой',
    'feat1.title': 'Доставка за 24 часа',
    'feat1.text': 'Бесплатная курьерская доставка по городу при любом заказе.',
    'feat2.title': 'Официальная гарантия',
    'feat2.text': '2 года официальной гарантии на каждое устройство.',
    'feat3.title': 'Trade-in',
    'feat3.text': 'Обменяй свой старый телефон и получи мгновенную скидку.',
    'feat4.title': 'Поддержка 24/7',
    'feat4.text': 'Наша команда всегда на связи, чтобы помочь с выбором.',
    'cta.title': 'Скидка 10% на первый заказ',
    'cta.text': 'Используй промокод при оформлении — он действует на все смартфоны.',
    'cta.code': 'Промокод: VOLT10',
    'cta.btn': 'Купить сейчас',
    'cta.copied': 'Промокод скопирован в буфер обмена',
    'cart.add': 'В корзину',
    'cart.added': 'Добавлено в корзину',
    'cart.title': 'Твоя корзина',
    'chip.new': 'НОВИНКА',
    'chip.hit': 'ХИТ',
    'chip.sale': 'SALE',
    'footer.about': 'VoltPhone — интернет-магазин смартфонов. Оригинальные устройства, честные цены и доставка по всей стране.',
    'footer.navTitle': 'Навигация',
    'footer.contactsTitle': 'Контакты',
    'footer.address': 'Ташкент, пр. Амир Темур, 108',
    'footer.rights': 'Все права защищены.'
  }
};

/* ---------- ⚙️ State & helpers ---------- */
let lang = 'en';
let cartCount = 0;
let activeFilter = 'all';

const $  = (s, c = document) => c.querySelector(s);
const $$ = (s, c = document) => [...c.querySelectorAll(s)];
const t  = (key) => (I18N[lang] && I18N[lang][key]) || key;
const fmt = (n) => n.toLocaleString('en-US');

/* ---------- ✨ Reveal on scroll ---------- */
const io = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (!entry.isIntersecting) return;
    const el = entry.target;
    el.classList.add('visible');
    io.unobserve(el);
    // remove helper classes so hover transitions stay snappy afterwards
    setTimeout(() => {
      el.classList.remove('reveal', 'visible');
      el.style.transitionDelay = '';
    }, 950);
  });
}, { threshold: 0.12 });

function observeReveals(root = document) {
  $$('.reveal', root).forEach((el, i) => {
    if (el.dataset.io === '1') return;
    el.dataset.io = '1';
    el.style.transitionDelay = `${(i % 6) * 70}ms`;
    io.observe(el);
  });
}

/* ---------- 📱 Product rendering ---------- */
function cardHTML(p) {
  const badge = p.badge
    ? `<span class="badge badge-${p.badge}">${t('chip.' + p.badge)}</span>`
    : '';
  const oldPrice = p.oldPrice
    ? `<span class="price-old">$${fmt(p.oldPrice)}</span>`
    : '';
  return `
  <article class="product-card reveal" data-brand="${p.tag}">
    ${badge}
    <div class="phone-mock">
      <div class="phone-screen" style="background:linear-gradient(165deg, ${p.c1}, ${p.c2})">
        <span class="phone-notch"></span>
        <span class="phone-glare"></span>
      </div>
    </div>
    <div class="product-info">
      <span class="product-brand">${p.brand}</span>
      <h3 class="product-name">${p.name}</h3>
      <p class="product-spec">${p.spec}</p>
      <p class="product-desc">${p.desc[lang]}</p>
      <div class="product-foot">
        <div class="price">
          <span class="price-now">$${fmt(p.price)}</span>
          ${oldPrice}
        </div>
        <button class="btn-add" data-add="${p.id}" type="button">${t('cart.add')}</button>
      </div>
    </div>
  </article>`;
}

function renderProducts() {
  const list = PRODUCTS.filter(
    (p) => activeFilter === 'all' || p.tag === activeFilter
  );
  $('#productGrid').innerHTML = list.map(cardHTML).join('');
  observeReveals($('#productGrid'));
}

/* ---------- 🔍 Filters ---------- */
$$('.filter-btn').forEach((btn) => {
  btn.addEventListener('click', () => {
    activeFilter = btn.dataset.filter;
    $$('.filter-btn').forEach((b) => b.classList.toggle('active', b === btn));
    renderProducts();
  });
});

/* ---------- 🛒 Cart ---------- */
function bumpCart() {
  const badge = $('#cartCount');
  badge.textContent = cartCount;
  badge.classList.remove('bump');
  void badge.offsetWidth; // restart animation
  badge.classList.add('bump');
}

$('#productGrid').addEventListener('click', (e) => {
  const btn = e.target.closest('[data-add]');
  if (!btn) return;
  const product = PRODUCTS.find((p) => p.id === Number(btn.dataset.add));
  cartCount++;
  bumpCart();
  showToast(`${t('cart.added')}: ${product.name}`);
});

$('#cartBtn').addEventListener('click', () => {
  showToast(`${t('cart.title')}: ${cartCount}`);
});

/* ---------- 🔔 Toast ---------- */
let toastTimer;
function showToast(msg) {
  $('#toastMsg').textContent = msg;
  const el = $('#toast');
  el.classList.add('show');
  clearTimeout(toastTimer);
  toastTimer = setTimeout(() => el.classList.remove('show'), 2400);
}

/* ---------- 🌐 Language ---------- */
function applyLang(next) {
  lang = next;
  document.documentElement.lang = next;
  $$('[data-i18n]').forEach((el) => {
    el.textContent = t(el.dataset.i18n);
  });
  $$('.lang-btn').forEach((b) => b.classList.toggle('active', b.dataset.lang === next));
  renderProducts();
  updateClock();
}

$$('.lang-btn').forEach((b) => {
  b.addEventListener('click', () => applyLang(b.dataset.lang));
});

/* ---------- 🎁 Promo code copy ---------- */
$('#promoChip').addEventListener('click', async () => {
  try {
    await navigator.clipboard.writeText('VOLT10');
  } catch (err) {
    /* clipboard unavailable — toast still confirms the code */
  }
  showToast(t('cta.copied'));
});

/* ---------- 🧭 Header on scroll ---------- */
const header = $('#siteHeader');
window.addEventListener('scroll', () => {
  header.classList.toggle('scrolled', window.scrollY > 12);
}, { passive: true });

/* ---------- 🕐 Live clock on hero phone ---------- */
function updateClock() {
  const now = new Date();
  const locale = lang === 'ru' ? 'ru-RU' : 'en-US';
  $('#phoneTime').textContent = now.toLocaleTimeString(locale, {
    hour: '2-digit',
    minute: '2-digit'
  });
  $('#phoneDate').textContent = now.toLocaleDateString(locale, {
    weekday: 'long',
    day: 'numeric',
    month: 'long'
  });
}

/* ---------- 🚀 Init ---------- */
applyLang('en');
observeReveals();
updateClock();
setInterval(updateClock, 1000);
$('#year').textContent = new Date().getFullYear();
