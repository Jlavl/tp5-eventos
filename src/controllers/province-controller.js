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

router.get('/:id', async (req,res) =>{// /api/province/{id}
    let id = req.params.id; 
    let respuesta
    const returnArray = await svc.getByIdAsync(id)
    if (returnArray != null){
        respuesta = res.status(200).json(returnArray);
    } else {
        respuesta = res.status(404).send('Error interno.');
    }
    return respuesta;
})
router.get('/:id/locations', async (req,res) =>{ 
    
    let id_location = req.params.id;
    let respuesta
    const returnArray = await svc.getLocationById(id_location)
    if (returnArray != null){
        respuesta = res.status(200).json(returnArray);
    } else {
        respuesta = res.status(404).send('Error interno.');
    }
    return respuesta;

})
router.post('', async (req,res) =>{
    let respuesta;
    const returnArray = await svc.createAsync()
    if (returnArray != null){
        respuesta = res.status(200).json();
    } else {
        respuesta = res.status(404).send('Error interno.');
    }
    return respuesta;
})
router.put('', async (req,res) =>{
    svc.updateAsync()
    /* Hacer */
})
router.delete('/:id', async (req,res) =>{
    svc.deleteAsync()
    /* Hacer */
})


/*
 GET /api/province
 GET  /api/province/{id}
 GET  /api/province/{id}/locations
 POST /api/province/
 PUT /api/province/
 DELETE /api/province/{id} 

*/

export default router;