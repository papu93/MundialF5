var mongoose = require('mongoose');
var nationalTeamSchema = new mongoose.Schema({
  name: String,
  confederation: String
}, { collection: 'nationalTeam' });

module.exports  = mongoose.model('nationalTeam', nationalTeamSchema);
