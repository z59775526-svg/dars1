# dars1

## 📱 telefon-savdo — VoltPhone (Liquid UI phone store)

Telefon do'koni dizayni: **liquid / glassmorphism UI**, **qizil-ko'k** rang sxemasi,
mahsulot **narxlari**, **2 til** (🇬🇧 EN / 🇷🇺 RU) qo'llab-quvvatlanadi.

A phone store design: **liquid / glassmorphism UI**, **red & blue** color scheme,
product **prices**, **2 languages** (EN / RU).

### Fayllar / Files
- `telefon-savdo/index.html` — sahifa tuzilmasi
- `telefon-savdo/style.css` — liquid dizayn (animatsion bloblar, glass effektlar)
- `telefon-savdo/script.js` — EN/RU tarjima, katalog, filtrlar, savatcha

### Ishga tushirish / Run
```bash
cd telefon-savdo
python3 -m http.server 8000
# ochish: http://localhost:8000
```

### Imkoniyatlar / Features
- 🌊 Animatsion "liquid" fon (qizil-ko'k-violet bloblar)
- 🪟 Glassmorphism kartalar va header
- 📱 6 ta telefon, narxlar, eski narx, badge'lar (NEW / HIT / SALE)
- 🔍 Brend bo'yicha filtr
- 🛒 Savatcha (cart counter + toast)
- 🌐 EN ⇄ RU til almashtirgich (barcha matnlar tarjima qilinadi)
- 🕐 Hero telefondagi jonli soat
- 🎁 Promokod (VOLT10) — bosganda nusxa olinadi
