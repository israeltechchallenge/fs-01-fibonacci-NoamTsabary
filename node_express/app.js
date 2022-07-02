const express = require("express");
const app = express();
const cors = require("cors");
const path = require("path");
app.use(express.static(path.join(__dirname,'..', '..', 'fs-01-fibonacci-NoamTsabary')));

console.log(__dirname);

var MongoClient = require('mongodb').MongoClient;
var url = "mongodb://localhost:27017/";
app.use(cors());

MongoClient.connect(url, function(err, db) {
    if (err) throw err;
    var dbo = db.db("mydb");

    const forLoop = (n) => {
        let fibIndex = [0, 1];
        for (let i = 2; i <= n; i++) {
            fibIndex[i] = fibIndex[i - 2] + fibIndex[i - 1];
        }
        return fibIndex[n];
    };

    app.get("/fibonacci/:number", async (req, res) => {
        const number = +req.params.number;
        const result = forLoop(number);
        const obj = { number, result, createdDate: Date.now() }
        res.send(obj);
        dbo.collection("test").insertOne(obj, function(err, res) {
            if (err) throw err;
        });
        
    });

    app.get("/getFibonacciResults", async (req, res) => {
        dbo.collection("test").find({}).toArray(function(err, result) {
            if (err) throw err;
            res.send(result);
          });
    });
});

const port = 3000;
app.listen(port, () => 
console.log( `server listening on port ${port}...`)
);