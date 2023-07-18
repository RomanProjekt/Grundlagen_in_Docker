'user strict';

const cors = require('cors');
const express = require('express');
const { flaschenpost } = require('flaschenpost');
const http = require('http');

const logger = flaschenpost.getLogger();

const api = express();

api.use(cors());

api.get(`/`, (req, res) => {    
    res.json({
        now: new Date().now()
    });
});

const server = http.createServer(api);
const port = 3_000;

server.listen(port, () => { 
    logger.info('listening on port' +  { port })
});