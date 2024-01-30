require('dotenv').config();
const token = process.env.TOKEN_CALLIX;
const axios = require("axios");
const { json } = require('body-parser');

let dados = [];

module.exports.retornaArrayCampanha = async function (app,req,res){
      
    const options = {
        method: 'GET',
        url: 'https://groscon.callix.com.br/api/v1/campaigns',
        headers: {
          'Content-Type': 'application/json',
          Authorization: token
        },
        transformResponse : [
          function (data) {
            return JSON.parse(data)
              .map(i => ({
                id : i.id,
                nome : i.attributes.name
              }));           
          }
        ]
    };
    console.log()
    //console.log(options);
    await axios.request(options).then(function (response) {
    console.log(response.data);
    dados = response.data.data;
      
      
    }).catch(function (error) {
      console.error(error);
    });
    //console.log(dados);
    
    res.send(dados);
    
};
