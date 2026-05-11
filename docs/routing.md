# Enrutamiento (Routing) en Luciano's Boutique

Nuestra aplicación es una Single Page Application (SPA). En lugar de pedir una página HTML nueva al servidor cada vez que el usuario hace clic en un enlace, JavaScript se encarga de cambiar los componentes que se muestran en pantalla, logrando una experiencia instantánea.

## React Router DOM
Utilizamos `react-router-dom` para gestionar esta navegación de forma robusta.

### `BrowserRouter`
Envuelve la aplicación para habilitar el enrutamiento basado en la API de Historia de HTML5. Nos permite tener URLs limpias (como `/perfumes` en lugar de `/#/perfumes`).

### `Routes` y `Route`
Definimos nuestras rutas en `src/App.tsx`.
- `/`: Componente `Home` (Página de aterrizaje).
- `/perfumes`: Componente `Catalog` (Catálogo con filtros y buscador).
- `/cart`: Componente `Cart` (Resumen de compra y carrito).
- `/success`: Componente `Success` (Página de agradecimiento al comprar).
- `*`: Cualquier otra ruta caerá en el componente `NotFound` (nuestra página de Error 404), mejorando la robustez de la app.

### Navegación
En lugar de etiquetas `<a href>` tradicionales (que recargan la página), usamos el componente `<Link to="...">` o el hook `useNavigate` (como hacemos al finalizar la compra en el carrito para redirigir) para saltar de una vista a otra de forma 100% fluida.
