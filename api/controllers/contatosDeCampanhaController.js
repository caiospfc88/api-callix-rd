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
        },
        transformResponse : [
          function (data) {
            var temp = JSON.parse(data)
            return (temp.data)
              .map(i => ({
                id_cliente : i.id,
                emissao : i.attributes.created_at,
                nome : i.attributes.nome,
                telefone1 : i.attributes["telefone 1"] || '0',
                telefone2 : i.attributes["telefone 2"] || '0',
                telefone3 : i.attributes["telefone 3"] || '0',
                produto : i.attributes.produto,
                email : i.attributes.email,
                aceitou_proposta : i.attributes["aceitou proposta"] || 'null',
                uf : i.attributes.uf || '0',
                status_negociacao : i.attributes["status negociacao"] || 'null'                
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
