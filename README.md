# MundialF5

Una aplicacion web que contiene selecciones y 5 jugadores por cada una de ellas. Da la posibilidad de realizar operaciones CRUD sobre ambos esquemas.

## MongoDB

Para importar los datasets ejecutar los siguientes comandos, en el orden mencionado:
```bash 
$ mongoimport --db mundialF5 --collection nationalTeam --drop --file YOUR_ROUTE_PROJECT/datasets/national-teams-dataset.json
$ mongoimport --db mundialF5 --collection player --drop --file YOUR_ROUTE_PROJECT/datasets/players-dataset.json
```

## API REST

* Para el server de la API REST utilizar los siguiente comandos:
```bash 
$ cd YOUR_ROUTE_PROJECT/api
$ npm start
```

Finalmente realizar peticiones a `http://localhost:3977/` utilizando la siguiente API:

### Selecciones

Metodo | URL | Descripcion
-------|-----|------------
GET | /getNationalTeams/:confederation? | Devuelve las selecciones pertenecientes al parametro confederation, si el mismo no es pasado devuelve todas las selecciones.
GET | /getNationalTeam/:id | Devuelve la seleccion especificada en el parametro id.
POST | /saveNationalTeam | Almacena una seleccion.
DELETE | /deleteNationalTeam/:id | Borra la seleccion con el id especificado. 

### Jugadores

Metodo | URL | Descripcion
-------|-----|------------
GET | /getPlayer/:id | Devuelve el jugador con el id especificado.
POST | /savePlayer | Almacena un jugador en la base de datos.
PUT | /updatePlayer/:id | Modifica el jugador con el id especificado.
DELETE | /deletePlayer/:id | Elimina el jugador con el id especificado. 
GET | /getPlayers/:nationalTeamId? | Devuelve los jugadores de una seleccion con el id especificada, y en caso de no proporcionarla devuelve todos los jugadores.

## Angular2

* Para el server de Angular2 utilizar los siguiente comandos:
```bash 
$ cd YOUR_ROUTE_PROJECT/client
$ ng serve
```
Finalmente navegar a `http://localhost:4200/`.