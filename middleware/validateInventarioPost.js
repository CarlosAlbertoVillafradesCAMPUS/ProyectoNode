import { inventarios } from "../controller/inventarios.js";
import {plainToClass} from "class-transformer";

const validateInventarioPost = (req,res,next) =>{
    try {
        let data = plainToClass(inventarios, req.body, {excludeExtraneousValues:true});
        req.dataInventario = data;
        next();
      } catch (error) {
        res.send("Error en el DTO")
      }
}

export default validateInventarioPost;