# 📁 Struktur File Dark Luxury Storytelling Website

## 🎯 Main Files

```
/app/
├── dark-luxury-storytelling.zip          # 📦 ZIP file untuk download
├── DEPLOYMENT_GUIDE.md                   # 🚀 Panduan deployment ke Netlify
│
├── frontend/
│   ├── public/
│   │   └── music/                        # 🎵 Letakkan file MP3 di sini
│   │       └── README.txt
│   │
│   ├── src/
│   │   ├── contexts/
│   │   │   └── AudioContext.js           # 🎼 Context untuk persistent audio player
│   │   │
│   │   ├── components/
│   │   │   ├── AudioPlayer.js            # 🎵 Persistent audio player component
│   │   │   └── ui/                       # Shadcn UI components
│   │   │
│   │   ├── pages/
│   │   │   ├── Page1Gateway.js           # 🔐 Halaman login (password: 01022003)
│   │   │   ├── Page2Music.js             # 🎶 Halaman pilih musik (4 kategori)
│   │   │   ├── Page3Game.js              # 🎮 Interactive game (Yes/No button)
│   │   │   ├── Page4Birthday.js          # 🎂 Birthday wish (typewriter)
│   │   │   ├── Page5Story.js             # 📖 Timeline cerita (3 stories)
│   │   │   └── Page6Closing.js           # ❤️ Penutup dengan kutipan cinta
│   │   │
│   │   ├── App.js                        # 🔀 Main routing & AudioProvider
│   │   ├── App.css                       # 🎨 Global styles
│   │   └── index.css                     # 🎨 Tailwind & Google Fonts
│   │
│   ├── package.json                      # 📦 Dependencies (framer-motion, react-confetti)
│   └── tailwind.config.js                # ⚙️ Tailwind configuration
│
└── backend/
    ├── server.py                         # (Optional - tidak diperlukan)
    └── requirements.txt
```

## 🎨 Theme & Design

**Dark Luxury Theme:**
- Background: Deep black/navy (#0a0a0a, #0f0f1a)
- Primary: Gold (#D4AF37)
- Secondary: Silver (#C0C0C0)
- Font Heading: Playfair Display (serif)
- Font Body: Inter (sans-serif)

**Key Design Elements:**
- ❌ NO IMAGES (sesuai constraint)
- ✅ CSS gradients & shadows
- ✅ Particle animations
- ✅ Smooth transitions (Framer Motion)
- ✅ Glass-morphism effects
- ✅ Mobile-first (375x812 Android priority)

## 🎵 Music Files Mapping

Letakkan file MP3 Anda di `/app/frontend/public/music/` dengan nama:

**Sedih:**
- menerima-luka.mp3
- bersenja-gurau.mp3
- dirimu-yang-dulu.mp3

**Mood:**
- mistletoe.mp3
- 18.mp3
- trouble.mp3

**Semangat:**
- payphone.mp3
- perfect.mp3
- where-we-are.mp3

**Favorit:**
- kota-ini.mp3
- masa-ini-nanti.mp3
- 8-letters.mp3

## 📱 Page Flow

```
Page 1: Gateway (Password Login)
   ↓
Page 2: Music Selection (4 categories)
   ↓
Page 3: Interactive Game (Yes/No)
   ↓
Page 4: Birthday Wish (Typewriter)
   ↓
Page 5: Story Timeline (3 stories)
   ↓
Page 6: Closing (Love Quotes)
```

## 🚀 Quick Start

1. **Extract ZIP:**
   ```bash
   unzip dark-luxury-storytelling.zip
   ```

2. **Copy MP3 Files:**
   ```bash
   cp /path/to/your/mp3s/* frontend/public/music/
   ```

3. **Install & Run:**
   ```bash
   cd frontend
   yarn install
   yarn start
   ```

4. **Build for Production:**
   ```bash
   yarn build
   ```

5. **Deploy ke Netlify:**
   - Drag & drop folder `build` ke Netlify
   - Atau ikuti panduan di `DEPLOYMENT_GUIDE.md`

## 💡 Important Notes

- Website ini **static React app** (tidak butuh backend)
- Audio player **persistent** across pages (menggunakan Context API)
- Password untuk gateway: **01022003** (tanggal lahir bb: DDMMYYYY)
- Mobile-optimized untuk Android (viewport 375x812)
- Semua animasi smooth dengan Framer Motion
- Konfeti animation di Page 3 (saat klik Yes)

## 🎁 Features

✅ Password gateway dengan animasi unlock
✅ Music player dengan 12 lagu (4 kategori)
✅ Persistent audio player (tetap play saat pindah page)
✅ Interactive game dengan button yang bergerak
✅ Konfeti explosion animation
✅ Typewriter effect di birthday page
✅ Timeline dengan 3 cerita romantis
✅ Kutipan cinta di closing page
✅ Dark Luxury theme (elegant & romantic)
✅ Mobile-first responsive design
✅ Smooth page transitions

Made with ❤️ by Ryzen for Lixie (bb)
Happy Birthday 1 Februari 2003 🎂
