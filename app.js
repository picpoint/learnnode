const express = require('express');
const path = require('path');
const app = express();
const port = process.env.port || 4000;


app.use(express.static(path.join(__dirname, 'public')));
app.set('view engine', 'ejs');




app.get('/', (req, res) => {  
  res.render('index.ejs', {
    title: 'Главная страница'
  });
});





app.listen(port, () => {
  console.log(`server start on port ${port}`);  
});