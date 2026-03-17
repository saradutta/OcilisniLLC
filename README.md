# Ocilisni LLC - Static Website

A modern, responsive single-page website for Ocilisni, an AI life sciences consulting firm. Built with vanilla HTML5, CSS3, and JavaScript, optimized for GitHub Pages hosting.

## 🎯 Overview

This website showcases the Ocilisni consulting practice with the following sections:
- **Home**: Eye-catching hero section with call-to-action
- **About**: Professional background, credentials, and experience timeline
- **Services**: Four core service offerings with detailed descriptions
- **Testimonials**: Placeholder section for future client testimonials
- **Contact**: Functional contact form with validation
- **Footer**: Quick links and social media connections

## ✨ Key Features

- ✅ **Single-Page Application** - All content on one navigable page
- ✅ **Sticky Navigation** - Always-accessible menu with smooth scrolling
- ✅ **Mobile-First Responsive Design** - Optimized for all devices
- ✅ **Form Validation** - Client-side validation with real-time feedback
- ✅ **Smooth Animations** - Scroll-triggered fade-in effects
- ✅ **Accessibility** - WCAG compliant with semantic HTML and ARIA labels
- ✅ **Performance** - Optimized images, minimal dependencies
- ✅ **Dark Mode Ready** - CSS variables for easy theming

## 🛠 Technology Stack

- **HTML5** - Semantic markup
- **CSS3** - Flexbox, CSS Grid, CSS Variables
- **JavaScript (Vanilla)** - No frameworks or dependencies
- **Font Awesome 6.4** - Icon library
- **Google Fonts** - Inter & Poppins typefaces
- **Formspree** - Backend-less form submission (optional)

## 📁 File Structure

```
OcilisniLLC/
├── index.html                 # Main single-page application
├── css/
│   ├── variables.css         # Design system (colors, spacing, typography)
│   ├── style.css             # Main component styles
│   └── responsive.css        # Mobile-first responsive design
├── js/
│   ├── navigation.js         # Header, sticky, mobile menu, smooth scroll
│   ├── contact-form.js       # Form validation & submission
│   └── animations.js         # Scroll animations & effects
├── assets/
│   ├── images/               # Hero background, profile photo, etc.
│   └── icons/                # SVG icons (optional)
├── .gitignore                # Git ignore rules
└── README.md                 # This file
```

## 🚀 Quick Start

### Local Development

1. **Clone the repository**
   ```bash
   git clone https://github.com/saradutta/OcilisniLLC.git
   cd OcilisniLLC
   ```

2. **Open in browser**
   - Simply open `index.html` in your web browser
   - Or use a local server (recommended):
     ```bash
     # If you have Python installed
     python3 -m http.server 8000
     
     # Then visit: http://localhost:8000
     ```

3. **Edit content**
   - Modify `index.html` to update text content
   - Update `css/style.css` for styling changes
   - Modify JavaScript files for interactivity

### GitHub Pages Deployment

1. **Create GitHub repository** (if not already done)
   ```bash
   git init
   git add .
   git commit -m "Initial commit: Ocilisni website"
   git branch -M main
   git remote add origin https://github.com/saradutta/OcilisniLLC.git
   git push -u origin main
   ```

2. **Enable GitHub Pages**
   - Go to repository Settings → Pages
   - Source: Select `main` branch
   - Save
   - Your site will be live at `https://saradutta.github.io/OcilisniLLC/`

3. **Custom domain** (optional)
   - Register domain (e.g., ocilisni.com)
   - Go to repository Settings → Pages
   - Add custom domain in "Custom domain" field
   - Create `CNAME` file with domain name
   - Update DNS records with provided GitHub IP addresses

## 📝 Content Updates

### Update Text Content
- Edit `index.html` directly to modify all text, headings, and descriptions

### Add Profile Photo
1. Replace the `.photo-placeholder` div with an image:
   ```html
   <img src="assets/images/profile.jpg" alt="Sara Dutta Profile Photo" class="profile-photo">
   ```
2. Add to `assets/images/` folder

### Update Contact Information
- Modify email, phone, and LinkedIn links in the Contact section
- Update email address in contact form script

