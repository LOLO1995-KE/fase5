# Proyecto: Luciano's Boutique

## Definición del Proyecto
**Luciano's Boutique** (nombre provisional) es un e-commerce exclusivo dedicado a la venta de *decants* (muestras extraídas del frasco original) de perfumes de nicho y de diseñador. La plataforma ofrece a los amantes de la perfumería la oportunidad de probar fragancias de alta gama antes de comprometerse a comprar una botella completa.

## El Problema que Resuelve
El mundo de la perfumería, especialmente el segmento de nicho, se caracteriza por precios elevados. Comprar un perfume a ciegas (sin haberlo probado antes en la piel) supone un alto riesgo económico, ya que las notas olfativas se desarrollan de manera diferente en cada persona. 
Luciano's Boutique resuelve este problema al ofrecer **tamaños reducidos y accesibles (2ml, 5ml y 10ml)**. Esto permite a los clientes descubrir, probar y usar una amplia variedad de fragancias de lujo sin tener que hacer una gran inversión inicial.

## Funcionalidades Principales (MVP)
Para la versión inicial (Producto Mínimo Viable), la aplicación contará con:

1. **Catálogo de Productos:**
   * Diseño minimalista y de lujo que transmita la exclusividad de las marcas.
   * Visualización de los perfumes disponibles en formato de cuadrícula.
2. **Navegación Categorizada:**
   * Filtros y categorías intuitivas para facilitar el descubrimiento:
     * **Género** (Masculino, Femenino, Unisex).
     * **Marca** (Ej: Creed, Parfums de Marly, Tom Ford).
     * **Notas Olfativas** (Ej: Amaderado, Cítrico, Gourmand, Floral).
3. **Vista de Detalle del Producto:**
   * Página específica para cada fragancia con su descripción y acordes principales.
   * **Selector Dinámico:** Un componente que permite al usuario elegir el tamaño del decant (2ml, 5ml o 10ml), ajustando automáticamente el precio mostrado en pantalla.
4. **Carrito de Compras Global:**
   * Estado global del carrito accesible desde cualquier lugar de la aplicación.
   * Flujo completo de "Checkout" con un proceso de pago simulado (sin pasarela real) para completar pedidos en esta fase.

## Mejoras Futuras (Post-prácticas)
Tras la validación del MVP, se planifican las siguientes evoluciones:
* **Integración de Pagos Reales:** Conexión con Stripe o PayPal para procesar transacciones de forma segura.
* **Infraestructura Backend:** Migración a una base de datos en la nube (ej. Firebase, Supabase o MongoDB) para manejar inventario real, usuarios y pedidos.
* **Panel de Administración (Backoffice):** Interfaz privada para gestionar el stock, añadir nuevos perfumes, modificar precios y visualizar estadísticas de ventas.
