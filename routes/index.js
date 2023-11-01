/* index.js in /routes folder */

var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Home Page' });
});

/* GET home page. */
router.get('/home', function(req, res, next) {
  res.render('index', { title: 'Home Page ' });
});

/* GET about page. */
router.get('/about', function(req, res, next) {
  res.render('#about', { title: 'About Me Page' });
});

/* GET contact page. */
router.get('/contact', function(req, res, next) {
  res.render('#contact', { title: 'Contact Us Page' });
});

/* GET project page. */
router.get('/project', function(req, res, next) {
  res.render('#project', { title: 'Project Page' });
});

module.exports = router;
