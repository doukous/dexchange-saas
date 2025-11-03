# Repo du Test Frontend Dexchange

## Installation & lancement

Le projet utilise **pnpm** comme gestionnaire de package

Installer les dépendances :
```bash
pnpm install
```

Lancer en mode développement :
```bash
pnpm dev
```

Préparer une version de production :
```bash
pnpm run build
pnpm run preview
```

Commandes utiles (selon scripts définis) :
```bash
pnpm run lint
pnpm run test
pnpm run format
```

## Routes des pages

Je n'ai malheuresement pas pu mettre en place les routes pour les pages ni la redirection automatique, du coup à l'ouverture on tombe sur la page 404 de Next JS
Voici les routes existantes :

- Page de dashboard : "/dashboard"
- Page des tables : "/tables"
- Page de connexion : "/auth/login"
- Page d'inscription: "/auth/register"

## Librairies utilisées
- Next Js
- React Icons
- Shadcn UI
- Tailwind CSS

## Ce que j'aurais fait avec plus de temps

- Mieux gérer le responsive
- Finir le design notamment l'ajout des icones et photos
- Mettre en place un middleware pour bloquer l'accès à l'authentification
- Simuler une authentification simple (inscription, stockage des credentials dans le localstorage et connexion)
- Implémenter des animations sur hover avec Framer Motion
- Gérer le routing du site
- Implémenter une page 404 personnalisé avec lien de redirection vers la page de dashboard
- Développer des composants de fallback en cas d'erreur
- Ajouter des tests
- Mieux penser la structure du JSON notamment le format des dates par rapport au format des dates des bases de données