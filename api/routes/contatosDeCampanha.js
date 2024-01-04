module.exports = async function(app){
    app.get('/contatosDeCampanha', function(req,res){  
    const http = require("https");
    const token = process.env.TOKEN_CALLIX
  
      const options = {
        "method": "GET",
        "hostname": "groscon.callix.com.br",
        "port": null,
        "path": "/api/v1/campaign_contacts?filter[campaign_id]=10",
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