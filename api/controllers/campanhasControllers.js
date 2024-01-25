const CampanhaDAO = require('../DAOs/campanha.dao');
require('dotenv').config();
const http = require("https");
const token = process.env.TOKEN_CALLIX;
const axios = require("axios");

let dados = [];

module.exports.retornaArrayCampanha = async function (app,req,res){
      
    const options = {
        method: 'GET',
        url: 'https://groscon.callix.com.br/api/v1/campaigns',
        headers: {
          'Content-Type': 'application/json',
          Authorization: token
        }
    };

    dados = axios.request(options).then(function (response) {
      //console.log(response.data);
      const dados1 = response.data;
      console.log(dados1.data[10].id);
      return dados1.data;
    }).catch(function (error) {
      console.error(error);
    });
    return dados
};
