import { Expose, Type, Transform } from "class-transformer";

export class dtoBodegasPost {
  @Expose({ name: "nombre_bodega" })
  @Type(() => String)
  nombre: string;

  @Expose({ name: "responsable" })
  @Transform(({ value }) => parseInt(value), { toClassOnly: true })
  id_responsable: number;

  @Expose({ name: "estado_Bodega" })
  @Transform(({ value }) => parseInt(value), { toClassOnly: true })
  estado: number;

  @Expose({ name: "creado_por" })
  @Transform(({ value }) => parseInt(value), { toClassOnly: true })
  created_by: number;

  @Expose({ name: "modificado_por" })
  @Transform(({ value }) => parseInt(value), { toClassOnly: true })
  update_by: number;

  @Expose({ name: "creado_a_las" })
  @Type(() => String)
  created_at: string;

  @Expose({ name: "modificado_a_las" })
  @Type(() => String)
  updated_at: string;

  @Expose({ name: "eliminado_a_las" })
  @Type(() => String)
  deleted_at: string;

  constructor(
    nombre: string,
    id_responsable: number,
    estado: number,
    created_by: number,
    update_by: number,
    created_at: string,
    updated_at: string,
    deleted_at: string
  ) {
    this.nombre = nombre;
    this.id_responsable = id_responsable;
    this.estado = estado;
    this.created_by = created_by;
    this.update_by = update_by;
    this.created_at = created_at;
    this.updated_at = updated_at;
    this.deleted_at = deleted_at;
  }
}