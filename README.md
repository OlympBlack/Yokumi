

```markdown
# 🌿 NaturaShea

**NaturaShea** est une boutique en ligne spécialisée dans la vente de **beurre de karité naturel**.  
L'application est développée avec une architecture découplée :  
- Frontend développé en **React** (`client/`)  
- Backend développé en **Laravel** (`server/`)  
- Base de données : **MySQL**



## ✅ Prérequis

Assurez-vous d’avoir les outils suivants installés sur votre machine :

- [Git](https://git-scm.com/)
- [Node.js et npm](https://nodejs.org/) (v16+ recommandé)
- [PHP](https://www.php.net/) (v8.1+ recommandé)
- [Composer](https://getcomposer.org/)
- [MySQL](https://www.mysql.com/)
- [Laravel CLI](https://laravel.com/docs/installation)
- Un éditeur de code (ex : VS Code)


## 📁 Structure du projet

NaturaShea/
│
├── client/         # Frontend - React
├── server/         # Backend - Laravel
├── README.md       # Documentation du projet



## 🚀 Installation et démarrage

### 1️⃣ Cloner le projet

```bash
git clone https://github.com/ton-utilisateur/NaturaShea.git
cd NaturaShea


## 🔵 Frontend (React)

### 📂 Accéder au dossier `client`

```bash
cd client


### 📦 Installer les dépendances

```bash
npm install


### ▶️ Démarrer le serveur de développement

```bash
npm run dev


L'application sera accessible à :
[http://localhost:5173](http://localhost:5173)

### 🌐 Configuration de l'API

Créer un fichier `.env` à la racine du dossier `client/` si nécessaire :

```
VITE_API_URL=http://localhost:8000/api
```



## 🔴 Backend (Laravel)

### 📂 Accéder au dossier `server`

```bash
cd server
```

### 📦 Installer les dépendances PHP

```bash
composer install
```

### ⚙️ Configuration de l’environnement

1. Copier le fichier `.env.example` en `.env` :

```bash
cp .env.example .env
```

2. Générer la clé de l’application :

```bash
php artisan key:generate
```

3. Configurer la base de données dans `.env` :

```
DB_CONNECTION=mysql
DB_HOST=127.0.0.1
DB_PORT=3306
DB_DATABASE=naturashea
DB_USERNAME=root
DB_PASSWORD=           # à adapter selon votre configuration MySQL
```

### 🗃️ Exécuter les migrations

```bash
php artisan migrate
```

### ▶️ Lancer le serveur Laravel

```bash
php artisan serve
```

L’API sera disponible à :
[http://localhost:8000](http://localhost:8000)

Les routes API sont accessibles via :
`http://localhost:8000/api/...`



## 💡 Conseils pour les développeurs

* Lancez **d'abord le backend** pour que le frontend puisse appeler les routes API.
* Vérifiez que les ports 8000 (Laravel) et 5173 (Vite/React) sont disponibles.
* Utilisez des outils comme **Postman** ou **Insomnia** pour tester les endpoints API.
* En cas de problèmes CORS, vérifiez bien les fichiers de config Laravel (`app/Http/Middleware/HandleCors.php` ou `config/cors.php`).



## 🤝 Contribuer

1. Forkez le repo
2. Créez une branche : `git checkout -b feature/ma-fonctionnalite`
3. Commitez vos changements : `git commit -m "Ajout d'une nouvelle fonctionnalité"`
4. Pushez la branche : `git push origin feature/ma-fonctionnalite`
5. Ouvrez une Pull Request



## 📄 Licence

Projet open-source sous licence **MIT**.

```

---

Si tu veux, je peux aussi t’ajouter un exemple de `.env` pour Laravel et React ou une collection Postman pour tester l’API. Tu me dis !
```
