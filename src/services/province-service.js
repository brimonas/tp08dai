import ProvinceRepository from "../repositories/province-repository.js"

export default class ProvinceService {

   
    getAllAsync = async () => {
         const repo = new ProvinceRepository()
       const returnArray = await repo.getAllAsync();
        return returnArray;
    }

    getByIdAsync = async (id) => {
         const repo = new ProvinceRepository()
           console.log(`ProvinceRepository.getByIdAsync(${id})`)
        const returnEntity = await repo .getByIdAsync(id);
        return returnEntity;
    }

    createAsync = async (entity) => {
             const repo = new ProvinceRepository()
        console.log(`ProvinceRepository.createAsync (${
            JSON.stringify(entity)
        })`);
        const rowsAffected = await repo.createAsync
        (entity);
        return rowsAffected;
    }

    updateAsync = async (entity) => {
         const repo = new ProvinceRepository()
         console.log(` ProvinceRepository.updateAsync(${JSON.stringify(entity)})` );
        const rowsAffected = await repo.updateAsync(entity);
        return rowsAffected;
    }

    deleteByIdAsync = async (id) => {
         const repo = new ProvinceRepository()
            console.log(`ProvinceRepository.deleteByIdAsync(${id})` );
        return await repo.deleteByIdAsync(id); const rowsAffected = await this.CursosRepository.deleteByIdAsync(id);
        return rowsAffected;
    }
}