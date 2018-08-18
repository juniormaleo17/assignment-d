let express = require('express');
let router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('content/index', { 
    title: 'Express MALEO' 
  });
});


/* GET about page. */
router.get('/about', function(req, res, next) {
  res.render('content/about', { 
    title: 'About MALEO Express',
    author: 'JUNIOR MIKOLA'
 });
});

/* GET contact page. */
router.get('/contact', function(req, res, next) {
  res.render('content/contact', { 
    title: 'Contact Us',
    authors: ['Bella', 'Maleo', 'Lukaki', 'GUELOR', 'John','herge','minor','Christian','ekofo']
 });
});

module.exports = router;
