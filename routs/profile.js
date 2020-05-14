const{Router} = require('express');
const router = Router();


router.get('/', (req, res) => {
	res.render('profile.ejs', {
			title: 'Pinpoint'
	});
});
  

router.post('/', (req, res) => {
  req.session.isAuthenticated = true;
});


module.exports = router;