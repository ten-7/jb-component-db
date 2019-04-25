const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost:27017/sdc',{useNewUrlParser: true} , (err, res) => {
  if (err) {
    console.log(err);
  } else {
    console.log('we made it')
  }
});

const productSchema = mongoose.Schema({
  _id: Number,
  productId: Number,
  name: String,
  images: String,
  price: Number,
  description: String,
  tag: String
});

const Product = mongoose.model('Product', productSchema);

const save = (newInsert, callback) => {
  const insert = new Product(newInsert);
  insert.save((err, res) => {
    if (err) {
      callback(err)
    } else {
      callback(null, "success");
    }
  })
}

const queryTest = (id, callback) => {
  Product.find({ _id: id},(error, data) => {
    if (error) {
      console.error(error);
      callback(error);
    } else {
      callback(null, data);
    }
  }).explain("executionStats");
}

const getAll = (callback) => {
  Product.find({},['productId','name','images','price','description','tag'],
  {
    skip: 0,
    // limit: 25,
    sort: {
      _id: -1
    }
  }, (err, data) => {
    if (err) {
      callback(err, null);
    } else {
      callback(null,data);
    }
  });
}

module.exports = { save, getAll, queryTest };