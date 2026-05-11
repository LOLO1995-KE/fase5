# Pruebas Manuales y Aseguramiento de Calidad

Para el proyecto **Luciano's Boutique**, hemos llevado a cabo un riguroso proceso de Quality Assurance (QA) basado en pruebas manuales exhaustivas para garantizar que la experiencia del usuario sea digna de una plataforma de alta gama.

## Pruebas de Diseño Responsivo
Se ha verificado el comportamiento del diseño de forma rigurosa en múltiples resoluciones utilizando las herramientas de desarrollo del navegador (DevTools):
*   **Mobile (320px - 768px):** Comprobado el apilamiento correcto de las columnas en la cuadrícula (CSS Grid), legibilidad de tipografías y adaptación de márgenes y paddings.
*   **Desktop & Ultrawide (1024px+):** Verificada la elegancia de los espacios en blanco, la proporción de las tarjetas de perfumes y la estructura de la página del carrito.

## Análisis de Consola y Rendimiento
Se ha revisado minuciosamente la consola del navegador durante el flujo normal y escenarios de borde.
*   **Cero Errores:** No se arrojan errores de sintaxis, ni advertencias de React (como problemas con `keys` en bucles o pérdidas de memoria).
*   Las peticiones de red (Network) hacia la API muestran respuestas 200 OK con descargas ágiles y gestión fluida de estados de carga (mediante spinners minimalistas).

## Flujo del Carrito de Compras (End-to-End)
Hemos comprobado manualmente y en repetidas ocasiones el *Happy Path* (camino feliz) y las interacciones del estado:
1.  Navegación al catálogo dinámico sin recargas de página.
2.  Uso funcional de los selectores de tamaño (2ml, 5ml, 10ml) en las tarjetas.
3.  Acción de 'Añadir al carrito' con comprobación de feedback visual inmediato.
4.  Comprobación de agregación correcta en el estado global (Context) y la persistencia al recargar página (`localStorage`).
5.  Borrado individual y vaciado total del carrito desde la vista detallada.
6.  Proceso final de checkout desembocando sin problemas en la página de éxito (`/success`).
