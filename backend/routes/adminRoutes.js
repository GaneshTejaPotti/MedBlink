const express = require('express');

// controller functions
const { getaccounts } = require('../controllers/adminController');

// const requireAuth = require('../middleware/requireAuth');

const router = express.Router();

// login / signup route
router.get('/getaccounts', getaccounts);

module.exports = router;
