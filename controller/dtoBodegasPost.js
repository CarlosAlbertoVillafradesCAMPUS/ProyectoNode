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
export default class dtoBodegasPost {
    constructor(nombre, id_responsable, estado, created_by, update_by) {
        this.nombre = nombre;
        this.estado = estado;
        this.id_responsable = id_responsable;
        this.created_by = created_by;
        this.update_by = update_by;
    }
}
__decorate([
    Expose({ name: "nombre_bodega" }),
    Transform(({ value }) => {
        if (/^[a-z-A-Z]+$/.test(value))
            return value;
        else
            throw { status: 400, message: "Error en los parametros de entradas" };
    }, { toClassOnly: true }),
    __metadata("design:type", String)
], dtoBodegasPost.prototype, "nombre", void 0);
__decorate([
    Expose({ name: "responsable" }),
    Transform(({ value }) => {
        if ((Math.floor(value)) && typeof value == "number")
            return Math.floor(value);
        else
            throw { status: 400, message: "Error en los parametros de entradas" };
    }, { toClassOnly: true }),
    __metadata("design:type", Number)
], dtoBodegasPost.prototype, "id_responsable", void 0);
__decorate([
    Expose({ name: "estado_bodega" }),
    Transform(({ value }) => {
        if ((Math.floor(value)) && typeof value == "number")
            return Math.floor(value);
        else
            throw { status: 400, message: "Error en los parametros de entradas" };
    }, { toClassOnly: true }),
    __metadata("design:type", Number)
], dtoBodegasPost.prototype, "estado", void 0);
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
], dtoBodegasPost.prototype, "created_by", void 0);
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
], dtoBodegasPost.prototype, "update_by", void 0);
