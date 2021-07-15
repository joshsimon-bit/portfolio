'use strict'

const http = require('http') 
const hostname = 'localhost'; 

const port = 3000; 
const express = require('express'); 

const app = express(); 

const es6Renderer = require('express-es6-template-engine'); 
app.engine('html', es6Renderer); 

app.set('views', './views'); 
app.set('view engine', 'html'); 

const server = http.createServer(app); 
server.listen(port, hostname, () => {
    console.log(`Server is running on http://${hostname}:${port}`); }); 

const rootController = require('./routes/index')
const aboutController = require('./routes/aboutme');

app.use('/', rootController);
app.use('/aboutme',aboutController);
