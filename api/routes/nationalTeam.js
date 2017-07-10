var express = require('express');
var nationalTeamController = require('../controllers/nationalTeam');

var api = express.Router();

api.get('/getNationalTeams/:confederation?',nationalTeamController.getNationalTeams);
api.get('/getNationalTeam/:id',nationalTeamController.getNationalTeam);
api.post('/saveNationalTeam',nationalTeamController.saveNationalTeam);
api.put('/updateNationalTeam/:id',nationalTeamController.updateNationalTeam);
api.delete('/deleteNationalTeam/:id',nationalTeamController.deleteNationalTeam);

module.exports = api;
