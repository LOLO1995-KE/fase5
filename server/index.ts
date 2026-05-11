import express from 'express';
import cors from 'cors';
import perfumeRoutes from './src/routes/perfume.routes';

const app = express();
const PORT = process.env.PORT || 3000;

app.use(cors());
app.use(express.json());

// Montar las rutas
app.use('/api/perfumes', perfumeRoutes);

app.listen(PORT, () => {
  console.log(`Servidor de Luciano's Boutique corriendo en http://localhost:${PORT}`);
});
