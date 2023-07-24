var express = require('express');
const mongoose = require('mongoose');
var router = express.Router();

 const menuSchema = new mongoose.Schema({
  name: String,
  difficulty: Number,
  description: String,
  price: Number,
  url: String,
});

// from: https://stackoverflow.com/questions/7034848/mongodb-output-id-instead-of-id
menuSchema.virtual('id').get(function(){
  return this._id.toHexString();
});
menuSchema.set('toJSON', {
  virtuals: true,
  transform: function (doc, ret) {   delete ret._id  }
});

const Menu = mongoose.model('Menu', menuSchema);

router.get('/', async (req, res, next) => {
  try {
    const menuItems = await Menu.find().select('_id name url');
    res.json(menuItems);
  } catch (error) {
    res.status(500).json({ message: error });
  }
});

router.get('/:itemId', async (req, res, next) => {
  try {
    const itemId = req.params.itemId;
    const item = await Menu.findById(itemId);
    res.json(item);
  } catch (error) {
    res.status(500).json({ message: error });
  }
});

router.post('/', async (req, res, next) => {
  try {
    const newItem = new Menu(req.body);
    await newItem.save();
    res.send(newItem.id);
  } catch (error) {
    res.status(500).json({ message: error });
  }
});

router.post('/:itemId', async (req, res, next) => {
  try {
    const itemId = req.params.itemId;
    const item = await Menu.findById(itemId);
    item.set(req.body);
    await item.save();
    res.send(itemId);
  } catch (error) {
    res.status(500).json({ message: error });
  }
});

router.delete('/:itemId', async (req, res, next) => {
  try {
    const itemId = req.params.itemId;
    const item = await Menu.findByIdAndDelete(itemId);
    res.json(item);
  } catch (error) {
    res.status(500).json({ message: error });
  }
});

module.exports = router;
