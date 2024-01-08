module.exports = async function(app){
    app.get('/contatosDeCampanha', function(req,res){  
      require('dotenv').config();
      const http = require("https");
      const token = process.env.TOKEN_CALLIX
      var idCampanha = req.headers.id_campanha;
  
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

      console.log(idCampanha);
      console.log(options);
  
      req = http.request(options, function (res) {
        const chunks = [];
  
        res.on("data", function (chunk) {
          chunks.push(chunk);
        });
  
        res.on("end", function () {
          const body = Buffer.concat(chunks);
          console.log(body.toString());
        });
       
      });
      
      req.end();
    });
    };