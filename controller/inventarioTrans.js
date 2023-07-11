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
export class inventarioTrans {
    constructor(id_producto, id_bodega_origen, id_bodega_destino, cantidad) {
        this.id_producto = id_producto;
        this.id_bodega_origen = id_bodega_origen;
        this.id_bodega_destino = id_bodega_destino;
        this.cantidad = cantidad;
    }
}
__decorate([
    Expose({ name: "producto" }),
    Transform(({ value }) => {
        if ((Math.floor(value)) && typeof value == "number")
            return Math.floor(value);
        else
            throw { status: 400, message: "Error en los parametros de entradas" };
    }, { toClassOnly: true }),
    __metadata("design:type", Number)
], inventarioTrans.prototype, "id_producto", void 0);
__decorate([
    Expose({ name: "bodega_origen" }),
    Transform(({ value }) => {
        if ((Math.floor(value)) && typeof value == "number")
            return Math.floor(value);
        else
            throw { status: 400, message: "Error en los parametros de entradas" };
    }, { toClassOnly: true }),
    __metadata("design:type", Number)
], inventarioTrans.prototype, "id_bodega_origen", void 0);
__decorate([
    Expose({ name: "bodega_destino" }),
    Transform(({ value }) => {
        if ((Math.floor(value)) && typeof value == "number")
            return Math.floor(value);
        else
            throw { status: 400, message: "Error en los parametros de entradas" };
    }, { toClassOnly: true }),
    __metadata("design:type", Number)
], inventarioTrans.prototype, "id_bodega_destino", void 0);
__decorate([
    Expose({ name: "cant" }),
    Transform(({ value }) => {
        if ((Math.floor(value)) && typeof value == "number")
            return Math.floor(value);
        else
            throw { status: 400, message: "Error en los parametros de entradas" };
    }, { toClassOnly: true }),
    __metadata("design:type", Number)
], inventarioTrans.prototype, "cantidad", void 0);
