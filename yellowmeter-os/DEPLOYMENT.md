# Guía de Despliegue en GitHub Pages

## 📋 Requisitos Previos

- Repositorio de GitHub: `cosu123/Crypto_Dashboard_2026`
- Archivos ya subidos en la carpeta `yellowmeter-os/`
- Permisos de administrador en el repositorio

## 🚀 Pasos para Activar GitHub Pages

### Método 1: Configuración Manual (Recomendado)

1. **Acceder a la configuración del repositorio:**
   - Ir a https://github.com/cosu123/Crypto_Dashboard_2026
   - Click en **Settings** (Configuración)

2. **Configurar GitHub Pages:**
   - En el menú lateral izquierdo, buscar **Pages** (bajo "Code and automation")
   - En la sección **Source** (Fuente):
     - Seleccionar: **Deploy from a branch**
   - En la sección **Branch**:
     - Branch: **main**
     - Folder: **/ (root)** o seleccionar **/yellowmeter-os** si está disponible
     - Click en **Save**

3. **Esperar el despliegue:**
   - GitHub Pages tardará 1-3 minutos en construir y desplegar el sitio
   - Verás un mensaje: "Your site is live at..."

4. **Acceder al sitio:**
   ```
   https://cosu123.github.io/Crypto_Dashboard_2026/yellowmeter-os/
   ```

### Método 2: GitHub Actions (Automatizado)

Si deseas automatizar el despliegue con cada push, crea el archivo `.github/workflows/deploy-yellowmeter.yml`:

```yaml
name: Deploy YellowMeter OS to GitHub Pages

on:
  push:
    branches: [ main ]
    paths:
      - 'yellowmeter-os/**'

permissions:
  contents: read
  pages: write
  id-token: write

concurrency:
  group: "pages"
  cancel-in-progress: false

jobs:
  deploy:
    environment:
      name: github-pages
      url: ${{ steps.deployment.outputs.page_url }}
    runs-on: ubuntu-latest
    steps:
      - name: Checkout
        uses: actions/checkout@v4
      
      - name: Setup Pages
        uses: actions/configure-pages@v4
      
      - name: Upload artifact
        uses: actions/upload-pages-artifact@v3
        with:
          path: './yellowmeter-os'
      
      - name: Deploy to GitHub Pages
        id: deployment
        uses: actions/deploy-pages@v4
```

## 🔧 Configuración Adicional

### Dominio Personalizado (Opcional)

Si tienes un dominio propio:

1. En **Settings → Pages**
2. En **Custom domain**, ingresa tu dominio (ej: `yellowmeter.com`)
3. Crea un archivo `CNAME` en la carpeta `yellowmeter-os/`:
   ```
   yellowmeter.com
   ```
4. Configura los DNS de tu dominio:
   - Tipo: `A`
   - Host: `@`
   - Valor: IPs de GitHub Pages:
     ```
     185.199.108.153
     185.199.109.153
     185.199.110.153
     185.199.111.153
     ```
   - O tipo `CNAME` apuntando a `cosu123.github.io`

### HTTPS (Automático)

GitHub Pages habilita HTTPS automáticamente. Si usas dominio personalizado:
- Espera 24-48 horas para que se genere el certificado SSL
- Marca la opción **Enforce HTTPS** en Settings → Pages

## ✅ Verificación del Despliegue

### 1. Verificar que el sitio está activo
```bash
curl -I https://cosu123.github.io/Crypto_Dashboard_2026/yellowmeter-os/
```

Deberías ver:
```
HTTP/2 200
content-type: text/html; charset=utf-8
```

### 2. Verificar en el navegador
Abre: https://cosu123.github.io/Crypto_Dashboard_2026/yellowmeter-os/

Deberías ver:
- ✅ Hero section con título "Monetiza Acciones, No Transacciones"
- ✅ Métricas en tiempo real actualizándose cada 3 segundos
- ✅ Gráficos de Chart.js renderizados correctamente
- ✅ Calculadora de costos funcional
- ✅ Tema oscuro/claro switcheable

