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
            const values = [id_location]
            const result = await client.query(sql, values);
            await client.end();
            returnArray = result.rows;
        } catch (error) {
            console.log(error);
        }
        return returnArray;
    }
    createAsync = async(entity) => {
        let returnArray = null;
        const client = new Client(DBConfig);

        try{
            await client.connect();
            const sql = `INSERT into provinces(id, name, full_name, latitude, longitude, display_order) Values ($1,$2,$3,$4,$5)`;
            const values = [id, name, full_name, latitude, longitude, display_order]
            const result = await client.query(sql, values);
            await client.end();
        } catch (error) {
            console.log(error);
        }
    }
    updateAsync = async(entity) => {
        let returnArray = null;
        const client = new Client(DBConfig);
        try{
            const sql = `Update provinces Set id=$1, name=$2, full_name=$3, latitude=$4, longitude=$5, display_order=$6`;
            const values = [entity.id, entity.name, entity.full_name, entity.latitude, entity.longitude, entity.display_order]
            returnArray = await pgHelper.requestCount(sql, values);
        } catch (error) {
            console.log(error);
        }
        return returnArray;
    }
    deleteByIdAsync = async(id) => {/*hacer*/}   
}