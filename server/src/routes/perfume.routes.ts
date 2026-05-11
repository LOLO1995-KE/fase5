import { Router } from 'express';
import { perfumeController } from '../controllers/perfume.controller';

const router = Router();

// GET /api/perfumes
router.get('/', perfumeController.getAllPerfumes);

export default router;
