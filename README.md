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

- `http://"hostname":"port"/bodegas/` para las rutas relacionadas con bodegas.

- `http://"hostname":"port"/productos/` para las rutas relacionadas con productos.

- `http://"hostname":"port"/inventarios/` para las rutas relacionadas con inventarios.

  

# Endpoints de Bodegas

### GET:  `http://"hostname":"port"/bodegas/`

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

### POST:  `http://"hostname":"port"/bodegas/`

Este endpoint permite agregar una nueva bodega.

**Parámetros de entrada:**

- `nombre_bodega` : Nombre de la bodega (string).
- `responsable` : ID del responsable de la bodega (number).
- `estado_bodega`: Estado de la bodega. (number)
- `creado_por` : ID del usuario que creó la bodega. (number / null)
- `modificado_por` : ID del usuario que actualizó la bodega. (number / null)

**Ejemplo:**

```js
{
    "nombre_bodega":"BodegaVilla", 
    "responsable":16,
    "estado_bodega":1,
    "creado_por":16,
    "modificado_por":null,
}
```

## Importante

si el valor el valor es `null`, tener en cuenta que se debe escribir en minuscula.


# Endpoints de Productos

### GET `http://"hostname":"port"/productos/`

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

### POST `http://"hostname":"port"/productos/`

Este endpoint permite agregar un nuevo producto a la tabla de productos y a su vez asignamos
una cantidad inicial del producto en la tabla inventarios en una de las bodegas
por defecto.

**Parámetros de entrada:**

- `nombre_producto` : Nombre del producto. (string)
- `descripcion_producto` : Descripción del producto. (string)
- `estado_producto`: Estado del producto. (number)
- `creado_por`: ID del usuario que creó el producto. (number / null)
- `modificado_por`: ID del usuario que actualizó el producto. (number / null)

**Ejemplo de los datos a pasar:**

```js
{
  "nombre_producto": "CamisasVilla",
  "descripcion_producto": "super camisas",
  "estado_producto": 1,
  "creado_por": 19,
  "modificado_por": null
}
```

## Importante

No colocar el id_bodega porque el codigo ya lo agrega por defecto.



# EndPoints Inventarios

### 1. POST: `http://"hostname":"port"/inventarios/`

Este endpoint permite ingresar o modificar un inventario de producto en una bodega. Se espera recibir los siguientes parámetros en el cuerpo de la solicitud:

- `producto`: ID del producto. (number)
- `bodega`: ID de la bodega. (number)
- `cant`: Cantidad del producto en el inventario. (number)

##### Ejemplo de solicitud:

```js
{
  "producto": 123,
  "bodega": 456,
  "cant": 10
}
```

- Si el producto ya existe en el inventario de la bodega especificada, la cantidad se actualizará sumando la cantidad proporcionada.

- Si el producto no existe en el inventario de la bodega especificada, se creará una nueva entrada en el inventario con la cantidad proporcionada.

  

### 2. PUT: `http://"hostname":"port"/inventarios/transladar`

Este endpoint permite trasladar una cantidad de producto de una bodega a otra, modificando sus inventarios y creando un historial del traspaso . Se espera recibir los siguientes parámetros en el cuerpo de la solicitud:

- `producto`: ID del producto a trasladar. (number)
- `bodega_origen`: ID de la bodega de origen. (number)
- `bodega_destino`: ID de la bodega de destino. (number)
- `cant`: Cantidad del producto a trasladar. (number)

##### Ejemplo de solicitud:

```
{
  "producto": 123,
  "bodega_origen": 456,
  "bodega_destino": 789,
  "cant": 5
}
```

El endpoint realiza las siguientes operaciones:

- Verifica si la bodega de origen tiene suficiente cantidad del producto para el traslado.
- Si la cantidad es suficiente, resta la cantidad trasladada del inventario de la bodega de origen.
- Si la bodega de destino ya tiene el producto en el inventario, suma la cantidad trasladada al inventario existente.
- Si la bodega de destino no tiene el producto en el inventario, crea una nueva entrada en el inventario con la cantidad trasladada.
- Registra un historial de traslado en la tabla de historiales.



# Contacto

**Nombre**: Carlos Villafrades Pinilla.

**Email**: cavillafrades@gmail.com