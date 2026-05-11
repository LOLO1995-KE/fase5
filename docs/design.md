# Decisiones de Arquitectura

## Frontend: React + Vite + TypeScript
* **Vite**: Elegido por su extremadamente rápido tiempo de inicio del servidor de desarrollo (Hot Module Replacement instantáneo).
* **React**: Biblioteca ideal para construir interfaces de usuario interactivas basadas en componentes reutilizables (como `Navbar`, `PerfumeCard`).
* **TypeScript**: Añade tipado estático, reduciendo los errores en tiempo de ejecución, especialmente útil al manejar las interfaces de los `Perfume` o el estado del Carrito.

## Estilos: Tailwind CSS v4
Elegimos Tailwind por su aproximación *utility-first*. Permite construir diseños minimalistas y a medida sin abandonar el HTML, con un rendimiento excelente al no generar CSS no utilizado.

## Backend: Node.js + Express
Diseñado como una API RESTful ligera que servirá los datos de los perfumes de forma independiente, separando claramente las responsabilidades del cliente (Frontend) y el servidor (Backend).
