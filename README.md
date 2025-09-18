# 📑 PDF Grinder

Aplicación web moderna para **combinar archivos PDF** de manera rápida, intuitiva y con una interfaz atractiva.  

---

## 🚀 Tecnologías del Proyecto  

### Frontend Core  
- **React 19.1.0** → Biblioteca principal para construir la interfaz de usuario  
- **TypeScript 5.8.3** → Superset de JavaScript con tipado estático  
- **Vite 7.0.4** → Herramienta de build moderna y rápida  

### Routing y Navegación  
- **React Router DOM 7.8.1** → Manejo de rutas y navegación entre páginas  

### Estilos y UI  
- **Tailwind CSS 4.1.11** → Framework de utilidades CSS  
- **Material-UI (MUI) 7.2.0** → Componentes de interfaz listos para usar  
- **Material Tailwind 2.1.10** → Integración de Material Design con Tailwind  
- **Heroicons 2.2.0** → Iconos SVG optimizados  
- **Emotion** → Librería CSS-in-JS para estilos dinámicos  

### Funcionalidad de PDF  
- **PDF.js 5.3.93** → Renderizado de archivos PDF  
- **React-PDF 10.0.1** → Componentes para mostrar PDFs en React  

### Interactividad y Drag & Drop  
- **@dnd-kit/core** → Funcionalidad básica de drag & drop  
- **@dnd-kit/sortable** → Elementos ordenables  
- **@dnd-kit/utilities** → Utilidades auxiliares  

### HTTP y APIs  
- **Axios 1.10.0** → Cliente HTTP para peticiones al backend  

### Herramientas de Desarrollo  
- **ESLint** → Linter para mantener un código limpio  
- **PostCSS** + **Autoprefixer** → Procesamiento y compatibilidad CSS  

---

## 📋 Funcionalidades  

✔ **Subida de archivos PDF** (drag & drop o selección manual)  
✔ **Reorganización de PDFs** arrastrando para cambiar el orden  
✔ **Combinación de múltiples PDFs** en un único archivo  
✔ **Interfaz moderna** con **glassmorphism** y **animaciones suaves**  
✔ **Diseño responsivo** (desktop, tablet, móvil)  
✔ **Feedback visual** durante el procesamiento  
✔ **Navegación completa** → Inicio (`/`), Subida (`/upload`), Acerca de (`/about`), Contacto (`/contact`)  

---

## 🔄 Flujo de Trabajo  

1. Subir archivos PDF al área de **drop**  
2. Reordenar documentos arrastrándolos  
3. Clic en **"Combinar"**  
4. La app envía los archivos al **backend**  
5. El backend devuelve un **PDF combinado**  
6. El usuario descarga el resultado final  

---

## 📦 Instalación y Ejecución  

# Instalar dependencias
npm install

# Correr en modo desarrollo
npm run dev

### 1️⃣ Clonar el repositorio  
```bash
git clone https://github.com/tuusuario/pdf-grinder.git
cd pdf-grinder
