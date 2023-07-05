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

export default storageBodegas;