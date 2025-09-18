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

### Funcionalidad de PDF  
- **PDF.js 5.3.93** → Renderizado de archivos PDF  
- **React-PDF 10.0.1** → Componentes para mostrar PDFs en React  

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

### Instalar dependencias
```npm install```

### Correr en modo desarrollo
```npm run dev```

