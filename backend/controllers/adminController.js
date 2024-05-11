const Retailer = require('../models/retailer');
const bcrypt = require('bcrypt');

const getaccounts = async (req, res) => {
  try {
    // Find retailers with accountStatus 0
    const accounts = await Retailer.find({ accountStatus: 0 });

    // Respond with the found accounts
    res.status(200).json({ accounts: accounts });
  } catch (error) {
    res.status(500).send(error);
  }
};

const saveRetailer = async (req, res) => {
  try {
    const { _id, retailerId, password } = req.body;

    const salt = await bcrypt.genSalt(10);
    const hash = await bcrypt.hash(password, salt);

    const retailer = await Retailer.findOneAndUpdate(
      { _id }, // Find by _id
      { retailerId, password: hash, accountStatus: 1 }, // Update with userId and password
      { upsert: true, new: true } // Upsert if not found, return updated document
    );

    res.status(200).json(retailer);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
};

module.exports = { getaccounts, saveRetailer };
