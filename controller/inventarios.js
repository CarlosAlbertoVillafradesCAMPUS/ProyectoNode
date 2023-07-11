var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Expose, Transform } from "class-transformer";
export class inventarios {
    constructor(id_producto, id_bodega, cantidad) {
        this.id_producto = id_producto;
        this.id_bodega = id_bodega;
        this.cantidad = cantidad;
    }
}
__decorate([
    Expose({ name: "producto" }) //en el expose es como me llegan los datos y en el contructor va la transformacion al nombre de las columnas de como las voy a utilizar ne el backend
    ,
    Transform(({ value }) => {
        if ((Math.floor(value)) && typeof value == "number")
            return Math.floor(value);
        else
            throw { status: 400, message: "Error en los parametros de entradas" };
    }, { toClassOnly: true }),
    __metadata("design:type", Number)
], inventarios.prototype, "id_producto", void 0);
__decorate([
    Expose({ name: "bodega" }),
    Transform(({ value }) => {
        if ((Math.floor(value)) && typeof value == "number")
            return Math.floor(value);
        else
            throw { status: 400, message: "Error en los parametros de entrada" };
    }, { toClassOnly: true }),
    __metadata("design:type", Number)
], inventarios.prototype, "id_bodega", void 0);
__decorate([
    Expose({ name: "cant" }),
    Transform(({ value }) => {
        if ((Math.floor(value)) && typeof value == "number")
            return Math.floor(value);
        else
            throw { status: 400, message: "Error en los parametros de entradas" };
    }, { toClassOnly: true }),
    __metadata("design:type", Number)
], inventarios.prototype, "cantidad", void 0);
