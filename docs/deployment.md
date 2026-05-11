# Despliegue en Producción

El proceso de despliegue para **Luciano's Boutique** se ha diseñado para ser ágil, moderno e integrado directamente con nuestro flujo de desarrollo de GitHub.

## Despliegue del Frontend (Vercel)
Hemos optado por **Vercel** como nuestra plataforma de hosting para el cliente frontend (React + Vite) debido a su excelente rendimiento y configuración "Zero-Config".
1.  **Integración Continua con GitHub:** Se vinculó el repositorio del proyecto con la cuenta de Vercel. Cada vez que realizamos un *push* a la rama principal (`main`), se dispara automáticamente un nuevo pipeline de construcción.
2.  **Configuración del Build:** Vercel detecta automáticamente que usamos Vite. El comando de compilación configurado es `npm run build`, y el directorio de salida de los artefactos estáticos (output directory) es la carpeta `dist/`.

## El Desafío del Backend
Dado que nuestra arquitectura en las fases finales evolucionó de un frontend estático a una estructura Fullstack (incorporando una carpeta `server/` con Express), nos enfrentamos a un desafío arquitectónico de despliegue. 

Vercel está altamente optimizado para servir contenido estático o ejecutar funciones Serverless de corta duración. Desplegar una aplicación Node/Express de larga duración (long-running process) que vive en el mismo repositorio requiere estrategias adicionales. 

Para que la tienda funcione completamente en la nube, es necesario refactorizar los controladores de Express hacia "Vercel Serverless Functions" (en la carpeta `api/`) o bien separar el backend y utilizar un servicio complementario (como Render, Heroku o Railway) para levantar la carpeta `server/` de manera aislada, configurando las variables de entorno en Vercel para que el frontend apunte a la nueva URL de la API en producción en lugar del proxy local.
