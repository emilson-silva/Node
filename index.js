const express = require('express');

const server = express();

// Query params = ?nome=NodeJS
// Route Params = /curso/2

// localhost:300/curso
server.get('/curso', (req, res) => { 
    return res.json({curso: 'Node Js'});
});

server.listen(300);