import dotenv from "dotenv";
import express from "express";
import storageBodegas from "./routers/bodegas.js";
import storageProductos from "./routers/productos.js";


dotenv.config();
let appExpress = express();

appExpress.use(express.json());
appExpress.use("/bodegas", storageBodegas);
appExpress.use("/productos", storageProductos);


let config = JSON.parse(process.env.MY_CONFIG)
appExpress.listen(config, ()=>console.log(`http://${config.hostname}:${config.port}`));
