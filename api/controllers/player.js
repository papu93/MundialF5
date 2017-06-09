let playerModel = require('../models/player');
let NationalTeam = require('../models/nationalTeam');
let mongoose = require('mongoose');


function getPlayer(req,res){
  //Busca un jugador dado un ID
  let playerId = req.params.id;

  playerModel.findById(playerId,function(err,player) {
    if(err){
      res.status(500).send({message: 'Error en la peticion'+'\n'+err});
    }else{
        if(!player){
          res.status(404).send({message:'El jugador no existe'});
        }else{
          res.status(200).send({player});
        }
    }
    });
}

function savePlayer(req,res){
  let player = new playerModel();

  let params = req.body;
  player.name = params.name;
  player.position = params.position;
  player.club = params.club;
  player.league = params.league;
  player.dateOfBirth = params.dateOfBirth;
  player.nationalTeam = params.nationalTeam;

  player.save(function(err,playerStored){
    if(err){
      res.status(500).send({message: 'No se ha guardado el player'+'\n'+err});
    }else{
      if(!playerStored){
        res.status(404).send({message: 'No se ha guardado el player'});
      }else{//88
        res.status(200).send({player: playerStored});
      }
    }
  });
}

function updatePlayer(req,res){
  let playerId = req.params.id;
  let update = req.body;

  playerModel.findByIdAndUpdate(playerId,update,{new:true},function(err,result){
    if(err){
      res.status(500).send({message: 'No se ha podido actualizar el player'+'\n'+err});
    }else{
      if(!result){
        res.status(404).send({message: 'No se ha actualizado el player'});
      }else{
        res.status(200).send({player: result});
      }
    }
  })

}

function deletePlayer(req,res){
  let playerId = req.params.id;

  playerModel.findByIdAndRemove(playerId, function(err,playerRemoved){
    if(err){
      res.status(500).send({message: 'Error al eliminar el jugador'+'\n'+err});
    }else{
      if(!playerRemoved){
        res.status(404).send({message: 'El jugador no ha sido eliminado'});
      }else {
        res.status(200).send({player: playerRemoved});
      }
    }
  });
}

function getPlayers(req, res) {
  let find;
  let nationalTeamId = req.params.nationalTeamId;
  if(!nationalTeamId){ //Sacar todos las selecciones
    find = playerModel.find({}).sort('name');
  }else{ 	//Sacar las selecciones de esa confederacion
    find = playerModel.find({nationalTeam: nationalTeamId}).sort('name');
  }
    find.populate({path: 'nationalTeam'}).exec(function(err,players){
      if(err){
        res.status(500).send({message: 'Error al buscar los jugadores'+'\n'+err});
      }else{
        if(!players){
          res.status(404).send({message: 'No hay jugadores'});
        }else{
          res.status(200).send({players});
        }
      }
    });
}

module.exports = {
  getPlayer,
  savePlayer,
  updatePlayer,
  deletePlayer,
  getPlayers
}
