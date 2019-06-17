const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const app = express();

app.use(bodyParser.json({limit: '50mb'}));
app.use(bodyParser.urlencoded({limit: '50mb', extended: true}));

mongoose.connect('mongodb+srv://elida:jcuser@glicontdb-rit0g.mongodb.net/test?retryWrites=true&w=majority', {
    useNewUrlParser: true
});
app.use(bodyParser.json());
app.use(require('./routes'));
app.listen(3333);