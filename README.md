# Aplicación con Node.js y Express.js

Esta es una aplicación que utiliza Node.js y Express.js para crear y  gestionar diferentes rutas relacionadas con la base de datos generada por el trainer.

## Requisitos previos

- Node.js instalado en tu máquina.

## Instalación

1. Clona este repositorio o descarga los archivos en tu máquina local.
2. Abre una terminal en el directorio raíz de la aplicación.
3. Ejecuta el siguiente comando para instalar las dependencias:

```
npm install
```

## Configuración

1. Asegurarse de tener creada la base de datos con sus respectivos registros. en la ruta **DB/db_prueba_backend_sql.sql** se encuentran los comandos para la creacion de la base de datos y la inserción de los registros.
2. Crea un archivo `.env` en el directorio raíz de la aplicación, teniendo como base el archivo `.env.example`
3. Dentro del archivo `.env` , define las siguientes variables de entorno:

```
MY_CONFIG={"hostname":"", "port":}
MY_CONNECT={"host":"", "user":"", "password":"", "database":"", "port":3306}
```

## Uso

Puedes probar diferentes rutas accediendo a:

- `http://"hostname":"port"/bodegas` para las rutas relacionadas con bodegas.

- `http://"hostname":"port"/productos` para las rutas relacionadas con productos.

- `http://"hostname":"port"/inventarios` para las rutas relacionadas con inventarios.

  

# Endpoints de Bodegas

### GET:  `http://"hostname":"port"/productos`

Este endpoint devuelve la lista de bodegas existentes en orden alfabético ascendente por nombre.

**Ejemplo:**

```js
[
  {
    "id": 1,
    "nombre": "Bodega A",
    "id_responsable": 123,
    "estado": 1,
    "created_by": 123,
    "update_by": null,
    "created_at": "2022-06-02 15:33:48",
    "updated_at": null,
    "deleted_at": null
  },
  {
    "id": 2,
    "nombre": "Bodega B",
    "id_responsable": 456,
    "estado": 1,
    "created_by": 456,
    "update_by": null,
    "created_at": "2022-06-03 09:21:15",
    "updated_at": null,
    "deleted_at": null
  },
  ...
]
```

### POST:  `http://"hostname":"port"/productos`

Este endpoint permite agregar una nueva bodega.

**Parámetros de entrada:**

- `id` : ID único de la bodega.
- `nombre` : Nombre de la bodega.
- `id_responsable` : ID del responsable de la bodega.
- `estado` ): Estado de la bodega.
- `created_by` : ID del usuario que creó la bodega.
- `update_by` : ID del usuario que actualizó la bodega.
- `created_at` : Fecha y hora de creación de la bodega en formato "YYYY-MM-DD HH:mm:ss".
- `updated_at` : Fecha y hora de actualización de la bodega en formato "YYYY-MM-DD HH:mm:ss".
- `deleted_at` : Fecha y hora de eliminación de la bodega en formato "YYYY-MM-DD HH:mm:ss".

**Ejemplo:**

```js
{
  "id": 86,
  "nombre": "BodegaVilla",
  "id_responsable": 16,
  "estado": 1,
  "created_by": 16,
  "update_by": null,
  "created_at": "2022-06-02 15:33:48",
  "updated_at": null,
  "deleted_at": null
}
```

## Importante

si el valor el valor es `null`, tener en cuenta que se debe escribir en minuscula y que el `id` no se puede repetir.



# Endpoints de Productos

### GET `http://"hostname":"port"/productos`

Este endpoint devuelve la lista de productos junto con la suma de la cantidad disponible en inventario para cada producto, ordenados de manera descendente según la cantidad total.

**Ejemplo:**

```
[
  {
    "id": 1,
    "nombre": "Producto A",
    "descripcion": "Descripción del Producto A",
    "total": 50
  },
  {
    "id": 2,
    "nombre": "Producto B",
    "descripcion": "Descripción del Producto B",
    "total": 30
  },
  ...
]
```

### POST `http://"hostname":"port"/productos`

Este endpoint permite agregar un nuevo producto a la tabla de productos y a su vez asignamos
una cantidad inicial del producto en la tabla inventarios en una de las bodegas
por defecto.

