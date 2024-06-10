import { Router } from "express";
import ProvinceService from '../services/province-service.js'
const router = Router();
const svc = new ProvinceService(); // Instalación del serivce

router.get('',async (req,res) => {
    let respuesta;
    const returnArray = await svc.getAllAsync();
    if (returnArray != null){
        respuesta = res.status(200).json(returnArray);
    } else {
        respuesta = res.status(500).send('Error interno.');
    }
    return respuesta;
});
router.get('/:id', async (req,res) =>{
    /* Hacer */
})
router.post('/:id', async (req,res) =>{
    /* Hacer */
})
router.put('/:id', async (req,res) =>{
    /* Hacer */
})
router.delete('/:id', async (req,res) =>{
    /* Hacer */
})