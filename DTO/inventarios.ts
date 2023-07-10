import {Expose, Type, Transform} from "class-transformer";

export class inventarios{
    @Expose({name: "producto"}) //en el expose es como me llegan los datos y en el contructor va la transformacion al nombre de las columnas de como las voy a utilizar ne el backend
    @Transform(({value}) => parseInt(value), {toClassOnly:true})  //lod decoradores como transform o type siempre van arriba de las variables, transform es solo para numeros
    id_producto:number;
    @Expose({name: "bodega"})
    @Transform(({value}) => parseInt(value), {toClassOnly:true})
    id_bodega:number;
    @Expose({name: "cant"})
    @Transform(({value}) => parseInt(value), {toClassOnly:true}) //dependiendo del dato numerico se debe modificar el parseint o parsefloat
    cantidad:number;
    constructor(id_producto: number, id_bodega: number, cantidad: number){
        this.id_producto = id_producto;
        this.id_bodega = id_bodega;
        this.cantidad = cantidad;
    }
}