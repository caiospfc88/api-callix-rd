
module.exports = function(app){
  app.get('/campanhas', function(app,req,res){
      app.app.api.controllers.campanhasControllers.retornaArrayCampanha(app,req,res);
  });
};