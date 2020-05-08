const {Router} = require('express');
const router = Router();
const UsersReg = require('../models/modelreg');


router.get('/', (req, res) => {  
	res.render('index.ejs', {
		title: 'Главная страница'
  });  
});


router.post('/', (req, res) => {
  console.log(req.body);
  
  const usrReg = new UsersReg({
    regfirstname: req.body.regfirstname, 
    reglastname: req.body.reglastname, 
    reglogin: req.body.reglogin, 
    regpass: req.body.regpass
  });

  
  try{
    usrReg.save();
    res.redirect('/');
  } catch(e) {
    console.log(e.message);
  } 

  
});



module.exports = router;