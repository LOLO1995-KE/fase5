# Gestión de Estado: CartContext

Para gestionar el carrito de compras en **Luciano's Boutique**, decidimos prescindir de librerías externas complejas (como Redux) y optar por la solución nativa: **React Context API**.

## ¿Cómo Funciona?
1. **El Proveedor (`CartProvider`)**: Envuelve toda nuestra aplicación (`App.tsx`), creando un almacén global. Mantiene en su estado un array de objetos `CartItem`.
2. **Persistencia (`localStorage`)**: Al inicializar el contexto, lee los datos de `localStorage`. Cualquier cambio (añadir, quitar, vaciar) activa un `useEffect` que sincroniza el nuevo estado con la memoria del navegador.
3. **Lógica Interna**: 
   - `addToCart`: Identifica si un producto con el *mismo tamaño* ya existe. Si es así, aumenta su cantidad (`quantity`); si no, lo añade como un artículo nuevo.
   - `totalItems` y Totales: Se calculan de forma derivada usando `reduce`, manteniendo el estado simple y predecible.
4. **El Consumidor (`useCart`)**: Un hook personalizado que permite a cualquier componente (`PerfumeCard`, `Navbar`, `Cart`) leer o modificar el carrito al instante.
