import { Router } from "express";


import ProvinceService from '../services/province-service.js';
import {ReasonPhrases, StatusCodes} from 'http-status-codes';

const router = Router();
const svc = new ProvinceService();

router.get('',async (req,res) => {
    const entidadArray = await svc.getAll(); //invocación al servicio
    return res.status(StatusCodes.OK).json(entidadArray);
})

router.put('/:id', async (req,res) => {
    let id      = req.params.id;
    let entidad = req.body;
    const registrosAfectados = await svc.update(id,entidad);
    return res.status(StatusCodes.OK).json(registrosAfectados);
})
export default router;