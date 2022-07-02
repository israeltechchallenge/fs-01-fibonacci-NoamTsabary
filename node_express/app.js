const express = require("express");
const app = express();
const cors = require("cors");

app.use(cors());

resultsArray = [];

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
    resultsArray.push(obj);
    res.send(obj);

});

app.get("/getFibonacciResults", async (req, res) => {
        res.send(resultsArray);
});

const port = 3000;
app.listen(port, () => `server listening on port ${port}...`)