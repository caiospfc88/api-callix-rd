
module.exports = async function(app){
  
  app.get('/campanhas', function(req,res1){  
      const campanhaArray = require ('../controllers/campanhas.controllers');  
      require('dotenv').config();
      const http = require("https");
      const token = process.env.TOKEN_CALLIX
       
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
          const arrayCampanha = campanhaArray.retornaArrayCampanha(dados1);
          console.log(dados1.data[10].id);
          console.log(dados1.data[10].attributes.name);
          console.log(arrayCampanha)
          
          
          res1.send(dados1);
        });
        
      });
      req.end();
    });
    };