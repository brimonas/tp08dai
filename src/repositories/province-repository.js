import Db from '../configs/db-config.js';
import pkg from 'pg'
const {Client, Pool} = pkg

export default class ProvinceRepository {
   

    getAllAsync = async () => {
        let returnArray = null;
        const client = new Client(Db);
        try{
            await client.connect();
            const sql = 'SELECT * FROM provincias';
            const result= await client.query(sql);
            await client.end();
            returnArray = result.rows;
        }
        catch(error){
            console.log(error)
        }
            return returnArray
        }
       
    getByIdAsync = async (id) => {
        let returnEntity = null;
        const client = new Client(Db);

        try {
            await client.connect();

            const sql = 'SELECT * FROM provincias WHERE id = $1';
            const result = await client.query(sql, [id]);

            await client.end();

            returnEntity = result.rows[0];
        }
        catch (error) {
            console.log(error);
        }

        return returnEntity;
    }

     createAsync = async (entity) => {
        let rowCount = 0;
        const client = new Client(Db);

        try {
            await client.connect();

            const sql = `
                INSERT INTO provincias (nombre, orden, activo)
                VALUES ($1, $2, $3)
            `;

            const values = [
                entity.nombre,
            entity.orden,
            entity.activo
            ];

            const result = await client.query(sql, values);

            await client.end();

            rowCount = result.rowCount;
        }
        catch (error) {
            console.log(error);
        }

        return rowCount;
    }
     updateAsync = async (entity) => {
        let rowCount = 0;
        const client = new Client(Db);

        try {
            await client.connect();

            const sql = `
                UPDATE provincias
                SET
                    nombre = $2,
                    orden = $3,
                    activo = $4
                WHERE id = $1
            `;

            const values = [
                entity.id,
                entity.nombre,
                entity.orden,
                entity.activo
            ];

            const result = await client.query(sql, values);

            await client.end();

            rowCount = result.rowCount;
        }
        catch (error) {
            console.log(error);
        }

        return rowCount;
    }
      deleteByIdAsync = async (id) => {
        let rowCount = 0;
        const client = new Client(Db);

        try {
            await client.connect();

            const sql = 'DELETE FROM provincias WHERE id = $1';
            const result = await client.query(sql, [id]);

            await client.end();

            rowCount = result.rowCount;
        }
        catch (error) {
            console.log(error);
        }

        return rowCount;
    }
}
