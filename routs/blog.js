const {Router} = require('express');
const router = Router();

router.get('/', (req, res) => {
  res.render('blog.ejs', {
    title: 'Blog'
  });
});
  


module.exports = router;