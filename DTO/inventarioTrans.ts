import { Expose, Transform, Type } from "class-transformer";

export class inventarioTrans{
    @Expose({name: "producto"})
    @Transform(({value}) => {
        if((Math.floor(value)) && typeof value == "number")
        return Math.floor(value);
        else throw {status:400, message:"Error en los parametros de entradas"};
    }, {toClassOnly:true})
    id_producto:number;
    @Expose({name: "bodega_origen"})
    @Transform(({value}) => {
        if((Math.floor(value)) && typeof value == "number")
        return Math.floor(value);
        else throw {status:400, message:"Error en los parametros de entradas"};
    }, {toClassOnly:true})
    id_bodega_origen:number;
    @Expose({name:"bodega_destino"})
    @Transform(({value}) => {
        if((Math.floor(value)) && typeof value == "number")
        return Math.floor(value);
        else throw {status:400, message:"Error en los parametros de entradas"};
    }, {toClassOnly:true})
    id_bodega_destino:number;
    @Expose({name:"cant"})
    @Transform(({value}) => {
        if((Math.floor(value)) && typeof value == "number")
        return Math.floor(value);
        else throw {status:400, message:"Error en los parametros de entradas"};
    }, {toClassOnly:true})
    cantidad:number;
    constructor(id_producto:number, id_bodega_origen:number, id_bodega_destino:number, cantidad:number){
        this.id_producto = id_producto;
        this.id_bodega_origen = id_bodega_origen;
        this.id_bodega_destino = id_bodega_destino;
        this.cantidad = cantidad;
    }
}