### 3. Verificar funcionalidades
- [ ] Navegación suave al hacer click en el menú
- [ ] Toggle de tema oscuro/claro funciona
- [ ] Métricas se actualizan automáticamente
- [ ] Gráficos de Chart.js se renderizan
- [ ] Calculadora calcula correctamente los costos
- [ ] Responsive design funciona en móvil

## 🐛 Solución de Problemas

### Problema: "404 - File not found"
**Solución:**
- Verifica que los archivos estén en la carpeta correcta
- Asegúrate de que GitHub Pages esté configurado en la branch `main`
- Espera 2-3 minutos después de hacer push

### Problema: "Página en blanco"
**Solución:**
- Abre la consola del navegador (F12)
- Verifica errores de JavaScript
- Asegúrate de que Chart.js se cargue desde el CDN
- Verifica que las rutas de archivos sean relativas (no absolutas)

### Problema: "Estilos no se aplican"
**Solución:**
- Verifica que `styles.css` esté en la misma carpeta que `index.html`
- Limpia la caché del navegador (Ctrl+Shift+R)
- Verifica que el link en el HTML sea correcto:
  ```html
  <link rel="stylesheet" href="styles.css">
  ```

### Problema: "Gráficos no se muestran"
**Solución:**
- Verifica que Chart.js se cargue desde el CDN
- Abre la consola y busca errores de Chart.js
- Asegúrate de que los canvas tengan IDs correctos

## 📊 Monitoreo

### GitHub Pages Analytics
GitHub Pages no incluye analytics por defecto. Para monitorear:

1. **Google Analytics:**
   - Crea una propiedad en Google Analytics
   - Agrega el código de tracking antes del `</head>` en `index.html`

2. **Plausible Analytics (Alternativa):**
   ```html
   <script defer data-domain="yourdomain.com" src="https://plausible.io/js/script.js"></script>
   ```

## 🔒 Seguridad

### Mejores Prácticas Implementadas
- ✅ No hay claves API expuestas
- ✅ Código estático sin backend vulnerable
- ✅ HTTPS habilitado automáticamente
- ✅ Sin dependencias de terceros vulnerables
- ✅ Validación de inputs en calculadora

### Content Security Policy (CSP)
Para mayor seguridad, agrega en el `<head>`:
```html
<meta http-equiv="Content-Security-Policy" 
      content="default-src 'self'; 
               script-src 'self' 'unsafe-inline' https://cdn.jsdelivr.net; 
               style-src 'self' 'unsafe-inline'; 
               img-src 'self' data:;">
```

## 📝 Mantenimiento

### Actualizar el Sitio
```bash
# 1. Hacer cambios en los archivos
cd yellowmeter-os/
# Editar archivos...

# 2. Commit y push
git add .
git commit -m "Update: descripción de cambios"
git push origin main

# 3. Esperar 1-3 minutos para que GitHub Pages actualice
```

### Rollback a Versión Anterior
```bash
# Ver historial
git log --oneline

# Revertir a un commit específico
git revert <commit-hash>
git push origin main
```

## 🎯 Próximos Pasos

1. **Configurar dominio personalizado** (opcional)
2. **Agregar analytics** para monitorear tráfico
3. **Optimizar SEO:**
   - Agregar meta tags de Open Graph
   - Crear sitemap.xml
   - Agregar robots.txt
4. **Implementar PWA** (Progressive Web App)
5. **Agregar formulario de contacto** (usando Formspree o similar)

## 📞 Soporte

Si tienes problemas con el despliegue:
1. Revisa la documentación oficial: https://docs.github.com/en/pages
2. Verifica el estado de GitHub: https://www.githubstatus.com/
3. Consulta la sección de Issues del repositorio

---

**Última actualización:** Febrero 2026  
**Repositorio:** https://github.com/cosu123/Crypto_Dashboard_2026  
**Sitio en vivo:** https://cosu123.github.io/Crypto_Dashboard_2026/yellowmeter-os/
