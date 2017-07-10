let NationalTeam = require('../models/nationalTeam');
let mongoose = require('mongoose');

function saveNationalTeam(req,res){
    let maxId;
    let find = NationalTeam.find({}).sort({_id:-1}).limit(1);
    find.exec(function(err,nationalTeams) {
        if (err) {
            console.log("Error al buscar el mayor ID");
        } else {
            if (!nationalTeams) {
                console.log("No hay selecciones ID=1");
                maxId = 1;
            } else {
                console.log("hola" +nationalTeams);
                maxId = nationalTeams[0]._id;

                let nationalTeam = new NationalTeam();

                let params = req.body;
                nationalTeam._id = maxId+1;
                nationalTeam.name = params.name.toLowerCase();
                nationalTeam.confederation = params.confederation.toLowerCase();
                nationalTeam.image = params.image;

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

function getNationalTeam(req , res) {
  let id = req.params.id;
  let findOne = NationalTeam.findOne({_id: id});
  findOne.exec(function(err,nationalTeam) {
    if (err) {
      res.status(500).send({message: 'Error al buscar la seleccion'});
    } else {
      if (!nationalTeam) {
        res.status(404).send({message: 'No hay selecciones'});
      } else {
        res.status(200).send({nationalTeam});
      }
    }
  });
}

function updateNationalTeam(req,res) {
    let nationalTeamId = req.params.id;
    let update = req.body;

    NationalTeam.findByIdAndUpdate(nationalTeamId, update, {new: true}, function (err, result) {
        if (err) {
            res.status(500).send({message: 'No se ha podido actualizar la seleccion' + '\n' + err});
        } else {
            if (!result) {
                res.status(404).send({message: 'No se ha actualizado la seleccion'});
            } else {
                res.status(200).send({nationalTeam: result});
            }
        }
    })
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
  updateNationalTeam,
  deleteNationalTeam,
  getNationalTeam
}
