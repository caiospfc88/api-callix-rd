
module.exports = function(app){
  app.get('/campanhas', function(app,req,res1){
      const dados1 = app.app.api.controllers.campanhasControllers.retornaArrayCampanha(req,res1);
      console.log(dados1);  
  });
};