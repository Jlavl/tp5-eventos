//
/* mandar al request nuestro USER
router.post('/:id/enrollment', AuthenticationMiddleware.AuthMiddleware,any)
//let entity = req.body;
//let respuesta;
//req.user.Firstname

entity.id_user =
ValidacionesHelper.getIntegerPositiveZeroOrDefault(req.user.id,0);                                                                                                                                                                                              r

*/
import express from "express";
import cors from "cors";

import config from "./src/configs/dbConfig.js";
import pkg from 'pg';
import ProvinceRouter from "./src/controllers/province-controller.js"

const app = express();
const port = 3000; // ( http://localhost:3000 )
const { Client} = pkg;
// https://node-postgres.com/apis/client
const client = new Client(config);
await client.connect();



//await client.end();

app.use(cors());
app.use(express.json());
//app.use('/front', express.static('public'));
app.use('/api/province', ProvinceRouter);
app.get('/', (req,res) => {
    res.status(200).send('hola')
});

//app.use('/api/user', UserRouter);
//app.use(unknownEndpoint);
app.listen(port, () => {
    console.log(`"server" Listening on port ${port}`);
})