module.exports = async function(app){
  app.get('/chamadasCompletadasCampanha', function(req,res){
    app.api.controllers.chamadasCompletadasController.retornaArrayChamadas(app,req,res);  
  });
};