### Add/Remove Service Cards
- Duplicate or remove `.service-card` divs in the Services section
- Update icon classes (Font Awesome)

### Enable Contact Form Emails

1. **Sign up for Formspree**
   - Visit https://formspree.io
   - Create new form
   - Copy your Formspree endpoint

2. **Update form endpoint in `js/contact-form.js`**
   ```javascript
   const FORMSPREE_ENDPOINT = 'https://formspree.io/f/YOUR_FORM_ID';
   ```

3. **Test the form** - Submit and check Formspree dashboard

## 🎨 Customization

### Colors
Edit color variables in `css/variables.css`:
```css
:root {
    --color-primary: #0F766E;        /* Deep Teal */
    --color-secondary: #0369A1;      /* Ocean Blue */
    --color-accent: #059669;         /* Emerald Green */
}
```

### Typography
Modify font families and sizes in `css/variables.css`:
```css
--font-family-heading: 'Poppins', sans-serif;
--font-family-body: 'Inter', sans-serif;
```

### Spacing & Layout
Adjust spacing scale in `css/variables.css`:
```css
--spacing-md: 1rem;      /* 16px */
--spacing-lg: 1.5rem;    /* 24px */
--section-padding-desktop: 6rem;
```

## 📱 Responsive Breakpoints

- **Mobile**: Up to 767px
- **Tablet**: 768px to 1023px
- **Desktop**: 1024px and up
- **Wide**: 1440px and above

All sizes defined in `css/responsive.css`

## ⚡ Performance Optimization

### Image Optimization
- Compress images using TinyPNG or ImageOptim
- Target file sizes: <100KB per image
- Use WebP format with PNG fallback

### File Size Targets
- Total CSS: <50KB
- Total JavaScript: <30KB
- Total images: <500KB
- Full page load: <2MB

### Lighthouse Scores Target
- Performance: >90
- Accessibility: >95
- Best Practices: >90
- SEO: >90

Run Lighthouse audit:
1. Open DevTools in Chrome
2. Click Lighthouse tab
3. Click "Generate report"

## ♿ Accessibility

This website includes:
- ✅ Semantic HTML5 structure
- ✅ ARIA labels on interactive elements
- ✅ Keyboard navigation support
- ✅ Color contrast ratio >4.5:1
- ✅ Form validation with error messages
- ✅ Mobile touch targets >44x44px
- ✅ Skip navigation links (hidden but accessible)

Test accessibility:
- WAVE Browser Extension: https://wave.webaim.org/extension/
- axe DevTools: https://www.deque.com/axe/devtools/
- Lighthouse accessibility audit

## 🐛 Browser Support

- Chrome/Edge: Latest 2 versions
- Firefox: Latest 2 versions
- Safari: Latest 2 versions
- Mobile Safari (iOS): Latest 2 versions
- Chrome Mobile: Latest 2 versions

## 📊 SEO

The website includes:
- ✅ Meta tags (description, keywords, author)
- ✅ Open Graph tags for social sharing
- ✅ Semantic HTML structure
- ✅ Mobile-friendly design
- ✅ Fast page load

To add structured data (optional):
1. Add JSON-LD schema to `<head>` section
2. Use Google's Structured Data Testing Tool to validate

## 🔜 Future Enhancements

Potential additions:
- [ ] Blog/article section
- [ ] Testimonials carousel with actual client quotes
- [ ] Case studies with detailed project descriptions
- [ ] Team member profiles page
- [ ] Events/webinar listing
- [ ] Newsletter signup
- [ ] Multi-language support
- [ ] Dark mode toggle
- [ ] Google Analytics integration
- [ ] Progressive Web App (PWA) capabilities

## 📞 Support & Maintenance

### Regular Tasks
- Review and update testimonials
- Monitor contact form submissions
- Check Lighthouse performance scores monthly
- Update team information as needed

### Updates & Security
- Keep Font Awesome CDN link current
- Review GitHub security advisories
- Update links and content as business evolves

## 📄 License

This website is proprietary to Ocilisni LLC. All rights reserved.

## 📧 Questions?

For questions about this website, contact the development team or check the Formspree dashboard for incoming contact form submissions.

---

**Last Updated**: March 2026
**Version**: 1.0.0
**Status**: Live on GitHub Pages
