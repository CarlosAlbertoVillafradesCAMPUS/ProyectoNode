import "reflect-metadata";
import {plainToClass} from "class-transformer";
import dtoBodegasPost from "../controller/dtoBodegasPost.js";

const bodegaPost = (req,res,next) => {
    try {
        let data = plainToClass(dtoBodegasPost, req.body, {excludeExtraneousValues:true});
          req.body = data;
          next();
      } catch (error) {
        res.status(error.status).send(error.message)
      }
};

export default bodegaPost;