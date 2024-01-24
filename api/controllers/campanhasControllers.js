const CampanhaDAO = require('../DAOs/campanha.dao');
require('dotenv').config();
const http = require("https");
const token = process.env.TOKEN_CALLIX;
const axios = require("axios");

module.exports.retornaArrayCampanha = async function (app,req,res1){
      
    const options = {
        method: 'GET',
        url: 'https://groscon.callix.com.br/api/v1/campaigns',
        headers: {
          'Content-Type': 'application/json',
          Authorization: token
        }
    };

    axios.request(options).then(function (response) {
      console.log(response.data);
      console.log(response.data[10].id);
      console.log(response.data[10].attributes.name);
    }).catch(function (error) {
      console.error(error);
    });
};