**Parámetros de entrada:**

- `id`: ID único del producto.
- `nombre` : Nombre del producto.
- `descripcion` : Descripción del producto.
- `estado`: Estado del producto.
- `created_by`: ID del usuario que creó el producto.
- `update_by`: ID del usuario que actualizó el producto.
- `created_at` : Fecha y hora de creación del producto en formato "YYYY-MM-DD HH:mm:ss".
- `updated_at`: Fecha y hora de actualización del producto en formato "YYYY-MM-DD HH:mm:ss".
- `deleted_at`: Fecha y hora de eliminación del producto en formato "YYYY-MM-DD HH:mm:ss".

**Ejemplo de los datos a pasar:**

```js
{
  "id": 1,
  "nombre": "Producto A",
  "descripcion": "Descripción del Producto A",
  "estado": 1,
  "created_by": 123,
  "update_by": null,
  "created_at": "2022-06-02 15:33:48",
  "updated_at": null,
  "deleted_at": null
}
```

## Importante

Tener en cuenta en el codigo, que al agregar por defecto un inventario del producto recien creado, se coloco un `id` de inventario manualmente y por defecto. entonces si quiere volver a ingresar otro producto debe modificar manualmente ese `id` en el insert  para que no se repita y no les salga error.



# EndPoints Inventarios

### 1. POST: `http://"hostname":"port"/inventarios`

Este endpoint permite ingresar o modificar un inventario de producto en una bodega. Se espera recibir los siguientes parámetros en el cuerpo de la solicitud:

- `id_producto`: ID del producto.
- `id_bodega`: ID de la bodega.
- `cantidad`: Cantidad del producto en el inventario.

##### Ejemplo de solicitud:

```js
{
  "id_producto": 123,
  "id_bodega": 456,
  "cantidad": 10
}
```

- Si el producto ya existe en el inventario de la bodega especificada, la cantidad se actualizará sumando la cantidad proporcionada.

- Si el producto no existe en el inventario de la bodega especificada, se creará una nueva entrada en el inventario con la cantidad proporcionada.

  ## Importante

  Tener en cuenta en el codigo, que al agregar un inventario, se coloca un `id` de inventario manualmente y por defecto. entonces si quiere volver a ingresar otro inventario debe modificar manualmente ese `id` en el insert de inventario para que no se repita y no les salga error.

  

### 2. PUT: `http://"hostname":"port"/inventarios/transladar`

Este endpoint permite trasladar una cantidad de producto de una bodega a otra, modificando sus inventarios y creando un historial del traspaso . Se espera recibir los siguientes parámetros en el cuerpo de la solicitud:

- `id_producto`: ID del producto a trasladar.
- `id_bodega_origen`: ID de la bodega de origen.
- `id_bodega_destino`: ID de la bodega de destino.
- `cantidad`: Cantidad del producto a trasladar.

##### Ejemplo de solicitud:

```
{
  "id_producto": 123,
  "id_bodega_origen": 456,
  "id_bodega_destino": 789,
  "cantidad": 5
}
```

El endpoint realiza las siguientes operaciones:

- Verifica si la bodega de origen tiene suficiente cantidad del producto para el traslado.
- Si la cantidad es suficiente, resta la cantidad trasladada del inventario de la bodega de origen.
- Si la bodega de destino ya tiene el producto en el inventario, suma la cantidad trasladada al inventario existente.
- Si la bodega de destino no tiene el producto en el inventario, crea una nueva entrada en el inventario con la cantidad trasladada.
- Registra un historial de traslado en la tabla de historiales.

## Importante

Tener en cuenta en el codigo, que al agregar un inventario, se coloca un `id` de inventario manualmente y por defecto. entonces si quiere volver a ingresar otro inventario debe modificar manualmente ese `id` en el insert de inventario para que no se repita y no les salga error. esto mismo tambien pasa con el id de historiales, estan puestos manualmente por defecto entonces hay que cambiarlos manualmente para que no bote errores a la hora de agregar otro.



# Contacto

**Nombre**: Carlos Villafrades Pinilla.

**Email**: cavillafrades@gmail.com