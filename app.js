const express = require('express');
const app = express();
const path = require('path');
const autocannon = require('autocannon');
const port = process.env.port || 3000;

app.set('view engine', 'ejs');
app.use(express.static(path.join(__dirname, 'public')));



app.get('/', (req, res) => {
  res.render('index');
});

app.get('/about', (req, res) => {
  res.render('about');
});




app.listen(port, () => {
  console.log(`server start on port ${port}`);  
});