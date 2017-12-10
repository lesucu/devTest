var express = require('express');
var router = express.Router();

/*db Section*/
var mysql_dbc = require('../db/db_con')();
var connection = mysql_dbc.init();
mysql_dbc.test_open(connection);

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});


router.get('/detail', function(req, res, next) {
  res.render('detail', { title: 'Express' });
});

router.get('/favorites', function(req, res, next) {
  res.render('favorites', { title: 'Express', gab:4});
});

/*create*/
var bar = ['결제방법','기본정보','기본정보','부가정보','일정','소개글','장소등록','사진'];
router.get('/create', function(req, res, next) {
  res.render('create', { title: 'Express',bar:bar });
});

router.get('/mypage', function(req, res, next) {
  res.render('mypage', { title: 'MyPage' });
});

module.exports = router;
