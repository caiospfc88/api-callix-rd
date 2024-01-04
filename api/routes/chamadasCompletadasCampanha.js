module.exports = async function(app){
  app.get('/chamadasCompletadasCampanha', function(req,res){  
    require('dotenv').config();
    const http = require("https");
    const token = process.env.TOKEN_CALLIX
    const options = {
      "method": "GET",
      "hostname": "groscon.callix.com.br",
      "port": null,
      "path": "/api/v1/campaign_completed_calls?filter[started_at]=2023-12-21T00:00:00.000Z,2023-12-21T23:59:59.999Z",
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
        console.log(body.toString());
      });
    });

    req.end();
  });
  };