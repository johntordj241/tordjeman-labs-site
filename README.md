# Tordjeman Labs — Site public

Ce dépôt contient **la seule vitrine institutionnelle** de Tordjeman Labs. Il présente notre positionnement, nos axes d’expertise et nos publications. Toute fonctionnalité applicative (IDE, tableaux de bord, KPI, marketplace, outils collaboratifs, etc.) reste confinée dans l’atelier interne privé et n’est jamais exposée ici.

## Structure

- `src/components` : fondations UI (navigation, hero, sections éditoriales).
- `src/pages` : pages autorisées (Accueil, À propos, Axes d’expertise, Méthodologie, Recherche & prospective, Cadres éthiques, Publications PDF, Modalités de collaboration, Contact).
- Aucune logique d’authentification ou d’accès applicatif n’est chargée côté client.

## Environnements

- `.env` n’est **pas versionné** et ne contient aucun secret public. Utiliser `.env.example` uniquement comme mémo des variables réservées à l’atelier interne.
- Les clés Supabase, les endpoints sensibles ou les scripts d’atelier sont stockés dans des dépôts privés distincts et ne transitent jamais par ce code.

## Commandes

```bash
npm install
npm run dev      # développement local
npm run build    # bundle statique destiné à l’hébergement public
```

## Principes de sécurité

1. **Vitrine uniquement** : ce bundle React/Vite ne contient ni IDE, ni console, ni accès administrateur.
2. **Routes limitées** : seul le contenu éditorial listé ci-dessus est exposé. Toute requête hors périmètre est redirigée vers l’accueil.
3. **Pas de promesse fonctionnelle factice** : les formulaires renvoient vers des canaux de contact officiels, jamais vers des API simulées.
4. **Atelier interne isolé** : les environnements collaboratifs, les scripts d’analyse et les modules temps réel opèrent dans un autre espace sous authentification forte.

## Gel stratégique

Ce site est **figé par décision de gouvernance**. Tant que la direction n’a pas levé ce freeze, aucune fonctionnalité supplémentaire (authentification, dashboards, paiements, IDE, etc.) ne doit être ajoutée au périmètre public. Toute évolution applicative doit être développée et auditée dans l’atelier interne privé.

## Contribuer

Merci de veiller à ce que toute évolution respecte ces règles. Les fonctionnalités interactives destinées aux partenaires doivent être développées dans l’atelier interne, jamais dans ce dépôt public.
