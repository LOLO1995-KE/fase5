import express from 'express';
import cors from 'cors';
import perfumeRoutes from '../server/src/routes/perfume.routes';

const app = express();
const PORT = process.env.PORT || 3000;

app.use(cors());
app.use(express.json());

// Montar las rutas
app.use('/api/perfumes', perfumeRoutes);

// En Vercel no necesitamos que el servidor escuche activamente en un puerto,
// Vercel se encarga de invocar la aplicación exportada.
if (process.env.NODE_ENV !== 'production') {
  app.listen(PORT, () => {
    console.log(`Servidor de Luciano's Boutique corriendo en http://localhost:${PORT}`);
  });
}

export default app;
