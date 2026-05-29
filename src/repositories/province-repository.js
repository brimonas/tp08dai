import Db from '../configs/db-config.js'

export default class ProvinceRepository {

    constructor() {

        console.log('ProvinceRepository.constructor()')

        this.db = new Db()
    }

    getAllAsync = async () => {

        console.log('ProvinceRepository.getAllAsync()')

        const sql = `SELECT * FROM provincias`

        return await this.db.queryAll(sql)
    }

    getByIdAsync = async (id) => {

        console.log(`ProvinceRepository.getByIdAsync(${id})`)

        const sql = `SELECT * FROM provincias WHERE id = $1`

        return await this.db.queryOne(sql, [id])
    }

    createAsync = async (entity) => {

        console.log(`ProvinceRepository.createAsync(${JSON.stringify(entity)})`)

        const sql = `
            INSERT INTO provincias
            (name, full_name, latitude, longitude, display_order)
 /*cambiar tabla prov*/
            VALUES ($1, $2, $3, $4, $5)
        `

        const values = [
            entity.name,
            entity.full_name,
            entity.latitude,
            entity.longitude,
            entity.display_order
        ]

        return await this.db.queryRowCount(sql, values)
    }
    updateAsync = async (entity) => {

        console.log(`ProvinceRepository.updateAsync(${JSON.stringify(entity)})`);

        const sql = `
            UPDATE provincias
            SET
                name = $2,
                full_name = $3,
                latitude = $4,
                longitude = $5,
                display_order = $6
            WHERE id = $1
        `;

        const values = [
            entity.id,
            entity.name,
            entity.full_name,
            entity.latitude,
            entity.longitude,
            entity.display_order
        ];

        return await this.db.queryRowCount(sql, values);
    }
     deleteByIdAsync = async (id) => {

        console.log(`ProvinceRepository.deleteByIdAsync(${id})`);

        const sql = `DELETE FROM provincias WHERE id = $1`;

        return await this.db.queryRowCount(sql, [id]);
    }
}