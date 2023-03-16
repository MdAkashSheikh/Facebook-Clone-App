const login = require('../controllers/auth');
const register = require('../controllers/auth');
const showData = require('../controllers/auth')
const router = require('express').Router();


router.post('/register', register)
router.get('/showData', showData)
router.post('/login', login)

module.exports = router