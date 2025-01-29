# 🚀 **Golden Stats - Full Stack Guide**

**Stack utilisée** : AdonisJS (Backend) + tRPC + Drizzle ORM + PostgreSQL +
Next.js (Web) + Expo (Mobile)

---

## 📌 **1. Configuration du projet**

### 🏗️ **Technologies utilisées**

- **Backend** : [AdonisJS](https://adonisjs.com/) + [tRPC](https://trpc.io/) +
  [Drizzle ORM](https://orm.drizzle.team/) +
  [PostgreSQL](https://www.postgresql.org/)
- **Frontend Web** : [Next.js](https://nextjs.org/) (React) + tRPC Client
- **Mobile (React Native)** : [Expo](https://expo.dev/) + tRPC Client

---

## 📌 **2. Installation et Configuration**

### 🖥️ **Backend (AdonisJS + tRPC + Drizzle + PostgreSQL)**

#### **🔧 Étape 1 : Installation**

Cloner le projet et entrer dans le dossier backend :

```sh
git clone https://github.com/votre-repo/golden-stats.git
cd golden-stats/backend
pnpm install
```

#### **🛠️ Étape 2 : Configuration des variables d’environnement**

Crée un fichier `.env` et ajoute les informations de la base de données :

```env
PORT=3333
HOST=127.0.0.1
NODE_ENV=development

DATABASE_URL=postgresql://user:password@localhost:5432/goldenstats
```

🔹 **Remplace** `user`, `password` et `goldenstats` avec tes informations
PostgreSQL.

#### **📦 Étape 3 : Initialiser la base de données avec Drizzle**

Exécute les migrations :

```sh
pnpm drizzle-kit generate
pnpm drizzle-kit push
```

💡 **Drizzle ORM** va créer les tables nécessaires en fonction des modèles
définis dans `drizzle/schema.ts`.

#### **🚀 Étape 4 : Démarrer le backend**

```sh
pnpm dev
```

L’API sera accessible sur : `http://127.0.0.1:3333`

📌 **Tester si tRPC fonctionne :**

```sh
curl http://127.0.0.1:3333/trpc/getUsers
```

Tu devrais recevoir une liste d’utilisateurs en JSON.

---

### 🌐 **Frontend Web (Next.js + tRPC Client)**

#### **🔧 Étape 1 : Installation**

Cloner et entrer dans le dossier frontend :

```sh
cd ../frontend
pnpm install
```

#### **🔌 Étape 2 : Connecter tRPC au Backend**

Dans **`utils/trpc.ts`**, configure le client :

```ts
import { createTRPCClient, httpBatchLink } from "@trpc/client";
import type { AppRouter } from "http://127.0.0.1:3333/trpc";

export const trpc = createTRPCClient<AppRouter>({
  links: [
    httpBatchLink({
      url: "http://127.0.0.1:3333/trpc",
    }),
  ],
});
```

#### **🚀 Étape 3 : Tester une requête dans le frontend**

Dans **`pages/index.tsx`** :

```tsx
import { useEffect, useState } from "react";
import { trpc } from "../utils/trpc";

export default function Home() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    trpc.getUsers.query().then(setUsers);
  }, []);

  return (
    <div>
      <h1>Liste des utilisateurs</h1>
      <ul>
        {users.map((user) => (
          <li key={user.id}>
            {user.name} - {user.email}
          </li>
        ))}
      </ul>
    </div>
  );
}
```

#### **🎬 Étape 4 : Démarrer le Frontend**

```sh
pnpm dev
```

Le frontend est accessible sur `http://localhost:3000` 🚀

---

### 📱 **Frontend Mobile (Expo + tRPC Client)**

#### **🔧 Étape 1 : Installation**

Cloner et entrer dans le dossier mobile :

```sh
cd ../mobile
pnpm install
```

#### **🔌 Étape 2 : Connecter tRPC au Backend**

Crée un fichier **`utils/trpc.ts`** :

```ts
import { createTRPCClient, httpBatchLink } from "@trpc/client";
import type { AppRouter } from "http://127.0.0.1:3333/trpc";

export const trpc = createTRPCClient<AppRouter>({
  links: [
    httpBatchLink({
      url: "http://127.0.0.1:3333/trpc",
    }),
  ],
});
```

#### **🚀 Étape 3 : Tester une requête dans l’app**

Dans **`App.tsx`** :

```tsx
import { useEffect, useState } from "react";
import { View, Text } from "react-native";
import { trpc } from "./utils/trpc";

export default function App() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    trpc.getUsers.query().then(setUsers);
  }, []);

  return (
    <View>
      <Text>Liste des utilisateurs :</Text>
      {users.map((user) => (
        <Text key={user.id}>
          {user.name} - {user.email}
        </Text>
      ))}
    </View>
  );
}
```

#### **🎬 Étape 4 : Démarrer l’application mobile**

```sh
pnpm start
```

📱 **Scanner le QR Code** dans l’app **Expo Go** pour voir l’application sur ton
téléphone.

---

## 📌 **3. Déploiement 🚀**

### **🎯 Déployer le Backend sur Railway, Render ou Vercel**

1. **Créer une base de données PostgreSQL sur Railway ou Supabase**.
2. **Déployer le backend** sur Railway avec :
   ```sh
   pnpm build
   railway up
   ```
3. **Modifier l’URL de l’API** dans le frontend et le mobile pour utiliser la
   nouvelle URL.

### **🎯 Déployer le Frontend sur Vercel**

1. Installer **Vercel CLI** :
   ```sh
   npm install -g vercel
   ```
2. Se connecter et déployer :
   ```sh
   vercel
   ```

### **🎯 Déployer le Mobile sur Expo**

1. Installer **EAS CLI** :
   ```sh
   npm install -g eas-cli
   ```
2. Construire l’application mobile :
   ```sh
   eas build --platform android
   ```
   ou
   ```sh
   eas build --platform ios
   ```

---

## 📌 **4. Résumé des Commandes**

| **Commande**                   | **Description**                      |
| ------------------------------ | ------------------------------------ |
| `pnpm install`                 | Installer les dépendances            |
| `pnpm dev`                     | Démarrer le serveur backend          |
| `pnpm drizzle-kit generate`    | Générer les migrations Drizzle       |
| `pnpm drizzle-kit push`        | Appliquer les migrations Drizzle     |
| `pnpm build`                   | Compiler le projet                   |
| `railway up`                   | Déployer le backend sur Railway      |
| `vercel`                       | Déployer le frontend sur Vercel      |
| `eas build --platform android` | Construire l’app mobile pour Android |
| `eas build --platform ios`     | Construire l’app mobile pour iOS     |

---

## 🚀 **Golden Stats est maintenant prêt !** 🎉

Si tu as des questions ou besoin d'améliorations, n’hésite pas à contribuer au
projet. 🔥💡
