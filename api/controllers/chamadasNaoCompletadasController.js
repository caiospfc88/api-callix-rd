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
        url: "https://groscon.callix.com.br/api/v1/campaign_missed_calls?filter[started_at]="+dti+"T00:00:00.000Z,"+dtf+"T23:59:59.999Z&filter[campaign]="+idCampanha,
        headers: {
          "Content-Type": "application/json",
          Authorization: token
        },
        transformResponse : [
          function (data) {
            var temp = JSON.parse(data)
            return (temp.data)
              .map(i => ({
                id_tentativa : i.id,
                dth_inicio : i.attributes.started_at,
                dth_fim : i.attributes.ended_at,
                duracao_segundos : i.attributes.duration,
                tel_destino : i.attributes.destination_phone,
                id_falha : i.attributes.failure_cause,
                id_campanha : i.relationships.campaign.data.id,
                id_cliente : i.relationships.campaign_contact.data.id
              }));           
          }
        ]
      };
     
    console.log(options)
    await axios.request(options).then(function (response) {
      dados = response.data;   
      //console.log(dados.data[1].relationships.qualification.data.id);
      }).catch(function (error) {
        console.error(error);
      });
      //console.log(dados);
      res.send(dados);
    
};
