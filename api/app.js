var express = require('express');
var bodyParser = require('body-parser');

var app = express();

//cargar RUTAS
//aca lo dirijimos dentro de la carpeta src
var player_routes = require('./routes/player');
var national_team_routes = require('./routes/nationalTeam');


app.use(bodyParser.urlencoded({extended:false})); //Necesario para q bodyParser ande
app.use(bodyParser.json()); //convierto a obj JSON lo que viene en las peticiones

//configurar cabeceras HTTP

//rutas base
app.use('/api',player_routes);
app.use('/api',national_team_routes);

module.exports = app;
