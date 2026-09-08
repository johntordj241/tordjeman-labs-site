# 🚀 INSTRUCTIONS DÉPLOIEMENT NETLIFY

**Date:** 2026-09-08  
**État:** Code 100% prêt pour production  
**Votre numéro:** +33 7 49 80 32 43 ✅ Ajouté (fixe + portable)

---

## ✅ PRÉ-REQUIS AVANT DÉPLOIEMENT

### 1. Vérifier Git synchronisé

```bash
cd "c:\Users\johnt\Documents\Projets\Tordjeman-Labs-site"
git status
# Doit montrer: 2 fichiers modifiés
#   - src/components/Footer.tsx (portable ajouté)
#   - src/lib/schema.ts (portable dans contactPoint)
```

### 2. Faire un dernier commit (si pas déjà fait)

```bash
git add .
git commit -m "Audit complet: SEO, GA4, RGPD finalisés + numéros téléphone (fixe + portable)"
git push origin main
```

---

## 🌐 DÉPLOIEMENT NETLIFY (Étapes exactes)

### ÉTAPE 1: Connectez-vous à Netlify

1. Ouvrir https://app.netlify.com
2. Se connecter avec credentials GitHub (johntordj241)
3. Sélectionner site existant OU créer nouveau

### ÉTAPE 2: Configuration du déploiement

Si site existant:
- Aller à **Deploys** → **Deploy settings** → vérifier linked GitHub repo
- Vérifier branch: `main`

Si nouveau site:
- Cliquer "New site from Git"
- Sélectionner GitHub → johntordj241/tordjeman-labs-site
- Vérifier settings:
  ```
  Build command:    npm run build
  Publish directory: dist/
  Base directory:    (leave blank)
  ```

### ÉTAPE 3: Variables d'environnement (GA4)

Avant de déclencher le build:

1. Aller à **Site settings** → **Environment variables**
2. Ajouter:
   ```
   VITE_BRAND_VIDEO_ID       = u36YO2u6dLM
   VITE_GA_MEASUREMENT_ID    = (laisser vide pour l'instant)
   VITE_GSC_VERIFICATION_ID  = (laisser vide)
   ```

**⚠️ Important:** Le site fonctionnera sans `VITE_GA_MEASUREMENT_ID` (il sera vide). GA4 ne chargera que quand l'ID est défini.

### ÉTAPE 4: Domain + HTTPS

1. Aller à **Site settings** → **Domain management**
2. Ajouter domaine: `tordjemanlabs.com` (sans www)
3. Ajouter alias: `www.tordjemanlabs.com`
4. HTTPS auto-activé par Let's Encrypt ✓

**DNS à configurer chez registrar:**
```
Type:  CNAME
Name:  www
Value: [votre-site].netlify.app
TTL:   3600
```

### ÉTAPE 5: Déclencher le déploiement

Deux options:

**Option A: Déploiement automatique (recommandé)**
```bash
git push origin main
# Netlify détecte le push → auto-build + déploiement
```

**Option B: Déploiement manuel (Netlify UI)**
1. Aller à **Deploys**
2. Cliquer **Deploy site**
3. Sélectionner `main` branch
4. Attendre ✓ "Deploy succeeded"

---

## ✅ APRÈS DÉPLOIEMENT (Checklist immédiate)

### Test 1: Site accessible

```bash
# Vérifier réponse HTTP 200
curl -I https://www.tordjemanlabs.com

# Résultat attendu:
# HTTP/2 200
# Server: Netlify
```

### Test 2: robots.txt + sitemap.xml

```bash
curl https://www.tordjemanlabs.com/robots.txt
curl https://www.tordjemanlabs.com/sitemap.xml
# Doit afficher contenu sans erreur
```

### Test 3: Métadonnées (inspecter page source)

Ouvrir https://www.tordjemanlabs.com → F12 → **Elements**

Chercher:
```html
✓ <title>Tordjeman Labs - Innovation Éthique & Durable</title>
✓ <link rel="canonical" href="https://www.tordjemanlabs.com/">
✓ <meta property="og:url" content="https://www.tordjemanlabs.com/">
✓ <script type="application/ld+json"> (2+ schemas)
```

### Test 4: Téléphones accessibles

Ouvrir https://www.tordjemanlabs.com/contact → Footer

Vérifier:
```
✓ +33 1 84 80 22 00 (lien tel: +33184802200)
✓ +33 7 49 80 32 43 (lien tel: +33749803243)
```

### Test 5: Responsive mobile (375px)

```
F12 → Device Mode → iPhone 12
✓ Pas de scroll horizontal
✓ Boutons visibles
✓ Formulaire utilisable
✓ Images chargent
```

### Test 6: Consentement GA4

```
1. Visiter site prod (1ère fois)
2. Banner "Accepter analytics?" doit s'afficher
3. Cliquer "Refuser" → pas de GA4 chargé
4. Recharger page → banner disparaît (localStorage)
5. Vérifier localStorage: F12 → Storage → localStorage
   tordjeman-labs-consent-shown = true
   tordjeman-labs-consent = '{"analytics": false}'
```

