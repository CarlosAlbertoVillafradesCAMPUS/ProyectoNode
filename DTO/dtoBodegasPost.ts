import { Expose, Type, Transform } from "class-transformer";

export default class dtoBodegasPost{

  @Expose({name: "nombre_bodega"})
  @Transform(({value}) => {if(/^[a-z-A-Z]+$/.test(value)) return value;
   else throw {status:400, message:"Error en los parametros de entradas"};}, {toClassOnly:true}) 
  nombre:string;

  @Expose({name: "responsable"}) 
  @Transform(({value}) => {
        if((Math.floor(value)) && typeof value == "number")
        return Math.floor(value);
        else throw {status:400, message:"Error en los parametros de entradas"};
    }, {toClassOnly:true}) 
  id_responsable:number;
  @Expose({name: "estado_bodega"})  
  @Transform(({value}) => {
        if((Math.floor(value)) && typeof value == "number")
        return Math.floor(value);
        else throw {status:400, message:"Error en los parametros de entradas"};
    }, {toClassOnly:true}) 
  estado:number;
  @Expose({name: "creado_por"}) 
  @Transform(({value}) => {
    if(value === null){
      return value;
    }else{
      if((Math.floor(value)) && typeof value == "number")
        return Math.floor(value);
      else throw {status:400, message:"Error en los parametros de entradas"};
    }
    }, {toClassOnly:true}) 
  created_by:number;

  @Expose({name: "modificado_por"}) 
  @Transform(({value}) => {
    if(value === null){
      return value;
    }else{
      if((Math.floor(value)) && typeof value == "number")
        return Math.floor(value);
      else throw {status:400, message:"Error en los parametros de entradas"};
    }
    }, {toClassOnly:true}) 
  update_by:number;

  constructor(nombre:string, id_responsable:number, estado:number, created_by:number, update_by:number){
      this.nombre = nombre;
      this.estado = estado;
      this.id_responsable = id_responsable;
      this.created_by = created_by;
      this.update_by = update_by;
  }
}