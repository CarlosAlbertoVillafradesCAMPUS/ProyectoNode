import { inventarios } from "../controller/inventarios.js";
import { inventarioTrans } from "../controller/inventarioTrans.js";
import {plainToClass} from "class-transformer";

const inventarioPost = (req,res,next) => {
    try {
        let data = plainToClass(inventarios, req.body, {excludeExtraneousValues:true});
        if(Object.values(data).includes(NaN)) {
          res.send("Error en el DTO")
        }else{
          req.dataInventario = data;
          next();
        }
      } catch (error) {
        res.send("Error en el DTO")
      }
};

const inventarioTrasladar = (req, res, next) => {
  try {
    let data = plainToClass(inventarioTrans, req.body, {excludeExtraneousValues: true});
    if(Object.values(data).includes(NaN)) {
      res.send("Error en el DTO")
    }else {
      req.dataInventarioTransladar = data
      next()
    }
  } catch (error) {
    res.send("Error en el DTO")
  }
};

export {
  inventarioPost,
  inventarioTrasladar
}

