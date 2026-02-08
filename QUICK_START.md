# 🎯 SensiAura - Netlify Edition

## 🚀 Deploy Rápido (3 minutos)

### Opción 1: Drag & Drop (Más Fácil)
1. Descarga la carpeta `netlify-deploy`
2. Ve a https://app.netlify.com/drop
3. Arrastra la carpeta completa
4. ¡Listo! Tu sitio está en línea

### Opción 2: Con GitHub (Recomendado)
1. Sube la carpeta a GitHub
2. Conecta Netlify con tu repo
3. Deploy automático

---

## ⚙️ Configuración Importante

Después del primer deploy:

1. Ve a tu sitio en Netlify
2. **Site configuration** → **Environment variables**
3. Agrega:
   ```
   ADMIN_MASTER_KEY = ADMIN.SENSIAURA.2026
   ```
4. **Trigger deploy** → **Deploy site**

---

## 🔑 Credenciales

### Por Defecto:
- **Key:** `SENSIAURA.2026-HS-3DSS`
- **Password:** `VIP1SS.SENSIAURA`

### Panel de Admin:
- **Master Key:** `ADMIN.SENSIAURA.2026`
- Click en ⚙️ en el footer del login

---

## ✨ Características

✅ Credenciales sincronizadas en la nube
✅ Cambios instantáneos para todos los usuarios
✅ Panel de admin secreto
✅ Backend serverless (Netlify Functions)
✅ HTTPS automático incluido
✅ 100% gratis (125K requests/mes)

---

## 📁 Archivos Incluidos

```
netlify-deploy/
├── index.html              # Página principal
├── netlify.toml            # Configuración de Netlify
├── package.json            # Dependencias
├── DEPLOYMENT_GUIDE.md     # Guía detallada
├── README.md               # Este archivo
└── netlify/
    └── functions/
        ├── get-credentials.js     # API para obtener credenciales
        └── update-credentials.js  # API para actualizar credenciales
```

---

## 🎮 Cómo Usar

### Usuarios Normales:
1. Entran a tu URL de Netlify
2. Ingresan su key y password
3. Acceden al panel

### Tú (Admin):
1. Click en ⚙️ (botón secreto en el footer)
2. Ingresas: `ADMIN.SENSIAURA.2026`
3. Cambias las credenciales
4. **Todos los usuarios** ahora usan las nuevas credenciales instantáneamente

---

## 🔧 URLs de tu Sitio

Después de deploy en Netlify:
- **Sitio:** `https://tu-nombre.netlify.app`
- **API Get:** `https://tu-nombre.netlify.app/.netlify/functions/get-credentials`
- **API Update:** `https://tu-nombre.netlify.app/.netlify/functions/update-credentials`

---

## 💡 Tips

- Puedes cambiar el nombre del sitio en Netlify Dashboard
- Las credenciales se guardan en Netlify Blobs (10GB gratis)
- Los cambios se sincronizan cada 30 segundos
- El plan gratis es más que suficiente

---

## 📞 Soporte

**Problemas comunes:**

1. **Functions no funcionan**
   - Verifica Environment Variables
   - Re-deploy el sitio

2. **Credenciales no cambian**
   - Abre consola del navegador (F12)
   - Verifica errores de red

3. **Admin panel no abre**
   - Busca el ⚙️ en el footer
   - Es pequeño y casi invisible (diseño intencional)

---

Lee **DEPLOYMENT_GUIDE.md** para instrucciones detalladas.

¡Disfruta tu sistema en la nube! 🌐✨
