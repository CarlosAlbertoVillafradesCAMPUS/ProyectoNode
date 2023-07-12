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
export default class dtoProductoPost {
    constructor(nombre, descripcion, estado, created_by, update_by) {
        this.nombre = nombre;
        this.descripcion = descripcion;
        this.estado = estado;
        this.created_by = created_by;
        this.update_by = update_by;
    }
}
__decorate([
    Expose({ name: "nombre_producto" }),
    Transform(({ value }) => {
        if (/^[A-Z-a-z\s]+$/.test(value))
            return value;
        else
            throw { status: 400, message: "Error en los parametros de entradas" };
    }, { toClassOnly: true }),
    __metadata("design:type", String)
], dtoProductoPost.prototype, "nombre", void 0);
__decorate([
    Expose({ name: "descripcion_producto" }),
    Transform(({ value }) => {
        if (/^[A-Z-a-z\s]+$/.test(value))
            return value;
        else
            throw { status: 400, message: "Error en los parametros de entradas" };
    }, { toClassOnly: true }),
    __metadata("design:type", String)
], dtoProductoPost.prototype, "descripcion", void 0);
__decorate([
    Expose({ name: "estado_producto" }),
    Transform(({ value }) => {
        if (Math.floor(value) && typeof value == "number")
            return Math.floor(value);
        else
            throw { status: 400, message: "Error en los parametros de entrada" };
    }, { toClassOnly: true }),
    __metadata("design:type", Number)
], dtoProductoPost.prototype, "estado", void 0);
__decorate([
    Expose({ name: "creado_por" }),
    Transform(({ value }) => {
        if (value === null) {
            return value;
        }
        else {
            if ((Math.floor(value)) && typeof value == "number")
                return Math.floor(value);
            else
                throw { status: 400, message: "Error en los parametros de entradas" };
        }
    }, { toClassOnly: true }),
    __metadata("design:type", Number)
], dtoProductoPost.prototype, "created_by", void 0);
__decorate([
    Expose({ name: "modificado_por" }),
    Transform(({ value }) => {
        if (value === null) {
            return value;
        }
        else {
            if ((Math.floor(value)) && typeof value == "number")
                return Math.floor(value);
            else
                throw { status: 400, message: "Error en los parametros de entradas" };
        }
    }, { toClassOnly: true }),
    __metadata("design:type", Number)
], dtoProductoPost.prototype, "update_by", void 0);
