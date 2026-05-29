import ProvinceRepository from "../repositories/province-repository.js"

export default class ProvinceService {

    constructor() {

        this.repository = new ProvinceRepository()
    }

    getAllAsync = async () => {
        return await this.repository.getAllAsync();
    }

    getByIdAsync = async (id) => {
        return await this.repository.getByIdAsync(id);
    }

    createAsync = async (entity) => {

        console.log(`ProvinceService.createAsync(${JSON.stringify(entity)})`);

        return await this.repository.createAsync(entity);
    }

    updateAsync = async (entity) => {

        console.log(`ProvinceService.updateAsync(${JSON.stringify(entity)})`);

        return await this.repository.updateAsync(entity);
    }

    deleteByIdAsync = async (id) => {

        console.log(`ProvinceService.deleteByIdAsync(${id})`);

        return await this.repository.deleteByIdAsync(id);
    }
}