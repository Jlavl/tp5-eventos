import DBConfig from './../configs/dbConfig.js';
import pkg from 'pg'
const { Client, Pool } = pkg;

export default class ProvinceRepository { // Traer todas las provincias - || FUNCIONA ||
    getAllAsync = async () => {
        let returnArray = null;
        const client = new Client(DBConfig);
        try {
            await client.connect();
            const sql = `SELECT * FROM provinces`;
            const result = await client.query(sql);
            await client.end();
            returnArray = result.rows;
        } catch (error) {
            console.log(error);
        }
        return returnArray;
    }
    getByIdAsync = async(id) => { // Conseguir provincia por ID - || FUNCIONA ||
        let returnArray = null;
        const client = new Client(DBConfig);

        try{
            await client.connect();
            const sql = `SELECT * FROM provinces WHERE id = $1`;
            const values = [id]
            const result = await client.query(sql, values);
            await client.end();
            returnArray = result.rows;
        } catch (error) {
            console.log(error);
        }
        return returnArray;
    }
    
    getLocationById = async(id_location) => { // Conseguir localizacion provincia - || NO FUNCIONA, id/location NO FUNCIONA ||
        let returnArray = null;
        const client = new Client(DBConfig);

        try{
            await client.connect();
            const sql = `SELECT * from locations WHERE id_province = $1`;
            const values = [id]
            const result = await client.query(sql, values);
            await client.end();
            returnArray = result.rows;
        } catch (error) {
            console.log(error);
        }
        return returnArray;
    }
    createAsync = async(entity) => {
        
    }
    updateAsync = async(entity) => {/*hacer*/}
    deleteByIdAsync = async(id) => {/*hacer*/}   
}