---

## 🔧 CONFIGURATION GA4 + SEARCH CONSOLE (Post-déploiement)

**⚠️ Ne pas avant que site soit en production !**

### ÉTAPE A: Google Analytics 4

1. Ouvrir https://analytics.google.com
2. Créer propriété:
   - Nom: "Tordjeman Labs"
   - URL: https://www.tordjemanlabs.com
   - Timezone: Paris
3. Copier **Measurement ID** (format: G-XXXXXXXXXX)
4. Ajouter à Netlify env (Settings → Environment variables):
   ```
   VITE_GA_MEASUREMENT_ID = G-XXXXXXXXXX
   ```
5. Redéployer site:
   ```bash
   # Aller à Netlify → Deploys → Trigger deploy
   # OU
   git commit --allow-empty -m "Redeploy with GA4 ID" && git push
   ```
6. Vérifier chargement: Ouvrir site → F12 → Network
   - Chercher `*.analytics.google.com`
   - Vérifier `status: 200` (GA4 chargé)
7. Accepter consentement → GA4 → Realtime → vérifier "1 user active"

### ÉTAPE B: Google Search Console

1. Ouvrir https://search.google.com/search-console
2. Ajouter propriété:
   - Type: Domain (tordjemanlabs.com — sans www)
   - Vérification DNS: ajouter TXT record chez registrar
3. Une fois vérifiée, ajouter alias:
   - www.tordjemanlabs.com (comme propriété secondaire)
4. Envoyer sitemap:
   - GSC → Sitemaps
   - URL: https://www.tordjemanlabs.com/sitemap.xml
   - Cliquer Submit
5. Vérifier indexation:
   - GSC → Coverage → voir 9 pages indexées
6. Lier à GA4:
   - GSC → Settings → Linked accounts
   - GA4 property (sélectionner celle créée ci-dessus)

---

## 🛠️ DÉPANNAGE COURANT

### ❌ Site inaccessible après déploiement

```bash
# Vérifier build logs
# Netlify → Deploys → cliquer dernier → "Build log"
# Chercher "error" ou "failed"

# Raison courante: ENV vars non définis
# Solution: Ajouter VITE_BRAND_VIDEO_ID à Netlify env
```

### ❌ Formulaire ne fonctionne pas

```
Vérifier:
1. Form name = "strategic-qualification"
2. data-netlify="true" présent
3. Netlify Forms activé (Settings → Form settings)
4. Faire un test submit → Netlify → Forms → voir "1 submission"
```

### ❌ GA4 ne charge pas

```
1. Vérifier VITE_GA_MEASUREMENT_ID défini
2. F12 → Console → pas d'erreur CORS
3. Network → chercher analytics.google.com → status 200
4. Vérifier consentement accepté (localStorage)
```

### ❌ Images cassées / CDN

```
Si images.unsplash.com ne charge pas:
1. Vérifier URL dans composants
2. Ajouter error boundary ou placeholder
3. Tester depuis mobile (parfois blocage réseau)
```

---

## ✅ LISTE FINALE PRÉ-PRODUCTION (100%)

```
Code:
  ☑ TypeScript: 0 erreurs
  ☑ ESLint: 0 warnings
  ☑ Build: réussi (1853 modules)
  ☑ Fichiers SEO: robots.txt, sitemap.xml ✓
  ☑ Métadonnées: 9 routes uniques ✓
  ☑ GA4: infrastructure ✓
  ☑ RGPD: consentement banner ✓
  ☑ Accents: 10 corrigés ✓
  ☑ Téléphones: +33 1 84 80 22 00 + +33 7 49 80 32 43 ✓
  ☑ JSON-LD: Organization + Website ✓
  ☑ Sourcemaps: générés ✓

Netlify:
  ☐ Site créé/sélectionné
  ☐ Build settings OK (npm run build → dist/)
  ☐ Env vars: VITE_BRAND_VIDEO_ID
  ☐ Domain: www.tordjemanlabs.com pointant vers Netlify
  ☐ HTTPS: auto-enabled
  ☐ Deploy: déclenché ✓

Post-deploy:
  ☐ Site accessible (HTTP 200)
  ☐ Métadonnées visibles
  ☐ Responsive OK (mobile 375px)
  ☐ Consentement fonctionne
  ☐ Formulaire testable
  ☐ GA4 setup (Measurement ID)
  ☐ GSC setup (domain verification)
  ☐ Sitemap submitted
  ☐ Indexation en cours (GSC Coverage)
```

---

## 📞 CONTACT & SUPPORT

**Domaine:** www.tordjemanlabs.com  
**Téléphones:** 
- Fixe: +33 1 84 80 22 00
- Mobile: +33 7 49 80 32 43
**Email:** contact@tordjemanlabs.com

**Netlify status:** Consultable à https://app.netlify.com/teams/[account]/sites

---

**Généré:** 2026-09-08  
**Status:** 🟢 PRÊT POUR PRODUCTION  
**Prochaine action:** Déployer sur Netlify via Git push ou Netlify UI
