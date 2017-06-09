var express = require('express');
var PlayerController = require('../controllers/player');

var api = express.Router();

api.get('/getPlayer/:id',PlayerController.getPlayer);
api.post('/savePlayer',PlayerController.savePlayer);
api.put('/updatePlayer/:id',PlayerController.updatePlayer);
api.delete('/deletePlayer/:id',PlayerController.deletePlayer);
api.get('/getPlayers/:nationalTeamId?',PlayerController.getPlayers);

module.exports = api;

