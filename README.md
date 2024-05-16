# Info sur le projet

## Version de Node

`v20.12.2`

## Version de Strapi

`V4`

## Version de npm

`10.5.0`

# Data base

BDD : `SQL Lite` \
Chemin de BDD : `./tmp/data.db`

# Installation rapide grace a un script

utiliser `install.sh`
Ps: ceci ne fonctionne pas si vous etes sur WSL

# Installation du projet manuelle

## Installation des dépendances

`npm install`

## Lancer l'application strapi

```
npm run develop
# ou
yarn develop
```

## Connexion au panel administrateur

```
http://localhost:1337/admin
Email : strapi@gmail.com
mdp : Strapi321
```

# Test API

## Ajouter le Token Bearer dans votre application qui permet de tester des API (Yaak , Postman ...)

```
8048c6a985f524cace38071120cc22ae3c50048818cc35626e39dac9e681bf5e2158097d638e6bdc671bd3be523f38e19b4be5b4b1b068133aee6d6d3802a9628dab867377886c654a218062d93b3f3d40cabd0b16578d3bb0347fc034999aa000768ad76fe190f0fc11aeeaa92a421529be63e04c3de10540c3e8eba1d42431
```

## Quelque lien pour tester l'Api

### Liste de tous les produits

`http://localhost:1337/api/products`

### Liste de tous les produits avec les Relations

`http://localhost:1337/api/products?populate=*`

### Liste de tous les produits avec les Relations + un filtre

Exemple produit avec id = 1 \
`http://localhost:1337/api/products?populate=*&filters[id][$eq]=1`

### Liste de tous les catégories avec le mode internationalisation pour les pays

Catégorie avec la description en anglais \
`http://localhost:1337/api/categories?locale=en` \
Catégorie avec la description en français \
`http://localhost:1337/api/categories?locale=fr`
