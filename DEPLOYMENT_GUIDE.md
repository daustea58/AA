# Dark Luxury Storytelling Website - Deployment Guide

## 📦 File MP3 Setup

File MP3 harus ditempatkan di folder `/app/frontend/public/music/` dengan nama-nama berikut:

### Kategori Sedih:
- `menerima-luka.mp3` - Menerima Luka (Natasya Sabella)
- `bersenja-gurau.mp3` - Bersenja Gurau (Raim Laode)
- `dirimu-yang-dulu.mp3` - Dirimu Yang Dulu (Anggis Devaki)

### Kategori Mood:
- `mistletoe.mp3` - Mistletoe (Justin Bieber)
- `18.mp3` - 18 (One Direction)
- `trouble.mp3` - Trouble (Frank - ciaffa fedo DJ)

### Kategori Semangat:
- `payphone.mp3` - Payphone (Maroon 5)
- `perfect.mp3` - Perfect (One Direction)
- `where-we-are.mp3` - Where we are (One Direction)

### Kategori Favorit:
- `kota-ini.mp3` - Kota ini tak sama tanpamu (Nadhif Basalamah)
- `masa-ini-nanti.mp3` - Masa ini Nanti dan Masa Indah Lainnya (Nuca)
- `8-letters.mp3` - 8 Letters (Why Don't We)

## 🚀 Deploy ke Netlify

### Cara 1: Via Netlify UI (Drag & Drop)

1. **Prepare Build:**
   ```bash
   cd /app/frontend
   yarn build
   ```

2. **Upload ke Netlify:**
   - Kunjungi [Netlify](https://app.netlify.com/)
   - Drag & drop folder `frontend/build` ke dashboard
   - Website akan live dalam beberapa detik!

### Cara 2: Via Netlify CLI

1. **Install Netlify CLI:**
   ```bash
   npm install -g netlify-cli
   ```

2. **Login:**
   ```bash
   netlify login
   ```

3. **Deploy:**
   ```bash
   cd /app/frontend
   yarn build
   netlify deploy --prod --dir=build
   ```

### Cara 3: Via Git (Continuous Deployment)

1. Push project ke GitHub/GitLab/Bitbucket
2. Di Netlify Dashboard, klik "New site from Git"
3. Pilih repository
4. **Build settings:**
   - Base directory: `frontend`
   - Build command: `yarn build`
   - Publish directory: `frontend/build`
5. Klik "Deploy site"

## 🎵 Upload MP3 Files ke Netlify

Setelah deploy, upload file MP3:

1. Di Netlify Dashboard, pilih site Anda
2. Go to "Deploys" > "Deploy settings"
3. Scroll ke "Asset optimization"
4. Upload semua file MP3 ke folder `/music/`

Atau manual via Netlify CLI:
```bash
# Copy MP3 files ke build folder sebelum deploy
cp -r /path/to/your/mp3s /app/frontend/build/music/
netlify deploy --prod --dir=build
```

## 📱 Testing Mobile View

Website sudah dioptimalkan untuk Android (viewport 375x812). Test dengan:

1. Chrome DevTools (F12) > Toggle device toolbar
2. Pilih device: Pixel 5, Galaxy S20, atau custom (375x812)
3. Test semua page flow dari gateway hingga closing

## 🎨 Features

- ✅ Password gateway (01022003)
- ✅ Music selection dengan 4 kategori
- ✅ Persistent audio player
- ✅ Interactive Yes/No game dengan confetti
- ✅ Typewriter animation di birthday page
- ✅ Timeline dengan 3 cerita
- ✅ Love quotes di closing page
- ✅ Dark Luxury theme (Gold & Silver)
- ✅ Mobile-first responsive design

## 💻 Local Development

```bash
# Frontend
cd /app/frontend
yarn install
yarn start

# Backend (tidak diperlukan untuk static site)
cd /app/backend
pip install -r requirements.txt
uvicorn server:app --reload
```

## 📝 Notes

- Website ini adalah static React app, tidak memerlukan backend
- Semua animasi menggunakan Framer Motion
- Font: Playfair Display (headings) & Inter (body)
- Audio player akan persist across page navigation
- Konfeti animation di Page 3 menggunakan react-confetti

Made with ❤️ by Ryzen for Lixie
