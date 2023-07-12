import "reflect-metadata";
import {plainToClass} from "class-transformer";
import dtoProductoPost from "../controller/dtoProductoPost.js"

const productoPost = (req,res,next) => {
    try {
        let data = plainToClass(dtoProductoPost, req.body, {excludeExtraneousValues:true});
          req.body = data;
          next();
      } catch (error) {
        res.status(error.status).send(error.message)
      }
};

export default productoPost;