import dotenv from "dotenv";
import mysql from 'mysql2';
import {Router} from "express";

const storageInventarios = Router();

dotenv.config();
let con = undefined;

storageInventarios.use((req,res,next)=>{
    let my_conex = JSON.parse(process.env.MY_CONNECT);
    con = mysql.createPool(my_conex);
    next();
})

storageInventarios.post("/", (req, res) => {

const {id_producto,id_bodega,cantidad} = req.body;

con.query(
    /*sql*/ `SELECT id, id_producto, id_bodega, cantidad FROM inventarios`,
    (err, data, fil) => {
        let respuesta = false;
        let cantidadTotal;
        let idMod;
        data.forEach((val,id) => {
            if (val.id_producto == id_producto && val.id_bodega == id_bodega) {
                respuesta = true;
                cantidadTotal = val.cantidad + cantidad;
                idMod = val.id
            }
        });

        if (respuesta == true) {
            con.query(
                /*sql*/ `UPDATE inventarios SET id_producto = ?, id_bodega = ?, cantidad = ? WHERE id = ?`,
                [id_producto,id_bodega,cantidadTotal,idMod],
                (error, data, fil) => {
                    if (error) {
                      console.error(error);
                      res.status(500).send("Error al modificar");
                    } else {
                      res.send("Modificado con exito");
                    }
                  }
            )
        } else{
          con.query(
            /*sql*/ `INSERT INTO inventarios (id, id_bodega, id_producto, cantidad, created_by, update_by, created_at, updated_at, deleted_at) VALUES (95, ?, ?, ?, 11, NULL, NULL, '2023-05-26 01:35:52', NULL)`,
            [id_bodega,id_producto,cantidad],
            (error, data, fil) => {
                if (error) {
                  console.error(error);
                  res.status(500).send("Error al ingresar el inventario");
                } else {
                  res.send("ingresado con exito");
                }
              }
        )
        }
    }
)
  });

export default storageInventarios;