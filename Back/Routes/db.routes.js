import { Router } from 'express';
import {
    obtenerEnte,
    obtenerEntes,
    obtenerAuC,
    obtenerEir,
    obtenerHlr,
    obtenerRegBSS,
    obtenerVlr,
    crearVlr,
    obtenerAuCId,
    obtenerEirId,
    eliminarEntes,
} from '../Controllers/entes.controller.js';

const router = Router();

router.get('/entes',obtenerEntes);
router.get('/hlr',obtenerHlr);
router.get('/vlr',obtenerVlr);
router.get('/auc',obtenerAuC);
router.get('/regbss/:id',obtenerRegBSS);
router.get('/eir',obtenerEir);
router.get('/eir/:id',obtenerEirId);
router.get('/auc/:id',obtenerAuCId);

router.get('/entes/:id',obtenerEnte);


router.post('/vlr',crearVlr);

router.delete('/entes/id',eliminarEntes);

export default router;