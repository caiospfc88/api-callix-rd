module.exports = async function(app){
    app.get('/qualificacoes', function(req,res){  
      app.api.controllers.qualificacoesController.retornaArrayQualificacoes(app,req,res);
    });
};