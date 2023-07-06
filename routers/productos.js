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

storageProductos.post("/", (req, res) => {

const {id, nombre, descripcion, estado, created_by, update_by, created_at, updated_at, deleted_at} = req.body;
  con.query(
    /*sql*/ `INSERT INTO productos (id, nombre, descripcion, estado, created_by, update_by, created_at, updated_at, deleted_at) VALUES(?,?,?,?,?,?,?,?,?)`,
    [id, nombre, descripcion, estado, created_by, update_by, created_at, updated_at, deleted_at],

      (err, data, fil) => {
        if (err) {
          console.error(err);
          res.status(500).send("Error al agregar el producto");
        } else {
          con.query(
            /*sql*/ `INSERT INTO inventarios (id, id_bodega, id_producto, cantidad, created_by, update_by, created_at, updated_at, deleted_at) VALUES(99, 11, ?, 103, 11, NULL, NULL, '2023-05-26 01:35:52', NULL)`,
            [id],
            (error, data, fil) => {
            if (error) {
                console.error(error);
                res.status(500).send("Error al agregar al inventario");
            } else {
                res.send("Agregado con exito")
            }
            }
          )
        }
      }
    );
  });

export default storageProductos;