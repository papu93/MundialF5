var mongoose = require('mongoose');
var nationalTeamSchema = new mongoose.Schema({
  _id: Number,
  name: String,
  confederation: String,
  image: String
}, { collection: 'nationalTeam' });

module.exports  = mongoose.model('nationalTeam', nationalTeamSchema);
