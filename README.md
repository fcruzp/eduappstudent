# Eduapp - App Estudiantil

Eduapp Estudiantil - es una aplicación web progresiva (PWA) diseñada para la gestión académica estudiantil, ofreciendo una experiencia fluida tanto en línea como sin conexión.

## 🚀 Características

- 📱 Aplicación Web Progresiva (PWA)
- 📊 Gestión de calificaciones
- 📅 Visualización de horarios
- 🔄 Funcionamiento offline
- 🎨 Interfaz moderna y responsiva
- 📱 Instalable en dispositivos móviles

## 🛠️ Tecnologías Utilizadas

- React + TypeScript
- Vite
- Tailwind CSS
- Radix UI
- Service Workers
- PWA

## 📋 Prerrequisitos

- Node.js (versión 18 o superior)
- npm (incluido con Node.js)

## 🔧 Instalación

1. Clona el repositorio:
```bash
git clone <url-del-repositorio>
cd eduapp
```

2. Instala las dependencias:
```bash
npm install
```

3. Inicia el servidor de desarrollo:
```bash
npm run dev
```

La aplicación estará disponible en [http://localhost:5173](http://localhost:5173)

## 🏗️ Construcción para Producción

Para crear una versión optimizada para producción:

```bash
npm run build
```

Los archivos generados se encontrarán en el directorio `dist/`.

## 📱 Instalación como PWA

1. Abre la aplicación en Chrome
2. Haz clic en el icono de instalación en la barra de direcciones
3. Sigue las instrucciones para instalar la aplicación

## 🌐 Despliegue

La aplicación está configurada para ser desplegada en Netlify. El archivo `netlify.toml` contiene toda la configuración necesaria.

### Pasos para el despliegue:

1. Sube el código a un repositorio de GitHub
2. Conecta el repositorio con Netlify
3. El despliegue se realizará automáticamente

## 📁 Estructura del Proyecto

```
eduapp/
├── src/
│   ├── components/     # Componentes reutilizables
│   ├── screens/        # Pantallas principales
│   ├── hooks/          # Custom hooks
│   ├── utils/          # Utilidades y helpers
│   ├── data/           # Datos estáticos
│   ├── types/          # Definiciones de TypeScript
│   └── lib/            # Configuraciones y librerías
├── public/
│   ├── icons/          # Iconos para PWA
│   ├── manifest.json   # Configuración PWA
│   └── sw.js          # Service Worker
└── index.html         # Punto de entrada HTML
```

## 🔒 Características de Seguridad

- Headers de seguridad configurados
- Protección contra XSS
- Política de referrer estricta
- Protección contra clickjacking

## 🚀 Optimizaciones

- Caché de recursos estáticos
- Carga diferida de componentes
- Optimización de imágenes
- Compresión de assets

## 🤝 Contribución

1. Haz fork del proyecto
2. Crea una rama para tu feature (`git checkout -b feature/AmazingFeature`)
3. Commit tus cambios (`git commit -m 'Add some AmazingFeature'`)
4. Push a la rama (`git push origin feature/AmazingFeature`)
5. Abre un Pull Request

## 📝 Licencia

Este proyecto está bajo la Licencia MIT. Ver el archivo `LICENSE` para más detalles.

## 📧 Contacto

Para soporte o consultas, por favor abre un issue en el repositorio.