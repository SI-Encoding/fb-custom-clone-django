
const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const app = express();
const db = require('./config/mongodb')
const postRouter = require('./routes/posts-router')

  
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