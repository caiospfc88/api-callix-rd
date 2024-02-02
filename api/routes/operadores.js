module.exports = async function(app){
    app.get('/operadores', function(req,res){  
      app.api.controllers.operadoresController.retornaArrayOperadores(app,req,res);
    });
};