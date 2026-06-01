import ProvinceRepository from "../repositories/province-repository.js"

export default class ProvinceService {

    constructor() {

        this.repository = new ProvinceRepository()
    }

    getAllAsync = async () => {
       const returnArray = await this.repository.getAllAsync();
        return returnArray;
    }

    getByIdAsync = async (id) => {
        const returnEntity = await this.repository.getByIdAsync(id);
        return returnEntity;
    }

    createAsync = async (entity) => {

        console.log(`CursosService.getByIdAsync(${id})`);
        const returnEntity = await this.repository.getByIdAsync(id);
        return returnEntity;
    }

    updateAsync = async (entity) => {

        const rowsAffected = await this.repository.updateAsync(entity);
        return rowsAffected;
    }

    deleteByIdAsync = async (id) => {

        return await this.repository.deleteByIdAsync(id); const rowsAffected = await this.CursosRepository.deleteByIdAsync(id);
        return rowsAffected;
    }
}