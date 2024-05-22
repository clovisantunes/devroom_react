const http = require('http');
const express = require('express');
const path = require('path');
const app = express();

const port = 21016;
const baseDir = '../www/'

app.use(express.static(path.join(__dirname, `${baseDir}`)));    

app.get('/*', function (req, res) {
  res.sendFile(path.join(__dirname, `${baseDir}`, 'index.html'));
});

app.listen(port);