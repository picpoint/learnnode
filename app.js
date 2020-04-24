const express = require('express');
const app = express();
const port = process.env.port || 3000;

app.set('view engine', 'ejs');




app.get('/', (req, res) => {
  res.render('index.ejs');
});

app.get('/about', (req, res) => {
  res.render('about.ejs');
});




app.listen(port, () => {
  console.log(`server start on port ${port}`);  
});