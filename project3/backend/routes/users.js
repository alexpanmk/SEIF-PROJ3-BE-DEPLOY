var express = require('express');
var userController = require('../controllers/users')

var router = express.Router();


/* GET users listing. */
// router.get('/', function(req, res, next) {
//   res.send('respond with a resource');
// });

router.get("/", userController.getUsers);
router.post("/create-user", userController.createUser); // add this route


module.exports = router;

//to test on postman
// {
//     "first_name": "John",
//     "last_name": "Doe",
//     "username": "john.doe",
//     "email": "johndoe@example.com",
//     "password": "aSecurePassword123"
// }