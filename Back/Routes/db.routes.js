import { Router } from 'express';
import {
    obtenerEnte,
    obtenerEntes,
    obtenerAuC,
    obtenerEir,
    obtenerHlr,
    obtenerRegBSS,
    obtenerVlr,
    crearEntes,
    actualizarEntes,
    eliminarEntes,
} from '../Controllers/entes.controller.js';

const router = Router();

router.get('/entes',obtenerEntes);
router.get('/hlr',obtenerHlr);
router.get('/vlr',obtenerVlr);
router.get('/auc',obtenerAuC);
router.get('/regbss/:id',obtenerRegBSS);
router.get('/eir',obtenerEir);

router.get('/entes/:id',obtenerEnte);

router.post('/entes',crearEntes);

router.put('/entes/:id',actualizarEntes);

router.delete('/entes/id',eliminarEntes);

export default router;