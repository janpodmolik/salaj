# Sklenářství SALAJ Přerov

Moderní jednostránkový web pro sklenářství s glassmorphism designem, postavený na Astro frameworku.

## 🌟 Vlastnosti

- **Glassmorphism design** - Moderní, průhledný design odrážející skleněnou estetiku
- **Jednostránková aplikace** - Plynulá navigace mezi sekcemi
- **Responzivní design** - Optimalizováno pro desktop, tablet i mobil
- **Dynamické otevírací hodiny** - Automatické zobrazení statusu "Otevřeno/Zavřeno"
- **Galerie s kategoriemi** - 6 kategorií služeb s GLightbox lightboxem
- **CMS integrace** - Sveltia CMS pro snadnou správu obsahu
- **GitHub Pages deployment** - Automatický deploy přes GitHub Actions

## 🚀 Technologie

- **Astro** - Static site generator
- **HTML/CSS/JavaScript** - Základní web technologie
- **GLightbox** - Moderní lightbox pro galerii
- **Sveltia CMS** - Git-based headless CMS
- **GitHub Actions** - CI/CD pipeline

## 📦 Instalace a spuštění

### Prerekvizity
- Node.js 18+ 
- npm nebo yarn

### Lokální vývoj

```bash
# Instalace závislostí
npm install

# Spuštění dev serveru
npm run dev

# Otevře se na http://localhost:4321/salaj
```

### Build pro produkci

```bash
# Build projektu
npm run build

# Preview build verze
npm run preview
```

## 🎨 Struktura projektu

```
/
├── public/
│   ├── admin/          # Sveltia CMS
│   │   ├── index.html
│   │   └── config.yml
│   └── images/         # Galerie obrázky (CMS managed)
├── src/
│   ├── components/     # Astro komponenty
│   │   ├── Header.astro
│   │   ├── Footer.astro
│   │   ├── Gallery.astro
│   │   ├── OpeningHours.astro
│   │   └── EmergencyBanner.astro
│   ├── content/        # CMS obsah (JSON)
│   │   ├── opening-hours.json
│   │   ├── emergency-contact.json
│   │   └── gallery/    # Galerie metadata
│   ├── pages/
│   │   └── index.astro # Hlavní stránka
│   └── styles/
│       └── global.css  # Glassmorphism design system
├── .github/
│   └── workflows/
│       └── deploy.yml  # GitHub Actions CI/CD
└── astro.config.mjs
```

## 📝 Správa obsahu přes Sveltia CMS

### Přístup k CMS
1. Běžící web navštivte na `/admin` (např. `http://localhost:4321/salaj/admin`)
2. Přihlaste se přes GitHub OAuth
3. Editujte obsah přímo v prohlížeči

### Co můžete editovat:
- **Otevírací doba** - Dny, hodiny, povolení zobrazení
- **Havarijní kontakt** - Telefonní číslo, zobrazení alertu
- **Galerie** - Přidávání/editace fotografií do 6 kategorií:
  - Sprchové kouty
  - Skleněné obklady
  - Dveře a příčky
  - Zábradlí
  - Montáže
  - Opracování

### Přidání fotografie do galerie:
1. V CMS klikněte na "Galerie" → "New gallery"
2. Vyplňte:
   - Název obrázku
   - Kategorie (dropdown)
   - Nahrajte obrázek
   - Volitelný popis
3. Uložte a commitněte změny
4. GitHub Actions automaticky deployne novou verzi

## 🚀 Deployment

### GitHub Pages (aktuální)
Web je automaticky deployován na `https://janpodmolik.github.io/salaj` při každém push na main branch.

**Nastavení GitHub Pages:**
1. Repo → Settings → Pages
2. Source: GitHub Actions
3. Workflow: `.github/workflows/deploy.yml`

### Migrace na vlastní doménu (salaj.cz)

Po zakoupení domény:

1. **Aktualizovat `astro.config.mjs`:**
```javascript
export default defineConfig({
  site: 'https://www.salaj.cz',
  base: '/', // změnit z '/salaj'
  // ...
});
```

2. **Nastavit DNS záznamy:**
```
A     @     185.199.108.153
A     @     185.199.109.153
A     @     185.199.110.153
A     @     185.199.111.153
CNAME www   janpodmolik.github.io
```

3. **Přidat CNAME file:**
```bash
echo "www.salaj.cz" > public/CNAME
```

4. **Commitnout a pushnout změny**

## 🎨 Customizace designu

### Barevné schéma
Upravte CSS proměnné v `src/styles/global.css`:

```css
:root {
  --glass-blue-light: rgba(173, 216, 230, 0.15);
  --accent-blue: #4a90e2;
  /* ... další barvy */
}
```

### Glassmorphism efekty
```css
.glass-card {
  background: var(--glass-white-medium);
  backdrop-filter: blur(20px);
  border: 1px solid var(--glass-border);
  box-shadow: 0 8px 32px 0 var(--glass-shadow);
}
```

## 📋 TODO

Kompletní seznam budoucích úkolů najdete v `TODO.md`.

**Priority:**
1. ✅ Implementovat kontaktní formulář
2. ✅ Nahrát skutečné fotografie
3. ✅ SEO optimalizace
4. ✅ Migrace na salaj.cz

## 🐛 Známé problémy

- Kontaktní formulář zatím není funkční (placeholder)
- Galerie používá placeholder obrázky z Picsum
- Google Maps embed má generickou polohu (potřebuje aktualizovat)

## 📞 Kontakt

**Sklenářství SALAJ Přerov**  
Gen. Fajtla 3483/12  
750 02 Přerov  
Tel: 604 762 150  
Email: sklenarstvi@salaj.cz  
Web: [janpodmolik.github.io/salaj](https://janpodmolik.github.io/salaj)

## 📄 Licence

© 2025 Sklenářství SALAJ Přerov. Všechna práva vyhrazena.
