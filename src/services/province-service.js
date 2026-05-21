
import ProvinceRepository from "../repositories/province-repository.js"

export default class ProvinceService {

    constructor() {

        this.repository = new ProvinceRepository()
    }

    getAllAsync = async () => {
        return await this.ProvinceRepository.getAllAsync();
    }

    getByIdAsync = async (id) => {
        return await this.ProvinceRepository.getByIdAsync(id);
    }

    createAsync = async (entity) => {
        console.log(`CursosService.createAsync(${JSON.stringify(entity)})`);
       return await this.ProvinceRepository.createAsync(entity);
    }

    updateAsync = async (entity) => {
        console.log(`CursosService.updateAsync(${JSON.stringify(entity)})`);
         return await this.ProvinceRepository.updateAsync(entity);
    }
    
    deleteByIdAsync = async (id) => {
        console.log(`CursosService.deleteByIdAsync(${id})`);
        return await this.ProvinceRepository.deleteByIdAsync(id);
    }

}
