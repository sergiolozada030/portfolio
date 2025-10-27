# 🎨 **Fuente Poppins - Instalación Completada**

## ✅ **Fuente Instalada: Poppins**

**Poppins** es una fuente geométrica moderna, muy popular en portfolios y aplicaciones web. Ofrece excelente legibilidad tanto en pantalla como en dispositivos móviles.

## 🔗 **Instalación Realizada**

### **1. Google Fonts CDN (index.html)**

```html
<!-- Google Fonts - Poppins -->
<link rel="preconnect" href="https://fonts.googleapis.com" />
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
<link
  href="https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600;700;800&display=swap"
  rel="stylesheet"
/>
```

### **2. Pesos de Fuente Disponibles**

- **300** - Light
- **400** - Regular (Normal)
- **500** - Medium
- **600** - SemiBold
- **700** - Bold
- **800** - ExtraBold

## 🎯 **Configuración Global (styles.scss)**

### **Tipografía Base**

```scss
html,
body {
  font-family: 'Poppins', sans-serif;
  font-weight: 400;
  line-height: 1.6;
}

// Headings
h1,
h2,
h3,
h4,
h5,
h6 {
  font-family: 'Poppins', sans-serif;
  font-weight: 600;
  line-height: 1.2;
}
```

### **Escala Tipográfica Responsiva**

```scss
h1 {
  font-size: 3.5rem;
  font-weight: 800;

  @media (max-width: 768px) {
    font-size: 2.5rem;
  }
}

h2 {
  font-size: 2.5rem;
  font-weight: 700;

  @media (max-width: 768px) {
    font-size: 2rem;
  }
}
```

## 🎨 **Clases Utilitarias**

### **Pesos de Fuente**

```scss
.font-light {
  font-weight: 300;
} // Poppins Light
.font-normal {
  font-weight: 400;
} // Poppins Regular
.font-medium {
  font-weight: 500;
} // Poppins Medium
.font-semibold {
  font-weight: 600;
} // Poppins SemiBold
.font-bold {
  font-weight: 700;
} // Poppins Bold
.font-extrabold {
  font-weight: 800;
} // Poppins ExtraBold
```

### **Tamaños de Texto**

```scss
.text-xs {
  font-size: 0.75rem;
} // 12px
.text-sm {
  font-size: 0.875rem;
} // 14px
.text-base {
  font-size: 1rem;
} // 16px
.text-lg {
  font-size: 1.125rem;
} // 18px
.text-xl {
  font-size: 1.25rem;
} // 20px
.text-2xl {
  font-size: 1.5rem;
} // 24px
.text-3xl {
  font-size: 1.875rem;
} // 30px
.text-4xl {
  font-size: 2.25rem;
} // 36px
.text-5xl {
  font-size: 3rem;
} // 48px
```

## 📱 **Aplicación en Componentes**

### **Home Component (Hero Section)**

```typescript
.hero-title {
  font-family: 'Poppins', sans-serif;
  font-size: 4rem;
  font-weight: 800;
  letter-spacing: -0.02em;  // Mejor legibilidad
}

.hero-subtitle {
  font-family: 'Poppins', sans-serif;
  font-weight: 500;
  letter-spacing: -0.01em;
}
```

### **Header Component (Navegación)**

```typescript
.logo {
  font-family: 'Poppins', sans-serif;
  font-weight: 700;
  letter-spacing: -0.02em;
}

.nav-links a {
  font-family: 'Poppins', sans-serif;
  font-weight: 500;
}
```

## 🌐 **Optimizaciones Implementadas**

### **Rendimiento**

- ✅ **Preconnect** para optimizar carga
- ✅ **display=swap** para evitar FOIT (Flash of Invisible Text)
- ✅ **Crossorigin** para CORS
- ✅ **Letter-spacing** optimizado para legibilidad

### **Accesibilidad**

- ✅ **Line-height** optimizado (1.6 para texto, 1.2 para títulos)
- ✅ **Responsive font-sizes** para móviles
- ✅ **Alto contraste** mantenido

## 🎯 **Uso Recomendado**

### **Para Títulos Principales**

```html
<h1 class="font-extrabold">Sergio Perea</h1>
<h2 class="font-bold">Desarrollador Frontend</h2>
```

### **Para Texto de Contenido**

```html
<p class="font-normal text-lg">Descripción con buena legibilidad</p>
<p class="font-medium">Texto destacado pero legible</p>
```

### **Para UI Elements**

```html
<button class="font-semibold">Botón de Acción</button>
<nav class="font-medium">Navegación</nav>
```

## 📊 **Impacto en el Bundle**

- **CSS Bundle**: 91.86 kB (incluye Font Awesome + Poppins styles)
- **Fuente Poppins**: ~15-20 kB (6 pesos de fuente)
- **Rendimiento**: Óptimo con preconnect y display=swap

## 🚀 **Resultado Final**

Tu portfolio ahora usa **Poppins**, una fuente:

- ✅ **Moderna y profesional**
- ✅ **Excelente legibilidad**
- ✅ **Muy usada en portfolios de calidad**
- ✅ **Optimizada para web y móvil**
- ✅ **Compatible con Font Awesome**

¡La tipografía de tu portfolio ahora se ve mucho más profesional y moderna! 🎉
