## Ejercicio de SASS - Ejercicio 2: Temas

Este proyecto incluye dos temas distintos (verde y púrpura) que modifican las propiedades de color, fuente, `border-radius` y `box-shadow` de los elementos de la página. Puedes cambiar el tema simplemente actualizando el enlace al archivo de estilos correspondiente en el HTML.

### Instrucciones para cambiar de tema

Para cambiar entre los temas verde y púrpura, sigue estos pasos:

1. **Abre el archivo HTML:**
   Accede al archivo `index.html` o al archivo HTML principal donde están enlazados los estilos.

2. **Modifica el enlace al archivo de estilos:**
   En la sección `<head>` del archivo HTML, busca la siguiente línea de código:

```
<link type="text/css" rel="stylesheet" href="mystyle-green.scss" />
```

4. **Cambia el tema:**

- Para usar el tema púrpura, reemplaza `"mystyle-green.scss"` por `"mystyle-purple.scss"`.
- Para volver al tema verde, cambia `"mystyle-purple.scss"` por `"mystyle-green.scss"`.`

Ejemplo de cambio de tema:

```
<!-- Tema verde -->
<link type="text/css" rel="stylesheet" href="mystyle-green.scss" />

<!-- Para cambiar al tema púrpura -->
<link type="text/css" rel="stylesheet" href="mystyle-purple.scss" />
```
