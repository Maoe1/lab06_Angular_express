var express = require('express');


var bodyParser = require('body-parser')

var router = express.Router()
;

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});



router.post('/', function(req, res, next){
  console.log(`First Name : ${req.body.firstname}`)
  console.log(`Last Name : ${req.body.lastname}`)
  res.send('POST recieved');
});


router.post('/users', (req, res) => {
  
  const name = req.body.name;
  const email = req.body.email;
  const message = req.body.message;

  console.log('Name:', name);
  console.log('Email:', email);
  console.log('Message:', message);

  // Send response to client
  res.send('Post recieved!');
});

router.use(bodyParser.urlencoded({extended: true}));

module.exports = router;
