# 🚀 Quick Start Guide - Sklenářství SALAJ

## Úvodní nastavení

### 1. Zkontrolovat lokální preview

Web běží na: **http://localhost:4321/salaj**

- ✅ Dev server již běží
- ✅ Otevřeno v Simple Browser

### 2. Nahrání na GitHub

```bash
# Inicializovat git (již hotovo při instalaci Astro)
git status

# Přidat všechny soubory
git add .

# První commit
git commit -m "Initial commit - Glassmorphism website for Sklenářství SALAJ"

# Vytvořit GitHub repository "salaj" na github.com/janpodmolik
# Poté přidat remote a pushnout:
git remote add origin https://github.com/janpodmolik/salaj.git
git branch -M main
git push -u origin main
```

### 3. Povolit GitHub Pages

Po pushnutí na GitHub:

1. Jděte na: `https://github.com/janpodmolik/salaj/settings/pages`
2. **Source:** GitHub Actions (ne branch!)
3. Workflow se spustí automaticky při dalším push
4. Za ~2 minuty bude web dostupný na: `https://janpodmolik.github.io/salaj`

### 4. Nastavit Sveltia CMS

Pro editaci obsahu přes CMS:

1. **Povolit GitHub OAuth App:**

   - Jděte na: https://github.com/settings/developers
   - Klikněte "New OAuth App"
   - **Application name:** Sveltia CMS - Salaj
   - **Homepage URL:** `https://janpodmolik.github.io/salaj`
   - **Authorization callback URL:** `https://janpodmolik.github.io/salaj/admin/`
   - Vytvořte app a zkopírujte **Client ID**

2. **Upravit CMS config** (`public/admin/config.yml`):

   ```yaml
   backend:
     name: github
     repo: janpodmolik/salaj
     branch: main
     base_url: https://janpodmolik.github.io
     auth_endpoint: /salaj/admin/
   ```

3. **Přístup k CMS:**
   - Navštivte: `https://janpodmolik.github.io/salaj/admin`
   - Přihlaste se přes GitHub
   - Upravujte obsah a commitujte změny

## 📋 Co dál?

### Okamžité akce:

1. **Nahrajte logo** (pokud existuje):

   - Umístěte do `/public/logo.svg`
   - Aktualizujte `src/components/Header.astro` s `<img src="/logo.svg">`

2. **Aktualizujte Google Maps embed**:

   - Otevřete Google Maps
   - Vyhledejte: "Gen. Fajtla 3483/12, Přerov"
   - Klikněte Share → Embed a map
   - Zkopírujte iframe URL
   - Nahraďte v `src/pages/index.astro` (řádek ~xxx)

3. **Přidejte skutečné fotografie**:
   - Optimalizujte fotky (max 2000px šířka, WebP formát)
   - Nahrajte do `/public/images/`
   - Nebo použijte CMS: `/admin` → Galerie → New gallery

### Prioritní TODO (z TODO.md):

✅ **Week 1:**

- [ ] Nahrajte skutečné fotografie do galerie (všech 6 kategorií)
- [ ] Aktualizujte Google Maps na správnou lokaci
- [ ] Přidejte logo (pokud existuje)

✅ **Week 2:**

- [ ] Implementujte kontaktní formulář (doporučení: Web3Forms)
- [ ] Přidejte SEO meta tagy
- [ ] Otestujte na mobilních zařízeních

✅ **Week 3:**

- [ ] Zakupte doménu salaj.cz
- [ ] Proveďte migraci z GitHub Pages na vlastní doménu
- [ ] Nastavte Google Analytics (volitelné)

## 🆘 Časté problémy

### Dev server nefunguje

```bash
# Zastavte běžící server (Ctrl+C)
# Smažte node_modules a znovu nainstalujte:
rm -rf node_modules package-lock.json
npm install
npm run dev
```

### GitHub Actions selhává

- Zkontrolujte permissions v Settings → Actions → General
- Povolte "Read and write permissions"
- Povolte "Allow GitHub Actions to create and approve pull requests"

### CMS nefunguje

- Zkontrolujte GitHub OAuth App nastavení
- Ověřte že `base_url` a `auth_endpoint` jsou správně nastaveny
- Zkontrolujte že repo je public nebo máte správná oprávnění

### Fotky se nenačítají

- Ujistěte se že jsou v `/public/images/`
- Cesty musí začínat s `/images/` (ne `/public/images/`)
- Po přidání fotek restartujte dev server

## 📱 Testování

### Lokální testování:

```bash
npm run build
npm run preview
# Otevře se na http://localhost:4321/salaj
```

### Mobilní testování:

```bash
# Spusťte s --host pro přístup z mobilu
npm run dev -- --host
# Navštivte z mobilu: http://[your-local-ip]:4321/salaj
```

## 📞 Potřebujete pomoc?

- **Email:** sklenarstvi@salaj.cz
- **GitHub Issues:** https://github.com/janpodmolik/salaj/issues
- **TODO list:** Viz `TODO.md` pro kompletní plán

---

**🎉 Web je připravený k použití!**

Další kroky jsou volitelné vylepšení. Základní funkcionalita je plně implementována a připravena k deployment.
