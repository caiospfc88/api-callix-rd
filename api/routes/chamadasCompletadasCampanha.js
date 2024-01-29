module.exports = async function(app){
  app.get('/chamadasCompletadasCampanha', function(req,res){
      /*let idCampanha = req.query.id || 0;
      let dti = req.query.dth_inicial;
      let dtf = req.query.dth_final;*/
      console.log(app)
      app.api.controllers.chamadasCompletadasController.retornaArrayChamadas(app,req,res,idCampanha,dti,dtf);  
  });
};