# Refaktoring dokumentace

## Provedené změny

### 1. **Redukce velikosti index.astro**

- **Před:** 785 řádků
- **Po:** 81 řádků
- **Redukce:** 90% ⬇️

### 2. **Nové komponenty**

#### `src/components/Icon.astro`

- Reusable SVG ikony
- 5 typů: phone, email, location, clock, arrow
- Eliminuje duplicitní SVG kód

#### `src/components/ContactInfo.astro`

- Samostatná komponenta pro kontaktní karty
- Používá Icon komponentu
- Obsahuje vlastní styly
- Props: `openingHours`

#### `src/components/Hero.astro`

- Hero sekce s CTA buttons
- Props: `openingHours`

#### `src/components/About.astro`

- O nás sekce
- Používá data z configu

#### `src/components/Services.astro`

- Služby sekce včetně dodatečných služeb
- Používá data z configu

#### `src/components/Contact.astro`

- Kontakt sekce s mapou
- Props: `openingHours`

### 3. **Layout komponenta**

#### `src/layouts/Layout.astro`

- Společný HTML wrapper
- Meta tagy a fonty
- Props: `title`, `description`

### 4. **Separované styly**

#### `src/styles/sections.css`

- Všechny styly sekcí (Hero, About, Services, Contact)
- Section-title styly
- Responsive styly
- 280+ řádků CSS odstraněno z index.astro

### 5. **Struktura projektu**

```
src/
├── components/
│   ├── Icon.astro              # NEW - Reusable icons
│   ├── ContactInfo.astro       # NEW - Contact cards
│   ├── Hero.astro              # NEW - Hero section
│   ├── About.astro             # NEW - About section
│   ├── Services.astro          # NEW - Services section
│   ├── Contact.astro           # NEW - Contact section
│   ├── Header.astro
│   ├── Footer.astro
│   ├── EmergencyBanner.astro
│   ├── OpeningHours.astro
│   └── Gallery.astro
├── layouts/
│   └── Layout.astro            # NEW - Main layout
├── styles/
│   ├── global.css
│   └── sections.css            # NEW - Section styles
├── pages/
│   └── index.astro             # REFACTORED - 90% smaller
└── config.ts
```

## Výhody refaktoringu

### ✅ **DRY (Don't Repeat Yourself)**

- Icon komponenta eliminuje ~150 řádků duplicitního SVG kódu
- ContactInfo komponenta znovupoužitelná pro další stránky
- Společný Layout pro všechny stránky

### ✅ **Separation of Concerns**

- HTML/Astro odděleno od CSS
- Každá sekce = samostatná komponenta
- Styly v dedikovaném souboru

### ✅ **Modulárnost**

- Každá komponenta je samostatná jednotka
- Snadná údržba a testování
- Možnost znovupoužití

### ✅ **Čitelnost**

- index.astro nyní 81 řádků (z 785)
- Jasná struktura - seznam komponent
- Jednoduchá navigace v kódu

### ✅ **Údržba**

- Změna sekce = úprava jednoho souboru
- CSS změny v sections.css
- Jednodušší debugging

### ✅ **Performance**

- Žádná změna ve výkonu
- Stejný výsledný HTML
- Lepší cacheování CSS

## Další možnosti vylepšení

1. **TypeScript interface** pro props
2. **Storybook** pro komponenty
3. **Tests** pro každou komponentu
4. **Lazy loading** pro galerii
5. **API route** pro kontaktní formulář

## Migrace

Starý index.astro je uložen jako `index-old.astro` pro referenci.
