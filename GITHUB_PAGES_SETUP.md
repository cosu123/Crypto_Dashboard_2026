# Guía de Activación de GitHub Pages

## Pasos para Activar GitHub Pages

GitHub Pages debe ser activado manualmente desde la interfaz web de GitHub. Sigue estos pasos:

### 1. Acceder a la Configuración del Repositorio

1. Ve a tu repositorio en GitHub: https://github.com/cosu123/Crypto_Dashboard_2026
2. Haz clic en la pestaña **Settings** (Configuración)

### 2. Navegar a Pages

1. En el menú lateral izquierdo, busca la sección **Code and automation**
2. Haz clic en **Pages**

### 3. Configurar la Fuente

1. En la sección **Build and deployment**:
   - **Source**: Selecciona **Deploy from a branch**
   - **Branch**: Selecciona **main**
   - **Folder**: Selecciona **/ (root)**

2. Haz clic en **Save** (Guardar)

### 4. Esperar el Despliegue

1. GitHub comenzará a construir y desplegar tu sitio
2. Este proceso toma entre 1-3 minutos
3. Verás un mensaje indicando que tu sitio está siendo construido

### 5. Acceder a tu Dashboard

Una vez completado el despliegue, tu dashboard estará disponible en:

```
https://cosu123.github.io/Crypto_Dashboard_2026/
```

## Verificación

Para verificar que todo funciona correctamente:

1. ✅ Abre la URL de GitHub Pages
2. ✅ Verifica que el dashboard se carga correctamente
3. ✅ Haz clic en "Usar demo" para cargar datos de ejemplo
4. ✅ Prueba los filtros temporales (4H, 1D, 7D, 30D, Todo)
5. ✅ Verifica que los gráficos se renderizan correctamente
6. ✅ Prueba el modo Dark/Light
7. ✅ Verifica la tabla de transacciones y sus filtros
8. ✅ Prueba la paginación de la tabla
9. ✅ Verifica que las notificaciones toast funcionan
10. ✅ Prueba la exportación de JSON

## Solución de Problemas

### El sitio no se carga

**Problema**: La URL de GitHub Pages muestra un error 404

**Solución**:
1. Verifica que GitHub Pages esté habilitado en Settings → Pages
2. Asegúrate de que el branch seleccionado sea `main`
3. Espera 2-3 minutos adicionales para que el despliegue se complete
4. Limpia la caché del navegador (Ctrl+Shift+R)

### Los gráficos no se muestran

**Problema**: Las secciones de gráficos aparecen vacías

**Solución**:
1. Abre la consola del navegador (F12)
2. Verifica si hay errores relacionados con Chart.js
3. Asegúrate de tener conexión a internet (Chart.js se carga desde CDN)
4. Intenta recargar la página

### El botón "Sincronizar Google Sheet" no funciona

**Problema**: Error al intentar sincronizar

**Solución**:
1. Verifica que tu Google Sheet esté publicado correctamente
2. Asegúrate de que la URL del CSV sea accesible públicamente
3. Edita `index.html` y actualiza la constante `CSV_URL` en el objeto `GoogleSheetsSync`
4. Commit y push los cambios
5. Espera a que GitHub Pages se actualice (1-2 minutos)

## Actualizaciones Futuras

Cada vez que hagas cambios al dashboard:

1. Edita los archivos localmente
2. Commit los cambios:
   ```bash
   git add .
   git commit -m "Descripción de los cambios"
   ```
3. Push al repositorio:
   ```bash
   git push origin main
   ```
4. GitHub Pages se actualizará automáticamente en 1-2 minutos

## Personalización de la URL

Si deseas usar un dominio personalizado:

1. En Settings → Pages, busca la sección **Custom domain**
2. Ingresa tu dominio (ej: dashboard.tudominio.com)
3. Configura los registros DNS en tu proveedor de dominio:
   - Tipo: CNAME
   - Nombre: dashboard (o el subdominio que elijas)
   - Valor: cosu123.github.io
4. Espera a que los cambios DNS se propaguen (puede tomar hasta 24 horas)
5. Habilita **Enforce HTTPS** para mayor seguridad

## Recursos Adicionales

- [Documentación oficial de GitHub Pages](https://docs.github.com/en/pages)
- [Solución de problemas de GitHub Pages](https://docs.github.com/en/pages/getting-started-with-github-pages/troubleshooting-custom-domains-and-github-pages)
- [README del proyecto](README.md)
- [Análisis UX/UI](ANALISIS_UX_UI.md)

---

**Nota**: Si encuentras algún problema que no se resuelve con esta guía, abre un [Issue](https://github.com/cosu123/Crypto_Dashboard_2026/issues) en el repositorio de GitHub.
