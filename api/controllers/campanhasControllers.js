const CampanhaDAO = require('../DAOs/campanha.dao');
require('dotenv').config();
const http = require("https");
const token = process.env.TOKEN_CALLIX

module.exports.retornaArrayCampanha = async function (app,req,res1){
    
      const options = {
        "method": "GET",
        "hostname": "groscon.callix.com.br",
        "port": null,
        "path": "/api/v1/campaigns",
        "headers": {
          "Content-Type": "application/json",
          "Authorization": token
        }
      };

      req = http.request(options, function (res) {
        const chunks = [];
  
        res.on("data", function (chunk) {
          chunks.push(chunk);
        });
  
        res.on("end", function () {
          const body = Buffer.concat(chunks);
          const dados = body.toString();
          const dados1 = JSON.parse(dados);
          console.log(dados1.data[10].id);
          console.log(dados1.data[10].attributes.name);
          //console.log(res);    
          //res.send(dados1);
          return dados1
        });
      });
      req.end();
      console.log('res1',res1);
};
