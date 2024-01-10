module.exports = async function(app){
  app.get('/chamadasCompletadasCampanha', function(req,res){  
    require('dotenv').config();
    const http = require("https");
    const token = process.env.TOKEN_CALLIX
    var idCampanha = req.query.id;
    let dth_inicial = req.query.dth_inicial;
    let dth_final = req.query.dth_final;

    const options = {
      "method": "GET",
      "hostname": "groscon.callix.com.br",
      "port": null,
      "path": "/api/v1/campaign_completed_calls?filter[started_at]="+dth_inicial+"T00:00:00.000Z,"+dth_final+"T23:59:59.999Z&filter[campaign_id]="+ idCampanha,
      "headers": {
        "Content-Type": "application/json",
        "Authorization": token
      }
    };
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