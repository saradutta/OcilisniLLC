# GitHub Pages Deployment Guide

This guide walks you through deploying the Ocilisni website to GitHub Pages.

## Prerequisites

- GitHub account (free)
- Git installed on your computer [https://git-scm.com/downloads](https://git-scm.com/downloads)
- Repository created at https://github.com/saradutta/OcilisniLLC

## Step 1: Local Setup

### Clone the Repository
```bash
cd ~/Work/LLC
git clone https://github.com/saradutta/OcilisniLLC.git
cd OcilisniLLC
```

### Verify Files
Confirm the following structure exists:
```
OcilisniLLC/
├── index.html
├── css/
│   ├── variables.css
│   ├── style.css
│   └── responsive.css
├── js/
│   ├── navigation.js
│   ├── contact-form.js
│   └── animations.js
├── assets/
│   ├── images/
│   └── icons/
├── .gitignore
└── README.md
```

## Step 2: Initialize & Commit to Git

### Initialize Repository (if first time)
```bash
git init
git add .
git commit -m "Initial commit: Ocilisni website - complete implementation"
```

### For Subsequent Updates
```bash
git add .
git commit -m "Update: [describe changes]"
```

## Step 3: Configure GitHub Pages

### Via GitHub Web Interface
1. Go to https://github.com/saradutta/OcilisniLLC
2. Click **Settings** (top right)
3. Click **Pages** (left sidebar)
4. Under "Build and deployment":
   - **Source**: Select `Deploy from a branch`
   - **Branch**: Select `main` from dropdown
   - **Folder**: Select `/ (root)`
   - Click **Save**

### Push to GitHub
```bash
git branch -M main
git remote add origin https://github.com/saradutta/OcilisniLLC.git
git push -u origin main
```

(Note: Replace with `git push` for subsequent updates)

## Step 4: Verify Deployment

1. Go to repository Settings → Pages
2. Wait 1-2 minutes for deployment
3. GitHub will show: "Your site is published at: https://saradutta.github.io/OcilisniLLC/"
4. Visit the URL to verify the website is live

## Step 5: Add Custom Domain (Optional)

If you own a domain like `ocilisni.com`:

### 1. Update DNS Records
Contact your domain registrar (GoDaddy, Namecheap, etc.):

**Add A Records pointing to GitHub:**
```
@ (or root)          185.199.108.153
@                    185.199.109.153
@                    185.199.110.153
@                    185.199.111.153
```

**Add CNAME Record:**
```
www                  saradutta.github.io
```

Wait 1-24 hours for DNS to propagate.

### 2. Configure on GitHub
1. Go to repository Settings → Pages
2. Under "Custom domain", enter: `ocilisni.com`
3. Check **Enforce HTTPS**
4. Click **Save**

GitHub will verify DNS and setup SSL certificate (this takes a few minutes)

### 3. Update Form Endpoint (if using custom domain)
In `js/contact-form.js`, consider updating the Formspree endpoint if desired (optional - works with both domains)

## Step 6: Enable HTTPS (Recommended)

1. Go to Settings → Pages
2. Check **Enforce HTTPS** box
3. Save

This forces all traffic to use secure HTTPS connection.

## Step 7: Set Up Contact Form

### Using Formspree (Recommended - Free)

1. Visit https://formspree.io
2. Click **Sign Up** (or Login)
3. Create a new form:
   - **Email**: Your contact email
   - **Name**: "Ocilisni Contact Form"
4. Copy the **Endpoint ID** (looks like: `meojzpky`)
5. Update `js/contact-form.js`:
   ```javascript
   const FORMSPREE_ENDPOINT = 'https://formspree.io/f/YOUR_ENDPOINT_ID';
   ```
6. Commit and push:
   ```bash
   git add js/contact-form.js
   git commit -m "Add Formspree endpoint"
   git push
   ```

### Test Contact Form
1. Visit your website
2. Scroll to Contact section
3. Fill out and submit the form
4. Check Formspree dashboard for receipt

## Making Updates After Deployment

### Edit and Update
1. Edit files locally (HTML, CSS, JS)
2. Test in browser before deploying

### Deploy Changes
```bash
git add .
git commit -m "Update: [describe what changed]"
git push
```

Changes will be live within 1-2 minutes!

### Typical Updates
- **Update content**: Edit `index.html`
- **Change colors/fonts**: Edit `css/variables.css`
- **Add animations**: Edit `js/animations.js`
- **Update services**: Edit service cards in `index.html`

## Troubleshooting

### Website Not Showing Up
1. **Check GitHub Pages is enabled**: Settings → Pages → Source should be `main` branch
2. **Wait 2-3 minutes**: GitHub needs time to build and deploy
3. **Force refresh**: Ctrl+Shift+R (Windows) or Cmd+Shift+R (Mac)
4. **Check for errors**: Go to Settings → Pages and look for error message

### Form Not Submitting
1. **Verify Formspree endpoint**: Check `FORMSPREE_ENDPOINT` in `js/contact-form.js`
2. **Check browser console**: Press F12, go to Console tab, submit form and look for errors
3. **Test Formspree directly**: Visit your Formspree URL to verify it works
4. **CORS policy**: Formspree handles CORS - should not be an issue

### Performance Issues
1. **Compress images**: Use TinyPNG.com to reduce image file sizes
2. **Run Lighthouse audit**: DevTools → Lighthouse → Generate Report
3. **Check file sizes**: Total page should be <2MB

### DNS Not Working with Custom Domain
1. **Wait longer**: DNS propagation can take 24 hours
2. **Verify DNS records**: Use https://dnschecker.org to check your records
3. **Clear browser cache**: Ctrl+Shift+Delete to clear cache
4. **Try incognito mode**: Open site in private/incognito window

## Monitoring & Maintenance

### Monthly Checklist
- [ ] Run Lighthouse audit (Performance >90, Accessibility >95)
- [ ] Check contact form submissions
- [ ] Review Formspree spam/blacklist
- [ ] Update any broken links
- [ ] Test on multiple devices

### Quarterly Tasks
- [ ] Update testimonials section with new quotes
- [ ] Review and refresh team information
- [ ] Check for outdated content
- [ ] Test all forms and CTAs
- [ ] Verify all external links work

## Support Resources

- **GitHub Pages Documentation**: https://docs.github.com/en/pages
- **Git Documentation**: https://git-scm.com/doc
- **Formspree Documentation**: https://formspree.io/docs
- **MDN Web Docs**: https://developer.mozilla.org
- **GitHub Community**: https://github.community

## Quick Commands Reference

```bash
# Clone repository
git clone https://github.com/saradutta/OcilisniLLC.git

# Navigate to folder
cd OcilisniLLC

# Check status
git status

# Stage all changes
git add .

# Commit changes
git commit -m "Your message here"

# Push to GitHub
git push

# Pull latest changes
git pull

# View commit history
git log
```

---

**Website URL**: https://saradutta.github.io/OcilisniLLC/
**Repository**: https://github.com/saradutta/OcilisniLLC
**Status**: Active & Live
