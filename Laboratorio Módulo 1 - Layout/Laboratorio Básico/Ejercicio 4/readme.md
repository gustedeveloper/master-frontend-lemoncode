## Laboratorio Básico Layout - Ejercicio 4

Este proyecto consiste en crear un sistema de tarjetas utilizando CSS Grid. La estructura de las tarjetas y la disposición de los elementos dentro de ellas se gestionan mediante CSS Grid para ofrecer una distribución responsiva y eficiente. Además, se aplican `media queries` para ajustar el diseño según el tamaño de la pantalla.

### Uso de Grid

Se usa CSS Grid para manejar la disposición de las tarjetas. Aquí están los aspectos más importantes:

1. **Grid Contenedor:** El contenedor de las tarjetas usa `display: grid` y define tres columnas con `grid-template-columns: repeat(3, 300px);`. Esto significa que las tarjetas se mostrarán en tres columnas de 300px de ancho cada una en pantallas grandes.

2. **Alineación de los Elementos:** Se utiliza `justify-items: center` y `justify-content: center` en el contenedor de la cuadrícula para centrar las tarjetas en la página. Dentro de cada tarjeta, los elementos se alinean utilizando propiedades de Grid como `align-self`, `justify-self`, y `grid-template-rows`.

3. **Media Queries:** Para garantizar que las tarjetas se muestren correctamente en pantallas de diferentes tamaños, se utilizan `media queries`:

- **Pantallas grandes (>1076px):** Las tarjetas se distribuyen en tres columnas con un espacio de 50px entre ellas.

- **Pantallas medianas (<=1076px):** Se ajusta a dos columnas de 300px de ancho, manteniendo la misma cantidad de tarjetas visibles, pero en un formato más compacto.

- **Pantallas pequeñas (<=796px):** Las tarjetas se ajustan a una sola columna para pantallas pequeñas, lo que hace que las tarjetas sean más legibles en dispositivos móviles.
