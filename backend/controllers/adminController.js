const Retailer = require('../models/retailer');

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

module.exports = { getaccounts };
