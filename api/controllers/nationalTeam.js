let NationalTeam = require('../models/nationalTeam');
let mongoose = require('mongoose');

function saveNationalTeam(req,res){
  let nationalTeam = new NationalTeam();

  let params = req.body;
  nationalTeam.name = params.name.toLowerCase();
  nationalTeam.confederation = params.confederation.toLowerCase();

  nationalTeam.save(function(err,nationalTeam){
    if(err){
      res.status(500).send({message: 'No se ha guardado el national team'+'\n'+err});
    }else{
      if(!nationalTeam){
        res.status(404).send({message: 'No se ha guardado el national team'});
      }else{
        res.status(200).send({nationalTeam: nationalTeam});
      }
    }
  });
}

function getNationalTeams(req,res) {
  let find;
  let confederationName = req.params.confederation;
  if(!confederationName){ //Sacar todos las selecciones
    find = NationalTeam.find({}).sort('name');
  }else{ 	//Sacar las selecciones de esa confederacion
    find = NationalTeam.find({confederation: confederationName}).sort('name');
  }
  find.exec(function(err,nationalTeams) {
    if (err) {
      res.status(500).send({message: 'Error al buscar las confederaciones'});
    } else {
      if (!nationalTeams) {
        res.status(404).send({message: 'No hay selecciones'});
      } else {
        res.status(200).send({nationalTeams});
      }
    }
  });
}

function deleteNationalTeam(req , res) {
  let nationalTeamId = req.params.id;

  NationalTeam.findByIdAndRemove(nationalTeamId, function(err,nationalTeamRemoved){
    if(err){
      res.status(500).send({message: 'Error al eliminar el national team'+'\n'+err});
    }else{
      if(!nationalTeamRemoved){
        res.status(404).send({message: 'El national team no ha sido eliminado'});
      }else {
        res.status(200).send({nationalTeam: nationalTeamRemoved});
      }
    }
  });
}

module.exports = {
  getNationalTeams,
  saveNationalTeam,
  deleteNationalTeam
}
