require('dotenv').config();
const token = process.env.TOKEN_CALLIX;
const axios = require("axios");

let dados = [];

module.exports.retornaArrayContatos = async function (app,req,res){
    
    let idCampanha = req.params.id;

    const options = {
        method: 'GET',
        url: 'https://groscon.callix.com.br//api/v1/campaign_contacts?filter[campaign_id]='+ idCampanha,
        headers: {
          'Content-Type': 'application/json',
          Authorization: token
        }/*,
        transformResponse : [
          function (data) {
            var temp = JSON.parse(data)
            return (temp.data)
              .map(i => ({
                id_cliente : i.id,
                emissao : i.attributes.created_at,
                nome : i.attributes.nome,
                telefone1 : i.attributes.telefone1,
                protocolo : i.attributes.protocol,
                id_motivo_desligo : i.attributes.hangup_cause,
                id_campanha : i.relationships.campaign.data.id,
                id_cliente : i.relationships.campaign_contact.data.id,
                id_qualificacao : i.relationships.qualification?.data?.id || '0',
                id_operador : i.relationships.agent.data.id
              }));           
          }
        ]*/
    };
    console.log()
    //console.log(options);
    await axios.request(options).then(function (response) {
    console.log(response.data);
    dados = response.data;
    console.log(dados.data[1].attributes)   
    }).catch(function (error) {
      console.error(error);
    });
    //console.log(dados);
    res.send(dados);
};
