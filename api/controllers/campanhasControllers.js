const CampanhaDAO = require('../DAOs/campanha.dao');
require('dotenv').config();
const http = require("https");
const token = process.env.TOKEN_CALLIX

module.exports.retornaArrayCampanha = async function (req,res){
    
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

      req = http.request(options, function (res1) {
        const chunks = [];
  
        res1.on("data", function (chunk) {
          chunks.push(chunk);
          const body = Buffer.concat(chunks);
          const dados = body.toString();
          const dados1 = JSON.parse(dados);
          console.log(dados1.data[10].id);
          console.log(dados1.data[10].attributes.name);
          
        });
  
        res1.on("end", function () {             
        });
      });
      
      req.end();
      //console.log('res1',res1);
      //console.log('req',req.end());
      
};
