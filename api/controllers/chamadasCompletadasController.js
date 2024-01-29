require('dotenv').config();
const token = process.env.TOKEN_CALLIX;
const axios = require("axios");

let dados = [];

module.exports.retornaArrayChamadas = async function (app,req,res,idCampanha,dti,dtf){
    
      /*let idCampanha = req.query.id;
      let dti = req.query.dth_inicial;
      let dtf = req.query.dth_final;*/
  
  const options = {
        "method": "GET",
        "hostname": "groscon.callix.com.br",
        "port": null,
        "path": "/api/v1/campaign_completed_calls?filter[started_at]="+dti+"T00:00:00.000Z,"+dtf+"T23:59:59.999Z&filter[campaign]="+ idCampanha,
        "headers": {
          "Content-Type": "application/json",
          "Authorization": token
        }
    };

    await axios.request(options).then(function (response) {
      //console.log(response.data);
    dados = response.data.data;
      
      
    }).catch(function (error) {
      console.error(error);
    });
    console.log(dados[10]);
    
    app.res.send(dados);
    
};
