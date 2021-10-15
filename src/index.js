'use strict'

const express = require("express");
const app = express();
const path = require("path");


app.set('port', 3000);
app.set('views', path.join(__dirname, 'views'));
app.engine('html', require('ejs').renderFile);
app.set('view engine', 'ejs');
app.use(require('./routes'));



app.listen(app.get('port'), () => {
    console.log("listening on port: " + app.get('port'));
})

module.exports = { app };
