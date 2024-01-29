const CampanhaDAO = require('../DAOs/campanha.dao');
require('dotenv').config();
const token = process.env.TOKEN_CALLIX;
const axios = require("axios");

let dados = [];

module.exports.retornaArrayCampanha = async function (req,res){
      
    const options = {
        method: 'GET',
        url: 'https://groscon.callix.com.br/api/v1/campaigns',
        headers: {
          'Content-Type': 'application/json',
          Authorization: token
        }
    };

    await axios.request(options).then(function (response) {
      //console.log(response.data);
    dados = response.data.data;
      
      
    }).catch(function (error) {
      console.error(error);
    });
    console.log(dados[10]);
    
    res.send(dados);
    
};
