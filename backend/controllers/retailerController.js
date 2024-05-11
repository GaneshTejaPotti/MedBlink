const Retailer = require('../models/retailer');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');

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

const loginRetailer = async (req, res) => {
  try {
    const { retailerId, password } = req.body;

    const retailer = await Retailer.findOne({ retailerId });

    if (!retailer) {
      return res.status(500).send({ error: 'Invalid User' });
    }

    const match = await bcrypt.compare(password, retailer.password);

    if (!match) {
      return res.status(500).send({ error: 'Incorrect password' });
    }

    const token = createToken(retailer._id);

    res.status(200).json({ token: token });
  } catch (error) {
    res.status(500).send(error);
  }
};

module.exports = {
  signupRetailer,
  loginRetailer,
};
