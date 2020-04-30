const express = require('express');
const path = require('path');
const app = express();
const port = process.env.port || 4000;
const indexRout = require('./routs/index');
const blogRout = require('./routs/blog');
const forumRout = require('./routs/forum');
const contactsRout = require('./routs/contacts');
const aboutRout = require('./routs/about');


app.use(express.static(path.join(__dirname, 'public')));
app.set('view engine', 'ejs');


app.use('/', indexRout);
app.use('/blog', blogRout);
app.use('/forum', forumRout);
app.use('/contacts', contactsRout);
app.use('/about', aboutRout);







app.listen(port, () => {
  console.log(`server start on port ${port}`);  
});