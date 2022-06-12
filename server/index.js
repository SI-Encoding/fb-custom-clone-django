
const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const app = express();
const db = require('./config/mongodb')
const postRouter = require('./routes/posts-router')

//const { MongoClient } = require('mongodb');
//const uri = "mongodb+srv://<username>:<password>@<your-cluster-url>/sample_airbnb?retryWrites=true&w=majority";

/*var corsOptions = {
    origin: "http://localhost:8080"
  };
  app.use(cors(corsOptions));
  // parse requests of content-type - application/json
  app.use(bodyParser.json());
  // parse requests of content-type - application/x-www-form-urlencoded
  app.use(bodyParser.urlencoded({ extended: true }));*/
  // simple route
  
app.use(bodyParser.urlencoded({ extended: true }))
app.use(cors())
app.use(bodyParser.json())

db.on('error', console.error.bind(console, 'MongoDB connection error:'))


app.get("/", (req, res) => {
  res.send('Hello World!')
});
  
const PORT = process.env.PORT || 8080;

app.use('/api', postRouter)

app.listen(PORT, console.log(`Server started on port ${PORT}`));