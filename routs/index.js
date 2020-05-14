const {Router} = require('express');
const router = Router();
const registeredUser = require('../models/modelRegisteredUser');


router.get('/', (req, res) => {    
	res.render('index.ejs', {
    title: 'Главная страница'
  });    
});


router.post('/', (req, res) => {    
  const usrReg = new registeredUser({
    regfirstname: req.body.regfirstname, 
    reglastname: req.body.reglastname, 
    regemail: req.body.regemail,
    reglogin: req.body.reglogin, 
    regpass: req.body.regpass
  });

  try {    
    usrReg.save();
    res.redirect('/');      
  } catch(e) {
    console.log(e.message);
  }    

});



module.exports = router;