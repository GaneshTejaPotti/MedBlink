const express = require('express');

// controller functions
const { getaccounts, saveRetailer } = require('../controllers/adminController');

// const requireAuth = require('../middleware/requireAuth');

const router = express.Router();

// login / signup route
router.get('/getaccounts', getaccounts);

router.post('/saveRetailer', saveRetailer);

module.exports = router;
