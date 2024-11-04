import ProvinceRepository from '../repositories/province-repository.js';

export default class ProvinceService{
    //Clase con lógica de negocio
    getAllAsync = async () => {
        const repo = new ProvinceRepository();
        const returnArray = await repo.getAllAsync();
        return returnArray;
    }
    //...

    getByIdAsync = async(id) => {
        const repo = new ProvinceRepository();
        const returnArray = await repo.getByIdAsync(id);
        return returnArray;
    }
    getLocationById = async(id_location) => {{
        const repo = new ProvinceRepository();
        const returnArray = await repo.getLocationById(id_location);
        return returnArray;
    }}
    createAsync = async(entity) => {
        const repo = new ProvinceRepository();
        const returnArray = await repo.createAsync(entity);
        return returnArray;
    }
    updateAsync = async(entity) => {
        const returnArray = await repo.updateAsync(entity);
        return returnArray;
    }
    deleteByIdAsync = async(id) => {
        const returnArray = await repo.deleteByIdAsync(entity);
        return returnArray;
    }   
}
