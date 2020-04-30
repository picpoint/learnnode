const{Router} = require('express');
const router = Router();


router.get('/', (req, res) => {
	res.render('forum.ejs', {
			title: 'Forum'
	});
});
	


module.exports = router;