const express = require('express');

// controller functions
const {
  signupRetailer,
  loginRetailer,
} = require('../controllers/retailerController');

// const requireAuth = require('../middleware/requireAuth');

const router = express.Router();

// login / signup route
router.post('/signup', signupRetailer);
router.post('/login', loginRetailer);

module.exports = router;
