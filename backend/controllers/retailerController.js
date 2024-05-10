const Retailer = require('../models/retailer');
const jwt = require('jsonwebtoken');

const createToken = (_id) => {
  return jwt.sign({ _id }, process.env.SECRET, { expiresIn: '3d' });
};

// signup user
const signupRetailer = async (req, res) => {
  try {
    const { data } = req.body;

    console.log(data);

    const newRetailer = new Retailer({
      storeName: data.storeName,
      ownerName: data.ownerName,
      email: data.email,
      phoneNumber: data.phoneNumber,
      address: data.address,
      city: data.city,
      accountStatus: 0,
    });

    newRetailer.save();

    res.status(201).send({ message: 'Retailer saved successfully' });
  } catch (err) {
    res.status(500).send(err);
  }
};

const loginRetailer = async (req, res) => {};

module.exports = {
  signupRetailer,
  loginRetailer,
};
