const{Router} = require('express');
const router = Router();


router.get('/', (req, res) => {
	res.render('profile.ejs', {
			title: 'Pinpoint'
	});
});
	


module.exports = router;