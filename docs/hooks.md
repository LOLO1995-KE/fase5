# Uso de React Hooks en Luciano's Boutique

En **Luciano's Boutique**, aprovechamos el poder de los hooks de React (introducidos en la versión 16.8) para añadir estado y ciclo de vida a nuestros componentes funcionales, manteniendo el código limpio, moderno y modular.

## `useState`
Lo utilizamos extensivamente para gestionar variables que, al cambiar, deben actualizar la interfaz gráfica.
- **Ejemplo**: En el `Catalog`, `searchTerm` almacena lo que el usuario escribe en la barra de búsqueda, re-renderizando la lista de perfumes con cada pulsación. En la `PerfumeCard`, controla el tamaño seleccionado (2ml, 5ml, 10ml) para recalcular el precio mostrado al instante.

## `useEffect`
Nos permite ejecutar "efectos secundarios" (código que escapa del flujo normal de renderizado puramente visual de React).
- **Ejemplo en Catálogo**: Lo usamos para llamar a nuestra API asíncrona (`fetchPerfumes()`) justo cuando el componente se monta en pantalla.
- **Ejemplo en Contexto**: Para guardar (`localStorage.setItem`) el estado del carrito cada vez que el array de productos sufre una modificación, logrando la persistencia de datos.

## `useContext`
Nos salva del *prop drilling* (el problema de pasar datos a través de infinitas capas de componentes intermedios). 
- Creamos un estado global en `CartContext` y usamos el hook personalizado `useCart()` para leer o modificar la cesta de la compra desde la `Navbar` o cualquier `PerfumeCard`, sin importar dónde se encuentren en el árbol de componentes.

## `useMemo`
Lo empleamos estrictamente para optimización de rendimiento.
- **Ejemplo**: El filtrado del catálogo. En lugar de recalcular qué perfumes deben mostrarse en cada render (lo cual es costoso), `useMemo` guarda el resultado y solo vuelve a calcularlo si cambian sus dependencias exactas (`searchTerm`, `selectedBrand` o el array crudo de `perfumes`), manteniendo la escritura en la barra de búsqueda 100% ágil.
