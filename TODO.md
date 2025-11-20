# TODO: Sklenářství SALAJ - Future Tasks

## 🚀 Priority Tasks

### 1. Kontaktní formulář
- [ ] Vybrat backend službu (doporučení: Web3Forms, Formspree, nebo custom API)
- [ ] Implementovat form v `src/components/ContactForm.astro`
- [ ] Přidat validaci polí (jméno, email, telefon, zpráva)
- [ ] Implementovat spam ochranu (reCAPTCHA nebo honeypot)
- [ ] Nastavit e-mailové notifikace na `sklenarstvi@salaj.cz`
- [ ] Přidat success/error zprávy pro uživatele

### 2. Nahrání skutečných fotografií
- [ ] Nahradit placeholder obrázky v galerii (aktuálně Picsum)
- [ ] Optimalizovat fotografie před nahráním (doporučená velikost: max 2000px, WebP formát)
- [ ] Kategorizovat fotky podle služeb:
  - Sprchové kouty
  - Skleněné obklady
  - Dveře a příčky
  - Zábradlí
  - Montáže
  - Opracování
- [ ] Nahrát přes Sveltia CMS (`/admin`) nebo přímo do `/public/images/`
- [ ] Přidat popisky k jednotlivým fotografiím

### 3. SEO optimalizace
- [ ] Přidat Open Graph meta tagy pro sociální sítě
- [ ] Vytvořit `robots.txt` a `sitemap.xml`
- [ ] Optimalizovat meta descriptions pro každou sekci
- [ ] Přidat strukturovaná data (Schema.org) pro LocalBusiness
- [ ] Nastavit canonical URLs
- [ ] Přidat alt texty ke všem obrázkům

### 4. Domain migrace na salaj.cz
- [ ] Zakoupit/přenést doménu `salaj.cz`
- [ ] Nastavit DNS záznamy (A record, CNAME)
- [ ] Aktualizovat `site` v `astro.config.mjs` na `https://www.salaj.cz`
- [ ] Změnit `base` z `/salaj` na `/`
- [ ] Nastavit SSL certifikát
- [ ] Přidat redirecty z `janpodmolik.github.io/salaj` na novou doménu
- [ ] Aktualizovat GitHub Actions workflow pro custom domain

## 🎨 Design & UX vylepšení

### 5. Animace a interakce
- [ ] Přidat scroll-triggered fade-in animace pro sekce
- [ ] Implementovat smooth parallax efekt na hero sekci
- [ ] Vylepšit hover efekty na service kartách
- [ ] Přidat loading stav pro galerii
- [ ] Implementovat lazy loading pro všechny obrázky

### 6. Mobilní optimalizace
- [ ] Testovat na různých zařízeních (iOS, Android)
- [ ] Optimalizovat velikost touch targetů (min 44x44px)
- [ ] Zkontrolovat čitelnost textů na malých obrazovkách
- [ ] Otestovat hamburger menu na všech prohlížečích

## 📊 Analytics & Monitoring

### 7. Tracking a analytika
- [ ] Implementovat Google Analytics 4
- [ ] Přidat event tracking pro:
  - Kliknutí na telefon/email
  - Odeslání kontaktního formuláře
  - Zobrazení fotografií v galerii
  - Kliknutí na CTA buttony
- [ ] Nastavit Google Search Console
- [ ] Implementovat cookie consent (GDPR compliant)

## 🔧 Technické vylepšení

### 8. Performance optimalizace
- [ ] Implementovat preloading pro kritické assety
- [ ] Minimalizovat CSS/JS bundle size
- [ ] Nastavit caching headers
- [ ] Optimalizovat font loading (font-display: swap)
- [ ] Přidat service worker pro offline funkčnost (PWA)

### 9. Accessibility (A11y)
- [ ] Přidat ARIA labels kde chybí
- [ ] Zkontrolovat kontrastní poměry (WCAG AA standard)
- [ ] Testovat s screen readerem
- [ ] Přidat skip navigation link
- [ ] Zkontrolovat keyboard navigation

### 10. Testování
- [ ] Cross-browser testing (Chrome, Firefox, Safari, Edge)
- [ ] Lighthouse audit (Performance, SEO, Best Practices, Accessibility)
- [ ] Mobile responsiveness testing
- [ ] Formulář submission testing
- [ ] Broken links check

## 📝 Content Management

### 11. Sveltia CMS rozšíření
- [ ] Přidat kolekci pro "Aktuality/Blog" (volitelné)
- [ ] Vytvořit kolekci pro "Reference zákazníků"
- [ ] Přidat možnost editace služeb přes CMS
- [ ] Implementovat preview mode v CMS
- [ ] Dokumentovat workflow pro přidávání obsahu

### 12. Dodatečný obsah
- [ ] Přidat sekci "Reference/Recenze" od zákazníků
- [ ] Vytvořit FAQ sekci s často kladenými otázkami
- [ ] Přidat certifikace a ocenění (pokud existují)
- [ ] Dokumentovat portfolio nejdůležitějších projektů

## 🌐 Lokalizace (volitelné)

### 13. Vícejazyčná verze
- [ ] Vytvořit německou verzi (kvůli působnosti v Německu)
- [ ] Implementovat language switcher
- [ ] Přeložit všechny texty
- [ ] Nastavit hreflang meta tagy

## 🔐 Bezpečnost

### 14. Security hardening
- [ ] Implementovat rate limiting na formuláři
- [ ] Přidat CSP (Content Security Policy) headers
- [ ] Zkontrolovat všechny external dependencies
- [ ] Nastavit HTTPS redirect
- [ ] Implementovat XSS/CSRF ochranu

## 📱 Marketing & Social Media

### 15. Social media integrace
- [ ] Přidat Facebook Pixel (volitelné)
- [ ] Vytvořit Instagram feed widget (volitelné)
- [ ] Přidat WhatsApp Business button
- [ ] Implementovat social share buttony

---

## Poznámky

**Priorita implementace:**
1. Kontaktní formulář (nejvyšší priorita pro konverze)
2. Skutečné fotografie (klíčové pro prezentaci práce)
3. SEO optimalizace (pro viditelnost ve vyhledávání)
4. Domain migrace (profesionální dojem)

**Odhadovaný čas:**
- Priority tasks (1-4): ~8-12 hodin
- Design & UX: ~6-8 hodin
- Technické vylepšení: ~10-15 hodin
- Ostatní: podle potřeby

**Kontakt pro podporu:**
- GitHub Issues: https://github.com/janpodmolik/salaj/issues
- Email: sklenarstvi@salaj.cz
