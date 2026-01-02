# 🎤 KARAOKE APP - COMPLETE SETUP GUIDE

**Duration: 15-20 minutes**
**Difficulty: BEGINNER**
**Cost: FREE**

---

## 📋 CHECKLIST

- [ ] Gmail account
- [ ] GitHub account
- [ ] Vercel account (free)
- [ ] Firebase project created
- [ ] YouTube API Key
- [ ] Code deployed online

---

## STEP 1: Create Accounts (5 min)

### 1.1 Firebase Account
1. Go to **firebase.google.com**
2. Click **Get Started** → Sign in with **Gmail**
3. Accept terms, continue

### 1.2 GitHub Account (if don't have)
1. Go to **github.com**
2. Click **Sign up**
3. Use **Gmail** or email

### 1.3 Vercel Account
1. Go to **vercel.com**
2. Click **Sign up**
3. Choose **GitHub** (easier)
4. Authorize connection

✅ **All accounts ready!**

---

## STEP 2: Create Firebase Project (5 min)

### 2.1 Go to Firebase Console
1. **firebase.google.com**
2. Click **Go to console**
3. Click **Create Project** (or +)

### 2.2 Project Name
- Name: `karaoke-app`
- Disable **Google Analytics** ✓ (not needed for us)
- Click **Create**

### 2.3 Enable Realtime Database
1. Left sidebar → **Build** → **Realtime Database**
2. Click **Create Database**
3. Choose **Test Mode** (for now)
4. Click **Enable**

✅ **Database created!**

### 2.4 Get Firebase Config
1. Click **Project Settings** ⚙️ (top left, next to project name)
2. Scroll to **Your apps** section
3. Look for **</> WEB** icon
4. Click **Copy** (if already added) or add new web app
5. Copy the entire `firebaseConfig` object:

```javascript
{
  apiKey: "AIzaS...",
  authDomain: "karaoke-app-xyz.firebaseapp.com",
  databaseURL: "https://karaoke-app-xyz.firebaseio.com",
  projectId: "karaoke-app-xyz",
  storageBucket: "karaoke-app-xyz.appspot.com",
  messagingSenderId: "123456789",
  appId: "1:123456789:web:abcdef123456"
}
```

✅ **Save this config! You'll need it next.**

---

## STEP 3: Get YouTube API Key (3 min)

### 3.1 Go to Google Cloud Console
1. Go to **console.cloud.google.com**
2. Sign in with **Gmail**
3. Accept terms

### 3.2 Create Project
1. Top menu → **Select a project** → **New Project**
2. Name: `Karaoke-API`
3. Click **Create**
4. Wait 30 seconds...

### 3.3 Enable YouTube API
1. Search bar: type `YouTube Data API v3`
2. Click **YouTube Data API v3** (blue result)
3. Click **Enable**
4. Yellow banner → Click **Create Credentials**

### 3.4 Create API Key
1. **Credential type**: API Key
2. Click **Create**
3. Copy the **API Key** (long string)

✅ **Save YouTube API Key!**

---

## STEP 4: Download & Update Project (5 min)

### 4.1 Download Project
1. Download the `karaoke-app` folder (from this repo)
2. Extract somewhere on your computer

### 4.2 Update Firebase Config
1. Open **js/firebase.js** in text editor
2. Replace:
```javascript
const firebaseConfig = {
  apiKey: "YOUR_FIREBASE_API_KEY",  // ← Replace
  authDomain: "your-project.firebaseapp.com",  // ← Replace
  databaseURL: "https://your-project.firebaseio.com",  // ← Replace
  projectId: "your-project"  // ← Replace
  // ... rest of keys
};
```

With your actual Firebase config from Step 2.4

### 4.3 Update YouTube API Key
1. Open **controller.html** in text editor
2. Find line ~180: `const API_KEY = "YOUR_YOUTUBE_API_KEY";`
3. Replace with your YouTube API Key from Step 3.4

### 4.4 Change Admin PIN (Optional but recommended)
1. Find in **controller.html** (line ~380): `const ADMIN_PIN = "1234";`
2. Change `"1234"` to your PIN (e.g., `"5678"`)

✅ **Project configured!**

---

## STEP 5: Test Locally (2 min)

### 5.1 Test on Your Computer
1. Open **index.html** in web browser
2. Should see: TV Screen with QR code
3. Open **controller.html** in another tab
4. Should see: Search box + admin panel

### 5.2 Test Search
1. In controller: Enter User ID: `TEST001`
2. Search: `never gonna give you up` (has lyrics)
3. Should see results
4. If error: Check YouTube API Key

