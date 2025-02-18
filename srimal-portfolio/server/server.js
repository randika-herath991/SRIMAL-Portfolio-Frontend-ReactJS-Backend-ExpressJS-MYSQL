const express = require("express");
const mysql = require("mysql2");
const bodyParser = require("body-parser");
const cors = require("cors");

const app = express();
const port = 5000;

const db = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "1996",
  database: "portfolio",
});

db.connect((err) => {
  if (err) {
    console.log("Error connecting to database:", err);
    return;
  }
  console.log("Connected to MySQL database.");
});

app.use(cors());

app.use(bodyParser.json());

app.post("/submit-form", (req, res) => {
  const { name, email, message } = req.body;

  const query = "INSERT INTO contact (name, email, message) VALUES (?, ?, ?)";
  db.query(query, [name, email, message], (err, result) => {
    if (err) {
      console.log("Error inserting data:", err);
      res.status(500).send("Error inserting data");
      return;
    }
    res.status(200).send("Message sent successfully!");
  });
});


app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});