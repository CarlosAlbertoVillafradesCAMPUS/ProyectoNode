import dotenv from "dotenv";
import mysql from 'mysql2';
import {Router} from "express";

const storageProductos = Router();

dotenv.config();
let con = undefined;

storageProductos.use((req,res,next)=>{
    let my_conex = JSON.parse(process.env.MY_CONNECT);
    con = mysql.createPool(my_conex);
    next();
})

storageProductos.get("/", (req,res)=>{
    con.query(
        /*sql*/`SELECT productos.id, productos.nombre, productos.descripcion, SUM(inventarios.cantidad) AS total FROM productos  INNER JOIN inventarios  ON productos.id = inventarios.id_producto GROUP BY productos.id, productos.nombre, productos.descripcion ORDER BY total DESC`,
        (err,data,fil)=>{
            res.send(JSON.stringify(data));
        }
    )
})

export default storageProductos;