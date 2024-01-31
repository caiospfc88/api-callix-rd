module.exports = async function(app){
    app.get('/contatosDeCampanha/:id', function(req,res){  
        app.api.controllers.contatosDeCampanhaController.retornaArrayContatos(app,req,res);      
    });
};