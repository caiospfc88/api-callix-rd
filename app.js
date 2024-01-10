const express = require('express');
const bodyParser = require('body-parser');
const consign = require('consign');

const app = express();

app.listen(3000,function(){
    console.log('App online');
}),

app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

consign()
	.include('api/routes')
	.then('api/controllers')
	.into(app);

module.exports = app;