import { Router } from 'express';
import {
    obtenerEnte,
    obtenerEntes,
    crearEntes,
    actualizarEntes,
    eliminarEntes,
} from '../Controllers/entes.controller.js';

const router = Router();

router.get('/entes',obtenerEntes);

router.get('/entes/:id',obtenerEnte);

router.post('/entes',crearEntes);

router.put('/entes/:id',actualizarEntes);

router.delete('/entes/id',eliminarEntes);

export default router;