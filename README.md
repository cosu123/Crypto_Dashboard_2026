# 🚀 HEIDY · CRYPTO PORTFOLIO Dashboard

Dashboard premium para gestión de portafolio de criptomonedas con visualizaciones avanzadas, sincronización con Google Sheets y análisis en tiempo real.

![Dashboard Preview](https://img.shields.io/badge/Status-Premium-7A47F3?style=for-the-badge)
![Version](https://img.shields.io/badge/Version-3.0_Mejorado-4BC0FF?style=for-the-badge)
![License](https://img.shields.io/badge/License-MIT-27F5B7?style=for-the-badge)

## ✨ Características Principales

### 📊 Visualizaciones Avanzadas
- **KPIs en Tiempo Real**: Total invertido, valor actual, P&L, ROI, activos y transacciones
- **Gráfico de Objetivo**: Gauge circular mostrando progreso hacia meta de ganancia
- **Análisis de Riesgo**: Índice HHI de concentración y exposición en pérdidas
- **Curva del Portafolio**: Evolución temporal con filtros (4H, 1D, 7D, 30D, Todo)
- **Composición**: Gráfico donut mostrando distribución de activos
- **Mapa de Cartera**: Bubble chart con relación ROI vs % del portafolio
- **P&L por Activo**: Gráfico de barras con ganancias y pérdidas
- **Retornos Históricos**: Volatilidad diaria del portafolio
- **Watchlist**: Lista ordenada de activos con métricas clave

### 🔄 Sincronización de Datos
- **Carga Manual**: Importar archivos JSON con datos del portafolio
- **Modo Demo**: Datos de ejemplo pre-cargados para exploración
- **Google Sheets**: Sincronización automática desde hoja de cálculo (próximamente)
- **Exportación**: Descargar datos actuales en formato JSON

### 🎨 Experiencia de Usuario
- **Modo Oscuro/Claro**: Tema adaptable con paleta profesional
- **Diseño Responsive**: Optimizado para desktop, tablet y móvil
- **Filtros Avanzados**: Por activo, rango de fechas y ordenamiento
- **Tabla Profesional**: Con paginación y búsqueda
- **Tooltips Explicativos**: Ayuda contextual para métricas complejas
- **Notificaciones Toast**: Feedback visual de operaciones
- **Accesibilidad**: Navegación por teclado y ARIA labels

### 📈 Métricas y Análisis
- **Total Invertido**: Capital total invertido en USDT
- **Valor Actual**: Valor de mercado del portafolio
- **P&L (Profit & Loss)**: Ganancia o pérdida absoluta y porcentual
- **ROI**: Retorno sobre inversión
- **HHI**: Índice Herfindahl-Hirschman de concentración
- **Exposición en Pérdida**: Peso de activos con P&L negativo
- **Objetivo de Ganancia**: Progreso hacia meta personalizada

## 🚀 Inicio Rápido

### Opción 1: GitHub Pages (Recomendado)

El dashboard está publicado y accesible en:

```
https://cosu123.github.io/Crypto_Dashboard_2026/
```

### Opción 2: Uso Local

1. **Clonar el repositorio**:
```bash
git clone https://github.com/cosu123/Crypto_Dashboard_2026.git
cd Crypto_Dashboard_2026
```

2. **Abrir el dashboard**:
```bash
# Opción A: Abrir directamente en el navegador
open index.html  # macOS
start index.html  # Windows
xdg-open index.html  # Linux

# Opción B: Servidor local (recomendado para desarrollo)
python3 -m http.server 8000
# Luego visitar: http://localhost:8000
```

## 📖 Guía de Uso

### 1. Cargar Datos

#### Opción A: Usar Demo
1. Hacer clic en el botón **"✨ Usar demo"**
2. El dashboard se poblará con datos de ejemplo
3. Explorar todas las funcionalidades

#### Opción B: Cargar JSON Manual
1. Hacer clic en **"📁 Cargar JSON"**
2. Seleccionar un archivo JSON con el formato correcto
3. El dashboard procesará y mostrará los datos

#### Opción C: Sincronizar con Google Sheets (Próximamente)
1. Configurar Google Sheet con estructura compatible
2. Publicar la hoja como CSV o configurar Apps Script
3. Hacer clic en **"🔄 Sincronizar Google Sheet"**
4. Los datos se actualizarán automáticamente

### 2. Formato de Datos JSON

El dashboard espera un JSON con la siguiente estructura:

```json
{
  "totals": {
    "invested": 4106.08,
    "value": 4119.89,
    "pnl": 13.81,
    "roi": 0.0034
  },
  "goal": {
    "targetPnl": 5000
  },
  "assets": [
    {
      "asset": "BTC",
      "invested": 1634.46,
      "value": 1677.04,
      "pnl": 42.58,
      "roi": 0.0261,
      "weight": 0.4071
    }
  ],
  "transactions": [
    {
      "date": "2025-12-01T14:52:55",
      "asset": "AVAX",
      "type": "buy",
      "usdt": 49.88,
      "quantity": 3.87,
      "price": 12.89,
      "currentValue": 57.51,
      "pnl": 7.63
    }
  ],
  "timeseries": {
    "portfolioCurve": [
      {
        "t": "2025-01-01T00:00:00",
        "invested": 4000,
        "value": 4050
      }
    ],
    "dailyReturns": [
      {
        "date": "2025-01-01",
        "return": 0.0125
      }
    ]
  }
}
```

### 3. Filtros y Controles

#### Filtros Temporales (Curva del Portafolio)
- **4H**: Últimas 4 horas
- **1D**: Último día
- **7D**: Última semana
- **30D**: Último mes
- **Todo**: Histórico completo

#### Filtros de Tabla
- **Por Activo**: Selector desplegable con todos los activos
- **Rango de Fechas**: Campos "Desde" y "Hasta"
- **Ordenamiento**: Clic en encabezados de columna
- **Limpiar**: Botón para resetear todos los filtros

### 4. Exportar Datos

1. Hacer clic en **"⬇️ Exportar JSON"**
2. El navegador descargará un archivo `heidy_portfolio_data.json`
3. Este archivo puede ser re-importado posteriormente

### 5. Imprimir Dashboard

1. Hacer clic en **"🖨️ Imprimir"**
2. Se abrirá el diálogo de impresión del navegador
3. Configurar opciones (orientación horizontal recomendada)
4. Imprimir o guardar como PDF

### 6. Cambiar Tema

1. Hacer clic en **"🌙 Dark/Light"**
2. El dashboard alternará entre modo oscuro y claro
3. La preferencia se guarda automáticamente

## 🔧 Configuración Avanzada

### Sincronización con Google Sheets

#### Método A: Publicar como CSV (Más Simple)

1. **En Google Sheets**:
   - Ir a `Archivo` → `Compartir` → `Publicar en la web`
   - Seleccionar la pestaña `Portafolio`
   - Elegir formato `CSV`
   - Copiar el enlace de publicación

2. **En el Dashboard**:
   - Editar `index.html`
   - Buscar la constante `SHEET_CSV_URL`
   - Reemplazar con tu URL de CSV publicado
   - Guardar y recargar

3. **Sincronizar**:
   - Hacer clic en **"🔄 Sincronizar Google Sheet"**
   - Los datos se actualizarán automáticamente

**Ventajas**: Cero configuración de servidor, funciona perfecto en GitHub Pages

**Desventajas**: Los datos quedan públicos (solo lectura)

#### Método B: Google Apps Script (Más Profesional)

1. **Crear Apps Script**:
   - En Google Sheets: `Extensiones` → `Apps Script`
   - Copiar el siguiente código:

```javascript
function doGet(e) {
  const sheet = SpreadsheetApp.getActiveSpreadsheet().getSheetByName('Portafolio');
  const data = sheet.getDataRange().getValues();
  
  // Procesar datos y convertir a formato JSON
  const jsonData = processData(data);
  
  return ContentService
    .createTextOutput(JSON.stringify(jsonData))
    .setMimeType(ContentService.MimeType.JSON);
}

function processData(data) {
  // Implementar lógica de transformación
  // Convertir filas de Sheet a estructura JSON esperada
  return {
    totals: { /* ... */ },
    assets: [ /* ... */ ],
    transactions: [ /* ... */ ],
    timeseries: { /* ... */ }
  };
}
```

2. **Desplegar**:
   - Clic en `Implementar` → `Nueva implementación`
   - Tipo: `Aplicación web`
   - Ejecutar como: `Yo`
   - Quién tiene acceso: `Cualquier persona`
   - Copiar la URL de la aplicación web

3. **Configurar Dashboard**:
   - Editar `index.html`
   - Buscar `SHEET_API_URL`
   - Reemplazar con la URL de tu Apps Script
   - Guardar y recargar

**Ventajas**: JSON estructurado, control total, filtros personalizados

**Desventajas**: Requiere configuración inicial

### Personalización de Colores

Editar las variables CSS en `index.html`:

```css
:root {
  --bg0: #070A12;        /* Fondo principal */
  --accent: #7A47F3;     /* Color de acento (morado) */
  --accent2: #4BC0FF;    /* Color secundario (azul) */
  --good: #27F5B7;       /* Color para ganancias (verde) */
  --bad: #FF5A85;        /* Color para pérdidas (rojo) */
  --warn: #FFB020;       /* Color de advertencia (naranja) */
}
```

### Configuración de Objetivo

Editar en el JSON de datos:

```json
{
  "goal": {
    "targetPnl": 5000  // Meta de ganancia en USDT
  }
}
```

## 📊 Estructura del Proyecto

```
Crypto_Dashboard_2026/
├── index.html              # Dashboard principal (archivo único)
├── assets/                 # Recursos opcionales
│   └── demo_data.json     # Datos de demostración
├── README.md              # Este archivo
└── LICENSE                # Licencia MIT
```

## 🛠️ Tecnologías Utilizadas

- **HTML5**: Estructura semántica
- **CSS3**: Diseño moderno con variables CSS y Grid
- **JavaScript (Vanilla)**: Lógica sin dependencias externas
- **Chart.js**: Visualizaciones de datos
- **Luxon**: Manejo de fechas y tiempo
- **GitHub Pages**: Hosting estático gratuito

## 🎯 Roadmap

### Versión 3.1 (Próxima)
- [x] Mejora de contraste y accesibilidad
- [x] Sistema de notificaciones toast
- [x] Tooltips explicativos
- [ ] Sincronización automática con Google Sheets
- [ ] Paginación en tabla de transacciones
- [ ] Búsqueda global en tabla

### Versión 3.2 (Futuro)
- [ ] Tour guiado para nuevos usuarios
- [ ] Comparación temporal (vs mes anterior)
- [ ] Sistema de alertas personalizables
- [ ] Exportación a PDF con reportes
- [ ] Dashboard personalizable (widgets movibles)
- [ ] Modo offline con Service Worker

### Versión 4.0 (Visión)
- [ ] Integración directa con APIs de exchanges
- [ ] Actualización de precios en tiempo real
- [ ] Análisis predictivo con ML
- [ ] Recomendaciones de trading
- [ ] Múltiples portafolios
- [ ] Colaboración en equipo

## 🐛 Solución de Problemas

### El dashboard no carga datos

**Problema**: Al hacer clic en "Usar demo" no pasa nada

**Solución**:
1. Abrir la consola del navegador (F12)
2. Verificar si hay errores en rojo
3. Asegurarse de que el archivo se está sirviendo desde un servidor (no `file://`)
4. Usar `python3 -m http.server` para servir localmente

### Los gráficos no se muestran

**Problema**: Las secciones de gráficos aparecen vacías

**Solución**:
1. Verificar que Chart.js se cargó correctamente
2. Comprobar conexión a internet (CDN de Chart.js)
3. Limpiar caché del navegador (Ctrl+Shift+R)
4. Verificar que los datos JSON tienen la estructura correcta

### La sincronización con Google Sheets falla

**Problema**: Error al intentar sincronizar

**Solución**:
1. Verificar que el Sheet está publicado correctamente
2. Comprobar que la URL del CSV es accesible públicamente
3. Revisar CORS (Cross-Origin Resource Sharing)
4. Verificar formato de datos en el Sheet

### El modo responsive no funciona bien

**Problema**: El dashboard se ve mal en móvil

**Solución**:
1. Asegurarse de que el viewport meta tag está presente
2. Probar en diferentes navegadores
3. Limpiar caché del navegador móvil
4. Verificar que no hay CSS personalizado que rompa el responsive

## 🤝 Contribuciones

Las contribuciones son bienvenidas. Para cambios importantes:

1. Fork el repositorio
2. Crear una rama para tu feature (`git checkout -b feature/AmazingFeature`)
3. Commit tus cambios (`git commit -m 'Add some AmazingFeature'`)
4. Push a la rama (`git push origin feature/AmazingFeature`)
5. Abrir un Pull Request

## 📝 Changelog

### v3.0 Mejorado (2026-01-14)
- ✅ Mejora de contraste de textos (WCAG 2.1 AA)
- ✅ Sistema de notificaciones toast
- ✅ Tooltips explicativos para métricas
- ✅ Estados activos mejorados en filtros
- ✅ Navegación por teclado y ARIA labels
- ✅ README completo con documentación
- ✅ Preparación para sincronización con Google Sheets

### v3.0 Original
- Diseño premium tipo Power BI
- Visualizaciones con Chart.js
- Modo oscuro/claro
- Filtros temporales
- Tabla profesional con filtros
- Exportación de datos

## 📄 Licencia

Este proyecto está bajo la Licencia MIT. Ver el archivo `LICENSE` para más detalles.

## 👤 Autor

**Heidy - Crypto Portfolio Management**

- GitHub: [@cosu123](https://github.com/cosu123)
- Repositorio: [Crypto_Dashboard_2026](https://github.com/cosu123/Crypto_Dashboard_2026)

## 🙏 Agradecimientos

- [Chart.js](https://www.chartjs.org/) - Biblioteca de gráficos
- [Luxon](https://moment.github.io/luxon/) - Manejo de fechas
- [GitHub Pages](https://pages.github.com/) - Hosting gratuito
- Comunidad de desarrolladores de criptomonedas

---

**⭐ Si este proyecto te resulta útil, considera darle una estrella en GitHub!**

**📧 ¿Preguntas o sugerencias?** Abre un [Issue](https://github.com/cosu123/Crypto_Dashboard_2026/issues) en GitHub.
