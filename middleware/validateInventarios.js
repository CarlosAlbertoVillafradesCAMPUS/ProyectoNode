import "reflect-metadata";
import { inventarios } from "../controller/inventarios.js";
import { inventarioTrans } from "../controller/inventarioTrans.js";
import {plainToClass} from "class-transformer";

const inventarioPost = (req,res,next) => {
        try {
          let data = plainToClass(inventarios, req.body, {excludeExtraneousValues:true});
          req.body = data;
          next();
        } catch (error) {
          res.status(error.status).send(error.message)
        }    
};

const inventarioTrasladar = (req, res, next) => {
    try {
      let data = plainToClass(inventarioTrans, req.body, {excludeExtraneousValues: true});
      req.body = data;
      next();
    } catch (error) {
      res.status(error.status).send(error.message)
    }
};

export {
  inventarioPost,
  inventarioTrasladar
}

