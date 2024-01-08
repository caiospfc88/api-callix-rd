module.exports = async function(app){
    app.get('/contatosDeCampanha/:id', function(req,res1){  
      require('dotenv').config();
      const http = require("https");
      const token = process.env.TOKEN_CALLIX
      var idCampanha = req.params.id;
  
      const options = {
        "method": "GET",
        "hostname": "groscon.callix.com.br",
        "port": null,
        "path": "/api/v1/campaign_contacts?filter[campaign_id]="+ idCampanha,
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