# Tordjeman Labs — Site public (clôture définitive)

Ce dépôt contient la version figée du site institutionnel Tordjeman Labs. Il est régi par le **Cahier des Charges — Site Tordjeman Labs (Version 2.0)** et ne doit plus évoluer hors décision stratégique formelle.

## Statut du projet

- Vitrine institutionnelle, lecture seule, périmètre limité aux pages listées dans le CDC v2.0.
- Aucune fonctionnalité applicative, aucun back-office, aucun chatbot, aucun paiement.
- Le site reflète uniquement le rôle de hub stratégique ; l’atelier privé reste hors périmètre.

## Gouvernance éditoriale

- La production et la validation des contenus sont pilotées exclusivement via **TAI-Systeme (Notion)**.
- Le site consomme uniquement les éléments marqués « Statut = Publié » et « Niveau = Public ».
- Le site ne décide jamais : il affiche ce qui est autorisé par le CDC v2.0.
## État SEO, Analytics & RGPD (septembre 2026)

### ✅ Complété
- **SEO technique** : robots.txt, sitemap.xml, canoniques HTTPS, métadonnées uniques par page
- **OpenGraph & Twitter Card** : balises structurées pour partage réseaux sociaux
- **JSON-LD** : schémas Organization et Website pour rich snippets
- **Consentement RGPD** : bannière éthique, pas de GA4 avant consentement utilisateur
- **Infrastructure GA4** : hooks de consentement, événements, tracking de formulaire
- **Accessibilité** : amélioration carousel (aria-label, aria-current)
- **Accents** : correction des caractères accentués manquants dans formulaire
- **Téléphone** : cohérence affichage (+33 1 84 80 22 00) vs lien tel:

### ⚠️ Actions manuelles post-déploiement

#### 1. Google Analytics 4
Activer GA4 après déploiement en production :
- Créer ou accéder à propriété GA4 pour domaine tordjemanlabs.com
- Copier l'ID de mesure (format: G-XXXXXXXXXX)
- Ajouter dans Netlify Variables d'environnement: `VITE_GA_MEASUREMENT_ID=G-XXXXXXXXXX`
- Redéployer le site
- Vérifier: Console → Network → *.analytics.google.com

*Note: Sans identifiant, GA4 reste inactif (sécurisé par défaut). Bannière de consentement s'affiche au premier chargement.*

#### 2. Google Search Console
- Créer propriété de domaine pour tordjemanlabs.com (pas www)
- Effectuer vérification DNS (recommandé pour domaine)
- Une fois vérifiée, ajouter propriété secondaire pour www.tordjemanlabs.com
- Envoyer sitemap: https://www.tordjemanlabs.com/sitemap.xml
- Demander indexation prioritaire des 9 pages publiques
- Lier Search Console à GA4 (propriété Data Streams)
- Vérifier: Search Console → Coverage → pas d'erreurs d'indexation

#### 3. Monitoring post-déploiement
- `robots.txt`: curl https://www.tordjemanlabs.com/robots.txt
- `sitemap.xml`: curl https://www.tordjemanlabs.com/sitemap.xml
- Métadonnées: inspecter une page (DevTools → Head)
- Canonique: `<link rel="canonical" href="https://www.tordjemanlabs.com..." />`
- GA4: Consentement accepté → Google Analytics charge
- OG tags: https://www.facebook.com/sharer/debugger?u=https://www.tordjemanlabs.com/
- Liens: Page Contact → tel: et mailto: fonctionnels

## Environnement & Stack

**Framework** : React 18 + TypeScript + Vite 5  
**Router** : React Router v6 (SPA)  
**Styling** : Tailwind CSS 3.4 + PostCSS  
**Formulaire** : Netlify Forms (strategic-qualification)  
**Analytics** : Google Analytics 4 (consentement obligatoire)  
**Hébergement** : Netlify (auto-redirection www)  
**Domaine référence** : https://www.tordjemanlabs.com

## Fichiers SEO/Analytics créés
- `public/robots.txt` — Directives crawling
- `public/sitemap.xml` — URLs des 9 pages indexables
- `src/hooks/usePageMetadata.ts` — Métadonnées dynamiques par page
- `src/lib/ga.ts` — GA4 + consentement RGPD
- `src/lib/schema.ts` — JSON-LD structuré
- `src/components/ConsentBanner.tsx` — Bannière choix utilisateur

## Variables d'environnement (.env.local)
```env
VITE_BRAND_VIDEO_ID=u36YO2u6dLM
VITE_GA_MEASUREMENT_ID=          # À remplir en prod
VITE_GSC_VERIFICATION_ID=        # Optionnel
```

## Points d'attention
- ⚠️ **LinkedIn** : URL générique → à remplacer par profil officiel Tordjeman Labs
- ⚠️ **PDFs** : URLs externes (Europa, UNEP, OECD) → valider accès régulièrement
- ⚠️ **Accents** : Tous corrigés dans formulaire
- ⚠️ **Téléphone** : Cohérence validée (+33 1 84 80 22 00 = tel:+33184802200, +33 7 49 80 32 43 = tel:+33749803243)
## Commandes (pour archivage)

```bash
npm install
npm run dev
npm run build
```

Ces commandes servent uniquement à reconstruire la vitrine statique autorisée par le CDC v2.0.

## Règle de gel

- Toute demande future hors CDC v2.0 doit être refusée.
- Seule une décision stratégique explicite, consignée dans Notion, peut ouvrir un nouveau chantier.
- Sans nouveau mandat, ce dépôt reste inchangé ; il constitue un actif institutionnel stable.

## Référence

- Document maître : **Cahier des Charges — Site Tordjeman Labs (Version 2.0)** (`CDC_v2.0.md`).
- Toute documentation antérieure est caduque.
