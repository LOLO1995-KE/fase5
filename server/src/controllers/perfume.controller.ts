import { Request, Response } from 'express';
import { perfumeService } from '../services/perfume.service';

export class PerfumeController {
  getAllPerfumes(req: Request, res: Response) {
    try {
      const perfumes = perfumeService.getAllPerfumes();
      res.status(200).json({
        success: true,
        data: perfumes,
        message: 'Catálogo recuperado exitosamente'
      });
    } catch (error) {
      res.status(500).json({
        success: false,
        message: 'Error interno al recuperar los perfumes'
      });
    }
  }
}

export const perfumeController = new PerfumeController();
