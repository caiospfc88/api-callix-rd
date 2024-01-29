module.exports = async function(app){
  app.get('/chamadasNaoCompletadas', function(req,res){  
    app.api.controllers.chamadasNaoCompletadasController.retornaArrayChamadasNaoCompletadas(app,req,res);
  });
};