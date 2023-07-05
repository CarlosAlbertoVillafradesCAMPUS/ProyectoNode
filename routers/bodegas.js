import dotenv from "dotenv";
import mysql from 'mysql2';
import {Router} from "express";

const storageBodegas = Router();

dotenv.config();
let con = undefined;

storageBodegas.use((req,res,next)=>{
    let my_conex = JSON.parse(process.env.MY_CONNECT);
    con = mysql.createPool(my_conex);
    next();
})

storageBodegas.get("/", (req,res)=>{
    con.query(
        /*sql*/`SELECT * FROM bodegas ORDER BY nombre ASC`,
        (err,data,fil)=>{
            res.send(JSON.stringify(data));
        }
    )
})

storageBodegas.post("/", (req, res) => {
    /* datos a ingresar en el body del thunder client. IMPORTANTE modificar el id para que no se repita
     {
        "id":86,
        "nombre":"BodegaJHONA", 
        "id_responsable":16,
        "estado":1,
        "created_by":16,
        "update_by":"",
        "created_at":"2022-06-02 15:33:48",
        "updated_at":"",
        "deleted_at":""
    } */

const {id, nombre, id_responsable, estado, created_by, update_by, created_at, updated_at, deleted_at} = req.body;
  con.query(
    /*sql*/ `INSERT INTO bodegas (id, nombre, id_responsable, estado, created_by, update_by, created_at, updated_at, deleted_at) VALUES (?,?,?,?,?,?,?,?,?)`,
    [id, nombre, id_responsable, estado, created_by, update_by, created_at, updated_at, deleted_at],

      (err, data, fil) => {
        if (err) {
          console.error(err);
          res.status(500).send("Error al agregar la bodega");
        } else {
          res.send("Agregado con éxito");
        }
      }
    );
  });

export default storageBodegas;