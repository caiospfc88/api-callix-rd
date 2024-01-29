module.exports = function(app){
  app.get('/campanhas', function(req,res){
      app.api.controllers.campanhasControllers.retornaArrayCampanha(app,req,res);
  });
};