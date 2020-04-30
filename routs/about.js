const{Router} = require('express');
const router = Router();


router.get('/', (req, res) => {
	res.render('about.ejs', {
		title: 'About'
	});
});
	


module.exports = router;