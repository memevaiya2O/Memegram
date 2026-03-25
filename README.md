# MemeGram APK / PWA

MemeGram - Share and enjoy the best memes!

## GitHub Pages Deploy করার নিয়ম

### ধাপ ১: GitHub Pages চালু করুন

1. আপনার GitHub repository-তে যান: `https://github.com/memevaiya2O/MemeGramapk`
2. **Settings** ট্যাবে ক্লিক করুন
3. বাম দিকের মেনু থেকে **Pages** ক্লিক করুন
4. **Source** সেকশনে **GitHub Actions** সিলেক্ট করুন
5. **Save** করুন

### ধাপ ২: ফাইলগুলো আপলোড করুন

```bash
git init
git add .
git commit -m "Initial commit"
git branch -M main
git remote add origin https://github.com/memevaiya2O/MemeGramapk.git
git push -u origin main
```

### ধাপ ৩: Deploy দেখুন

Actions ট্যাবে গিয়ে deployment status দেখুন।

## প্রজেক্ট স্ট্রাকচার

```
MemeGram/
├── .github/
│   └── workflows/
│       └── deploy.yml      # GitHub Actions workflow
├── css/
│   └── style.css           # App styles
├── icons/
│   └── logo.png            # App icon (মোবাইলে install করলে এই আইকন দেখাবে)
├── js/
│   └── app.js              # App JavaScript
├── index.html              # Main HTML file
├── manifest.json           # PWA manifest (app icon, name etc.)
├── sw.js                   # Service Worker (offline support)
└── README.md               # This file
```

## মোবাইলে Install করার নিয়ম (Android)

1. Chrome browser-এ app URL খুলুন
2. Menu (3 dots) > **Add to Home screen** ক্লিক করুন
3. **Add** বাটন ক্লিক করুন
4. Home screen-এ MemeGram আইকন দেখাবে!

## Error ছিল - এখন ঠিক করা হয়েছে

**আগের সমস্যা:**
- GitHub Pages enabled ছিল না
- `deploy-pages` action 404 error দিচ্ছিল

**সমাধান:**
- `permissions: pages: write, id-token: write` যোগ করা হয়েছে
- `configure-pages` action যোগ করা হয়েছে  
- `upload-pages-artifact@v3` ব্যবহার করা হয়েছে
- `deploy-pages@v4` ব্যবহার করা হয়েছে
- GitHub Pages Settings থেকে **GitHub Actions** source সিলেক্ট করতে হবে
