const express = require('express');
const app = express();
const port = process.env.port || 4000;

app.set('view engine', 'ejs');


app.get('/', (req, res) => {
  res.render('index.ejs', {
    title: 'My home page'
  });
});


app.listen(port, () => {
  console.log(`server start on port ${port}`);
});