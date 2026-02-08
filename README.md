# SensiAura - Netlify Deployment Guide

## 📁 Estructura de Archivos

```
sensiaura-netlify/
├── netlify/
│   └── functions/
│       ├── get-credentials.js
│       └── update-credentials.js
├── index.html
├── netlify.toml
└── README.md
```

## 🚀 Pasos para Deployment

### 1. Crear cuenta en Netlify
- Ve a https://www.netlify.com/
- Crea una cuenta gratis

### 2. Instalar Netlify CLI (Opcional)
```bash
npm install -g netlify-cli
netlify login
```

### 3. Configurar el proyecto
1. Sube todos los archivos a un repositorio de GitHub
2. Conecta Netlify con tu repositorio de GitHub
3. O arrastra la carpeta directamente a Netlify

### 4. Variables de Entorno
En Netlify Dashboard → Site settings → Environment variables:

```
ADMIN_MASTER_KEY = ADMIN.SENSIAURA.2026
ENCRYPTION_KEY = tu-clave-secreta-aqui-32-caracteres
```

### 5. Deploy
- Netlify detectará automáticamente las Functions
- El sitio se desplegará automáticamente

## 🔑 Endpoints de API

**GET Credentials:**
```
https://tu-sitio.netlify.app/.netlify/functions/get-credentials
```

**POST Update Credentials:**
```
https://tu-sitio.netlify.app/.netlify/functions/update-credentials
```

## ✨ Características

✅ Credenciales sincronizadas en tiempo real
✅ Backend serverless con Netlify Functions
✅ Base de datos JSON en Netlify Blobs
✅ Encriptación de credenciales
✅ Panel de admin con autenticación
✅ Actualizaciones instantáneas para todos los usuarios

## 📝 Notas Importantes

- Las credenciales se guardan en Netlify Blobs (gratis hasta 10GB)
- El backend es serverless (sin servidor que mantener)
- Netlify tiene 125K invocaciones gratis al mes
- SSL/HTTPS automático incluido
