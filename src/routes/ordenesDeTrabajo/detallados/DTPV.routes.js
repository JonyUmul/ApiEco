import { Router } from "express";
import {  postDTPV, getDTPV, getDTPVS } from "../../../../controllers/ordenesDeTrabajo/detallles/DTPV.controllers.js"



const router = Router();


router.post('/DTPV', postDTPV);
router.get('/DTPV/:id', getDTPV);
router.get('/DTPV/:fecha_creacion/:id_aserradero', getDTPVS);
export default router;
