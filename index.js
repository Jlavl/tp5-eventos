//
/* mandar al request nuestro USER
router.post('/:id/enrollment', AuthenticationMiddleware.AuthMiddleware,any)
//let entity = req.body;
//let respuesta;
//req.user.Firstname

entity.id_user =
ValidacionesHelper.getIntegerPositiveZeroOrDefault(req.user.id,0);

*/
import config from "./src/configs/db.config";
import pkg from 'pg';
const { Client} = pkg;

// https://node-postgres.com/apis/client
const client = new Client(config);
await client.connect();

let sql = 'SELECT * from provinces';
let result = await client.query(sql);
await client.end();
// 'rows' es un array. rows[0] es el 1°er registro.
console.log(result.rows)