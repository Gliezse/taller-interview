const express = require("express");
const cors = require("cors");
const app = express();
const port = 3000;

app.use(cors());

app.get("/", (req, res) => {
  res.send("Hello World!");
});

const transactionData = [];

app.get("/transactions", (req, res) => {
  res.json(transactionData).status(200);
});

app.post("/transactions", express.json(), (req, res) => {
  const transaction = req.body;
  if (!transaction || !transaction.description || !transaction.amount) {
    return res.status(400).json({ error: "Invalid transaction data" });
  }
  transactionData.push(transaction);
  res.status(201).json(transaction);
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
