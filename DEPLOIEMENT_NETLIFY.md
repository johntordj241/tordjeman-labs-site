# Guide Deploiement Netlify

Date: 2026-09-09
Perimetre: guide de reference. Aucun push ni deploiement n'a ete effectue pendant la cloture locale.

## Pre-requis Locaux

- branche courante a verifier avant publication: main
- commande build: npm run build
- dossier publie: dist
- validation locale deja obtenue: lint 0, tsc 0, build 0

## Verification Netlify Avant Toute Publication

Dans l'interface Netlify du site relie a ce depot:

1. Ouvrir Site configuration puis Build and deploy.
2. Verifier la production branch actuellement configuree.
3. Verifier si Deploy Previews sont actives.
4. Verifier les variables d'environnement sans les modifier pendant la cloture locale.

Variables attendues:

- VITE_BRAND_VIDEO_ID
- VITE_GA_MEASUREMENT_ID
- VITE_GSC_VERIFICATION_ID

## Procedure Securisee Pour Une Previsualisation Sans Toucher La Production

1. Partir d'un depot local propre et committe.
2. Creer une branche de preview locale:
   git checkout -b preview/netlify-seo-validation
3. Pousser uniquement cette branche apres validation humaine:
   git push -u origin preview/netlify-seo-validation
4. Selon la configuration Netlify:
   - soit un Branch Deploy est genere pour cette branche
   - soit une Pull Request vers main declenche un Deploy Preview

## Points A Verifier Sur La Preview Netlify

- navigation sur les 9 routes publiques et la 404
- absence de debordement horizontal mobile et desktop
- title, description, canonical et robots sur la 404
- banniere de consentement et comportement analytics apres consentement
- soumission reelle du formulaire Netlify

## Ce Guide N'autorise Pas

- aucun push direct sur main sans accord
- aucune modification de configuration Netlify, GA4 ou Search Console pendant la cloture locale
- aucun deploiement de production sans verification prealable
