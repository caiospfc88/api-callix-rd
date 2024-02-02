require('dotenv').config();
const token = process.env.TOKEN_CALLIX;
const axios = require("axios");

let dados = [];

module.exports.retornaArrayChamadas = async function (app,req,res){
    
      let idCampanha = req.query.id;
      let dti = req.query.dth_inicial;
      let dtf = req.query.dth_final;
  
    const options = {
        method: 'GET',
        url: "https://groscon.callix.com.br/api/v1/campaign_completed_calls?filter[started_at]="+dti+"T00:00:00.000Z,"+dtf+"T23:59:59.999Z&filter[campaign]="+idCampanha,
        headers: {
          "Content-Type": "application/json",
          Authorization: token
        },
        transformResponse : [
          function (data) {
            var temp = JSON.parse(data)
            return (temp.data)
              .map(i => ({
                id_chamada : i.id,
                dth_inicio : i.attributes.started_at,
                dth_fim : i.attributes.ended_at,
                duracao_segundos : i.attributes.duration,
                tel_destino : i.attributes.destination_phone,
                protocolo : i.attributes.protocol,
                id_motivo_desligo : i.attributes.hangup_cause,
                id_campanha : i.relationships.campaign.data.id,
                id_cliente : i.relationships.campaign_contact.data.id,
                id_qualificacao : i.relationships.qualification?.data?.id || '0',
                id_operador : i.relationships.agent.data.id
              }));           
          }
        ]
    };
    await axios.request(options).then(function (response) {
      dados = response.data;   
      }).catch(function (error) {
        console.error(error);
      });
      res.send(dados);
  };
