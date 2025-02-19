# Máster Front End XVII - Laboratorio de Bundling con Webpack

Este proyecto es una aplicación simple que permite al usuario ingresar su nombre y se le da la bienvenida con un mensaje personalizado con su nombre. Utiliza **Webpack** para el bundling, **TypeScript** para el tipado estático, **SASS** para los estilos y **React** para la interfaz de usuario. Además, se han configurado diferentes entornos (desarrollo y producción) y se ha integrado un analizador de bundles para optimizar el rendimiento.

---

## Tecnologías utilizadas

- **Webpack**: Bundling y optimización de recursos.
- **TypeScript**: Tipado estático para JavaScript.
- **SASS**: Preprocesador de CSS para estilos avanzados.
- **React**: Biblioteca para construir interfaces de usuario.
- **Babel**: Transpilación de código moderno a ES5.
- **Dotenv**: Manejo de variables de entorno.
- **Webpack Bundle Analyzer**: Análisis del tamaño del bundle.

## Configuración

### Archivos clave

1. **`webpack.common.js`**: Configuración común para desarrollo y producción.

   - Define el punto de entrada (`index.tsx`).
   - Configura loaders para TypeScript, imágenes y HTML.
   - Usa `HtmlWebpackPlugin` para generar el archivo `index.html`.

2. **`webpack.dev.js`**: Configuración para desarrollo.

   - Usa `style-loader`, `css-loader` y `sass-loader` para los estilos.
   - Habilita el servidor de desarrollo con `webpack-dev-server`.
   - Carga variables de entorno desde `dev.env`.

3. **`webpack.prod.js`**: Configuración para producción.

   - Extrae los estilos en un archivo CSS separado con `MiniCssExtractPlugin`.
   - Optimiza el bundle con `splitChunks`.
   - Carga variables de entorno desde `prod.env`.

4. **`webpack.perf.js`**: Configuración para análisis de bundles.

   - Usa `BundleAnalyzerPlugin` para visualizar el tamaño del bundle.

5. **`tsconfig.json`**: Configuración de TypeScript.

   - Soporta JSX y módulos ES6.

6. **`.babelrc`**: Configuración de Babel.
   - Incluye presets para React, TypeScript y ES6.

## Instalación

1. Clona el repositorio:

   ```bash
   git clone https://github.com/tu-usuario/tu-repositorio.git
   ```

2. Instala las dependencias:

   ```bash
   npm install
   ```

## Comandos

- **Desarrollo**:

  1. Generamos la build de desarrollo.

     ```bash
     npm run build:dev
     ```

  2. Iniciamos el servidor de desarrollo en `http://localhost:8080`

     ```bash
     npm run start:dev
     ```

- **Producción**: Generamos los archivos optimizados en la carpeta `dist/`.

        npm run build:prod

- **Análisis de bundles**:

        npm run build:perf

## Variables de entorno

- **Desarrollo**: Las variables se cargan desde `dev.env`.

        API_BASE=http://localhost:3000/api

- **Producción**: Las variables se cargan desde `prod.env`.

        API_BASE=http://myapp.com/api
