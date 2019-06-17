const express = require('express');
var bodyParser = require('body-parser');
var app = express();
const AlimentosController = require('../controllers/AlimentosController');

const routes = new express.Router();
app.use(bodyParser.json());
routes.post('/alimentos', AlimentosController.store);


module.exports = routes;