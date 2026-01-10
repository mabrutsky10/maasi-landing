# MAASI Landing Page

Ultra-minimalist, conversion-focused landing page for MAASI — an intelligence layer for sports marketing & experiences.

## Tech Stack

- **React 18** with Vite
- **Tailwind CSS** for styling
- **Dark-first design** with optional light mode toggle
- **Multi-language support** (i18n) - Spanish (Argentina), English (USA), Portuguese (Brazil)

## Setup & Run

1. **Install dependencies:**
   ```bash
   npm install
   ```

2. **Add the logo:**
   - Place your MAASI logo at `/public/logo-maasi.png`
   - The logo should be a PNG file (transparent background recommended)

3. **Run development server:**
   ```bash
   npm run dev
   ```

4. **Build for production:**
   ```bash
   npm run build
   ```

5. **Preview production build:**
   ```bash
   npm run preview
   ```

## Features

- ✅ Ultra-minimalist design
- ✅ Dark-first theme with light mode toggle
- ✅ Fully responsive (mobile-first)
- ✅ Smooth scroll animations (IntersectionObserver)
- ✅ WhatsApp deep links with prefilled messages
- ✅ Accessible (semantic HTML, ARIA labels, focus states)
- ✅ Sticky navigation bar
- ✅ Single-page layout with anchor scrolling
- ✅ Multi-language support with language selector (🇦🇷 🇺🇸 🇧🇷)
- ✅ Language preference saved in localStorage

## Structure

- `/src/App.jsx` - Main app component
- `/src/components/` - All section components
- `/src/i18n/` - Internationalization (language context and translations)
  - `/src/i18n/LanguageContext.jsx` - Language context provider
  - `/src/i18n/locales/` - Translation files (es-AR.json, en-US.json, pt-BR.json)
- `/public/logo-maasi.png` - Logo file
- `/index.html` - HTML entry point

## WhatsApp Integration

The WhatsApp links use deep linking with prefilled messages. 

**To add a phone number**, update the WhatsApp links in the components. Replace:
```javascript
const whatsappLink = `https://wa.me/?text=${whatsappMessage}`
```

With:
```javascript
const whatsappLink = `https://wa.me/1234567890?text=${whatsappMessage}`
```

Where `1234567890` is your WhatsApp number in international format (country code + number, no + or spaces).

Currently, the links use the generic format which opens WhatsApp and lets users select a contact. This works but isn't ideal for conversion.

## Customization

- **Colors**: Edit Tailwind classes in components or extend theme in `tailwind.config.js`
- **Content**: All copy is in the component files
- **Animations**: Scroll reveal timing can be adjusted in `src/index.css`
