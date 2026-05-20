import DBConfig from './../configs/db-config.js';

export default class ProvinceRepository{
    constructor() {
        console.log('Estoy en: ProvinceRepository-new.constructor()');
        this.db = new Db();
    }
    getAllasync = async () => {
         const sql = `SELECT * FROM provinces`;

        return await this.db.queryAll(sql);
    }
     
    getByIdAsync = async (id) => {

        const sql = `SELECT * FROM provinces WHERE id = $1`;

        return await this.db.queryOne(sql, [id]);
    }
}