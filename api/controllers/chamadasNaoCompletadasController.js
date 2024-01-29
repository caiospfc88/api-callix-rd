require('dotenv').config();
const token = process.env.TOKEN_CALLIX;
const axios = require("axios");

let dados = [];

module.exports.retornaArrayChamadasNaoCompletadas = async function (app,req,res){
    
      let idCampanha = req.query.id;
      let dti = req.query.dth_inicial;
      let dtf = req.query.dth_final;
  
      const options = {
        method: 'GET',
        url: "https://groscon.callix.com.br/api/v1/campaign_completed_calls?filter[started_at]="+dti+"T00:00:00.000Z,"+dtf+"T23:59:59.999Z&filter[campaign]="+idCampanha,
        headers: {
          "Content-Type": "application/json",
          Authorization: token
        }
      };
     
    console.log(options)
    await axios.request(options).then(function (response) {
      //console.log(response.data);
    dados = response.data.data;
      
      
    }).catch(function (error) {
      console.error(error);
    });
    console.log(dados);
    
    res.send(dados);
    
};
