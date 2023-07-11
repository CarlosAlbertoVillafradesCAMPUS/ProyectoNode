import {plainToClass} from "class-transformer";
import {dtoBodegasPost} from "../controller/dtoBodegasPost.js";
const bodegasPost = (req,res,next) => {
    try {
        let data = plainToClass(dtoBodegasPost, req.body, {excludeExtraneousValues:true});
          req.dataBodegas = data;
          next();
      } catch (error) {
        res.send("Error en el DTO")
      }
};

export { bodegasPost};