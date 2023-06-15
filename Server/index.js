const express = require("express");
const fs = require("fs");
const path = require("path");

const app = express();
const port = 8000;

const theModel = path.join(__dirname, 'model.json');
const bin1 = path.join(__dirname, 'group1-shard1of3.bin');
const bin2 = path.join(__dirname, 'group1-shard2of3.bin');
const bin3 = path.join(__dirname, 'group1-shard3of3.bin');

app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', 'http://localhost:3000');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE');
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization');
    next();
  });

app.get('/', (req, res)=>{
    var readable = fs.createReadStream(theModel)
    readable.pipe(res)
});

app.get('/group1-shard1of3.bin', (req, res)=>{
    var readable1 = fs.createReadStream(bin1)
    readable1.pipe(res)
});

app.get('/group1-shard2of3.bin', (req, res)=>{
    var readable2 = fs.createReadStream(bin2)
    readable2.pipe(res)
});

app.get('/group1-shard3of3.bin', (req, res)=>{
    var readable3 = fs.createReadStream(bin3)
    readable3.pipe(res)
});

app.listen(port, ()=>{
    console.log(`Listening on port ${port}`)
});