# 🐉 El Calabozo Completo

API REST para gestionar criaturas de un calabozo utilizando **Node.js, Express y Supabase**.

El proyecto comenzó como una API capaz de consultar criaturas almacenadas en Supabase. En este desafío se amplió para permitir realizar las operaciones principales sobre los registros: **crear, consultar, actualizar y eliminar criaturas**.

---

## 🛠️ Tecnologías utilizadas

* **Node.js**
* **Express**
* **Supabase**
* **JavaScript**
* **dotenv**
* **pnpm**
* **REST Client** para probar los endpoints

El proyecto utiliza Express 5 y `@supabase/supabase-js` para comunicarse con la base de datos.

---

## 📁 Estructura del proyecto

```text
M7L1-task/
│
├── config/
│   └── supabaseClient.js
│
├── routes/
│   └── criaturas.js
│
├── server.js
├── test.http
├── package.json
└── pnpm-lock.yaml
```

La estructura separa la configuración de Supabase de las rutas de la API.

---

## 🔐 Configuración de Supabase

La conexión con Supabase se encuentra en:

```text
config/supabaseClient.js
```

Este archivo obtiene las credenciales mediante variables de entorno:

```env
SUPABASE_URL=tu_url_de_supabase
SUPABASE_KEY=tu_key_de_supabase
```

Las credenciales no se escriben directamente en el código. El archivo `supabaseClient.js` utiliza `process.env` para obtenerlas y crea el cliente de Supabase.

### ⚠️ Importante

El archivo `.env` debe mantenerse fuera del repositorio y agregarse al `.gitignore`.

---

# 🚀 Instalación

### 1. Instalar las dependencias

Desde la carpeta del proyecto:

```bash
pnpm install
```

### 2. Crear el archivo `.env`

Crear un archivo llamado:

```text
.env
```

y agregar:

```env
SUPABASE_URL=tu_url_de_supabase
SUPABASE_KEY=tu_key_de_supabase
```

### 3. Iniciar el servidor

```bash
node server.js
```

El servidor utiliza el puerto definido en `PORT` y, si no existe, utiliza el puerto `3000`.

También puede ejecutarse con nodemon si se encuentra configurado en el entorno de desarrollo.

---

# 📡 Endpoints

La API utiliza como ruta base:

```text
/criaturas
```

Las rutas están montadas desde `server.js` mediante:

```js
app.use('/criaturas', criaturasRoutes);
```

---

## 🔹 GET /criaturas

Obtiene todas las criaturas almacenadas en Supabase.

### Petición

```http
GET http://localhost:3000/Criaturas
```

### Resultado

Devuelve las criaturas almacenadas en la tabla correspondiente de Supabase.

---

## 🔹 POST /criaturas

Crea una nueva criatura.

### Petición

```http
POST http://localhost:3000/Criaturas
Content-Type: application/json
```

### Body

```json
{
    "nombre": "Dragón",
    "tipo": "Fuego",
    "poder": 100,
    "capturada": false
}
```

El endpoint recibe los datos de la criatura y los inserta en Supabase.

---

## 🔹 PUT /criaturas/:id

Actualiza una criatura existente utilizando su `id`.

### Petición

```http
PUT http://localhost:3000/Criaturas/5
Content-Type: application/json
```

### Body

```json
{
    "poder": 200
}
```

En este ejemplo se actualiza el poder de la criatura cuyo `id` es `5`.

Si el identificador no existe, la API debe devolver un error indicando que la criatura no fue encontrada.

---

## 🔹 DELETE /criaturas/:id

Elimina una criatura utilizando su `id`.

### Petición

```http
DELETE http://localhost:3000/Criaturas/5
```

Esto elimina de Supabase la criatura correspondiente al `id` indicado.

---

## ⭐ GET /criaturas/:id

Permite obtener una única criatura mediante su identificador.

### Petición

```http
GET http://localhost:3000/Criaturas/5
```

Si la criatura existe, devuelve sus datos.

Si no existe, devuelve un mensaje indicando que la criatura no fue encontrada.

---

# 🧪 Pruebas

El proyecto incluye un archivo:

```text
test.http
```

que permite probar directamente los endpoints utilizando una extensión como **REST Client** en Visual Studio Code.

Actualmente contiene pruebas para:

```http
GET /Criaturas
POST /Criaturas
PUT /Criaturas/5
DELETE /Criaturas/5
GET /Criaturas/5
```

### Ejemplo de flujo

Primero se pueden consultar las criaturas:

```http
GET http://localhost:3000/Criaturas
```

Después crear una nueva:

```http
POST http://localhost:3000/Criaturas
Content-Type: application/json

{
    "nombre": "Dragón",
    "tipo": "Fuego",
    "poder": 100,
    "capturada": false
}
```

Luego actualizarla:

```http
PUT http://localhost:3000/Criaturas/5
Content-Type: application/json

{
    "poder": 200
}
```

Y finalmente eliminarla:

```http
DELETE http://localhost:3000/Criaturas/5
```

---

# 🗄️ Base de datos

La API trabaja con una tabla llamada:

```text
criaturas
```

Cada criatura contiene información como:

| Campo       | Descripción                  |
| ----------- | ---------------------------- |
| `id`        | Identificador de la criatura |
| `nombre`    | Nombre de la criatura        |
| `tipo`      | Tipo de criatura             |
| `poder`     | Nivel de poder               |
| `capturada` | Indica si fue capturada      |

---

# 🔄 Operaciones CRUD

El proyecto implementa las cuatro operaciones principales de una API REST:

| Método HTTP | Operación | Función              |
| ----------- | --------- | -------------------- |
| `GET`       | Read      | Consultar criaturas  |
| `POST`      | Create    | Crear criaturas      |
| `PUT`       | Update    | Actualizar criaturas |
| `DELETE`    | Delete    | Eliminar criaturas   |

Esto permite gestionar completamente los registros de criaturas desde la API.

---

# 🧠 Conceptos practicados

Durante el desafío se practicaron:

* Creación de endpoints REST.
* Uso de Express.
* Conexión entre Node.js y Supabase.
* Operaciones CRUD.
* Uso de parámetros de ruta (`:id`).
* Inserción de registros.
* Actualización de registros.
* Eliminación de registros.
* Consulta de registros individuales.
* Manejo de errores.
* Variables de entorno.
* Separación entre servidor, configuración y rutas.

---

# 🐉 Resultado final

La API dejó de ser únicamente de lectura y pasó a permitir administrar completamente las criaturas del calabozo.

Ahora es posible:

```text
👀 Consultar criaturas
       ↓
🐲 Crear nuevas criaturas
       ↓
⚔️ Actualizar su poder o información
       ↓
💀 Eliminar criaturas
```

El proyecto demuestra el uso de **Node.js + Express + Supabase** para construir una API REST conectada a una base de datos real.
