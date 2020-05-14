const express = require('express');
const path = require('path');
const app = express();
const session = require('express-session');
const port = process.env.port || 4000;
const indexRout = require('./routs/index');
const profileRout = require('./routs/profile');
const errRout = require('./routs/err');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const modelRegisteredUser = require('./models/modelRegisteredUser');
const urlMongooseDB = 'mongodb+srv://rmtar:rmtar@cluster0-3kzjk.mongodb.net/ppdb?retryWrites=true&w=majority';
const varMiddleware = require('./middleware/variables');


app.use(express.static(path.join(__dirname, 'public')));
app.set('view engine', 'ejs');
app.use(bodyParser.urlencoded({extended: true}));
app.use(session({
  secret: 'some value',
  resave: false,
  saveUninitialized: false
}));
app.use(varMiddleware);



app.use('/', indexRout);
app.use('/profile', profileRout);
app.use('/err', errRout);


async function start() {
  try {
    await mongoose.connect(urlMongooseDB, {
      useNewUrlParser: true,
      useFindAndModify: false,
      useUnifiedTopology: true
    });
    app.listen(port, () => {
      console.log(`server start on port ${port}`);  
    });
  } catch(e) {
    console.log(`!!!ERR!!! ${e.message}`)
  }

}

start();


