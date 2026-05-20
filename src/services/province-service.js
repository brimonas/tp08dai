
import ProvinceRepository from '../repositories/province-repository.js';
export default class ProvinceService {
    constructor() {
  console.log('Estoy en: ProvinceRepository.constructor()');
 this.ProvinceRepository = new ProvinceRepository();
}
// Clase con lógica de negocio.
getAllAsync = async () => {
    console.log(`ProvinceRepository.getAllAsync()`);
    const returnArray = await this.ProvinceRepository.getAllAsync();
        return returnArray;
}
}