### 5.3 Test Queue
1. Click **➕ Reserve** on any song
2. TV screen should show in Queue section

✅ **Local test successful!**

---

## STEP 6: Upload to GitHub (3 min)

### 6.1 Create GitHub Repository
1. Go to **github.com**
2. Click **+** (top right) → **New repository**
3. Name: `karaoke-app`
4. **Public** (so Vercel can access)
5. Initialize with: `Add .gitignore (Node)`
6. Click **Create repository**

### 6.2 Upload Files
**Option A: Web Upload (EASIEST)**
1. Open your new repo on GitHub
2. Click **Add file** → **Upload files**
3. Drag & drop all files from `karaoke-app` folder
4. Commit message: `Initial karaoke system`
5. Click **Commit changes**

**Option B: Git Command (Advanced)**
```bash
cd C:\xampp\htdocs\eastkaraoke\karaoke-app
git init
git add .
git commit -m "Initial karaoke system"
git remote add origin https://github.com/YOUR_USERNAME/karaoke-app.git
git branch -M main
git push -u origin main
```

✅ **Code on GitHub!**

---

## STEP 7: Deploy to Vercel (2 min)

### 7.1 Import Project
1. Go to **vercel.com**
2. Click **Add New** → **Project**
3. Click **Import Git Repository**
4. Search: `karaoke-app`
5. Click **Import**

### 7.2 Configure
- **Framework**: `Other` (it's just HTML)
- Click **Deploy**
- Wait 2-3 minutes...

### 7.3 Get Live URL
- ✅ **Deployment complete!**
- Copy the live URL (e.g., `https://karaoke-app-xyz.vercel.app`)

---

## ✅ YOU'RE DONE!

### URLs to use:
- 📺 **TV Screen**: `https://karaoke-app-xyz.vercel.app`
- 📱 **Phone**: Scan QR on TV or go to same URL, then `/controller.html`

### Quick Test:
1. Open TV URL on laptop/TV
2. On phone: Open same URL with `/controller.html`
3. Enter any User ID (e.g., `USER001`)
4. Search & reserve songs
5. Should auto-play on TV

---

## 🚀 DEPLOY UPDATES

Anytime you change code:
```bash
# Update your file
# Then:
git add .
git commit -m "Updated xyz"
git push origin main
# Vercel auto-deploys in 1-2 min
```

---

## 🆘 TROUBLESHOOTING

### Firebase config not working?
- ✓ Check Firebase project ID matches
- ✓ Verify Realtime Database is **Enabled**
- ✓ Check Firebase URL is correct

### YouTube search returns error?
- ✓ Check YouTube API Key is correct
- ✓ Verify API is **Enabled** in Google Cloud
- ✓ Check you're not hitting quota (1M calls/day free)

### QR code blank?
- ✓ Check internet connection
- ✓ QR generator API: `api.qrserver.com`

### Songs not playing?
- ✓ Check Video ID is correct
- ✓ Verify video is YouTube (not private/geo-blocked)
- ✓ Try searching from controller

### Multi-user not syncing?
- ✓ All devices on **same WiFi**
- ✓ Check Firebase Rules are "Test Mode"
- ✓ Browser refresh (F5)

---

## 📱 USAGE INSTRUCTIONS (for your singers)

### **For Singers (Using Phone)**
1. **Get User ID from Admin** (given as: U1700001234567)
2. **Open Controller URL**
3. **Enter Your User ID**
4. **Search song name**
5. **Click ➕ Reserve**
6. **Watch it play on TV!**
7. When done: **Click 🎤 Finish Song**

### **For Admin**
1. **Open Controller on Phone**
2. **Go to Admin tab**
3. **Enter PIN**: 1234 (or your custom PIN)
4. **Click 🔓 Unlock Admin**
5. **Create singers** → Auto-generates User ID
6. **Share User IDs** with singers
7. **Monitor queue** & **skip songs** as needed
8. Use **👑 Admin tab** to manage everything

### **For TV Setup**
1. **Open TV URL** on Smart TV / Laptop
2. **CTRL+F11** = Full screen on laptop
3. **Keep open** all night
4. QR code on screen for singers to scan
5. Uses: **TV remote** (fullscreen, skip, clear queue buttons)

---

## 🎉 YOU NOW HAVE PROFESSIONAL VIDEOKE!

Enjoy your karaoke system! 🎤🎶

For updates: Check GitHub repo regularly
For issues: Check Firebase console logs
