const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const retailerSchema = new Schema({
  username: String,
  password: String,
  storeName: String,
  ownerName: String,
  email: String,
  phoneNumber: String,
  address: String,
  city: String,
  accountStatus: Number,
});

module.exports = mongoose.model('Retailer', retailerSchema);
