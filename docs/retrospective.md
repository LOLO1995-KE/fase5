# Retrospectiva Final y Lecciones Aprendidas

Llegar al final del desarrollo de **Luciano's Boutique** me invita a mirar atrás y reflexionar sobre el proceso, los obstáculos y el enorme valor de las herramientas modernas durante la construcción de esta arquitectura Fullstack.

## Reflexión Personal
Ha sido enormemente enriquecedor comprender de primera mano el ciclo de vida completo de los datos en una aplicación real. Entender cómo los datos residen en una base (o mock) en el backend de Express, son solicitados de forma asíncrona a través de una red, y finalmente son consumidos, filtrados y renderizados por una interfaz reactiva fuertemente tipada en TypeScript, es lo que verdaderamente consolida la experiencia de un desarrollador Fullstack. 

## Superando los Retos de Red
Uno de los principales dolores de cabeza durante la integración fue dominar la capa de comunicación. Conectar el cliente (Vite en puerto 5173) con el backend (Express en puerto 3000) expone la aplicación al clásico problema de CORS (Cross-Origin Resource Sharing). Aprendí a solucionarlo estratégicamente de dos formas: configurando un proxy limpio en `vite.config.ts` para agilizar el entorno de desarrollo, e implementando el middleware `cors` en Express para asegurar un entorno productivo robusto. 

## El Impacto de la Inteligencia Artificial (Gemini)
En este proyecto, la IA no fue un simple buscador de internet, sino un auténtico **colega Senior de programación**. Utilicé a Gemini de forma extensa y deliberada:
*   **Asistente Experto en Debugging:** Fue vital para interpretar errores crípticos de la terminal (como el infame `ERR_MODULE_NOT_FOUND` al ejecutar Node en entornos ESM). Gemini proporcionó explicaciones certeras de por qué ocurrían bajo el capó y propuso el uso de herramientas modernas como `tsx` para solucionarlo.
*   **Generador de Scripts y Refactorización:** Automatizó refactorizaciones complejas, asegurando que las importaciones de tipos de TypeScript fuesen correctas (`type-only imports`) y que las configuraciones de `package.json` funcionaran de forma armónica usando `concurrently`.
*   **Arquitecto Técnico:** Ayudó a definir, pulir y documentar la estructura de carpetas, asegurando una separación limpia de la lógica de negocio en servicios, controladores y rutas siguiendo estrictos estándares de la industria.

Saber delegar tareas, iterar mediante el diseño de prompts (*prompt engineering*) y colaborar con asistentes agenticos avanzados se ha convertido en una de las habilidades más importantes y transformadoras que me llevo de este proceso de aprendizaje.
