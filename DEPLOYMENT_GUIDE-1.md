# 🚀 Guía de Deployment en Netlify

## 📋 Pre-requisitos

1. Cuenta en GitHub (gratis)
2. Cuenta en Netlify (gratis)
3. Node.js instalado (opcional, solo para desarrollo local)

---

## 🗂️ Paso 1: Preparar los Archivos

Organiza los archivos en esta estructura:

```
sensiaura-netlify/
├── netlify/
│   └── functions/
│       ├── get-credentials.js
│       └── update-credentials.js
├── index.html
├── netlify.toml
├── package.json
└── README.md
```

---

## 🐙 Paso 2: Subir a GitHub

### Opción A: Usando GitHub Desktop
1. Descarga GitHub Desktop
2. Create New Repository
3. Arrastra la carpeta `sensiaura-netlify`
4. Commit y Push

### Opción B: Usando Git CLI
```bash
cd sensiaura-netlify
git init
git add .
git commit -m "Initial commit"
git branch -M main
git remote add origin https://github.com/TU-USUARIO/sensiaura-netlify.git
git push -u origin main
```

---

## 🌐 Paso 3: Deploy en Netlify

### Método 1: Conectar con GitHub (Recomendado)

1. Ve a https://app.netlify.com/
2. Click en "Add new site" → "Import an existing project"
3. Conecta con GitHub
4. Selecciona tu repositorio `sensiaura-netlify`
5. Configuración:
   - **Build command:** (dejar vacío)
   - **Publish directory:** `.`
   - **Functions directory:** `netlify/functions`
6. Click "Deploy site"

### Método 2: Drag & Drop (Más simple)

1. Ve a https://app.netlify.com/drop
2. Arrastra la carpeta completa
3. ¡Listo! (Pero no tendrás auto-deploy)

---

## ⚙️ Paso 4: Configurar Variables de Entorno

1. En Netlify Dashboard, ve a tu sitio
2. Click en "Site configuration" → "Environment variables"
3. Agregar estas variables:

```
ADMIN_MASTER_KEY = ADMIN.SENSIAURA.2026
```

4. Click "Save"

---

## 🔄 Paso 5: Re-deploy

Después de agregar las variables de entorno:

1. Ve a "Deploys"
2. Click en "Trigger deploy" → "Deploy site"
3. Espera 1-2 minutos

---

## ✅ Paso 6: Verificar

1. Abre tu sitio: `https://tu-sitio.netlify.app`
2. Debería aparecer el login de SensiAura
3. Prueba el login con las credenciales por defecto:
   - Key: `SENSIAURA.2026-HS-3DSS`
   - Password: `VIP1SS.SENSIAURA`

---

## 🔧 Desarrollo Local (Opcional)

Si quieres probar localmente antes de hacer deploy:

```bash
# Instalar dependencias
npm install

# Instalar Netlify CLI
npm install -g netlify-cli

# Iniciar servidor local
netlify dev
```

Abre: http://localhost:8888

---

## 📱 Paso 7: Usar el Panel de Admin

1. En el login, busca el pequeño ⚙️ en el footer
2. Click en él
3. Ingresa la Master Key: `ADMIN.SENSIAURA.2026`
4. Cambia las credenciales
5. ¡Los cambios se aplican instantáneamente para todos!

---

## 🎯 URLs Importantes

- **Tu sitio:** `https://tu-nombre-sitio.netlify.app`
- **API Get:** `https://tu-nombre-sitio.netlify.app/.netlify/functions/get-credentials`
- **API Update:** `https://tu-nombre-sitio.netlify.app/.netlify/functions/update-credentials`
- **Dashboard:** `https://app.netlify.com/`

---

## 🔒 Seguridad

✅ HTTPS automático (SSL gratis)
✅ Master Key solo la conoces tú
✅ Credenciales sincronizadas en tiempo real
✅ Backend serverless (sin servidor que hackear)
✅ CORS configurado correctamente

---

## 💡 Tips

- Puedes cambiar el nombre del sitio en: Site settings → Site details → Change site name
- El plan gratis incluye:
  - 125K invocaciones de Functions/mes
  - 100GB de bandwidth
  - Deploy automático con cada push a GitHub
  - 10GB de Netlify Blobs storage

---

## 🆘 Solución de Problemas

**Error: "Function not found"**
- Verifica que la carpeta sea `netlify/functions` (no `netlify-functions`)
- Re-deploy el sitio

**Error: "ADMIN_MASTER_KEY not defined"**
- Ve a Environment variables
- Agrega la variable
- Re-deploy

**Credenciales no se actualizan**
- Abre la consola del navegador (F12)
- Busca errores en red
- Verifica que las Functions estén activas

---

## 📞 Soporte

Si tienes problemas:
1. Revisa los logs en: Netlify Dashboard → Functions
2. Abre la consola del navegador (F12)
3. Verifica que las URLs de las Functions sean correctas

---

¡Listo! Tu sistema está en la nube 🌐🚀
