var mongoose = require('mongoose');
var schema = mongoose.Schema;

var playerSchema = new schema({ //asd
  name: String,
  position: String,
  club: String,
  league: String,
  dateOfBirth: String,
  nationalTeam: {type: Number, ref: 'nationalTeam'}
}, { collection: 'player' });

module.exports = mongoose.model('Player', playerSchema);
