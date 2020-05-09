const express = require('express');
const path = require('path');
const app = express();
const port = process.env.port || 4000;
const indexRout = require('./routs/index');
const profileRout = require('./routs/profile');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const urlMongooseDB = 'mongodb+srv://rmtar:rmtar@cluster0-3kzjk.mongodb.net/ppdb?retryWrites=true&w=majority';


app.use(express.static(path.join(__dirname, 'public')));
app.set('view engine', 'ejs');
app.use(bodyParser.urlencoded({extended: true}));



app.use('/', indexRout);
app.use('/profile', profileRout);


async function start() {
  try {
    await mongoose.connect(urlMongooseDB, {useNewUrlParser: true});

    app.listen(port, () => {
      console.log(`server start on port ${port}`);  
    });
  } catch(e) {
    console.log(`!!!ERR!!! ${e.message}`)
  }

}

start();


