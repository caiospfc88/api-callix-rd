require('dotenv').config();
const token = process.env.TOKEN_CALLIX;
const axios = require("axios");

let dados = [];

module.exports.retornaArrayOperadores = async function (app,req,res){
      
    const options = {
        method: 'GET',
        url: 'https://groscon.callix.com.br/api/v1/users',
        headers: {
          'Content-Type': 'application/json',
          Authorization: token
        },
        transformResponse : [
          function (data) {
            var temp = JSON.parse(data)
            return (temp.data)
              .map(i => ({
                id : i.id,
                nome : i.attributes.name,
                login : i.attributes.login,
                email : i.attributes.email
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
