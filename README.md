# NextAuth App

Proyecto del Laboratorio 13: una app en Next.js donde puedes iniciar sesión con Google, con GitHub o con tu propio email y contraseña. El dashboard y el perfil solo se pueden ver si has iniciado sesión.

## Qué hace

- Inicio de sesión con **Google** y **GitHub** (OAuth).
- **Registro** con nombre, email y contraseña, e inicio de sesión con esas credenciales.
- Las contraseñas se guardan cifradas con **bcrypt**.
- Si alguien falla la contraseña **5 veces**, la cuenta se bloquea **15 minutos**.
- Sesiones con **JWT**. El dashboard muestra con qué proveedor entraste.
- `/dashboard` y `/profile` están protegidas por el middleware.

## Tecnologías

Next.js (App Router) · TypeScript · NextAuth.js v4 · Prisma · PostgreSQL (Supabase) · bcryptjs · Tailwind CSS · react-icons

## Cómo correrlo

1. Instala las dependencias (esto también genera el cliente de Prisma):

   ```bash
   npm install
   ```

2. Copia `.env.example` a `.env.local` y completa los valores (ver abajo).

3. Crea la tabla de usuarios en la base de datos. Prisma no lee `.env.local` por defecto, así que se le pasa con Node:

   ```bash
   node --env-file=.env.local node_modules/prisma/build/index.js db push
   ```

4. Levanta el servidor de desarrollo:

   ```bash
   npm run dev
   ```

   La app queda en http://localhost:3001.

## Variables de entorno

| Variable | Para qué sirve |
| --- | --- |
| `GOOGLE_CLIENT_ID` / `GOOGLE_CLIENT_SECRET` | Credenciales OAuth de Google Cloud Console |
| `GITHUB_ID` / `GITHUB_SECRET` | Credenciales de una OAuth App de GitHub |
| `NEXTAUTH_URL` | URL de la app (`http://localhost:3001`) |
| `NEXTAUTH_SECRET` | Clave para firmar los JWT. Se puede generar con `node -e "console.log(require('crypto').randomBytes(32).toString('base64'))"` |
| `DATABASE_URL` | Conexión a PostgreSQL (pooler de Supabase) |
| `DIRECT_URL` | Conexión directa, usada por Prisma para crear las tablas |

URLs de callback para configurar en cada proveedor:

- Google: `http://localhost:3001/api/auth/callback/google`
- GitHub: `http://localhost:3001/api/auth/callback/github`
