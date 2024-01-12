module.exports = async function(app){
    app.get('/qualificacoes', function(req,res1){  
      require('dotenv').config();
      const http = require("https");
      const token = process.env.TOKEN_CALLIX
       
      const options = {
        "method": "GET",
        "hostname": "groscon.callix.com.br",
        "port": null,
        "path": "/api/v1/qualifications",
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
          res1.send(dados);
        });
        
      });
      req.end();
    });
    };