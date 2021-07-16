const express = require("express"); // For making an api
const InitiateMongoServer = require("./db");

InitiateMongoServer();

const app = express();

// PORT either the one in the .env file or 4000
const PORT = process.env.PORT || 4000;

app.use(express.urlencoded({
  extended: true
}));
app.use(express.json());


// initiating the get request 
app.get("/", (req, res) => {
  res.send({ message:"API Still Working Fine (-_-)!" });
});

//Listening to the port
app.listen(PORT, (req, res) => {
  console.log(`Server Started at PORT ${PORT}`);
});