const express=require('express');
const mongoose = require("mongoose");
const path = require('path');
const logger = require("morgan");
const Workout=require("./models/Workout.js")
// const db = require("./models");

const PORT = process.env.PORT || 3000;

const app= express();

app.use(logger("dev"));

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(express.static("public"));

mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/tracker", {
  useNewUrlParser: true,
  useFindAndModify: false
});


//html routes
app.get('/', async (req, res) => {
	res.sendFile(path.join(__dirname, './public/index.html'))
	
});

app.get('/exercise', async (req, res) => {
	res.sendFile(path.join(__dirname, './public/exercise.html'))
	
});

app.get('/stats', async (req, res) => {
	res.sendFile(path.join(__dirname, './public/stats.html'))
	
});

// api routes
app.use(require("./routes/api.js"));


app.listen(PORT, () => {
    console.log(`App running on port ${PORT}!`);
  });