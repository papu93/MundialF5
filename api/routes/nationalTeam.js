var express = require('express');
var nationalTeamController = require('../controllers/nationalTeam');

var api = express.Router();

api.get('/getNationalTeams/:confederation?',nationalTeamController.getNationalTeams);
api.get('/getNationalTeam/:id',nationalTeamController.getNationalTeam);
api.post('/saveNationalTeam',nationalTeamController.saveNationalTeam);
api.delete('/deleteNationalTeam/:id',nationalTeamController.deleteNationalTeam);

module.exports = api;