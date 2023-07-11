import {Expose, Type, Transform} from "class-transformer";

export class inventarios{
    @Expose({name: "producto"}) //en el expose es como me llegan los datos y en el contructor va la transformacion al nombre de las columnas de como las voy a utilizar ne el backend
    @Transform(({value}) => {
        if((Math.floor(value)) && typeof value == "number")
        return Math.floor(value);
        else throw {status:400, message:"Error en los parametros de entradas"};
    }, {toClassOnly:true})  
    id_producto:number;
    @Expose({name: "bodega"})
    @Transform(({value}) => {
        if((Math.floor(value)) && typeof value == "number")
        return Math.floor(value);
        else throw {status:400, message:"Error en los parametros de entrada"};
    }, {toClassOnly:true})
    id_bodega:number;
    @Expose({name: "cant"})
    @Transform(({value}) => {
        if((Math.floor(value)) && typeof value == "number")
        return Math.floor(value);
        else throw {status:400, message:"Error en los parametros de entradas"};
    }, {toClassOnly:true})
    cantidad:number;
    constructor(id_producto: number, id_bodega: number, cantidad: number){
        this.id_producto = id_producto;
        this.id_bodega = id_bodega;
        this.cantidad = cantidad;
    }
}