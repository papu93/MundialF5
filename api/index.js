var mongoose = require('mongoose');
var app = require('./app');
var port = process.env.Port || 3977;

mongoose.connect('mongodb://localhost:27017/mundialF5',function(err, res) {
  if(err) {
    throw err;
  }else{
    console.log("La conexion a la base de datos esta funcionando correctamente...");

    app.listen(port,function() {
      console.log("Servidor del api rest escuchando en http://localhost:"+port);
    })
  }
})
