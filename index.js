

const express = require('express');

const server = express();

// Query params = ?nome=NodeJS
// Route Params = /curso/2

// localhost:300/curso/2

server.get('/curso/:id', (req, res) => { 
    const id = req.params.id;
    return res.json({curso: `Curso ${id}`});
});

server.listen(3000);