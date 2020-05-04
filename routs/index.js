const {Router} = require('express');
const router = Router();


router.get('/', (req, res) => {  
	res.render('index.ejs', {
		title: 'Главная страница'
  });  
});


router.post('/', (req, res) => {
  console.log(req.body);
  res.redirect('/');
});



module.exports = router;