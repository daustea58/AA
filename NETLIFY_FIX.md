# 🔧 Netlify Deployment Fix Guide

## ❌ Error Yang Terjadi:
```
Could not find a required file.
  Name: index.html
  Searched in: /opt/build/repo/frontend/public
```

## ✅ Solusi Yang Sudah Diterapkan:

### 1. File `netlify.toml` (Root Level)
File konfigurasi Netlify sudah dibuat di root project dengan settings:
```toml
[build]
  base = "frontend"
  command = "yarn install && yarn build"
  publish = "frontend/build"
```

**Kenapa penting?**
- `base = "frontend"` → Memberitahu Netlify bahwa working directory ada di folder frontend
- `command = "yarn install && yarn build"` → Ensures dependencies installed sebelum build
- `publish = "frontend/build"` → Menunjuk ke folder hasil build yang benar

### 2. File `.nvmrc` 
Dibuat di root dan di folder frontend untuk memastikan Node.js version 18 digunakan.

---

## 🚀 Cara Deploy ke Netlify (Updated)

### **Option 1: Drag & Drop (Recommended untuk Testing)**

1. **Build Project Secara Lokal:**
   ```bash
   cd /app/frontend
   yarn install
   yarn build
   ```

2. **Upload ke Netlify:**
   - Buka [Netlify Drop](https://app.netlify.com/drop)
   - Drag & drop folder `/app/frontend/build`
   - Done! ✅

---

### **Option 2: Connect GitLab Repository**

#### A. **Di GitLab - Pastikan Files Ter-Push:**
```bash
# Cek status
git status

# Add semua files (jika ada yang belum)
git add -A

# Commit
git commit -m "Fix: Add netlify.toml configuration"

# Push ke GitLab
git push origin main
```

#### B. **Di Netlify Dashboard:**

1. **Connect Repository:**
   - Login ke [Netlify](https://app.netlify.com/)
   - Klik "Add new site" → "Import an existing project"
   - Pilih "GitLab"
   - Authorize Netlify untuk mengakses GitLab
   - Pilih repository Anda

2. **Build Settings (PENTING!):**
   
   **Netlify akan otomatis detect dari `netlify.toml`, tapi double check:**
   
   ```
   Base directory: frontend
   Build command: yarn install && yarn build
   Publish directory: frontend/build
   ```

3. **Environment Variables (Jika Diperlukan):**
   - Klik "Site settings" → "Environment variables"
   - Add variable jika ada (untuk project ini tidak ada env vars yang diperlukan)

4. **Deploy:**
   - Klik "Deploy site"
   - Tunggu build process selesai
   - Website akan live! 🎉

---

## 🔍 Troubleshooting

### **Jika masih error "index.html not found":**

1. **Cek GitLab Repository:**
   ```bash
   # Pastikan file ter-push
   git ls-files | grep "frontend/public/index.html"
   ```
   
   Harus return: `frontend/public/index.html`

2. **Cek Netlify Build Log:**
   - Lihat apakah base directory terdeteksi dengan benar
   - Pastikan command dijalankan di `/opt/build/repo/frontend`

3. **Manual Override di Netlify:**
   - Site settings → Build & deploy → Build settings
   - Pastikan settings sesuai dengan netlify.toml

### **Jika build gagal dengan error "command not found":**

```bash
# Di Netlify Dashboard, set environment variables:
NODE_VERSION = 18
YARN_VERSION = 1.22.22
```

### **Jika ada error dengan craco plugins:**

Craco config sudah dioptimasi untuk production build. Jika masih error, coba:

```bash
# Tambahkan di netlify.toml
[build.environment]
  CI = "false"
```

---

## 📱 Post-Deployment Checklist

Setelah deploy berhasil, test:

✅ Password gateway berfungsi (password: `01022003`)  
✅ Music player bisa play/pause  
✅ Navigate antar pages lancar  
✅ Konfeti animation muncul di game page  
✅ Timeline scroll smooth  
✅ Mobile responsive (test di Chrome DevTools)  

---

## 🎵 Upload MP3 Files (Important!)

**Netlify akan deploy tanpa MP3 files** karena file-file tersebut belum ada di repository.

### Cara Upload MP3:

#### Option 1: Via Git
```bash
# Copy MP3 files ke folder
cp /path/to/your/mp3s/* /app/frontend/public/music/

# Commit dan push
git add frontend/public/music/*.mp3
git commit -m "Add music files"
git push origin main
```

#### Option 2: Manual Upload via Netlify
1. Go to site → Deploys
2. Drag & drop file MP3 ke Netlify dashboard
3. Atau gunakan Netlify CLI

---

## 🎯 Summary Fix

**Root Cause:**
- Netlify tidak tahu bahwa project root ada di folder `frontend`
- Default build command tidak run di directory yang benar

**Solution Applied:**
✅ Added `netlify.toml` dengan correct base directory  
✅ Added `.nvmrc` untuk consistent Node version  
✅ Optimized craco config untuk production build  

**Next Steps:**
1. Push semua files ke GitLab
2. Connect repository di Netlify
3. Deploy akan berhasil ✅

---

Made with ❤️ by Ryzen for Lixie
