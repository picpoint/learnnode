const {Router} = require('express');
const router = Router();
const registeredUser = require('../models/modelRegisteredUser');


router.get('/', (req, res) => {  
  const onRegUsers = registeredUser.findOne({reglogin: "rmtar"});
  console.log(onRegUsers);


	res.render('index.ejs', {
    title: 'Главная страница'    
  });    
});


router.post('/', (req, res) => {
  console.log(req.body);  
  
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